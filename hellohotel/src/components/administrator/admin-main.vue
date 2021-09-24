<template>
  <v-app>
    <v-app-bar app color="black green--text">
      <v-app-bar-title>
        <!--<span class="display-1">Hello Hotel</span>-->

      </v-app-bar-title>
      <v-btn plain to="/home" color="green" class="display-1">Hello Hotel</v-btn>
      <v-spacer></v-spacer>
      <v-btn plain to="/administrator" color="blue">Administrator</v-btn>
      <v-btn plain to="/about" color="white">About</v-btn>

    </v-app-bar>

    <v-container fluid>
      <v-col cols="12" md="5"><h1>Welcome back, ¿Que desea hacer?</h1></v-col>
      <v-divider class="mx-4" inset vertical></v-divider>
      <v-layout row wrap>
        <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
        >
          <v-card
              width="200"
              height="200"
              :to="card.path"
          >
            <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                width="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "main",
  data: () => ({
    cards: [
      { title: 'Register', src: require('@/assets/img/register.jpg'), flex: 2, path: '/home' },
      { title: 'Rooms', src: require('@/assets/img/rooms.jpg'), flex: 2, path: '/admin-rooms'},
      { title: 'Inventory', src: require('@/assets/img/inventory.png'), flex: 2 },
      { title: 'Client', src: require('@/assets/img/client.jpg'), flex: 2 },
      { title: 'Schedule', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 2 },
      { title: 'Staff', src: require('@/assets/img/staff.jpg'), flex: 2 },
      { title: 'Costs', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 2 },
      { title: 'Feedback', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 2 },
      { title: 'Publicity', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 2 },
    ],
  })
}
</script>

<style scoped>

</style>