import React from 'react'
import { checkGuess } from '../../game-helpers'

function Keyboard(props) {
  const { guesses, answer } = props

  const letterRows = ['qwertzuiop', 'asdfghjkl', 'yxcvbnm']

  let checkedGuesses = []
  guesses.forEach(guess => checkedGuesses.push(...checkGuess(guess, answer)))

  return (
    <div className='keyboard'>
      {letterRows.map((row, index) => (
        <div className='keyboard-row' key={`row-${index}`}>
          {row.split('').map(letter => {
            const upperLetter = letter.toUpperCase()
            const checkedLetter =
              checkedGuesses.length > 0
                ? checkedGuesses.findLast(
                    letter => letter.letter === upperLetter
                  )
                : null

            return (
              <div
                className={`keyboard-letter${
                  checkedLetter ? ` ${checkedLetter.status}` : ''
                }`}
                key={upperLetter}
              >
                {upperLetter}
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default Keyboard
