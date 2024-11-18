export const LoginDocucment = {
    "/login": {
      post: {
        summary: "User login  endpoint.",
        description: "User will login via this endpoint.",
        produces: [
          "application/json"
        ],
        responses: {
          200: {
            description: "OK"
          }
        },
        operationId: "login",
        tags: [
          "User"
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
          },
          {
          name: "password",
          in: "formData",
          description: "Enter password password",
          required: true,
          type: "string"
          }
          ]
      }
    }
  }
export const RegisterDocucment = {
    "/register": {
      post: {
        summary: "register users.",
        description: "user registrations.",
        produces: [
          "application/json"
        ],
        responses: {
          200: {
            description: "OK"
          },
        },
        operationId: "register",
        tags: [
          "User"
        ],
        consumes: [
          "multipart/form-data"
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
              name: "password",
              in: "formData",
              description: "Enter password password",
              required: true,
              type: "string"
              },
              {
              name: "phoneNumber",
              in: "formData",
              description: "Enter your phoneNumber",
              required: true,
              type: "string"
              }
        ]
      }
    }
  }
export const GetAllUsersDocucment = {
    "/get-users": {
      get: {
        summary: "Get all users endpoint.",
        description: "Get all users endpoint.",
        produces: [
          "application/json"
        ],
        responses: {
          200: {
            description: "OK"
          }
        },
        operationId: "get-users",
        tags: [
          "User"
        ],
        consumes: [
          "application/json"
        ],
        parameters: [
          ]
      }
    }
  }
  
export const UpdateUsersDocucment = {
    "/update-users": {
      put: {
        summary: "Update user information endpoint.",
        description: "Update user information endpoint.",
        produces: [
          "application/json"
        ],
        responses: {
          200: {
            description: "OK"
          }
        },
        operationId: "user-update",
        tags: [
          "User"
        ],
        consumes: [
          "application/json"
        ],
        parameters: [
          {
          name: "PhoneNumber",
          in: "formData",
          description: "Enter your phone Number",
          required: true,
          type: "string"
          },
          {
          name: "avatar",
          in: "formData",
          description: "Enter your avatar",
          required: true,
          type: "string"
          },
          {
            name: "address",
            in: "formData",
            description: "Enter your address",
            required: true,
            type: "string"
            }
          ]
      }
    }
  }
export const ForgotPasswordDocucment = {
    "/forgot-password-request-token": {
      post: {
        summary: "forgot password request token endpoint.",
        description: "Forgot password endpoint.",
        produces: [
          "application/json"
        ],
        responses: {
          200: {
            description: "OK"
          }
        },
        operationId: "forgot-password",
        tags: [
          "User"
        ],
        consumes: [
          "application/json"
        ],
        parameters: [
          {
          name: "email",
          in: "formData",
          description: "Enter your email",
          required: true,
          type: "string"
          }
          ]
      }
    }
  }
export const ForgotPasswordVerifyTokenDocucment = {
    "/forgot-password-verify-token": {
      post: {
        summary: "Forgot password verify token endpoint.",
        description: "Forgot password verify token endpoint.",
        produces: [
          "application/json"
        ],
        responses: {
          200: {
            description: "OK"
          }
        },
        operationId: "very-token",
        tags: [
          "User"
        ],
        consumes: [
          "application/json"
        ],
        parameters: [
          {
          name: "otp",
          in: "formData",
          description: "Enter OTP",
          required: true,
          type: "string"
          },
          {
            name: "email",
            in: "formData",
            description: "Enter your email",
            required: true,
            type: "string"
            }
          ]
      }
    }
  }
export const ChangePasswordDocucment = {
    "/change-password": {
      post: {
        summary: "Change password verify token endpoint.",
        description: "Change password verify token endpoint.",
        produces: [
          "application/json"
        ],
        responses: {
          200: {
            description: "OK"
          }
        },
        operationId: "change-password",
        tags: [
          "User"
        ],
        consumes: [
          "application/json"
        ],
        parameters: [
          {
          name: "currentPassword",
          in: "formData",
          description: "Enter your current password",
          required: true,
          type: "string"
          },
          {
            name: "newPassword",
            in: "formData",
            description: "Enter your new password",
            required: true,
            type: "string"
            }
          ]
      }
    }
  }