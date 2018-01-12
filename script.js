var answer=0, newAnswer, operator="", lastButtonOP = false, lastButtonEqual = false;

function add(a, b) {
	answer = a + b;
	return answer;
}

function subtract(a, b) {
	answer = a - b;
	return answer;
}

function multiply(a, b) {
	answer = a * b;
	return answer;
}

function divide(a, b) {
	answer = a / b;
	return answer;
}

function operate(a, op, b) {
	var opAnswer;
	if(op == "+") return add(a, b)
	if(op == "-") return subtract(a, b)
	if(op == "*") return multiply(a, b);
	if(op == "/") return divide(a, b);
}

const btn1 = document.querySelector("#one");
const btn2 = document.querySelector("#two");
const btn3 = document.querySelector("#three");
const btn4 = document.querySelector("#four");
const btn5 = document.querySelector("#five");
const btn6 = document.querySelector("#six");
const btn7 = document.querySelector("#seven");
const btn8 = document.querySelector("#eight");
const btn9 = document.querySelector("#nine");
const btn0 = document.querySelector("#zero");
const dot = document.querySelector("#dot");
const del = document.querySelector("#del");
const equal = document.querySelector("#equal");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const star = document.querySelector("#star");
const slash = document.querySelector("#slash");
const clear = document.querySelector("#clear");
const tcdisplay = document.querySelector("#tcdisplay");

btn1.addEventListener("click", () => {
	if(lastButtonOP) {
		tcdisplay.textContent = "";
		lastButtonOP = false;
	}
	tcdisplay.textContent += "1";
});
btn2.addEventListener("click", () => {
	if(lastButtonOP) {
		tcdisplay.textContent = "";
		lastButtonOP = false;
	}
	tcdisplay.textContent += "2";
});
btn3.addEventListener("click", () => {
	if(lastButtonOP) {
		tcdisplay.textContent = "";
		lastButtonOP = false;
	}
	tcdisplay.textContent += "3";
});
btn4.addEventListener("click", () => {
	if(lastButtonOP) {
		tcdisplay.textContent = "";
		lastButtonOP = false;
	}
	tcdisplay.textContent += "4";
});
btn5.addEventListener("click", () => {
	if(lastButtonOP) {
		tcdisplay.textContent = "";
		lastButtonOP = false;
	}
	tcdisplay.textContent += "5";
});
btn6.addEventListener("click", () => {
	if(lastButtonOP) {
		tcdisplay.textContent = "";
		lastButtonOP = false;
	}
	tcdisplay.textContent += "6";
});
btn7.addEventListener("click", () => {
	if(lastButtonOP) {
		tcdisplay.textContent = "";
		lastButtonOP = false;
	}
	tcdisplay.textContent += "7";
});
btn8.addEventListener("click", () => {
	if(lastButtonOP) {
		tcdisplay.textContent = "";
		lastButtonOP = false;
	}
	tcdisplay.textContent += "8";
});
btn9.addEventListener("click", () => {
	if(lastButtonOP) {
		tcdisplay.textContent = "";
		lastButtonOP = false;
	}
	tcdisplay.textContent += "9";
});
btn0.addEventListener("click", () => {
	if(lastButtonOP) {
		tcdisplay.textContent = "";
		lastButtonOP = false;
	}
	tcdisplay.textContent += "0";
});
clear.addEventListener("click", () => {
	tcdisplay.textContent = ""; 
	operator = "";
	answer = 0;
});
plus.addEventListener("click", () => {
	operator = "+"; 
	lastButtonOP=true;
	if(answer == 0) answer = Number(tcdisplay.textContent);
	else if(lastButtonEqual) lastButtonEqual = false;
	else answer = operate(answer, operator, Number(tcdisplay.textContent));
});
minus.addEventListener("click", () => {
	operator = "-"; 
	lastButtonOP=true;
	if(answer == 0) answer = Number(tcdisplay.textContent);
	else if(lastButtonEqual) lastButtonEqual = false;
	else answer = operate(answer, operator, tcdisplay.textContent);
});
star.addEventListener("click", () => {
	operator = "*"; 
	lastButtonOP=true;
	if(answer == 0) answer = Number(tcdisplay.textContent);
	else if(lastButtonEqual) lastButtonEqual = false;
	else answer = operate(answer, operator, Number(tcdisplay.textContent));
});
slash.addEventListener("click", () => {
	operator = "/"; 
	lastButtonOP=true;
	if(answer == 0) answer = Number(tcdisplay.textContent);
	else if(lastButtonEqual) lastButtonEqual = false;
	else answer = operate(answer, operator, Number(tcdisplay.textContent));
});

equal.addEventListener("click", () => {
	if(answer == 0) tcdisplay.textContent = "";
	else answer = operate(answer, operator, Number(tcdisplay.textContent));
	tcdisplay.textContent = answer;
	operator = "";
	lastButtonOP = false;
	lastButtonEqual = true;
});

del.addEventListener("click", () => {
	newTextContent = tcdisplay.textContent.substr(0, tcdisplay.textContent.length - 1);
	tcdisplay.textContent = newTextContent;
});

dot.addEventListener("click", () => {
	if(tcdisplay.textContent.indexOf(".") == -1)
		tcdisplay.textContent += ".";
});