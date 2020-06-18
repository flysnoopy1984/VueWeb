export const state = () =>({
        tabs:{}
    });

export const  mutations = {
    initTabs(state){
        var tabs= [{
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
        }];
        state.tabs = tabs;  
    }
};
