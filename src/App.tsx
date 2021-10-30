import React, { ChangeEvent, FormEvent, useState } from 'react'
import './App.scss'

interface Service {
  name: string
}

function App (): React.ReactElement {
  const [services, setServices] = useState<Service[]>([])
  const [serviceName, setServiceName] = useState<string>('')

  const onServiceNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setServiceName(event.target.value)
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const service: Service = {
      name: serviceName
    }
    setServices([...services, service])

    setServiceName('')
  }

  return (
    <div>
      <form id='new-service-form' onSubmit={onSubmit}>
        <input type='text' className='service-name' value={serviceName} onChange={onServiceNameChange} />
        <button type='submit'>Submit</button>
      </form>

      <h2>Services</h2>
      <ul>
        {
          services.map((service) => <li key={service.name}>{service.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App
