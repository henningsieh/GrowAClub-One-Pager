"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw"; // Import rehype-raw for handling <br /> tags in md file

import privacyAsMarkDown from "@/assets/datenschutz.md";

export default function Imprint() {
  const markdownRef = useRef<HTMLDivElement>(null);

  // opens links from privacy .md file in new tabs
  useEffect(() => {
    if (markdownRef.current) {
      const links = markdownRef.current.querySelectorAll("a");
      links.forEach((link) => {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      });
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 pt-14">
        <div className="container mx-auto max-w-4xl px-4 py-8 md:py-16">
          <Card className="bg-white dark:bg-stone-900">
            <CardHeader>
              <h1 className="text-2xl font-bold text-green-700 dark:text-yellow-500">
                Datenschutzerklärung
              </h1>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <div ref={markdownRef}>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {privacyAsMarkDown}
                </ReactMarkdown>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
