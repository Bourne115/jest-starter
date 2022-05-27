import storage from "@/utils/storage";

describe("storage", () => {
  it("可以缓存值", () => {
    storage.set('newKey', 'hello jest')
    expect(localStorage.getItem('my-app-newKey'))
      .toEqual('hello jest')
  })

  it("可以设置值", () => {
    localStorage.setItem("my-app-newKye", "hello jest");
    expect(storage.get("newKey")).toEqual("hello jest");
  })
})