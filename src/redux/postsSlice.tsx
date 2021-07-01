import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { postsApi } from "../api/api"

interface InitialState {
    posts: Array<PostType>
    stopUpload: boolean
    autoUpdate: boolean
}

export interface PostType {
    author: Author
    contentImageUrl: string
}

export interface Author {
    firstname: string
    lastname: string
    avatarUrl: string
    id: string
}

const initialState: InitialState = {
    posts: [],
    stopUpload: false,
    autoUpdate: false
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<Array<PostType>>) => {
            state.posts = [...action.payload, ...state.posts]
        },
        setStopUpload: (state, action: PayloadAction<boolean>) => {
            state.stopUpload = action.payload
        },
        setAutoUpdate: (state, action: PayloadAction<boolean>) => {
            state.autoUpdate = action.payload
        }
    }
})

export const requestPosts = createAsyncThunk(
    'posts/requestPosts',
    (quantity: number, thunkApi) => {
        postsApi.getPosts(quantity)
            .then(posts => thunkApi.dispatch(setPosts(posts)))
    })

export const { setPosts, setStopUpload, setAutoUpdate } = postsSlice.actions

export default postsSlice.reducer