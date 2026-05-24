import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import { Login } from "./Login/login";
import { ForgotPassword } from "./Login/forgot-password";
import ResetCode from "./Login/reset-code";
import { Register } from "./Register/register";
import { LandingPage } from "./LandingPage/landing-page";
import { ChatPage } from "./AIChatPage/chat-page";
import { Dashboard } from "./Dashboard/dashboard";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password-code",
    element: <ResetCode />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/chat-page",
    element: <ChatPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
