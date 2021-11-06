export const usersPath = {
  post: {
    tags: ["Users"],
    summary: "Cria um usuario",
    requestBody: {
      description: "Corpo do usuario que deve ser criado",
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
        description: "Quando o usuario é criado com sucesso",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/user",
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
      409: {
        description:
          "Quando o nome de usuario enviado ja existe no nosso banco de dados",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                error: {
                  type: "string",
                  description: "Descrição do erro",
                  example: "Username already exists",
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

export const userPath = {
  get: {
    tags: ["Users"],
    summary: "Buscar",
    parameters: [
      {
        name: "username",
        in: "path",
        description: "Nome do usuário",
        required: true,
        type: "string",
      },
    ],
    responses: {
      200: {
        description: "Quando o nome de usuário é encontrado",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/user",
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
