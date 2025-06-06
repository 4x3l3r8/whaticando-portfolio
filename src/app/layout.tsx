import { type Metadata } from "next";

import { Theme } from "@/theme/provider";
import { TRPCReactProvider } from "@/trpc/react";
import { Bg } from "./_components/shared";

export const metadata: Metadata = {
  title: "What I Can Do | Daniel Adesanya",
  description: "Daniel Adesanya - software engineer portfolio",
  icons: [{ rel: "icon", url: "https://github.com/4x3l3r8.png" }],
  openGraph: {
    images: [{ url: "https://github.com/4x3l3r8.png" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <TRPCReactProvider>
          <Theme>
            <Bg>{children}</Bg>
          </Theme>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
