'use client'

import React, { MouseEvent, ReactNode, HTMLAttributes } from "react";
import Link, { LinkProps } from "next/link";
import { UrlObject } from "url";

import isNothing from "@/utils/isNothing";

const prepareClasses = (list: Array<any>) => {
  return list
    .filter((item) => typeof item === "string" && item?.length > 0)
    .join(" ")
    .trim();
};

interface MyLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  current?: boolean;
  endIcon?: ReactNode;
  hidden?: boolean;
  label?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  startIcon?: ReactNode;
  style?: React.CSSProperties;
  target?: string;
  type?: string;
  variant?: string;
  colors?: string;
  icon?: ReactNode;
  href?: string;
}

const MyLink: React.FC<MyLinkProps> = ({
  children,
  className,
  current,
  endIcon,
  hidden,
  label,
  onClick,
  startIcon,
  style,
  target,
  type,
  variant,
  colors,
  icon,
  href,
  ...linkProps
}) => {
  if (isNothing(href)) {
    return <>{children}</>;
  }

  const classes = prepareClasses([className, variant]);
  const ariaAttributes = current !== undefined ? { "aria-current": current ? "page" : undefined } : {};

  const attrs: HTMLAttributes<HTMLAnchorElement> = {
    ...(classes && { className: classes }),
    ...ariaAttributes,
    ...(style && { style }),
    hidden,
  };

  if (onClick) {
    attrs.onClick = onClick;
  }

  return target ? (
    <a {...linkProps} {...attrs} target={target} href={href as string}>
      {children}
    </a>
  ) : (
    <Link {...linkProps} {...attrs} prefetch={false} passHref href={href!}>
      {children}
    </Link>
  );
};

export default MyLink;
