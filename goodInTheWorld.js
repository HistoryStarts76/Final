var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("headerSlide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 5000); 
}
//QUOTE OF THE DAY
quoteOfTheDay() //THis is essential if you want this function to run without being initiated

function quoteOfTheDay() {
  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "For whosoever will save his life shall lose it: and whosoever will lose his life for my sake shall find it. - Jesus Christ (Matthew 16:25)";
  weekday[1] = "When we look for what's best in the person we happen to be with at the moment, we're doing what God does, so in appreciating our neighbor, we're participating in something truly sacred. - Fred Rogers";
  weekday[2] = "Despite everything, I believe that people are really good at heart. - Anne Frank";
  weekday[3] = "It is easy to hate and it is difficult to love. This is how the whole scheme of things works. All good things are difficult to achieve; and bad things are very easy to get. - Confucius";
  weekday[4] = "In this life, we have to make many choices. Some are very important choices. Some are not. Many of our choices are between good and evil. The choices we make, however, determine to a large extent our happiness or our unhappiness, because we have to live with the consequences of our choices. - James E. Faust";
  weekday[5] = "Technology is nothing. What's important is that you have a faith in people, that they're basically good and smart, and if you give them tools, they'll do wonderful things with them. - Steve Jobs";
  weekday[6] = "People have this capacity within them to set the world straight. - Jordan Peterson";

  var n = weekday[d.getDay()];
  document.getElementById("qOTD").innerHTML = n;
}
//CHANGE CHALLENGES BASED ON RANDOM NUMBER
challengeQuestionsA1()
challengeQuestionsA2()
challengeQuestionsA3()
challengeQuestionsB1()
challengeQuestionsB2()
challengeQuestionsB3()
challengeQuestionsC1()
challengeQuestionsC2()
challengeQuestionsC3()

function challengeQuestionsA1() {
	var textA1 = Math.floor((Math.random() * 2) + 1);
		if (textA1 == 1) {
			text = "A1: Compliment the first three people you talk to today."
		}
		else {
			text = "A1: Send a positive text message to five different people right now."
		}
	document.getElementById("chalA1").innerHTML = text
}

function challengeQuestionsA2() {
	var textA2 = Math.floor((Math.random() * 2) + 1);
		if (textA2 == 1) {
			text = "A2: Surprise a neighbor with freshly baked cookies or treats."
		}
		else {
			text = "A2: Have a LinkedIn account? Write a recommendation for coworker or connection."
		}
	document.getElementById("chalA2").innerHTML = text
}

function challengeQuestionsA3() {
	var textA3 = Math.floor((Math.random() * 2) + 1);
		if (textA3 == 1) {
			text = "A3: Send a ‘Thank you’ card or note to the officers at your local police or fire station."
		}
		else {
			text = "A3: Write a kind message on your mirror with a dry erase marker for yourself, your significant other or a family member."
		}
	document.getElementById("chalA3").innerHTML = text
}

function challengeQuestionsB1() {
	var textB1 = Math.floor((Math.random() * 2) + 1);
		if (textB1 == 1) {
			text = "B1: Email or write to a former teacher who made a difference in your life."
		}
		else {
			text = "B1: Take five minutes to send cards to sick children who are fighting serious illnesses and want to receive mail."
		}
	document.getElementById("chalB1").innerHTML = text
}

function challengeQuestionsB2() {
	var textB2 = Math.floor((Math.random() * 2) + 1);
		if (textB2 == 1) {
			text = "B2: Put a surprise note or sketch in with your spouse’s or kid’s lunch."
		}
		else {
			text = "B2: Send cards to lonely seniors."
		}
	document.getElementById("chalB2").innerHTML = text
}

function challengeQuestionsB3() {
	var textB3 = Math.floor((Math.random() * 2) + 1);
		if (textB3 == 1) {
			text = "B3: Contribute a small sum of money to grant a wish of a foster youth."
		}
		else {
			text = "B3: When people are gossiping about someone, be the person to chime in with something nice."
		}
	document.getElementById("chalB3").innerHTML = text
}

