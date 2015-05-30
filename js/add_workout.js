 //jQuery UI Slider starts
 $(function() {
    $( "#prepTime-range-min" ).slider({
      range: "min",
      value: 5,
      min: 1,
      max: 600,
      slide: function( event, ui ) {
        $( "#prepTime" ).val( ui.value + " min");
      }
    });
    $( "#prepTime" ).val($( "#prepTime-range-min" ).slider( "value" ) + " min");

    $( "#cookTime-range-min" ).slider({
      range: "min",
      value: 5,
      min: 1,
      max: 600,
      slide: function( event, ui ) {
        $( "#cookTime" ).val( ui.value + " min");
      }
    });
    $( "#cookTime" ).val($( "#cookTime-range-min" ).slider( "value" ) + " min");
  });
//jQuery UI Slider ends

//wysihtml5 start

$('.wysihtml5').wysihtml5();

//wysihtml5 end