import { useState } from "react"
import { UserContext } from "./Context/UserContext";
import "./Box.css";
import BoxB from "./BoxB";

function BoxA(){
    const [user] = useState("Sebas");

    return  <div className="box">
                <h1>BoxA</h1>
                <h2>Hello {`${user}`}</h2>
                <UserContext.Provider value={user}>
                    <BoxB />
                </UserContext.Provider>
            </div>
}

export default BoxA