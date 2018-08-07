google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['Work', 8],
  ['Gym', 2],
  ['Sleep', 8]
 // ["Jedzenie"],
//['Mieszkanie'],
//[ 'Transport'],
//[ 'Telekomunikacja'],
//[' Opieka zdrowotna'],
//	[' Ubranie'],
	//[' Higiena'],
//[' Dzieci'],
//[' Rozrywka'],
//[' Wycieczka'],
//[' Szkolenia'],
//[' Książki'],
//[' Oszczędności'],
//[' Na złotą jesień, czyli emeryturę'],
 //['Spłata długów'],
 //[' Darowizna'],
//['Inne wydatki']
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'My Average Day', 'width':350, 'height':150};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('chartContainer'));
  chart.draw(data, options);