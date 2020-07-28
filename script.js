// Variable declaration
var generatorBox = document.querySelector(".pin-generator-box");
var inputBox = document.querySelector(".pin-input-box");

// Pin generate section
var number = 0;

function numberGenerator()
{
    number = Math.random() * 10000;
    number = Math.round(number);
}

document.querySelector(".generate-btn").addEventListener('click', function(){
    numberGenerator();
    while(number < 1000 || number > 9999)
    {
        numberGenerator();
    }
    generatorBox.value = number;
});

// Pin user input section
var digitsConcat = "";

var buttons = document.getElementsByClassName("button");

for(var i = 0; i < buttons.length; i++)
{  
    buttons[i].addEventListener('click', function(){
        if(this.id == "C")
        {
            digitsConcat = "";
            inputBox.value = digitsConcat;
        }
        else if(this.id == "<")
        {
            digitsConcat = inputBox.value.substr(0, inputBox.value.length - 1);
            inputBox.value = digitsConcat;
        }
        else
        {
            digitsConcat  = digitsConcat + this.id;
            inputBox.value = digitsConcat;
        }
    });   
}

// Pin matching section
var i = 2;

document.querySelector(".submit-btn").addEventListener('click', function(){
    if(generatorBox.value == inputBox.value)
    {
        document.getElementById("matched").style.display = "block";
        document.getElementById("not-matched").style.display = "none";
    }
    else
    {
        if(i == 0)
        {
            // Button disabled after 3 tries 
            document.querySelector(".submit-btn").disabled = true;
        }
        document.getElementById("not-matched").style.display = "block";
        document.getElementById("matched").style.display = "none";

        document.getElementById("try-count").innerText = i;
        i--;
    }
});