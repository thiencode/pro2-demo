// Khai đối tượng testScore
var testScore = {
  name: "",
  math: 0,
  physical: 0,
  chemistry: 0,
};
var i = 1;
function enter() {
  // Khai báo và gán giá trị cho 1 ô input
  testScore.name = document.getElementById("lbl_name").value;
  testScore.math = document.getElementById("lbl_math").value;
  testScore.physical = document.getElementById("lbl_physical").value;
  testScore.chemistry = document.getElementById("lbl_chemistry").value;

  if (testScore.name == "") {
    document.getElementById("alertName").innerHTML = "(Không để trống ô này!)";
  } else if (
    testScore.math < 0 ||
    testScore.math > 10 ||
    testScore.math == ""
  ) {
    document.getElementById("alertName").innerHTML = "";
    document.getElementById("alertMath").innerHTML = "(Vui lòng nhập lại!)";
  } else if (
    testScore.physical < 0 ||
    testScore.physical > 10 ||
    testScore.physical == ""
  ) {
    document.getElementById("alertName").innerHTML = "";
    document.getElementById("alertMath").innerHTML = "";
    document.getElementById("alertPhysical").innerHTML = "(Vui lòng nhập lại!)";
  } else if (
    testScore.chemistry < 0 ||
    testScore.chemistry > 10 ||
    testScore.chemistry == ""
  ) {
    document.getElementById("alertName").innerHTML = "";
    document.getElementById("alertMath").innerHTML = "";
    document.getElementById("alertPhysical").innerHTML = "";
    document.getElementById("alertChemistry").innerHTML =
      "(Vui lòng nhập lại!)";
  } else {
    // Khai báo bảng
    var table = document.getElementById("myTable");
    // khai bao thêm hàng
    var row = table.insertRow(i);
    var cellStt = row.insertCell(0);
    var cellName = row.insertCell(1);
    var cellMath = row.insertCell(2);
    var cellPhysical = row.insertCell(3);
    var cellChemistry = row.insertCell(4);
    var cellAvg = row.insertCell(5);

    for (var i = 0, row; i < table.rows.length; i++) {
      // Gán giá trị hàng
      cellStt.innerHTML = i;
      cellName.innerHTML = testScore.name;
      cellMath.innerHTML = testScore.math;
      cellPhysical.innerHTML = testScore.physical;
      cellChemistry.innerHTML = testScore.chemistry;
      cellAvg.innerHTML = "?";

      //Xóa trắng các ô input
      document.getElementById("lbl_name").value = "";
      document.getElementById("lbl_math").value = "";
      document.getElementById("lbl_physical").value = "";
      document.getElementById("lbl_chemistry").value = "";
      document.getElementById("alertName").innerHTML = "";
      document.getElementById("alertMath").innerHTML = "";
      document.getElementById("alertPhysical").innerHTML = "";
      document.getElementById("alertChemistry").innerHTML = "";
    }
  }
}
// end button enter()

// grade point average
function average() {
  var table = document.getElementById("myTable");
  for (var i = 1, row; i < table.rows.length; i++) {
    var avg = (
      (parseFloat(table.rows[i].cells[2].innerHTML) +
        parseFloat(table.rows[i].cells[3].innerHTML) +
        parseFloat(table.rows[i].cells[4].innerHTML)) /
      3
    ).toFixed(1);
    table.rows[i].cells[5].innerHTML = avg;
  }
}

// classifycation
function classify() {
  var table = document.getElementById("myTable");
  for (var i = 0, row; i < table.rows.length; i++) {
    if (table.rows[i].cells[5].innerHTML >= 8) {
      table.rows[i].style.backgroundColor = "red";
    }
  }
}
