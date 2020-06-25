<template>
  <div id="wrapper">
    <div id="numberWrapper">
      <h1 id="score"></h1>
    </div>

    <div class="sideSelectors">
      <button id="sixSide">Six Sides</button>
      <button id="twelveSide">Twelve Sides</button>
    </div>
    <button id="rollButton">Roll</button>
  </div>
</template>

<script>
export default {
    methods() {
let dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

//Prints dice roll to the page

function printNumber(number) {
  var numberScore = $("#score");
  numberScore.html(number);
}

var sixSide = $("#sixSide");
var twelveSide = $("#twelveSide");
var rollButton = $("#rollButton");

function activeButton(clickedButton){
  var buttonToChange = clickedButton;
  $('.sideSelectors').children('button').removeClass('clicked');
  buttonToChange.addClass('clicked');
}

sixSide.click(function(){
  dice.sides = 6;
});

twelveSide.click(function(){
  dice.sides = 12;
  activeButton(this);
});

rollButton.click(function(){
  var result = dice.roll();
  console.log(result);
  printNumber(result);
});
    }

}
</script>

<style scoped>
#wrapper {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}

button {
  border-radius: 20px;
  background-color: #00a7c9;
  outline: none;
  border: none;
  -webkit-appearance: none;
  padding: 10px 15px;
  color: white;
  font-weight: 800;
  text-transform: uppercase;
  font-family: 'Futura';
  cursor: pointer;
  margin-top: 10px;
  min-width: 120px;
}

button:hover {
  background-color: #00a1c1;
}
#rollButton {
  display: inline-block;
  position: relative;
}

#sixSide {
  display: inline-block;
  position: relative;
}

#twelveSide {
  flex-direction: row;
}

.clicked {
  background-color: blue;
}

#numberWrapper {
  height: 50px;
  width: 50px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid gray;
  border-radius: 10px;
}

#score {
  font-family: 'Futura';
  font-weight: 600;
  color: #00a7c9;
  margin: 0;
  padding: 0;
}

.sideSelectors {
  display: block;
  position: relative;
}
</style>