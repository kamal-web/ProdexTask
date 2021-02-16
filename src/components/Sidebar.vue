<template>
      <div style="width:20%;min-height: 100vh;backgroundColor:#fff;">
      <ul style="listStyleType:none;textAlign:left;" class="social">        
        <li v-for="sidebarEl in sidebarElements" v-bind:key="sidebarEl.name" :style="selectedTab == sidebarEl.name?'marginTop:12px;display:flex;flexDirection:row;alignItems:center;cursor:pointer;border-right:4px solid blue;':'marginTop:12px;display:flex;flexDirection:row;alignItems:center;cursor:pointer;'" @click="selectHandler(sidebarEl)">
            <router-link :to="sidebarEl.path" class="routerContainer"><md-icon>{{sidebarEl.icon}}</md-icon> {{sidebarEl.name }}</router-link>
        </li>
      </ul>
    </div>
</template>

<script>

// import ImportIcon from 'vue-material-design-icons/Import';
// import router from '../router/index'

export default {
  name: 'Sidebar',
//   components: {
//     ImportIcon
//     },
    data() {
    return {
      sidebarElements: [
        {name: 'Dashboard',icon:'grid_view',path: "/dashboard"},
        {name: 'Track & Trace',icon:'list_alt',path: "/track-and-trace"},
        {name: 'Import Assets',icon:'save_alt',path: "/import-assets"},
        {name: 'Reports',icon:'insert_chart_outlined',path: "/reports"},
        {name: 'Alerts & Rules',icon:'mail_outline', path: "/alerts-and-rules"},
        {name: 'Settings',icon:'settings',path: "/settings"},
        {name: 'Audit Logs',icon:'list_alt',path: "/audit-logs"},
      ],
      selectedTab:"Track & Trace"
    };
  },
//   created(){
//       if(this.selectedTab==""){
//           this.selectedTab = "Track & Trace";
//       }
//   },
  methods:{
      selectHandler(selectedTabData){
          console.log('In selectHandler',selectedTabData);
          this.selectedTab = selectedTabData.name;
      }
  }
}
</script>

<style scoped>
.md-icon{
margin:4px;
padding:0px;
}
.routerContainer{
    color:black;
}
</style>
