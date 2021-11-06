export const scrapsPath = {
  get: {
    tags: ["Recados"],
    summary: "Buscar todos scraps",
    parameters: [
      {
        name: "token",
        in: "header",
        description: "Token de autenticação fornecido depois do login",
        required: true,
        type: "string",
      },
    ],
    responses: {
      200: {
        description: "Quando todos dados fornecidos estão corretos",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/schemas/scrap",
              },
            },
          },
        },
      },
      401: {
        description:
          "Quando não é enviado o token ou ja foi expirado ou é invalido",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                error: {
                  type: "string",
                  description: "Descrição do erro",
                  example: "you must authenticate first",
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
  post: {
    tags: ["Recados"],
    summary: "Cria um recado",
    parameters: [
      {
        name: "token",
        in: "header",
        description: "Token de autenticação fornecido depois do login",
        required: true,
        type: "string",
      },
    ],
    requestBody: {
      description: "Corpo do recado que deve ser criado",
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/createScrap",
          },
        },
      },
    },
    responses: {
      200: {
        description: "Quando o recado é criado com sucesso",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/scrap",
            },
          },
        },
      },
      400: {
        description:
          "Quando não é enviado algum dos parametros obrigatorios do body",
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
      401: {
        description:
          "Quando não é enviado o token ou ja foi expirado ou é invalido",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                error: {
                  type: "string",
                  description: "Descrição do erro",
                  example: "you must authenticate first",
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

export const scrapPath = {
  put: {
    tags: ["Recados"],
    summary: "Atualiza um recado existente",
    parameters: [
      {
        name: "token",
        in: "header",
        description: "Token de autenticação fornecido depois do login",
        required: true,
        type: "string",
      },
      {
        name: "uid",
        in: "path",
        description: "Uuid do recado que deve ser atualizado",
        required: true,
        type: "string",
      },
    ],
    requestBody: {
      description: "Corpo do recado que deve ser atualizado",
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/createScrap",
          },
        },
      },
    },
    responses: {
      200: {
        description: "Quando o recado é atualizado com sucesso",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/scrap",
            },
          },
        },
      },
      400: {
        description:
          "Quando não é enviado algum dos parametros obrigatorios do body ou se o uuid fornecido no path é invalido",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                error: {
                  type: "string",
                  description: "Descrição do erro",
                  example:
                    "Missing param: 'nome do parametro em falta' ou Invalid param: uid",
                },
              },
            },
          },
        },
      },
      401: {
        description:
          "Quando não é enviado o token ou ja foi expirado ou é invalido",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                error: {
                  type: "string",
                  description: "Descrição do erro",
                  example: "you must authenticate first",
                },
              },
            },
          },
        },
      },
      404: {
        description: "Quando o uuid do recado não é encontrado",
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
  delete: {
    tags: ["Recados"],
    summary: "Deleta um recado existente",
    parameters: [
      {
        name: "token",
        in: "header",
        description: "Token de autenticação fornecido depois do login",
        required: true,
        type: "string",
      },
      {
        name: "uid",
        in: "path",
        description: "Uuid do recado que deve ser deletado",
        required: true,
        type: "string",
      },
    ],
    responses: {
      200: {
        description: "Quando o recado é deletado com sucesso",
        content: {
          "application/json": {
            schema: {
              type: "object",
            },
          },
        },
      },
      400: {
        description: "Quando o uuid é invalido",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                error: {
                  type: "string",
                  description: "Descrição do erro",
                  example: "Invalid param: uid",
                },
              },
            },
          },
        },
      },
      401: {
        description:
          "Quando não é enviado o token ou ja foi expirado ou é invalido",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                error: {
                  type: "string",
                  description: "Descrição do erro",
                  example: "you must authenticate first",
                },
              },
            },
          },
        },
      },
      404: {
        description: "Quando o uuid do recado não é encontrado",
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
