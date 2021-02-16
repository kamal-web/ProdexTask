<template>
  <div class="container">
      <div class="iconContainer border_bottom">
          <div class="topOptionContainer">
            <div>Add New</div>
              <md-icon style="background-color:blue;color:white;border-radius:15px;margin-right:8px;">add</md-icon> 
            
            <div style="border-left:1px solid #000;display:flex;align-items:center;" >
            <md-icon class="icon-margin">search</md-icon>
            <div style="display:flex;">
              <md-icon class="icon-margin">notifications_none</md-icon>
              <div style="position:relative;left:-14px;top:-4px;">0</div>
            </div> 
             
            <md-icon class="icon-margin">mail_outline</md-icon> 
            <md-icon class="icon-margin">help_outline</md-icon> 
            <md-icon class="icon-margin">account_circle</md-icon> 
            </div>
            
          </div>

                           
      </div>
      <div class="border_bottom">
          <h4>Track & Trace</h4>
      </div>
      <TopNavBar :selectHandler="selectHandler" :selectedTab="selectedTabComponent"/>
      <FilterComponent />
      
      <div class="body_container">
        <div v-if="selectedTabComponent === 'Search'">
          <Search />
        </div>
        <div v-else-if="selectedTabComponent === 'Picklist'">
          <PickList />
        </div>
        <div v-else-if="selectedTabComponent === 'Saved Search'">
          <SavedSearch />
        </div>
      </div>

  </div>
</template>
<script>

import TopNavBar from "../components/TopNavBar"
import FilterComponent from "../components/FilterComponent"
import Search from "../pages/Search";
import PickList from "../pages/PickedList";
import SavedSearch from "../pages/SavedSearch";

export default {
  name: 'TrackAndTrace',
  components:{
    TopNavBar,
    FilterComponent,
    Search,
    PickList,
    SavedSearch
  },
  
  data() {
    return {
      message: 'Track & Trace',
      checkedNames:[],
      checkedIncluded:[],
      selected:'',
      selectedTabComponent:"Search",
      
    };
  },
  methods:{
    selectHandler(selectedTabName){
      console.log('In selectHandler',selectedTabName);
      this.selectedTabComponent = selectedTabName;
    } 
  },
};
</script>
<style scoped>
h4{
    margin:4px;
    padding:4px;
    font-size: 20px;
}
.container{
    display: flex;
    flex-direction: column;
}
.iconContainer{
    display: flex;
    width:100%;
    justify-content: flex-end;
    /* justify-content: space-around; */
    /* justify-items: flex-end; */
    align-items: center;
}
.topOptionContainer{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    height:26px;
}
.border_bottom{
  border-bottom:1px solid #ccccb3;
  padding-top:8px;
  padding-bottom: 8px;
}
.icon-margin{
  margin-left:4px;
  margin-right:4px;
  cursor:pointer;
}
.body_container{
  background-color:#fff;
}
/* .Asset_container{
  display:flex;
  width:100%;
  border-bottom: 1px solid #ccccb3;
  justify-content: space-evenly;
  flex-wrap:wrap;
} */
/* .asset_label{
  color:#ccccb3;
} */
p{
  margin-top:4px;
  margin-bottom:4px;
}
.search-wrapper{
  border:none;
  height:32px;
}

</style>
