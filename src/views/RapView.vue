<template>
    <div class="rap">
      <h2>Rap Albums</h2>
      <AlbumList :albums="rapAlbums" />
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex'
  import AlbumList from '@/components/AlbumList.vue'
  
  export default {
    name: 'RapView',
    components: {
      AlbumList
    },
    computed: {
      ...mapGetters({
        rapAlbums: 'getRapAlbums'
      })
    }
  }
  </script>
  
  