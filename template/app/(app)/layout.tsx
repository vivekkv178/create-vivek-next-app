"use client";
import Link from "next/link";
import useAppLayoutState from "./useAppLayoutState";
import { AppLayout, Toaster } from "@vivekkv178/library";
import { useAppSelector } from "@/lib/reduxHooks";
import { CONSTANTS } from "@/lib/constants";

const Layout = (props: any) => {
  const { appRoutes, providerData, handleLogout } = useAppLayoutState();

  const authState = useAppSelector((state) => state.auth);

  return (
    <AppLayout
      NavigationComponent={Link}
      navbarProps={{
        navs: appRoutes,
      }}
      profileProps={{
        email: authState?.user?.email,
        name: providerData?.displayName,
        userImage: providerData?.photoURL,
        logoutHandler: handleLogout,
      }}
      sidebarProps={{
        logo: `${CONSTANTS.CDN_PATH}/ecomm-order/logo.png`,
        logoStyles: "tw-h-[50px] tw-w-3/4",
      }}
    >
      {props.children}
      <Toaster />
    </AppLayout>
  );
};

export default Layout;
