import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {

  redirect('/enzimas')
  
  return (
    <>
      <Link className="text-2xl font-bold bg-red-500 p-4 rounded-md" href="/enzimas">Enzimas</Link>
      <Link className="text-2xl font-bold bg-red-500 p-4 rounded-md" href="/hydrafacial">Hydrafacial</Link>
      <Link className="text-2xl font-bold bg-red-500 p-4 rounded-md" href="/lunares">Lunares</Link>
    </>
  );
}

