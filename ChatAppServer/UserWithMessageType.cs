using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Server.IIS.Core;


//Login data
namespace ChatAppServer
{
    public class UserWithMessageType
    {
        public User User { get; set; }
        public MessageType MessageType { get; set; }
        public UserWithMessageType() { }
        public UserWithMessageType(User user, MessageType messageType)
        {
            this.User = user;
            this.MessageType = messageType;
        }

    }
}