<template>
    <v-container class="not-found">
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title>
                        Page Not Found
                    </v-card-title>
                    <v-card-text>
                        Sorry, the page you are looking for does not exist. Please check the URL or return to the homepage.
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" @click="goHome">Go to Homepage</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'NotFound',
    methods: {
        goHome() {
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
.not-found {
    padding: 20px;
    text-align: center;
}

.v-card-title {
    font-size: 2em;
    margin-bottom: 10px;
}

.v-card-text {
    font-size: 1.2em;
}

.v-btn {
    margin-top: 20px;
}
</style>