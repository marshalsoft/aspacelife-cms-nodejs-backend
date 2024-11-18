export const ContactUsDocucment = {
    "/get-contacts": {
      get: {
        summary: "Get contact objects.",
        description: "Get contact objects.",
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
        operationId: "contact-us",
        tags: [
          "Contact Us"
        ],
        consumes: [
          "multipart/form-data"
        ],
        parameters: []
      }
    }
  }
  export const UpdateContactUsDocucment = {
    "/submit-query": {
      post: {
        summary: "User submit query.",
        description: "User submit query.",
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
        operationId: "contact-query",
        tags: [
           "Contact Us"
        ],
        consumes: [
          "application/json"
        ],
        parameters: [

        ]
      }
    }
  }