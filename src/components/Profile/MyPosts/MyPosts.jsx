
import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';


const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />)
    let addPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
        
    }
    let onPostChange = () => {
        let text = addPostElement.current.value;
        props.updateNewPostText(text);
        
    }
    return (
        <div className={s.postBlock}>
            <div className={s.areaBlock}>
                <textarea
                    onChange={onPostChange}
                    ref={addPostElement}
                    value={props.newPostText}
                />
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;