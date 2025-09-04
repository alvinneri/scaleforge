import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    "https://report.development.opexa.io/graphql": {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyeDYzclJQVVc0UFdLVXpkUm8iLCJyb2xlIjoiT1BFUkFUT1IiLCJqdGkiOiI5YzE3NTE3NDkyZGVjMjM4NDk4YmUwMTMiLCJpcEFkZHJlc3MiOiIxNTguNjIuNjUuMjciLCJsb2NhdGlvbiI6IkNhZ2F5YW4gZGUgT3JvLCBQaGlsaXBwaW5lcyIsInBsYXRmb3JtIjoiMTJ1d3VSQ2NZcDFjV2lYelBZIiwic3RhdHVzIjoiQUNUSVZFIiwiaWFwIjoiMjAyNS0wOS0wNFQxMDo1MTo0MS4zMjArMDA6MDAiLCJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNzU2OTgzMTMxLCJleHAiOjE3NTcwNjk1MzF9.bqw2jhpwOPKN3R2GfgUN64gtlZ7a1T_KsYd87h4CRtY",
      },
    },
  },
  documents: ["src/**/*.tsx", "src/**/*.ts"],
  ignoreNoDocuments: true,
  generates: {
    "./src/graphql/generated/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
};

export default config;
