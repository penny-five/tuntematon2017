import React, { PropTypes } from 'react';

import Actor from './Actor';
import Casting from '../utils/Casting';

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
        let isCastToActiveRole = casting.isActorCastToRole(actor, activeRole);
        let isCastToAnotherRole = !isCastToActiveRole && casting.isActorCast(actor); 

        return (
            <Actor
                key={actor.id}
                actor={actor}
                isEnabled={!isCastToAnotherRole}
                isSelected={isCastToActiveRole}
                onSelected={() => onActorSelected(actor.id)} />
        );
    }

}

ActorList.propTypes = {
    actors: PropTypes.arrayOf(PropTypes.object).isRequired,
    casting: PropTypes.object.isRequired,
    activeRole: PropTypes.object.isRequired,
    onActorSelected: PropTypes.func.isRequired
};