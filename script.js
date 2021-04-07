let questions = [
    {
        title: 'gato',
        alternatives: ['dog', 'cat', 'bird', 'fish'],
        correctAnswer: 1
    },
    {
        title: 'ave',
        alternatives: ['mouse', 'hamster', 'lizard', 'bird'],
        correctAnswer: 3
    },
    {
        title: 'rata',
        alternatives: ['cat', 'fish', 'rat', 'shark'],
        correctAnswer: 2
    },
    {
        title: 'mosca',
        alternatives: ['fly', 'puma', 'fish', 'dog'],
        correctAnswer: 0
    }
];

let app = {
    start: function () {
        this.score = 0;
        this.updateStats();
        this.currentPosition = 0;
        let alts = document.querySelectorAll('.alternative');
        alts.forEach((element, index) => {
            console.log(this)
            element.addEventListener('click', () => {
                this.checkAnswer(index);
            });
        });
        this.showQuestion(questions[this.currentPosition])
    },
    showQuestion: function (q) {

        let titleDiv = document.getElementById('title');
        titleDiv.textContent = q.title;
        let alts = document.querySelectorAll('.alternative');
        alts.forEach(function (element, index) {
            element.textContent = q.alternatives[index];
        });
    },
    checkAnswer: function (userSelected) {
        let currentQuestion = questions[this.currentPosition];
        let feedbackDiv = document.getElementById('feedback')
        if (currentQuestion.correctAnswer == userSelected) {
            // correct answer
            feedbackDiv.textContent = 'You are Correct'
            this.score++;
        }
        else {
            // incorrect answer
            feedbackDiv.textContent = 'You are Incorrect'
        }
        this.updateStats();
        this.increasePosition();
        this.showQuestion(questions[this.currentPosition])

    },
    increasePosition: function () {
        this.currentPosition++;
        if (this.currentPosition == questions.length) {
            this.currentPosition = 0;
        }
    },
    updateStats: function () {
        let scoreDiv = document.getElementById('score')
        scoreDiv.textContent = `Your Score is: ${this.score}`;
    }
};

app.start()



