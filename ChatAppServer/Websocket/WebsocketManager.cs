using System.Net.WebSockets;
using System.Net;
using System;
using System.Text;
namespace ChatAppServer
{
    public class WebsocketManager
    {
        public static async Task SendMessage(WebSocket ws, String message)
        {
            var buffer = new byte[1024 * 4];
            byte[] bytes = Encoding.UTF8.GetBytes(message);
            var receiveResult = await ws.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
            while (!receiveResult.CloseStatus.HasValue)
            {
                await ws.SendAsync(
                    new ArraySegment<byte>(bytes, 0, bytes.Length),
                    WebSocketMessageType.Text,
                        true,
                    CancellationToken.None);

                receiveResult = await ws.ReceiveAsync(
                    new ArraySegment<byte>(buffer), CancellationToken.None);
            }

        }
    }
}