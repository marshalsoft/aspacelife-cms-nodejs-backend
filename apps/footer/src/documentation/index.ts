import swaggerJSDoc from "swagger-jsdoc";
const swaggerDefinition = {
openapi: "3.0.0",
info: {
title: "Footer micro-service API",
version: "1.0.0",
description: "Footer micro-service documentation",
},
};
const options = {
swaggerDefinition,
apis: [], // Path to the API routes in your Node.js application
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;