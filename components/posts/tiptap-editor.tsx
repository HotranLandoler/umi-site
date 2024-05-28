import { Editor, EditorContent } from "@tiptap/react";
import { List, ListOrdered } from "lucide-react";

import { Toggle } from "../ui/toggle";

type EditorProps = {
  editor: Editor | null;
};

type FormatState = "on" | "off";

export default function TipTapEditor({ editor }: EditorProps) {
  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}

function MenuBar({ editor }: EditorProps) {
  if (!editor) {
    return;
  }

  return (
    <header className="mb-4 flex gap-2">
      <Toggle
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        data-state={getFormatState("heading", { level: 1 })}>
        标题1
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        data-state={getFormatState("heading", { level: 2 })}>
        标题2
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        data-state={getFormatState("bold")}>
        B
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        data-state={getFormatState("bulletList")}>
        <List />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        data-state={getFormatState("orderedList")}>
        <ListOrdered />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        data-state={getFormatState("codeBlock")}>
        {"</>"}
      </Toggle>
    </header>
  );

  function getFormatState(
    stateName: string,
    attributes?: { level: number },
  ): FormatState {
    if (!editor || !editor.isActive(stateName, attributes)) {
      return "off";
    }
    return "on";
  }
}
