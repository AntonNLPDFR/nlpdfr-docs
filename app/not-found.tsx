import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[99vh] px-2 py-8 flex flex-col gap-3 items-start">
      <div>
        <h2 className="text-5xl font-bold">404</h2>
        <p className="text-muted-foreground">Deze pagina kon niet worden gevonden.. heb je de juiste link?</p>
      </div>

      <Link href="/" className={buttonVariants({})}>
        Terug naar het veilige gebied
      </Link>
    </div>
  );
}
