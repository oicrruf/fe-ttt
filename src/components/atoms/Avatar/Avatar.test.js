import React from "react";
import { render, screen } from "@testing-library/react";
import Avatar from "./Avatar";

test("componente avatar es renderizado", () => {
  render(<Avatar />);
  const testID = screen.getByTestId("avatar-image");
  expect(testID).toBeInTheDocument();
});

test("validando el envio de imagen de perfil", () => {
  render(
    <Avatar image={"https://avatars.githubusercontent.com/u/15336350?v=4"} />
  );
  const image = screen.getByRole("img");
  expect(image).toHaveAttribute(
    "src",
    "https://avatars.githubusercontent.com/u/15336350?v=4"
  );
});

test("validando renderizacion de imagen predeterminada", () => {
  render(<Avatar image={null} />);
  const image = screen.getByRole("img");
  expect(image).toHaveAttribute(
    "src",
    "https://react.semantic-ui.com/images/wireframe/square-image.png"
  );
});
