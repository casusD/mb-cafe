/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		// если используешь App Router — лучше оставить включенным
		appDir: true,
	},
	webpack(config: { module: { rules: { test: RegExp; type: string }[] } }) {
		config.module.rules.push({
			test: /\.json$/,
			type: 'json',
		});
		return config;
	},
};

module.exports = nextConfig;
