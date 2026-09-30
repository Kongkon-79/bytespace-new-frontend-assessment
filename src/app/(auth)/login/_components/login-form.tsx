import Link from "next/link";
import { FaFacebookF, FaGoogle } from "react-icons/fa6";
import { AuthPageLayout } from "../../_components/auth-page-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const fieldClassName = "mt-1.5 h-[38px] rounded-[10px] border-slate-200 px-4 text-[13px] shadow-none placeholder:text-slate-400";

const LoginForm = () => (
  <AuthPageLayout
    showcaseTitle="Sign in with ease"
    showcaseDescription="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
  >
    <form className="w-full" aria-label="Sign in">
      <p className="text-xs text-secondary">Sign In</p>
      <h1 className="mt-1 text-[32px] font-bold leading-[1.2] tracking-[-0.04em] text-[#24242b]">Welcome Back</h1>

      <div className="mt-7 space-y-[17px]">
        <label className="block text-[11px] font-medium text-[#24242b]">
          Email
          <Input name="email" type="email" autoComplete="email" placeholder="designer@example.com" className={fieldClassName} />
        </label>
        <label className="block text-[11px] font-medium text-[#24242b]">
          Password
          <Input name="password" type="password" autoComplete="current-password" placeholder="********" className={fieldClassName} />
        </label>
      </div>

      <div className="mt-[18px] flex justify-end">
        <Button type="submit" className="h-[34px] rounded-full bg-primary px-[18px] text-[13px] font-medium text-slate-950 hover:bg-primary-hover">Sign In</Button>
      </div>

      <div className="mt-[59px] flex items-center gap-3 text-xs text-slate-400">
        <span className="h-px flex-1 bg-slate-200" />
        <span>or</span>
        <span className="h-px flex-1 bg-slate-200" />
      </div>
      <div className="mt-[23px] flex justify-center gap-3">
        <Button type="button" variant="outline" size="icon" aria-label="Continue with Facebook" className="size-[52px] rounded-[18px] border-slate-200"><FaFacebookF className="size-5" /></Button>
        <Button type="button" variant="outline" size="icon" aria-label="Continue with Google" className="size-[52px] rounded-[18px] border-slate-200"><FaGoogle className="size-5" /></Button>
      </div>
      <p className="mt-[54px] text-center text-xs text-slate-500">New user? <Link href="/sign-up" className="text-secondary hover:underline">Create an account</Link></p>
    </form>
  </AuthPageLayout>
);

export default LoginForm;
