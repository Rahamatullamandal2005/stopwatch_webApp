window.onload = function () {
    let seconds = 0;
    let milliseconds = 0;
    let interval;

    const addSeconds = document.getElementById('seconds');
    const addMilliseconds = document.getElementById('milliseconds');
    const startButton = document.getElementById('start-btn');
    const pauseButton = document.getElementById('pause-btn');
    const resetButton = document.getElementById('reset-btn');
    const lapButton = document.getElementById('lap-btn');
    const lapContainer = document.getElementById('lap-container');

    // Hide lap container initially
    lapContainer.style.display = 'none';

    // Start Stopwatch
    startButton.onclick = function () {
        clearInterval(interval);
        interval = setInterval(start, 10);
    };

    // Pause Stopwatch
    pauseButton.onclick = function () {
        clearInterval(interval);
    };

    // Reset Stopwatch
    resetButton.onclick = function () {
        clearInterval(interval);
        seconds = 0;
        milliseconds = 0;
        addSeconds.textContent = '00';
        addMilliseconds.textContent = '00';
        lapContainer.innerHTML = ''; // Clear laps
        lapContainer.style.display = 'none'; // Hide lap container
    };

    // Lap Functionality
    lapButton.onclick = function () {
        const lapTime = `${addSeconds.textContent}:${addMilliseconds.textContent}`;
        const lapItem = document.createElement('div');
        lapItem.textContent = `Lap: ${lapTime}`;
        lapContainer.appendChild(lapItem);

        // Show lap container when there are laps
        lapContainer.style.display = 'block';
    };

    function start() {
        milliseconds++;
        if (milliseconds > 99) {
            seconds++;
            milliseconds = 0;
        }
        addMilliseconds.textContent = milliseconds < 10 ? '0' + milliseconds : milliseconds;
        addSeconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    }
};
