// ====== Game for 2 players ====== //

function reset() {
  location.reload();
}

var left_side_roll;
var right_side_roll;
var left_side_sum = 0;
var right_side_sum = 0;
var roll_number = 0;

function roll() {
  let element1 = document.getElementById('left-dices');
  element1.innerHTML = '';
  let element2 = document.getElementById('right-dices');
  element2.innerHTML = '';

  left_side_roll = Math.floor(Math.random() * (6 - 1)) + 1;
  right_side_roll = Math.floor(Math.random() * (6 - 1)) + 1;
  roll_number = roll_number + 1;

  left_side_sum = left_side_sum + left_side_roll;
  right_side_sum = right_side_sum + right_side_roll;

  document.getElementById("left-side-roll").innerHTML = "Roll: "+left_side_roll;
  document.getElementById("right-side-roll").innerHTML = "Roll: "+right_side_roll;

  document.getElementById("left-side-sum").innerHTML = "Sum: "+left_side_sum;
  document.getElementById("right-side-sum").innerHTML = "Sum: "+right_side_sum;

  document.getElementById("roll-number").innerHTML = "Roll number: "+roll_number+".";

  switch (left_side_roll) {
    case 1:
      var a = document.createElement("IMG");
      a.setAttribute("src", "Dice1.png");
      a.setAttribute("width", "50");
      a.setAttribute("height", "50");
      a.setAttribute("class", "animation1");
      document.getElementById("left-dices").appendChild(a);
      break;

    case 2:
      var a = document.createElement("IMG");
      a.setAttribute("src", "Dice2.png");
      a.setAttribute("width", "50");
      a.setAttribute("height", "50");
      a.setAttribute("class", "animation1");
      document.getElementById("left-dices").appendChild(a);
      break;

    case 3:
      var a = document.createElement("IMG");
      a.setAttribute("src", "Dice3.png");
      a.setAttribute("width", "50");
      a.setAttribute("height", "50");
      a.setAttribute("class", "animation1");
      document.getElementById("left-dices").appendChild(a);
      break;

    case 4:
      var a = document.createElement("IMG");
      a.setAttribute("src", "Dice4.png");
      a.setAttribute("width", "50");
      a.setAttribute("height", "50");
      a.setAttribute("class", "animation1");
      document.getElementById("left-dices").appendChild(a);
      break;

    case 5:
      var a = document.createElement("IMG");
      a.setAttribute("src", "Dice5.png");
      a.setAttribute("width", "50");
      a.setAttribute("height", "50");
      a.setAttribute("class", "animation1");
      document.getElementById("left-dices").appendChild(a);
      break;

    case 6:
      var a = document.createElement("IMG");
      a.setAttribute("src", "Dice6.png");
      a.setAttribute("width", "50");
      a.setAttribute("height", "50");
      a.setAttribute("class", "animation1");
      document.getElementById("left-dices").appendChild(a);
      break;
  }

  switch (right_side_roll) {
    case 1:
      var a = document.createElement("IMG");
      a.setAttribute("src", "Dice1.png");
      a.setAttribute("width", "50px");
      a.setAttribute("height", "50px");
      a.setAttribute("class", "animation1");
      document.getElementById("right-dices").appendChild(a);
      break;

    case 2:
      var a = document.createElement("IMG");
      a.setAttribute("src", "Dice2.png");
      a.setAttribute("width", "50");
      a.setAttribute("height", "50");
      a.setAttribute("class", "animation1");
      document.getElementById("right-dices").appendChild(a);
      break;

    case 3:
      var a = document.createElement("IMG");
      a.setAttribute("src", "Dice3.png");
      a.setAttribute("width", "50");
      a.setAttribute("height", "50");
      a.setAttribute("class", "animation1");
      document.getElementById("right-dices").appendChild(a);
      break;

    case 4:
      var a = document.createElement("IMG");
      a.setAttribute("src", "Dice4.png");
      a.setAttribute("width", "50");
      a.setAttribute("height", "50");
      a.setAttribute("class", "animation1");
      document.getElementById("right-dices").appendChild(a);
      break;

    case 5:
      var a = document.createElement("IMG");
      a.setAttribute("src", "Dice5.png");
      a.setAttribute("width", "50");
      a.setAttribute("height", "50");
      a.setAttribute("class", "animation1");
      document.getElementById("right-dices").appendChild(a);
      break;

    case 6:
      var a = document.createElement("IMG");
      a.setAttribute("src", "Dice6.png");
      a.setAttribute("width", "50");
      a.setAttribute("height", "50");
      a.setAttribute("class", "animation1");
      document.getElementById("right-dices").appendChild(a);
      break;
  }
  if (left_side_sum >= 100) {
    alert("Winner is player on the left side!!");
  }
  if (right_side_sum >= 100) {
    alert("Winner is player on the right side!!");
  }
}
