'use client';

// import { useLayout } from '@/hooks/use-layout';
import MainLayout from '@/layouts/mainLayout/layout';


import { useIsMounted } from '@/hooks/use-is-mounted';


export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
//   const { layout } = useLayout();
//   const isMounted = useIsMounted();

  return <MainLayout>{children}</MainLayout>;
}
