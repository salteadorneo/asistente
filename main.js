const form = document.querySelector('#input-form')
const input = form.querySelector('input')
const output = document.querySelector('#output')

const buttons = document.querySelector('#buttons')
const shareButton = document.querySelector('#share')
const resetButton = document.querySelector('#reset')
resetButton.addEventListener('click', reset)

const prompt = window.localStorage.getItem('prompt') || ''
input.value = prompt

const content = window.localStorage.getItem('content') || ''
if (content) {
  output.innerHTML = content
  buttons.classList.remove('hidden')
}

form.addEventListener('submit', (event) => {
  output.innerHTML = '<img src="/loader.svg" alt="" class="mx-auto" />'
  buttons.classList.add('hidden')

  event.preventDefault()
  const formData = new FormData(event.target)
  const prompt = formData.get('prompt')

  window.localStorage.setItem('prompt', prompt)

  askQuestion(prompt)
})

async function askQuestion (prompt) {
  const response = await fetch(`/api/chat?prompt=${prompt}`).then((res) => res.json())

  const { content } = response

  const contentTrim = content.trim()

  window.localStorage.setItem('content', contentTrim)

  output.innerHTML = contentTrim

  buttons.classList.remove('hidden')
}

shareButton.addEventListener('click', () => {
  const prompt = window.localStorage.getItem('prompt')
  const content = window.localStorage.getItem('content')
  navigator.share({
    title: 'asistente.lol',
    text: `${prompt}\n\n${content}\n`,
    url: window.location.href
  })
})

function reset () {
  window.localStorage.removeItem('prompt')
  window.localStorage.removeItem('content')

  output.innerHTML = ''
  buttons.classList.add('hidden')

  input.value = ''
  input.focus()
}
