
export default class Casting {

    constructor(casting, actors, roles) {
        this.casting = casting;
        this.actors = actors;
        this.roles = roles;
    }

    isActorCast(actor) {
        let actorId = typeof actor == 'object' ? actor.id : actor;
        for (let roleId in this.casting) {
            if (this.casting[roleId] == actorId) return true;
        }
        return false;
    }

    isActorCastToRole(actor, role) {
        let actorId = typeof actor == 'object' ? actor.id : actor;
        let roleId = typeof role == 'object' ? role.id : role;
        return this.casting[roleId] == actorId;
    }

    isRoleFilled(role) {
        return this.casting.hasOwnProperty(role.id);
    }

    getActorCastToRole(role) {
        let roleId = typeof role == 'object' ? role.id : role;
        let actorId = this.casting[roleId];
        return actorId != null ? this.actors.find(actor => actor.id == actorId) : null;
    }

}