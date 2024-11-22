export const NewsLetterDocucment = {
    "/get-newsletters": {
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
  
export const NewsLetterSubscribeDocucment = {
    "/subscribe-newsletter": {
      post: {
        summary: "User subscript to newsletters.",
        description: "User subscript to newsletters.",
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
        parameters: [
          {
          name: "email",
          in: "formData",
          description: "Enter your email address",
          required: true,
          type: "string"
          }
          ]
      }
    }
  }
  
  export const NewsLetterUnSubscribeDocucment = {
    "/unsubscribe-newsletter": {
      post: {
        summary: "User unsubscribe to newsletters.",
        description: "User unsubscribe to newsletters.",
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
        parameters: [
          {
          name: "email",
          in: "formData",
          description: "Enter your email address",
          required: true,
          type: "string"
          }
          ]
      }
    }
  }
