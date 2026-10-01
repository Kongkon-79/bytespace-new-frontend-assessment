import Link from "next/link";
import { AuthPageLayout } from "../../_components/auth-page-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const fieldClassName =
  "mt-1.5 h-11 md:h-12 bg-white rounded-[12px] border-[#E5E6E8] text-base lg:text-lg font-normal leading-[120%] px-4 text-[13px] shadow-none placeholder:text-[#82868E]";

const SignUpForm = () => (
  <AuthPageLayout
    showcaseTitle="Sign up and come in"
    showcaseDescription="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
  >
    <form className="w-full" aria-label="Create an account">
      <p className="text-sm md:text-base lg:text-lg font-normal leading-[160%] text-secondary">Create an Account</p>
      <h1 className="mt-1 text-3xl md:text-4xl lg:text-[44px] font-semibold leading-[120%] tracking-[-0.04em] text-[#242528]">
        Welcome to
        <br />
        ByteSpace
      </h1>

      <div className="mt-7 space-y-[17px]">
        <label className="block text-xs md:text-sm leading-[120%] font-medium text-[#242528]">
          Full Name
          <Input
            name="name"
            autoComplete="name"
            placeholder="Jamie Davis"
            className={fieldClassName}
          />
        </label>
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
            autoComplete="new-password"
            placeholder="********"
            className={fieldClassName}
          />
        </label>
      </div>

      <div className="mt-5 flex justify-end">
        <Button
          type="submit"
          className="h-11 md:h-[46px] rounded-full bg-primary px-[18px] text-sm md:text-base lg:text-lg leadig-[120%] font-medium text-[#242528] hover:bg-primary-hover"
        >
          Continue
        </Button>
      </div>
      <p className="mt-6 md:mt-10 lg:mt-20 text-center text-sm md:text-base leading-[120%] font-normal text-[#4B4C53] ">
        Already have an account?{" "}
        <Link href="/login" className="text-secondary hover:underline">
          Login
        </Link>
      </p>
    </form>
  </AuthPageLayout>
);

export default SignUpForm;
