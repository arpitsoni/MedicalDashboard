var DietScript = function () {

    //Code to display Weight Line chart information
    var lineChartWeightData = {
        labels : ["Apr 1","Apr 2","Apr 4","Apr 5","Apr 6","Apr 7","Apr 8"],
        datasets : [
            {
                fillColor : "rgba(220,220,220,0.5)",
                strokeColor : "rgba(220,220,220,1)",
                pointColor : "rgba(220,220,220,1)",
                pointStrokeColor : "red",
                data : [65,59,90,81,56,55,40]
            },
            {
                fillColor : "rgba(151,187,205,0.5)",
                strokeColor : "rgba(151,187,205,1)",
                pointColor : "rgba(151,187,205,1)",
                pointStrokeColor : "blue",
                data : [67,48,88,85,56,57,50]
            }
        ]

    };

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

    //Create Line chart for displaying Weight information    
    var weightLineChart = new Chart(document.getElementById("weightLineChart").getContext("2d")).Line(lineChartWeightData);

    //Create Bar chart for displaying Daily Elements information
    var dailyElementsBarChart = new Chart(document.getElementById("dailyCalorieBreakdownBarChart").getContext("2d")).Bar(barDailyElementsData);

    //Create Bar chart for displaying Daily Vitamins information
    var dailyVitaminsBarChart = new Chart(document.getElementById("dailyVitaminsBarChart").getContext("2d")).Bar(barVitaminsData);

    //Create Pie chart for displaying Workout Summary information
    var workoutSummaryPieChart = new Chart(document.getElementById("pie").getContext("2d")).Pie(pieWorkoutSummaryData);

    //Create Line chart for displaying Daily Calorie Summary information
    var dailyCalorieSummaryPieChart = new Chart(document.getElementById("dailyCalorieSummaryPieChart").getContext("2d")).Pie(pieDailyCalorieSummaryData);

    //Create Legends for Workout Summary Piechart
    $("#pieChartLegends").html(workoutSummaryPieChart.generateLegend());

    //Create Legends for Daily Calorie Summary Piechart
    $("#dailyCalorieSummaryPieChartLegends").html(dailyCalorieSummaryPieChart.generateLegend());

     //Create Legends for Daily Elements 
    $("#dailyElementsBarLegends").html(dailyElementsBarChart.generateLegend());

    //Create Legends for Daily Vitamins
    $("#dailyVitaminsBarLegends").html(dailyVitaminsBarChart.generateLegend());

}();

var DietEasyPieChart = function () {

// easy pie chart

    $('.percentage').easyPieChart({
        animate: 1000,
        size: 175,
        barColor:'#ff6c60'
    });
    $('.percentage-light').easyPieChart({
        barColor: function(percent) {
            percent /= 100;
            return "rgb(" + Math.round(255 * (1-percent)) + ", " + Math.round(255 * percent) + ", 0)";
        },
        trackColor: '#666',
        scaleColor: false,
        lineCap: 'butt',
        lineWidth: 15,
        animate: 1000
    });

    $('.update-easy-pie-chart').click(function(){
        $('.easy-pie-chart .percentage').each(function() {
            var newValue = Math.floor(100*Math.random());
            $(this).data('easyPieChart').update(newValue);
            $('span', this).text(newValue);
        });
    });

    $('.updateEasyPieChart').on('click', function(e) {
        e.preventDefault();
        $('.percentage, .percentage-light').each(function() {
            var newValue = Math.round(100*Math.random());
            $(this).data('easyPieChart').update(newValue);
            $('span', this).text(newValue);
        });
    });

}();

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

//wysihtml5 start

$('.wysihtml5').wysihtml5();

//wysihtml5 end