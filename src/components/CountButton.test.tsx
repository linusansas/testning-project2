import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CountButton from "./CountButton";

describe("CountButton", () => {
    it("should start at 0", () => {
        // ARRANGE
        render(<CountButton />);

        // ASSERT
        expect(screen.getByRole("button")).toHaveTextContent("count is 0");
    });

    it("should increment by 1 when clicked", () => {
        render(<CountButton />);
        fireEvent.click(screen.getByRole("button"));
        expect(screen.getByRole("button")).toHaveTextContent(/1/);
    });
});
