import { configureStore } from '@reduxjs/toolkit'
import usersReduser from './userSlice';
import { loggerMiddleWare } from './loggerMiddleWare';

const store = configureStore({
    reducer: { users: usersReduser },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleWare),
})

export default store;