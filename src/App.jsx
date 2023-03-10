import { Route } from 'wouter'

import Directory from './pages/Directory'
import Github from './components/Github'
import Assistant from './pages/Assistant'

function App () {
  return (
    <>
      <Route path='/' component={Assistant} />
      <Route path='/directorio' component={Directory} />

      <Github />
    </>
  )
}

export default App
