import "./styles.css";
import createMainPage from "./home";
import createMenuPage from "./menu";
import createAboutPage from "./about";

console.log("inside index.js file");
createMainPage()

const contentDiv = document.getElementById("content");

const homeButton = document.getElementById("home");
homeButton.addEventListener("click", redrawPage)

const menuButton = document.getElementById("menu");
menuButton.addEventListener("click", redrawPage)

const about = document.getElementById("about");
about.addEventListener("click", redrawPage)

function redrawPage(event) {  
  contentDiv.replaceChildren();
  console.log(event.target.id);
  switch (event.target.id) {
    case "home":
      createMainPage();
      break;
    case "menu":
      createMenuPage();
      break;
    case "about":
      createAboutPage();
      break;
    default:
      console.log("unknown button");
  }
}