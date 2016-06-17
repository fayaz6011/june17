$(function(){
$(".panel-button").on('click',function(){
var item=$(this).attr("data-panelid");
$.ajax({
type:'POST',
url:'addtocart.php',
data:'item='+item,
success:function(msg){
alert(msg);
}
});
});
$("#signupbutton").on('click',function(){
var name=$("#name").val();
var mail=$("#mail").val();
var mobileno=$("#mobileno").val();
$.ajax({
type:'POST',
url:'signup.php',
data:{
name:name,
mail:mail,
mobileno:mobileno,
},
success:function(msg){
alert(msg);
}
});
$("#signupmodal").slideToggle(1000);
});
$("#loginbutton").on('click',function(){
alert("sorry dude we are working plz try after some time...");
$("#loginmodal").slideToggle(1000);
});
});
