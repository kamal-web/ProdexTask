<template>
  <div class="topNavContainer"> 
    <div class="tabContainer" @click="selectHandler('Search')" :style="selectedTab == 'Search'?'border-bottom:2px solid blue;':''">Search</div>
    <div class="tabContainer" @click="selectHandler('Picklist')" :style="selectedTab == 'Picklist'?'border-bottom:2px solid blue;':''">Picklist</div>
    <div class="tabContainer" @click="selectHandler('Saved Search')" :style="selectedTab == 'Saved Search'?'border-bottom:2px solid blue;':''">Saved Search</div>
  </div>
</template>

<script>
export default {
  name: 'TopNavBar',
  props:['selectHandler','selectedTab'],
  data(){
      return{
          pageName:'TopNavBar',
      } 
  },
}
</script>

<style scoped>
.topNavContainer{
    display:flex;
    flex-direction: row;
    border-bottom: 1px solid #ccccb3;
}
.tabContainer{
    padding-top:8px;
    padding-bottom:8px;
    margin-left:32px;
    font-size: 14px;
}
</style>
