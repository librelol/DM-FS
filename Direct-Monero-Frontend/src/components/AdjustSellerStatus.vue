<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card class="elevation-12">
          <v-card-title>
            <span class="headline">Adjust Seller Status</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-autocomplete
                v-model="selectedUser"
                :items="users"
                item-text="name"
                item-value="_id"
                :rules="[v => !!v || 'User is required.']"
                label="Select User"
                required
              ></v-autocomplete>

              <v-switch
                v-model="isSeller"
                label="Is Seller"
              ></v-switch>

              <v-alert v-if="error" type="error" dismissible>
                {{ error }}
              </v-alert>
              <v-alert v-if="success" type="success" dismissible>
                {{ success }}
              </v-alert>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn :disabled="!valid" color="primary" @click="adjustSellerStatus">Update Status</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const selectedUser = ref(null);
const isSeller = ref(false);
const users = ref([]);
const success = ref('');
const error = ref('');
const valid = ref(false);

const fetchUsers = async () => {
  const token = localStorage.getItem('token');
  const apiUrl = import.meta.env.VITE_API_URL;
  try {
    const response = await axios.get(`${apiUrl}/api/admin/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    users.value = response.data;
  } catch (err) {
    console.error('Error fetching users:', err);
    error.value = 'Failed to fetch users. Please try again later.';
  }
};

const adjustSellerStatus = async () => {
  const token = localStorage.getItem('token');
  const apiUrl = import.meta.env.VITE_API_URL;
  try {
    const response = await axios.put(
      `${apiUrl}/api/admin/adjust_seller/${selectedUser.value}`,
      { isSeller: isSeller.value },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.status === 200) {
      success.value = 'User seller status updated successfully!';
      error.value = '';
      selectedUser.value = null;
      isSeller.value = false;
      fetchUsers(); // Refresh the user list
    } else {
      error.value = response.data.message || 'An error occurred while updating the seller status.';
      success.value = '';
    }
  } catch (err) {
    error.value = err.response.data.message || 'An error occurred while updating the seller status.';
    success.value = '';
  }
};

onMounted(fetchUsers);
</script>

<style scoped>
</style>