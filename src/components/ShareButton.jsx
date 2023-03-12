import IconShare from './icons/IconShare'

export default function ShareButton ({ question, answer }) {
  function handleShare () {
    if (navigator.share) {
      navigator.share({
        title: 'Un asistente virtual que no necesitas',
        text: `${question}\n\n${answer}\n`,
        url: 'https://asistente.lol'
      })
    }
  }

  return (
    <button onClick={handleShare} className='flex items-center gap-2 hover:underline'>
      <IconShare />
      Compartir
    </button>
  )
}
