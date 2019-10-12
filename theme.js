"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = require("@material-ui/core/colors");
const styles_1 = require("@material-ui/core/styles");
// A custom theme for this app
const theme = styles_1.createMuiTheme({
    palette: {
        primary: {
            main: "#556cd6"
        },
        secondary: {
            main: "#19857b"
        },
        error: {
            main: colors_1.red.A400
        },
        background: {
            default: "#fff"
        }
    }
});
exports.default = theme;
//# sourceMappingURL=theme.js.map