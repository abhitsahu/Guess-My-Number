import "./style.css";
("use strict");

// console.log(document.querySelector('.message'))//select the object of html

////reading the value

////handling click event
let random_num = Math.floor(Math.random() * 20 + 1);
// console.log(random_num, typeof random_num)
let score = 20;
let highsc = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const che_inp = Number(document.querySelector("#input").value);

  // console.log(che_inp,typeof che_inp)

  //when no input
  if (!che_inp || che_inp === "string") {
    displayMessage("Type a number.....");
    // console.log(document.querySelector('.message').textContent = "Type a number.....")
  }
  else if (che_inp > 20) {
    displayMessage("Type a number less or equal to 20");
    // console.log(document.querySelector('.message').textContent = "Type a number less or equal to 20")
  }
  //when wrong answer
  else if (che_inp !== random_num) {
    score--;
    if (score >= 1) {
      displayMessage(
        che_inp > random_num ? "too high number" : "too less number"
      );
      // console.log(document.querySelector('.message').textContent = che_inp>random_num?"too high number":"too less number")
      console.log((document.querySelector(".score_p").textContent = score));
    } else {
      displayMessage("You loss the game");
      // console.log(document.querySelector('.message').textContent = "You loss the game")

      console.log((document.querySelector(".score_p").textContent = 0));
    }
  }

  // else if(che_inp<random_num){
  // score--
  // if(score>=1){

  // console.log(document.querySelector('.message').textContent = "too less number")
  // console.log(document.querySelector('.score_p').textContent = score)
  // }
  // else{
  // console.log(document.querySelector('.message').textContent = "You loss the game")
  // console.log(document.querySelector('.score_p').textContent = 0)

  // }
  // }
  // else if (che_inp > 20) {
  //   displayMessage("Type a number less or equal to 20");
  //   // console.log(document.querySelector('.message').textContent = "Type a number less or equal to 20")
  // }
  //when too high
  // else if(che_inp>random_num)
  // {
  //     score--
  //     if(score>=1){

  //     console.log(document.querySelector('.message').textContent = "too high number")
  //     console.log(document.querySelector('.score_p').textContent = score)
  //     }
  //     else{
  //     console.log(document.querySelector('.message').textContent = "You loss the game")
  //     console.log(document.querySelector('.score_p').textContent = 0)

  //     }

  // }
  //when correct number
  else {
    if (score > highsc) {
      highsc = score;
      console.log((document.querySelector(".high_p").textContent = highsc));
    }

    displayMessage("Correct Number");
    // console.log(document.querySelector('.message').textContent = "Correct Number")
    console.log((document.querySelector("#display").textContent = che_inp));

    // console.log(document.querySelector('.score_p').textContent = score)
    console.log(
      (document.getElementById("colour").style.backgroundColor = "green")
    );
  }
});

//again
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  console.log((document.querySelector(".score_p").textContent = score));

  random_num = Math.floor(Math.random() * 20 + 1);
  console.log(random_num);
  console.log(document.querySelector(".message").textContent);
  console.log((document.querySelector("#input").value = ""));
  console.log((document.getElementById("colour").style.backgroundColor = ""));
  console.log((document.querySelector(".high_p").textContent = highsc));
  console.log((document.querySelector("#display").textContent = '?'));

  
});
