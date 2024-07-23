
using System.Net.WebSockets;
using System.Runtime.CompilerServices;
using System.Text.Json;
using System.Text.Json.Serialization;
using ChatAppServer;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var webSocketOptions = new WebSocketOptions
{
    KeepAliveInterval = TimeSpan.FromMinutes(1)
};

app.UseWebSockets(webSocketOptions);


app.MapGet("/", () => "Hello World!");
app.Use(async (context, next) =>
{
    if (context.Request.Path == "/ws")
    {
        if (context.WebSockets.IsWebSocketRequest)
        {
            Console.WriteLine("requst from cliet");
            using var webSocket = await context.WebSockets.AcceptWebSocketAsync();
            // string receivedMsg = await WebsocketManager.ReceiveMessage(webSocket);
            // Console.WriteLine("received msg", receivedMsg);
            bool login = await WebsocketManager.HandleWebsocket(webSocket);
            if (login)
            {
                Console.WriteLine("user added");
                WebsocketManager.AddWebSocket(webSocket);
                LoginResponse loginResponse = new(login);
                string jsonString = JsonSerializer.Serialize(loginResponse);
                Console.WriteLine(jsonString);

                //send data through websocket making instance  of LoginRespose
                WebsocketManager.SendMessageAsync(webSocket, jsonString);
            }
            else
            {
                Console.WriteLine("user verification failed");
                WebsocketManager.CloseWebSocket(webSocket);
            }
            // await WebsocketManager.SendMessage(webSocket,

            // );

        }
        else
        {
            context.Response.StatusCode = StatusCodes.Status400BadRequest;
        }
    }
    else
    {
        await next(context);
    }

});
app.Run();

