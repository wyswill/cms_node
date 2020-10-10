import { Module } from "@nestjs/common";
import { SystemProvider } from "./system.provider";
import { SystemService } from "./system.service";

@Module({
  providers: [SystemService, SystemProvider],
})
export class SystemModule {}
