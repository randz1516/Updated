import {
    VIEW_CHANNELS,
    ADD_CHANNEL,
    DELETE_CHANNEL
}from '../Constants/ActionTypes'
import _ from 'lodash'
let init_state ={
    channel: {},
    currentId: null,
    currentServer: null,
};

export default function NewChannel (state=init_state, action){
    switch(action.type){
        case VIEW_CHANNELS:
            return{
                ...state,
                channel: _.mapKeys(action.payload.data, 'id'),
                currentId: action.payload.selectedId,
            }
        case ADD_CHANNEL:
            return{
                ...state, channel: {...state.channel, [action.payload.id]: action.payload}
            }
        case DELETE_CHANNEL:
            return{
                ...state, channel: _.omit(state.channel, action.payload)
            }
        default:
            return{
                ...state
            }
    }
}