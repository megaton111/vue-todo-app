<template>
  <div id="app">
    <Header />
    <router-link to="/main">main</router-link>
    <router-link to="/sub">sub</router-link>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header, Footer
  }
}
</script>

<style>
</style>