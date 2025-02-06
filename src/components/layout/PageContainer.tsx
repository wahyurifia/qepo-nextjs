import React, { forwardRef } from "react";
import { cn } from "~/lib/utils";
import { HeadMetaData } from "./HeadMetaData";
import { Header } from "./Header";

type PageContainerProps = {
  withHeader?: boolean;
  withFooter?: boolean;
};

export const PageContainer = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & PageContainerProps
>(
  (
    { className, children, withHeader = true, withFooter = true, ...props },
    ref,
  ) => {
    return (
      <div className="h-full w-full">
        <HeadMetaData />
        {withHeader && <Header />}
        <main ref={ref} className={cn("flex flex-col", className)} {...props}>
          {children}
        </main>
        {withFooter && (
          <footer className="flex min-h-16 border-t-2 p-4">
            <p className="text-muted-foreground w-full text-center">
              © 2024 Fanattic. All rights reserved
            </p>
          </footer>
        )}
      </div>
    );
  },
);

PageContainer.displayName = "PageContainer";
