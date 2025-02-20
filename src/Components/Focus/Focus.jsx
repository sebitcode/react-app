import { useRef, useEffect } from "react";


function Focus(){

    const h1Tag = useRef(null);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });

    function handleClick1(){
        h1Tag.current.innerHTML += 1;
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
    }

    return (
        <div>
            <h1 ref={h1Tag}>0</h1>
            <button onClick={handleClick1}>
                Click m1 1!
            </button>
            <input ref={inputRef1} />

            <button onClick={handleClick2}>
                Click m1 1!
            </button>
            <input ref={inputRef2} />

            <button onClick={handleClick3}>
                Click m1 1!
            </button>
            <input ref={inputRef3} />
        </div>
    )
}

export default Focus