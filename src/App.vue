<template>
  <div id="app">
    <nav class="navbar navbar-expand-lgbg-body-tertiary">
  <div class="container-md">
    <a class="navbar-brand" href="#">openMusic</a>
  </div>
</nav>
    <nav>
      <p class="category-list">Categorias</p>
      <router-link to="/rap">Rap</router-link> |
      <router-link to="/pop">Pop</router-link> |
      <router-link to="/rock">Rock</router-link>
    </nav>
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav {
  margin-bottom: 20px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}
.container-md{
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
}
nav a.router-link-exact-active {
  color: #42b983;
}
.navbar {
  background-color: #2b2c2c; /* Color de fondo claro */
  padding: 10px 20px; /* Espaciado interno */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra sutil */
}
.navbar-expand-lg.bg-body-tertiary{
  background-color: #2b2c2c;
}
.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff; /* Color del texto */
  background-color: #2b2c2c;
  text-align: center;
  display: flex;
  }
.container-fluid {
  display: flex; /* Usar flexbox para alinear los elementos */
  justify-content: flex-start; /* Alinear a la izquierda */
}
.category-list{
  display: flex;
  flex-direction: column;
  align-items: center;  
  justify-content: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  }
.btn {
  border: 1px solid transparent; /* Borde transparente por defecto */
  border-radius: 4px; /* Bordes redondeados */
  padding: 8px 12px; /* Espaciado interno */
  cursor: pointer; /* Cambiar el cursor al pasar sobre el botón */
  transition: background-color 0.3s, color 0.3s; /* Transición suave */
}

.btn-outline-success {
  color: #28a745; /* Color del texto */
  border-color: #28a745; /* Color del borde */
}

.btn-outline-success:hover {
  background-color: #28a745; /* Color de fondo al pasar el mouse */
  color: white; /* Color del texto al pasar el mouse */
}

.btn-sm {
  font-size: 0.875rem; /* Tamaño de fuente más pequeño */
}

.btn-outline-secondary {
  color: #6c757d; /* Color del texto */
  border-color: #6c757d; /* Color del borde */
}

.btn-outline-secondary:hover {
  background-color: #6c757d; /* Color de fondo al pasar el mouse */
  color: white; /* Color del texto al pasar el mouse */
}
</style>


