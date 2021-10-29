import React, {ChangeEvent, FormEvent, useState} from 'react'
import './App.scss'

function App(): React.ReactElement {
  const [serviceName, setServiceName] = useState<string | null>(null)
  const [displayService, setDisplayService] = useState<boolean>(false)

  const onServiceNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setServiceName(event.target.value)
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    setDisplayService(true)
  }

  return (
    <div>
      {
        displayService ? <h1>{serviceName}</h1> : <></>
      }

      <form id="new-service-form" onSubmit={onSubmit}>
        <input type="text" className="service-name" onChange={onServiceNameChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
