import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className="chats">
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => {
        const userInfo = chat[1]?.userInfo;
        const lastMessageText = chat[1]?.lastMessage?.text;

        return (
          <div
            className="userChat"
            key={chat[0]}
            onClick={() => handleSelect(userInfo)}
          >
            {userInfo?.photoURL && (
              <img src={userInfo.photoURL} alt="" />
            )}
            <div className="userChatInfo">
              <span>{userInfo?.displayName}</span>
              <p>{lastMessageText}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Chats;
