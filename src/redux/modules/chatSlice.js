import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL, instance } from "../../core/axios/axios";
import sweetAlert from "../../core/utils/sweetAlert";
import axios from "axios";

//채팅방 목록조회
export const __getRooms = createAsyncThunk(
  "getRooms",
  async (payload, thunkAPI) => {
    try {
      const data = await baseURL.get("/api/rooms");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      sweetAlert(1000, "error", error.response.data.msg);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postRooms = createAsyncThunk(
  "postRooms",
  async (payload, thunkAPI) => {
    try {
      console.log("payload", payload);
      const data = await baseURL.post("/api/rooms", payload);
      if (data.request.status === 200) {
        sweetAlert(1000, "success", "채팅방 생성 성공");
      }
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      sweetAlert(1000, "error", error.response.data.msg);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getDetailRooms = createAsyncThunk(
  "getDetailRooms",
  async (payload, thunkAPI) => {
    try {
      const data = await baseURL.get(`/api/rooms/${payload}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      sweetAlert(1000, "error", error.response.data.msg);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getMassages = createAsyncThunk(
  "getMassages",
  async (payload, thunkAPI) => {
    try {
      console.log("채팅방 모든 메세지 가져오기payload", payload);
      const data = await baseURL.get(`/api/rooms/${payload}/messages`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      sweetAlert(1000, "error", error.response.data.msg);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  roomId: "",
  chatRoomList: [
    {
      roomId: "",
      roomName: "",
      rommPic: "",
      // connectedUsers: [],
    },
  ],
  charRoom: {},
  chat: [],
  users: [
    {
      memberId: 0,
      nickName: "",
    },
  ],
  isLoading: false,
  error: null,
  isSuccess: false,
};

const chatSlice = createSlice({
  name: "chat",
  initialState: initialState,
  reducers: {
    addMessage: (state, { payload }) => {
      state.chat = [...state.chat, payload];
    },
    addMember: (state, { payload }) => {
      state.connectedUsers.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(__getRooms.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
    });
    builder.addCase(__getRooms.fulfilled, (state, action) => {
      // console.log("모든방가져오기", action);
      state.chatRoomList = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(__getRooms.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isSuccess = false;
    });
    builder.addCase(__getDetailRooms.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
    });
    builder.addCase(__getDetailRooms.fulfilled, (state, action) => {
      state.chat = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(__getDetailRooms.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    });
    builder.addCase(__postRooms.fulfilled, (state, action) => {
      console.log("extrareducer애션", action);
      state.chatRoomList.push(action.payload);
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(__getMassages.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
    });
    builder.addCase(__getMassages.fulfilled, (state, action) => {
      state.charRoom = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(__getMassages.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    });
  },
});
export const { addMessage } = chatSlice.actions;

const postReducer = chatSlice.reducer;

export default postReducer;
