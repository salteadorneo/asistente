import { useEffect, useRef, useState } from 'react'
import IconQuestion from '../components/icons/IconQuestion'
import IconReload from '../components/icons/IconReload'
import IconShare from '../components/icons/IconShare'

export default function Assistant () {
  const inputPrompt = useRef(null)

  const [loading, setLoading] = useState(false)

  const [prompt, setPrompt] = useState(window.localStorage.getItem('prompt') || '')
  const [answer, setAnswer] = useState(window.localStorage.getItem('content') || '')

  useEffect(() => {
    if (inputPrompt.current && !prompt) {
      inputPrompt.current.focus()
    }
  }, [inputPrompt])

  async function handleSubmit (ev) {
    ev.preventDefault()
    setLoading(true)

    if (!prompt) {
      setLoading(false)
      return
    }

    const { content } = await fetch(`/api/chat?prompt=${prompt}`).then((res) => res.json())

    if (!content) {
      setLoading(false)
      return
    }

    const contentTrim = content.trim()

    window.localStorage.setItem('prompt', prompt)
    window.localStorage.setItem('content', contentTrim)

    setAnswer(contentTrim)
    setLoading(false)
  }

  function handleShare () {
    if (navigator.share) {
      navigator.share({
        title: 'Un asistente virtual que no necesitas',
        text: `${prompt}\n\n${answer}\n`,
        url: 'https://asistente.lol'
      })
    }
  }

  function handleReset () {
    setPrompt('')
    setAnswer('')

    inputPrompt.current.focus()

    window.localStorage.removeItem('prompt')
    window.localStorage.removeItem('content')
  }

  return (
    <div className='relative px-6 lg:px-8'>
      <div className='mx-auto max-w-2xl py-16'>
        <div className='text-center'>
          <p className='mb-2 text-md sm:text-lg leading-8'>
            ¿Tienes una pregunta? ¿Quieres saber algo?
          </p>
          <h1 className='text-4xl font-bold tracking-tight sm:text-6xl'>
            Un <span className='text-transparent bg-clip-text bg-gradient-to-br from-[#5F7FFF] to-[#566cc2]'>asistente virtual</span>
            <br />que no necesitas
          </h1>
          <p className='mt-6 text-lg leading-8'>
            Puede que no te responda, pero inténtalo.
          </p>
          <form id='input-form' className='my-8' onSubmit={handleSubmit}>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none dark:text-gray-600'>
                <IconQuestion />
              </div>
              <input
                ref={inputPrompt}
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                type='search'
                className='block w-full p-4 pl-12 md:pr-28 text-md text-gray-900 outline-none border border-gray-300 rounded-lg bg-gray-50 focus:border-[#5F7FFF] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-[#5F7FFF]'
                placeholder='¿Qué es un balón?'
                required
              />
              <button
                type='submit'
                className='hidden md:block text-white absolute right-2.5 bottom-3 bg-[#5F7FFF] hover:bg-[#566cc2] transition-all focus:outline-none font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#5F7FFF] dark:hover:bg-[#566cc2]'
              >
                Preguntar
              </button>
            </div>
          </form>
          {loading && <img src='/loader.svg' alt='' class='mx-auto invert dark:invert-0' />}
          {!loading && answer && (
            <>
              <p className='text-center text-lg'>
                {answer}
              </p>
              <div className='flex justify-center gap-4 mt-4 pb-14'>
                <button onClick={handleShare} className='flex items-center gap-2 hover:underline'>
                  <IconShare />
                  Compartir
                </button>
                <button onClick={handleReset} className='flex items-center gap-2 hover:underline'>
                  <IconReload />
                  Hacer otra pregunta
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
