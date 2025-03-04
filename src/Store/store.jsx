import { configureStore } from '@reduxjs/toolkit'
import movieReducer  from './Reducers/moviesSlics'
import  tvReducer  from './Reducers/tvSlice'
import personReducer  from './Reducers/personSlics'
export const store = configureStore({
  reducer: {
    movie : movieReducer,
    tv : tvReducer,
    person: personReducer
  },
})