import React from "react";
import { TextField } from "../components/text-field";

import { Button } from "../components/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewPasswordSchema } from "./schema/new-password-schema";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { toast } from "react-toastify";

export const NewPassword = () => {
  const { email, otp } = useLocation().state || {};
  const navigate = useNavigate();
  const { register, watch } = useForm({
    resolver: zodResolver(NewPasswordSchema),
  });
  const onSubnit = async () => {
    if (watch("newPassword") !== watch("confirmPassword")) {
      toast.error("Passwords do not match", {
        position: "top-right",
      });
      return;
    }
    const data = {
      new_password: watch("newPassword"),
      otp,
      email,
    };
    const res = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      toast.success("Password changed successfully!", {
        position: "top-right",
      });
      navigate("/login");
    }
    if (!res.ok) {
      const errorData = await res.json();
      toast.error(errorData.detail, {
        position: "top-right",
      });
    }
  };
  return (
    <div>
      <div className="bg-[#F6F6F8] flex justify-center w-full h-screen items-center ">
        <div className="flex flex-col bg-white p-8 gap-6 justify-center items-start w-fit rounded-lg ">
          <div className="flex flex-col gap-1 justify-center items-start">
            <h3 className="font-semibold text-xl"> Change Password?</h3>
            <p className="text-[#64748B] text-justify text-md">
              Fill up details before processing.
            </p>
          </div>
          <div className="space-y-4 w-full flex flex-col justify-center items-center ">
            <TextField
              label="New Password"
              placeholder="New Password"
              {...register("newPassword")}
            />
            <TextField
              label="Confirm Password"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
            />
            <Button
              fullWidth
              onClick={onSubnit}
              className="bg-[#5030E5] text-white hover:bg-[#5030E5]/90"
            >
              {" "}
              Save{" "}
            </Button>
            <Link to="/login" className="flex text-gray-600 mx-auto">
              <ArrowLeft /> Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
