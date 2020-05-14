import React from "react";
import axios from "axios";

const Github = axios.create({
  baseURL: "https://api.github.com",
});

export default Github;
