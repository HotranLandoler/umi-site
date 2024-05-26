"use client";

import { useEditor, EditorContent, Content } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

type Props = {
  content?: Content;
};

export default function TiptapRenderer({
  content = "<p>Hello World! 🌎️</p>",
}: Props) {
  const editor = useEditor({
    editable: false,
    extensions: [StarterKit],
    content,
    editorProps: {
      attributes: {
        class: "prose max-w-none",
      },
    },
  });

  return <EditorContent editor={editor} />;
}
