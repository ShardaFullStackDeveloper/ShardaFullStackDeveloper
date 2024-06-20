let questionNumber = 0;
let audio = new Audio("./audio/kbc.mp3");
   

// question one
function questionOne() {
    audio.play();
    document.getElementById("display-text").innerHTML =
        "Which of the following is not a state of India?";
    document.getElementById("answer-one").innerHTML = "A) Jharkhand";
    document.getElementById("answer-two").innerHTML = "B) Chattisgarh";
    document.getElementById("answer-three").innerHTML = "C)Vrindachal";
    document.getElementById("answer-four").innerHTML = "D) Goa";
}
// question two
function questionTwo() {
    audio.pause();
    document.getElementById("display-text").innerHTML =
        "Who was the first Indian woman to win a medal in the Olympics?";
    document.getElementById("answer-one").innerHTML = "A) P.T. Usha";
    document.getElementById("answer-two").innerHTML = "B) Kunjarani Devi";
    document.getElementById("answer-three").innerHTML = "C) Karnam Maleshwari";
    document.getElementById("answer-four").innerHTML = "D) Bachendri Pal ";
}
// question three
function questionThree() {
    document.getElementById("display-text").innerHTML =
        "Which city is known as the Silicon Valley Of India?";
    document.getElementById("answer-one").innerHTML = "A)Bangalore";
    document.getElementById("answer-two").innerHTML = "B) Mumbai ";
    document.getElementById("answer-three").innerHTML = "C)Chennai ";
    document.getElementById("answer-four").innerHTML = "D) Delhi";
}
// question four
function questionFour() {
    document.getElementById("display-text").innerHTML =
        "How do you say Hello in India?";
    document.getElementById("answer-one").innerHTML = "A)Neeche";
    document.getElementById("answer-two").innerHTML = "B) Namaste ";
    document.getElementById("answer-three").innerHTML = "C) Bye ";
    document.getElementById("answer-four").innerHTML = "D) Chor";
}
// question five
function questionFive() {
    document.getElementById("display-text").innerHTML =
        "How many states are there in India?";
    document.getElementById("answer-one").innerHTML = "A)31";
    document.getElementById("answer-two").innerHTML = "B) 29 ";
    document.getElementById("answer-three").innerHTML = "C) 28 ";
    document.getElementById("answer-four").innerHTML = "D) 30";
}
// question six
function questionSix() {
    document.getElementById("display-text").innerHTML =
        "Where in India Gate located?";
    document.getElementById("answer-one").innerHTML = "A) New Delhi";
    document.getElementById("answer-two").innerHTML = "B) Punjab ";
    document.getElementById("answer-three").innerHTML = "C) Mumbai ";
    document.getElementById("answer-four").innerHTML = "D) Agra";
}
// question Seven
function questionSeven() {
    document.getElementById("display-text").innerHTML =
        "Which of the following musical instruments is NOT of foreign origin?";
    document.getElementById("answer-one").innerHTML = "A) Tabla";
    document.getElementById("answer-two").innerHTML = "B) Flute ";
    document.getElementById("answer-three").innerHTML = "C) Sitar ";
    document.getElementById("answer-four").innerHTML = "D) Violin";
}
// question eight
function questionEight() {
    document.getElementById("display-text").innerHTML =
        "Who is the captain of Chennai super kings?";
    document.getElementById("answer-one").innerHTML = "A) Ganguly";
    document.getElementById("answer-two").innerHTML = "B) Yuraj singh";
    document.getElementById("answer-three").innerHTML = "C) M S Dhoni";
    document.getElementById("answer-four").innerHTML = "D) Sachin";
}
// question nine
function questionNine() {
    document.getElementById("display-text").innerHTML =
        "Which Of The Following Is The First Capital Of Rajasthan?";
    document.getElementById("answer-one").innerHTML = "A)Ajmer";
    document.getElementById("answer-two").innerHTML = "B) Chittorgarh ";
    document.getElementById("answer-three").innerHTML= "C)Jaisalmer";
    document.getElementById("answer-four").innerHTML = "D)Jaipur ";
}
// question ten
function questionTen() {
    document.getElementById("display-text").innerHTML =
        "Which Of The Following Is The Most Famous Food Of Rajasthan?";
    document.getElementById("answer-one").innerHTML = "A)Laal Maas";
    document.getElementById("answer-two").innerHTML = "B)  Dal Baati Churma ";
    document.getElementById("answer-three").innerHTML = "C)Khatta Meetha";
    document.getElementById("answer-four").innerHTML = "D)  Mirchi Bajji";
}
// question
// one
           
