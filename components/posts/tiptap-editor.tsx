"use client";

import { useEditor, EditorContent, Content } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

type Props = {
  editable?: boolean;
  content?: Content;
};

export default function TiptapEditor({
  editable = true,
  content = "<p>Hello World! 🌎️</p>",
}: Props) {
  const editor = useEditor({
    editable,
    extensions: [StarterKit],
    content,
    editorProps: {
      attributes: {
        class:
          "prose max-w-none w-full rounded-md border border-input bg-background p-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      },
    },
  });

  return <EditorContent editor={editor} />;
}
