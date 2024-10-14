"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ReactMarkdown from "react-markdown";

export default function Imprint() {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    fetch("/datenschutzerklaerung.md")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((text) => setMarkdownContent(text))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 pt-14">
        <div className="container mx-auto max-w-4xl px-4 py-8 md:py-16">
          <Card className="bg-white dark:bg-stone-900">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-green-700 dark:text-yellow-500">
                Datenschutzerklärung
              </CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
