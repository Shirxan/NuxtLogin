import {createStore} from 'vuex';
import { signin } from './modules/signin';
const store = createStore({
    modules :{
        signin,

    }
})
export default store