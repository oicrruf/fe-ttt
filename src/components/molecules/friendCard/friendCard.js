import React from "react";
import Card from "../../atoms/Card/Card";
import './friendCard.css'

const FriendCard = (props) => {
    return(
    <>
        <Card>
            <div className="flex items-center">
                <div className="rounded-full h-20 w-20 text-indigo-600 " fill="none" viewBox="0 0 24 24" stroke="currentColor">                    
                        <img className="rounded-full border border-gray-100 shadow-sm" src={props.img} ></img>
                </div>
            </div>
            <div className="w-full">
                <h1 className="text-xl uppercase font-bold text-gray-700 mb-2 text-base">{props.name}</h1>
                <h2 className="bg-green-500 bg-opacity-25 rounded-full mt-2 py-3 px-6 flex items-center justify-center text-green-600 text-base">{props.score} pts</h2>
            </div>
        </Card>        
    </>
    )
}

export default FriendCard
