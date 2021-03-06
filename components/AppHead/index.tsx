import Head from "next/head";
import { APP_ROOT, SITE_DESCRIPTION, SITE_NAME } from "utils/constants";

type Props = {
  title?: string;
  description?: string;
  path?: string;
  rssPath?: string;
  ogImage?: string;
};

const AppHead: React.FC<Props> = ({
  title,
  description,
  path,
  ogImage,
  rssPath,
}) => {
  const url = path ? `${APP_ROOT}${path}` : "";

  return (
    <Head>
      <title>{title || SITE_NAME}</title>
      <meta name="description" content={description || SITE_DESCRIPTION} />
      <link rel="canonical" href={url || APP_ROOT} />
      <link
        rel="alternate"
        type="application/rss+xml"
        href={rssPath ? `${rssPath}/rss.xml` : "/rss.xml"}
      />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title ?? SITE_NAME} />
      <meta
        property="og:description"
        content={description ?? SITE_DESCRIPTION}
      />
      <meta property="og:url" content={url || APP_ROOT} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="og:image"
        content={ogImage || `${APP_ROOT}/og_image.png`}
      />
    </Head>
  );
};

export { AppHead };
