/*
 * @LastEditors: wyswill
 * @Description: 数据库
 * @Date: 2020-09-08 18:33:29
 * @LastEditTime: 2020-09-08 18:34:08
 */
import { Global, Module } from "@nestjs/common";
import { databaseProviders } from "./database.provider";

@Global()
@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {
}
