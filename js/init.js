
(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space






$('.refine-reslt1').hide();
 $(".refine-reslt01").click(function(){
        $(".refine-reslt1").slideToggle("slow");
});

//$('#file-open01').hide();
 //$("#modifysearhc").click(function(){
        $("#file-open01").slideToggle("slow");
		//$(this).find(".modify").toggleClass('fa fa-minus-circle fa fa-plus-circle');
//});

 //$('#file-open01').hide();
 //$("#modifysearhc1").click(function(){
   //   $("#file-open01").slideToggle("slow");
      
      //if($("i").hasClass("modify right-spc fa-minus-circle fa")){
        //$(this).find(".modify").addClass('fa fa-plus-circle ');
      //  $(".modify").removeClass('fa-minus-circle');
        // $(".modify").addClass('fa fa-plus-circle ');
     
    // }
  
//});


//MODIFY SEARCH SECTION
$('#file-open01').hide();
$(".modifysrchS").click(function(e){
  $("#file-open01").slideToggle("slow");
        e.preventDefault();


        if ($('.modifysrchS').hasClass("fade-bar")) {
            $('.modifysrchS').addClass('fade-bar');
            $('.modifysrchS').removeClass('fade-bar');

       if($('.modify').hasClass('modify')){
              
            $(".modify").removeClass('fa-minus-circle');
            $(".modify").addClass('fa fa-plus-circle');}

        } else {
            $('.modifysrchS').removeClass('fade-bar');
            $('.modifysrchS').addClass('fade-bar');

            $(".modify").removeClass('fa-plus-circle');
            $(".modify").addClass('fa fa-minus-circle');

        }

});
 
$('#file-open01').hide();
$("#modifysearhc").click(function(e){
  $("#file-open01").slideToggle("slow");
        e.preventDefault();


        if ($('.modifysrchS').hasClass("fade-bar")) {
            $('.modifysrchS').addClass('fade-bar');
            $('.modifysrchS').removeClass('fade-bar');

       if($('.modify').hasClass('modify')){
              
            $(".modify").removeClass('fa-minus-circle');
            $(".modify").addClass('fa fa-plus-circle');}

        } else {
            $('.modifysrchS').removeClass('fade-bar');
            $('.modifysrchS').addClass('fade-bar');

            $(".modify").removeClass('fa-plus-circle');
            $(".modify").addClass('fa fa-minus-circle');

        }

});
 


$('#file-open01').hide(); 
$("#modifysearhc1").click(function(e){
  $("#file-open01").slideToggle("slow");
        e.preventDefault();


        if ($('.modifysrchS').hasClass("fade-bar")) {
            $('.modifysrchS').addClass('fade-bar');
            $('.modifysrchS').removeClass('fade-bar');

       if($('.modify').hasClass('modify')){
              
            $(".modify").removeClass('fa-minus-circle');
            $(".modify").addClass('fa fa-plus-circle');}

        } else {
            $('.modifysrchS').removeClass('fade-bar');
            $('.modifysrchS').addClass('fade-bar');

            $(".modify").removeClass('fa-plus-circle');
            $(".modify").addClass('fa fa-minus-circle');
        }

});


//FLIGHT DETAILS SECTION
$('#panel0').hide();
$('.flite-detail').hide();
$('.flit-open-to1').click(function(){
//$("#panel0").slideUp("slow");
$(this).next("#panel0").slideToggle("slow");
$(this).find(".icochan1").toggleClass('fa-plus-square-o fa-minus-square-o');

if ($('.icochan2').hasClass("icochan2")) {
            $('.icochan2').removeClass('fa-minus-square-o');
            $('.icochan2').addClass('fa fa-plus-square-o');

            $("#panel01").slideUp("slow");
     
        } 
});

$('#panel01').hide();
$('.flite-detail').hide();
$('.flit-open-to2').click(function(){
//$("#panel01").slideUp("slow");
$(this).next("#panel01").slideToggle("slow");
$(this).find(".icochan2").toggleClass('fa-plus-square-o fa-minus-square-o');


if ($('.icochan1').hasClass("icochan1")) {
             $('.icochan1').addClass('fa fa-plus-square-o');
            $('.icochan1').removeClass('fa-minus-square-o');

             $("#panel0").slideUp("slow");
                
        } 
     
});



$('#date-demo1').click(function(){

  alert();

});








 $("#flight-details").hide();
 $("#chkdetails").click(function(){
        $("#flight-details").slideToggle("slow");
        $(this).find(".icochan").toggleClass('fa-plus-square-o fa-minus-square-o');
});
  
$("#flight-detailsM").hide();
 $("#chkdetailsM  ").click(function(){
          $("#flight-detailsM").slideToggle("slow");
       $(this).find(".icochan").toggleClass('fa-plus-square-o fa-minus-square-o');
}); 
  

 $("#flight-filter").hide();
 $("#chkfilter").click(function(){
        $("#flight-filter").slideToggle("slow");
    });
 $("#flight-filter1").hide();
 $("#chkfilter1").click(function(){
        $("#flight-filter1").slideToggle("slow");
    });
 $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

  $(document).ready(function() {
    $('select').material_select();
  });


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 250) {
        //console.log('a');
        $(".scrollwin").addClass("change1");
        
    } else {
        //console.log('a');
        $(".scrollwin").removeClass("change1");
        
    
    }
  if (scroll >= 250) {
        //console.log('a');
        $(".scrollwin2").addClass("change2");
    } else {
        //console.log('a');
        $(".scrollwin2").removeClass("change2");
    }
  
  
  if (scroll >= 60) {
        //console.log('a');
        $(".filterbar").addClass("filtersticky");
    } else {
        //console.log('a');
        $(".filterbar").removeClass("filtersticky");
    }
  
  
    
    if (scroll >= 250) {
        //console.log('a');
        $(".scrollfilter").addClass("fillbox");
    } else {
        //console.log('a');
        $(".scrollfilter").removeClass("fillbox");
    }
  
  
      if (scroll >= 250) {
        //console.log('a');
        $(".spacermv").addClass("fillbox1");
    } else {
        //console.log('a');
        $(".spacermv").removeClass("fillbox1");
    }
  
  
  
  
  if (scroll >= 250) {
        //console.log('a');
        $(".scrollwin3").addClass("change3");
     
    } else {
        //console.log('a');
        $(".scrollwin3").removeClass("change3");
    $('.fixfilt, .fixfilt2, .fixfilt3').hide();
}


  if (scroll >= 250) {
        //console.log('a');
        $(".scrollwin4").addClass("change4");
    } else {
        //console.log('a');
        $(".scrollwin4").removeClass("change4");
    }
    
    if (scroll >= 150) {

        //console.log('a');
         $(".sticky-mnu").hide();
        $(".scrollwin5").addClass("sticky-header");
     $(".scrollwin6").addClass("hide");
         $(".sticky-mnu").show();

    } else {
        //console.log('a');
          $(".scrollwin5").removeClass("sticky-header");
       $(".scrollwin6").removeClass("hide");
        $(".sticky-mnu").hide();
    }


  
 if (scroll >= 250) {
        //console.log('a');
        $(".sticky-bg").addClass("sticky-full");
        $(".sticky-bg").removeClass("sticky-default");
    } else {
        //console.log('a');
        $(".sticky-bg").removeClass("sticky-full");
        $(".sticky-bg").addClass("sticky-default");
    }
}); 



  


