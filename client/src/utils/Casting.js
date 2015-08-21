
export default class Casting {

    constructor(casting, actors, roles) {
        this.casting = casting;
        this.actors = actors;
        this.roles = roles;
    }

    isActorCast(actor) {
        let actorId = typeof actor == 'object' ? actor.id : actor;
        return Object.values(this.casting).indexOf(actorId) > -1;
    }

    isActorCastToRole(actor, role) {
        const actorId = typeof actor == 'object' ? actor.id : actor;
        const roleId = typeof role == 'object' ? role.id : role;
        return this.casting[roleId] == actorId;
    }

    isRoleFilled(role) {
        return this.casting.hasOwnProperty(role.id);
    }

    getActorCastToRole(role) {
        const roleId = typeof role == 'object' ? role.id : role;
        const actorId = this.casting[roleId];
        return actorId != null ? this.actors.find(actor => actor.id == actorId) : null;
    }
}