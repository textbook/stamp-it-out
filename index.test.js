import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { implementation } from "./index.js";

describe("implementation", () => {
    it("can be called", () => {
        assert.equal(implementation(), undefined);
    });
});
