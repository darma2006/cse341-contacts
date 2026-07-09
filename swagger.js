const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contacts API",
    description: "CSE341 Contacts API"
  },
  host: "localhost:8080",
  schemes: ["http"]
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./server.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);