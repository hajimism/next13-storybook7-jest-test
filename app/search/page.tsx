"use client";

import { useSearchParams } from "next/navigation";

import { SearchPageView } from "./view";

// MEMO:
// - fetch collection list on first load
// - fetch artist list when ARTIST tab is tapped
// - cache each data
// - filter cached data by search words
export default function SearchPage() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  return <SearchPageView tab={tab} />;
}
