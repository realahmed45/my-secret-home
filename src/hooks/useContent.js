import { useState, useEffect } from "react";

export const useContent = (contentFile) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/content/${contentFile}`);

        if (!response.ok) {
          throw new Error(`Failed to load ${contentFile}`);
        }

        const data = await response.json();
        setContent(data);
      } catch (err) {
        console.error(`Error loading ${contentFile}:`, err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [contentFile]);

  return { content, loading, error };
};
