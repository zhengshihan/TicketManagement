import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (session?.user.role === "admin") {
    return <p>You are an admin, welcome!</p>;
  }

  return <p>You are not authorized to view this page!</p>;
}
