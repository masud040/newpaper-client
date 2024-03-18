import RegisterForm from "../components/auth/RegisterForm";

export default function Register() {
  return (
    <main>
      <section className="container">
        <div className="w-full md:w-1/2 mx-auto bg-[#030317] p-8 rounded-md mt-12">
          <h2 className="mb-6 text-2xl font-bold">Register</h2>
          <RegisterForm />
        </div>
      </section>
    </main>
  );
}
