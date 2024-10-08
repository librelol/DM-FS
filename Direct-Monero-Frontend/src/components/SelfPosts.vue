<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-data-table :headers="headers" :items="posts" class="elevation-1">
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>My Posts</v-toolbar-title>

                <v-spacer></v-spacer>
                <v-btn color="primary" @click="fetchPosts">Refresh</v-btn>
              </v-toolbar>
            </template>
          </v-data-table>
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
        posts: [],
        headers: [
          { text: 'Title', value: 'title', align: 'start', sortable: true, width: '15%' }, // The title of the post
          { text: 'Description', value: 'productDescription', align: 'start', sortable: true, width: '25%' }, // A brief description of the product
          { text: 'Price', value: 'price', align: 'end', sortable: true, width: '10%' }, // The price of the product
          { text: 'Amount Per Price', value: 'amountPerPrice', align: 'end', sortable: true, width: '10%' }, // The amount of product available per unit price
          { text: 'Unit Amount', value: 'unitAmount', align: 'end', sortable: true, width: '10%' }, // The total amount of the product
          { text: 'On Sale', value: 'onSale', align: 'center', sortable: true, width: '10%' }, // A boolean indicating whether the product is currently on sale
          { text: 'Created At', value: 'createdAt', align: 'end', sortable: true, width: '20%' }, // The date and time when the post was created
        ],
      };
    },
    methods: {
      async fetchPosts() {
        const token = localStorage.getItem('token');
        try {
          const response = await axios.get(`${apiUrl}/api/post/my_posts`, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
          this.posts = response.data;
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      },
    },
    created() {
      this.fetchPosts();
    },
  };
  </script>
  
  <style scoped>
  /* Add any scoped styles here */
  </style>