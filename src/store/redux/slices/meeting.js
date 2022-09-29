import { createSlice } from '@reduxjs/toolkit';

const meetingSlice = createSlice({
  name: 'meeting',
  initialState: {
    meetingCollection: {},
  },
  reducers: {
    addMeeting: (state, action) => {
      const { meetingObject } = action.payload;
      state.meetingCollection[meetingObject.id] =
        action.payload.meetingObject.fields;
    },
    removeMeeting: (state, action) => {
      const { meetingObject } = action.payload;
      delete state.meetingCollection[meetingObject.id];
    },
    editMeeting: (state, action) => {
      const { meetingObject } = action.payload;
      state.meetingCollection[meetingObject.id] = {
        ...state.meetingCollection[meetingObject.id],
        ...action.payload.meetingObject.fields,
      };
    },
  },
});
export const { addMeeting, removeMeeting, editMeeting } = meetingSlice.actions;
export default meetingSlice.reducer;