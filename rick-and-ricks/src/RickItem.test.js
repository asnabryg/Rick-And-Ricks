import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import RickItem from "./RickItem";

test("Renders RickItem correclty", () => {
  const rickItem = {
    id: 1,
    name: "Testing Rick",
    image: "https://rickandmortyapi.com/api/character/avatar/784.jpeg",
    status: "Alive",
    gender: "Male",
    species: "unknown",
    episode: ["1", "2", "3"],
    origin: {
      name: "Earth",
    },
  };

  const component = render(<RickItem rick={rickItem} />);

  expect(component.container).toHaveTextContent("Testing Rick");
  expect(component.container).toHaveTextContent("3 episodes");
  expect(component.container).not.toHaveTextContent("Dead");
});
