import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Clicker( { increment, keyName, color } ) {
    

    // useState is called when the thing starts and whenever the thing is updated
    const [ count, setCount ] = useState(parseInt(localStorage.getItem(keyName) ?? 0))
    const buttonRef = useRef()
    console.log(buttonRef)

    useEffect(() =>
    {
        buttonRef.current.style.backgroundColor = 'papayawhip'
        return () => {
            localStorage.removeItem( keyName )
        }
    }, [])

    /* useEffect is called whenever a value is changed.
    If you want to call a function only on the first time, 
    put an empty array as the second return parameter. If you
    want to call it after a value changes, put the value in
    the array. */
    useEffect(() =>
    {
        // JS API for local storage
        localStorage.setItem(keyName, count)
    }, [ count ])

    
    const buttonClick = () =>
    {
        setCount(count + 1)
    }


    return <>
        <div style={ {color: color} }>Clicks count: { count }</div>
        <button ref={buttonRef} onClick={ buttonClick }>Click me</button>
    </>
}