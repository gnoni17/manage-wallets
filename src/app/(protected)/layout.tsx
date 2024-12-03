import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/AppSidebar";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="w-full">
        <div className="py-2 px-4">
          <SidebarTrigger />
        </div>

        <div className="px-4">{children}</div>
      </main>
    </SidebarProvider>
  );
}
