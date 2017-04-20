$(function () { // Funksioni i mbylljes se butonit

  // Selektimi i butonit permes id se tij dhe ndegjimi per eventin ne fjale
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

// Ne firefox dhe safari, klikimi nuk e barte fokusin me vete, prandaj eventi blur nuk aktivizohet
// nese klikohet ne ndonje hapsire tjeter. Per kete arsye duhet te detyrohet shfletuesi qe
// ta barte fokusin gjate klikimit

  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});