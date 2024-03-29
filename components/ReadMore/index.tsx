import Link from "next/link";

type Props = {
  slug: string;
  title?: string;
};

const ReadMore: React.FC<Props> = ({ slug, title }) => {
  return (
    <div className="text-center mt-8">
      <Link
        href={`/entry/${slug}`}
        className="text-base font-bold pb-1 border-b-2 border-gray-800 hover:border-gray-500"
        aria-label={`${title || `${slug} の記事`} の続きを読む`}
      >
        記事の続きを読む
      </Link>
    </div>
  );
};

export { ReadMore };
