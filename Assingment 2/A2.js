var number_1 = parseInt(prompt("Enter your first number"));
var operation = prompt("Enter your operation");
var number_2 = parseInt(prompt("Enter your second number"));

switch (operation)
{
    case "+":
        var r = number_1 + number_2;
        document.write(r);
        break;
    case "-":
        var r = number_1 - number_2;
        document.write(r);
        break;
    case "*":
        var r = number_1 * number_2;
        document.write(r);
        break;
    case "/":
        var r = number_1 / number_2;
        document.write(r);
        break;
}