import { LoginForm } from "@/components/auth/LoginForm";
import { GoogleOAuthButton } from "@/components/auth/GoogleOAuthButton";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-xl space-y-6">
        <h1 className="text-2xl font-bold text-center">Sign in to NeuroClass</h1>
        <GoogleOAuthButton />
        <div className="relative"><div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div><div className="relative flex justify-center text-xs uppercase"><span className="bg-white dark:bg-gray-900 px-2 text-muted-foreground">Or</span></div></div>
        <LoginForm />
      </div>
    </div>
  );
}
