import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Hospital API",
      version: "1.0.0",
      description: "API documentation for Hospital system",
    },
    servers: [{ url: "http://localhost:5000", description: "Local server" }],
    components: {
      schemas: {
        User: {
          type: "object",
          properties: {
            _id: { type: "string", example: "65f1a2b3c4d5e6f7890abcde" },
            name: { type: "string", example: "John Doe" },
            email: { type: "string", example: "john@example.com" },
          },
        },
        Company: {
          type: "object",
          properties: {
            _id: { type: "string", example: "65f1a2b3c4d5e6f7890abcdf" },
            name: { type: "string", example: "Acme Ltd" },
            address: { type: "string", example: "London, UK" },
          },
        },
      },
    },
  },
  apis: ["./src/api/*.ts"],
};

export const swaggerSpec = swaggerJSDoc(options);