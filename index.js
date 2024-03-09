let JsonData=[{
    
  options:["river","ganga","amazon","Nile"],
  correctAns:"Nile",
  question:"What is the longest river in the World?"
},{ 
options:["2003","2001","2000","2004"],
correctAns:"2004",
question:"What year was Facebook launched?"
},{
  
options:["kitten","witch","rat","crow"],
correctAns:"kitten",
question:"What is a baby cat known as?"
},{
 
options:["Snow white","whatever","none","MOANA"],
correctAns:"Snow white",
question:"What was the first feature length animated Disney movie to be released?"
},{
  
options:["king","cat","rat","Lion"],
correctAns:"Lion",
question:"who is king of jungle?"
},{
 
options:["me","human","gemini","capricon"],
correctAns:"capricon",
question:"What star sign would you be if you were born on January 1st?"
}];

let score=0;
let arrayindex =0;
const totalScore =JsonData.length;

const questionsofgame=document.getElementById("questions");
const optionele =document.getElementById("options");
const score_ele =document.getElementById("score");
const nextbtn =document.getElementById("next");
// nextbtn.style.backgroundColor ="blue";
function shuffleQuestionsopt(options){
  for(let i =options.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [options[i],options[j]]=[options[j],options[i]];  
   
  }
}
showquestions();
nextbtn.addEventListener("click", ()=>{
  nextquestion();
  score_ele.textContent =`score ${score}/${totalScore}`;
});

function showquestions(){
  const {options,correctAns,question
  }= JsonData[arrayindex];
  questionsofgame.textContent = question
  
  shuffleQuestionsopt(options); 
  options.forEach((option)=>{
    const optbtn = document.createElement("button");
    optbtn.textContent=option;
    optionele.appendChild(optbtn);

   optbtn.addEventListener("click",() =>{
    if(option===correctAns){
      score++;
    } else{
       score-=0.25;
    }

    score_ele.textContent =`score ${score}/${totalScore}`;
      nextquestion();
  
   });
  
})
}

function nextquestion(){
  arrayindex++;
  optionele.textContent ="";
  if(arrayindex>=JsonData.length){
   questionsofgame.textContent="quiz completed";
   optionele.style.display ="none";
   nextbtn.style.display="none";
  }else{
    showquestions();
  }
}








