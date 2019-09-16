import {
    ADD_SERVER,
    VIEW_SERVERS,
    DELETE_SERVER
} from '../Constants/ActionTypes';
import _ from 'lodash'
 let init_state = {
    server: {}
};

export default function NewRoom(state=init_state, action){
    switch(action.type){
        case ADD_SERVER:
            return {...state,server: {...state.server, [action.payload.id]: action.payload}}
                     
        case VIEW_SERVERS: 
            return {
                ...state,
                server: _.mapKeys(action.payload,'id')
            }
        case DELETE_SERVER:
            return {
                ...state, server: _.omit(state.server, action.payload)
            }
        default:
            return {
                ...state

            }
    }
}