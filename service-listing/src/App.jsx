import { useState } from 'react'
import ServiceCard from './components/serviceCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ServiceCard
         title="webDevelopment"
         description="building reponsive websites"
      />

      <ServiceCard
         title="webDesigning"
         description="designin responsive websites"
      />
    </>
  )
}

export default App
