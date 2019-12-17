import test from "ava";
import WorkPlusSDK from "../lib/@w6s/sdk.min.js";

test("Some thing", t => {
  t.same(WorkPlusSDK.version, "0.0.1");
});
