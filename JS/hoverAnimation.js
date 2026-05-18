// Hover Animation Script
// This script handles hover effects on specific words, triggering a panning image animation

const hoverWords = document.querySelectorAll('.hover-trigger');
const panningContainer = document.getElementById('panning-container');
const panningImage = document.getElementById('panning-image');

hoverWords.forEach(word => {
    word.addEventListener('mouseenter', function() {
        // Get the image source from the word's data attribute
        const imageSrc = this.getAttribute('data-image');
        
        // Set the image source
        panningImage.src = imageSrc;
        
        // Show the panning container
        panningContainer.style.display = 'block';
        
        // Trigger the animation by adding the active class
        panningContainer.classList.add('active');
    });
    
    word.addEventListener('mouseleave', function() {
        // Remove the active class to stop the animation
        panningContainer.classList.remove('active');
        
        // Hide after animation completes
        setTimeout(() => {
            panningContainer.style.display = 'none';
        }, 1500);
    });
});
