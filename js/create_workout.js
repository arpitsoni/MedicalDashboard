 //jQuery UI Slider starts
 $(function() {
    $( "#prepTime-range-min" ).slider({
      range: "min",
      value: 5,
      min: 1,
      max: 1440,
      slide: function( event, ui ) {
        $( "#prepTime" ).val( ui.value + " min");
      }
    });
    $( "#prepTime" ).val($( "#prepTime-range-min" ).slider( "value" ) + " min");

    $( "#cookTime-range-min" ).slider({
      range: "min",
      value: 5,
      min: 1,
      max: 1440,
      slide: function( event, ui ) {
        $( "#cookTime" ).val( ui.value + " min");
      }
    });
    $( "#cookTime" ).val($( "#cookTime-range-min" ).slider( "value" ) + " min");
  });
//jQuery UI Slider ends




//date picker start

    if (top.location != location) {
        top.location.href = document.location.href ;
    }
    $(function(){
        window.prettyPrint && prettyPrint();

        //$('.dpYears').datepicker();
        //$('.dpMonths').datepicker();

        var startDate = new Date(2012,1,20);
        var endDate = new Date(2012,1,25);
        $('.dp4').datepicker()
            .on('changeDate', function(ev){
                if (ev.date.valueOf() > endDate.valueOf()){
                    $('.alert').show().find('strong').text('The start date can not be greater then the end date');
                } else {
                    $('.alert').hide();
                    startDate = new Date(ev.date);
                    $('#startDate').text($('.dp4').data('date'));
                }
                $('.dp4').datepicker('hide');
            });
        $('.dp5').datepicker()
            .on('changeDate', function(ev){
                if (ev.date.valueOf() < startDate.valueOf()){
                    $('.alert').show().find('strong').text('The end date can not be less then the start date');
                } else {
                    $('.alert').hide();
                    endDate = new Date(ev.date);
                    $('.endDate').text($('.dp5').data('date'));
                }
                $('.dp5').datepicker('hide');
            });

        // disabling dates
        var nowTemp = new Date();
        var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

        var checkin = $('.dpd1').datepicker({
            onRender: function(date) {
                return date.valueOf() < now.valueOf() ? 'disabled' : '';
            }
        }).on('changeDate', function(ev) {
                if (ev.date.valueOf() > checkout.date.valueOf()) {
                    var newDate = new Date(ev.date)
                    newDate.setDate(newDate.getDate() + 1);
                    checkout.setValue(newDate);
                }
                checkin.hide();
                $('.dpd2')[0].focus();
            }).data('datepicker');
        var checkout = $('.dpd2').datepicker({
            onRender: function(date) {
                return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
            }
        }).on('changeDate', function(ev) {
                checkout.hide();
            }).data('datepicker');
    });


//date picker start

var DietScript = function () {

        //Code to display Workout SUmmary Pie chart information
    var pieWorkoutSummaryData = [
        {
        value: 24,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Road Cycling"
    },
    {
        value: 13,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Walking"
    },
    {
        value: 3,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Commuting"
    }

    ];


    //Code to display Workout SUmmary Pie chart information
    var pieDailyCalorieSummaryData = [
        {
        value: 74,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Carbs"
    },
    {
        value: 17,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Proteins"
    },
    {
        value: 12,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Fats"
    }

    ];

    //Code to display Daily Elements Bar chart information
    var barDailyElementsData = {
        labels : ["Sodium","Potassium","Calcium","Carbohydrates","Iron","Protein","Fibre"],
        datasets : [
            {   //Values for Individual
                fillColor : "#46BFBD",
                strokeColor : "#46BFBD",
                data : [65,59,90,81,56,55,40],
                label: "You"
            },
            {   //Values by RDA
                fillColor : "#61E063",
                strokeColor : "#61E063",
                data : [65,59,90,81,56,55,40],
                label: "RDA"
            }
        ]

    };

    //Code to display Daily Vitamins Bar chart information
    var barVitaminsData = {
        labels : ["Vitamin A","Vitamin B1","Vitamin C","Vitamin D","Vitamin E","Vitamin K","Vitamin B2"],
        datasets : [
            {   //Values for Individual
                fillColor : "#46BFBD",
                strokeColor : "#46BFBD",
                data : [65,59,90,81,56,55,40],
                label: "You"
            },
            {    //Values by RDA
                fillColor : "#F476DA",
                strokeColor : "#F476DA",
                data : [65,59,90,81,56,55,40],
                label: "RDA"
            }
        ]

    };
    
    //Create Bar chart for displaying Daily Elements information
    var dailyElementsBarChart = new Chart(document.getElementById("dailyCalorieBreakdownBarChart").getContext("2d")).Bar(barDailyElementsData);

    //Create Bar chart for displaying Daily Vitamins information
    var dailyVitaminsBarChart = new Chart(document.getElementById("dailyVitaminsBarChart").getContext("2d")).Bar(barVitaminsData);

    //Create Line chart for displaying Daily Calorie Summary information
    var dailyCalorieSummaryPieChart = new Chart(document.getElementById("dailyCalorieSummaryPieChart").getContext("2d")).Pie(pieDailyCalorieSummaryData);

    //Create Legends for Daily Calorie Summary Piechart
    $("#dailyCalorieSummaryPieChartLegends").html(dailyCalorieSummaryPieChart.generateLegend());

     //Create Legends for Daily Elements 
    $("#dailyElementsBarLegends").html(dailyElementsBarChart.generateLegend());

    //Create Legends for Daily Vitamins
    $("#dailyVitaminsBarLegends").html(dailyVitaminsBarChart.generateLegend());

}();


//Creating Diet List

function createDiet(obj){

    if(obj)
    {   
        //getting parent row of selected checkbox
        var dietRow = obj.parentElement.parentNode;

        //creating delete button element
        var deleteButton = "<button class='btn btn-danger btn-sm pull-right' onclick='deleteDietList(this)'><i class='fa fa-trash-o'></i></button>";

        //getting parent td of checkbox
        var td = obj.parentElement;

        //adding delete button to td
        $(td).html(deleteButton);

        //removing checkbox
        obj.remove();

        //appending final row with delete button added and checkbox removed to the diet list
        $("#tblListDiets").append(dietRow);
    }
}

//Delete Diet List

function deleteDietList(obj){
    if(obj)
    {   
        //getting parent row of selected checkbox
        var dietRow = obj.parentElement.parentNode;

        //removing row
        dietRow.remove();
    }
}

