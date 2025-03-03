import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
    activeInput: false,
    inputText: '',
    conversation: []
}


async function getServerData(text) {
    const number = text.length;

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${number}`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}

export const getAsyncData = createAsyncThunk(
    '/chat/getData',
    async (text, { rejectWithValue }) => {
        try {
            const response = await getServerData(text)
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)


const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers:
    {
        sendPrompt(state, action) {

            const line = { user: 'user', text: action.payload }
            state.conversation.push(line)
            state.inputText = ''
        },
        setInputText(state, action) {
            state.inputText = action.payload
            state.activeInput = (state.inputText != '')
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAsyncData.pending, (state) => {
            state.activeInput = false;
        }),
            builder.addCase(getAsyncData.fulfilled, (state, action) => {                
                const line = { user: 'gpt', text: action.payload.body }
                state.conversation.push(line)                

            }),
            builder.addCase(getAsyncData.rejected, (state) => {           
                state.inputText = action.payload.body
            })
    }

})


export const { sendPrompt, setInputText } = chatSlice.actions;
export default chatSlice.reducer;