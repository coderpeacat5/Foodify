import {screen , render, fireEvent, getAllByTestId, act}  from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../../../__mocks__/mockResListData.json"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
// import { act } from "react";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })

})

it("Should Search Res List for pizza text input", async() => {
    await act(async() => {
        render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
        )
    })

    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(8)

    const searchBtn = screen.getByRole("button", {name: "🔍"});

    const searchInput= screen.getByPlaceholderText("Search..")
    
    fireEvent.change(searchInput, {target : { value : "pizza"}})

    fireEvent.click(searchBtn)

    const cardsAfterSearch= screen.getAllByTestId("resCard")

    expect(cardsAfterSearch.length).toBe(3);
    
})

it("Should filter Top Rated Restaurants", async() => {
    await act(async() => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    
    })
    
    const resBeforeSearch = screen.getAllByTestId("resCard");
    
    expect(resBeforeSearch.length).toBe(8);

    const ratedResBtn = screen.getByRole("button", {name : "Top Rated Restaurants"})

    fireEvent.click(ratedResBtn)

    const resAfterSearch = screen.getAllByTestId("resCard");

    expect(resAfterSearch.length).toBe(3);
})