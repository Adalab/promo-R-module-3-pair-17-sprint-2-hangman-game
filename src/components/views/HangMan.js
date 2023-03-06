import { useEffect, useState, useMemo } from 'react'

import Header from '../shared/header/Header'
import Footer from '../shared/footer/Footer'
import Dummy from '../game/dummy/Dummy'
import SuccessfulLetterList from '../game/letters/SuccessfulLetterList'
import FailedLetterList, { getFailedLetters } from '../game/letters/FailedLetterList'
import Form from '../game/form/Form'
import getWordFromApi from '../../services/api'

const HangMan = () => {
  const [word, setWord] = useState('')
  const [letters, setLetters] = useState([])
  const [lastLetter, setLastLetter] = useState('')

  useEffect(() => {
    async function getWord () {
      const word = await getWordFromApi()
      setWord(word)
    }
    getWord()
  }, [])

  const numberOfFailedLetters = useMemo(() => {
    const failedLetters = getFailedLetters(letters, word)
    return failedLetters.length
  }, [letters, word])

  const handleKeyDown = (event) => {
    event.target.setSelectionRange(0, 1)
  };

  const handleChange = (event) => {
    let regex = /^[a-zA-ZñÑá-úÁ-Ú´]$/
    if (regex.test(event.target.value) || event.target.value === '') {
      handleLastLetter(event.target.value)
    }
  }

  const handleLastLetter = (value) => {
    const parsedValue = value.toLocaleLowerCase()
    setLastLetter(parsedValue)

    if (!letters.includes(parsedValue)) {
      letters.push(parsedValue)
      setLetters([...letters])
    }
  }

  return (
    <div className='page'>
      <Header>Juego del ahorcado</Header>

      <main className='main'>
        <section>

          <SuccessfulLetterList
            word={ word }
            letters={ letters }
          />

          <FailedLetterList
            word={ word }
            letters={ letters }
          />

          <Form
            lastLetter={ lastLetter }
            handleKeyDown={ handleKeyDown }
            handleChange={ handleChange }
          />

        </section>
        <Dummy numberOfFailedLetters={ numberOfFailedLetters } />

      </main>

      <Footer />
    </div>
  )
}

export default HangMan
