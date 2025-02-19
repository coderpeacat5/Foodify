import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import Grocery from "../Grocery"

test("Should load Grocery component", () => {
    render(<Grocery />)

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

