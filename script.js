const openModal = () => {
  var myModal = document.getElementById("myModal");
  var modal = new bootstrap.Modal(myModal);
  modal.show();
};

const closeAlert = () => {
  document.getElementById("alert").style.display = "none";
};

const aboutmore = () => {
  document.getElementById("more-content").style.display = "flex";
  document.getElementById("less-content").style.display = "none";
};

const aboutless = () => {
  document.getElementById("more-content").style.display = "none";
  document.getElementById("less-content").style.display = "flex";
};

document.addEventListener("DOMContentLoaded", openModal);
