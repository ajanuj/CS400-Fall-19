const evaluateExpression = str => {
    let operator = str.replace(/[0-9]/g, "");
    switch(operator) {
        case "+":
            return expression => parseInt(expression[0]) + parseInt(expression[2]);

        case "-":
            return expression => parseInt(expression[0]) - parseInt(expression[2]);
            
        case "*":
            return expression => parseInt(expression[0]) * parseInt(expression[2]);

        case "/":
            return expression => parseInt(expression[0]) / parseInt(expression[2]);
    }
}

const addExpression = '9+5';
let addOperator = evaluateExpression(addExpression);
console.log(`${addExpression} = ${addOperator(addExpression)}`)

const multExpression = '3*6';
let multOperator = evaluateExpression(multExpression);
console.log(`${multExpression} = ${multOperator(multExpression)}`)

const subExpression = '9-7';
let minOperator = evaluateExpression(subExpression);
console.log(`${subExpression} = ${minOperator(subExpression)}`)

const divExpression = '8/2';
let divOperator = evaluateExpression(divExpression);
console.log(`${divExpression} = ${divOperator(divExpression)}`)