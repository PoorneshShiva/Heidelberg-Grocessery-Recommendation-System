const path = require("path");

module.exports = {
	// Your existing webpack config...

	resolve: {
		fallback: {
			path: require.resolve("path-browserify"),
			buffer: require.resolve("buffer/"),
			util: require.resolve("util/"),
		},
	},
};
