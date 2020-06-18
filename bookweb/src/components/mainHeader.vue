<template>
 <div id="header-container">
        <header id="header-compact-v3" class="header-original should-stick">
            <div class="header-inner">
             <div class="logoContainer">
                   <a href="/" title="心原阅读" class="site-logo"></a>
            </div>
                <nav class="func-nav">
                          <section class="search-section">
                                    <form action="/search" class="search-form">
                                        <input type="text" id="txtSearch" name="q" maxlength="60" autocomplete="off" placeholder="书名  / 作者 " value="">
                                    </form>
                            </section>
                            <a class="icon iconfont icon-sousuo" href="#"></a>                                       
                </nav>
                 
                 <nav class="btnMenuContainer">
                     <a class="icon iconfont" id="btnMenu"  v-bind:class="IsMenuShow? 'iconMenuSpread' :'iconMenuSpreadDown'" href="#" v-on:click="toggleMenu" title="菜单栏"  />
                 </nav>
                
                 <nav class="nav-columns"> 
                     <template :v-show="this.$store.getters.hasNav">
                      <div v-for="nav in this.$store.getters.topNavs" v-bind:class="nav.cls">
                            {{nav.Title}}
                      </div>
                     </template>
                </nav> 
               
                <div class="nav-right user-info" id="user-info">
                    <div class="login-buttons">
                        <a data-size="s""" href="https://accounts.douban.com/passport/login" class="btn-contained login"><span class="text">登录</span></a>
                        <a data-size="s" href="https://accounts.douban.com/passport/login" class="btn-contained signup"><span class="text">注册</span></a>
                    </div>
                
                     <div class="app_loginbutton">
                        <a class="icon iconfont iconUserLoginButton" href="#"></a>    
                     </div>     
                </div>

            </div>
        </header>
    </div>

</template>
<style scoped>
@import '../assets/icon_svg/iconfont.css';

@import "../style/css-variable-generator.css";

@import "../style/header.css";

</style>
<script>
export default {
    data:function(){

        return{
            IsMenuShow:true,
            secList:[]
        }
    },
    methods:{
    
        toggleMenu:function(){
           this.IsMenuShow = !this.IsMenuShow;
        }
    },
  
}
</script>