$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
  
 $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        alert("Ready");
        console.log(modal, trigger);
      },
      complete: function() { alert('Closed'); } // Callback for Modal close
    }
  );
$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year
  today: 'Today',
  format: 'dd mmm, ddd',
  
  });
  
 



  
  
$(document).ready(function() {
  $(".Flying_From input").click(function() {
      $('.Flying_From_flight').show('fast');       
      //return false;
    });
    
  
 $('.Flying_From input').blur(function(){
    if( !$(this).val() ) {
          $('.Flying_From_flight').hide();
    }
});
});//end

$(document).ready(function() {
  $(".Flying_To input").click(function() {
      $('.Flying_To_flight').show('fast');       
      //return false;
    });
    
  
 $('.Flying_To input').blur(function(){
    if( !$(this).val() ) {
          $('.Flying_To_flight').hide();
    }
});
});//end
  
  


$(document).ready(function(){
    
    $('.Flying_box input').click( function(e) {
        
        e.preventDefault(); // stops link from making page jump to the top
        e.stopPropagation(); // when you click the button, it stops the page from seeing it as clicking the body too
        $('.Flying_agebox').toggle();
        
    });
    
    $('.Flying_agebox').click( function(e) {
        
        e.stopPropagation(); // when you click within the content area, it stops the page from seeing it as clicking the body too
        
    });
    
    $('body').click( function() {
       
        $('.Flying_agebox').hide();
        
    });
    
});
/*switch Toggle in Review one_way page By Deepika */
$(document).ready(function(){
  var switched = false;
  $(".switch").click(function(){
    $("article.autocontent").toggleClass("nodisplay");
    $("article.rccontent").toggleClass("nodisplay");
    if(switched){
      $(".toggle").animate({left:'0em'});
      switched = false;
      }
    else{
      $(".toggle").animate({left:'2em'});
      switched = true;
      }
  });
});

