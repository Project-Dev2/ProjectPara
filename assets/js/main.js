/* Start Scroll card */
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 15,
  autoplay: true,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});
/* End Scroll card */

/* Start Scroll to top button */
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/* End Scroll to top button */

/* Start Validation Forms  */
const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const password = document.getElementById("password");
const passTwo = document.getElementById("passTwo");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const mobileValue = mobile.value.trim();
  const passwordValue = password.value.trim();
  const passTwoValue = passTwo.value.trim();

  if (firstNameValue === "") {
    setError(firstName, "Champ Obligatoire");
  } else {
    setSuccess(firstName);
  }

  if (lastNameValue === "") {
    setError(lastName, "Champ Obligatoire");
  } else {
    setSuccess(lastName);
  }

  if (emailValue === "") {
    setError(email, "Champ Obligatoire");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Adresse e-mail invalide");
  } else {
    setSuccess(email);
  }

  if (mobileValue === "") {
    setError(mobile, "Champ Obligatoire");
  } else if (mobileValue.length !== 8) {
    setError(mobile, "Le numéro de téléphone doit comporter 8 numéros");
  } else {
    setSuccess(mobile);
  }

  if (passwordValue === "") {
    setError(password, "Champ Obligatoire");
  } else if (passwordValue.length < 5) {
    setError(
      password,
      "Le mot de passe doit contenir au comporter 5 caractères"
    );
  } else {
    setSuccess(password);
  }

  if (passTwoValue === "") {
    setError(passTwo, "Confirmer le mot de passe");
  } else if (passwordValue !== passTwoValue) {
    setError(passTwo, "Les mots de passe ne sont pas correspondants");
  } else {
    setSuccess(passTwo);
  }
};
/* End Validation Forms */

/* Start Show & Hide Password */
var state = false;
function showPass() {
  if (state) {
    document.getElementById("password").setAttribute("type", "password");
    document.getElementById("showPass").style.color = "#9a9a9a";
    state = false;
  } else {
    document.getElementById("password").setAttribute("type", "text");
    document.getElementById("showPass").style.color = "#60c7c1";
    state = true;
  }
}

function toggle() {
  if (state) {
    document.getElementById("passTwo").setAttribute("type", "password");
    document.getElementById("eye").style.color = "#9a9a9a";
    state = false;
  } else {
    document.getElementById("passTwo").setAttribute("type", "text");
    document.getElementById("eye").style.color = "#60c7c1";
    state = true;
  }
}
/* End Show & Hide Password */
