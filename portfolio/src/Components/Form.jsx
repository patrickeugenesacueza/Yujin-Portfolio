import React from "react";


export default function Form(){
    return(
        <>
            <div className="bg-red-900 h-[70vh] w-full py-[2em] px-[1em]">
                <form>
                    <h1>About You</h1>
                    {/* <label>Your name:</label> */}
                    <input className="w-full h-[5vh] mb-5" placeholder="eg, Patrick Eugene Sacueza"></input>
                    <input className="w-full h-[5vh] mb-5" placeholder="email@gmail.com"></input>
                    <textarea className="w-full h-[10vh] mb-5 " placeholder="message"></textarea>
                    <button className="py-[2em] px-[10em] bg-blue-900">SUBMIT</button>
                </form>
            </div>
        </>
    )
}