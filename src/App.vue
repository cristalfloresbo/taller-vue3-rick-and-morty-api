<template>
  <div data-theme="light">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="hero is-white is-gradient is-bold">
      <div class="hero-body">
        <h1 class="title">
          <span class="has-text-success">
            R&M
          </span>
          <span class="subtitle">
            Personajes
          </span>
        </h1>
        <button class="button is-success is-rounded" @click="fetchCharacters">Consultar</button>
      </div>
    </div>
    <div class="container">
      <div class="columns is-desktop is-mobile is-tablet is-multiline is-centered">
        <AppCharacter v-for="character in characters" :key="character.id" :character="character" />
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { getCharacters } from './services/Character.service.js'
import AppCharacter from './components/AppCharacter'

export default {
  name: 'App',
  components: {
    HelloWorld,
    AppCharacter
  },
  data() {
    return {
      characters: []
    }
  },
  created() {
    this.fetchCharacters()
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