function question(question) {
    document.getElementById("container").style.backgroundColor = "#59B4C3";
    resetColor();


    if (question == 1) {
        questionNumber = 1;
        questionOne();
       
    } else if (question == 2) {
        questionNumber = 2;
        questionTwo();
    } else if (question == 3) {
        questionNumber = 3;
        questionThree();
    }
    else if (question == 4) {
        questionNumber = 4;
        questionFour();
    }
    else if (question == 5) {
        questionNumber = 5;
        questionFive();
    }
    else if (question == 6) {
        questionNumber = 6;
        questionSix();
    }
    else if (question == 7) {
        questionNumber = 7;
        questionSeven();
    }
    else if (question == 8) {
        questionNumber = 8;
        questionEight();
    }
    else if (question == 9) {
        questionNumber = 9;
        questionNine();
    }
    else if (question == 10) {
        questionNumber = 10;
        questionTen();
    }
    else {
        document.getElementById("display-text").innerHTML =
            "Congratulation You Win 7 CRORE RUPEES...";
        let audio = new Audio("./7-c.mp3");
        audio.play();
    }
}
// correct one answer
function answer(givenAnswer) {
   
    if (questionNumber == 1) {
        if (givenAnswer == 3) {
            answerOne(true, 2, givenAnswer, 3);
          
        } else {
            answerOne(false, 0, givenAnswer, 3);
        }
    } else if (questionNumber == 2) {
        if (givenAnswer == 3) {
            answerOne(true, 3, givenAnswer, 3);
            audio.pause();
        } else {
            answerOne(false, 0);
        }
    }
    else if (questionNumber == 3) {
        if (givenAnswer == 1) {
            answerOne(true, 4, givenAnswer, 1)
        } else {
            answerOne(false, 0);
        }
    }
    else if (questionNumber == 4) {
        if (givenAnswer == 2) {
            answerOne(true, 5, givenAnswer, 2)
        } else {
            answerOne(false, 0);
        }
    }
    else if (questionNumber == 5) {
        if (givenAnswer == 3) {
            answerOne(true, 6, givenAnswer, 3)
        } else {
            answerOne(false, 0);
        }
    }
    else if (questionNumber == 6) {
        if (givenAnswer == 1) {
            answerOne(true, 7, givenAnswer, 1)
        } else {
            answerOne(false, 0);
        }
    }
    else if (questionNumber == 7) {
        if (givenAnswer == 2) {
            answerOne(true, 8, givenAnswer, 2)
        } else {
            answerOne(false, 0);
        }
    }
    else if (questionNumber == 8) {
        if (givenAnswer == 3) {
            answerOne(true, 9, givenAnswer, 3)
        } else {
            answerOne(false, 0);
        }
    }
    else if (questionNumber == 9) {
        if (givenAnswer == 1) {
            answerOne(true, 10, givenAnswer, 1)
        } else {
            answerOne(false, 0);
        }
    }
    else if (questionNumber == 10) {
        if (givenAnswer == 2) {
            answerOne(true, 11, givenAnswer, 2)
        } else {
            answerOne(false, 0);
        }
    }

}   // correct or wrong
function answerOne(correctAnswer, nextQuestion, correctAnswerButton, buttonClick) {
    if (correctAnswer) {
        document.getElementById("display-text").innerHTML =
            "Right Answer";
       
        document.getElementById("container").style.backgroundColor =
            "#65B741";
        coloringButtons(correctAnswerButton, buttonClick)
        setTimeout(() => {
            question(nextQuestion);
        }, 3000);
    } else {
        document.getElementById("display-text").innerHTML =
            " Wrong Answer";
     
        document.getElementById("container").style.backgroundColor =
            "#FF0000";
        setTimeout(() => {
            startScreen();
        }, 3000);
    }
}

function coloringButtons(greenButton, redbutton) {

    if (greenButton == redbutton) {
        redbutton = 5
    } if (greenButton == 1) {
        document.getElementById("answer-one").style.backgroundColor = "#65B741"
    } else if (greenButton == 2) {
        document.getElementById("answer-two").style.backgroundColor = "#65B741"
    } else if (greenButton == 3) {
        document.getElementById("answer-three").style.backgroundColor = "#65B741"
    } else if (greenButton == 4) {
        document.getElementById("answer-four").style.backgroundColor = "#65B741"
    }

}

function resetColor() {
    document.getElementById("answer-one").style.backgroundColor = "#0B60B0"
    document.getElementById("answer-two").style.backgroundColor = "#0B60B0"
    document.getElementById("answer-three").style.backgroundColor = "#0B60B0"
    document.getElementById("answer-four").style.backgroundColor = "#0B60B0"
}

// hidden
function on() {
    document.getElementById("one").hidden = true;
    document.getElementById("main-top").hidden = false;
    question(1);
}
// start screen
function startScreen() {
    document.getElementById("one").hidden = false;
    document.getElementById("main-top").hidden = true;
    resetColor();

}