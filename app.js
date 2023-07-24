
const productSizes = ["10oz", "16oz", "32oz"]; // Array of available sizes
const productNames = ["Megadose", "Microdose", "Shamanic"]; // Array of corresponding names
let currentSizeIndex = 0; // Initial index of the current size

function changeProduct(change) {
  currentSizeIndex += change;
  if (!currentSizeIndex) {
    currentSizeIndex = productSizes.length - 1;
  } else if (currentSizeIndex >= productSizes.length) {
    currentSizeIndex = 0;
  }
  
  const currentSize = document.getElementById("currentSize");
  const productName = document.getElementById("productName");
  currentSize.textContent = productSizes[currentSizeIndex];
  productName.textContent = productNames[currentSizeIndex];
}



// Get the "Order" list item by its ID
const orderListItem = document.getElementById("order");

// Get the order form by its ID
const orderForm = document.getElementById("orderForm");

// Add an event listener to the "Order" list item
orderListItem.addEventListener("click", () => {
  // Toggle the visibility of the order form when clicked
  orderForm.classList.toggle("hidden");
});
 // Add an event listener to the order button
 orderButton.addEventListener("click", () => {
  // Hide the order form when the order button is clicked
  orderForm.classList.add("hidden");
});


//ANIMATIONS 
const textElement = document.getElementById("sfText");
const texts = ["SF", "LA", "NY"];
let currentIndex = 0;

function animateText() {
  gsap.to(textElement, { duration: 1.5, text: texts[currentIndex], ease: "power3.inOut" });
  currentIndex = (currentIndex + 1) % texts.length;
}

animateText();
setInterval(animateText, 1000); // Change text every 3 seconds