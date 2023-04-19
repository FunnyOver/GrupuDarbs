  function displayPopup() {
    alert("Please be careful! This action cannot be undone.");
  }
  
  var dangerButton = document.querySelector(".btn-danger");
  dangerButton.addEventListener("click", displayPopup);

  function openRegistrationPage() {
    window.open("registration.html", "_blank", "width=600,height=400");
  }
  
  document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();
    window.location.href = "index.html";
  });