function challengeQuestionsC1() {
	var textC1 = Math.floor((Math.random() * 2) + 1);
		if (textC1 == 1) {
			text = "C1: Invite someone to dinner."
		}
		else {
			text = "C1: Call your parents."
		}
	document.getElementById("chalC1").innerHTML = text
}

function challengeQuestionsC2() {
	var textC2 = Math.floor((Math.random() * 2) + 1);
		if (textC2 == 1) {
			text = "C2: Send flowers to a friend."
		}
		else {
			text = "C2: Pick up litter."
		}
	document.getElementById("chalC2").innerHTML = text
}

function challengeQuestionsC3() {
	var textC3 = Math.floor((Math.random() * 2) + 1);
		if (textC3 == 1) {
			text = "C3: Donate outgrown clothes."
		}
		else {
			text = "C3: Call a friend you haven’t seen in a while to say hello."
		}
	document.getElementById("chalC3").innerHTML = text
}

//CHANGE BUTTON COLORS
var count = 1;
	function setColorA1(buttonA1, color) {
		var property = document.getElementById(buttonA1);
			if (count == 0) {
			property.style.backgroundColor = "gray"
			count = 1;        
			}
            else {
			property.style.backgroundColor = "goldenrod"
			count = 0;
			}
}

var count = 1;
	function setColorA2(buttonA2, color) {
		var property = document.getElementById(buttonA2);
			if (count == 0) {
			property.style.backgroundColor = "gray"
			count = 1;        
			}
            else {
			property.style.backgroundColor = "goldenrod"
			count = 0;
			}
}

var count = 1;
	function setColorA3(buttonA3, color) {
		var property = document.getElementById(buttonA3);
			if (count == 0) {
			property.style.backgroundColor = "gray"
			count = 1;        
			}
            else {
			property.style.backgroundColor = "goldenrod"
			count = 0;
			}
}

var count = 1;
	function setColorB1(buttonB1, color) {
		var property = document.getElementById(buttonB1);
			if (count == 0) {
			property.style.backgroundColor = "gray"
			count = 1;        
			}
            else {
			property.style.backgroundColor = "goldenrod"
			count = 0;
			}
}

var count = 1;
	function setColorB2(buttonB2, color) {
		var property = document.getElementById(buttonB2);
			if (count == 0) {
			property.style.backgroundColor = "gray"
			count = 1;        
			}
            else {
			property.style.backgroundColor = "goldenrod"
			count = 0;
			}
}

var count = 1;
	function setColorB3(buttonB3, color) {
		var property = document.getElementById(buttonB3);
			if (count == 0) {
			property.style.backgroundColor = "gray"
			count = 1;        
			}
            else {
			property.style.backgroundColor = "goldenrod"
			count = 0;
			}
}

var count = 1;
	function setColorC1(buttonC1, color) {
		var property = document.getElementById(buttonC1);
			if (count == 0) {
			property.style.backgroundColor = "gray"
			count = 1;        
			}
            else {
			property.style.backgroundColor = "goldenrod"
			count = 0;
			}
}

var count = 1;
	function setColorC2(buttonC2, color) {
		var property = document.getElementById(buttonC2);
			if (count == 0) {
			property.style.backgroundColor = "gray"
			count = 1;        
			}
            else {
			property.style.backgroundColor = "goldenrod"
			count = 0;
			}
}

var count = 1;
	function setColorC3(buttonC3, color) {
		var property = document.getElementById(buttonC3);
			if (count == 0) {
			property.style.backgroundColor = "gray"
			count = 1;        
			}
            else {
			property.style.backgroundColor = "goldenrod"
			count = 0;
			}
}

//NAVBAR

window.onscroll = function() {navbarScroll()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function navbarScroll() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}