import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios-instance";
import { backendUrl } from "../../utils/config";
import type { ErrorResponse } from "../../utils/types/auth-types";

const emailSubscriptionUrl = `${backendUrl}/email/subscribe`;
const emailUnsubscriptionUrl = `${backendUrl}/email/unsubscribe`;

export const subscribeToEmail = createAsyncThunk(
  "email/subscribeToEmail",
  async (email: string, { rejectWithValue }) => {
    try {
      const response = await axios.post(emailSubscriptionUrl, { email });
      return response.data;
    } catch (error) {
      const err = error as { response: { data: ErrorResponse } };
      return rejectWithValue(err.response.data);
    }
  }
);

export const unsubscribeFromEmail = createAsyncThunk(
  "email/unsubscribeFromEmail",
  async (email: string, { rejectWithValue }) => {
    try {
      const response = await axios.patch(emailUnsubscriptionUrl, { email });
      return response.data;
    } catch (error) {
      const err = error as { response: { data: ErrorResponse } };
      return rejectWithValue(err.response.data);
    }
  }
);

export const sendMailFromUnprotectedRoute = createAsyncThunk(
  "email/sendMailFromUnprotectedRoute",
  async (
    formData: {
      name: string;
      email: string;
      subject: string;
      message: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        `${backendUrl}/email/unregistered-user`,
        formData
      );
      return response.data;
    } catch (error) {
      const err = error as { response: { data: ErrorResponse } };
      return rejectWithValue(err.response.data);
    }
  }
);

export interface EmailSubscriptionState {
  loading: boolean;
  error: ErrorResponse | null;
  success: boolean;
  message: string;
}

const initialState: EmailSubscriptionState = {
  loading: false,
  error: null,
  success: false,
  message: "",
};

const emailSubscriptionSlice = createSlice({
  name: "emailSubscription",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(subscribeToEmail.pending, (state) => {
        return { ...state, loading: true };
      })
      .addCase(subscribeToEmail.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          success: true,
          message: action.payload.message,
        };
      })
      .addCase(subscribeToEmail.rejected, (state, action) => {
        const payload = action.payload as ErrorResponse;
        return {
          ...state,
          loading: false,
          error: action.payload as ErrorResponse,
          message: payload.message,
        };
      })
      .addCase(unsubscribeFromEmail.pending, (state) => {
        return { ...state, loading: true };
      })
      .addCase(unsubscribeFromEmail.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          success: true,
          message: action.payload.message,
        };
      })
      .addCase(unsubscribeFromEmail.rejected, (state, action) => {
        const payload = action.payload as ErrorResponse;
        return {
          ...state,
          loading: false,
          message: payload.message,
        };
      })
      .addCase(sendMailFromUnprotectedRoute.pending, (state) => {
        return { ...state, loading: true };
      })
      .addCase(sendMailFromUnprotectedRoute.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          success: true,
          message: action.payload.message,
        };
      })
      .addCase(sendMailFromUnprotectedRoute.rejected, (state, action) => {
        const payload = action.payload as ErrorResponse;
        return {
          ...state,
          loading: false,
          message: payload.message,
        };
      });
  },
});

// export const {  } = emailSubscriptionSlice.actions;

export default emailSubscriptionSlice.reducer;
