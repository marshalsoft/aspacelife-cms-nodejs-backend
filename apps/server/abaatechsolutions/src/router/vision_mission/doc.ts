export const VisionDocucment = {
  "/get-vision": {
    get: {
      summary: "Get vision statement.",
      description: "Get vision statement.",
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
      operationId: "get-vision",
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

export const UpdateVisonDocucment = {
  "/update-vision-statement": {
    put: {
      summary: "Update vision statement.",
      description: "Update vision statement.",
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
      operationId: "update-vision-statement",
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
        }
      ]
    }
  }
}
export const MissionDocucment = {
  "/get-mission": {
    get: {
      summary: "Get mission statement.",
      description: "Get mission statement.",
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
      operationId: "get-vision",
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

export const UpdateMissionDocucment = {
  "/update-mission-statement": {
    put: {
      summary: "Update mission statement.",
      description: "Update mission statement.",
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
      operationId: "update-vision-statement",
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
        }
      ]
    }
  }
}