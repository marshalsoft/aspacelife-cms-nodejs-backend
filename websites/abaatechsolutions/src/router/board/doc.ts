export const BoardDocucment = {
  "/get-board-members": {
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
         "Board Info"
      ],
      consumes: [
        "multipart/form-data"
      ],
      parameters: []
    }
  }
}

export const CreatNewBoardMemberDocucment = {
  "/add-new-board-member": {
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
         "Board Info"
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
          name: "position",
          in: "formData",
          description: "Enter your position",
          required: true,
          type: "string"
        },
        {
          name: "image",
          in: "formData",
          description: "Select a file",
          required: true,
          type: "string"
        }
      ]
    }
  }
}
export const UpdateBoardMemberDocucment = {
  "/update-board-member": {
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
        "Board Info"
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
          name: "image",
          in: "file",
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
          name: "position",
          in: "formData",
          description: "Enter position",
          required: true,
          type: "string"
        }
      ]
    }
  }
}