import { ContentEditor } from "@/components/admin/ContentEditor";

export default function AdminContentPage() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-900">Website Content</h2>
      <p className="mt-2 text-sm text-slate-600">
        Edit homepage hero text, services, Shopify pricing, about section, contact details, and CTA blocks.
      </p>
      <div className="mt-6">
        <ContentEditor />
      </div>
    </section>
  );
}
