import{
    VIEW_MESSAGES,
    ADD_MESSAGE,
    DELETE_MESSAGE
} from '../Constants/ActionTypes'
import _ from 'lodash'
let init_state={
    message: {},
    currentId: null
}

export default function NewMessage(state=init_state, action){
    switch(action.type){
        case VIEW_MESSAGES:
            return{
                ...state,
                message: _.mapKeys(action.payload.data, 'id'),
                currentId: action.payload.selectedId
            }
        case ADD_MESSAGE:
            return{
                ...state, message: {...state.message, [action.payload.id]: action.payload}
            }
        case DELETE_MESSAGE:
            return{
                ...state, message: _.omit(state.message, action.payload)
            }
        default:
            return{
                ...state
            }
    }
}