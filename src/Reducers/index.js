import { combineReducers } from 'redux'
import server from './1.Server'
import channel from './2.Channel'

const app = combineReducers({
    Servers: server,
    Channels: channel
})

export default app