import { ReactNode } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

const SiteLayout = ({ children }: { children: ReactNode }) => (
  <div className="grain min-h-screen bg-background bg-cosmic">
    <SiteHeader />
    <main>{children}</main>
    <SiteFooter />
  </div>
);

export default SiteLayout;