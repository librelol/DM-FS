<template>
    <v-app>

      <v-content>
        <v-container>
          <v-row>
            <v-col>
              <v-card>
                <v-card-title>
                  <span class="headline">Welcome, {{ displayname }}</span>
                </v-card-title>
                <v-card-text>
                  <p>This is your dashboard.</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        displayname: '', // To hold the logged-in user's username
      };
    },
    mounted() {
      this.fetchUsername(); // Fetch username when component is mounted
    },
    methods: {
      async fetchUsername() {
        try {
          const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
          const apiUrl = import.meta.env.VITE_API_URL; 
          const response = await fetch(`${apiUrl}/api/profile/me`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`, // Attach token to the request
              'Content-Type': 'application/json',
            },
          });
  
          if (!response.ok) {
            throw new Error('Failed to fetch username');
          }
  
          const data = await response.json();
          this.displayname = data.displayName; // Store username in data
        } catch (error) {
          console.error('Error fetching username:', error);
          this.displayname = 'Guest (Failed to get displayname set on in settings)'; // Fallback if there's an error
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .fill-height {
    height: 100vh;
  }
  </style>
  