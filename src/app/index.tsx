import React from "react";
import { RouterProvider } from "./providers/router";
import { QueryProvider } from "./providers/query";

export const Application: React.FC = () => {
  return (
    <QueryProvider>
      <RouterProvider />
    </QueryProvider>
  );
};
