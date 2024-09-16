import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput/GuessInput'
import Guess from '../Guess/Guess'
import Banner from '../Banner/Banner'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import Keyboard from '../Keyboard/Keyboard'

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [checkedLetters, setCheckedLetters] = React.useState([])
  const [answer, setAnswer] = React.useState(sample(WORDS))

  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer })

  const hasWon =
    guesses.length <= NUM_OF_GUESSES_ALLOWED && guesses.includes(answer)
  const hasLost =
    guesses.length >= NUM_OF_GUESSES_ALLOWED && !guesses.includes(answer)

  const restart = () => {
    setGuesses([])
    setAnswer(sample(WORDS))
  }

  return (
    <>
      {(hasWon || hasLost) && (
        <Banner
          guesses={guesses}
          answer={answer}
          hasWon={hasWon}
          restart={restart}
        />
      )}
      <Guess
        guesses={guesses}
        answer={answer}
        checkedLetters={checkedLetters}
        setCheckedLetters={setCheckedLetters}
      />
      <GuessInput
        guesses={guesses}
        setGuesses={setGuesses}
        isGameOver={hasWon || hasLost}
      />
      <Keyboard guesses={guesses} answer={answer} />
    </>
  )
}

export default Game
