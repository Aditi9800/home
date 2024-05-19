import React, { useState } from 'react'

export const Comment = () => {
    const dummyComments=[
        {
            name:"abc",
            desc:"hi this is the first comment",
            likes:"0",
            replies:["first reply","second reply"]
        },
        {
            name:"pqr",
            desc:"good",
            likes:"0",
            replies:[]
        }
    ]
    const [input,setInput]=useState("");
    const [comments,setComments]=useState("");
    const [arr,setArr]=useState(dummyComments);
    const [like,setLike]=useState(0);
    const [isReply,setIsReply]=useState(false);
    const [inputReply,setInputReply]=useState("");
    const [Reply,setReply]=useState("");
    const [isDelete,setIsDelete]=useState(false);
    
    const handleComment=(e)=>{
        const value=e.target.value;
        setInput(value);
        // console.log(value);
    }
    const handleReplyComment=(e)=>{
        const value=e.target.value;
        setInputReply(value);
    }
    const handleLike=()=>{
        setLike((prev)=>prev+1);
    }
    const handlePost=()=>{
        setComments(input);
        const newobj={};
        newobj.desc=input;
        setArr([...arr,newobj]);
        setInput("");
        console.log(arr);
    }
    const handleDelete=()=>{
        setComments("");
    }
    const handleReply=()=>{
        setIsReply(true);
    }
    const handleNewReply=()=>{
        setReply(inputReply)
    }
    const handleDeleteReply=()=>{
        setIsDelete(true);
    }
    const handleEditComment=()=>{

    }
    const handleEdit=()=>{

    }
  return (
    <div>
    Comment
    <div className="child">
       <label>Add a new comment:</label> <input type="text" className="comment" value={input} onChange={handleComment} />
        <button className="post" onClick={handlePost} >Post</button>
        <div>Name:{dummyComments[0].name}</div>
        <div className='new-comment' >New Comments: {comments}</div>

        <div>
            {arr.map((item,i)=>
                <div  className='users'>
                <div className='name'>{item.name}</div>
                <div className='name'>{item.desc}</div>
                <div className='name'>{item.likes}</div>
                <div className='name'>{item.replies}</div>
                
                </div>
            )}
        </div>


        {!isDelete&&
        <div>
        <div className='comment-area'>
            {/* <div className="single">{comments}</div> */}
            <div className='comment-container'>
            
            <div>{dummyComments[0].desc}</div>  <button className="edit" onClick={handleEdit}>Edit</button>
            <div className='edit-comment'>
                <input type="text" value={dummyComments[0].desc} onChange={handleEditComment} />
                <button className='confirm-edit'>Confirm Edit</button>
            </div>
            
            <div>Likes:{like}</div><button className="like" onClick={handleLike}>Like</button>
            <div>Replies:
            <div className="replies">{dummyComments[0].replies[0]}</div>
            <div className="replies">{dummyComments[0].replies[1]}</div>
            </div>  
            
            <button className="reply" onClick={handleReply}>Reply</button>
            {isReply&&
                <div>Add new Reply: <input type="text" onChange={handleReplyComment}/> 
                <button className='reply' onClick={handleNewReply}>Post Reply</button>
                <div> {Reply}</div>
                </div>
            }
            </div>
            <button className="delete" onClick={handleDeleteReply}>Delete this comment</button>

        </div>
        </div>
        }

        
        
    </div>
    </div>
  )
}
