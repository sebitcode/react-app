import { useContext } from "react"
import { UserContext } from "./Context/UserContext"

function BoxD(){
    const user = useContext(UserContext);

    return  <div className="box">
                <h1>BoxD</h1>
                <h2>Hello {`${user}`}</h2>
            </div>
}

export default BoxD