"use client";

import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

type RichTextEditorProps = {
  value: string;
  onChange: (value: string) => void;
};

export function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  return (
    <div className="rounded-xl border border-slate-300 bg-white">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        className="min-h-[220px] [&_.ql-editor]:min-h-[180px]"
      />
    </div>
  );
}
