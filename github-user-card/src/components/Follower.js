import React, { Component } from 'react';

class Follower extends Component {
    render() {

        const { follower } = this.props;

        return (
            <div className="user-container">
                <h1>{follower.login}</h1>
                    <img className="user-image" src={follower.avatar_url} alt="Randy" />
                    <h2>Id: {follower.id}</h2>
                    <h2>Bio: {follower.bio ? follower.bio : 'N/A'}</h2>
                    <h2>Follower: {follower.followers ? follower.followers : 'N/A'}</h2>
                    <h2>Following: {follower.following ? follower.following : 'N/A'}</h2>
                    <h2>Twitter: {follower.twitter_followername ? follower.twitter_followername : 'N/A'}</h2>
                    <h2>Location: {follower.location ? follower.location : 'N/A'}</h2>
            </div>
        );
    }
}

export default Follower;