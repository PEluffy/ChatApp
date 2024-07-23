import React, { useEffect, useState } from "react";

interface User {
  Name: string;
  Password: string;
}
enum MessageType {
  ZERO,
  ONE,
}
interface UserWithMessageType {
  User: User;
  MessageType: MessageType;
}
export const LoginPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (user) {
      const socket = new WebSocket("wss://localhost:7247/ws");
      socket.onopen = () => {
        console.log("WebSocket connection opened.");
        const UserWithMessageType: UserWithMessageType = {
          User: user,
          MessageType: MessageType.ZERO,
        };
        socket.send(JSON.stringify(UserWithMessageType));
      };
      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log(data);
        if (data.MessageType === MessageType.ONE) {
          if (data.Sucess === true) {
            //redirect to the chat page
          }
        }
        // const message = JSON.parse(event.data);
        // console.log(message);
        // if (message.MessageType === MessageType.ONE) {
        //   console.log(message);
        //redirect to the next messaging page
        // }
      };

      socket.onclose = () => {
        console.log("WebSocket connection closed.");
      };

      socket.onerror = (error) => {
        console.error("WebSocket error: ", error);
      };
      return () => {
        socket.close();
      };
    }
  }, [user]);
  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    if (username && password) {
      setUser({ Name: username, Password: password });
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "name") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleLogin} method="POST">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="test"
                required
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            LETS SIGNUP
          </a>
        </p>
      </div>
    </div>
  );
};
