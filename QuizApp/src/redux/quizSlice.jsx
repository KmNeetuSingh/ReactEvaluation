import { createSlice } from '@reduxjs/toolkit';

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    quizConfig: {},
  },
  reducers: {
    setQuizConfig: (state, action) => {
      state.quizConfig = action.payload;
    },
  },
});

export const { setQuizConfig } = quizSlice.actions;

export default quizSlice.reducer;
