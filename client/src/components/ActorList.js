import React, { Component, PropTypes } from 'react';

import Actor from './Actor';

import './ActorList.scss';

export default class ActorList {

    render() {
        return (
            <ol className="actor-list">
                {this.props.actors.map(actor => this.renderActor(actor)) }
            </ol>
        );
    }

    renderActor(actor) {
        let { casting, activeRole, onActorSelected } = this.props;
        let isCast = casting.isActorCast(actor);
        let isCastToActiveRole = casting.isActorCastToRole(actor, activeRole);
        return (
            <Actor
                key={actor.id}
                actor={actor}
                isCast={isCast}
                isSelected={isCastToActiveRole}
                onSelected={() => onActorSelected(actor.id)} />
        );
    }

}

ActorList.propTypes = {
    actors: PropTypes.array.isRequired,
    casting: PropTypes.object.isRequired,
    activeRole: PropTypes.object.isRequired,
    onActorSelected: PropTypes.func.isRequired
};