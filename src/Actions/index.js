import {
    ADD_SERVER,
    VIEW_SERVERS,
    ADD_CHANNEL,
    VIEW_CHANNELS,
    // ADD_CATEGORY,
    // VIEW_CATEGORIES,
    ADD_MESSAGE,
    VIEW_MESSAGES,
    DELETE_SERVER,
    DELETE_CHANNEL,
    DELETE_MESSAGE
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
export const AddChannel = (id, channel) => async dispatch =>{
    const response = await ChatFectching.post (`/servers/${id}/channels/`,channel);
    dispatch({
        type: ADD_CHANNEL,
        payload: response.data
    })
}
export const ViewChannels = (id) => async dispatch =>{
    // pick = isClicked =>{
    //     this.setState({
    //         color: isClicked ? "green" : "null"
    //     })
    // }

    const response = await ChatFectching.get(`/servers/${id}/channels`);
    dispatch({
        type: VIEW_CHANNELS,
        payload: {
            data: response.data,
            selectedId: id,
        }
    })
}
export const DeleteChannel = (id) => async dispatch =>{
    await ChatFectching.delete(`/servers/${id}/channels/${id}`);
    dispatch({
        type: DELETE_CHANNEL,
        payload: id
    })
}

//Message part
export const ViewMessages = (id) => async dispatch =>{
    const response = await ChatFectching.get(`/channels/${id}/messages/`)
    dispatch({
        type:VIEW_MESSAGES,
        payload: {
            data: response.data,
            selectedId: id,
        }
    })
}
export const AddMessage = (id, message) => async dispatch =>{
    const response = await ChatFectching.post(`/channels/${id}/messages`, message);
    dispatch({
        type:ADD_MESSAGE,
        payload: response.data
    })
}
export const DeleteMessage = (id) => async dispatch => {
    const response = await ChatFectching.delete(`/channels/${id}messages/${id}`)
    dispatch({
        type: DELETE_MESSAGE,
        payload: response.data
    })
}
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

// //Categories Part
// export const AddCategory = (CategoryName) => ({
//     type: ADD_CATEGORY,
//     payload: {
//         Categorie: CategoryName,
//     }
// })
// export const ViewCategories = (CategoryNames) => ({
//     type: VIEW_CATEGORIES,
//     payload: {
//         Categorie: CategoryNames,
//     }
// })