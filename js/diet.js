var DietScript = function () {

    //Code to display Weight Line chart information
    var lineChartData = {
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
    var pieData = [
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
    var barChartData = {
        labels : ["January","February","March","April","May","June","July"],
        datasets : [
            {
                fillColor : "#053A69",
                strokeColor : "#053A69",
                data : [65,59,90,81,56,55,40]
            }
        ]

    };
    
    var weightLineChart = new Chart(document.getElementById("weightLineChart").getContext("2d")).Line(lineChartData);
    var dailyCalorieBreakdownBarChart = new Chart(document.getElementById("dailyCalorieBreakdownBarChart").getContext("2d")).Bar(barChartData);
    var pointsBarChart = new Chart(document.getElementById("pointsBarChart").getContext("2d")).Bar(barChartData);
    var pieChart = new Chart(document.getElementById("pie").getContext("2d")).Pie(pieData);
    var dailyCalorieSummaryPieChart = new Chart(document.getElementById("dailyCalorieSummaryPieChart").getContext("2d")).Pie(pieData);
    $("#pieChartLegends").html(pieChart.generateLegend());
    $("#dailyCalorieSummaryPieChartLegends").html(pieChart.generateLegend());

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