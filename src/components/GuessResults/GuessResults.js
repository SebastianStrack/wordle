import React from 'react'

function GuessResults(props) {
  const { guesses } = props

  return (
    <div className='guess-results'>
      {guesses.map((guess, index) => (
        <p key={`${guess}-${index}`} className='guess'>
          {guess}
        </p>
      ))}
    </div>
  )
}

export default GuessResults
