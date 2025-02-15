import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
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
                <div>
                    Logged In User:
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h2 className="text-lg font-semibold">{loggedInUser} </h2>}
                    </UserContext.Consumer>
                </div>
                {/* <User name={"Gayatri from functional comp"} /> */}

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