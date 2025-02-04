import React from "react"
import ReactDOM from "react-dom/client"

const Header= () => (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://img.freepik.com/premium-vector/logo-food-company-that-says-sun-sun-sunflower_917213-253424.jpg" />
        </div>
        <div className="nav-container">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)

const RestaurantCard = (props) => {
    const {resName, cuisine} = props;
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img 
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf"
            alt="res-logo"
            className="res-img"></img>
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.3 stars</h4>
            <h4>38 mins</h4>
        </div>
    )
}

const Body= () => {
    return (
        <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            <RestaurantCard resName="Meghna Foods" cuisine="Biryani, Indian, Asian"/>
            <RestaurantCard resName="KFC" cuisine="Burger, Fast Food"/>
        </div>
    </div>
    )
    
}

const AppLayout= () => {
    return (
        <div className="app">
            <Header/>
           <Body/> 
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<AppLayout />);
