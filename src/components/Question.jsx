import ShareButton from './ShareButton'

export default function Question ({ question, answer }) {
  return (
    <div className='w-full text-left dark:bg-gray-100 shadow-md bg-gray-10 rounded p-6 flex flex-col gap-4 justify-between leading-tight'>
      <div>
        <p class='text-gray-300 dark:text-gray-700 text-xs'>Pregunta</p>
        <p className='text-black font-bold'>
          {question}
        </p>
      </div>
      <div>
        <p class='text-gray-300 dark:text-gray-700 text-xs'>Respuesta</p>
        <p class='dark:text-black'>
          {answer}
        </p>
      </div>
      <p className='dark:text-black'>
        <ShareButton question={question} answer={answer} />
      </p>
    </div>
  )
}
