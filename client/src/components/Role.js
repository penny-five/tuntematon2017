import React, { Component, PropTypes } from 'react';

import Avatar from './Avatar';

import './Role.scss';

export default class Role extends Component {

    render() {
        const {role, actor} = this.props;
        return (
            <div className="role">
                <Avatar src={actor ? actor.avatar : role.avatar} />
                <p>{actor ? `${actor.name} on` : 'Valitse näyttelijä rooliin'}</p>
                <p className="name">{role.name}</p>
            </div>
        );
    }

}

Role.propTypes = {
    role: PropTypes.object.isRequired,
    actor: PropTypes.object,
    onReset: PropTypes.func.isRequired
};