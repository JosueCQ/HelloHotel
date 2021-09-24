<template>
  <v-app>
    <v-app-bar app color="black green--text">

      <!--logo/redirect to home-->
      <v-card color="black" to="/home">
        <v-img max-height="50"
               max-width="50"
               src="@/assets/HelloHotel.png"></v-img>

      </v-card>
      <!--name of the session-->
      <v-app-bar-title>
        <v-divider inset vertical class="mx-1"></v-divider>
        <span class="display-1">ROOMS</span>
      </v-app-bar-title>

      <v-spacer></v-spacer>
      <v-btn plain to="/administrator" color="blue">Administrator</v-btn>

    </v-app-bar>
    <v-navigation-drawer>

      <v-layout row wrap>
        <v-col
            v-for="card in cards"
            :key="card.title"
        >
          <v-card
              :color="card.color"
              height="80"
              width="230"
          >
            <v-img
                :src="card.src"
                class="white--text align-lg-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="70"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>


          </v-card>
        </v-col>
      </v-layout>
    </v-navigation-drawer>

  </v-app>
</template>

<script>
export default {
  name: "admin-rooms",

  data: () => ({
    cards: [
      { title: 'Register', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/register.jpg') },
      { title: 'Rooms', color: 'rgba(63, 103, 250, 0.6)', src: require('@/assets/img/rooms.jpg')},
      { title: 'Inventory', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/inventory.png') },
      { title: 'Client', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/client.jpg') },
      { title: 'Schedule', color: 'rgba(63, 103, 250, 0.3)' },
      { title: 'Staff', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/staff.jpg')},
      { title: 'Costs', color: 'rgba(63, 103, 250, 0.3)' },
      { title: 'Feedback', color: 'rgba(63, 103, 250, 0.3)' },
      { title: 'Publicity', color: 'rgba(63, 103, 250, 0.3)' },
    ],
  })
}
</script>

<style scoped>

</style>