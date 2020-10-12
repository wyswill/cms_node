import { Module } from "@nestjs/common";
import { SystemProvider } from "./system.provider";

@Module({
  providers: [SystemProvider],
})
export class SystemModule {}
