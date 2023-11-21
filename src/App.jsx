
import './App.css'
import Service from './Service'
import Profile from './Profile'

function App() {

  const name = "Devney"
  return (
    <>
      <h1> Hello World</h1>
      <p> Student at Purwadhika</p>
      <div style={{backgroundColor:"pink"}}>{name.toUpperCase()}</div>
      <Service name={name} />
      <Profile name="devney" email="devneyyputri@gmail.com" />
    </>
  )
}

export default App
