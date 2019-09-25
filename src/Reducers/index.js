import { combineReducers } from 'redux'
import server from './1.Server'
import channel from './2.Channel'
import message from './4.Message'

const app = combineReducers({
    Servers: server,
    Channels: channel,
    Messages: message
})

export default app