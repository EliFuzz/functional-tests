import { api } from "./api";

describe("API Util", () => {
  const error = { error: "Something went wrong" };

  it("should resolve with incremented counter for INCREMENT type", async () => {
    expect(await api("INCREMENT", 5)).toEqual({ amount: 6 });
  });

  it("should resolve with decremented counter for DECREMENT type", async () => {
    expect(await api("DECREMENT", 5)).toEqual({ amount: 4 });
  });

  it("should reject with error message for unknown type", async () => {
    await expect(api("UNKNOWN", 5)).rejects.toEqual(error);
  });

  it("should handle non-numeric counter values gracefully", async () => {
    await expect(api("INCREMENT", "five")).rejects.toEqual(error);
  });

  it("should handle empty string as counter value", async () => {
    await expect(api("INCREMENT", "")).rejects.toEqual(error);
  });

  it("should handle undefined counter value", async () => {
    await expect(api("INCREMENT", undefined)).rejects.toEqual(error);
  });

  it("should handle null counter value", async () => {
    await expect(api("INCREMENT", null)).rejects.toEqual(error);
  });
});
