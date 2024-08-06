let questionSet = [
    (pipes = [
      {
          que: "A cistern is filled by two pipes in 4 hours and 6 hours respectively. If both pipes are open together, how long will it take to fill the cistern?",
          a: "2 hours",
          b: "2.4 hours",
          c: "2.5 hours",
          d: "3 hours",
          ans: "c",
      },
      {
          que: "If a pipe can fill a tank in 5 hours and another pipe can empty it in 10 hours, how long will it take to fill the tank if both pipes are open together?",
          a: "10 hours",
          b: "15 hours",
          c: "20 hours",
          d: "30 hours",
          ans: "b",
      },
      {
          que: "Two pipes can fill a tank in 6 hours and 8 hours respectively. If both pipes are opened together, how long will it take to fill the tank?",
          a: "3.4 hours",
          b: "3.5 hours",
          c: "3.6 hours",
          d: "4 hours",
          ans: "b",
      },
      {
          que: "A tank has two pipes, one fills it and the other drains it. If the tank is filled in 4 hours by the filling pipe and the draining pipe can empty it in 6 hours, how long will it take to fill the tank if both pipes are open?",
          a: "12 hours",
          b: "15 hours",
          c: "20 hours",
          d: "24 hours",
          ans: "b",
      },
      {
          que: "If three pipes together can fill a cistern in 4 hours, how long will it take for each pipe to fill the cistern if all pipes are working together and they are equally efficient?",
          a: "12 hours",
          b: "10 hours",
          c: "8 hours",
          d: "16 hours",
          ans: "a",
      },
      {
          que: "One pipe fills a tank in 3 hours and another in 5 hours. If both pipes are opened together, how long will it take to fill the tank?",
          a: "1.8 hours",
          b: "2.4 hours",
          c: "2.5 hours",
          d: "3.2 hours",
          ans: "c",
      },
      {
          que: "A tank can be filled by a pipe in 10 hours and another pipe can drain it in 15 hours. If both pipes are open together, in how much time will the tank be filled?",
          a: "30 hours",
          b: "40 hours",
          c: "50 hours",
          d: "60 hours",
          ans: "b",
      },
      {
          que: "A cistern is filled by two pipes in 5 hours and 7 hours respectively. If the first pipe is opened for 2 hours and then both pipes are opened together, how long will it take to fill the cistern?",
          a: "3.5 hours",
          b: "4 hours",
          c: "5 hours",
          d: "6 hours",
          ans: "a",
      },
      {
          que: "A tank has two pipes, one for filling and one for draining. If the tank can be filled by the filling pipe alone in 8 hours and drained by the draining pipe alone in 12 hours, how long will it take to fill the tank if both pipes are open and the tank is initially empty?",
          a: "24 hours",
          b: "32 hours",
          c: "48 hours",
          d: "60 hours",
          ans: "b",
      },
      {
          que: "A cistern has two pipes. The first pipe can fill it in 6 hours, and the second pipe can fill it in 8 hours. If the cistern is initially empty and both pipes are opened simultaneously for 2 hours, how much more time will it take for the cistern to be completely filled?",
          a: "2 hours",
          b: "3 hours",
          c: "4 hours",
          d: "5 hours",
          ans: "d",
      },
    ]),
    (probability = [
      {
          que: "What is the probability of rolling a 4 on a fair six-sided die?",
          a: "1/6",
          b: "1/4",
          c: "1/3",
          d: "1/2",
          ans: "a",
      },
      {
          que: "If a coin is tossed three times, what is the probability of getting exactly two heads?",
          a: "1/8",
          b: "3/8",
          c: "1/4",
          d: "1/2",
          ans: "b",
      },
      {
          que: "A bag contains 3 red balls and 2 blue balls. What is the probability of drawing a blue ball from the bag?",
          a: "1/2",
          b: "2/5",
          c: "3/5",
          d: "1/3",
          ans: "b",
      },
      {
          que: "If a card is drawn from a standard deck of 52 cards, what is the probability of drawing a Queen?",
          a: "1/13",
          b: "1/26",
          c: "1/52",
          d: "1/4",
          ans: "a",
      },
      {
          que: "What is the probability of rolling a number greater than 4 on a fair six-sided die?",
          a: "1/6",
          b: "1/3",
          c: "1/2",
          d: "2/3",
          ans: "d",
      },
      {
          que: "In a deck of 52 cards, what is the probability of drawing a red card?",
          a: "1/2",
          b: "1/4",
          c: "3/4",
          d: "1/3",
          ans: "a",
      },
      {
          que: "What is the probability of getting an odd number when rolling a fair six-sided die?",
          a: "1/6",
          b: "1/3",
          c: "1/2",
          d: "2/3",
          ans: "c",
      },
      {
          que: "If a bag contains 4 green, 5 yellow, and 6 blue marbles, what is the probability of drawing a green marble?",
          a: "4/15",
          b: "5/15",
          c: "6/15",
          d: "4/11",
          ans: "a",
      },
      {
          que: "A die is rolled twice. What is the probability that the sum of the two rolls is 7?",
          a: "1/6",
          b: "5/36",
          c: "1/12",
          d: "1/18",
          ans: "b",
      },
      {
          que: "What is the probability of drawing a King or a Queen from a standard deck of 52 cards?",
          a: "2/13",
          b: "4/13",
          c: "1/13",
          d: "1/26",
          ans: "b",
      },
    ]),
    (ages = [
      {
          que: "A father is 4 times as old as his son. In 8 years, he will be 3 times as old as his son. How old is the father now?",
          a: "32 years",
          b: "36 years",
          c: "40 years",
          d: "44 years",
          ans: "a",
      },
      {
          que: "The sum of the ages of a mother and her daughter is 36 years. If the mother is 4 times as old as her daughter, how old is the daughter?",
          a: "6 years",
          b: "8 years",
          c: "9 years",
          d: "12 years",
          ans: "d",
      },
      {
          que: "A man is 3 times as old as his son. After 10 years, he will be twice as old as his son. How old is the man now?",
          a: "30 years",
          b: "36 years",
          c: "40 years",
          d: "45 years",
          ans: "b",
      },
      {
          que: "Five years ago, the age of a father was 3 times that of his son. Ten years later, the age of the father will be twice that of his son. What is the present age of the father?",
          a: "40 years",
          b: "45 years",
          c: "50 years",
          d: "55 years",
          ans: "a",
      },
      {
          que: "A man is 8 years older than his wife. In 5 years, his age will be twice that of his wife. What is the present age of the wife?",
          a: "20 years",
          b: "22 years",
          c: "24 years",
          d: "26 years",
          ans: "b",
      },
      {
          que: "The sum of the ages of a father and his son is 60 years. Ten years ago, the father's age was 4 times that of his son. What is the present age of the father?",
          a: "40 years",
          b: "42 years",
          c: "45 years",
          d: "48 years",
          ans: "d",
      },
      {
          que: "A father is 6 times as old as his son. In 10 years, he will be 4 times as old as his son. How old is the father now?",
          a: "36 years",
          b: "40 years",
          c: "42 years",
          d: "48 years",
          ans: "a",
      },
      {
          que: "The age of a mother is twice that of her daughter. After 10 years, the age of the mother will be 3 times that of her daughter. What is the present age of the daughter?",
          a: "10 years",
          b: "12 years",
          c: "15 years",
          d: "20 years",
          ans: "a",
      },
      {
          que: "A woman is 5 years older than her husband. After 10 years, she will be twice as old as her husband. What is the present age of the husband?",
          a: "25 years",
          b: "30 years",
          c: "35 years",
          d: "40 years",
          ans: "b",
      },
      {
          que: "The sum of the present ages of a mother and her daughter is 50 years. Five years ago, the age of the mother was 6 times that of her daughter. What is the present age of the daughter?",
          a: "8 years",
          b: "10 years",
          c: "12 years",
          d: "15 years",
          ans: "b",
      },
    ]),
    (profit = [
      {
          que: "A shopkeeper buys a book for $50 and sells it for $70. What is the profit percentage?",
          a: "30%",
          b: "40%",
          c: "50%",
          d: "60%",
          ans: "b",
      },
      {
          que: "If a man sells an article for $150 and gains 20%, what was the cost price of the article?",
          a: "$125",
          b: "$100",
          c: "$120",
          d: "$130",
          ans: "a",
      },
      {
          que: "A merchant bought 15 kg of sugar at $8 per kg and sold it at $10 per kg. What is the profit percentage?",
          a: "20%",
          b: "25%",
          c: "30%",
          d: "35%",
          ans: "b",
      },
      {
          que: "A trader sold a watch for $1200 and incurred a loss of 20%. What was the cost price of the watch?",
          a: "$1000",
          b: "$1400",
          c: "$1500",
          d: "$1600",
          ans: "d",
      },
      {
          que: "If a person sells an item for $80 and makes a profit of 25%, what is the cost price of the item?",
          a: "$60",
          b: "$64",
          c: "$65",
          d: "$70",
          ans: "a",
      },
      {
          que: "A shopkeeper gains 10% on selling an article for $220. What is the cost price of the article?",
          a: "$200",
          b: "$180",
          c: "$210",
          d: "$190",
          ans: "a",
      },
      {
          que: "A man buys 10 pens for $20 each and sells them for $25 each. What is his total profit?",
          a: "$50",
          b: "$100",
          c: "$75",
          d: "$70",
          ans: "a",
      },
      {
          que: "A product is marked at $500 and a discount of 10% is given on it. What is the selling price of the product?",
          a: "$450",
          b: "$460",
          c: "$470",
          d: "$480",
          ans: "b",
      },
      {
          que: "A trader bought a laptop for $800 and sold it for $950. What is the profit percentage?",
          a: "18.75%",
          b: "20%",
          c: "22.5%",
          d: "25%",
          ans: "a",
      },
      {
          que: "If a merchant buys an article for $200 and sells it for $250, what is the percentage profit?",
          a: "20%",
          b: "25%",
          c: "30%",
          d: "35%",
          ans: "b",
      },
    ]),
  ];
  
  let userName = document.querySelector("#userName").value;
  const submit = document.querySelector("#submitBtn");
  
  let index = 0;
  let subset = 0;
  let total = questionSet.length;
  let right = 0;
  let timmer = 10;
  let wrong = 0;
  let questionCount = 1;
  let questionCategory = [];
  let PlayerName = [];
  let score=0;
  
  //our project start from here submit button.check the category selection and input field are filled well. after submit button click. the selction category call..
  submit.addEventListener("click", () => {
    userName = document.querySelector("#userName").value;
    if (userName == "") {
      alert("please fill the blank");
    } else {
      selectionCategory();
    }
  });
  
  //before starting quize we confirm that our question Category and input field are fill..
  function selectionCategory() {
    alert("please select the category");
    let Category = document.querySelectorAll(".categoryOption");
    Category.forEach((cate) => {
      cate.addEventListener("click", function (data) {
        let quesCategory = data.target.id;
        questionCategory.push(quesCategory);
        console.log(questionCategory);
        start();
      });
    });
  }
  
  //here we collect playerName in array via push mathod and call for question load.and with question load we will start countdwon
  function start() {
    let userName = document.querySelector("#userName").value;
    let arry = PlayerName.push(userName);
    console.log(PlayerName);
    PlayerName = "";
    getQuestion();
  }
  
  //here i face one problem due to scop issue..
  //i take setInterval in a variable.but when i call this coutdwon on nextquestion that time i can't clear this time out..due to this parallel countDwon function running seperatly.
  function countDwonStater() {
    const startTimer = setInterval(function () {
    counter=document.querySelector("#countDwon");
    counter.innerText=timmer;
      if (timmer == 0) {
        clearInterval(startTimer);
        timmer = 10;
      }
      timmer--;
      return;
    }, 1000);
  }
  
  // question is depend on question category.i predefine the index of arrya before it load
  function getQuestion() {
    if (questionCategory == "pipes") {
      index += 0;
    } else if (questionCategory == "probability") {
      index += 1;
    } else if (questionCategory == "ages") {
      index += 2;
    } else if(questionCategory == "profit"){
      index += 3;
    }
    loadQuestion();
  }
  
  
  
  
  //here i done another mistake i'll take mainContent Hardcore.it is working but whole HTMl code written here.
  function loadQuestion() {
    countDwonStater();
    QuestionData = questionSet[index][subset];
    displayQuestion = document.querySelector(".questionBox");
    document.querySelector(".mainContainer").innerHTML = `
    <div class="quizeBody">
      <div class="quizeContainer">
        
        <div class="header">
        <h3 id="questionCategory">Question Category is "${questionCategory}"</h3>
        <div class="scoreTime">
          <div class="time">
            <label for="" id="countDwon"></label>
          </div>
          <div class="score">
            <label for="">Score: ${score} </label>
          </div>
        </div>
       
  
        <div class="questionContainer">
          <div class="questionCount">
            <h3>${questionCount}/${questionSet[index].length}</h3>
          </div>
          <div class="questionText">
            <h2 id='questionBox'>${QuestionData.que}</h2>
          </div>
        </div>
  
        <div class="answerContainer">
          <button id="a" class="options">${QuestionData.a}</button>
          <button id="b" class="options">${QuestionData.b}</button>
          <button id="c" class="options">${QuestionData.c}</button>
          <button id="d" class="options">${QuestionData.d}</button>
        </div>
  
        <button id="nextQuestion" onClick="nextQue()">Next Question</button>
      </div>
     </div>
      
    </div>
    `;
    
  
    // this code is use for selection of Answer.and updating score.
   let answerData = document.querySelectorAll(".options");
    answerData.forEach((dataBtn) => {
      dataBtn.addEventListener("click", (dataBtn) => {
        console.log(dataBtn.target.id);
        if(QuestionData.ans==dataBtn.target.id){
              console.log("congratulation");
              score++;
              right++;
        dataBtn.target.style.backgroundColor='green';
        }else{
          wrong++;
            dataBtn.target.style.backgroundColor='red';
            answerData.disabled= true;
        }
        
      });
    });
  return;
  }
  
  
  
  function ResultPage() {
    let scorePercentage=eval(`${questionSet[index].length}*${score}%${100}`);
    document.querySelector(".mainContainer").innerHTML = `
          <div class="resultContainer3rd">
            <h2 class="resultHeading3rdPage">Quiz Result</h2>
            <h4 class="resultHeading4-3rdPage">${userName}:<h5>your result is</h5></h4>
            <h4 class="resultHeading4-3rdPage">Total time taken:110 second</h4>
            <h4 class="resultHeading4-3rdPage">total Question:${questionSet[index].length}</h4>
             <h4 class="resultHeading4-3rdPage">Attempt:10</h4>
            <h4 class="resultHeading4-3rdPage">Correct:${right}</h4>
             <h4 class="resultHeading4-3rdPage">Wrong:${wrong}</h4>
             <h4 class="resultHeading4-3rdPage">percentage:${scorePercentage}%</h4>
         <div class="resultPagebutton">
             <button class="resultButton-3rdPage"><a href="http://127.0.0.1:5500/index.html">Start Again</a></button>
              <button class="resultButton-3rdPage"><a href="http://127.0.0.1:5500/index.html">Home</a></button>
              
         </div>
        </div>`;}
  
  function nextQue() {
    subset++;
    questionCount++;
    //i want clear this countdwon before the function execute but due to scop issue i am able to solve this ..i will solve this bug latter.
    if (subset < questionSet[index].length) {
      loadQuestion();
    } else {
      ResultPage();
    }
  }