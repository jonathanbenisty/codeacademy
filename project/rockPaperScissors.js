// Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

// The possible outcomes are:

// Rock destroys scissors.
// Scissors cut paper.
// Paper covers rock.
// If there’s a tie, then the game ends in a draw.
// Our code will break the game into four parts:

// Get the user’s choice.
// Get the computer’s choice.
// Compare the two choices and determine a winner.
// Start the program and display the results.

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('wrong, you have to choose between rock, paper, scissors');
    }
  };
  
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
      return 'rock';
      break;
      case 1:
      return 'paper';
      break;
      case 2:
      return 'scissors';
      break;
    };
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'The gamse was tie, play again'
    }
    
    if (computerChoice === 'paper') {
      if (userChoice === 'rock') {
        return 'computer won';
      } else {
        return 'you won!';
      }
    }
      
  if (computerChoice === 'scissors') {
    if (userChoice === 'paper') {
      return 'computer won';
    } else {
      return 'you won!'
    }
  }
  
  if (computerChoice === 'rock') {
    if (userChoice === 'scissors') {
      return 'computer won';
    } else {
      return 'you won!';
    }
  }
  
  if (userChoice == 'bomb') {
    return 'congratulation, you are the best';
  }
  };
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
     console.log('You threw: ' + userChoice);
     console.log('The computer threw:' + computerChoice);
  
     console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();