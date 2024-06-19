import React, { useState } from 'react';
import { BiPaperPlane } from 'react-icons/bi';
import { FaPaperPlane } from 'react-icons/fa';


const dummycomments = [
  {
    id: 1,
    userName: "Topher",
    comment: "Mkoje"
  },
  {
    id: 2,
    userName: "Ron",
    comment: "Fty"
  },
  {
    id: 3,
    userName: "Sam",
    comment: "Nani mnoma ?"
  }
];

const Comments = () => {
  const [userComment, setUserComment] = useState(dummycomments);
  const [commentbody, setCommentBody] = useState('');

// avoiding empty comments

  const onComment = () => {
    if (!commentbody) {
      return; 
    }

    const newComment = {
      id: userComment.length + [-1],
      userName: "New User", 
      comment: commentbody
    };

    setUserComment((prevComments) => [newComment, ...prevComments]);
    //set it back to empty
    setCommentBody('');
  };

  return (
    <div className='shadow-md shadow-slate-300 py-[1em] px-[1em] '>
      <p className='text-xl text-green-600 font-semibold'>Let's Chat</p>
      <div>
        {userComment.map((com) => (
          <div key={com.id}>
            <p className='text-green-900 font-mono'>{com.userName}:<span className='text-green-700 italic'> {com.comment}</span></p>
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center w-full'>
      <input
        value={commentbody}
        onChange={(e) => setCommentBody(e.target.value)}
        placeholder='Chat Here ...'
        className='p-1 border flex w-full border-green-400 outline-green-300'
      />
      <FaPaperPlane
      size={25}
        onClick={onComment}
        className='border ml-1 p-1 rounded-md bg-green-500 hover:cursor-pointer text-white'
      />
      </div>
    </div>
  );
};

export default Comments;
