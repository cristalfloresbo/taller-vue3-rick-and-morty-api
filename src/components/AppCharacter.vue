<template lang="html">
    <div class="column is-12-mobile is-4-desktop is-4-tablet">
        <div class="card">
            <div class="card-header">
                <img :src="character.image" :alt="character.name">
            </div>
            <div class="card-content">
                <h3 class="title is-size-4">
                    {{ character.name }}
                </h3>
                <button class="button is-success is-rounded is-small" @click="showMore(character.id)">
                    Ver mas
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['character'],
    methods: {
        showMore(id) {
            this.$emit('showModal', id);
        }
    }
}
</script>
<style lang="css"></style>