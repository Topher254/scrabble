import React, { useEffect, useState } from 'react';
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

  const [backendUser, setBackendUser] = useState({ users: [] });

  useEffect(() => {
    fetch("http://localhost:8000/api")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data); // Log fetched data
        setBackendUser(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Log any errors
      });
  }, []);

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
      {backendUser.users.length === 0 ? (
        <p>Loading Users ...</p>
      ) : (
        backendUser.users.map((user, i) => (
          
          <p className='font-mono text-green-800 font-semibold ' key={i}>{user.username}{':'}
          <span className='ml-2 italic text-blue-700 font-normal'>{user.chat_message}</span></p>
        ))
      )}
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
