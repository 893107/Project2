function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Day');
    data.addColumn('number', 'Guardians of the Galaxy');
    data.addColumn('number', 'The Avengers');
    data.addColumn('number', 'Transformers: Age of Extinction');

    data.addRows([
      [1,  37.8, 80.8, 41.8],
      [2,  30.9, 69.5, 32.4],
      [3,  25.4,   57, 25.7],
      [4,  11.7, 18.8, 10.5],
      [5,  11.9, 17.6, 10.4],
      [6,   8.8, 13.6,  7.7],
      [7,   7.6, 12.3,  9.6],
      [8,  12.3, 29.2, 10.6],
      [9,  16.9, 42.9, 14.8],
      [10, 12.8, 30.9, 11.6],
      [11,  5.3,  7.9,  4.7],
      [12,  6.6,  8.4,  5.2],
      [13,  4.8,  6.3,  3.6],
      [14,  4.2,  6.2,  3.4]
    ]);

    var options = {
      chart: {
        title: '',
        subtitle: ''
      },
      width: 900,
      height: 500,
      axes: {
        x: {
          0: {side: 'top'}
        }
      }
    };

    var chart = new google.charts.Line(document.getElementById('line_top_x'));

    chart.draw(data, google.charts.Line.convertOptions(options));
  }

  google.charts.load('current', {packages: ['corechart', 'bar']});
  google.charts.setOnLoadCallback(drawTitleSubtitle);
  
  function drawTitleSubtitle() {
        var data = google.visualization.arrayToDataTable([
          ['City', '2010 Population', '2000 Population'],
          ['New York City, NY', 8175000, 8008000],
          ['Los Angeles, CA', 3792000, 3694000],
          ['Chicago, IL', 2695000, 2896000],
          ['Houston, TX', 2099000, 1953000],
          ['Philadelphia, PA', 1526000, 1517000]
        ]);
  
        var materialOptions = {
          chart: {
            title: '',
            subtitle: ''
          },
          hAxis: {
            title: 'Total Population',
            minValue: 0,
          },
          vAxis: {
            title: 'City'
          },
          bars: 'horizontal'
        };
        var materialChart = new google.charts.Bar(document.getElementById('chart_div'));
        materialChart.draw(data, materialOptions);
      }