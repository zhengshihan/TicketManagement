import LoginForm from "./(components)/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/Dashboard");

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <LoginForm />
      <div className="mt-2 text-center">
        <h5 className="text-lg font-medium">Default User Account:</h5>
        <p className="text-sm">
          Email: <span className="font-bold">user@gmail.com</span> <br />
          Password: <span className="font-bold">password</span>
        </p>
        <h5 className="mt-4 text-lg font-medium">Default Admin Account:</h5>
        <p className="text-sm">
          Email: <span className="font-bold">admin@gmail.com</span> <br />
          Password: <span className="font-bold">password</span>
        </p>
      </div>
    </main>
  );
}
