<template>
  <div>
    <div style="display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;margin-top:12px;margin-bottom:12px;margin-left:4px;margin-right:4px;">
          <div style="display:flex;flex-dirextion:row;flex-wrap:wrap;align-items:center">
            <input type="text" v-model="search" placeholder="Search.." style="height:100%;border-radius:15px;border:1px solid #ccccb3;margin:0 4px 0 0px;"/>
            <div style="height:32px; border:1px solid #ccccb3;border-radius:5px;margin:0 4px 0 0;padding:3px 6px;">
              <md-icon class="icon-margin" >insert_drive_file</md-icon>
            </div>
            
            <button style="height:100%;margin:0 4px 0 4px;background-color:#e6f2ff;border:none;border-radius:5px;padding:0 12px 0 12px;">Go</button>
            <div style="display:flex;flex-direction:row">
              <input type="checkbox" id="IncludeAttribute" value="IncludeAttribute" :v-model="checkedIncluded">
              <label for="Include Attribute">Include Attribute</label>
            </div>
          </div>

          <div style="display:flex;flex-direction:row;flex-wrap:wrap;align-items:center">
            <p style="margin:0;">Actions</p>
            <div style="display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;border:1px solid #f5f5ef;height:100%;background-color:#f5f5ef">
              <div>Update Attribute</div>
              <select v-model="selected" style="border:none;background-color:#f5f5ef;">
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
            </div>
            <div style="height:100%;background-color:#f5f5ef;text-align:center;margin:0 3px 0 6px;padding:3px 6px;border:None;border-radius:5px;">
              <md-icon  style="color:black;">list</md-icon>
            </div>
            <div style="height:100%; background-color:#f5f5ef;margin:0 3px 0 0;padding:3px 6px;border:None;border-radius:5px;">
              <md-icon style="border-radius:5px;">view_module</md-icon>
            </div>
            <div style="height:100%;background-color:#f5f5ef;margin:0 3px 0 0px;padding:3px 6px;border:None;border-radius:5px;">
              <md-icon style="border-radius:5px;">save_alt</md-icon>
            </div>
            <div style="height:100%;background-color:#f5f5ef;margin:0 3px 0 0;padding:3px 6px;border:None;border-radius:5px;">
              <md-icon style="border-radius:5px;">event_available</md-icon>
            </div>
            <div style="height:100%;background-color:#f5f5ef;margin:0 3px 0 0;padding:3px 6px;border:None;border-radius:5px;">
              <md-icon class="icon-margin" style="border-radius:5px;">settings</md-icon>
            </div>
          </div>
        </div>
        <div style="display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;margin-top:12px;margin-bottom:12px;margin-left:4px;margin-right:4px;">
          <div style="display:flex;flex-direction:row;align-items:center;">
            <p>Showing</p>
            <div style="background-color:#f5f5ef;border-radius:5px;padding:3px;">
              <md-icon >keyboard_arrow_left</md-icon>
            </div>
            <div style="border:1px solid #ccccb3;padding:3px;border-radius:5px;margin:0 4px;">1 of {{Assets.length}}</div>
            <div style="background-color:#f5f5ef;border-radius:5px;padding:3px;">
              <md-icon >keyboard_arrow_right</md-icon>
            </div>
          </div>
          <div style="display:flex;flex-direction:row;align-items:center;">
            <p>Total {{Assets.length}} Assets</p>
            <span style="height:65%;border-left:1px solid black;margin:0 6px;"/>
            <p>Selected({{checkedNames.length}})</p>
          </div>
        </div>
        <div v-for="Asset in Assets" v-bind:key="Asset.AssetName" >
          <div class="Asset_container">
            <div style="display:flex;flex-direction:column;width:50px;justify-content:center;">
              <img :src="require(`@/assets/Asset.jpg`)"/>
            </div>
            <div style="display:flex;align-items:center;">
              <input type="checkbox" :id="Asset.AssetName" :value="Asset.AssetName" v-model="checkedNames">
            </div>
            <div style="display:flex;flex-direction:column;">
              <p class="asset_label">Asset Name</p>
              <p>{{Asset.AssetName}}</p>
            </div>
            <div style="display:flex;flex-direction:column;">
              <p class="asset_label">Asset Type</p>
              <p>{{Asset.AssetType}}</p>
            </div>
            <div style="display:flex;flex-direction:column;">
              <p class="asset_label">Location</p>
              <p>{{Asset.Location}}</p>
            </div>
            <div style="display:flex;flex-direction:column;">
              <p class="asset_label">Last Seen</p>
              <p>{{Asset.LastSeen}}</p>
            </div>
            <div style="display:flex;flex-direction:column;justify-content:center;">
              <select v-model="selected" style="border:none;">
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
            </div>
            <div style="display:flex;flex-direction:row;">
              <md-icon class="icon-margin" style="background-color:#66ffff;color:#fff;border-radius:5px;">remove_red_eye</md-icon>
              <md-icon class="icon-margin" style="background-color:#ff9900;color:#fff;border-radius:5px;">drive_file_rename_outline</md-icon>
              <md-icon class="icon-margin" style="background-color:#6600cc;color:#fff;border-radius:5px;">delete_outline</md-icon>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  created(){
      console.log('In created',this.Assets);
  },
  data(){
      return{
          pageName:'Search',
          checkedNames:[],
          Assets:[
        {
          AssetName:"64B355e672389n4741",
          AssetType:"PX Test",
          Location:"Test PX 2",
          LastSeen:" Fri 25-Nov-2016 02:45:23"
        },
        {
          AssetName:"64B355e672389n4742",
          AssetType:"PX Test",
          Location:"Test PX 2",
          LastSeen:" Fri 25-Nov-2016 02:45:23"
        },
        {
          AssetName:"64B355e672389n4743",
          AssetType:"PX Test",
          Location:"Test PX 2",
          LastSeen:" Fri 25-Nov-2016 02:45:23"
        },
        {
          AssetName:"64B355e672389n4744",
          AssetType:"PX Test",
          Location:"Test PX 2",
          LastSeen:" Fri 25-Nov-2016 02:45:23"
        },
        {
          AssetName:"64B355e672389n4745",
          AssetType:"PX Test",
          Location:"Test PX 2",
          LastSeen:" Fri 25-Nov-2016 02:45:23"
        },
        {
          AssetName:"64B355e672389n4746",
          AssetType:"PX Test",
          Location:"Test PX 2",
          LastSeen:" Fri 25-Nov-2016 02:45:23"
        },
        // {
        //   AssetName:"64B355e672389n474",
        //   AssetType:"PX Test",
        //   Location:"Test PX 2",
        //   LastSeen:" Fri 25-Nov-2016 02:45:23"
        // },
        // {
        //   AssetName:"64B355e672389n474",
        //   AssetType:"PX Test",
        //   Location:"Test PX 2",
        //   LastSeen:" Fri 25-Nov-2016 02:45:23"
        // },
        // {
        //   AssetName:"64B355e672389n474",
        //   AssetType:"PX Test",
        //   Location:"Test PX 2",
        //   LastSeen:" Fri 25-Nov-2016 02:45:23"
        // },
        // {
        //   AssetName:"64B355e672389n474",
        //   AssetType:"PX Test",
        //   Location:"Test PX 2",
        //   LastSeen:" Fri 25-Nov-2016 02:45:23"
        // },
        // {
        //   AssetName:"64B355e672389n474",
        //   AssetType:"PX Test",
        //   Location:"Test PX 2",
        //   LastSeen:" Fri 25-Nov-2016 02:45:23"
        // },
        // {
        //   AssetName:"64B355e672389n474",
        //   AssetType:"PX Test",
        //   Location:"Test PX 2",
        //   LastSeen:" Fri 25-Nov-2016 02:45:23"
        // },
        // {
        //   AssetName:"64B355e672389n474",
        //   AssetType:"PX Test",
        //   Location:"Test PX 2",
        //   LastSeen:" Fri 25-Nov-2016 02:45:23"
        // },
        // {
        //   AssetName:"64B355e672389n474",
        //   AssetType:"PX Test",
        //   Location:"Test PX 2",
        //   LastSeen:" Fri 25-Nov-2016 02:45:23"
        // },
        // {
        //   AssetName:"64B355e672389n474",
        //   AssetType:"PX Test",
        //   Location:"Test PX 2",
        //   LastSeen:" Fri 25-Nov-2016 02:45:23"
        // },
        // {
        //   AssetName:"64B355e672389n474",
        //   AssetType:"PX Test",
        //   Location:"Test PX 2",
        //   LastSeen:" Fri 25-Nov-2016 02:45:23"
        // },
        // {
        //   AssetName:"64B355e672389n474",
        //   AssetType:"PX Test",
        //   Location:"Test PX 2",
        //   LastSeen:" Fri 25-Nov-2016 02:45:23"
        // },
        // {
        //   AssetName:"64B355e672389n474",
        //   AssetType:"PX Test",
        //   Location:"Test PX 2",
        //   LastSeen:" Fri 25-Nov-2016 02:45:23"
        // },
        // {
        //   AssetName:"64B355e672389n474",
        //   AssetType:"PX Test",
        //   Location:"Test PX 2",
        //   LastSeen:" Fri 25-Nov-2016 02:45:23"
        // },
        // {
        //   AssetName:"64B355e672389n474",
        //   AssetType:"PX Test",
        //   Location:"Test PX 2",
        //   LastSeen:" Fri 25-Nov-2016 02:45:23"
        // },

      ]
      } 
  }
}
</script>

<style scoped>
.icon-margin{
  margin-left:4px;
  margin-right:4px;
  cursor:pointer;
}
.Asset_container{
  display:flex;
  width:100%;
  border-bottom: 1px solid #ccccb3;
  justify-content: space-evenly;
  flex-wrap:wrap;
}
.asset_label{
  color:#ccccb3;
}
</style>
