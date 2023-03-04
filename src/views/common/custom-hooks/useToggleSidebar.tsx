import { useEffect, useState } from "react";
import { LocalStorageKeys } from "src/utils/local-storage-keys";

export const useToggleSideBar = () => {
  const [open, setOpen] = useState<boolean>(true);

  const toggleSideBar = () => {
    setOpen(!open);
    localStorage.setItem(LocalStorageKeys.sideBarToggle, String(!open));
  };

  useEffect(() => {
    const value = localStorage.getItem(LocalStorageKeys.sideBarToggle);
    console.debug({ value });
    if (value === null) {
      localStorage.setItem(LocalStorageKeys.sideBarToggle, "true");
      setOpen(true);
    } else {
      setOpen(value === "true");
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }, []);

  return { open, toggleSideBar };
};
