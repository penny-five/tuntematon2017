import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import './App.scss';

import ActorList from './components/ActorList';
import Role from './components/Role';
import BorderlessButton from './components/BorderlessButton';

import Casting from './utils/Casting';

import { castRole, resetRole, confirmRole } from './actions/creators';

class App extends Component {

    render() {
        let { actors, roles, activeRoleIndex } = this.props;
        if (activeRoleIndex == roles.length) {
            return (
                <div>Roolitus: suoritettu</div>
            );
        }
        let casting = new Casting(this.props.casting, actors, roles);
        let activeRole = roles[activeRoleIndex];
        let activeRoleActor = casting.getActorCastToRole(activeRole);
        return (
            <div className="content">
                <BorderlessButton style={{right: 0}} visible={activeRoleActor != null} text="Seuraava" onClick={() => this.confirmRole()} />
                <h2>Valitse rooli {activeRoleIndex + 1} / {this.props.roles.length}</h2>
                {this.renderRole(activeRole, activeRoleActor)}
                {this.renderActorList(actors, activeRole, casting)}
            </div>
        );
    }

    renderRole(role, actor) {
        return (
            <Role
                role={role}
                actor={actor}
                onReset={() => this.resetRole(role.id)} />
        );
    }

    renderActorList(actors, activeRole, casting) {
        return (
            <ActorList
                actors={actors}
                activeRole={activeRole}
                casting={casting}
                onActorSelected={actorId => this.castActor(actorId)} />
        );
    }

    castActor(actorId) {
        let activeRole = this.props.roles[this.props.activeRoleIndex];
        this.props.dispatch(castRole(activeRole.id, actorId));
    }

    resetRole(roleId) {
        this.props.dispatch(resetRole(roleId));
    }

    confirmRole() {
        this.props.dispatch(confirmRole());
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default connect(state => state.tuntematon)(App);