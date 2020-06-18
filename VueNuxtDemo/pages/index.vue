<template>
  <div class="container">
   
    <div class="row">
      <!-- <logo /> -->
        <div v-if="msg!=''">{{msg}}</div>
      <button @click="test()">Test Button</button>
       <h2>{{this.list.dt}}</h2>
          <div class="col-sm-12 col-md-8">
                <div class="card fluid topic" v-for="topic in list.data" :key="topic.id" >
                    <div class="section">
                        <!-- <h3><nuxt-link :to="{name: 'topic-id', params: {id: topic.id}}" class="topic--title">{{topic.title}}</nuxt-link></h3> -->
                        <p class="topic--info">
                            <mark v-if="topic.top" class="tertiary">精华</mark>
                            <!-- <mark v-else>{{tabsObj[topic.tab]}}</mark> -->
                            <span class="avatar">
                                <img :src="topic.author.avatar_url" alt="">
                            </span>
                             <span class="username">
                                {{topic.author.loginname}}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  async asyncData({app, query}){
    // debugger
   //   console.log(`query:${query}`);
      var sdt = app.currentDT();
      var list = await app.$axios.$get("topics?tab=good");
      var edt = app.currentDT();
      list.dt = `开始时间:${sdt}. 结束时间:${edt}`;
  //    console.log(list.data.length);
     return {list:list};
  },

  components: {
    Logo
  },
  data(){
    return{
      logDateTime:"时间",
      msg:"",
     // tabsObj:tabs
    }
  },
  methods:{
   test(){
    this.msg = "In";
    this.$store.commit('system/initTabs');
   }
  }

}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
