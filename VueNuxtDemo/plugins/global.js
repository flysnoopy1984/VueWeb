

export default function({app}){
    

    app.currentDT = function(){
     
        
        var date = new Date();
        
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();
        let ms = date.getMilliseconds();
        // var seperator1 = "-";
        //  var year = date.getFullYear();
        // var month = date.getMonth() + 1;
        // var strDate = date.getDate();
        // if (month >= 1 && month <= 9) {
        //   month = "0" + month;
        // }
        // if (strDate >= 0 && strDate <= 9) {
        //   strDate = "0" + strDate;
        // }
         var currentdate = hh+":"+mm+":"+ss+":"+ms;
        return currentdate;
    }


}