// Set initial values
let neglectTime = 0; // in seconds
let isWatered = true;
let plantImage = document.getElementById('plant');
let message = document.getElementById('message');
let waterButton = document.getElementById('water-button');

// Image sources for different plant states
const healthyImage = 'plant_healthy.png';
const wiltedImage = 'plant_wilted.png';
const mutatedImage = 'plant_mutated.png';

// Function to update plant state based on neglect time
function updatePlantState() {
    if (neglectTime >= 20 && neglectTime < 40) {
        plantImage.src = wiltedImage;
        message.textContent = 'Your plant is wilting! Water it soon!';
    } else if (neglectTime >= 40) {
        plantImage.src = mutatedImage;
        message.textContent = 'Oh no! Your plant has mutated!';
    } else {
        plantImage.src = healthyImage;
        message.textContent = 'Your plant is doing great!';
    }
}

// Function to water the plant
function waterPlant() {
    isWatered = true;
    neglectTime = 0; // Reset neglect time when watered
    updatePlantState();
    message.textContent = 'You watered the plant. It looks happy now!';
}

// Function to track neglect time
function trackNeglect() {
    if (!isWatered) {
        neglectTime++;
        updatePlantState();
    }
}

// Event listener for the water button
waterButton.addEventListener('click', () => {
    waterPlant();
});

// Start tracking neglect time
setInterval(() => {
    if (!isWatered) {
        trackNeglect();
    }
}, 1000); // Update every second
