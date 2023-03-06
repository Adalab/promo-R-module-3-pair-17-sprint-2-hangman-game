import LetterList from './LetterList'

const ListOfSuccesfulLetters = ({ letters, word }) => {
  const wordLetters = word.split('')

  return wordLetters.map((letter, index) => {
    const exists = letters.includes(letter.toLocaleLowerCase())
    return (
      <li key={ index } className='letter'>
        { exists ? letter : '' }
      </li>
    )
  })
}

const SuccessfulLetterList = ({ letters, word }) => (
  <div className='solution'>
    <h2 className='title'>Solución:</h2>
    <LetterList>
      <ListOfSuccesfulLetters
        letters={ letters }
        word={ word }
      />
    </LetterList>
  </div>
)

export default SuccessfulLetterList
