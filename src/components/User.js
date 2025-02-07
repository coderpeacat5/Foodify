import { useEffect, useState } from "react";

const User= ({name}) => {
    const [count, setCount] = useState(0);
    const [count2] = useState(1);

    useEffect(() => {
        // Make API call
        // setInterval(() => {
        //     console.log("In About")
        // }, 1000);
        console.log("useEffect called")

        return () => {
            console.log("useEffect returned")
        }
    }, [])

    return (
        <div className="user-card">
            <h2>Name:{name}</h2>
            <h3>Location</h3>
            <h4>Social Handle</h4>
            <h2>Count = {count}</h2>
            <h2>Count = {count2}</h2>
        </div>
    )
}

export default User;