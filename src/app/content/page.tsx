import dynamic from "next/dynamic";

const ClientContent = dynamic(() => import("./ClientContent"), { ssr: false });

export default function Page() {
  return <ClientContent />;
}
