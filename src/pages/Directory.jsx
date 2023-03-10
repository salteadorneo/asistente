import { useEffect, useState } from 'react'
import Question from '../components/Question'

async function getQuestions ({ page = 0, size = 10 }) {
  return await fetch('/api/questions?' + new URLSearchParams({ page, size })).then(res => res.json())
}

export default function Directory () {
  const [loading, setLoading] = useState(true)

  const [questions, setQuestions] = useState([])

  const [page, setPage] = useState(0)

  useEffect(() => {
    setLoading(true)
    getQuestions({ page })
      .then(questions => {
        setQuestions(prev => (page === 0) ? questions : [...prev, ...questions])
        setLoading(false)
      })
  }, [page])

  return (
    <div className='relative px-6 lg:px-8 text-center mx-auto max-w-2xl py-16'>

      <h1 className='text-4xl font-bold tracking-tight sm:text-6xl'>
        El <span className='text-transparent bg-clip-text bg-gradient-to-br from-[#5F7FFF] to-[#566cc2]'>asistente virtual</span>
        <br />que nadie necesita
      </h1>

      <p className='my-6 text-lg leading-6'>
        Como ves, ninguno ha recibido una buena respuesta. ¿O sí?
      </p>

      {questions && (
        <div className='space-y-4'>
          {questions.map(({ id, question, answer }) => (
            <Question key={id} question={question} answer={answer} />
          ))}
        </div>
      )}

      {loading && <img src='/loader.svg' alt='' className='mx-auto invert dark:invert-0 mt-8' />}

      {!loading && (
        <button onClick={() => setPage(page + 1)} className='mt-8'>
          Cargar más
        </button>
      )}
    </div>
  )
}
