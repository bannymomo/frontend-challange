import React from "react";

interface FooterProps {
  company: string;
}

export default function Footer({ company }: FooterProps) {
  return (
    <footer className="Footer">
      <p>Powered by {company}</p>
    </footer>
  );
}
