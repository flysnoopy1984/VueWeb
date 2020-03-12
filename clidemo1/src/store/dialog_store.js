export default{ 
    state: {
        formData:Object,
      },
      mutations: {
        setformData(state,data)
        {
          console.log("setformData");
          state.formData = data;
        }
      }
}