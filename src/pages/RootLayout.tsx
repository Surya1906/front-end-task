import AppHeader from "@/components/app-header";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <TanstackQueryProvider>
      <SidebarProvider>
        <AppSidebar />
        <main className="px-2 py-2 w-full h-screen">
          <div className="px-4 border-l border-r border-b rounded shadow-md w-full h-full">
            <AppHeader />
            {children}
          </div>
        </main>
      </SidebarProvider>
    </TanstackQueryProvider>
  );
};

export default RootLayout;
