import React from 'react';
import './App.css';
import axios from 'axios'
import UserCard from './components/UserCard';

class App extends React.Component {
    state = {
      user: [],
    }
    
    componentDidMount() {
      axios
      .get('https://api.github.com/users/Randyo28')
      .then(res => {
        // console.log(res.data)
        this.setState({
          user: res.data
        })
        console.log('user', this.state.user)
      })
      .catch(err => {
        console.log(err)
      })
    }

  render(){
  return (
    <div className="container">
      <UserCard user={this.state.user}/>
    </div>
  );
  }
}

export default App;
