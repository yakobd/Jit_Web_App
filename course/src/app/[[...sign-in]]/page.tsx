"use client";

import Image from "next/image";
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";

const LoginPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="m-2 p-12 rounded-md shadow-2xl flex flex-col gap-2 bg-[#93C5FD] border-2"
        >
          <h1 className="text-xl text-[#083765] font-bold flex justify-center items-center gap-2">
            <Image
              src="/kdus_gebriel_gibi_logo.png"
              alt="logo"
              width={24}
              height={24}
            />
            Jit Gibi Gubae
          </h1>
          <h2 className="text-gray-400">Sign in into your account</h2>

          <Clerk.GlobalError className="text-sm text-red-400" />

          <Clerk.Field name="identifier" className="flex flex-col gap-2">
            <Clerk.Label className="text-xs text-[#083765]">
              Username
            </Clerk.Label>
            <Clerk.Input
              type="text"
              required
              className="p-2 rounded-md ring-1 ring-gray-300"
            />
            <Clerk.FieldError className="text-xs text-red-400 " />
          </Clerk.Field>

          <Clerk.Field name="password" className="flex flex-col gap-2">
            <Clerk.Label className="text-xs text-[#083765]">
              Password
            </Clerk.Label>
            <Clerk.Input
              type="password"
              required
              className="p-2 rounded-md ring-1 ring-[#FFFB15]"
            />
            <Clerk.FieldError className="text-xs text-red-400" />
          </Clerk.Field>

          <SignIn.Action
            submit
            className="bg-[#083765] text-[#FFFB15] font-bold my-1 rounded-md text-sm p-2"
          >
            {" "}
            Sign In{" "}
          </SignIn.Action>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  );
};

export default LoginPage;
