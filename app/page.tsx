
import { protectServer } from "@/features/auth/utils";


export default async function Home() {
  await protectServer();

  return (
    <div>
      Logged In
    </div>
  );
}
