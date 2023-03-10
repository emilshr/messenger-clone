import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { LocalStorageKeys } from "src/utils/local-storage-keys";

const AppRoutes = ["#", "thread", "people", "marketplace", "archive"] as const;

export const useToggleSideBar = () => {
  const [open, setOpen] = useState<boolean>(true);
  const [currentRoute, setCurrentRoute] = useState<
    (typeof AppRoutes)[number] | undefined
  >("#");
  const { route } = useRouter();

  const toggleSideBar = useCallback(() => {
    setOpen(!open);
    localStorage.setItem(LocalStorageKeys.sideBarToggle, String(!open));
  }, [open]);

  useEffect(() => {
    const foundRoute = AppRoutes.find((appRoute) => route.includes(appRoute));
    console.debug("one");
    if (foundRoute) {
      setCurrentRoute(foundRoute);
    } else {
      setCurrentRoute("#");
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }, [route]);

  useEffect(() => {
    console.debug("two");
    const value = localStorage.getItem(LocalStorageKeys.sideBarToggle);
    if (value === null) {
      localStorage.setItem(LocalStorageKeys.sideBarToggle, "true");
      setOpen(true);
    } else {
      setOpen(value === "true");
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }, []);

  return { open, toggleSideBar, currentRoute };
};
