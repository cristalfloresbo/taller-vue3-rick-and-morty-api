<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <button @click="fetchCharacters">Consultar</button>
  <div v-for="character in characters" :key="character.id">
    {{ character }}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { getCharacters } from './services/Character.service.js'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      characters: []
    }
  },
  methods: {
    async fetchCharacters() {
      let results = await getCharacters();
      this.characters = results
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
