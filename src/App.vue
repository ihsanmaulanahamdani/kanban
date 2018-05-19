<template>
  <div id="app">
    <Navbar/>
    <br>
    <Tasks/>
  </div>
</template>

<script>
import Tasks from './components/Tasks.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Tasks,
    Navbar
  }
}
</script>
