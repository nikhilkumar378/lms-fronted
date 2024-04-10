import { createSlice } from "@reduxjs/toolkit"

const initialstate = {
  courseData:[

  ]
}

const courseSlice = createSlice({
  name: 'courses',
  initialstate,
  reducers:{},
  extraReducers:(builder)=>{

  }
})

export default courseSlice.reducer