/**
 * @author Camilo Becerra
 * this here be my work.
 * July 25 2025
 */


/**
 * constants and variables
 */
const svgNS = "http://www.w3.org/2000/svg"
let canvas;     //svg element of canvas 
let dot;        //svg element dots on dice faces
let valueBetOn; //value user bets on
let diceValue;  //value rolled
let winner;     //svg element created when win
let loser;      //svg element message when loose
let betOnText;  // svg element black numbers
let dollars = 100; //ammount user starts with
let bet = 0;       // initial value of bet before user selects an ammount
let clickedButtonValue; // assigns value to bet once user selects bet ammount
let buttonBet;          // buttons classs array

buttonBet = document.querySelectorAll(".buttons")

//array used to create dice faces
const face1 =
    [[0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]];

const face2 = [[1, 0, 0],
[0, 0, 0],
[0, 0, 1]];

const face3 = [[1, 0, 0],
[0, 1, 0],
[0, 0, 1]];

const face4 = [[1, 0, 1],
[0, 0, 0],
[1, 0, 1]];

const face5 = [[1, 0, 1],
[0, 1, 0],
[1, 0, 1]];

const face6 = [[1, 0, 1],
[1, 0, 1],
[1, 0, 1]];


canvas = document.querySelector("#canvas"); //assign canvas-svg element to canvas

/**
 * create winner and loser messages
 */
winner = document.createElementNS(svgNS, "text");
winner.textContent = "WINNER";
winner.setAttribute("x", 180);
winner.setAttribute("y", 260);
winner.setAttribute("fill", "white");
winner.setAttribute("stroke", "white");
winner.setAttribute("font-size", "35px");
winner.setAttribute("font-family", "Courier");
winner.setAttribute("class", "alerts");
loser = document.createElementNS(svgNS, "text")
loser.textContent = "Loser"
loser.setAttribute("x", 200)
loser.setAttribute("y", 260)
loser.setAttribute("fill", "white");
loser.setAttribute("stroke", "white");
loser.setAttribute("font-size", "35px");
loser.setAttribute("font-family", "Courier");
loser.setAttribute("class", "alerts");




/**
 * for each button on the buttons array save the value contained with it into clickedButton 
 * when it is clicked
 * 
 * param (button)
 * return(clickedButtonValue)
 */
buttonBet.forEach(function (button) {
    /**
     * click event listener
     * param(event)
     */
    button.addEventListener("click", function (event) {

        clickedButtonValue = parseFloat(event.target.value);
        currentBet.textContent = "Current bet : " + "$" + String(clickedButtonValue);
        console.log(clickedButtonValue)
        bet = clickedButtonValue
    })
})



/**
 * create current event svg element and append to canvas
 */
let currentBet = document.createElementNS(svgNS, "text")
currentBet.setAttribute("x", 140);
currentBet.setAttribute("y", 65);
currentBet.setAttribute("fill", "white");
currentBet.setAttribute("stroke", "white");
currentBet.setAttribute("font-size", "20px");
currentBet.setAttribute("font-family", "Courier");
canvas.appendChild(currentBet)


/**
 * add or remove cash to the current ammount of cash after dice were rolled 
 * param()
 * return text content for money
 */
function purse() {
    if (dollars < clickedButtonValue) {
        alert("You cant bet what you aint got")
    } else if (valueBetOn == diceValue) {
        dollars += bet
    } else {
        dollars -= bet
    }
    return money.textContent = "Cash left : " + "$" + String(dollars)
}


/**
 * create svg element displaying money in purse.
 */
let money = document.createElementNS(svgNS, "text")
money.textContent = "Cash left : " + "$" + String(dollars)
money.setAttribute("x", 130);
money.setAttribute("y", 30);
money.setAttribute("fill", "white");
money.setAttribute("stroke", "white");
money.setAttribute("font-size", "25px");
money.setAttribute("font-family", "Courier");
canvas.appendChild(money)



//Draw first die
function drawFirstDie(die) {
    let xinit = 160;
    let yinit = 150;

    //remove borders
    let drawnBorders = canvas.querySelectorAll(".rects");
    for (r = 0; r < drawnBorders.length; r++) {
        drawnBorders[r].remove();
    }

    //remove alerts
    let alerts = canvas.querySelectorAll(".alerts");
    for (r = 0; r < alerts.length; r++) {
        alerts[r].remove();
    }

    //draw Borders
    let border = document.createElementNS(svgNS, "rect")
    border.setAttribute("x", 145);
    border.setAttribute("y", 85 + 50);
    let xpos = 145;
    let ypos = 85 + 50;
    border.setAttribute("width", 90);
    border.setAttribute("height", 90);
    border.setAttribute("fill", "white");
    border.setAttribute("stroke", "black");
    border.setAttribute("rx", 10);
    border.setAttribute("class", "rects");

    let animationStarBorderx = Math.random() * 700;
    let animationStarBordery = Math.random() * 150;


    border.animate([{ "x": animationStarBorderx + "px" }, { "x": xpos + "px" }], 300);
    border.animate([{ "y": animationStarBordery + "px" }, { "y": ypos + "px" }], 300);
    canvas.appendChild(border);

    //remove old dots
    let drawnDots = canvas.querySelectorAll("circle");
    for (p = 0; p < drawnDots.length; p++) {
        drawnDots[p].remove();
    }

    // draw new dots
    for (let i = 0; i < die.length; i++) {
        for (let j = 0; j < die[i].length; j++) {

            if (die[i][j] === 1) {
                dot = document.createElementNS(svgNS, "circle")
                dot.setAttribute("cx", xinit + (j * 30));
                dot.setAttribute("cy", yinit + (i * 30));

                let xpos = xinit + (j * 30);
                let ypos = yinit + (i * 30);
                dot.setAttribute("r", 5);
                dot.setAttribute("fill", "black");
                animationStartx = Math.random() * 500;
                animationStarty = Math.random() * 500;
                dot.animate([{ opacity: 0 }, { opacity: 1 }], 600);
                dot.animate([{ "cx": 250 + "px" }, { "cx": xpos + "px" }], 450);
                dot.animate([{ "cy": 175 + "px" }, { "cy": ypos + "px" }], 450);
                canvas.appendChild(dot);

            }
        }
    }
}

