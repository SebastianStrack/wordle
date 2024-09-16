import React from 'react'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function Guess(props) {
  const { guesses, answer } = props

  return (
    <div className='guess-results'>
      {range(0, NUM_OF_GUESSES_ALLOWED).map(rowIndex => {
        const checkedGuess = checkGuess(guesses[rowIndex], answer)

        return (
          <p className='guess' key={`row-${rowIndex}`}>
            {range(0, 5).map(letterIndex => {
              const checkedLetter = checkedGuess
                ? checkedGuess[letterIndex] || ''
                : ''

              return (
                <span
                  className={`cell${
                    checkedLetter && ` ${checkedLetter.status}`
                  }`}
                  key={`row-${rowIndex}-${letterIndex}`}
                >
                  {checkedLetter.letter}
                </span>
              )
            })}
          </p>
        )
      })}
    </div>
  )
}

export default Guess
