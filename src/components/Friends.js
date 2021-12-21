import React from "react";
import FriendCard from "./molecules/friendCard/friendCard";

function Friends() {
  return (
    <>
      <h1>Friends</h1>
      <div className="flex justify-center flex-wrap h-auto">
        {/*Como ejemplo son 4 componentes pero lo idea es que este alimentado de la BD y los cree tantos amigos tenga el usuario, al igual que las imagen de perfil y los puntos sean tomados de la BD */}
        <FriendCard img="https://source.unsplash.com/random/200x200" name="Lorem Ipsum" score="3500"></FriendCard>
        <FriendCard img="https://source.unsplash.com/user/mattseymour/200x200" name="Lorem Ipsum" score="9500"></FriendCard>
        <FriendCard img="https://source.unsplash.com/user/stowkelly/200x200" name="Lorem Ipsum" score="500"></FriendCard> 
        <FriendCard img="https://source.unsplash.com/user/michaeldam/200x200" name="Lorem Ipsum" score="500"></FriendCard> 
      </div>
      
    </>
  )
}

export { Friends };
