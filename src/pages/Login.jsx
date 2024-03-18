import LoginForm from "../components/auth/LoginForm";

export default function Login() {
  return (
    <main>
      <section className="container">
        <div className="w-full md:w-1/2 mx-auto bg-[#030317] p-8 rounded-md mt-12">
          <h2 className="mb-6 text-2xl font-bold">Login</h2>
          <LoginForm />
        </div>
      </section>
    </main>
  );
}
