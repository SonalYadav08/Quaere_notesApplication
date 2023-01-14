import { legacy_createStore} from 'redux'
import notesReducer from './action_reducer'

const store = legacy_createStore(notesReducer)

export default store