/* Traveller Gst*/
 $(function () {
        $("#chkPassport").click(function () {
            if ($(this).is(":checked")) {
                $(".dvPassport").show();
            } else {
                $(".dvPassport").hide();
            }
        });
    });
$('#forgot-cnt').hide();
 $("#forgot-button").click(function(){
        $("#forgot-cnt").slideToggle("slow");
    $('#login').hide();
});

$('#forgot-cnt').hide();
 $("#close").click(function(){
        $("#forgot-cnt").slideToggle("slow");
    $('#login').show();
    });
  
$('#register').hide();
 $("#sigunup").click(function(){
        $("#register").slideToggle("slow");
    $('#register').show();
    $('#login').hide();
    $('#forgot-cnt').hide();
    });
  

 $("#sign-btn").click(function(){
        $("#login").slideToggle("slow");
    $('#login').show();
    $('#register').hide();
    $('#forgot-cnt').hide();
    });

 //$(".select-fight").click(function () {
       //$(".select-fight").removeClass("unselected");
       // $(".select-fight").removeClass("selected");
        //$(this).addClass("selected").siblings().addClass("unselected");
  //});

 $(".select-fight1").click(function () {
        //$(".select-fight1").removeClass("unselected");
       // $(".select-fight1").removeClass("selected");
        $(".select-fight1").removeClass("active");
        $(".select-fight1").removeClass("unactive");
        //$(this).addClass("selected").siblings().addClass("unselected");
        $(this).addClass("active").siblings().addClass("unactive");
  });
  $(".select-fight").click(function () {
       // $(".select-fight").removeClass("unselected");
        //$(".select-fight").removeClass("selected");
         $(".select-fight").removeClass("active");
        $(".select-fight").removeClass("unactive");
       // $(this).addClass("selected").siblings().addClass("unselected");
        $(this).addClass("active").siblings().addClass("unactive");
  });

$('.fa-spin').hide();
 $("#btn-hide1").click(function(){
         $("#btn-hide1").addClass("disabled");
         $(".fa-spin").slideToggle("slow");
         $(".book-now").hide();
    
    });

$('#fdetails').hide();
 $("#flightdt1").click(function(){
        $("#fdetails").slideToggle("slow");      
}); 

//collapsible arrow only mobile show//
$(document).ready(function(){
  $( ".collapsible-header" ).click(function() {
      $(".more",this).toggle()
      $(".less", this).toggle()
  });
});

 $("#farerules").hide();
 $("#fare").click(function(){
        $("#farerules").slideToggle("slow");
    $(this).addClass("activef").siblings().addClass("unactivef");

});
  //$(".select-fight5").click(function () {
      //$(".select-fight5").removeClass("unselected");
      // $(".select-fight5").removeClass("selected");
        // $(".select-fight5").removeClass("active");
       // $(".select-fight5").removeClass("unactive");
       // $(this).addClass("selected").siblings().addClass("unselected");
        //$(this).addClass("active").siblings().addClass("unactive");
  //});

    

