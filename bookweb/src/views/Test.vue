<template>
 <div id="header-container">
        <header id="header-compact-v3" class="header-original should-stick">
            <div class="header-inner">
                <a href="/" title="豆瓣阅读" class="site-logo"></a>
                <nav class="func-nav">
                    <ul>
                        <li>
                            <a class="nav-category " href="#" title="分类">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewbox="0 0 10 7" class="fill-current-color">
                                    <path fill="#a6a6a6" d="M0 0h10v.7H0zm0 2.1h10v.7H0zm0 2.1h10v.7H0zm0 2.1h10V7H0z"></path>
                                </svg><span class="text">分类</span>
                            </a>
                        </li>
                        <li>
                            <a class="nav-search " href="#" title="搜索">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" viewbox="0 0 14 14" class="fill-current-color">
                                    <path fill="#fff" d="M14 12.83l-2.19-2.19a6.61 6.61 0 10-1.17 1.17L12.83 14zM2.5 10.7a5.8 5.8 0 018.2-8.2 5.8 5.8 0 01-8.2 8.2z"></path>
                                </svg><span class="text">搜索</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="site-nav-container">
                    <nav class="site-nav site-nav-normal">
                        <ul>
                            <li class="nav-item-original"><a href="/?dcs=original-featured&amp;dcm=normal-nav">原创</a></li>
                            <li class="nav-item-chart"><a href="/charts?dcs=original-featured&amp;dcm=normal-nav" class="">排行</a></li>
                            <li class="nav-item-ebook"><a href="/ebooks/?dcs=original-featured&amp;dcm=normal-nav" class="">出版</a></li>
                            <li class="nav-item-membership"><a href="/membership/store/?dcs=original-featured&amp;dcm=normal-nav" class="">会员</a></li>
                            <li class="nav-item-app"><a href="/app?dcs=original-featured&amp;dcm=normal-nav" class="">App</a></li>
                        </ul>
                    </nav>
                    <nav class="site-nav site-nav-original">
                        <ul>
                            <li class="nav-item-original"><a href="/?dcs=original-featured&amp;dcm=original-nav" class="active">原创首页</a></li>
                            <li class="nav-item-chart"><a href="/charts?dcs=original-featured&amp;dcm=original-nav" class="">排行</a></li>
                            <li class="nav-item-original/mystery_fiction"><a href="/original/mystery_fiction?dcs=original-featured&amp;dcm=original-nav" class="">悬疑</a></li>
                            <li class="nav-item-original/womens_fiction"><a href="/original/womens_fiction?dcs=original-featured&amp;dcm=original-nav" class="">女性</a></li>
                            <li class="nav-item-original/science_fiction"><a href="/original/science_fiction?dcs=original-featured&amp;dcm=original-nav" class="">幻想</a></li>
                            <li class="nav-item-original/literary_fiction"><a href="/original/literary_fiction?dcs=original-featured&amp;dcm=original-nav" class="">文艺</a></li>
                            <li class="nav-item-original/historical_fiction"><a href="/original/historical_fiction?dcs=original-featured&amp;dcm=original-nav" class="">历史</a></li>
                            <li class="nav-item-rally"><a href="/rally/?dcs=original-featured&amp;dcm=original-nav" class="">长篇拉力赛</a></li>
                            <li class="nav-item-original_more more-active"><a class="btn-more"></a></li>
                            <li class="nav-item-ebook"><a href="/ebooks/?dcs=original-featured&amp;dcm=original-nav" class="">出版</a></li>
                            <li class="nav-item-membership"><a href="/membership/store/?dcs=original-featured&amp;dcm=original-nav" class="">会员</a></li>
                            <li class="nav-item-app"><a href="/app?dcs=original-featured&amp;dcm=original-nav" class="">App</a></li>
                        </ul>
                    </nav>
                </div>
                <div id="nav-submit" class="nav-submit">
                    <!-- _performtips_ -->
                    <a href="/submit" target="_blank" class="lnk-start-publish fill-current-color">成为作者</a>
                </div>
                <nav class="site-nav-right">
                    <ul>
                        <li class="nav-bookshelf">
                            <a title="书架" href="/bookshelf" class="require-login">
                                <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" class="fill-current-color">
                                    <path d="M13.9 5.223l3.14 12.1a.23.23 0 00.284.165l2.332-.645a.233.233 0 00.162-.28l-3.14-12.1a.23.23 0 00-.284-.166l-2.332.645a.233.233 0 00-.162.28zM8.5 5h-3v12h3zm1 12h3V3h-3v14zm4-9.327V14.5h1.77zm0-3.57a1.212 1.212 0 01.293-.125l2.33-.645a1.232 1.232 0 011.516.86v.018l3.136 12.1a1.23 1.23 0 01-.863 1.5l-2.33.647a1.232 1.232 0 01-1.516-.86v-.018l-.537-2.08H13.5V17a1 1 0 01-1 1h-3a1 1 0 01-.5-.134 1 1 0 01-.5.134h-3a1 1 0 01-1-1v-1.5H1.822a.23.23 0 00-.23.227l-.074 5.04a.23.23 0 00.23.233h20.506a.23.23 0 00.228-.234l-.074-5.04a.23.23 0 00-.23-.226h-1.59l-.268-1h1.858a1.23 1.23 0 011.23 1.213l.074 5.038A1.23 1.23 0 0122.27 22H1.75a1.23 1.23 0 01-1.232-1.23v-.02l.074-5.037a1.23 1.23 0 011.23-1.213H4.5V5a1 1 0 011-1h3V3a1 1 0 011-1h3a1 1 0 011 1z"></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="user-info" id="user-info">
                    <div class="login-buttons">
                        <a data-size="xs" href="https://accounts.douban.com/passport/login" class="btn-contained login"><span class="text">登录</span></a>
                        <a data-size="xs" href="https://accounts.douban.com/passport/login" class="btn-contained signup"><span class="text">注册</span></a>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>
<style scoped>
/* @import "../style/common-v3.css"; */
</style>
