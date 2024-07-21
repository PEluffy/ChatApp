namespace ChatAppServer
{
    public class Utils
    {


        public static bool ValidateUser(string username, string password)
        {
            User? userExists = User._users.FirstOrDefault((x) => x.Name == username && x.Password == password);
            if (username == null || password == null)
            {
                return false;
            }
            else if (userExists != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}