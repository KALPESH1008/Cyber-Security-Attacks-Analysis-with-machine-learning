// scripts.js

window.onload = function() {
    const visualization = document.getElementById('visualization');

    // Example: Toggle display of visualization section
    if (visualization) {
        visualization.style.display = 'none'; // Initially hide visualization
        setTimeout(function() {
            visualization.style.display = 'block'; // Show after a delay (simulating loading)
        }, 2000);
    }
};
