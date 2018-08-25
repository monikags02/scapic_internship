$(document).ready(function () {

 $('#retrieve-resources').click(function () {
 var displayResources = $('#display-resources');

 displayResources.text('Loading data from JSON source...');

 $.ajax({
 type: "GET",
 url: "http://localhost:3000/StudentDB/",
 success: function(result)
 {
 console.log(result);
 var output="<table><thead><tr><th>Name</th><th>Rollno</th><th>Class</th><th>PHY</th><th>CHEM</th><th>MATH</th><th>CutOff</th></thead><tbody>";
 for (var i in result)
 {
 output+="<tr><td>" + result[i].Name + "</td><td>" + result[i].Rollno+ "</td><td>" + result[i].Class + "</td><td>" + result[i].Phy + "</td><td>" + result[i].Chem + "</td><td>" + result[i].Math + "</td><td>" + result[i].cutoff + "</td></tr>";
 }
 output+="</tbody></table>";

 displayResources.html(output);
 $("table").addClass("table");
 }
 });

 });
});