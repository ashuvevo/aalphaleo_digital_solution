import Link from "next/link";

type ActionLink = {
  href: string;
  label: string;
};

type ServicePageTemplateProps = {
  eyebrow?: string;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  ctaTitle: string;
  ctaDescription: string;
  primaryAction: ActionLink;
  secondaryAction: ActionLink;
  children?: React.ReactNode;
};

function isInternalHref(href: string) {
  return href.startsWith("/");
}

function ActionButton({
  action,
  className,
}: {
  action: ActionLink;
  className: string;
}) {
  if (isInternalHref(action.href)) {
    return (
      <Link href={action.href} className={className}>
        {action.label}
      </Link>
    );
  }

  return (
    <a href={action.href} className={className}>
      {action.label}
    </a>
  );
}

export function ServicePageTemplate({
  eyebrow = "Service",
  title,
  description,
  features,
  benefits,
  ctaTitle,
  ctaDescription,
  primaryAction,
  secondaryAction,
  children,
}: ServicePageTemplateProps) {
  return (
    <>
      <section className="section-shell py-16 sm:py-20">
        <div className="surface-card p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {description}
          </p>
        </div>
      </section>

      <section className="section-shell pb-10 sm:pb-12">
        <article className="surface-card p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">Service Description</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            {description}
          </p>
        </article>
      </section>

      <section className="section-shell pb-16 sm:pb-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="surface-card p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">Key Features</h2>
            <ul className="mt-6 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm text-slate-600 sm:text-base">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="surface-card p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">Benefits</h2>
            <ul className="mt-6 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-sm text-slate-600 sm:text-base">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {children}

      <section className="section-shell pb-20 sm:pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 px-6 py-12 text-white sm:px-10">
          <div className="absolute -right-14 -top-14 h-52 w-52 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-16 left-8 h-48 w-48 rounded-full bg-orange-200/20 blur-2xl" />

          <div className="relative max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl">{ctaTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-orange-100 sm:text-base">
              {ctaDescription}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionButton
                action={primaryAction}
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-orange-700 transition hover:-translate-y-0.5"
              />
              <ActionButton
                action={secondaryAction}
                className="rounded-xl border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
