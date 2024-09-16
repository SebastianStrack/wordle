import React from 'react'

function GuessInput(props) {
  const { guesses, setGuesses, isGameOver } = props

  const [value, setValue] = React.useState('')

  const onSubmit = event => {
    event.preventDefault()

    setGuesses([...guesses, value])
    setValue('')
  }

  return (
    <form className='guess-input-wrapper' onSubmit={event => onSubmit(event)}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        value={value}
        pattern='[A-Za-z]{5}'
        disabled={isGameOver}
        onChange={event => setValue(event.target.value.toUpperCase())}
      />
    </form>
  )
}

export default GuessInput
