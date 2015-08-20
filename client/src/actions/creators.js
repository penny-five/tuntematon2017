import * as actions from './actions';

export function castRole(roleId, actorId) {
    return {
        type: actions.CAST_ROLE,
        roleId,
        actorId
    };
}

export function resetRole(roleId) {
    return {
        type: actions.RESET_ROLE,
        roleId
    };
}

export function confirmRole() {
    return {
        type: actions.CONFIRM_ROLE
    };
}