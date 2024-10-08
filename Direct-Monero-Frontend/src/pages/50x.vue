<template>
    <v-container class="error-page">
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title>
                        50x Error
                    </v-card-title>
                    <v-card-text>
                        Oops! Something went wrong on our end. Please try again later.
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

</script>

<style scoped>
.error-page {
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
</style>