import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { Input } from "../components/ui/Input";
import Button from "../components/ui/Button";
import Logo from "../components/ui/Logo";
import ThemeToggle from "../components/ui/ThemeToggle";
import AuthAside from "../components/auth/AuthAside";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const fillDemo = () =>
    setForm({ email: "alex@timetoprogram.com", password: "Test@1234" });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(form);
      toast.success("Welcome back!");
      navigate(location.state?.from?.pathname || "/dashboard", {
        replace: true,
      });
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen">
      <div className="absolute right-4 top-4 z-20">
        <ThemeToggle size="sm" />
      </div>
      <div className="flex w-full items-center justify-center px-4 py-10 lg:w-1/2">
        <div className="w-full max-w-sm animate-in">
          <Link
            to="/"
            className="mb-8 flex items-center justify-center gap-2.5 font-semibold"
          >
            <Logo size="lg" />
          </Link>

          <div className="card rounded-3xl p-8 shadow-[var(--shadow-soft)]">
            <h1 className="font-display text-2xl font-semibold tracking-tight">
              Welcome back
            </h1>
            <p className="mt-1.5 text-sm text-muted">
              Log in to your AI workspace.
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <Input
                id="email"
                label="Email"
                type="email"
                placeholder="you@company.com"
                autoComplete="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <Input
                id="password"
                label="Password"
                type="password"
                placeholder="••••••••"
                autoComplete="current-password"
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <Button
                type="submit"
                size="lg"
                className="w-full"
                loading={loading}
              >
                Log in
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="w-full"
                onClick={fillDemo}
              >
                Use demo account
              </Button>
            </form>
          </div>

          <p className="mt-5 text-center text-sm text-muted">
            New here?{" "}
            <Link
              to="/register"
              className="font-semibold text-brand-600 hover:text-brand-500"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>

      <AuthAside
        title="Welcome back to Taskora AI"
        subtitle="Log in and pick up right where you and your team left off."
      />
    </div>
  );
};

export default Login;
