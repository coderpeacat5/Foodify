import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component  {
    constructor(props) {
        super(props);

        // console.log("Parent constructor")
    }

    componentDidMount() {
        // console.log("Parent mount")
    }

    render() {
        // console.log("Parent render")
        return (
            <div>
            <h1>This is an About page</h1>
            <User name={"Gayatri from functional comp"}/>

            {/* <UserClass name={"Gayatri from class comp"} location={"Dehradun"}/> */}
            {/* <UserClass name={"Mayanksii from class comp"} location={"Jaipur"}/> */}
        </div>
        )
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>This is an About page</h1>
//             {/* <User name={"Gayatri from functional comp"}/> */}

//             <UserClass name={"Gayatri from class comp"} location={"Dehradun"}/>
//         </div>
        
//     )
// }

export default About;