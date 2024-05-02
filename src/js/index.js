import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../styles/index.css";
import "../styles/home.css";
import Layout from "./layout";

const root = createRoot(document.querySelector("#app"));

root.render(<Layout />);
