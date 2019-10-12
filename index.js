"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const CssBaseline_1 = require("@material-ui/core/CssBaseline");
const styles_1 = require("@material-ui/styles");
const app_1 = require("./app");
const theme_1 = require("./theme");
ReactDOM.render(React.createElement(styles_1.ThemeProvider, { theme: theme_1.default },
    React.createElement(CssBaseline_1.default, null),
    React.createElement(app_1.default, null)), document.querySelector("#root"));
//# sourceMappingURL=index.js.map