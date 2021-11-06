export const authPath = {
  post: {
    tags: ["Users"],
    summary: "Login",
    requestBody: {
      description: "Corpo do usuario para login",
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/createUser",
          },
        },
      },
    },
    responses: {
      200: {
        description: "Quando todos dados fornecidos estão corretos",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                token: {
                  type: "string",
                  description: "Token de autenticação",
                  example:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI5MzY2MzA5Zi01YmVmLTQ1MDEtOWVkNy01NmNmZTgwNDc0NTgiLCJpYXQiOjE2MzYyMjk1NzUsImV4cCI6MTYzNjIzMzE3NX0.HTp36zb8Q7jprhfl0aYK2g-j0OPBhVRjKz3jaQ10QxgS",
                },
              },
            },
          },
        },
      },
      400: {
        description: "Quando não é enviado algum dos parametros obrigatorios",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                error: {
                  type: "string",
                  description: "Descrição do erro",
                  example: "Missing param: 'nome do parametro em falta'",
                },
              },
            },
          },
        },
      },
      403: {
        description: "Quando senha fornecida esta incorreta",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                error: {
                  type: "string",
                  description: "Descrição do erro",
                  example: "password invalid",
                },
              },
            },
          },
        },
      },
      404: {
        description: "Quando o nome de usuário não é encontrado",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                error: {
                  type: "string",
                  description: "Descrição do erro",
                  example: "Data not found",
                },
              },
            },
          },
        },
      },
      500: {
        description: "Quando acontece qualquer erro desconhecido no server",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                error: {
                  type: "string",
                  description: "Descrição do erro",
                  example: "Internal server error",
                },
              },
            },
          },
        },
      },
    },
  },
};
