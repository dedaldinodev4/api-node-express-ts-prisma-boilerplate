
export default {
  clearMocks: true,
  coverageProvider: "v8",
  testMatch: [
    "**/**/*.spec.ts"
  ],
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
};