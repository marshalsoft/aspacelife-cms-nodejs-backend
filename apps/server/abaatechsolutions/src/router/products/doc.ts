export const ProductListingDocucment = {
    "/get-products": {
      get: {
        summary: "get list of all products.",
        description: "get list of all products.",
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
        operationId: "get-products",
        tags: [
          "Products"
        ],
        consumes: [
          "multipart/form-data"
        ],
        parameters: []
      }
    }
  }
  export const ProductUpdateDocucment = {
    "/update-products": {
      patch: {
        summary: "update product list .",
        description: "pdate product list .",
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
        operationId: "update-products",
        tags: [
          "Products"
        ],
        consumes: [
          "application/json"
        ],
        parameters: []
      }
    }
  }