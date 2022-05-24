import { atom } from 'recoil'

// interface runState {
//     dis: number,
//     speed: number,
//     time: number,
// }

export const runState = atom<runState>({
    key: 'runState',
    default: {
        dis: 0,
        speed: 0,
        time: 0,
    }
})