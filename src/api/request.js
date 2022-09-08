//axios的二次封装

import axios from "axios";

const request = axios.create({
  baseURL: "/api", //基础路径
  timeout: 5000 //请求超时时间
});

//请求拦截器
request.interceptors.request.use(config => {
  return config;
});

//相应拦截器
request.interceptors.response.use(
  res => {
    return res.data;
  },
  error => {
    return Promise.reject(new Error("faile"));
  }
);

export default request;
