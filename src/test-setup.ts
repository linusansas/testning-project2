import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

//Do other things here
afterEach(() => {
    cleanup();
});
