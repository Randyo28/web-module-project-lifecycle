import React, { Component } from 'react';

class UserCard extends Component {
    render() {

        const { user } = this.props;

        return (
            <>
            <div className="user-container">
                <h1>{user.name}</h1>
                <img className="user-image" src={user.avatar_url} alt="Randy" />
                <h2>id: {user.id}</h2>
                <h2>Bio: {user.bio}</h2>
                <h2>followers: {user.followers}</h2>
                <h2>following: {user.following}</h2>
                <h2>Twitter: {user.twitter_username}</h2>
                <h2>Location: {user.location}</h2>
                <div className="github-chart">
                    <h2>GitHub-Contribution</h2>
                    <img src="http://ghchart.rshah.org/Randyo28" alt="Randyo28's Github chart" />
                </div>
            </div>
            </>
        );
    }
}

export default UserCard;