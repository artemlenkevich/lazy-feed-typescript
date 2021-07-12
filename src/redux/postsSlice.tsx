import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { postsApi } from "../api/api"

interface InitialState {
    posts: Array<PostType>
    hiddenPosts: Array<PostType>
    autoUpload: boolean
    autoUpdate: boolean
}

export interface PostType {
    author: Author
    contentImageUrl: string
    id: number
}

export interface Author {
    firstname: string
    lastname: string
    avatarUrl: string
    id: string
}

const initialState: InitialState = {
    posts: [] as Array<PostType>,
    hiddenPosts: [] as Array<PostType>,
    autoUpload: false,
    autoUpdate: true
}

export const requestPosts = createAsyncThunk(
    'posts/requestPosts',
    (quantity: number, thunkApi) => {
        return postsApi.getPosts(quantity)
            .then(posts => posts)
    })

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setAutoUpload: (state, action: PayloadAction<boolean>) => {
            state.autoUpload = action.payload
        },
        setAutoUpdate: (state, action: PayloadAction<boolean>) => {
            state.autoUpdate = action.payload
            if (state.autoUpdate) {
                state.posts = [...state.hiddenPosts, ...state.posts]
                state.hiddenPosts = []
            }
        },
        showHiddenPosts: (state) => {
            state.posts = [...state.hiddenPosts, ...state.posts]
            state.hiddenPosts = []
        },
        removePost: (state, action: PayloadAction<number>) => {
            state.posts = state.posts.filter(post => post.id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(requestPosts.fulfilled, (state, action) => {
            if (state.autoUpdate) {
                state.posts = [...action.payload, ...state.posts]
            } else {
                state.hiddenPosts = [...action.payload, ...state.hiddenPosts]
            }
        })
    }
})

export const { setAutoUpload, setAutoUpdate, showHiddenPosts, removePost } = postsSlice.actions

export const postsReducer =  postsSlice.reducer