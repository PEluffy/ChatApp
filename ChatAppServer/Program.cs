
using System.Net.WebSockets;
using ChatAppServer;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var webSocketOptions = new WebSocketOptions
{
    KeepAliveInterval = TimeSpan.FromMinutes(2)
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

            await WebsocketManager.SendMessage(webSocket, "hello client");
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

