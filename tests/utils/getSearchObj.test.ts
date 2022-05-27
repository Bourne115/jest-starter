import getSearchObj from '@/utils/getSearchObj'

describe('getSearchObj', () => {
  it("可以获取当前网址的查询参数对象", () => {
    // 使用全局暴露出来的 jsdom
    // global.jsdom.reconfigure({
    //   url: "https://www.rishiqing.com?a=1&b=2",
    // });

    window.location.href = "https://www.rishiqing.com?a=1&b=2"
    
    expect(window.location.search).toEqual("?a=1&b=2")
    expect(getSearchObj()).toEqual({
      a: "1",
      b: "2",
    })
  })

  it("空参数返回空对象", () => {
    window.location.href = "https://www.rishiqing.com"

    expect(window.location.search).toEqual("")
    expect(getSearchObj()).toEqual({})
  })
})