import { atom } from 'recoil'
export const runState = atom({
    key: 'runState',
    default: {
        dis: 0,
        speed: 0,
        time: 0,
    }
})