using System.Net.WebSockets;
using System.Text;
namespace ChatAppServer
{
    public class WebsocketManager
    {
        public static async Task<bool> HandleWebsocket(WebSocket ws)
        {
            var buffer = new byte[1024 * 4];
            var receiveResult = await ws.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
            var message = Encoding.UTF8.GetString(buffer, 0, receiveResult.Count);
            Console.WriteLine(message);
            UserWithMessageType userWithMessageType = System.Text.Json.JsonSerializer.Deserialize<UserWithMessageType>(message);
            User user = userWithMessageType.User;
            // Console.WriteLine(user.Name);
            // Console.WriteLine(user.Password);
            bool userValid = Utils.ValidateUser(user.Name, user.Password);
            if (userValid)
            {
                return true;
            }
            return false;
        }
        //     public static async Task SendMessage(WebSocket ws)
        //     {
        //         var buffer = new byte[1024 * 4];
        //         await ws.SendAsync(
        //             new ArraySegment<byte>(buffer, 0,),
        //             WebSocketMessageType.Text,
        //                 true,
        //             CancellationToken.None);

        //     }
        //     await ws.CloseAsync(
        // receiveResult.CloseStatus.Value,
        // receiveResult.CloseStatusDescription,
        // CancellationToken.None);
        // }
    }
}