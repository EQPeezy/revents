import { combineReducers } from '../../../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-redux-toastr/node_modules/redux'
import testReducer from '../../features/testArea/testReducer';

const rootReducer = combineReducers({
    test: testReducer
})

export default rootReducer