<template>
<v-container>
 <v-row>
  <v-col v-for="user in users" :key="user.login.uuid" cols="3">
    <v-hover>
    <template v-slot:default="{ hover }">
      <v-card class="mb-1" height="310" @click="navigateToUserDetails()" :elevation="hover ? 10 : 2"
      :style="{ transition: 'box-shadow 0.3s ease-in-out' }">
        <img
          :src="user.picture.medium"
          :alt="`${user.name.first} ${user.name.last}`"
          style="object-fit: cover; width: 100%; height: 60%;"
        />
      
        <v-card-title>
          <h3 class="font-bold">{{ user.name.first }} {{ user.name.last }}</h3>
        </v-card-title>

        <v-card-subtitle class="mt-1">
          <p class="mb-4">
            <v-icon dark left color="#00000099"> mdi-email </v-icon>
            {{ user.email }}
          </p>
        </v-card-subtitle>
      </v-card>
    </template>
  </v-hover>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
import { defineProps } from "vue";
import { useFetch } from '@vueuse/core';


export default {
  props: {
    users: {
      required: true,
      type: Array,
    },
  },
   methods: {
    navigateToUserDetails() {
      this.$router.push({ name: "user-details"});
    },
  },
};
</script>
