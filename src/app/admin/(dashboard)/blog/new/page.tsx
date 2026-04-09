import { BlogEditorForm } from "@/components/admin/BlogEditorForm";

export default function NewBlogPage() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-900">Create Blog Post</h2>
      <div className="mt-6">
        <BlogEditorForm />
      </div>
    </section>
  );
}
