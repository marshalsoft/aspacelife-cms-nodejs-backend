export const HeaderDocucment = {
    "/get-header": {
      get: {
        summary: "get list of all header.",
        description: "get list of all header.",
        produces: [
          "application/json"
        ],
        responses: {
          200: {
            description: "OK"
          },
        },
        operationId: "header",
        tags: [
          "header"
        ],
        consumes: [
          "multipart/form-data"
        ],
        parameters: []
      }
    }
  }
  export const UpdateHeaderDocucment = {
    "/update-header": {
      patch: {
        summary: "Update header.",
        description: "Update header.",
        produces: [
          "application/json"
        ],
        responses: {
          200: {
            description: "OK"
          },
        },
        operationId: "header",
        tags: [
          "header"
        ],
        consumes: [
          "multipart/form-data"
        ],
        parameters: []
      }
    }
  }
