import { composeStories } from "@storybook/react";
import { describe, test, expect } from "vitest";
import * as TextInput from "./index.stories";
import { render, screen } from "@testing-library/react";

const { ErrorMessage } = composeStories(TextInput);

describe("TextInput", () => {
  test("エラーメッセージ", async () => {
    const { container } = render(<ErrorMessage />);
    await ErrorMessage.play({ canvasElement: container });

    expect(screen.getByText("Invalid Roman Numeral")).not.toBeUndefined();
  });
});
