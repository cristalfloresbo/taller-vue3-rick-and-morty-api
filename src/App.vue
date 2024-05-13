<template>
  <div data-theme="light">
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
        <div class="field has-addons is-pulled-right">
          <div class="control">
            <input type="text" class="input is-rounded" @keyup.enter="searchData" v-model="search">
          </div>
          <div class="control">
            <button class="button is-success is-rounded" @click="searchData">Buscar</button>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="columns is-desktop is-mobile is-tablet is-multiline is-centered">
          <AppCharacter @showModal="showModal" v-for="character in characters" :key="character.id"
            :character="character" />
        </div>
        <nav class="pagination" role="navigacion" aria-label="pagination">
          <a class="pagination-previous" @click="changePage(page - 1)">Anterior</a>
          <ul class="pagination-list">
            <li>
              <a class="pagination-link is-current">{{ page }}</a>
            </li>
          </ul>
          <a class="pagination-next" @click="changePage(page + 1)">Siguiente</a>
        </nav>
      </div>
      <div class="modal" :class="{ 'is-active': modal }" v-show="modal">
        <div class="modal-background" @click="modal = false">
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">
                Acerca de: {{ currentCharacter.name }}
              </p>
            </header>
            <div class="modal-card-body">
              <label class="label">Gender:</label>
              <p>{{ currentCharacter.gender }}</p>
              <label class="label">Estatus</label>
              <p class="label">{{ currentCharacter.status }}</p>
              <label class="label">Especie</label>
              <p>{{ currentCharacter.species }}</p>
              <label class="label">Tipo</label>
              <p>{{ currentCharacter.type }}</p>
            </div>
            <footer class="modal-card-foot">
              <button class="button" @click="modal = false">Cerrar</button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCharacters, getOneCharacter } from './services/Character.service.js'
import AppCharacter from './components/AppCharacter'

export default {
  name: 'App',
  components: {
    AppCharacter
  },
  data() {
    return {
      characters: [],
      page: 1,
      pages: 1,
      search: '',
      modal: false,
      currentCharacter: {}
    }
  },
  created() {
    this.fetchCharacters()
  },
  methods: {
    async fetchCharacters() {
      const params = {
        page: this.page,
        name: this.search
      }
      let response = await getCharacters(params);
      this.characters = response.results
      this.pages = response.info.pages
    },
    changePage(page) {
      this.page = (page <= 0 || page > this.pages) ? this.page : page;
      this.fetchCharacters()
    },
    searchData() {
      this.pages = 1
      this.fetchCharacters()
    },
    async showModal(id) {
      this.fetchOneCharacter(id)
      this.modal = true
    },
    async fetchOneCharacter(id) {
      let response = await getOneCharacter(id);
      this.currentCharacter = response;
      console.log(this.currentCharacter);
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
