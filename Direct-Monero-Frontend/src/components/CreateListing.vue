<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card class="elevation-12">
          <v-card-title>
            <span class="headline">Post Listing</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="post.title"
                :rules="[rules.required]"
                label="Title"
                required
              ></v-text-field>
              <v-text-field
                v-model="post.productDescription"
                :rules="[rules.required]"
                label="Product Description"
                required
              ></v-text-field>
              <v-text-field
                v-model="post.price"
                :rules="[rules.required, rules.number]"
                label="Price"
                required
              ></v-text-field>
              <v-text-field
                v-model="post.amountPerPrice"
                :rules="[rules.required, rules.number]"
                label="Amount Per Price"
                required
              ></v-text-field>
              <v-text-field
                v-model="post.unitAmount"
                :rules="[rules.required, rules.number]"
                label="Unit Amount"
                required
              ></v-text-field>
              <v-switch
                v-model="post.onSale"
                label="On Sale"
              ></v-switch>
              <v-btn :disabled="!valid" color="primary" @click="submitForm">
                Create Post
              </v-btn>
              <v-alert v-if="error" type="error">{{ error }}</v-alert>
              <v-alert v-if="success" type="success">{{ success }}</v-alert>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export default {
  data() {
    return {
      valid: false,
      post: {
        title: '',
        productDescription: '',
        price: '',
        amountPerPrice: '',
        unitAmount: '',
        onSale: false,
      },
      rules: {
        required: value => !!value || 'Required.',
        number: value => !isNaN(value) || 'Must be a number.',
      },
      success: '',
      error: '',
    };
  },
  methods: {
    async submitForm() {
      if (this.$refs.form.validate()) {
        const token = localStorage.getItem('token');
        try {
          const response = await axios.post(
            `${apiUrl}/api/post/create_post`,
            this.post,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
            }
          );
          this.success = 'Post created successfully!';
          this.error = '';
          console.log(response.data);
        } catch (error) {
          this.error = error.response ? error.response.data.message : 'An error occurred';
          this.success = '';
          console.error(error);
        }
      }
    },
  },
};
</script>