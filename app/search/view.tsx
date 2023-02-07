import Link from "next/link";
import { Suspense } from "react";

import { TABS } from "./dependency";

const dummyData = [1, 2, 3, 4, 5];

interface PageViewProps {
  tab: string | null;
}

const SearchedCollectionList = () => {
  // TODO: data fetch here

  return (
    <div className="grid grid-cols-3 gap-2 gap-y-4 py-4">
      {dummyData.map((item) => (
        <div key={item} className="aspect-square bg-gray-300">
          {""}
        </div>
      ))}
    </div>
  );
};

const SearchedArtistList = () => {
  return (
    <div className="flex flex-col gap-y-2 py-4">
      {dummyData.map((item) => (
        <div
          key={item}
          className="flex h-20 items-center gap-4 rounded border border-gray-300 px-4 py-2"
        >
          <div className="h-12 w-12 rounded-full bg-gray-300"></div>
          <div className="grow">
            <p>Artist Name</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const SearchPageView: React.FC<PageViewProps> = ({ tab }) => {
  const isArtistTab = tab === TABS[1]["path"];

  return (
    <section className="mx-auto max-w-2xl p-4">
      <h2 className="mb-4 text-lg font-bold">TRANSFORM ART</h2>
      <input
        type="text"
        placeholder="type text..."
        className="my-4 border-2 border-gray-400 p-2"
      />

      <ul className="flex justify-around border-b-2 py-4">
        {TABS.map((tab) => (
          <li key={tab.type}>
            <Link href={{ pathname: "/search/", query: { tab: tab.path } }}>
              {tab.label}
            </Link>
          </li>
        ))}
      </ul>

      <section>
        <Suspense fallback={<>Loading...</>}>
          {/* Default tab is "COLLECTION" */}
          {isArtistTab ? <SearchedArtistList /> : <SearchedCollectionList />}
        </Suspense>
      </section>
    </section>
  );
};
