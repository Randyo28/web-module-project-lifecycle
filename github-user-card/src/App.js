import React from 'react';
import './App.css';
import axios from 'axios'
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';

class App extends React.Component {
    state = {
      user: [],
      followers: []
    }
    
    componentDidMount() {
      axios
      .all([
        axios.get('https://api.github.com/users/Randyo28'),
        axios.get('https://api.github.com/users/Randyo28/followers')
      ])
      .then(
        axios.spread((user, followers) => {
          console.log(user.data, followers.data)
          this.setState({
            user: user.data,
            followers: followers.data
          })
        })
      )
      .catch(err => {
        console.log(err)
      })
    }

  render(){
  return (
    <div className="container">
      <UserCard user={this.state.user}/>
      <FollowerCard followers={this.state.followers} />
    </div>
  );
  }
}

export default App;
