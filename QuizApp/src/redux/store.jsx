import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './quizSlice.jsx';

export default configureStore({
  reducer: {
    quiz: quizReducer,
  },
});
