<template>
  <div class="filterContainer">
    <div style="display:flex;flex-direction:row">
      <div v-for="checkBoxItem in checkBoxItems" v-bind:key="checkBoxItem.label" >
      <CheckBoxComponent :checkBoxItem="checkBoxItem" :checkedNames="checkedNames" />
    </div>
    </div>
    
    <div>
     <button style="background-color:#e6f2ff;border:none;border-radius:5px;height:32px;">Search Filter</button>
    </div>
  </div>
</template>

<script>

import CheckBoxComponent from './checkBoxComponent';
export default {
  name: 'Filter',
  components:{
    CheckBoxComponent
  },
  data(){
      return{
          pageName:'Filter',
          checkBoxItems:[
            {
              label:"Inventory",
              value:"Inventory"
            },
            {
              label:"Missing",
              value:"Missing"
            },
            {
              label:"Unassigned",
              value:"Unassigned"
            },
            {
              label:"Deleted",
              value:"Deleted"
            },
          ],
          checkedNames:[],

      } 
  }
}
</script>

<style scoped>
.filterContainer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 8px;
    margin-bottom: 8px;
}
.search{
  display: flex;
  flex-direction: row;
  
}
</style>
