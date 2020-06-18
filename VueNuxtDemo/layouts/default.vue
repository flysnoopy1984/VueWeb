<template>
  <div>
     <header>
       <a href="/" class="button">全部</a> 
       <span>|</span>
       <nuxt-link v-for="tab in tabs" v-bind:key="tab.path" :to='"/"+tab.path' role="button" >
       {{tab.name}}
       </nuxt-link>
     </header>
    <nuxt />
  </div>
</template>

<script>
const tabs = [{
    name: '精华',
    path: 'good'
}, {
    name: '问答',
    path: 'ask'
}, {
    name: '招聘',
    path: 'job'
}, {
    name: '分享',
    path: 'share'
}]

export default {
 
  data:()=>({
    tabs
  })
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.container {
    max-width: 1200px;
    margin: 10px auto;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
