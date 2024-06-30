import { Outlet } from "react-router-dom";

function SharedLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-xl">My Bare-Bones App</h1>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2023 My Bare-Bones App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SharedLayout;