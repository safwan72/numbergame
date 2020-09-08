let submitbtn = document.querySelector("#submitbtn");
let disptext = document.querySelector("#disptext");
submitbtn.addEventListener("click", getnum);
let a = true;




function getnum(e) {
  let i = 0;
  a = true;
  e.preventDefault();
  let correctnum = getRandomIntInclusive(1, 10);
  if (a) {
    while (i < 3) {
      let guess = parseInt(prompt("Enter Your Guess ??"));
      let a = passed(guess, correctnum);
      a;
      if (a) {
        return true;
      } else {
        disptext.innerHTML = `The Correct Answer Was ${correctnum}`;
      }
      i++;
    }
  }
}



function passed(guess, correctnum) {
  if (guess === correctnum) {
    a = false;
    disptext.innerHTML = `Your Guess Was ${guess} And it Is Correct`;
    return true;
  } else if (guess > correctnum) {
    dis(guess, " Greater Than the Correct Answer");
    return false;
  }
  if (guess < correctnum) {
    dis(guess, " less than the Correct Answer");
    return false;
  }
}



function dis(guess, text) {
  alert(`Your Guess - ${guess} was ${text}`);
}



function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
