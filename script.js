document.getElementById('bell').addEventListener('click', () => {
    const audio = new Audio('bell.mp3');
    audio.play();
});

document.getElementById('uv-lamp').addEventListener('click', () => {
    const uvCircle = document.getElementById('uv-circle');
    uvCircle.style.display = 'block';

    document.addEventListener('mousemove', (e) => {
        uvCircle.style.top = `${e.clientY - 50}px`;
        uvCircle.style.left = `${e.clientX - 50}px`;

        document.querySelectorAll('.hidden-letter').forEach(letter => {
            const rect = letter.getBoundingClientRect();
            const circleRect = uvCircle.getBoundingClientRect();
            if (circleRect.left < rect.right && circleRect.right > rect.left &&
                circleRect.top < rect.bottom && circleRect.bottom > rect.top) {
                letter.classList.add('revealed');
            }
        });
    });
});

document.getElementById('code-input').addEventListener('input', (e) => {
    const correctCode = 'BNA';  // Set your correct code here
    if (e.target.value === correctCode) {
        
        alert('Code correct! You can go to the next page.');
        // Navigate to the next page
        window.location.href = 'nextpage.html';
    }
});
