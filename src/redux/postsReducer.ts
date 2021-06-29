import { ThunkAction } from "redux-thunk"
import { postsApi } from "../api/api"
import { AppStateType } from "./store"

const SET_POSTS: 'SET_POSTS' = 'SET_POSTS'
const SET_AUTOUPDATE: 'SET_AUTOUPDATE' = 'SET_AUTOUPDATE'

interface IInitialState {
    posts: Array<PostType>
    autoupdate: boolean
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

const initialState: IInitialState = {
    posts: [],
    autoupdate: true
}

export const postReducer = (state: IInitialState = initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: [...action.posts, ...state.posts]
            }
        default:
            return state
    }
}

type ActionsType = setPostsAction | ISetAutoUpdate

type setPostsAction = {
    type: typeof SET_POSTS
    posts: Array<PostType>
}

const setPosts = (posts: Array<PostType>): setPostsAction => ({
    type: SET_POSTS,
    posts
})

interface ISetAutoUpdate {
    type: typeof SET_AUTOUPDATE
    isEnable: boolean
}

export const setAutoUpdate = (isEnable: boolean): ISetAutoUpdate => ({
    type: SET_AUTOUPDATE,
    isEnable
})

export const requestPosts = (quantity: number):ThunkAction<void, AppStateType, unknown, ActionsType> => (dispatch) => {
    postsApi.getPosts(quantity)
        .then(posts => dispatch(setPosts(posts)))
}