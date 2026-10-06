interface LegalPageProps {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}

export function LegalPage({ title, updatedAt, children }: LegalPageProps) {
  return (
    <article className="shell pt-36 pb-24 lg:pt-44">
      <div className="mx-auto max-w-2xl">
        <p className="eyebrow">Institucional</p>
        <h1 className="display mt-6 text-4xl sm:text-5xl">{title}</h1>
        <p className="text-subtle mt-4 font-mono text-xs">
          Última atualização: {updatedAt}
        </p>
        <div className="hairline my-10" />
        <div className="prose-site">{children}</div>
      </div>
    </article>
  );
}
