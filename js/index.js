$(document).ready(function(){
    

    $('.team__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1900,
        dots: true,
        arrows: false,

      });
})

$(document).on("click",".filter",function(){
  var attribute = $(this).attr("id");
  if(attribute == "all"){
    $(".postsWrapper .row").show();
  }else{
    $(".postsWrapper .row").hide();
    $("."+attribute).show();
  }
 
});

function onclickfunction(){
  var form_name = document.getElementById("floatingPassword").value;
  var form_email = document.getElementById("floatingInput").value;
  var form_subject = document.getElementById("floatingPassword").value;
  var form_message = document.getElementById("floatingTextarea").value;

  if(form_name != "" && form_email != "" && form_subject != "" && form_message != ""){
  
  Swal.fire({
  icon: "success",
  title: "Done",
  text: "Form submit successfully",
});
  }
  else{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill the form first!",
    });  }
}