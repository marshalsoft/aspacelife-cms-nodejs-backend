export const BlogDocucment = {
  "/get-blogs": {
    get: {
      summary: "Get all blogs.",
      description: "Get all blogs.",
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
      operationId: "all-career",
      tags: [
        "Blog"
      ],
      consumes: [
        "multipart/form-data"
      ],
      parameters: []
    }
  }
}

export const PostBlogDocucment = {
  "/post-blog": {
    post: {
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
      operationId: "submit-resume",
      tags: [
        "Blog"
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