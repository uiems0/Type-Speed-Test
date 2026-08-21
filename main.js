let TopCharsPM = document.getElementsByClassName("BPM")
let CurTopCharsPM = document.getElementsByClassName("CPM")
let BestAcc = document.getElementsByClassName("BA")
let CurrAcc = document.getElementsByClassName("CA")
let Button = document.getElementsByClassName("StartButton")
let TextArea = document.getElementsByClassName("TextArea")

let CurrRunning = false
let CurrTime
let CurrString

let PossibleStrings = new Array("This is some Random Text as I do not know what else to write for this. I haven't used Java Script in a while but thats fine.")

Button:addEventListener("click", () => {
  if (CurrRunning == false) {
  CurrRunning = true
  let NewString = PossibleStrings[Math.round(Math.random * PossibleStrings.length)] 
  CurrString = NewString
  } else {

  }
})
