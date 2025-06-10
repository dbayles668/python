import {useState} from 'react';

export default function addCommentForm({ onAddComment }){
    const [nameText, setNameText] = useState('');
    const [commentText, setCommentText] = useState('');
    return(
        <div>
            <h3>Add comment</h3>
            <label>
                Name:
                <input type="text" value='nameText' onChange={e => setNameText(e.target.value)}/>
            </label><br />
            <label>
                Comment:
                <input type="text" value='commentText' onChange={e => setCommentText(e.target.value)}/>
            </label><br />
            <button onClick={() => {
                onAddComment({nameText, commentText});
                setNameText('');
                setCommentText('');
            }
            }>Add comment</button>
        </div>
    )
}