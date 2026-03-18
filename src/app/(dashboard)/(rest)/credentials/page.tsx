import { requireAuth } from "@/lib/auth-utils";

const Page = async () => {
  await requireAuth();
  return <p>Credential</p>
};

export default Page;