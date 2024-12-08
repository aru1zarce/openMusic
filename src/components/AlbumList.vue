<template>
    <div class="album-list">
      <div v-for="album in albums" :key="album.id" class="album-card">
        <img :src="album.image" :alt="album.album" class="album-image">
        <h3>{{ album.album }}</h3>
        <p>{{ album.artist }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AlbumList',
    props: {
      albums: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .album-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .album-card {
    width: 200px;
    margin: 20px;
    text-align: center;
  }
  .album-image {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
  </style>
  
  