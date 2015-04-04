$('#reportModal').on('shown.bs.modal', function () { //listen for user to open modal
    $(function () {
    $( "#hero-bar" ).empty(); //clear chart so it doesn't create multiple if multiple clicks
        // Create a Bar Chart with Morris
         var hrChart = Morris.Bar({
        element: 'hero-bar',
        data: [
          {device: 'iPhone', geekbench: 136},
          {device: 'iPhone 3G', geekbench: 137},
          {device: 'iPhone 3GS', geekbench: 275},
          {device: 'iPhone 4', geekbench: 380},
          {device: 'iPhone 4S', geekbench: 655},
          {device: 'iPhone 5', geekbench: 1571}
        ],
        xkey: 'device',
        ykeys: ['geekbench'],
        labels: ['Geekbench'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'auto',
        barColors: ['#6883a3']
      });

        // // Fire off an AJAX request to load the data
        // $.ajax({
        //     type: "GET",
        //     dataType: 'json',
        //     url: "../scripts/all_versions.php", // This is the URL to the API

        // })
        //     .done(function (data) {
        //         // When the response to the AJAX request comes back render the chart with new data
        //         chart.setData(data);
        //     })
        //     .fail(function () {
        //         // If there is no communication between the server, show an error
        //         alert("error occured");
        //    });
        });
        });

