<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <b-container>
      <h1>this is my joke :  {{joke}}</h1>
      <button class="btn btn-primary" @click="addjoke">add</button>
      {{this.$store.state.jokes}}
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import {mapGetters} from 'vuex';

export default {
  name: 'Home',
  data(){
    return{
      // jokes : []
    }
  },
  components: {

  },
  computed :{
    joke(){
      return this.$store.getters.getjoke
    }
  },
  methods:{
    addjoke(){
      this.$store.dispatch('setjoke')
    }
  }
}
</script>
