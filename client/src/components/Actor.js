import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import Avatar from './Avatar';

import './Actor.scss';

export default class Actor extends Component {

    render() {
        let { actor, isSelected, onSelected } = this.props;
        let classes = classNames('actor', { 'actor-is-selected': isSelected });
        return (
            <li className={classes} onClick={onSelected}>
                <Avatar src={actor.avatar} size="small" isSelected={isSelected} />
                <div className="name">{actor.name}</div>
            </li>
        );
    }

}

Actor.propTypes = {
    actor: PropTypes.object.isRequired,
    isCast: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onSelected: PropTypes.func.isRequired
};