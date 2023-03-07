# ❌ ⭕️ Tic Tac Toe

This is a web game for two players on one device, taking turns. You will have to use component state to keep track of whose turn it is and which squares have been marked by each player. This project will challenge your knowledge of React but should also be an exercise in creating good user experiences.

When creating a project it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code. The square UI will be in its own component. App.js controls of all the data in state, renders the other components, and performs the game logic.

### 📚 User Stories

- As a user, I can see a three by three grid game board on the page.
    - Use .map over the gameboard state to render the boxes
    - Use App.css settings to force the gameboard division to render in a 3x3
- As a user, I can click on a square to mark it.
    - Created a function to process clicks
    - Pass function in component call to square
    - Call function with Onclick in square component
- As a user, my partner can click on a square after me and see their mark.
    - Create a state to track current player
    - Display state in Header
    - When click is processed, update game state to register click and render in square
    - Change player after click
- As a user, I can't click on a square that has already been marked.
    - If square is null processClick 
- As a user, when either my partner or I win the game (three squares in a row: horizontally, vertically, or diagonally) I can see a notice telling me which player won.
    - Create a check to see if win conditions are fulfilled
    - Create notification when win conditions are fulfilled
    - Create a score state to track wins
    - Update score state with winner
- As a user, I can't continue playing the game after the game has been won.
     - Create state to track the game status
- As a user, if there are no more squares available, I can see a notice telling me that the game has ended.
    - Create an alert when all squares have been filled with no winner.
    - Update scoreboard to include ties
- As a user, I can click on a restart button that will clear the game board.
    -Create a reset button to clear the board
### 🏔 Stretch Goals

- As a user, I can see a pleasant stylings on the application.
- As a user, I can see a notification that informs me whether it is currently my partner or my turn.
- As a user, I can choose my marker from a predetermined list (X, O, a color, an emoji, etc...).
- As a user, I receive a notification if no moves have been made after a while

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).

### 🛠 Resources

- [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [Tic Tac Toe win condition in React](https://forum.freecodecamp.org/t/need-help-understanding-react-tic-tac-toe-winner-function/137840)

### Planning notes

Structure
-App.js
* States
--Gameboard (array)
--Current Player (string)
--Game Active (Boolean)
* Functions
--Reset
--New Click
    Consider whether the click is allowed
    Do nothing if the square is filled
    Consider win conditions
        Wins:
            0, 1, 2
            3, 4, 5
            6, 7, 8
            0, 4, 8
            6, 4, 2
            0, 3, 6
            1, 4, 7
            2, 5, 8
    If all the boxes are filled, no win => Tie
* Render
--Header
    Title
    Current Player
    Reset Button
    Scoreboard
        X Wins: 
        O Wins:
        Ties:
--Body
    Gamebox (class)
        9x Square.js
--Footer
    Credit line