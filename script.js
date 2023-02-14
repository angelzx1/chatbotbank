var funds = 1000;
var doubt = document.querySelector("#btn")
var newP = document.createElement("p")
var newP2 = document.createElement("p")
var newP3 = document.createElement("p")
var newP4 = document.createElement("p")
var newP5 = document.createElement("p")
var newP6 = document.createElement("p")
var newP7 = document.createElement("p")
var newP8 = document.createElement("p")
var btn2 = document.createElement("button")
var btn3 = document.createElement("button")
var btn4 = document.createElement("button")
var btn5 = document.createElement("button")
var btn6 = document.createElement("button")
var btn7 = document.createElement("button")
var btn8 = document.createElement("button")
var btn9 = document.createElement("button")
var money = document.createElement("button")
var money2 = document.createElement("button")
var money3 = document.createElement("button")


const answer = () =>{
    newP.innerHTML = "Hello how can I help you?"
    newP2.innerHTML = "Option 1: Show me my funds."
    newP3.innerHTML = "Option 2: I would like to transfer the money."
    document.body.appendChild(newP);
    document.body.appendChild(newP2);
    document.body.appendChild(newP3);
    createInput()
    resetall1()
}

const createInput = () =>{
  doubt.disabled = true;
  
  btn2.innerHTML = "Option 1";
  btn2.type = "submit";
  btn2.id = "testinput";
  btn2.onclick = function(){
    btn2.disabled = true;
    btn3.disabled = true;
  
  newP4.innerHTML = `Your actually funds are $${funds} dollars!`
  document.body.appendChild(newP4)
  btn7.disabled = true;
  resetall2();
  };

  btn3.innerHTML = "Option 2";
  btn3.type = "submit";
  btn3.id = "testinput1";
  btn3.onclick = function(){
    btn2.disabled = true;
    btn3.disabled = true;
    btn7.disabled = true;

    newP5.innerHTML = "Who would you like to transfer?"
    document.body.appendChild(newP5)
    friends()
  }

  document.body.appendChild(btn2)
  document.body.appendChild(btn3)

}

