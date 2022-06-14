// initialize the variables
let hr = min = sec = ms = "0" + 0,
    startTimer;
//   fetch data from html file
  const startBtn = document.querySelector(".start"),
   stopBtn = document.querySelector(".stop"),
   resetBtn = document.querySelector(".reset");
// added event lister to button
   startBtn.addEventListener("click", start);
   stopBtn.addEventListener("click", stop);
   resetBtn.addEventListener("click", reset);
// creating start fuction to operate start button
  function start() {
    startBtn.classList.add("active");
    stopBtn.classList.remove("stopActive");
//start stopwatch using setInterval function
    startTimer = setInterval(()=>{
      ms++
      ms = ms < 10 ? "0" + ms : ms;

      if(ms == 100){
        sec++;
        sec = sec < 10 ? "0" + sec : sec;
        ms = "0" + 0;
      }
      if(sec == 60){
        min++;
        min = min < 10 ? "0" + min : min;
        sec = "0" + 0;
      }
      if(min == 60){
        hr++;
        hr = hr < 10 ? "0" + hr : hr;
        min = "0" + 0;
      }
      putValue();
    },10); //1000ms = 1s

  }
// to stop the alarm
  function stop() {
    startBtn.classList.remove("active");
    stopBtn.classList.add("stopActive");
    clearInterval(startTimer);
  }
//   to reset to zero
  function reset() {
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive");
    clearInterval(startTimer);
    hr = min = sec = ms = "0" + 0;
    putValue();
  }
 
  function putValue() {
    document.querySelector(".millisecond").innerText = ms;
    document.querySelector(".second").innerText = sec;
    document.querySelector(".minute").innerText = min;
    document.querySelector(".hour").innerText = hr;
  }