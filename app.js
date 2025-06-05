// Change the mode "light || dark"

// let modeBtn = document.querySelector("#mode");
// let body = document.querySelector("body");
// let currMode = "light";

// modeBtn.addEventListener("click", () => {
//     if(currMode === "light") {
//         currMode = "dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     } else {
//         currMode = "light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }

//     console.log(currMode)
// });



// Tic Tac Toe
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;    //playerX, playerY
let moveCount = 0;  //To check draw condition

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turn0 = true;
    moveCount = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {    //playerX
            box.innerText = "X";
            box.style.color = "blue";
        } else {    //player0
            box.innerText = "0";
            box.style.color = "maroon";
        }
        turn0 = !turn0;
        box.disabled = true;
        moveCount++;

        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `🎉 Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for(pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                return;
            }
        }
        if(moveCount === 9) {
            msg.innerText = "🤝 It's a Draw!";
            msgContainer.classList.remove("hide");
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);