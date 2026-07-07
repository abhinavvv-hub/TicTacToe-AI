# Unbeatable Tic-Tac-Toe AI

A sleek, responsive browser-based Tic-Tac-Toe game featuring an unbeatable AI opponent driven by the Minimax algorithm. The game includes fluid introduction animations using the AOS library.

## 🔗 Live Demo
Deployments are continuously updated. You can play the live version of the game here:
👉 **[tictactoe0ai.netlify.app](https://tictactoe0ai.netlify.app/)**

## 🎮 Live Preview
- **Symbol Selection:** Players choose to play as either `X` or `O`.
- **Game Layout:** A responsive, modern grid system wrapped in interactive animations.

## ✨ Features
- **Unbeatable AI:** Built with the Minimax optimization algorithm, ensuring the AI will never lose a game (it either wins or forces a draw).
- **Symbol Choice:** Complete freedom to select your preferred starting piece (`X` or `O`).
- **Smooth Animations:** Integrated with **AOS (Animate On Scroll)** for clean fade-in and zoom effects on page elements.
- **Pure Frontend Implementation:** Built using standard web technologies with no external build tools or server-side requirements.

## 🛠️ Built With
- **HTML5:** Semantic architecture for game containment.
- **CSS3:** Grid styling layout, custom color palettes (`#61dafb`, `#282c34`), and hover effect transitions.
- **Vanilla JavaScript:** Explicit DOM manipulation, event-driven state updates, and procedural recursion.
- **AOS Library:** CDN injection for element scroll/load transitions.

## 🧠 Deep Dive: The Minimax Algorithm
The AI computes its moves by exhaustively mapping out every possible future board state using the **Minimax algorithm**. 

- It treats itself as the **Maximizer** (aiming for a score of $+10$).
- It treats the human player as the **Minizer** (aiming for a score of $-10$).
- Ties evaluate to a neutral state ($0$).

By checking all possible combinations recursively, the AI will always choose the move that minimizes your best-case scenario, rendering it completely flawless.

## ⚙️ How to Run Locally

Since this is a client-side web application, you do not need to install any heavy frameworks or node modules. 

1. **Clone the repository:**
   ```bash
   git clone **[https://github.com/abhinavvv-hub/TicTacToe-AI.git](https://github.com/abhinavvv-hub/TicTacToe-AI.git)**
   cd TicTacToe-AI
   ```
2. File Structure Check: Ensure your local workspace contains your three primary assets matching the file paths:

```text
├── index.html
├── script.js
└── style.css
```
3. Launch the Game:
Simply double-click the index.html file to open it in any modern web browser, or serve it using a local developer environment extension like VS Code's Live Server.
