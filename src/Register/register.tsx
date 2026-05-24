import React from "react";
import { TextField } from "../components/text-field";
import { Button } from "../components/button";
import { useFormState } from "react-dom";
import { registerSchema, type RegisterSchema } from "./schema/register-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });
  const onsubmit = (data: RegisterSchema) => {
    console.log(data);
  };
  return (
    <div>
      <div className="bg-[#F6F6F8] flex justify-center w-full h-screen items-center flex flex-col ">
        <div className="flex flex-col gap-1 justify-center items-center">
          <h3 className="text-3xl font-bold"> Create Your Workspace</h3>
          <p className="text-sm font-light">
            {" "}
            Get started with your new workspace{" "}
          </p>
        </div>
        <div className="bg-white w-[30%] p-8 mt-4 rounded-lg">
          <section className="w-full space-y-6 p-4 mt-2">
            <form className="space-y-4" onSubmit={handleSubmit(onsubmit)}>
              <div className="space-y-4">
                <TextField
                  label="Full Name"
                  placeholder="Enter your full name"
                  {...register("fullName")}
                />
                <TextField
                  label="Email Address"
                  placeholder="Enter your email address"
                  {...register("email")}
                />
                <TextField
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  {...register("password")}
                />
              </div>
              <Button type="submit" fullWidth>
                {" "}
                Create Account
              </Button>
            </form>
          </section>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 mt-4">
          <p className="font-light text-sm"> Already have an account?</p>
          <p
            className="font-bold text-[#1745CF] cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Log In
          </p>
        </div>
      </div>
    </div>
  );
};
