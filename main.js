let TopCharsPM = document.getElementsByClassName("BPM")
let CurTopCharsPM = document.getElementsByClassName("CPM")
let BestAcc = document.getElementsByClassName("BA")
let CurrAcc = document.getElementsByClassName("CA")
let Button = document.getElementsByClassName("StartButton")
let TextArea = document.getElementsByClassName("TextArea")
let TypingArea = document.getElementsByClassName("TypingArea")
let CurrRunning = false
let CurrTime
let CurrString

let PossibleStrings = new Array("This is some Random Text as I do not know what else to write for this. I haven't used Java Script in a while but thats fine.")

Button:addEventListener("click", () => {
  if (CurrRunning == false) {
  CurrRunning = true
  let NewString = PossibleStrings[Math.round(Math.random * PossibleStrings.length)] 
  CurrString = NewString
  TextArea.textcontent = CurrString
  CurrTime = Date.now()
  } else {
    let TimeRes = Date.now() - CurrTime
    let Length = CurrString.length
    let TypedString = TypingArea.textcontent
    let Correct = 0
    for (let i = 0;i<TypedString;i++)  {
      let CurStringNum = CurrString[i]
      let CurTypedString = TypedString[i]
      if (CurStringNum == CurTypedString) {
        Correct += 1
      }
    }
    //Add logic for extra/not enough chars to factor into chars per min and acc
  }
})
