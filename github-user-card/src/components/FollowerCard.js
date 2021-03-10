import React, { Component } from 'react';
import Follower from './Follower';

class FollowerCard extends Component {
    render() {

        const { followers } = this.props;

        return (
            <>
            <h1 className="h1Follower"> Randy's Followers</h1>
                {followers.map(follower => {
                    return (
                        <Follower follower={follower} key={follower.id}/>
                        )
                    })}
             </>
        );
    }
}

export default FollowerCard;