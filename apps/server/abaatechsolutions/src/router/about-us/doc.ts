export const AboutUsDocucment = {
  "/get-about-us": {
    get: {
      summary: "Get about us data.",
      description: "Get about us data.",
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
      operationId: "get-about-us",
      tags: [
        "About Us"
      ],
      consumes: [
        "application/json"
      ],
      parameters: []
    }
  }
}

export const UpdateAboutUsDocucment = {
  "/update-about-us": {
    patch: {
      summary: "Post a blog.",
      description: "Post a blog.",
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
      operationId: "update-about-us",
      tags: [
        "About Us"
      ],
      consumes: [
        "application/json"
      ],
      parameters: [
        {
          name: "topic",
          in: "formData",
          description: "Enter blog topic",
          required: true,
          type: "string"
        },
        {
          name: "content",
          in: "formData",
          description: "Enter content",
          required: true,
          type: "string"
        },
        {
          name: "category",
          in: "formData",
          description: "Enter blog category",
          required: true,
          type: "string"
        }
      ]
    }
  }
}