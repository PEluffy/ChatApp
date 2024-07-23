namespace ChatAppServer
{
    public class User
    {
        public string Name { get; set; }
        public string Password { get; set; }

        public User() { }
        public User(string name, string password)
        {
            this.Name = name;
            this.Password = password;
        }
        public static List<User> _users = new List<User>
        {
            new() { Name = "user1", Password = "password1" },
            new() { Name = "user2", Password = "password2" },
            new() { Name = "user3", Password = "password3" },
            new() { Name="pk",Password="pk1"},
        };
    }
}