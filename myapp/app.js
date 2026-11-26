const screens = document.querySelectorAll(".screen");

const show = (id) => {
  screens.forEach((screen) => {
    screen.classList.toggle("hidden", screen.id !== id);
  });
};

const getUsers = () => {
  const raw = localStorage.getItem("users");
  return JSON.parse(raw) ?? [];
};

// Show the registration screen after the 2-second splash screen.
setTimeout(() => show("register"), 2000);

// Switch between screens using the links and log-out button.
document.addEventListener("click", (event) => {
  const id = event.target.id;

  if (id === "toLogin") {
    event.preventDefault();
    show("login");
  }

  if (id === "toRegister") {
    event.preventDefault();
    show("register");
  }

  if (id === "logout") {
    show("login");
  }
});

// Registration
const regForm = document.querySelector("#regForm");
const regMsg = document.querySelector("#regMsg");

regForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = regForm.elements;
  regMsg.textContent = "";

  try {
    if (form.password.value.length < 8) {
      throw new Error("Password must be at least 8 characters");
    }

    if (form.password.value !== form.confirm.value) {
      throw new Error("Passwords do not match");
    }

    const email = form.email.value.trim().toLowerCase();

    if (getUsers().some((user) => user.email === email)) {
      throw new Error("Email already used");
    }

    const users = [
      ...getUsers(),
      {
        name: form.name.value.trim(),
        email,
        password: form.password.value
      }
    ];

    localStorage.setItem("users", JSON.stringify(users));
    regForm.reset();
    show("login");
  } catch (error) {
    regMsg.textContent = error.message;
  }
});

// Login
const logForm = document.querySelector("#logForm");
const logMsg = document.querySelector("#logMsg");
const welcomeText = document.querySelector("#welcomeText");

logForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = logForm.elements;
  logMsg.textContent = "";

  const email = form.email.value.trim().toLowerCase();
  const user = getUsers().find((savedUser) => savedUser.email === email);

  if (user?.password === form.password.value) {
    welcomeText.textContent = `Welcome, ${user.name}!`;
    logForm.reset();
    show("welcome");
  } else {
    logMsg.textContent = "Wrong email or password";
  }
});

// Light and dark mode
const root = document.documentElement;
const toggle = document.querySelector("#themeToggle");

const setTheme = (name) => {
  const dark = name === "dark";
  root.dataset.theme = name;
  toggle.textContent = dark ? "Light" : "Dark";
  localStorage.setItem("theme", name);
};

const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");

setTheme(savedTheme ?? (systemDark ? "dark" : "light"));

toggle.addEventListener("click", () => {
  const dark = root.dataset.theme === "dark";
  setTheme(dark ? "light" : "dark");
});
