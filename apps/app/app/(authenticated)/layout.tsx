import { env } from "@/env";
import { auth, currentUser } from "@nerve-js/auth/server";
import { SidebarProvider } from "@nerve-js/design-system/components/ui/sidebar";
import { secure } from "@nerve-js/security";
import type { ReactNode } from "react";
import { PostHogIdentifier } from "./components/posthog-identifier";
import { GlobalSidebar } from "./components/sidebar";

type AppLayoutProperties = {
  readonly children: ReactNode;
};

const AppLayout = async ({ children }: AppLayoutProperties) => {
  if (env.ARCJET_KEY) {
    await secure(["CATEGORY:PREVIEW"]);
  }

  const user = await currentUser();
  const { redirectToSignIn } = await auth();

  if (!user) {
    redirectToSignIn();
  }

  return (
    <SidebarProvider>
      <GlobalSidebar>{children}</GlobalSidebar>
      <PostHogIdentifier />
    </SidebarProvider>
  );
};

export default AppLayout;
