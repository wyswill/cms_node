/*
 * @LastEditors: wyswill
 * @Description: 文件描述
 * @Date: 2020-10-10 10:19:51
 * @LastEditTime: 2020-10-10 11:02:44
 */
import { WsResponse } from "@nestjs/websockets";
import { WebSocketGateway } from "@nestjs/websockets/decorators/socket-gateway.decorator";
import { SubscribeMessage } from "@nestjs/websockets/decorators/subscribe-message.decorator";
const { wsPort } = require("../../package.json");
@WebSocketGateway(wsPort, { transports: ["websocket"] })
export class SystemProvider {

  @SubscribeMessage("events")
  onEvent(client, data: any): WsResponse<any> {
    const event = 'events';
    return { event, data };
  }
}
