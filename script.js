let modeIcon = document.getElementsByClassName("mode")[0];
let body = document.body;

modeIcon.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    modeIcon.children[0].classList.toggle("fa-moon");
    modeIcon.children[0].classList.toggle("fa-sun");
    console.log(modeIcon.children)
});

document.addEventListener("DOMContentLoaded", function () {
    const screen = document.querySelector(".screen");
    const expressionDiv = document.querySelector(".expression");
    const valueDiv = document.querySelector(".value");
    const buttons = document.querySelectorAll(".btn");
    const equalButton = document.querySelector(".equal-button");
    const clearButton = document.querySelector(".btn[data-clear]");
    const deleteButton = document.querySelector(".fa-delete-left");
    let expression = "";
    let currentValue = "";

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;
            if (buttonText === "=") {
                evaluateExpression();
            } else if (buttonText === "AC") {
                clearScreen();
            } else if (button === deleteButton) {
                deleteLastCharacter();
            } else if (buttonText === ".") {
                appendDecimalPoint();
            } else {
                appendToExpression(buttonText);
            }
        });
    });

    function appendToExpression(text) {
        expression += text;
        expressionDiv.textContent = expression;
    }

    function evaluateExpression() {
        try {
            const result = evaluateFixedPoint(expression);
            const formattedResult = parseFloat(result).toFixed(3);
            valueDiv.textContent = formattedResult;
        } catch (error) {
            valueDiv.textContent = "Error";
        }
    }

    function evaluateFixedPoint(expr) {
        const fixedExpr = expr.replace(/(\d+(\.\d+)?)/g, (match) => {
            const num = parseFloat(match);
            return num.toFixed(10);
        });

        const finalExpr = fixedExpr.replace(/(\d)([*/])(\d)/g, '$1 $2 $3');

        return parseFloat(eval(finalExpr).toFixed(10));
    }

    function clearScreen() {
        expression = "";
        currentValue = "";
        expressionDiv.textContent = "";
        valueDiv.textContent = "";
    }

    function deleteLastCharacter() {
        expression = expression.slice(0, -1);
        expressionDiv.textContent = expression;
    }

    function appendDecimalPoint() {
        if (!expression.includes(".")) {
            if (expression === "" || "+-*/".includes(expression[expression.length - 1])) {
                expression += "0.";
            } else {
                expression += ".";
            }
            expressionDiv.textContent = expression;
        }
    }
});


  
  
  

