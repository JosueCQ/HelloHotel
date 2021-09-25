<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" clipped permanent>
      <!-- Format for the card of every btn/picture-->
      <v-layout wrap>
        <v-col
            v-for="card in cards"
            :key="card.title"
        >
          <v-card
              :color="card.color"
              height="80"
              width="230"
              :to="card.path"
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
    <v-app-bar app color="rgba(63, 103, 250, 1)" clipped-left>

      <!--logo/redirect to home-->
      <v-card flat color="rgba(63, 103, 250, 1)" to="/home">
        <v-img max-height="50"
               max-width="50"
               src="@/assets/HelloHotel_logo_blue.png"></v-img>

      </v-card>
      <!--name of the session-->
      <v-toolbar-title>
        <v-divider inset vertical class="mx-1"></v-divider>
        <span class="display-1">HELLO HOTEL</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn plain to="/administrator" color="white">Administrator</v-btn>

    </v-app-bar>
    <!-- Main-->
    <h1>Register</h1>

    <v-divider class="mx-4" inset></v-divider>

    <v-layout align-start >
      <v-col md="4">
        <v-card height="500"
                width="400"
        >
          <v-card-title>Data</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-form>
              <v-text-field label="Name"
                            prepend-icon="mdi-account">
              </v-text-field>
              <v-text-field label="Last name"
                            prepend-icon="mdi-account">
              </v-text-field>
              <v-text-field label="D.N.I"
                            prepend-icon="mdi-card-account-details-outline">
              </v-text-field>
              <v-text-field label="Phone"
                            prepend-icon="mdi-phone">
              </v-text-field>
              <v-text-field label="E-mail"
                            prepend-icon="mdi-mail">
              </v-text-field>
            </v-form>
          </v-card-text>



        </v-card>
      </v-col>
      <v-divider class="mx-4" inset vertical></v-divider>
      <v-col md="4">
        <v-card height="500"
                width="400"
        >
          <v-card-title>Room</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-form>
              <v-text-field label="Room"
                            prepend-icon="mdi-bed-king-outline">
              </v-text-field>
              <v-text-field label="Date in"
                            prepend-icon="mdi-lock">
              </v-text-field>
              <v-text-field label="Date out"
                            prepend-icon="mdi-lock">
              </v-text-field>
              <v-text-field label="Cost"
                            prepend-icon="mdi-cash-multiple">
              </v-text-field>
            </v-form>
          </v-card-text>



        </v-card>
      </v-col>

    </v-layout>


   <!-- <v-col md="6">
      <v-text-field shaped filled
                    background-color="rgba(63, 103, 250, 0.3)"
                    label="Name"
      ></v-text-field>

      <v-text-field shaped filled
                    background-color="rgba(63, 103, 250, 0.3)"
                    label="Last name"
      ></v-text-field>
      <v-divider></v-divider>
      <v-toolbar flat>
        <v-text-field shaped filled
                      background-color="rgba(63, 103, 250, 0.3)"
                      label="D.N.I"
                      single-line hide-details
        ></v-text-field>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-text-field shaped filled
                      background-color="rgba(63, 103, 250, 0.3)"
                      label="Phone"
                      single-line hide-details
        ></v-text-field>
      </v-toolbar>
      <v-divider></v-divider>
      <v-text-field shaped filled
                    background-color="rgba(63, 103, 250, 0.3)"
                    label="Name"
      ></v-text-field>
    </v-col>-->

  </v-app>

</template>

<script>
export default {
  name: "admin-register",

  data: () => ({
    cards: [
      { title: 'Register', color: 'rgba(63, 103, 250, 1)', src: require('@/assets/img/register.jpg'), path: '/admin-register' },
      { title: 'Rooms', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/rooms.jpg'), path: '/admin-rooms'},
      { title: 'Inventory', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/inventory.png'), path: '/admin-inventory' },
      { title: 'Client', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/client.jpg'), path: '/admin-client'},
      { title: 'Schedule', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/schedule.jpg'), path: '/admin-schedule' },
      { title: 'Staff', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/staff.jpg'), path: '/admin-staff'},
      { title: 'Costs', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/costs.jpg'), path: '/admin-costs' },
      { title: 'Feedback', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/feedback.jpg'), path: '/admin-feedback' },
      { title: 'Publicity', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/publicity.jpeg'), path: '/admin-publicity' },
    ],
    drawer: null,

  }),
}
</script>

<style scoped>

</style>