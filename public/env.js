console.log("hello")

$(document).ready(function(){
$('#cal').click(function(){
    console.log("OK")
var number1=$('#number1').val()
var number2=$('#number2').val()
var numbers={
    num1:number1,
    num2:number2
}
$.get("/addresult",numbers,function(data){
    console.log(data)
$("#result").val(data)
})
})
})