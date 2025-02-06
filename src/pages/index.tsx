import { api } from "~/utils/api";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "~/components/ui/button";

export default function Home() {
  const hello = api.post.hello.useQuery({ message: "1" });
  const apiUtils = api.useUtils();
  const handleInvalidateQuery = async () => {
    await apiUtils.post.hello.invalidate();
  };
  const { setTheme } = useTheme();

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex gap-2">
          <Button size={"icon"} onClick={() => setTheme("dark")}>
            <Moon />
          </Button>
          <Button size={"icon"} onClick={() => setTheme("light")}>
            <Sun />
          </Button>
        </div>
        <h1 className="text-primary text-3xl">Hello world</h1>
      </main>
    </>
  );
}
