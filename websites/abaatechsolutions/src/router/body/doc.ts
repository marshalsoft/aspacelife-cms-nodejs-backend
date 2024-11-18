export const BodyDocucment = {
    "/get-body-contents": {
      get: {
        summary: "get all body contents.",
        description: "get all body contents.",
        produces: [
          "application/json"
        ],
        responses: {
          200: {
            description: "OK"
          },
          schema: {
          }
        },
        operationId: "body",
        tags: [
          "Body"
        ],
        consumes: [
          "multipart/form-data"
        ],
        parameters: []
      }
    }
  }
  export const UpdateBodyDocucment = {
    "/update-body-contents": {
      patch: {
        summary: "update body contents.",
        description: "update body contents.",
        produces: [
          "application/json"
        ],
        responses: {
          200: {
            description: "OK"
          },
          schema: {
          }
        },
        operationId: "products",
        tags: [
          "Body"
        ],
        consumes: [
          "application/json"
        ],
        parameters: []
      }
    }
  }