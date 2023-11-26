import {Component} from 'react'
import UserTable from './component/UserTable'

import './App.css'

class App extends Component {
  state = {
    userDetails: [],
  }

  componentDidMount = async () => {
    const url = 'http://localhost:3000/v1/users'
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      this.setState({userDetails: data})
    } else {
      console.log(response.error)
    }
  }

  render() {
    const {userDetails} = this.state
    return (
      <>
        <div className="App">
          <h1 className="heading">MERN Stack App</h1>
          <UserTable key={userDetails.id} details={userDetails} />
        </div>
      </>
    )
  }
}

export default App
