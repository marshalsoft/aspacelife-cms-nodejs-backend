export const LoginDocucment = {
    "/login": {
      post: {
        summary: "User login  endpoint.",
        description: "User will login via this endpoint.",
        produces: [
          "application/json"
        ],
        responses: {
          200: {
            description: "OK"
          }
        },
        operationId: "login",
        tags: [
          "User"
        ],
        consumes: [
          "multipart/form-data"
        ],
        parameters: [
          {
          name: "email",
          in: "formData",
          description: "Enter your email address",
          required: true,
          type: "string"
          },
          {
          name: "password",
          in: "formData",
          description: "Enter password password",
          required: true,
          type: "string"
          }
          ]
      }
    }
  }
export const RegisterDocucment = {
    "/register": {
      post: {
        summary: "register users.",
        description: "user registrations.",
        produces: [
          "application/json"
        ],
        responses: {
          200: {
            description: "OK"
          },
        },
        operationId: "register",
        tags: [
          "User"
        ],
        consumes: [
          "multipart/form-data"
        ],
        parameters: []
      }
    }
  }