export const createScrapSchema = {
  required: ["title", "description", "userUid"],
  properties: {
    title: {
      type: "string",
      summary: "Titulo do recado",
      example: "titulo de teste",
    },
    description: {
      type: "string",
      summary: "Descrição do recado",
      example: "descrição de teste",
    },
  },
};
