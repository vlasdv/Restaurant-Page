import mainImage from "./img/image.png";

function createAboutPage() {
  // <img src="src/image.png">
  // <h1>Embrace Flavor, Nourish Your Soul.</h1>
  // <p>Welcome to Green Haven, where every dish celebrates the beauty and bounty of plant-based living. Our menu brings together the freshest, sustainably-sourced ingredients to create vibrant, delicious meals that satisfy both the heart and soul. At Green Haven, we believe that good food should leave you feeling inspired, balanced, and connected to nature. Whether you’re a seasoned vegan or simply exploring, join us to experience meals crafted with love, passion, and respect for the earth.</p>
  const contentDiv = document.querySelector("#content");
  
  const image = document.createElement("img");
  image.src = mainImage;
  image.width = 800;

  contentDiv.appendChild(image);

  const heading = document.createElement("h1");
  heading.textContent = "What's this all about?";

  contentDiv.appendChild(heading);

  const mainDescription = document.createElement("p");
  mainDescription.textContent = "I'm too lazy to add something here now";
  
  contentDiv.appendChild(mainDescription);  
}

export default createAboutPage;