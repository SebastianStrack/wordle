import React from 'react'

function Banner(props) {
  const { guesses, answer, hasWon, restart } = props

  return (
    <div className={`${hasWon ? 'happy' : 'sad'} banner`}>
      <div>
        {hasWon ? (
          <>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>{guesses.length} guesses</strong>.
          </>
        ) : (
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        )}
      </div>
      <button onClick={() => restart()}>Restart</button>
    </div>
  )
}

export default Banner
