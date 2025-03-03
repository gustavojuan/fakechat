import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getServerConversations, getServerData, movimientos } from "./api";


const initialState = {
    activeInput: false,
    inputText: '',
    conversation: [],
    conversations: [],
    movimientos:[]
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

export const getAsyncConversations = createAsyncThunk(
    '/chat/getConversations',
    async (text) => {
        const response = await getServerConversations();
        return response
    }
)


export const getMovimientosasync   =createAsyncThunk(
    '/chat/pokemons',
    async(pokemon)=> {
        const response = await movimientos(pokemon);
        return response
    }
)

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers:
    {
        initConversation(state, action) {

        },
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
        builder
            .addCase(getAsyncData.pending, (state) => {
                state.activeInput = false;
            }).addCase(getAsyncData.fulfilled, (state, action) => {
                const line = { user: 'gpt', text: action.payload.body }
                state.conversation.push(line)

            }).addCase(getAsyncData.rejected, (state) => {
                state.inputText = action.payload.body
            })
            .addCase(getAsyncConversations.fulfilled,(state,action)=> {                
                
                state.conversations = action.payload
            })
            .addCase(getMovimientosasync.fulfilled, (state,action)=>{
                state.movimientos = action.payload
            })
    }

})


export const { sendPrompt, setInputText, initConversation } = chatSlice.actions;
export default chatSlice.reducer;