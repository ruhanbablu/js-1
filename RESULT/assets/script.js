var bangla = 50;
var english = 80;
var math = 84;
var accounting = 90;
var managmant = 70;
var finance = 77;

var total = (bangla+english+math+accounting+managmant+finance) / 6;
//console.log(total);


if(total>=80){
   console.log("A+")
}else if( total >= 70){
    console.log("A")
}else if( total >=60){
    console.log("A-")
}else if(total >=50){
    console.log("B")
}else if(total >= 40){
    console.log("C")
}else if(total >= 33){
    console.log("D")
} 
else{ 

    console.log("F")
}