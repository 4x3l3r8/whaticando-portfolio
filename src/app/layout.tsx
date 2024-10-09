import { type Metadata } from "next";

import { Theme } from "@/theme/provider";
import { TRPCReactProvider } from "@/trpc/react";
import { Bg } from "./_components/shared";

export const metadata: Metadata = {
  title: "What I Can Do By Daniel",
  description: "My very own online portfolio. Everysingle thing about my tech career",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <body>
        <TRPCReactProvider>
          <Theme>
            <Bg>
              {children}
            </Bg>
          </Theme>
        </TRPCReactProvider>
      </body>
    </html >
  );
}
