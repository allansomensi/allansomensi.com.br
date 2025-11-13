import { TheFooter } from "@/components/layout/TheFooter";
import { TheHeader } from "@/components/layout/TheHeader";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TheHeader />
      {children}
      <TheFooter />
    </>
  );
}
