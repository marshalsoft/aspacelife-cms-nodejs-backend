const LoginDocucment = {
    "/products": {
      get: {
        summary: "get list of all products.",
        description: "get list of all products.",
        produces: [
          "application/json"
        ],
        responses: {
          200: {
            description: "OK"
          },
          schema: {
            $ref: "#/definitions/login"
          }
        },
        operationId: "products",
        tags: [
          "Products"
        ],
        consumes: [
          "multipart/form-data"
        ],
        parameters: []
      }
    }
  }
export default LoginDocucment;