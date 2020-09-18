import { createConnection } from "typeorm";

export const databaseProviders = [
  {
    provide: "DbConnectionToken",
    useFactory: async () =>
      await createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "123456",
        database: "cms",
        entities: [__dirname + "/entitys/*.entity{.ts,.js}"],
        synchronize: true,
      }),
  },
];
