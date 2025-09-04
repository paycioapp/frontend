// hooks/usePost.ts
import { useState } from "react";
import toast from "react-hot-toast";

function usePost<T>() {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [repo_error, setError] = useState<Error | null>(null);

  const postData = async (url: string,body: object, headers = { "Content-Type": "application/json" }) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);

      const result = await res.json();
      setData(result);
      return result;
    } catch (err: unknown) {
      const message =
      err instanceof Error ? err.message : "Something went wrong. Please try again.";
      toast.error(message)
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, repo_error, postData };
}

export default usePost;
