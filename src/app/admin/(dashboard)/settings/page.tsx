import { SettingsEditor } from "@/components/admin/SettingsEditor";

export default function AdminSettingsPage() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-900">Website Settings</h2>
      <p className="mt-2 text-sm text-slate-600">
        Update logo path, phone, email, social links, footer content, and navigation.
      </p>
      <div className="mt-6">
        <SettingsEditor />
      </div>
    </section>
  );
}
