import { SidebarTrigger } from "./ui/sidebar";

const AppHeader = () => {
  return (
    <header className="flex py-2 w-full items-center justify-between bg-background">
      <SidebarTrigger />
      <div className="flex items-center gap-2">
        <img
          src="https://avatars.githubusercontent.com/u/13048683?v=4"
          alt="Surya"
          className="h-8 w-8 rounded-full"
        />
      </div>
    </header>
  );
};

export default AppHeader;
