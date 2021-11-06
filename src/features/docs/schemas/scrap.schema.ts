export const scrapSchema = {
  type: "object",
  properties: {
    uid: {
      type: "string",
      summary: "uuid do recado",
      example: "c6b72928-9b21-4974-ad44-918d4468e8e0",
    },
    title: {
      type: "string",
      summary: "Titulo do recado",
      example: "titulo-de-teste",
    },
    description: {
      type: "string",
      summary: "Descrição do recado",
      example: "descrição-de-teste",
    },
    userUid: {
      type: "string",
      summary: "uuid do usuario dono do recado",
      example: "c6b72928-9b21-4974-ad44-918d4468e8e0",
    },
    user: {
      $ref: "#/schemas/user",
    },
  },
};
