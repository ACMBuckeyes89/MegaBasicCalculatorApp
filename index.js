//Creating state variables to hold operations and history of operations, respectively.
let operation = "";
let history = [];
let ops = [];
let equation

//Listen to buttons pressed and save that operation into var with function
/*function btnPress(event){
    operation = event.target.value;
    console.log(operation);

   history.push(operation);
   //console.log(history);

   ops.push(operation);
   console.log(ops);
    
    //function to display button value onto screen
    display();
} */

// Function to display values inside an empty div on HTML doc
/*function display(){
    
    let displayOp = document.getElementById("displayScreen");
    
    for (let index = 0; index < history.length; index++) {
        const element = history[index];
        
        const h3 = document.createElement("h3");
        h3.innerText = element;
        
        displayOp.appendChild(h3);

        history = [];
    }

} */

//Function to clear display when pressing "c" button
/*function clearDisplay() {
    document.getElementById("displayScreen").innerHTML = "";
} */

//Function to solve math problem and display to screen
/*function equate() {
    
    clearDisplay();

    let screen = ops[0] + ops[1] + ops[2];

    let answer = document.getElementById("displayScreen");

    const forTheWin = document.createElement("h3");

    forTheWin.innerText = solve;

    answer.appendChild(forTheWin);
} */

//Creating function when button is clicked with jQuery

$(".btn").click(function(){
    //Grabs value of button clicked
    let buttonClicked = $(this).attr("value");
    ops.push(buttonClicked);

    //Displays value of button clicked into input field
    $("#numbers").val(buttonClicked);

    console.log(buttonClicked);
});

//Use an if statement to hear for buttons that contain operator values


