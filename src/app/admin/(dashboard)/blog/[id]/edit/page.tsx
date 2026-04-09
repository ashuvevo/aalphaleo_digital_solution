import { BlogEditorForm } from "@/components/admin/BlogEditorForm";

export default function EditBlogPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-900">Edit Blog Post</h2>
      <div className="mt-6">
        <BlogEditorForm postId={params.id} />
      </div>
    </section>
  );
}
