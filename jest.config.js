module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom", // Ensure jsdom is specified
    transform: {
      "^.+\\.(ts|tsx|js|jsx)$": "babel-jest"
    }
  };
  