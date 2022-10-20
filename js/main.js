// Form validation

form.addEventListener("submit", (e) => {
  const form = document.getElementById("form");
  const email = document.getElementById("email").value;
  const text = document.getElementById("text");
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Your Email Address is valid";
    text.style.color = "#00f000";
  } else {
    e.preventDefault();
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Oops! Please check your email";
  }

  if (email == "") {
    e.preventDefault();
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Oops! Please add your email";
  }
});
