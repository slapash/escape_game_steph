let selectedTool = null;

document.getElementById('screwdriver').addEventListener('click', () => {
    selectedTool = 'screwdriver';
});

const screws = document.querySelectorAll('.screw');
screws.forEach(screw => {
    screw.addEventListener('mousedown', (e) => {
        if (selectedTool === 'screwdriver') {
            let rotateInterval = setInterval(() => {
                let currentRotation = getRotationDegrees(screw);
                screw.style.transform = `rotate(${currentRotation + 10}deg)`;
            }, 100);

            setTimeout(() => {
                clearInterval(rotateInterval);
                screw.style.display = 'none';
                checkAllScrews();
            }, 1000);
        }
    });
});

function getRotationDegrees(element) {
    const st = window.getComputedStyle(element, null);
    const tr = st.getPropertyValue("transform");
    if (tr === 'none') return 0;
    const values = tr.split('(')[1].split(')')[0].split(',');
    const a = values[0];
    const b = values[1];
    const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    return angle;
}

function checkAllScrews() {
    const remainingScrews = Array.from(document.querySelectorAll('.screw')).filter(screw => screw.style.display !== 'none');
    if (remainingScrews.length === 0) {
        document.getElementById('rectangle').style.display = 'none';
        document.getElementById('key').style.display = 'block';
    }
}

document.getElementById('key').addEventListener('mouseover', () => {
    document.getElementById('key').style.cursor = 'pointer';
});

document.getElementById('key').addEventListener('click', () => {
    alert('You found the key! The code is 1234.');
    // Implement additional logic to combine codes or navigate to next step
});

document.getElementById('code-input').addEventListener('input', (e) => {
    const correctCode = 'ABCD1234';  // Set your combined correct code here
    if (e.target.value === correctCode) {
        alert('Code correct! You win.');
        // Navigate to the next page or show winning message
    }
});
