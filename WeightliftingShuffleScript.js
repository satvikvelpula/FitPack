let btn = document.getElementById("btn");
let output = document.getElementById("output");
let exer =   
    [
        "Bicep Curl", "incline curl", "preacher curl", "Skull Crusher", "Triceps Extension",
    ];
btn.addEventListener("click", function(){
    var randomExer = exer[Math.floor(Math.random() * exer.length)]
    output.innerHTML = randomExer;
})  

let btn7 = document.getElementById("btn7");
        let output7 = document.getElementById("output7");
        let exer7 =
        [
            "1",
            "2",
            "3",
            "4",
            "5", 
        ];
        btn7.addEventListener("click", function(){
            var randomExer7 = exer7[Math.floor(Math.random() * exer7.length)]
            output7.innerHTML = randomExer7;
        })

let btn2 = document.getElementById("btn2");
let output2 = document.getElementById("output2");
let exer2 =
    [
        "back squat",
        "Leg press",
        "bulgarian split squat",
        "leg extension",
        "leg curl",
        "front squat",
        "goblet squat",
        "pistol squat",
        "box squat",
    ];

btn2.addEventListener("click", function(){
    var randomExer2 = exer2[Math.floor(Math.random() * exer2.length)]
    output2.innerHTML = randomExer2;
})

let btn8 = document.getElementById("btn8");
        let output8 = document.getElementById("output8");
        let exer8 =
        [
            "1",
            "2",
            "3",
            "4",
            "5", 
        ];
        btn8.addEventListener("click", function(){
            var randomExer8 = exer8[Math.floor(Math.random() * exer8.length)]
            output8.innerHTML = randomExer8;
        })


let btn3 = document.getElementById("btn3");
let output3 = document.getElementById("output3");
let exer3 =
    [
        "bench press",
        "incline bench press",
        "dumbbell bench press",
        "incline dumbbell bench press",
        "chest press",
        "cable fly",
        "pec dec",
        "dumbbell fly",
    ];
    btn3.addEventListener("click", function(){
        var randomExer3 = exer3[Math.floor(Math.random() * exer3.length)]
        output3.innerHTML = randomExer3;
    })

    let btn9 = document.getElementById("btn9");
        let output9 = document.getElementById("output9");
        let exer9 =
        [
            "1",
            "2",
            "3",
            "4",
            "5", 
        ];
        btn9.addEventListener("click", function(){
            var randomExer9 = exer9[Math.floor(Math.random() * exer9.length)]
            output9.innerHTML = randomExer9;
        })


    let btn4 = document.getElementById("btn4");
    let output4 = document.getElementById("output4");
    let exer4 =
    [
        "Deadlift",
        "Bent-Over Row",
        "Pull-Up",
        "T-Bar Row",
        "Seated Row",
        "Single-Arm Smith Machine Row",
        "Lat Pull-Down",
        "Dumbbell Pull-Over",
        "Single-Arm Dumbbell Row",
        "Chest-Supported Row",
    ];
    btn4.addEventListener("click", function(){
        var randomExer4 = exer4[Math.floor(Math.random() * exer4.length)]
        output4.innerHTML = randomExer4;
    })

    let btn10 = document.getElementById("btn10");
    let output10 = document.getElementById("output10");
    let exer10 =
    [
        "1",
        "2",
        "3",
        "4",
        "5", 
    ];
    btn10.addEventListener("click", function(){
        var randomExer10 = exer10[Math.floor(Math.random() * exer10.length)]
        output10.innerHTML = randomExer10;
    })

    let btn5 = document.getElementById("btn5");
    let output5 = document.getElementById("output5");
    let exer5 =
        [
            "Push-Press",
            "Military Press",
            "Rear Delt Row",
            "Seated Dumbbell Press",
            "Seated Barbell Press",
            "Upright Row",
            "Arnold Press",
            "Rear Delt Fly",
            "Lateral Raise",
            "Front Raise",
        ];
        btn5.addEventListener("click", function(){
            var randomExer5 = exer5[Math.floor(Math.random() * exer5.length)]
            output5.innerHTML = randomExer5;
        })

        let btn11 = document.getElementById("btn11");
        let output11 = document.getElementById("output11");
        let exer11 =
        [
            "1",
            "2",
            "3",
            "4",
            "5", 
        ];
        btn11.addEventListener("click", function(){
            var randomExer11 = exer11[Math.floor(Math.random() * exer11.length)]
            output11.innerHTML = randomExer11;
        })

        let btn6 = document.getElementById("btn6");
        let output6 = document.getElementById("output6");
        let exer6 =
        [
            "Hanging Knee Raise",
            "Machine Crunch",
            "Pallof Press",
            "Cable Crunch",
            "Decline Crunch",
            "Squat",
            "Russian Twist",
            "Ab Roll-Out",
        ];
        btn6.addEventListener("click", function(){
            var randomExer6 = exer6[Math.floor(Math.random() * exer6.length)]
            output6.innerHTML = randomExer6;
        })

        let btn12 = document.getElementById("btn12");
        let output12 = document.getElementById("output12");
        let exer12 =
        [
            "1",
            "2",
            "3",
            "4",
            "5", 
        ];
        btn12.addEventListener("click", function(){
            var randomExer12 = exer12[Math.floor(Math.random() * exer12.length)]
            output12.innerHTML = randomExer12;
        })

// add workout script    ---------------------------------------------------------------------

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
