
let btn = document.getElementById(`btn`); //creates a variable "btn" and makes it equal to the button with id "btn" in my html code
let output = document.getElementById(`outputtext`) //creates a variable "output" that changes the text in my html code depending on
                                                    //what number is typed in

let number = Math.floor(Math.random() * 101) //creates variable "number" and makes it equal to a whole number between 1 and 100

btn.addEventListener(`click`, function(){ //when "btn" is clicked all of the code below is initiated

    let input = document.getElementById(`userinput`).value; //creates a variable "input" and makes it equal to the number that the
                                                            //user types in

    if(input == number){ //if the variable "input" is equal to the variable "number" then the following code runs

        output.innerHTML = `You guessed right!, your number was ${number}` //takes the "output" variable in my html code and changes it
                                                                            //equal to the text with the variable "number"

    } else if (input < number){ //else if the variable "input" is lower than the variable "number" the following code runs

        output.innerHTML = "You guessed too low!" //takes the "output" variable in my html code and changes it equal to the text

    };

    if (input > number){ //if the variable "input" is higher than the variable "number" thn the following happens

        output.innerHTML = "You guessed too high!" //takes the "output" variable in my html code and changes it equal to the text

    }

}); //the end of my event click funktion on my "btn" variable

/*
    function changeButtonName() {
        var button = document.getElementById('myButton');
        button.innerHTML = 'Button Clicked!';
        button.style.color="blue";
        button.setAttribute("onclick","")

        //SKAPA HTML
        var objective=document.getElementById("here"); //Find where to put the thing
        var newElemet=document.createElement("img"); //Create the thing
        newElemet.src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Logo_BILD.svg/800px-Logo_BILD.svg.png" //Give the thing some style (and or function)
        objective.appendChild(newElemet); //Add the new thing where it should be put
    }
*/
