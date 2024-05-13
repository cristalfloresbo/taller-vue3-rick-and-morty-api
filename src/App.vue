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
        <div class="column is-12-mobile is-4-desktop is-4-tablet" v-for="character in characters" :key="character.id">
          <div class="card">
            <div class="card-header">
              <img :src="character.image" :alt="character.name">
            </div>
            <div class="card-content">
              <h3 class="title is-size-4">
                {{ character.name }}
              </h3>
              <button class="button is-success is-rounded is-small">
                Ver mas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
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
