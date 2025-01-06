import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import type { JSONResponse } from "@/types";
import { z } from "zod";

export const contactRouter = createTRPCRouter({
  createContectFormSubmission: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string(),
        message: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const emailResponse = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "c4bbd2e8-73f8-471f-9f65-27a027febcfc",
            name: input.name,
            email: input.email,
            message: input.message,
            subject: "New Contact Form Submission",
          }),
        });

        // help me tell typescript that this is an EmailApiResponse type
        const { data, errors }: JSONResponse<typeof input> = (await emailResponse.json()) as JSONResponse<typeof input>;

        //   const result = await emailResponse.json();
        if (emailResponse.ok) {
          const submission = await ctx.db.contactFormSubmission.create({
            data: {
              name: input.name,
              email: input.email,
              message: input.message,
            },
          });
          return submission;
        } else {
          return null;
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    }),
});
