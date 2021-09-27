<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">Navigation Lists</v-navigation-drawer>
    <v-app-bar app color="rgba(248, 208, 62, 1)" >
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <!--name of the session-->
      <v-toolbar-title>
        <v-divider inset vertical class="mx-1"></v-divider>
        <span class="display-1">HELLO HOTEL</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn plain to="/administrator" color="black">Client</v-btn>

    </v-app-bar>

    <v-container fluid>
      <v-col cols="12" md="5"><h1>Welcome to Hello Hotel</h1></v-col>
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

    drawer: null,


})

}
</script>

<style scoped>

</style>