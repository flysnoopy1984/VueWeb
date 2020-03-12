<template>
 <div>
   <h3>FormVuex Demo </h3>
    <dlg></dlg>
    <div style="margin-top:40px;">{{_fatherData}}</div>
 </div>
 
</template>
<script>
import dlg from "../components/FormDialogVuex.vue"

export default {
 
  computed:{
    _fatherData(){
      console.log(this.$store.state.dialog.formData);
      return this.$store.state.dialog.formData;
    }
  },
  components:{
    dlg,
  }
}
</script>