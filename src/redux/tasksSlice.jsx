import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

const initialState = {
  apiTasks: [],
  addedTasks: [],
  status: 'idle',
  error: null,
};

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await axios.get(API_URL);
  return response.data.slice(0, 10); // Fetch only 10 tasks
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.addedTasks.unshift(action.payload);
    },
    editTask: (state, action) => {
      const taskIndex = state.addedTasks.findIndex((task) => task.id === action.payload.id);
      if (taskIndex !== -1) {
        state.addedTasks[taskIndex] = action.payload;
      } else {
        const apiTaskIndex = state.apiTasks.findIndex((task) => task.id === action.payload.id);
        if (apiTaskIndex !== -1) {
          state.apiTasks[apiTaskIndex] = action.payload;
        }
      }
    },
    
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.apiTasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
