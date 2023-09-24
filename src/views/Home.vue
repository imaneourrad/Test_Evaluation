<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="6">
          <div style="font-size: 34px">100 Contact(s)</div>
        </v-col>

        <v-col cols="6">
          <div class="d-flex justify-end align-center">
            <v-text-field
              prepend-inner-icon="mdi-magnify"
              v-model="searchText"
              label="Search..."
              outlined
              hide-details
            >
            </v-text-field>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <AllUsers :users="users" />
  </div>
</template>

<script setup>
import AllUsers from "@/components/AllUsers.vue";
import { ref } from "vue";
import { useFetch } from "@vueuse/core";

const users = ref([]);
const searchText = ref('');

async function fetchData() {
  const { isFetching, error, data } = await useFetch(
    "https://randomuser.me/api/?results=100"
  );
    const results = JSON.parse(data.value)?.results;
    if (results) {
      users.value = results;
    }
  
}

fetchData();
</script>



