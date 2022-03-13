function greeting() {
  const loginForm = document.querySelector("#login-form");
  const loginInput = document.querySelector("#login-form input");
  const loginButton = document.querySelector("#login-form button");
  const greeting = document.querySelector("#greeting");

  const HIDDEN_CLASSNAME = "hidden";
  const USERNAME_KEY = "userName";

  function SubmitLoginForm(event) {
    event.preventDefault();
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    PaintGreetings(userName);
  }

  function PaintGreetings(userName) {
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
  }

  const savedUserName = localStorage.getItem(USERNAME_KEY);

  if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", SubmitLoginForm);
  } else {
    PaintGreetings(savedUserName);
  }
}

export default greeting;
