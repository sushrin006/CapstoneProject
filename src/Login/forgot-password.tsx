import { ArrowLeft, ArrowRight } from "lucide-react";
import { TextField } from "../components/text-field";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ForgotPasswordSchema,
  type ForgotPasswordSchemaType,
} from "./schema/forget-password-schema";
import { Button } from "../components/button";
import { toast } from "react-toastify";

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const { register, watch } = useForm({
    resolver: zodResolver(ForgotPasswordSchema),
  });

  const onSubmit = async () => {
    const data = {
      email: watch("email"),
    };
    const res = await fetch("/api/auth/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      toast.success("Password reset instructions sent to your email!", {
        position: "top-right",
      });
      navigate("/reset-password-code", { state: { email: data.email } });
    }
    if (!res.ok) {
      const errorData = await res.json();
      toast.error(errorData.detail, {
        position: "top-right",
      });
    }
  };

  return (
    <div className="bg-[#F6F6F8] flex justify-center w-full h-screen items-center ">
      <div className="flex flex-col bg-white p-8 gap-6 justify-center items-start w-fit rounded-lg ">
        <div className="flex flex-col gap-1 justify-center items-start">
          <h3 className="font-semibold text-2xl"> Forgot Password?</h3>
          <p className="text-[#64748B] text-justify text-md">
            Please enter your email to receive password reset instructions.
          </p>
        </div>
        <div className="space-y-4 w-full flex flex-col justify-center items-center ">
          <TextField label="Email" placeholder="Email" {...register("email")} />
          <Button
            fullWidth
            onClick={onSubmit}
            className="bg-[#5030E5] text-white hover:bg-[#5030E5]/90"
          >
            {" "}
            Next <ArrowRight />{" "}
          </Button>
          <Link to="/login" className="flex text-gray-600 mx-auto">
            <ArrowLeft /> Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};
