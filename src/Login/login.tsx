import { TextField } from "../components/text-field";

import { useForm } from "react-hook-form";
import { loginSchema, type LoginSchema } from "./schema/login-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/button";
import { toast } from "react-toastify";

export const Login = () => {
  const navigate = useNavigate();
  const { register, setError, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = async (data: LoginSchema) => {
    console.log(data);
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const errorData = await res.json();
      console.log(errorData);
      // alert(errorData.detail);
      toast(errorData.detail, {
        position: "top-right",
      });
      return;
    }
    const responseData = await res.json();
    toast.success("Login successful!", {
      position: "top-right",
      
    });
    navigate("/dashboard");
  };

  // const{}= usePost()
  return (
    <div className="bg-[#F6F6F8] flex justify-center w-full h-screen items-center ">
      <div className="bg-white w-[30%]  p-8 rounded-lg">
        <div className="flex flex-col justify-center items-center gap-2">
          <h3 className="font-bold text-3xl"> Welcome Back</h3>
          <p className="font-light text-sm">
            {" "}
            Enter your credentials to access your insights.
          </p>
        </div>
        <section className="w-full space-y-6 p-4 mt-2">
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-6">
              <TextField
                label="Email Address"
                placeholder="Enter email address"
                {...register("email")}
              />

              <TextField
                label="Password"
                type="password"
                placeholder="Enter password"
                {...register("password")}
              />
            </div>

            <Link
              to="/forgot-password"
              className="flex text-gray-400 justify-end"
            >
              Forget Password?
            </Link>

            <Button
              type="submit"
              fullWidth
              // onClick={() => navigate("/dashboard")}
            >
              Sign In
            </Button>
          </form>
        </section>

        <div className="flex flex-col justify-center items-center ">
          <p className="text-sm font-extralight"> Don't have an account?</p>
          <p
            className="font-bold text-[#1745CF] cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Register
          </p>
        </div>
      </div>
    </div>
  );
};
