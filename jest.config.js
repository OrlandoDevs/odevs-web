module.exports = {
    moduleFileExtensions: [
        "ts",
        "js"
    ],
    transform: {
        "^.+\\.(ts|tsx)$": ['ts-jest', {
            babel: true,
            tsconfig: 'tsconfig.json',
          }]
    },
    testMatch: [
        "**/tests/**/*.spec.(ts|js)"
    ],
    preset: "ts-jest",
    // turn off console.log
    silent: true,
    runner: "jest-serial-runner",
    testEnvironment: "node",
    reporters: ["default", "jest-junit"],
    // collectCoverage: true,
    collectCoverageFrom: ["src/**/*.{ts,js}", "!**/node_modules/**"]
};