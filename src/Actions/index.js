import {
    ADD_SERVER,
    VIEW_SERVERS,
    ADD_CHANNEL,
    VIEW_CHANNELS,
    ADD_CATEGORY,
    VIEW_CATEGORIES,
    ADD_MESSAGE,
    VIEW_MESSAGES,
    DELETE_SERVER

} from '../Constants/ActionTypes'
import ChatFectching from '../API/API'

//Serever Part
export const DisplayServer = () => async dispatch => {
    const response = await ChatFectching.get('/servers/');
    dispatch({
        type: VIEW_SERVERS,
        payload: response.data
    })
}
export const AddServer = (ServerName) => async dispatch =>{
    const response = await ChatFectching.post('/servers/', ServerName);
    dispatch({
        type: ADD_SERVER,
        payload: response.data
    })
}
export const DeleteServer = (id) => async dispatch =>{
    await ChatFectching.delete(`/servers/${id}`);
    dispatch({
        type: DELETE_SERVER,
        payload: id
    })
}


//Channel Part
export const AddChannel = (ChannelName) => ({
    type: ADD_CHANNEL,
    payload: {
        Channel: ChannelName
    }
})
export const ViewChannels = () => async dispatch =>{
    const response = await ChatFectching.get('/channels/');
    dispatch({
        type: VIEW_CHANNELS,
        payload: response.data
    })
}

//Categories Part
export const AddCategory = (CategoryName) => ({
    type: ADD_CATEGORY,
    payload: {
        Categorie: CategoryName,
    }
})
export const ViewCategories = (CategoryNames) => ({
    type: VIEW_CATEGORIES,
    payload: {
        Categorie: CategoryNames,
    }
})

//Message part
export const AddMessage = (message) => ({
    type: ADD_MESSAGE,
    payload: {
        msg: message
    }
})
export const ViewMessages = (messages) => ({
    type: VIEW_MESSAGES,
    payload: {
        msg: messages
    }
})

//Server Trial  
// export const NewServer = (ServerName) => ({
//     type: ADD_SERVER,
//     payload: {
//         Server: ServerName
//     }
// })
// export function AddServer(server){
//     return(dispatch)=> {
//         return axios.post('http://1ddd1efa.ngrok.io/servers', server).then((Response)=>{
//             dispatch(NewServer(Response.data))
//         })
//     }
// }