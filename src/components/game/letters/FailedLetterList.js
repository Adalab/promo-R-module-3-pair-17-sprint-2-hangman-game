import LetterList from './LetterList'

const getFailedLetters = (letters, word) =>
  letters.filter((letter) => {
    const wordParsed = word.toLocaleLowerCase()
    const letterParsed = letter.toLocaleLowerCase()
    return !wordParsed.includes(letterParsed)
  })

const ListOfFailedLetters = ({ letters, word }) => {
  const failedLetters = getFailedLetters(letters, word)

  return (
    <LetterList>
      { failedLetters.map((letter, index) => (
          <li key={ index } className='letter'>
            { letter }
          </li>
      ))}
    </LetterList>
  )
}

const FailedLetters = ({ letters, word }) => (
  <div className='error'>
    <h2 className='title'>Letras falladas:</h2>
      <ListOfFailedLetters
        letters={ letters }
        word={ word }
      />
  </div>
)

export default FailedLetters

export {
  getFailedLetters,
}
