import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel} from "../RestaurantCard";
import MOCK_DATA from "../../../__mocks__/resCardMock.json";
import "@testing-library/jest-dom";


it("should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");

  expect(name).toBeInTheDocument();
});

// it("should render RestaurantCard component with Promoted Label", () => {
//     const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
  
//     render(<PromotedRestaurantCard resData={MOCK_DATA} />);
  
//     const promotedLabel = screen.getByText("Promoted");
//     expect(promotedLabel).toBeInTheDocument();
//   });