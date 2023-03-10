import ShareButton from './ShareButton'

export default function Question ({ question, answer }) {
  return (
    <div className='w-full text-left'>
      <div className='shadow-md bg-gray-10 rounded p-6 flex flex-col gap-4 justify-between leading-tight'>
        <div>
          <p class='text-gray-300 text-xs'>Pregunta</p>
          <p className='text-gray-800 font-bold'>
            {question}
          </p>
        </div>
        <div>
          <p class='text-gray-300 text-xs'>Respuesta</p>
          <p>
            {answer}
          </p>
        </div>
        <ShareButton question={question} answer={answer} />
      </div>
    </div>
  )
}
