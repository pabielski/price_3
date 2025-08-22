import dotenv from "dotenv";
dotenv.config();

export default {
  projectId: parseInt(process.env.TOLGEE_PROJECT_ID),
  apiKey: process.env.TOLGEE_API_KEY,
  apiUrl: process.env.TOLGEE_API_URL,
  pull: {
    path: "./messages",
  },
  languages: ["en", "pl", "de"],
};
