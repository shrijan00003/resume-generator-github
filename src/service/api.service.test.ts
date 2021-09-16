import * as api_service from "./api.service";
// @ponicode
describe("api_service.getAsyncUsers", () => {
  test("0", async () => {
    await api_service.getAsyncUsers();
  });
});
