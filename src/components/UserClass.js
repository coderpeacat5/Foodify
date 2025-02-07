import React from "react"

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state= {
            count:0,
            count2: 1,
            userInfo: {
                name:"",
                location:"India",
            },
        }

        // console.log("Child constructor")
    }

    async componentDidMount() {
        // console.log("Child Mount")

        // API call
        const data= await fetch("https://api.github.com/users/coderpeacat5")
        const json= await data.json()

        this.setState({
            userInfo: json
        })

        this.timer= setInterval(() => {
            console.log("In About")
        }, 1000);
    }

    componentDidUpdate() {
        console.log("component did update")
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("component will unmount")
    }

    render() {
        // const {name, location} = this.props; //this one is for getting info through props

        const {name, location, login} = this.state.userInfo

        
        return (
            <div className="user-card">
                <img src="https://avatars.githubusercontent.com/u/116707674?v=4" className="user-img"></img>
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Social Handle : {login}</h4>
                {/* <h2>Count = {this.state.count}</h2>
                <button onClick={()=> {
                    this.setState({
                        count: this.state.count+1
                    })
                }}>Increase Count </button> */}

                
            </div>
        )
    }
}

export default UserClass;