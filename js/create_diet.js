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
