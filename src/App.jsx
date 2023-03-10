import { Link, Route } from 'wouter'

import Assistant from './pages/Assistant'
import Directory from './pages/Directory'
import Github from './components/Github'

function App () {
  return (
    <>
      <header className='fixed top-0 z-10 w-full flex justify-end p-4'>
        <nav className='flex items-center gap-4 text-sm'>
          <Link href='/'>Inicio</Link>
          <Link href='/directorio'>Directorio</Link>
        </nav>
      </header>

      <Route path='/' component={Assistant} />
      <Route path='/directorio' component={Directory} />

      <Github />
    </>
  )
}

export default App
