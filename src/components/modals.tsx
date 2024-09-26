"use client";

import { useEffect, useState } from "react";
import CategoryModal from "./category-modal";

export const Modals = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <CategoryModal />
    </>
  );
};
