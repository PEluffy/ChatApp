using Microsoft.AspNetCore.Server.IIS.Core;

namespace ChatAppServer
{
    public class LoginResponse
    {
        public MessageType MessageType
        {
            get;
            set;
        }
        public bool Success { get; set; }

        public LoginResponse()
        {

        }
        public LoginResponse(bool Success)
        {
            this.MessageType = MessageType.ONE;
            this.Success = Success;
        }
    }

}
