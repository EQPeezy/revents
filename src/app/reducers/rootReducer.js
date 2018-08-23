import { combineReducers } from '../../../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-redux-toastr/node_modules/redux'
import testReducer from '../../features/testArea/testReducer';
import eventReducer from '../../features/event/eventReducer'

const rootReducer = combineReducers({
    test: testReducer,
    events: eventReducer
})

export default rootReducer