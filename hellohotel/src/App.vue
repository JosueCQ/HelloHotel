<template>
  <v-app>
    <v-app-bar app color="black green--text">
      <v-app-bar-title>
        <!--<span class="display-1">Hello Hotel</span>-->
        <v-img max-height="50"
               max-width="50"
               src="./assets/HelloHotel.png"></v-img>
      </v-app-bar-title>
      <v-btn plain to="/home" color="green" class="display-1">Hello Hotel</v-btn>
      <v-spacer></v-spacer>
      <v-btn plain to="/client" color="yellow">Client</v-btn>
      <v-btn plain to="/administrator" color="blue">Administrator</v-btn>
      <v-btn plain to="/about" color="white">About</v-btn>

    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
</style>
