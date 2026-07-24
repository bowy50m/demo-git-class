const summary = document.getElementById("summary");
const toggleButton = document.getElementById("toggleButton");

const content = {
  about: {
    text: "I'm new to studying web development.",
    button: "My Goal",
  },
  goal: {
    text: "My goal is to master web development and work at a global company.",
    button: "Return",
  },
};

let currentView = "about";

toggleButton.addEventListener("click", function () {
  const nextView = currentView === "about" ? "goal" : "about";
  const nextContent = content[nextView];

  summary.classList.add("is-fading");

  setTimeout(() => {
    summary.textContent = nextContent.text;
    toggleButton.textContent = nextContent.button;
    summary.classList.remove("is-fading");
    currentView = nextView;
  }, 250);
});
