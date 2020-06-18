<template>
  <div id="app">
  
  <!--    <router-link to="/">Home</router-link> |
      <router-link to="/protected">Protected</router-link> |
      <a v-if="oidcIsAuthenticated" href @click.prevent="signOut">Sign out</a>
      <a v-else href @click.prevent="authenticateOidcPopup">Sign in</a> |
      <router-link to="/test">Test</router-link> 
 -->
  <mainHeader></mainHeader>
  <router-view />
  </div>
</template>

<script>


import { mapGetters,mapActions } from 'vuex'
export default {
  name:"App",
  computed: {
      ...mapGetters('oidcStore',[
        'oidcIsAuthenticated',
        'oidcUser',
        'oidcAccessToken',
        'oidcIdToken',
        'oidcError'
      ]),
        hasAccess: function () {
          return true;
      //    return this.oidcIsAuthenticated || this.$route.meta.isPublic
       },
  },
  methods: {
      InitData:function(){
          this.InitNav();
          this.InitTag();
       },
   //初始化Tags
      InitTag:function(){
        if(this.$store.getters.hasTags== false){
               this.$ccApi.get(this.$ccUrls.Book_GetTagList,{
                 "number":40,
                 "orderByType":1
               },r=>{
                 r.List.forEach(item=>{
                     if(item.Count>5000)   item.type="danger";
                     else if(item.Count>3500) item.type = "warning";
                     else if(item.Count>2200) item.type = "success";
                     else if(item.Count>1800) item.type = "";
                     else item.type = "info";
                 })
                  // console.log("tagList:"+r.List.length);  
                    this.$store.commit("setAllTags",{
                        tagList:r.List
                  });
            }); 
        }
      },
      //初始化Section
      InitNav:function(){
          if(this.$store.getters.hasNav== false)
          {
                var secList = [];
                this.$ccApi.get(this.$ccUrls.Book_GetSection,null,r=>{
                      var i = 1;
                      r.Entity.Book.forEach(item=>{
                          var nav =this.GetNav(item,i);
                          secList.push(nav);
                          i++;
                        });
                        r.Entity.Column.forEach(item=>{
                          var nav =this.GetNav(item,i);
                          secList.push(nav);
                          i++;
                        });
                         
                          this.$store.commit("setAllNav",{
                              navList:secList
                        });
                         console.log("Nav Load Done:"+secList.length);
                   
              });         
           }
      },
       GetNav:function(item,i){
              var nav = new Object();
                    nav.Title = item.Title;
                    nav.Code = item.Code;
                    nav.cls = "nav"+i.toString();
                    nav.type = item.SectionType;
                    return nav;
       },


      ...mapActions('oidcStore', [
          'authenticateOidcPopup',
          'removeOidcUser'
       ]),
       userLoaded: function (e) {
       console.log('I am listening to the user loaded event in vuex-oidc', e.detail)
    },
  },

  created(){
        this.InitData();
    },


  mounted () {
    
    window.addEventListener('vuexoidc:userLoaded', this.userLoaded)
    },
  destroyed () {
      window.removeEventListener('vuexoidc:userLoaded', this.userLoaded)
    }
}


</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
