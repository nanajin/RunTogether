// import axios from "axios";
// import { cacheAdapterEnhancer } from "axios-extensions";

// const instance = axios.create({
//   baseURL:'http://localhost/',
//   Accept: 'application/json',
//   headers: {'Cache-Controls': 'no-cache'},
//   adapter: cacheAdapterEnhancer(
//     axios.defaults.adapter, {enabledByDefault: false}
//   ),
// });

// const forceUpdate = false; // 뒤로, 앞으로 가기: forceUpdate=false / 링크이동(캐시필요X): true


// export const getUser = async(forceUpdate)=>{
//   const response = await instance.get(
//     '/', {forceUpdate, cache: true},
//   );
//   return response.data;
// }