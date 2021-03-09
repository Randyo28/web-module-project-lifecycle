import React, { Component } from 'react';

class UserCard extends Component {
    render() {

        const { user } = this.props;

        return (
            <div>
                <h2>{user.name}</h2>
            </div>
        );
    }
}

export default UserCard;