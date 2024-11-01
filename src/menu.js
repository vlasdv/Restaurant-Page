import mainImage from "./img/image.png";

function createMenuPage() {
  // <img src="src/image.png">
  // <h1>Embrace Flavor, Nourish Your Soul.</h1>
  // <p>Welcome to Green Haven, where every dish celebrates the beauty and bounty of plant-based living. Our menu brings together the freshest, sustainably-sourced ingredients to create vibrant, delicious meals that satisfy both the heart and soul. At Green Haven, we believe that good food should leave you feeling inspired, balanced, and connected to nature. Whether you’re a seasoned vegan or simply exploring, join us to experience meals crafted with love, passion, and respect for the earth.</p>
  const contentDiv = document.querySelector("#content");
  
  const image = document.createElement("img");
  image.src = mainImage;
  image.width = 800;

  contentDiv.appendChild(image);

  const heading = document.createElement("h1");
  heading.textContent = "Check our seasonal menu";

  contentDiv.appendChild(heading);

  const menuUnorderedList = document.createElement("ul");
  const menuItems = [
    "Green Goddess Salad - Fresh greens, avocado, and a house-made herb dressing",
    "Rainbow Veggie Wrap - Mixed vegetables with hummus in a spinach wrap",
    "Spicy Chickpea Bowl - Roasted chickpeas, quinoa, and spicy tahini sauce",
    "Stuffed Portobello Mushrooms - Portobello mushrooms with cashew cheese filling",
    "Coconut Mango Smoothie - Coconut milk, mango, and a hint of ginger"
  ];

  for (let i = 0; i < menuItems.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = menuItems[i];
    menuUnorderedList.appendChild(listItem);
  }
  
  contentDiv.appendChild(menuUnorderedList);  
}

export default createMenuPage;