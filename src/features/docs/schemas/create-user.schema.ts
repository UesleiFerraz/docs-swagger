export const createUserSchema = {
  required: ["username", "password"],
  properties: {
    username: {
      type: "string",
      summary: "Nome do usuario",
      example: "nome-de-teste",
    },
    password: {
      type: "string",
      summary: "Senha do usuario",
      example: "senhaultrasecreta",
    },
  },
};
