import axios from "axios";
import React from "react";
import { atom } from "recoil";

export const loginState = atom({
    key: 'loginState',
    // default: localStorage.getItem('login'),
    default: false,
});
export const userState = atom({
  key: 'userState',
  // default: localStorage.getItem('nickname'),
  default: '',
});
export default {loginState, userState};