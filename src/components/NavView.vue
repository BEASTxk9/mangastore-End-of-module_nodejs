<template>
    <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/landing">Landing</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/store">Shop</router-link> |
    <!-- <router-link :to="name='single'">single</router-link> | -->
    <router-link to="/admin">Admin</router-link> |
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>