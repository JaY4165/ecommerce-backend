export default () => ({
	port: Number(process.env.PORT) || 3000,
	database: {
		url: String(process.env.DATABASE_URL),
	},
	jwt: {
		secret: String(process.env.JWT_SECRET),
		expiresIn: String(process.env.JWT_EXPIRES_IN),
	},
});
