document.addEventListener('DOMContentLoaded', function() {
    let maxAttemptsInput = document.getElementById('maxAttempts');
    let attempt = 0;
    let score = 0;
    let rangeMin, rangeMax;

    function setDifficulty() {
        let difficulty = document.getElementById('difficulty').value;
        switch (difficulty) {
            case 'easy':
                rangeMin = 1;
                rangeMax = 10;
                break;
            case 'medium':
                rangeMin = 1;
                rangeMax = 50;
                break;
            case 'hard':
                rangeMin = 1;
                rangeMax = 100;
                break;
            default:
                rangeMin = 1;
                rangeMax = 10;
        }
        document.getElementById('myLabel').innerText = `Enter a number between ${rangeMin} and ${rangeMax}:`;
    }
     

    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function myFunction() {
        setDifficulty();
        let randNum = generateRandomNumber(rangeMin, rangeMax);
        attempt++;
        let maxAttempts = parseInt(maxAttemptsInput.value);
        let guess = parseInt(document.getElementById('guessTxt').value);
        let feedback = document.getElementById('feedback');

        if (guess === randNum) {
            feedback.innerHTML = "You are correct!";
            score++;
            document.getElementById('score').innerText = score;
        } else if (guess > randNum) {
            feedback.innerHTML = "Try a smaller number!";
        } else {
            feedback.innerHTML = "Try a bigger number!";
        }

        if (attempt >= maxAttempts) {
            alert("Game over!!!");
            document.getElementById('guessTxt').disabled = true;
            attempt = 0; // Reset attempt count
        }
    }

    function resetGame() {
        document.getElementById('guessTxt').value = "";
        document.getElementById('guessTxt').disabled = false;
        document.getElementById('feedback').innerHTML = "";
        attempt = 0; // Reset attempt count
    }

    document.getElementById('guessBtn').addEventListener('click', myFunction);
    document.getElementById('resetBtn').addEventListener('click', resetGame);

    // Initial setup
    setDifficulty();
});
