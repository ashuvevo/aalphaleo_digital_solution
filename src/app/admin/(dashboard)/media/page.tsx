import { MediaManager } from "@/components/admin/MediaManager";

export default function AdminMediaPage() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-900">Images / Media</h2>
      <p className="mt-2 text-sm text-slate-600">
        Upload logo, website images, icons, and blog media files.
      </p>
      <div className="mt-6">
        <MediaManager />
      </div>
    </section>
  );
}
