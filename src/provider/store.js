import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import { userSlice } from '../slice/userSlice'

export const store = configureStore({ 
    reducer: {
        [userSlice.name]:userSlice.reducer,
    },
    middleware:(d) => d().concat()
})

setupListeners(store.dispatch)