$("#gobtn1").click(function(){
       $('#guestlogin1').slideToggle("slow");
});

$("#gobtn2").click(function(){
       $('#guestlogin2').slideToggle("slow");
});



//$('.fa-spin').hide();

 $("#tab-link1").click(function(){
         $(".arrow1").addClass("toparw");
         $(".arrow2").removeClass("toparw");      
  });


 $("#tab-link2").click(function(){
         $(".arrow2").addClass("toparw");
          $(".arrow1").removeClass("toparw");    
});


 $('#swap').click(function(){
   //$('.icoAni').slideToggle('swapani');
  $(this).find(".icoAni").toggleClass('swapani');
});

  $('#a1').hide();
  $('#departure1').click(function(){
  $('#d1').hide();
  $('#departure1').hide();
  $('#a1').show();
  $('#arrival1').show();
});

 
  //$('#a1').hide();
  $('#arrival1').click(function(){
  $('#a1').hide();
  $('#arrival1').hide();
  $('#d1').show();
  $('#departure1').show();
});


  $('#as1').hide();
  $('#departures2').click(function(){
  $('#ds2').hide();
  $('#departures2').hide();
  $('#as1').show();
  $('#arrivals2').show();
});

 
  //$('#a1').hide();
  $('#arrivals2').click(function(){
  $('#as1').hide();
  $('#arrivals2').hide();
  $('#ds2').show();
  $('#departures2').show();
});






$('#ftr1').hide();
$('#pbtn').click(function(){
$('#ftr1').slideToggle('swapani');
$(this).find(".icochan").toggleClass('fa fa-plus fa fa-minus');
});

// $('#largeadd').hide();
//$('#add').click(function(){
 //$('#largeadd').slideToggle();
 

//$(this).find(".icochan").toggleClass('fa fa-plus fa fa-minus');

//});

 //$("sortarw").hide();
//$(".tab").click(function(){
   // $(this).find("i").toggleClass('fa fa-arrow-up fa fa-arrow-down');
//});




$(".tab").mouseover(function(){
$(this).find(".sorting").addClass ("fa fa-angle-down");

});

$(".tab").mouseout(function(){
$(this).find(".sorting").removeClass ("fa fa-angle-down");
});


$('.fare-summary').click(function(){
  $(this).next(".file-open02").slideToggle("slow");
  $(this).next(".file-open03").slideToggle("slow");
  $(this).find(".icochan").toggleClass('fa-chevron-down fa-chevron-up');
});

 //Departure Time animation
 //$(".rbt").click(function(){
       // $(".rbt").addClass("slcted");

        // if($('.rbt').hasClass("slcted")){
          //$("a.slcted").removeClass("slcted");
          //$(this).addClass('slcted');
          
                
        // };
    //});
 $(".rbt").click(function(){
        $(this).toggleClass("slcted");

        //$(this).find('i').addClass("deprt-icon").siblings().removeClass("deprt-icon");
         
      });

 //Departure Time animation
 //$(".dt").click(function(){
        //$("this").toggleClass("active");
       // $(this).find('i').addClass('deprt-icon');

        // if($('.dt').hasClass("active")){
         // $("a.active").removeClass("active");
          //$("i").removeClass("deprt-icon");
         // $(this).addClass('active');
         // $(this).find('i').addClass('deprt-icon');
          //$("a.active").addClass("active");
                        
         //};

    //});

  $(".dt").click(function(){
        $(this).toggleClass("active");


        //$(this).find('i').addClass("deprt-icon").siblings().removeClass("deprt-icon");
         
      });
 
 //flight details air plane animation
 $(".flit-open-to1").click(function(){
        $(".pln1").addClass("pln1-move");
    });

$("#D-one").click(function(){
        $("#d-contnt").hide();
         $("#D-one").hide();
 });

$("#A-one").click(function(){
        $("#a-contnt").hide();
         $("#A-one").hide();
 });