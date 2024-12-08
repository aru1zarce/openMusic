<template>
    <div class="pop">
      <h2>Pop Albums</h2>
      <AlbumList :albums="popAlbums" />
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex'
  import AlbumList from '@/components/AlbumList.vue'
  
  export default {
    name: 'PopView',
    components: {
      AlbumList
    },
    computed: {
      ...mapGetters({
        popAlbums: 'getPopAlbums'
      })
    }
  }
  </script>
  
  