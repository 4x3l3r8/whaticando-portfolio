"use client";

import { useState } from "react";

import { api } from "@/trpc/react";
import styles from "../index.module.css";

export function LatestPost() {
  const [latestPost] = api.post.getLatest.useSuspenseQuery();

  const utils = api.useUtils();
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const createPost = api.post.create.useMutation({
    onSuccess: async () => {
      await utils.post.invalidate();
      setName("");
      setContent("");
    },
  });

  return (
    <div className={styles.showcaseContainer}>
      {latestPost ? (
        <p className={styles.showcaseText}>Your most recent post: {latestPost.title}</p>
      ) : (
        <p className={styles.showcaseText}>You have no posts yet.</p>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          createPost.mutate({ name, content });
        }}
        className={styles.form}
      >
        <input type="text" placeholder="Title" value={name} onChange={(e) => setName(e.target.value)} className={styles.input} />
        <textarea placeholder="Title" value={content} onChange={(e) => setContent(e.target.value)} className={styles.input} />
        <button type="submit" className={styles.submitButton} disabled={createPost.isPending}>
          {createPost.isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
