import axios from "axios";
import React from "react";
import { atom } from "recoil";

export const loginState = atom({
    key: 'loginState',
    default: localStorage.getItem('login'),
});
export const userState = atom({
  key: 'userState',
  default: localStorage.getItem('nickname'),
});
export default {loginState, userState};