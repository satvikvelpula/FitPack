let btn = document.getElementById("btn");
let output = document.getElementById("output");
let exer =
    [
        "Chin-ups",
        "Curls on rings",
        "Pelican Curls" ,
        "Dips",
        "Diamond Push-ups",
        "Overhead Triceps Extensions",
    ]; 
btn.addEventListener("click", function(){
    var randomExer = exer[Math.floor(Math.random() * exer.length)]
    output.innerHTML = randomExer;
})

let btn2 = document.getElementById("btn2");
let output2 = document.getElementById("output2");
let exer2 =
    [
        "Free squats",
        "Pistol squats",
        "Box jumps",
        "Spanish squats",
        "lunges",
        "Side squats",
        "goblet squat",
        "Glute bridges",
        "Sissy squats",
        "Chair hold against wall",
        "Calf raises",
    ];

btn2.addEventListener("click", function(){
    var randomExer2 = exer2[Math.floor(Math.random() * exer2.length)]
    output2.innerHTML = randomExer2;
})

let btn3 = document.getElementById("btn3");
let output3 = document.getElementById("output3");
let exer3 =
    [
        "Dips",
        "Clap Push-Ups",
        "Decline Push-Ups",
        "Straight Bar Dips",
        "One Arm Knee Push-Ups",
        "Wide Push-Ups",
        "Diamond Push-ups",
        "Regular Push-Ups",
        "Incline push-ups",
        "Push-Up Hold",
    ];
    btn3.addEventListener("click", function(){
        var randomExer3 = exer3[Math.floor(Math.random() * exer3.length)]
        output3.innerHTML = randomExer3;
    })

    let btn4 = document.getElementById("btn4");
    let output4 = document.getElementById("output4");
    let exer4 =
    [
        "Pull-ups",
        "Chin-ups",
        "Resistance Band Straight Arm Pulldown",
        "Reverse Snow Angel",
        "Inverted Rows",
        "Face Pulls",
        "Lat Pull-DownMuscle Ups",
    ];
    btn4.addEventListener("click", function(){
        var randomExer4 = exer4[Math.floor(Math.random() * exer4.length)]
        output4.innerHTML = randomExer4;
    })

    let btn5 = document.getElementById("btn5");
    let output5 = document.getElementById("output5");
    let exer5 =
        [
            "Standing IYT Raises",
            "Pike Pushup",
            "Handstand Pushup",
            "Bodyweight Lateral Raises",
            "Bodyweight Rear Delt Row or Incline Row",
            "Planche pushup",
            "Feet Elevated Pike Pushup",
            "Wall Walk",
            "Isometric Handstand",
            "Shoulder Vertical Pulses",
        ];
        btn5.addEventListener("click", function(){
            var randomExer5 = exer5[Math.floor(Math.random() * exer5.length)]
            output5.innerHTML = randomExer5;
        })

        let btn6 = document.getElementById("btn6");
        let output6 = document.getElementById("output6");
        let exer6 =
        [
            "Hollow Body Crunch",
            "Hanging Knee Raises",
            "Reverse crunches",
            "Front and Side Plank",
            "L-Sit",
            "Windshield Wipers",
            "Single Leg Tuck-up",
            "Lying Leg Raises",
            "V ups",
            "Dragon Flag",
            "Kneeling Ab Wheel Rollout",
            "Sit-ups",
            "Bird Dog Plank",
        ];
        btn6.addEventListener("click", function(){
            var randomExer6 = exer6[Math.floor(Math.random() * exer6.length)]
            output6.innerHTML = randomExer6;
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
