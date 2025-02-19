import {render, screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

describe("Contact Us Page Test Case", () => {
    // beforeAll(() => {
    //     console.log("before all")
    // })

    // beforeEach(() => {
    //     console.log("before each")
    // })

    // afterAll(() => {
    //     console.log("after all")
    // })

    // afterEach(() => {
    //     console.log("after each")
    // })
    
    it("Should load ContactUs component", () => {
        render(<Contact />)
    
        // querying
        const heading = screen.getByRole("heading", {level: 1});
    
        // assertion
        expect(heading).toBeInTheDocument();
    })
    
    it("Should load button inside Contact Us Component", () => {
        render(<Contact />)
    
        const button = screen.getByText("SUBMIT")
        expect(button).toBeInTheDocument();
    })
    
    it("Should load input name inside ContactUs Component", () => {
        render(<Contact />)
    
        const inputName = screen.getByPlaceholderText("Name");
        expect(inputName).toBeInTheDocument();
    })
    
    it("Should load input boxes inside ContactUs Component", () => {
        render(<Contact />)
    
        const inputBoxes = screen.getAllByRole("textbox")
        // console.log(inputBoxes.length)
        expect(inputBoxes).not.toBe(2)
    })
})

