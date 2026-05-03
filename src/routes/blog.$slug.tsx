import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPost, POSTS } from "@/lib/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) {
      return { meta: [{ title: "Article — Tanish Creation" }] };
    }
    return {
      meta: [
        { title: `${post.title} — Tanish Creation Journal` },
        { name: "description", content: post.excerpt },
        { name: "keywords", content: post.keywords },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <h1 className="font-display text-5xl text-primary">Article not found</h1>
        <Link to="/blog" className="mt-6 inline-block text-accent">
          ← Back to journal
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <p className="text-destructive">{error.message}</p>
        <button onClick={reset} className="mt-4 text-accent">
          Try again
        </button>
      </div>
    </div>
  ),
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  const others = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="bg-background">
      <header className="relative pt-32 lg:pt-44 pb-20 overflow-hidden">
        <img src={post.coverImage} alt="" className="absolute inset-0 w-full h-full object-cover z-0 opacity-40" />
        <div className="absolute inset-0 bg-background/75 backdrop-blur-lg z-0" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">{post.category}</p>
          <h1 className="font-display text-4xl lg:text-7xl text-primary leading-[1] text-balance">
            {post.title}
          </h1>
          <p className="mt-6 text-lg text-foreground/75">{post.excerpt}</p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 lg:px-10 py-16">
        <div className="prose-lg space-y-6 text-lg text-foreground/85 leading-relaxed">
          {post.body.map((block: any, i: number) => {
            if (typeof block === "string") {
              return (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "first-letter:font-display first-letter:text-6xl first-letter:text-accent first-letter:float-left first-letter:mr-3 first-letter:leading-none"
                      : ""
                  }
                  dangerouslySetInnerHTML={{ __html: block }}
                />
              );
            }
            if (block.type === "h2") {
              return (
                <h2 key={i} className="font-display text-3xl text-primary mt-12 mb-4">
                  {block.content}
                </h2>
              );
            }
            if (block.type === "h3") {
              return (
                <h3 key={i} className="font-display text-2xl text-primary mt-8 mb-3">
                  {block.content}
                </h3>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={i} className="list-disc pl-6 space-y-2 my-6">
                  {block.items.map((item: string, j: number) => (
                    <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              );
            }
            if (block.type === "image") {
              return (
                <figure key={i} className="my-10">
                  <img src={block.src} alt={block.alt} className="w-full rounded-2xl object-cover shadow-soft" />
                  {block.caption && <figcaption className="text-center text-sm text-foreground/60 mt-3">{block.caption}</figcaption>}
                </figure>
              );
            }
            return null;
          })}
        </div>

        <hr className="my-16 border-border" />

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">Keep reading</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {others.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-warm transition-all"
              >
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img
                    src={p.coverImage}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl text-primary group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
