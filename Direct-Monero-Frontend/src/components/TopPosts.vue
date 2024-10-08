<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-data-table :headers="headers" :items="posts" class="elevation-1">
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Top Posts</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="fetchTopPosts">Refresh</v-btn>
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
          { text: 'Title', value: 'title', align: 'start', sortable: true, width: '15%' },
          { text: 'Description', value: 'productDescription', align: 'start', sortable: true, width: '25%' },
          { text: 'Price', value: 'price', align: 'end', sortable: true, width: '10%' },
          { text: 'Amount Per Price', value: 'amountPerPrice', align: 'end', sortable: true, width: '10%' },
          { text: 'Unit Amount', value: 'unitAmount', align: 'end', sortable: true, width: '10%' },
          { text: 'On Sale', value: 'onSale', align: 'center', sortable: true, width: '10%' },
          { text: 'Created At', value: 'createdAt', align: 'end', sortable: true, width: '20%' },
          { text: 'Combined Reputation', value: 'combinedReputation', align: 'end', sortable: true, width: '20%' },
        ],
      };
    },
    methods: {
      async fetchTopPosts() {
        const token = localStorage.getItem('token');
        try {
          const response = await axios.get(`${apiUrl}/api/post/top-posts`, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
          this.posts = response.data;
        } catch (error) {
          console.error('Error fetching top posts:', error);
        }
      },
    },
    created() {
      this.fetchTopPosts();
    },
  };
  </script>
  
  <style scoped>
  /* Add any scoped styles here */
  </style>