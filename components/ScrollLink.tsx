'use client';
import { useRouter, usePathname } from 'next/navigation';
import React from 'react';

interface ScrollLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export default function ScrollLink({ href, children, ...props }: ScrollLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      
      if (isHomepage) {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        sessionStorage.setItem('scrollTarget', targetId);
        router.push('/');
      }
      
      if (props.onClick) {
        props.onClick(e);
      }
    }
  };

  if (href.startsWith('#')) {
    return (
      <a href="/" onClick={handleClick} {...props}>
        {children}
      </a>
    );
  }

  // Fallback for non-hash links (though Next.js Link is usually preferred for those)
  return (
    <a href={href} onClick={props.onClick} {...props}>
      {children}
    </a>
  );
}
