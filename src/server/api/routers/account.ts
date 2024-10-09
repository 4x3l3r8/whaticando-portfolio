import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "@/server/api/trpc";

export const accountRouter = createTRPCRouter({
  hello: publicProcedure.input(z.object({ text: z.string() })).query(({ input }) => {
    return {
      greeting: `Hello ${input.text}`,
    };
  }),

  // create: protectedProcedure
  //   .input(z.object({ name: z.string().min(1) }))
  //   .mutation(async ({ ctx, input }) => {
  //     return ctx.db.blogPost.create({
  //       data: {
  //         title: input.name,
  //         user: { connect: { id: ctx.session.user.id } },
  //       },
  //     });
  //   }),

  // getLatest: protectedProcedure.query(async ({ ctx }) => {
  //   const post = await ctx.db.blogPost.findFirst({
  //     orderBy: { createdAt: "desc" },
  //     where: { user: { id: ctx.session.user.id } },
  //   });

  //   return post ?? null;
  // }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),

  getUserAccounts: protectedProcedure.query(({ ctx }) => {
    return ctx.db.account.findMany({
      where: { userId: ctx.session.user.id },
    });
  }),
});
