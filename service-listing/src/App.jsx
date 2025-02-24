import { useState } from 'react'
import Servicecard from './components/serviceCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Servicecard
         title="webDevelopment"
         description="building reponsive websites"
      />

      <Servicecard
         title="webDesigning"
         description="designin responsive websites"
      />
    </>
  )
}

export default App
