

//handiling Goal Creation form 

//hiding other sections other than Primary Goal
$("#lifestyleSection").hide();

$("#diseaseSection").hide();

//Next Even Handling

$("#btnNxtPrimaryGoal").on('click', function(){
    $("#goalSection").hide();
    $("#lifestyleSection").show();
    $("#diseaseSection").hide();

});
$("#btnNxtLifestyle").on('click', function(){
    $("#goalSection").hide();
    $("#lifestyleSection").hide();
    $("#diseaseSection").show();

});


//Previous Even Handling

$("#btnPreLifestyle").on('click', function(){
    $("#goalSection").show();
    $("#lifestyleSection").hide();
    
    $("#diseaseSection").hide();

});

$("#btnPreDisease").on('click', function(){
    $("#goalSection").hide();
    $("#lifestyleSection").show();
    
    $("#diseaseSection").hide();

});
