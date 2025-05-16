const countdown = document.querySelector('#countdown');
const startButton = document.querySelector('#startbutton');

const input = document.querySelector('#input');

startButton.addEventListener('click', () => {
    // Clear any existing countdown
    let count = 0;
    const intervalId = setInterval(() => {
        count += 1;
        console.log(count);
        if (count === 3) {
            clearInterval(intervalId);
        }
    }, 1000);
});
