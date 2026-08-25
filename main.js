let TopCharsPM = document.getElementsByClassName("BPM")
let CurCharsPM = document.getElementsByClassName("CPM")
let BestAccEl = document.getElementsByClassName("BA")
let CurrAcc = document.getElementsByClassName("CA")
let Button = document.getElementsByClassName("StartButton")
let TextArea = document.getElementsByClassName("TextArea")
let TypingArea = document.getElementsByClassName("TypingArea")

let CurrRunning = false

let CurrTime
let CurrString = ""

let TopCharsPerMin = 0
let BestAcc = 0

let PossibleStrings = new Array("This is some Random Text as I do not know what else to write for this. I haven't used Java Script in a while but thats fine.")

Button.addEventListener("click", () => {
  if (CurrRunning == false) {
  CurrRunning = true
  let NewString = PossibleStrings[Math.floor(Math.round() * NewString.length)] 
  console.log(NewString)
  CurrString = NewString
  TextArea.textContent = CurrString
  CurrTime = Date.now()
  } else {
    let TimeRes = Date.now() - CurrTime
    let Length = CurrString.length
    let TypedString = TypingArea.textContent
    let Correct = 0
    for (let i = 0;i<TypedString.length;i++)  {
      let CurStringNum = CurrString[i]
      if (CurStringNum == null) {
        Correct -=1
      } else {
       let CurTypedString = TypedString[i]
       if (CurStringNum == CurTypedString) {
         Correct += 1
        }
      }
    }
    let AccPercent = (Correct/Length) * 100
    let CPM = AccPercent * (TimeRes / 60000)
    CurCharsPM.textContent = CPM
    CurrAcc.textContent = AccPercent
    if (CPM > TopCharsPerMin) {
      TopCharsPM.textContent = CPM
      TopCharsPerMin = CPM
    }
    if (AccPercent > BestAcc) {
      BestAccEl.textContent = AccPercent
      BestAcc = AccPercent
    }
  }
})
