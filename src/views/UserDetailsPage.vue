<template>
  <v-container>
    <v-row justify="center" align="center">
      
        <v-col cols="7">
          <router-link  to="/">
            <v-btn class="elevation-0 transparent ">
              <v-icon left>
                mdi-arrow-left
              </v-icon>
              Go back to contact list
            </v-btn>
          </router-link>
        </v-col>
        <v-col cols="7">
          <v-card height="320">
            <v-row>
            
              <v-col class="mt-10 mx-3" cols="4">
             
                <v-img :src="user?.picture?.medium || ''" alt="User Image" />
              </v-col>
              <v-col cols="7">
               <v-row >
            <div style="font-size: 34px">{{ user?.name?.first || '' }} {{ user?.name?.last || '' }}</div>
            </v-row>
           
              <v-card-text>
              <v-row class="my-n2">
              <v-col cols="3" class="mt-2">
               <v-icon left>mdi-phone</v-icon>
               </v-col>
               <v-col cols="6">
                  <p color="#00000099">Phone
                  <br>{{ user?.phone || '' }}
                  </p>
               </v-col>
                
                </v-row>

                 <v-row class="my-n5" >
              <v-col cols="3" class="mt-2">
               <v-icon left>mdi-cake</v-icon>
               </v-col>
               <v-col cols="6">
                  <p>Birth Date
                  <br>{{  formatDate(user?.dob?.date || '') }}
                  </p>
               </v-col>
                
                </v-row  >
                   <v-row class="my-n3">
              <v-col cols="3" class="mt-2">
               <v-icon left>mdi-card-account-details</v-icon>
               </v-col>
               <v-col cols="6">
                  <p>Social Number
                  <br>{{  user?.id?.value || '' }}
                  </p>
               </v-col>
                </v-row>
              <v-row class="my-n3">
              <v-col cols="3" class="mt-2">
               <v-icon left>mdi-earth</v-icon>
               </v-col>
               <v-col cols="6">
                  <p>Country
                  <br>{{  user?.location?.country || '' }}
                  </p>
               </v-col>
                </v-row>
              </v-card-text>
                
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      
    </v-row>
  </v-container>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useFetch } from "@vueuse/core";

const user = ref({});

async function fetchData() {
  const { isFetching, error, data } = await useFetch(
    "https://randomuser.me/api/"
  );

    const results = JSON.parse(data.value)?.results;
    if (results && results.length > 0) {
      user.value = results[0];
    }
  
}

fetchData();
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

</script>