//Draw second die
function drawSecondDie(die) {
    let xinit = 275;
    let yinit = 150;
    let border2 = document.createElementNS(svgNS, "rect")

    //draw border
    border2.setAttribute("x", 260);
    border2.setAttribute("y", 135);
    let xpos = 260;
    let ypos = 85 + 50;
    border2.setAttribute("width", 90);
    border2.setAttribute("height", 90);
    border2.setAttribute("fill", "white");
    border2.setAttribute("stroke", "black");
    border2.setAttribute("rx", 10);
    border2.setAttribute("class", "rects");

    let animationStarBorder2x = Math.random() * 500;
    let animationStarBorder2y = Math.random() * 150;


    border2.animate([{ "x": animationStarBorder2x + "px" }, { "x": xpos + "px" }], 300);
    border2.animate([{ "y": animationStarBorder2y + "px" }, { "y": ypos + "px" }], 300);
    canvas.appendChild(border2);



    //draw dice dots
    for (let i = 0; i < die.length; i++) {
        for (let j = 0; j < die[i].length; j++) {

            if (die[i][j] === 1) {
                dot = document.createElementNS(svgNS, "circle");

                dot.setAttribute("cx", xinit + (j * 30));
                dot.setAttribute("cy", yinit + (i * 30));

                let xpos = xinit + (j * 30)
                let ypos = yinit + (i * 30)

                dot.setAttribute("r", 5);
                dot.setAttribute("fill", "black");
                let animationStartDots2x = Math.random() * 500;
                let animationStartDots2y = Math.random() * 500;


                dot.animate([{ opacity: 0 }, { opacity: 1 }], 600)
                dot.animate([{ "cx": 250 + "px" }, { "cx": xpos + "px" }], 450)
                dot.animate([{ "cy": 175 + "px" }, { "cy": ypos + "px" }], 450)
                dot.classList.add("dot");
                canvas.appendChild(dot);
            }
        }
    }
}

//draw and display numbers to bet on 
for (let i = 0; i < 3; i++) {
    for (let j = 0; j <= 3; j++) {

        betOnText = document.createElementNS(svgNS, "text");
        let betNum = String(i * 4 + 2 + j);
        if (betNum <= 12) {
            betOnText.textContent = betNum
        } else {
            betOnText.textContent = null

        }

        //numbers attributes
        let xstart = 90;
        let ystart = 300;
        betOnText.setAttribute("x", (xstart + j * 95));
        betOnText.setAttribute("y", (ystart + i * 95));
        betOnText.setAttribute("fill", "black");
        betOnText.setAttribute("stroke", "black");
        betOnText.setAttribute("font-size", "30px");
        betOnText.setAttribute("font-family", "Courier");
        betOnText.setAttribute("data-value", betNum)
        canvas.appendChild(betOnText);


        //event listener to change atributes on hover over numbers 
        betOnText.addEventListener("mouseenter", function (event) {
            event.target.setAttribute("class", "onHover")
        });
        betOnText.addEventListener("mouseleave", function (event) {
            event.target.removeAttribute("class")
        });

        /**
         * event listener to roll dice and update cash left and win or loose message according to number rolled
         *@param event
         */
        betOnText.addEventListener("click", function (event) {
            console.log(bet)
            if (bet == 0) {
                alert("Gotta bet first!");
            } else {

                let dieFaces = [face1, face2, face3, face4, face5, face6]; //array to contain dice faces
                let randomNumber = Math.floor(Math.random() * dieFaces.length);
                let randomNumber2 = Math.floor(Math.random() * dieFaces.length);

                drawFirstDie(dieFaces[randomNumber]);
                drawSecondDie(dieFaces[randomNumber2]);
                diceValue = randomNumber + randomNumber2 + 2
                valueBetOn = event.target.dataset.value
                bet = clickedButtonValue

                /**
                 * delay display of winner or loser message
                 */
                setTimeout(function () {
                    if (valueBetOn == diceValue) {
                        canvas.appendChild(winner);
                    } else {
                        canvas.appendChild(loser);
                    }
                }, 500);

                purse()
                canvas.appendChild(money)

            }
        })

    }


}




