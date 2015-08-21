import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import Avatar from './Avatar';

import './Actor.scss';

export default class Actor extends Component {

    render() {
        let { actor, isEnabled, isSelected, onSelected } = this.props;
        let classes = classNames('actor', { 'actor-is-selected': isEnabled && isSelected });
        return (
            <li className={classes}>
                <Avatar
                    src={actor.avatar}
                    size="small"
                    isSelected={isEnabled && isSelected}
                    isEnabled={isEnabled}
                    onClick={onSelected} />
                <div className="name">{actor.name}</div>
            </li>
        );
    }

}

Actor.propTypes = {
    actor: PropTypes.object.isRequired,
    isEnabled: PropTypes.bool,
    isSelected: PropTypes.bool,
    onSelected: PropTypes.func.isRequired
};

Actor.defaultProps = {
    isEnabled: true,
    isSelected: false
};