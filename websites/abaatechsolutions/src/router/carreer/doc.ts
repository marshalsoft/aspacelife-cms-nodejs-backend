export const CarreerDocucment = {
  "/get-applications": {
    get: {
      summary: "Get all application.",
      description: "Get all application.",
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
        "Career"
      ],
      consumes: [
        "multipart/form-data"
      ],
      parameters: []
    }
  }
}

export const SubmitCarrerDocucment = {
  "/submit-resume": {
    post: {
      summary: "User submit career application.",
      description: "User submit career application.",
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
        "Career"
      ],
      consumes: [
        "application/json"
      ],
      parameters: [
        {
          name: "firstName",
          in: "formData",
          description: "Enter your first name",
          required: true,
          type: "string"
        },
        {
          name: "lastName",
          in: "formData",
          description: "Enter your lastName",
          required: true,
          type: "string"
        },
        {
          name: "email",
          in: "formData",
          description: "Enter your email address",
          required: true,
          type: "string"
        },
        {
          name: "resume",
          in: "formData",
          description: "Select a file",
          required: true,
          type: "string"
        },
        {
          name: "phoneNumber",
          in: "formData",
          description: "Enter your phoneNumber",
          required: true,
          type: "string"
        },
        {
          name: "role",
          in: "formData",
          description: "Enter role",
          required: true,
          type: "string"
        }
      ]
    }
  }
}