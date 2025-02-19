import { screen, render, act, fireEvent } from "@testing-library/react";
import Header from "../Header";
import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart";
import "@testing-library/jest-dom";
import MOCK_DATA from "../../../__mocks__/mockResMenu.json";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe("Restaurant Menu and Cart Functionality", () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve(MOCK_DATA)
        })
    )
    
    it("Should Load Restaurant Menu Component", async () => {
        await act(async () => render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                </Provider>
            </BrowserRouter>
        ))
    
        const accordionHeader = screen.getByText("Veg Pizza (14)")
    
        fireEvent.click(accordionHeader);
    
        expect(screen.getAllByTestId("foodItems").length).toBe(14)
    
       
    })
    
    it("Should add 1 item to Cart on Clicking on Add button", async () => {
        await act(async () => render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                </Provider>
            </BrowserRouter>
        ))
    
        expect(screen.getByRole("link", { name: /Cart.*0/i })).toBeInTheDocument();
    
        const addBtns = screen.getAllByRole("button", { name: "ADD" })
    
        fireEvent.click(addBtns[0])
    
        expect(screen.getByRole("link", { name: /Cart.*1/i })).toBeInTheDocument();
    })
    
    it("Should add 2 items to Cart on Clicking on Add button", async () => {
        await act(async() => {
            render (
                <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                    </Provider>
                    </BrowserRouter>
            )
        })

        expect(screen.getByRole("link", {name: /Cart.*1/})).toBeInTheDocument()

        const addBtns = screen.getAllByRole("button", {name:"ADD"})

        fireEvent.click(addBtns[1])

        expect(screen.getByRole("link", {name: /Cart.*2/})).toBeInTheDocument()
    })

    it("Should display 7 food items and show Cart on the screen", async () => {
        await act(async () => 
            render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <Header />
                        <RestaurantMenu />
                        <Cart />
                    </Provider>
                </BrowserRouter>
            )
        );
    
        // screen.debug(screen.getAllByTestId("foodItems"));
        expect(screen.getAllByTestId("foodItems").length).toBe(22);
    });
    
    it("Should empty cart on clicking Clear Cart button",  async () => {
        await act(async () => 
            render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <Header />
                        <RestaurantMenu />
                        <Cart />
                    </Provider>
                </BrowserRouter>
            )
    )

    fireEvent.click(screen.getByText("Clear Cart"));
    
    expect(screen.getByText("Oops! Looks like your cart is empty")).toBeInTheDocument();
    });

   
});



