function lamoda1() {
  document
    .getElementById("lamoda")
    .setAttribute("style", "display:flex, flex-direction: column");
  document.getElementById("lamoda1").setAttribute("style", "display: none");
  document.getElementById("lamoda2").setAttribute("style", "display: block");
  document.getElementById("notes").setAttribute("style", "display: none");
  document.getElementById("api").setAttribute("style", "display: none");
  document.getElementById("land").setAttribute("style", "display: none");

  //notes
  if (document.getElementById("notes2").style.display === "block") {
    document.getElementById("notes2").setAttribute("style", "display: none");
    document.getElementById("notes1").setAttribute("style", "display: block");
  }
  //api
  if (document.getElementById("api2").style.display === "block") {
    document.getElementById("api2").setAttribute("style", "display: none");
    document.getElementById("api1").setAttribute("style", "display: block");
  }
  //land
  if (document.getElementById("land2").style.display === "block") {
    document.getElementById("land2").setAttribute("style", "display: none");
    document.getElementById("land1").setAttribute("style", "display: block");
  }
}
function lamoda2() {
  document.getElementById("lamoda").setAttribute("style", "display: none");
  document.getElementById("lamoda2").setAttribute("style", "display: none");
  document.getElementById("lamoda1").setAttribute("style", "display: block");
  document.getElementById("notes").setAttribute("style", "display: none");

  //notes
  if (document.getElementById("notes2").style.display === "block") {
    document.getElementById("notes2").setAttribute("style", "display: none");
    document.getElementById("notes1").setAttribute("style", "display: block");
  }
  //api
  if (document.getElementById("api2").style.display === "block") {
    document.getElementById("api2").setAttribute("style", "display: none");
    document.getElementById("api1").setAttribute("style", "display: block");
  }
  //land
  if (document.getElementById("land2").style.display === "block") {
    document.getElementById("land2").setAttribute("style", "display: none");
    document.getElementById("land1").setAttribute("style", "display: block");
  }
}

function notes1() {
  document
    .getElementById("notes")
    .setAttribute("style", "display:flex, flex-direction: column");
  document.getElementById("notes1").setAttribute("style", "display: none");
  document.getElementById("notes2").setAttribute("style", "display: block");
  document.getElementById("lamoda").setAttribute("style", "display: none");
  document.getElementById("api").setAttribute("style", "display: none");
  document.getElementById("land").setAttribute("style", "display: none");
  //lamoda
  if (document.getElementById("lamoda2").style.display === "block") {
    document.getElementById("lamoda2").setAttribute("style", "display: none");
    document.getElementById("lamoda1").setAttribute("style", "display: block");
  }
  //api
  if (document.getElementById("api2").style.display === "block") {
    document.getElementById("api2").setAttribute("style", "display: none");
    document.getElementById("api1").setAttribute("style", "display: block");
  }
  //land
  if (document.getElementById("land2").style.display === "block") {
    document.getElementById("land2").setAttribute("style", "display: none");
    document.getElementById("land1").setAttribute("style", "display: block");
  }
}
function notes2() {
  document.getElementById("notes").setAttribute("style", "display: none");
  document.getElementById("notes2").setAttribute("style", "display: none");
  document.getElementById("notes1").setAttribute("style", "display: block");
  document.getElementById("lamoda").setAttribute("style", "display: none");

  //lamoda
  if (document.getElementById("lamoda2").style.display === "block") {
    document.getElementById("lamoda2").setAttribute("style", "display: none");
    document.getElementById("lamoda1").setAttribute("style", "display: block");
  }
  //api
  if (document.getElementById("api2").style.display === "block") {
    document.getElementById("api2").setAttribute("style", "display: none");
    document.getElementById("api1").setAttribute("style", "display: block");
  }
  //land
  if (document.getElementById("land2").style.display === "block") {
    document.getElementById("land2").setAttribute("style", "display: none");
    document.getElementById("land1").setAttribute("style", "display: block");
  }
}

