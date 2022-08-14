html = "";
html += "<select id = 'w-30'> class = 'form-select'";
html += "<option>Date</option>";
for (var i = 1; i <= 31; i++) {
  html += "<option>" + i + "</option>";
}
html += "</select>";

document.getElementById("date").innerHTML = html;

month = "";
month += "<select id = 'w-30'> class = 'form-select'";
month += "<option>Month</option>";
for (var i = 1; i <= 12; i++) {
  month += "<option>" + i + "</option>";
}
month += "</select>";

document.getElementById("month").innerHTML = month;

year = "";
year += "<select id = 'w-30'> class = 'form-select'";
year += "<option>Year</option>";
for (var i = 1940; i <= 2022; i++) {
  year += "<option>" + i + "</option>";
}
year += "</select>";

document.getElementById("year").innerHTML = year;

document.getElementById("date2").innerHTML = html;
document.getElementById("month2").innerHTML = month;
document.getElementById("year2").innerHTML = year;

function result() {
  let x = Math.floor(Math.random() * 100 + 1);
  alert(x);
}

$(".data").hide();
$(document).ready(function () {
  $(".toggle1").click(function () {
    $(".data2").hide();
    $(".data3").hide();
    $(".data4").hide();

    $(".data").toggle();
  });
});

$(".data2").hide();
$(document).ready(function () {
  $(".toggle2").click(function () {
    $(".data").hide();
    $(".data3").hide();
    $(".data4").hide();
    $(".data2").toggle();
  });
});

$(".data3").hide();
$(document).ready(function () {
  $(".toggle3").click(function () {
    $(".data").hide();
    $(".data2").hide();
    $(".data4").hide();

    $(".data3").toggle();
  });
});

$(".data4").hide();
$(document).ready(function () {
  $(".toggle4").click(function () {
    $(".data").hide();
    $(".data2").hide();
    $(".data3").hide();

    $(".data4").toggle();
  });
});
