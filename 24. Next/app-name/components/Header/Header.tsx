import { ROUTER } from "@/router/router.enum";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <Link href={ROUTER.ABOUT}>ABOUT</Link>
      <br />
      <Link href={ROUTER.HOME}>HOME</Link>
    </header>
  );
};

export default Header;
