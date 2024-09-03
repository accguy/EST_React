import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("버튼이 제대로 작동하고 있는지 테스트", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: "Change to blue!" });

  expect(button).toHaveStyle({ backgroundColor: "red" });
  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: "blue" });
  expect(button.textContent).toBe("Change to red!");
});
