import type { PropsWithChildren } from "react";

export const ScrollableLayout = ({ children }: PropsWithChildren) => {
  return <div className="h-full w-full overflow-y-scroll">{children}</div>;
};
