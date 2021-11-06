export const userSchema = {
  type: "object",
  properties: {
    uid: {
      type: "string",
      summary: "uuid do usuario",
      example: "c6b72928-9b21-4974-ad44-918d4468e8e0",
    },
    username: {
      type: "string",
      summary: "Nome do usuário",
      example: "nome-de-teste",
    },
  },
};
