// setTimeout(() => {
//   console.log("Rocket is about to fly");
//   document.body.className = "rocket-gone";
// }, 3000);

// setTimeout(() => {
//   document.body.className = document.body.className.replace("rocket-gone", "");
// }, 7000);

let timer = 10;

function changeState(state) {
  console.log(state);
  document.body.className = "state" + state;


  if(state == 3 || state == 1){
    timer = 10;
    document.querySelector("#timer-counter").innerHTML = `<h1>${timer}</h1>`;
    clearInterval(timerForRocket);
  }

  if (state == 2) {
    timerForRocket = setInterval(() => {
      console.log(timer--);
      document.querySelector("#timer-counter").innerHTML = `<h1>${timer}</h1>`;
      if (timer == 0) {
        clearInterval(timerForRocket);
        changeState(3);
       
      }
    }, 1000);
  }
}

// setInterval(()=>{
//     console.log("Hello From Set Interval")
// },1500)
