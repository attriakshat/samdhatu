/** @type {import('next').NextConfig} */
const nextConfig = {};

function cssLoaderOptions(modules) {
	const { getLocalIdent, ...others } = modules;
	return {
		...others,
		getLocalIdent: isProd ? getLocalIdent : localIdent,
		exportLocalsConvention: 'camelCaseOnly',
		mode: 'local',
	};
}

export default nextConfig;
