import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import TodoForm from "./TodoForm";

describe("TodoForm", () => {
    it("should render an input with submit button", () => {
        render(<TodoForm onSubmit={vi.fn(function() {})}/>);

        expect(screen.getByRole("textbox")).toBeVisible();
        expect(screen.getByRole("button")).toHaveTextContent("Save");
    });

    it("should call onSubmit when form is submitted", () => {
        render
    });
