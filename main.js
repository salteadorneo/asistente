import './style.css'

const form = document.querySelector('form')
const output = document.querySelector('#output')

form.addEventListener('submit', (event) => {
  output.innerHTML = 'Haciéndome trabajar a estas horas, espera...'

  event.preventDefault()
  const formData = new FormData(event.target)
  const prompt = formData.get('prompt')

  askQuestion(prompt)
})

async function askQuestion (prompt) {
  const response = await fetch(`/api/chat?prompt=${prompt}`).then((res) => res.json())

  const { content } = response

  output.innerHTML = content
}
