document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const message = document.getElementById("message");
    const choiceBox = document.getElementById("choice-box");
    const gameContainer = document.getElementById("game-container");
    let cells = Array(9).fill(null);
    let human, ai;
    let gameActive = false;

    function chooseSymbol(symbol) {
        human = symbol;
        ai = symbol === 'X' ? 'O' : 'X';
        choiceBox.style.display = "none";
        gameContainer.style.display = "block";
        gameActive = true;
        createBoard();
    }

    function createBoard() {
        board.innerHTML = "";
        cells = Array(9).fill(null);
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.index = i;
            cell.addEventListener("click", handleHumanMove);
            board.appendChild(cell);
        }
    }

    function handleHumanMove(event) {
        if (!gameActive) return;
        const index = event.target.dataset.index;
        if (cells[index] !== null) return;

        cells[index] = human;
        event.target.textContent = human;

        if (checkWinner(human)) {
            message.textContent = "You Win!";
            gameActive = false;
            return;
        }

        if (!cells.includes(null)) {
            message.textContent = "It's a Draw!";
            gameActive = false;
            return;
        }

        setTimeout(aiMove, 500);
    }

    function aiMove() {
        if (!gameActive) return;
        let bestMove = minimax(cells, ai).index;
        cells[bestMove] = ai;
        document.querySelector(`[data-index='${bestMove}']`).textContent = ai;

        if (checkWinner(ai)) {
            message.textContent = "AI Wins!";
            gameActive = false;
            return;
        }

        if (!cells.includes(null)) {
            message.textContent = "It's a Draw!";
            gameActive = false;
        }
    }

    function minimax(newBoard, player) {
        let availableMoves = newBoard.map((val, idx) => val === null ? idx : null).filter(val => val !== null);

        if (checkWinner(human)) {
            return { score: -10 };
        } else if (checkWinner(ai)) {
            return { score: 10 };
        } else if (availableMoves.length === 0) {
            return { score: 0 };
        }

        let moves = [];
        for (let i of availableMoves) {
            let move = {};
            move.index = i;
            newBoard[i] = player;

            if (player === ai) {
                move.score = minimax(newBoard, human).score;
            } else {
                move.score = minimax(newBoard, ai).score;
            }

            newBoard[i] = null;
            moves.push(move);
        }

        let bestMove;
        if (player === ai) {
            let bestScore = -Infinity;
            for (let move of moves) {
                if (move.score > bestScore) {
                    bestScore = move.score;
                    bestMove = move;
                }
            }
        } else {
            let bestScore = Infinity;
            for (let move of moves) {
                if (move.score < bestScore) {
                    bestScore = move.score;
                    bestMove = move;
                }
            }
        }
        return bestMove;
    }

    function checkWinner(player) {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        return winPatterns.some(pattern => pattern.every(index => cells[index] === player));
    }

    function resetGame() {
        message.textContent = "";
        choiceBox.style.display = "flex";
        gameContainer.style.display = "none";
        gameActive = false;
    }

    window.chooseSymbol = chooseSymbol;
    window.resetGame = resetGame;
});
