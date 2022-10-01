import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  text: string;
  href: string;
}

const Tab: React.FC<Props> = ({ text, href }) => {
  const router = useRouter();

  const buildTextStyles = (isActive: boolean): string => {
    const base = "text-xl";
    return isActive
      ? `${base} font-bold text-white`
      : `${base} text-gray-light`;
  };

  return (
    <Link href={href} passHref>
      <div className="cursor-pointer rounded-lg px-3 py-1 transition-colors ease-in-out hover:bg-gray-dark">
        <span className={buildTextStyles(router.pathname === href)}>
          {text}
        </span>
      </div>
    </Link>
  );
};

export default Tab;
