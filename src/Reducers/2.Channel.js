import {
    VIEW_CHANNELS
}from '../Constants/ActionTypes'
import _ from 'lodash'
let init_state ={
    channel: {}
};

export default function NewChannel (state=init_state, action){
    switch(action.type){
        case VIEW_CHANNELS:
            return{
                ...state,
                channel: _.mapKeys(action.payload, 'id')
            }
        default:
            return{
                ...state
            }
    }
}