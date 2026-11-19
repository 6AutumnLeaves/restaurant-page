const { merge } = require("webpack-merge");
const common = require("./webpack.commons.cjs");

module.exports = merge(common, {
	mode: "development",
});

