<template>
  <nav>
    <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link> 
    <router-link to="/resume">Resume</router-link> 
    <router-link to="/projects">Projects</router-link> 
    <router-link to="/testimonials">Testimonials</router-link> 
    <router-link to="/contact">Contact</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
}

nav {
  background-color: beige;
  border-radius: 5px;
  color: gray;
  padding: 18px;
}

nav a {
  width:90px;
  padding: 8px 25px;
  font-weight: bold;
  font-size: 20px;
  padding: 8px;
  border-radius: 10px;
  color: grey;
  text-decoration: none;

}

nav a.router-link-exact-active {
  color: black;
  background: tan;
}
</style>
