import { Helmet } from 'react-helmet-async';

export default function ResourceMeta({ title, description, path, schema }: { title: string; description: string; path: string; schema: object }) {
  const url = `https://mushbloom.uk${path}`;
  return <Helmet>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={url} />
    <meta property="og:title" content={title} /><meta property="og:description" content={description} />
    <meta property="og:url" content={url} /><meta property="og:type" content="website" /><meta property="og:site_name" content="Mushbloom" />
    <meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content={title} /><meta name="twitter:description" content={description} />
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  </Helmet>;
}