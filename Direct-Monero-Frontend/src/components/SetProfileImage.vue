<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <v-card class="elevation-12">
            <v-card-title>
              <span class="headline">Upload Profile Photo</span>
            </v-card-title>
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-file-input
                  v-model="profileImage"
                  :rules="profileImageRules"
                  label="Profile Image"
                  accept="image/*"
                  prepend-icon="mdi-camera"
                  required
                ></v-file-input>
  
                <v-alert v-if="error" type="error" dismissible>
                  {{ error }}
                </v-alert>
                <v-alert v-if="success" type="success" dismissible>
                  {{ success }}
                </v-alert>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn :disabled="!valid" color="primary" @click="uploadProfileImage">Upload</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const profileImage = ref(null);
  const success = ref('');
  const error = ref('');
  const valid = ref(false);
  
  const profileImageRules = [
    v => !!v || 'Profile Image is required.',
  ];
  
  // Function to handle profile image upload
  const uploadProfileImage = async () => {
    const token = localStorage.getItem('token'); // Retrieve token from local storage
    const apiUrl = import.meta.env.VITE_API_URL; // Retrieve API URL from environment variables
    const formData = new FormData();
    formData.append('profileImage', profileImage.value);
  
    try {
      const response = await fetch(`${apiUrl}/api/profile/profile_image`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`, // Attach token to request
        },
        body: formData,
      });
  
      if (response.ok) {
        const data = await response.json();
        success.value = 'Profile image uploaded successfully!';
        error.value = '';
        profileImage.value = null;
      } else {
        const data = await response.json();
        error.value = data.message || 'An error occurred while uploading the profile image.';
        success.value = '';
      }
    } catch (err) {
      error.value = 'An error occurred while uploading the profile image.';
      success.value = '';
    }
  };
  </script>
  
  <style scoped>
  </style>