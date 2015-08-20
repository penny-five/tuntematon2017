import * as actions from '../actions/actions';

const defaultState = {

    actors: [
        { id: '1', name: 'Kari Hietalahti', avatar: 'http://i.imgur.com/g5Yr35z.png', description: 'Näyttelijä' },
        { id: '2', name: 'Vesku Loiri', avatar: 'http://i.imgur.com/g5Yr35z.png', description: 'Näyttelijä' },
        { id: '3', name: 'Bull Mentula', avatar: 'http://i.imgur.com/g5Yr35z.png', description: 'Härkäläinen' },
        { id: '4', name: 'Mikko Leppilampi', avatar: 'http://i.imgur.com/g5Yr35z.png', description: 'Näyttelijä' },
        { id: '5', name: 'Jasper Pääkkönen', avatar: 'http://i.imgur.com/g5Yr35z.png', description: 'Näyttelijä' },
        { id: '6', name: 'Riku Nieminen', avatar: 'http://i.imgur.com/g5Yr35z.png', description: 'Näyttelijä' },
        { id: '7', name: 'Mikko Kouki', avatar: 'http://i.imgur.com/g5Yr35z.png', description: 'Näyttelijä' }
    ],

    roles: [
        { id: '1', name: 'Alikersantti Rokka', avatar: 'http://i.imgur.com/XOrObOQ.png' },
        { id: '2', name: 'Vänrikki Koskela', avatar: 'http://i.imgur.com/XOrObOQ.png' },
        { id: '3', name: 'Alikersantti Lehto', avatar: 'http://i.imgur.com/XOrObOQ.png' },
        { id: '4', name: 'Kapteeni Kariluoto', avatar: 'http://i.imgur.com/XOrObOQ.png' }
    ],

    casting: {

    },

    activeRoleIndex: 0
};

export default function(state = defaultState, action) {

    switch(action.type) {

    case actions.CAST_ROLE: {
        return {
            ...state,
            casting: {
                ...state.casting,
                [action.roleId]: action.actorId
            }
        };
    }

    case actions.CONFIRM_ROLE: {
        return {
            ...state,
            activeRoleIndex: state.activeRoleIndex + 1
        };
    }

    case actions.RESET_ROLE: {
        let casting = { ...state.casting };
        delete casting[action.roleId];
        return {
            ...state,
            casting
        };
    }

    default:
        return state;
    }
}
