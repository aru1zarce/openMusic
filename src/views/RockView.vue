<template>
    <div class="rock">
      <h2>Rock Albums</h2>
      <AlbumList :albums="rockAlbums" />
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex'
  import AlbumList from '@/components/AlbumList.vue'
  
  export default {
    name: 'RockView',
    components: {
      AlbumList
    },
    computed: {
      ...mapGetters({
        rockAlbums: 'getRockAlbums'
      })
    }
  }
  </script>

  