import { combineReducers } from '../../../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-redux-toastr/node_modules/redux'
import testReducer from '../../features/testArea/testReducer';
import eventReducer from '../../features/event/eventReducer'
import {reducer as FormReducer} from 'redux-form'

const rootReducer = combineReducers({
    form: FormReducer,
    test: testReducer,
    events: eventReducer
})

export default rootReducer