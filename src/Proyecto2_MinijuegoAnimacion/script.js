const character = document.getElementById('character');
const obstacle = document.getElementById('obstacle');

// Listens when the space bar is pulsed
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        jump();
    }
});

// Jump's function
function jump() {
    if (character.classList.contains('jump')) {
        return;
    }

    // Give the CSS class made
    character.classList.add('jump');

    // Use setTimeout to quit the class after 1s
    setTimeout(function () {
        character.classList.remove('jump');
    }, 1000);
}

    // Use setInterval to repeat this code constantly
    setInterval(function() {
        // Find the vertical position of the character
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));

        // Same with obstacle's horizontal position
        let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));

        // If the character is not touching the obstacle(0-20px) and character still on the air(top>=130)
        if (obstacleLeft < 40 && obstacleLeft > 0 && characterTop >= 130) {
            obstacle.style.animation = 'none';
            alert("GAME OVER")
        }
    }, 10);

