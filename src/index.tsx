/* @refresh reload */
import { render } from "solid-js/web"

import "./styles/modern-normalize-tw.css"
import "./styles/index.css"
import App from "./app"

const root = document.getElementById("root")

render(() => <App />, root!)
