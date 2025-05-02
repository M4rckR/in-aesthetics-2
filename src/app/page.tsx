import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link className="text-2xl font-bold bg-red-500 p-4 rounded-md" href="/verruga">Verruga</Link>
      <Link className="text-2xl font-bold bg-red-500 p-4 rounded-md" href="/moldea">Moldeador</Link>
      <Link className="text-2xl font-bold bg-red-500 p-4 rounded-md" href="/lunares">Lunares</Link>
    </>
  );
}
