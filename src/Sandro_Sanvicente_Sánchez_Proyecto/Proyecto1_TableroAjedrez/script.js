// Empty box from HTML
const tablero = document.getElementById('tablero');

// Y Loop
for (let row = 0; row < 8; row++) {
     // X Loop
    for (let column = 0; column < 8; column++) {

        // New div that gonna be the box
        const casilla = document.createElement('div');

        /* CSS base class */
        casilla.classList.add('casilla');

        // If pair
        if ((row + column) % 2 === 0) {
            casilla.classList.add('white');
        // If odd
        } else {
            casilla.classList.add('black');
        }

        // Add chess piece
        if (row === 1) casilla.innerText = '♟';
        if (row === 6) casilla.innerText = '♟';

        // Add the new box to the board
        tablero.appendChild(casilla)
    }
}