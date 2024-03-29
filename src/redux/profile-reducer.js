const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {

    posts: [
        { id: 1, message: 'Hi,i from Russia', likesCount: 123 },
        { id: 2, message: 'Hi, you red', likesCount: 546 },
        { id: 3, message: 'yeah', likesCount: 12 },
    ],
    newPostText: 'Gopher',
    profile: null

};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = { ...state };
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return{...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })


export default profileReducer;