import { authPath } from "./docs/auth.path";
import { scrapPath, scrapsPath } from "./docs/scraps.path";
import { userPath, usersPath } from "./docs/users.path";
import { createScrapSchema } from "./schemas/create-scrap.schema";
import { createUserSchema } from "./schemas/create-user.schema";
import { scrapSchema } from "./schemas/scrap.schema";
import { userSchema } from "./schemas/user.schema";

export default {
  info: {
    title: "Trabalho final docs",
    description: "Minha documentação da API",
    version: "3.0.0",
  },
  openapi: "3.0.0",
  servers: [
    {
      url: "/api",
    },
  ],
  paths: {
    "/users": usersPath,
    "/users/{username}": userPath,
    "/auth": authPath,
    "/scraps": scrapsPath,
    "/scraps{uid}": scrapPath,
  },
  schemas: {
    user: userSchema,
    createUser: createUserSchema,
    scrap: scrapSchema,
    createScrap: createScrapSchema,
  },
};
