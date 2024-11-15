const LoginDocucment = {
    "/newsletters": {
      get: {
        summary: "get list of all newsletter.",
        description: "get list of all newsletter.",
        produces: [
          "application/json"
        ],
        responses: {
          200: {
            description: "OK"
          },
        },
        operationId: "newsletters",
        tags: [
          "Newsletters"
        ],
        consumes: [
          "multipart/form-data"
        ],
        parameters: []
      }
    }
  }
export default LoginDocucment;