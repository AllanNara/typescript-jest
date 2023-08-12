import dotenv from "dotenv";

dotenv.config();

export default {
	PORT: process.env.PORT || "8080",
	MONGO_URI: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/coder-eats",
};
