<template>
   <div>
   <div>params: {{params}} </div> 
    <div>Store System: {{systemStore}} </div> 
   </div>
</template>
<script>
export default {
    asyncData({params}){
        
        return {params}
    },
    computed:{
        systemStore(){
            return this.$store.state.system.tabs;
        }
    }
}
</script>