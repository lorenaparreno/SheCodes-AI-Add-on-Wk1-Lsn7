let challenge2Element = document.querySelector("#challenge-2");
let text = "Lorena Parreno";
let index = 0;

function typeText() {
  if (index < text.length) {
    challenge2Element.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 100);
  }
}

typeText();



new Typewriter("h2", {
  strings: "Lorena Parreno",
  autoStart: true,
  cursor: "",
  delay: 100,
});

