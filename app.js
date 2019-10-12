"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Container_1 = require("@material-ui/core/Container");
const Typography_1 = require("@material-ui/core/Typography");
const Box_1 = require("@material-ui/core/Box");
const Link_1 = require("@material-ui/core/Link");
function MadeWithLove() {
    return (React.createElement(Typography_1.default, { variant: "body2", color: "textSecondary", align: "center" },
        "Built by abhishek Kammakki using ",
        React.createElement(Link_1.default, { color: "inherit", href: "https://material-ui.com/" }, "Material-UI")));
}
class App extends React.Component {
    render() {
        return (React.createElement(Container_1.default, { maxWidth: "xl" },
            React.createElement(Box_1.default, { my: 1 }),
            React.createElement(Box_1.default, { my: 1 },
                React.createElement(MadeWithLove, null))));
    }
}
exports.App = App;
exports.default = App;
//# sourceMappingURL=app.js.map