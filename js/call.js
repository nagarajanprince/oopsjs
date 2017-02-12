var list =(function($,dt){
    var dt ={};
    dt.dataprint=function(){
        dt.dataprinter();
        console.log("function in call.js");
    };
    
    return list;
    
})(jQuery,list||{});


list.dataprinter();