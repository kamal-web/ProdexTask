<template>
  <div class="container">
    <input type="checkbox" :id="checkBoxItem.label" :value="checkBoxItem.value" :v-model="checkedNames">
    <label :for="checkBoxItem.name">{{checkBoxItem.label}}</label>
  </div>
</template>

<script>
export default {
  name: 'CheckBoxComponent',
  props: ['checkBoxItem','checkedNames'],
  data(){
      return{
          pageName:'CheckBoxComponent'
      } 
  }
}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: row;
    margin-left:8px;
    margin-right:8px;
}
</style>
