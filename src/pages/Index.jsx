import { Button } from "@/components/ui/button";

function Index() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="text-center">
        <h1 className="text-3xl mb-4">Welcome to Your New App</h1>
        <p className="mb-4">
          This is a bare-bones application. Start building your amazing features here!
        </p>
        <Button variant="outline">Get Started</Button>
      </div>
    </main>
  );
}

export default Index;