const friends = () => {
  btn4.innerHTML = "Beatriz";
  btn5.innerHTML = "Jegue";
  btn6.innerHTML = "Jubiscleudo";
  btn4.type = "submit";
  btn5.type = "submit";
  btn6.type = "submit";
  btn4.id = "friend";
  btn5.id = "friend2";
  btn6.id = "friend3";

  btn4.onclick = function(){
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;

    newP6.innerHTML = "How much for Beatriz?"
    money.innerHTML = 50
    money2.innerHTML = 100
    money3.innerHTML = 150
    money.onclick = function(){
      money.disabled = true;
      money2.disabled = true;
      money3.disabled = true;
      if(funds >= 50){ 
      let calcul = funds - 50
      funds = calcul
      newP7.innerHTML = "You transfered to Beatriz with sucessfull!"
      newP8.innerHTML = `Now you actually funds are $${calcul}`
      document.body.appendChild(newP7)
      document.body.appendChild(newP8)
      resetall3();
      }
      else{
        newP7.innerHTML = "Your funds are insufficient!"
        document.body.appendChild(newP7)
      }
    }
    money2.onclick = function(){
      money.disabled = true;
      money2.disabled = true;
      money3.disabled = true;
      if(funds >= 100){ 
      let calcul = funds - 100
      funds = calcul
      newP7.innerHTML = "You transfered to Beatriz with sucessfull!"
      newP8.innerHTML = `Now you actually funds are $${calcul}`
      document.body.appendChild(newP7)
      document.body.appendChild(newP8)
      resetall3();
      }
      else{
        newP7.innerHTML = "Your funds are insufficient!"
        document.body.appendChild(newP7)
      }
    }
    money3.onclick = function(){
      money.disabled = true;
      money2.disabled = true;
      money3.disabled = true;
      if(funds >= 150){ 
      let calcul = funds - 150
      funds = calcul
      newP7.innerHTML = "You transfered to Beatriz with sucessfull!"
      newP8.innerHTML = `Now you actually funds are $${calcul}`
      document.body.appendChild(newP7)
      document.body.appendChild(newP8)
      resetall3();
      }
      else{
        newP7.innerHTML = "Your funds are insufficient!"
        document.body.appendChild(newP7)
      }
    }

    document.body.appendChild(newP6)
    document.body.appendChild(money)
    document.body.appendChild(money2)
    document.body.appendChild(money3)
  }
  btn5.onclick = function(){
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    newP6.innerHTML = "How much for Jegue?"
    money.innerHTML = 50
    money2.innerHTML = 100
    money3.innerHTML = 150
    money.onclick = function(){
      money.disabled = true;
      money2.disabled = true;
      money3.disabled = true;
      if(funds >= 50){ 
      let calcul = funds - 50
      funds = calcul
      newP7.innerHTML = "You transfered to Jegue with sucessfull!"
      newP8.innerHTML = `Now you actually funds are $${calcul}`
      document.body.appendChild(newP7)
      document.body.appendChild(newP8)
      resetall3();
      }
      else{
        newP7.innerHTML = "Your funds are insufficient!"
        document.body.appendChild(newP7)
      }
    }
    money2.onclick = function(){
      money.disabled = true;
      money2.disabled = true;
      money3.disabled = true;
      if(funds >= 100){ 
      let calcul = funds - 100
      funds = calcul
      newP7.innerHTML = "You transfered to Jegue with sucessfull!"
      newP8.innerHTML = `Now you actually funds are $${calcul}`
      document.body.appendChild(newP7)
      document.body.appendChild(newP8)
      resetall3()
      }
      else{
        newP7.innerHTML = "Your funds are insufficient!"
        document.body.appendChild(newP7)
      }
    }
    money3.onclick = function(){
      money.disabled = true;
      money2.disabled = true;
      money3.disabled = true;
      if(funds >= 150){ 
      let calcul = funds - 150
      funds = calcul
      newP7.innerHTML = "You transfered to Jegue with sucessfull!"
      newP8.innerHTML = `Now you actually funds are $${calcul}`
      document.body.appendChild(newP7)
      document.body.appendChild(newP8)
      resetall3()
      }
      else{
        let newP7 = document.createElement("p")
        newP7.innerHTML = "Your funds are insufficient!"
        document.body.appendChild(newP7)
      }
    }

    document.body.appendChild(newP6)
    document.body.appendChild(money)
    document.body.appendChild(money2)
    document.body.appendChild(money3)
  }
  btn6.onclick = function(){
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    newP6.innerHTML = "How much for Jubiscleudo?"
    money.innerHTML = 50
    money2.innerHTML = 100
    money3.innerHTML = 150
    money.onclick = function(){
      money.disabled = true;
      money2.disabled = true;
      money3.disabled = true;
      if(funds >= 50){ 
      let calcul = funds - 50
      funds = calcul
      newP7.innerHTML = "You transfered to Jubiscleudo with sucessfull!"
      newP8.innerHTML = `Now you actually funds are $${calcul}`
      document.body.appendChild(newP7)
      document.body.appendChild(newP8)
      resetall3()
      }
      else{
        newP7.innerHTML = "Your funds are insufficient!"
        document.body.appendChild(newP7)
      }
    }
    money2.onclick = function(){
      money.disabled = true;
      money2.disabled = true;
      money3.disabled = true;
      if(funds >= 100){ 
      let calcul = funds - 100
      funds = calcul
      newP7.innerHTML = "You transfered to Jubiscleudo with sucessfull!"
      newP8.innerHTML = `Now you actually funds are $${calcul}`
      document.body.appendChild(newP7)
      document.body.appendChild(newP8)
      resetall3()
      }
      else{
        newP7.innerHTML = "Your funds are insufficient!"
        document.body.appendChild(newP7)
      }
    }
    money3.onclick = function(){
      money.disabled = true;
      money2.disabled = true;
      money3.disabled = true;
      if(funds >= 150){ 
      let calcul = funds - 150
      funds = calcul
      newP7.innerHTML = "You transfered to Jubiscleudo with sucessfull!"
      newP8.innerHTML = `Now you actually funds are $${calcul}`
      document.body.appendChild(newP7)
      document.body.appendChild(newP8)
      resetall3()
      }
      else{
        newP7.innerHTML = "Your funds are insufficient!"
        document.body.appendChild(newP7)
      }
    }

    document.body.appendChild(newP6)
    document.body.appendChild(money)
    document.body.appendChild(money2)
    document.body.appendChild(money3)
  }
  document.body.appendChild(btn4)
  document.body.appendChild(btn5)
  document.body.appendChild(btn6)

}

const resetall1 = () => {
  btn7.innerHTML = "Reset"
  btn7.type="reset";
  btn7.onclick = function (){
    doubt.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    document.body.removeChild(newP)
    document.body.removeChild(newP2)
    document.body.removeChild(newP3)
    document.body.removeChild(btn2)
    document.body.removeChild(btn3)
    document.body.removeChild(btn7)
  }
  
  document.body.appendChild(btn7)
}
const resetall2 = () =>{
  btn8.innerHTML = "Reset"
  btn8.type="reset";
  btn8.onclick = function (){
    doubt.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btn7.disabled = false;
    document.body.removeChild(newP)
    document.body.removeChild(newP2)
    document.body.removeChild(newP3)
    document.body.removeChild(newP4)
    document.body.removeChild(btn2)
    document.body.removeChild(btn3)
    document.body.removeChild(btn7)
    document.body.removeChild(btn8)
  }
  
  document.body.appendChild(btn8)
}
const resetall3 = () =>{
  btn9.innerHTML = "Reset"
  btn9.type="reset";
  btn9.onclick = function (){
    doubt.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btn4.disabled = false;
    btn5.disabled = false;
    btn6.disabled = false;
    btn7.disabled = false;
    btn8.disabled = false;
    money.disabled = false;
    money2.disabled = false;
    money3.disabled = false;
    document.body.removeChild(btn9)
    document.body.removeChild(newP)
    document.body.removeChild(newP2)
    document.body.removeChild(newP3)
    document.body.removeChild(newP5)
    document.body.removeChild(newP6)
    document.body.removeChild(newP7)
    document.body.removeChild(newP8)
    document.body.removeChild(money)
    document.body.removeChild(money2)
    document.body.removeChild(money3)
    document.body.removeChild(btn2)
    document.body.removeChild(btn3)
    document.body.removeChild(btn4)
    document.body.removeChild(btn5)
    document.body.removeChild(btn6)
    document.body.removeChild(btn7)
    document.body.removeChild(btn8)
  }
  
  document.body.appendChild(btn9)
}