/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Hello, world!");

init();

function onButtonClick(){

  let enteredText = document.getElementById("inputBox").value.toLowerCase();
  

  let outputSpan = document.getElementById("output");
  
  switch(enteredText) {
    case "esfp":
      outputSpan.innerHTML = Entertainer.toString();    
      break;
    case "intj":
      outputSpan.innerHTML = Architect.toString();
      break;
       case "intp":
      outputSpan.innerHTML = Logician.toString();
      break;
    case "entj":
      outputSpan.innerHTML = Commander.toString();
      break;
      case "entp":
      outputSpan.innerHTML = Debater.toString();
      break;
      case "infj":
      outputSpan.innerHTML = Advocate.toString();
      break;
      case "infp":
      outputSpan.innerHTML = Mediator.toString();
      break;
      case "enfj":
      outputSpan.innerHTML = Protagonist.toString();
      break;
      case "enfp":
      outputSpan.innerHTML = Campaigner.toString();
      break;
      case "istj":
      outputSpan.innerHTML = Logistician.toString();
      break;
      case "isfj":
      outputSpan.innerHTML = Defender.toString();
      break;
      case "estj":
      outputSpan.innerHTML = Executive.toString();
      break;
      case "esfj":
      outputSpan.innerHTML = Consul.toString();
      break;
      case "istp":
      outputSpan.innerHTML = Virtuoso.toString();
      break;
      case "isfp":
      outputSpan.innerHTML = Adventurer.toString();
      break;
      case "estp":
      outputSpan.innerHTML = Entrepreneur.toString();
      break;
    
    default:
      outputSpan.innerHTML = "No personality type found"
      break;
  }
}

function init() {

  document.getElementById("inputBox").addEventListener("keyup", function(evt) {
    if(evt.keyCode === 13) {
      onButtonClick();
    }
  });  
}

const Entertainer = ["Jamie Oliver", " Adele", " Jamie foxx", " Steve Irwin"];
const Adventurer = ["Kevin Costner", " Frida Kahlo", " Britney Spears", " Michael Jackon"];
const Virtuoso = ["Michael Jordan"," Clint Eastwood"," Milla Jovovich"," Daniel Craig"];
const Entrepreneur = ["Ernest Hemingway", " Jack Nicholson", " Eddie Murphy", " Madonna"];
      
const Logistician = ["Denzel Washington", " Angela Merkel", " Natalie Portman", " Anthony Hopkins"];
const Executive = ["Sonia Sotomayor", " John D. Rockefeller", " Judge Judy", " Ella Baker"];
const Defender = ["Beyoncé", " Queen Elizabeth", " Aretha Franklin", " Vin Diesel"];
const Consul = ["Bill Clinton", " Steve Harvey", " Danny Glover", " Jennifer Lopez"];


const Architect = ["Friendrich Nietzche", " Michelle Obama", " Elon Musk", " Christopher Nolan"];
const Commander = ["Margaret Thatcher", " Franklin D. Roosevelt", " Jim Carrey", " Whoopi Goldberg"];
const Logician = ["Albert Einstein", " Stanley Crouch" , " Isaac Newton", " Rene Descartes"];
const Debater = ["Tom Hanks", " Thomas Edison", " Celine Dion", " Sacha Baron Cohen"];

const Mediator = ["J.R.R Tolkien", " William Shakespear", " Bjork", " Alicia Keys"];
const Campaigner = ["RM Kim Nam-Joon", " Russell Brand", " Kelly Clarkson", " Will Smith"];
const Advocate = ["Martin Luther King", " Nelson Mandela", " Mother Terese", " Marie Kondo"];
const Protagonist = ["Oprah Winfrey", " John Cusack", " Ben Affleck", " Malala Yousafzai"];