function api1() {
  document
    .getElementById("api")
    .setAttribute("style", "display:flex, flex-direction: column");
  document.getElementById("api1").setAttribute("style", "display: none");
  document.getElementById("api2").setAttribute("style", "display: block");
  document.getElementById("notes").setAttribute("style", "display: none");
  document.getElementById("lamoda").setAttribute("style", "display: none");
  document.getElementById("land").setAttribute("style", "display: none");

  //lamoda
  if (document.getElementById("lamoda2").style.display === "block") {
    document.getElementById("lamoda2").setAttribute("style", "display: none");
    document.getElementById("lamoda1").setAttribute("style", "display: block");
  }
  //land
  if (document.getElementById("land2").style.display === "block") {
    document.getElementById("land2").setAttribute("style", "display: none");
    document.getElementById("land1").setAttribute("style", "display: block");
  }
  //notes
  if (document.getElementById("notes2").style.display === "block") {
    document.getElementById("notes2").setAttribute("style", "display: none");
    document.getElementById("notes1").setAttribute("style", "display: block");
  }
}
function api2() {
  document.getElementById("api").setAttribute("style", "display: none");
  document.getElementById("api2").setAttribute("style", "display: none");
  document.getElementById("api1").setAttribute("style", "display: block");

  //lamoda
  if (document.getElementById("lamoda2").style.display === "block") {
    document.getElementById("lamoda2").setAttribute("style", "display: none");
    document.getElementById("lamoda1").setAttribute("style", "display: block");
  }
  //land
  if (document.getElementById("land2").style.display === "block") {
    document.getElementById("land2").setAttribute("style", "display: none");
    document.getElementById("land1").setAttribute("style", "display: block");
  }
  //notes
  if (document.getElementById("notes2").style.display === "block") {
    document.getElementById("notes2").setAttribute("style", "display: none");
    document.getElementById("notes1").setAttribute("style", "display: block");
  }
}

function land1() {
  document
    .getElementById("land")
    .setAttribute("style", "display:flex, flex-direction: column");
  document.getElementById("land1").setAttribute("style", "display: none");
  document.getElementById("land2").setAttribute("style", "display: block");
  document.getElementById("notes").setAttribute("style", "display: none");
  document.getElementById("lamoda").setAttribute("style", "display: none");
  document.getElementById("api").setAttribute("style", "display: none");

  //notes
  if (document.getElementById("notes2").style.display === "block") {
    document.getElementById("notes2").setAttribute("style", "display: none");
    document.getElementById("notes1").setAttribute("style", "display: block");
  }
  //lamoda
  if (document.getElementById("lamoda2").style.display === "block") {
    document.getElementById("lamoda2").setAttribute("style", "display: none");
    document.getElementById("lamoda1").setAttribute("style", "display: block");
  }
  //api
  if (document.getElementById("api2").style.display === "block") {
    document.getElementById("api2").setAttribute("style", "display: none");
    document.getElementById("api1").setAttribute("style", "display: block");
  }
}
function land2() {
  document.getElementById("land").setAttribute("style", "display: none");
  document.getElementById("land2").setAttribute("style", "display: none");
  document.getElementById("land1").setAttribute("style", "display: block");

  //notes
  if (document.getElementById("notes2").style.display === "block") {
    document.getElementById("notes2").setAttribute("style", "display: none");
    document.getElementById("notes1").setAttribute("style", "display: block");
  }
  //lamoda
  if (document.getElementById("lamoda2").style.display === "block") {
    document.getElementById("lamoda2").setAttribute("style", "display: none");
    document.getElementById("lamoda1").setAttribute("style", "display: block");
  }
  //api
  if (document.getElementById("api2").style.display === "block") {
    document.getElementById("api2").setAttribute("style", "display: none");
    document.getElementById("api1").setAttribute("style", "display: block");
  }
}
