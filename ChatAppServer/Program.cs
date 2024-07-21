
using System.Net.WebSockets;
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

