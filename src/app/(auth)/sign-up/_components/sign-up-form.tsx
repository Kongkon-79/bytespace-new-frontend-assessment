import Link from "next/link";
import { AuthPageLayout } from "../../_components/auth-page-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const fieldClassName = "mt-1.5 h-[38px] rounded-[10px] border-slate-200 px-4 text-[13px] shadow-none placeholder:text-slate-400";

const SignUpForm = () => (
  <AuthPageLayout
    showcaseTitle="Sign up and come in"
    showcaseDescription="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
  >
    <form className="w-full" aria-label="Create an account">
      <p className="text-xs text-secondary">Create an Account</p>
      <h1 className="mt-1 text-[32px] font-bold leading-[1.2] tracking-[-0.04em] text-[#24242b]">Welcome to<br />ByteSpace</h1>

      <div className="mt-7 space-y-[17px]">
        <label className="block text-[11px] font-medium text-[#24242b]">
          Full Name
          <Input name="name" autoComplete="name" placeholder="Jamie Davis" className={fieldClassName} />
        </label>
        <label className="block text-[11px] font-medium text-[#24242b]">
          Email
          <Input name="email" type="email" autoComplete="email" placeholder="designer@example.com" className={fieldClassName} />
        </label>
        <label className="block text-[11px] font-medium text-[#24242b]">
          Password
          <Input name="password" type="password" autoComplete="new-password" placeholder="********" className={fieldClassName} />
        </label>
      </div>

      <div className="mt-[17px] flex justify-end">
        <Button type="submit" className="h-[34px] rounded-full bg-primary px-[18px] text-[13px] font-medium text-slate-950 hover:bg-primary-hover">Continue</Button>
      </div>
      <p className="mt-[91px] text-center text-xs text-slate-500">Already have an account? <Link href="/login" className="text-secondary hover:underline">Login</Link></p>
    </form>
  </AuthPageLayout>
);

export default SignUpForm;
