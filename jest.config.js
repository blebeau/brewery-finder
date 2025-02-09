
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(test).ts?(x)"],
  transform: {
    "^.+\\.(js|ts)$": "ts-jest",
  },
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(scss|sass|css)$": "identity-obj-proxy"
  },
  transformIgnorePatterns: [
    "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.js$",
    "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.ts$",
    "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.tsx$",
  ],
}