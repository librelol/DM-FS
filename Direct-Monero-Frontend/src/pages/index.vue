<template>
  <v-app>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" md="8" lg="6">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark>
              <v-toolbar-title>Direct Monero</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <p>Trade monero directly, using PGP for communication. On an open source platform!</p>
              <p>As of now we do use Vercel and Cloudflare, this is subject to change.</p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="goToLogin">Login</v-btn>
              <v-btn color="secondary" @click="goToSignup">Sign Up</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
const goToLogin = () => {
  window.location.href = '/login'; // Redirect to login page
};

const goToSignup = () => {
  window.location.href = '/register'; // Redirect to signup page
};
</script>

<style scoped>
.fill-height {
  height: 100vh;
}
</style>
