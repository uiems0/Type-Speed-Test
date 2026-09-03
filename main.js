let TopCharsPM = document.getElementById("BPM")
let CurCharsPM = document.getElementById("CPM")
let BestAccEl = document.getElementById("BA")
let CurrAcc = document.getElementById("CA")
let Button = document.getElementById("StartButton")
let TextArea = document.getElementById("TextArea")
let TypingArea = document.getElementById("TypingArea")

let CurrRunning = false

let CurrTime
let CurrString = ""

let TopCharsPerMin = 0
let BestAcc = 0

let PossibleStrings = new Array("This is some Random Text as I do not know what else to write for this. I haven't used Java Script in a while but thats fine.", "This is some very interesting text that I definitely want to write yes yes yes I definitely do I'm so happy right now.", "Did you know that I already did a version of this project but it wasn't that good and I never backed it up anywhere so I had to restart?", "Anyway my hands kinda hurt rn for ssome reason so I'm probably going to stop typing stuff out.")

Button.addEventListener("click", () => {
  if (CurrRunning == false) {
  CurrRunning = true
  let NewString = PossibleStrings[Math.floor(Math.random() * PossibleStrings.length)] 
  console.log(NewString)
  CurrString = NewString
  TextArea.textContent = CurrString
  CurrTime = Date.now()
  } else {
    let TimeRes = Date.now() - CurrTime
    let Length = CurrString.length
    let TypedString = TypingArea.value
    let Correct = 0
    for (let i = 0;i<TypedString.length;i++)  {
      console.log("Ran")
      let CurStringNum = CurrString[i]
      if (CurStringNum == null || CurStringNum == undefined) {
        console.log("Failed")
      } else {
       if (CurStringNum == TypedString[i]) {
        console.log("Succ")
         Correct += 1
       }
      }
    }
    console.log(TimeRes,Correct,Length)
    Correct = Math.max(Correct,0)
    let AccPercent = (Correct/Length) * 100
    let CPM = TypedString.length * (TimeRes / 60000)
    console.log(AccPercent,CPM)
    CurCharsPM.textContent = "Current Characters Per Minute: " + CPM
    CurrAcc.textContent = "Current Accuracy: " + AccPercent + "%"
    if (TopCharsPerMin == 0 || CPM > TopCharsPerMin) {
      TopCharsPM.textContent = "Top Characters Per Minute: " + CPM
      TopCharsPerMin = CPM
    } 
    if (BestAcc == 0 || AccPercent > BestAcc) {
      BestAccEl.textContent = "Best Accuracy: " + AccPercent + "%"
      BestAcc = AccPercent
    }
    CurrTime = null
    CurrString = ""
    CurrRunning = false
    TypingArea.value = ""
    TextArea.value = ""
  }
})
