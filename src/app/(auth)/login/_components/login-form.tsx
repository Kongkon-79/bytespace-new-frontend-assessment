import Link from "next/link";
import { FaGoogle } from "react-icons/fa6";
import { AuthPageLayout } from "../../_components/auth-page-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaFacebook } from "react-icons/fa6";

const fieldClassName =
  "mt-1.5 h-11 md:h-12 bg-white rounded-[12px] border-[#E5E6E8] text-base lg:text-lg font-normal leading-[120%] px-4 text-[13px] shadow-none placeholder:text-[#82868E]";

const LoginForm = () => (
  <AuthPageLayout
    showcaseTitle="Sign in with ease"
    showcaseDescription="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
  >
    <form className="w-full" aria-label="Sign in">
      <p className="text-sm md:text-base lg:text-lg font-normal leading-[160%] text-secondary">Sign In</p>
      <h1 className="mt-1 text-3xl md:text-4xl lg:text-[44px] font-semibold leading-[120%] tracking-[-0.04em] text-[#242528]">
        Welcome Back
      </h1>

      <div className="mt-7 space-y-[17px]">
        <label className="block text-xs md:text-sm leading-[120%] font-medium text-[#242528]">
          Email
          <Input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="designer@example.com"
            className={fieldClassName}
          />
        </label>
        <label className="block text-xs md:text-sm leading-[120%] font-medium text-[#242528]">
          Password
          <Input
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="********"
            className={fieldClassName}
          />
        </label>
      </div>

      <div className="mt-[18px] flex justify-end">
        <Button
          type="submit"
         className="h-11 md:h-[46px] rounded-full bg-primary px-[18px] text-sm md:text-base lg:text-lg leadig-[120%] font-medium text-[#242528] hover:bg-primary-hover"
        >
          Sign In
        </Button>
      </div>

      <div className="mt-10 flex items-center gap-3 text-xs text-slate-400 lg:mt-[59px]">
        <span className="h-px flex-1 bg-[#D1D1D1]" />
        <span className="text-[#888888] font-normal text-sm md:text-base lg:text-lg leading-[160%]">or</span>
        <span className="h-px flex-1 bg-[#D1D1D1]" />
      </div>
      <div className="mt-5 flex justify-center gap-3 lg:mt-[23px]">
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Continue with Facebook"
          className="size-[52px] rounded-[18px] border-[#D1D1D1]"
        >
          <FaFacebook className="size-5"/>
        </Button>
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Continue with Google"
          className="size-[52px] rounded-[18px] border-slate-200"
        >
          <FaGoogle className="size-5" />
        </Button>
      </div>
      <p className="mt-10 text-center text-sm md:text-base font-normal leading-[160%] text-[#888888] lg:mt-[54px]">
        New user?{" "}
        <Link href="/sign-up" className="text-secondary text-sm md:text-base font-normal leading-[160%] hover:underline">
          Create an account
        </Link>
      </p>
    </form>
  </AuthPageLayout>
);

export default LoginForm;
