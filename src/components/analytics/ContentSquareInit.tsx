"use client"
import { useEffect } from "react";
import { injectContentsquareScript } from '@contentsquare/tag-sdk';

export function ContentSquareInit() {
  useEffect(() => {
    injectContentsquareScript({
      siteId: "6403688",
      async: true,
      defer: false,
    });
  }, []);

  return null;
}