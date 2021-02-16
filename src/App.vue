<template>
  <div class="container">
    <Sidebar />
    <div style="width:100%;">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'

export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>

<style scoped>
.container{
  display:flex;
  flex-direction: row;
  background-color: #f5f5ef;
  margin-left:62px;
  margin-right:62px;
}
</style>
