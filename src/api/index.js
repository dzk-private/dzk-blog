import request from "./request";

export const getData = () =>
  request({ url: "/product/getBaseCategoryList", method: "get" });
