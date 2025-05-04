import React from "react";
import "@src/index.css";

import { Toaster } from "./components/ui/sonner";
import { ReactQueryProvider } from "@providers/ReactQueryProvider";
import { ReactRouterProvider } from "@providers/ReactRouterProvider";
import { ReactRecoilProvider } from "./providers/ReactRecoilProvider";
export const App: React.FC = () => {
  return (
    <ReactRecoilProvider>
      <ReactQueryProvider>
        <ReactRouterProvider />
        <Toaster position="top-center" />
      </ReactQueryProvider>
    </ReactRecoilProvider>
  );
};
