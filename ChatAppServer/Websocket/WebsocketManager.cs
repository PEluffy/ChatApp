using System.Net.WebSockets;
using System.Runtime.CompilerServices;
using System.Text;
namespace ChatAppServer
{
    public class WebsocketManager
    {
        public static Dictionary<string, WebSocket> _webSockets = new Dictionary<string, WebSocket>();
        public static void AddWebSocket(WebSocket ws)
        {
            string id = GetConnectionID();
            _webSockets.Add(id, ws);
        }
        public string GetId(WebSocket ws)
        {
            return _webSockets.FirstOrDefault(x => x.Value == ws).Key;
        }
        public static WebSocket GetWebSocketWithId(string id)
        {
            return _webSockets[id];
        }
        public static void RemoveWebSocket(string id)
        {
            _webSockets.Remove(id);
        }
        private static string GetConnectionID()
        {
            return Guid.NewGuid().ToString("N");
        }
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

        public static async void SendMessageAsync(WebSocket ws, string message)
        {
            Console.WriteLine(message);
            var messageBytes = Encoding.UTF8.GetBytes(message);
            var messageSegment = new ArraySegment<byte>(messageBytes);
            await ws.SendAsync(
                messageSegment, WebSocketMessageType.Text, true, CancellationToken.None);
        }

        public static async void CloseWebSocket(WebSocket ws)//user login websocket close
        {
            await ws.CloseAsync(WebSocketCloseStatus.NormalClosure, string.Empty, CancellationToken.None);
        }
    }
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