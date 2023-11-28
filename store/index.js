import {proxy} from 'valtio'
const state = proxy({
    theme :  'default',
})
export default state