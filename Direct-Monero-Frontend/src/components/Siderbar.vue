<template>
  <v-navigation-drawer app>
    <template v-slot:prepend>
      <div class="pa-2">
        <h3 class="title">Direct Monero</h3>
        <p class="subtitle">Trade monero with real people</p>
      </div>
    </template>

    <v-list>
      <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        @click="navigateTo(item.route)"
      >
        <v-list-item-title>
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block class="bg-deep-purple" v-if="hasToken" @click="logout">Logout</v-btn>
        <v-btn block class="bg-deep-purple" v-else @click="login">Login</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { title: 'Dashboard', route: '/dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Buy Monero', route: '/buy', icon: 'mdi-currency-usd' },
        { title: 'Post Listing', route: '/postlisting', icon: 'mdi-plus' },
        { title: 'My Listings', route: '/myposts', icon: 'mdi-format-list-bulleted' },
        { title: 'Settings', route: '/settings', icon: 'mdi-gavel' },
      ],
    };
  },
  computed: {
    hasToken() {
      return !!localStorage.getItem('token'); // Check if token exists in localStorage
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    logout() {
      // Add your logout logic here
      localStorage.removeItem('token'); // Remove token from localStorage
      this.$router.push('/login'); // Redirect to login page
    },
    login() {
      // Add your login logic here
      this.$router.push('/login'); // Redirect to login page
    }
  }
};
</script>

<style scoped>
.bg-deep-purple {
  background-color: #673ab7 !important;
}
.title {
  font-size: 1.25rem;
  font-weight: bold;
}
.subtitle {
  font-size: 1rem;
  color: #757575;
}
</style>