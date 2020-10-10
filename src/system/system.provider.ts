/*
 * @LastEditors: wyswill
 * @Description: websocket
 * @Date: 2020-10-10 10:19:51
 * @LastEditTime: 2020-10-10 11:36:05
 */
import { MessageBody, WsResponse, WebSocketGateway, SubscribeMessage, ConnectedSocket, WebSocketServer } from "@nestjs/websockets";
import { Socket } from "socket.io";
const { wsPort } = require("../../package.json");
@WebSocketGateway(wsPort, { transports: ["websocket"] })
export class SystemProvider {
  @WebSocketServer() server: Socket;
  @SubscribeMessage("events")
  onEvent(@MessageBody() data: unknown): WsResponse<any> {
    const event = "events";
    return { event, data };
  }
}
