

//handiling Goal Creation form 

//hiding other sections other than Primary Goal
$("#lifestyleSection").hide();
$("#weightSection").hide();
$("#diseaseSection").hide();

//Next Even Handling

$("#btnNxtPrimaryGoal").on('click', function(){
    $("#goalSection").hide();
    $("#lifestyleSection").show();
    $("#weightSection").hide();
    $("#diseaseSection").hide();

});
$("#btnNxtLifestyle").on('click', function(){
    $("#goalSection").hide();
    $("#lifestyleSection").hide();
    $("#weightSection").show();
    $("#diseaseSection").hide();

});
$("#btnNxtWeight").on('click', function(){
    $("#goalSection").hide();
    $("#lifestyleSection").hide();
    $("#weightSection").hide();
    $("#diseaseSection").show();

});

//Previous Even Handling

$("#btnPreLifestyle").on('click', function(){
    $("#goalSection").show();
    $("#lifestyleSection").hide();
    $("#weightSection").hide();
    $("#diseaseSection").hide();

});
$("#btnPreWeight").on('click', function(){
    $("#goalSection").hide();
    $("#lifestyleSection").show();
    $("#weightSection").hide();
    $("#diseaseSection").hide();

});
$("#btnPreDisease").on('click', function(){
    $("#goalSection").hide();
    $("#lifestyleSection").hide();
    $("#weightSection").show();
    $("#diseaseSection").hide();

});
