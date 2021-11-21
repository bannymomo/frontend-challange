import React from "react";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="Header">
      <span className="app-name">{title}</span>
    </header>
  );
}
