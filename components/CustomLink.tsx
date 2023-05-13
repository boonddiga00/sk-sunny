import Link from "next/link";
import { styled } from "styled-components";

const DefaultLink = styled.a`
  all: unset;
`;

interface ICustomLink {
  href: string;
  children: React.ReactNode;
}

const CustomLink = ({ href, children }: ICustomLink) => (
  <Link href={href} passHref legacyBehavior>
    <DefaultLink>{children}</DefaultLink>
  </Link>
);

export default CustomLink;
