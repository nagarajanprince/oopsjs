function car(){    
    document.getElementById("texttype").innerHTML="Data function ";
}

function car1(data){    
    this.detail = data;
    document.getElementById("texttype1").innerHTML="function create object "+this.detail;
}



car1.prototype.speed="100mph";
car1.prototype.speed1=function(dt){
    alert("::"+dt)
}


car.prototype= new car1();

car();
var obj = new car1();
var obj1 = new car1(222);

var list =  new car();
alert(obj.speed);
obj1.speed1(12);

list.speed1(123);


// __proto__

var data={
    name:'nagarajan',
    age:'26'
}

var data1 = {
    year:'2017',
    last:'data',
    __proto__:data
    
}

var data2 =  {
    detail:"help need !",
    __proto__:data1}


console.log(data2.year);
console.log(data2.name);





data = (function(){
    var listed = {};
    
    var add = function(a,b){
        return (a+b);
        
    };
    
    
    
    return {
        adder:add
    };
})();

console.log(data.adder(5,10));



var list =(function($,dt){
    var dt ={};
    dt.dataprinter=function(){
        
        console.log("function in custom.js");
    };
    return list;
})(jQuery,list || {});

