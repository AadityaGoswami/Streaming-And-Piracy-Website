google.charts.load("current", {
    packages: ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ["Streaming Service", "Monthly Paid Subscribers", {
            role: "style"
        }],
        ["Spotify", 124, "#00b894"],
        ["Apple Music", 60, "#dfe6e9 "],
        ["Amazon Music", 55, "#6c5ce7"],
        ["Tencent Music", 35.4, "#0984e3"],
        ["YouTube Music", 20, "#d63031"],
        ["Deezer", 7, "#e17055"],
        ["Pandora", 6.2, "#74b9ff"],
        ["Gaana", 1, "#ff7675"]
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1, {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        },
        2
    ]);

    var options = {
        title: "Paid Subscribers Per Month, 2019-20 (in millions)",

        bar: {
            groupWidth: "50%"
        },
        chartArea: {
            width: "88%",
            height: "70%"
        },
        legend: {
            position: "none"
        },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
    chart.draw(view, options);
}