// Button event handlers

// Change background to random color - this was fun to implement
function changeBackgroundColor() {
  // Random hex color generator
  const colors = Math.floor(Math.random() * 16777215);
  const hexColor = '#' + colors.toString(16).padStart(6, '0');
  
  // Apply the new color
  document.body.style.backgroundColor = hexColor;
}

// Reset background color on double-click
function resetBackgroundColor() {
  // Clear the background (goes back to default)
  document.body.style.backgroundColor = '';
}

// Keyboard event handling

// Show which key was pressed
function displayKeyPress(e) {
  const displayElement = document.getElementById('keyPressDisplay');
  
  // Format: "Key pressed: B" - keeping it simple
  displayElement.textContent = `Key pressed: ${e.key}`;
}

// Text input handling 

// Real-time text display as user types
function displayUserInput() {
  const inputField = document.getElementById('textInput');
  const outputDisplay = document.getElementById('textInputDisplay');
  
  // Show what they're typing - Format: "You typed: Test Input"
  outputDisplay.textContent = `You typed: ${inputField.value}`;
}

// Event listener setup
function setupEventListeners() {
  // Color change button
  const colorBtn = document.getElementById('changeColorButton');
  colorBtn.addEventListener('click', changeBackgroundColor);

  // Reset button (double-click)
  const resetBtn = document.getElementById('resetColorButton');
  resetBtn.addEventListener('dblclick', resetBackgroundColor);

  // Global keydown listener
  document.addEventListener('keydown', displayKeyPress);

  // Text input listener - fires on every keystroke
  const textInputElement = document.getElementById('textInput');
  textInputElement.addEventListener('input', displayUserInput);
}

// Wait for page to load before setting up events
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners);
}

// Export functions for testing/reuse
module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};