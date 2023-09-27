import { Suspense } from "react";

import WelcomeMsg from "@/components/WelcomeMsg";
import WelcomeMsgFallback from "@/components/WelcomeMsgFallback";
import CollectionList from "@/components/CollectionList";

export default async function Home() {
  return (
    <>
      <Suspense fallback={<WelcomeMsgFallback />}>
        <WelcomeMsg />
      </Suspense>
      <Suspense fallback={<div>Loading collections...</div>}>
        <CollectionList />
      </Suspense>
    </>
  );
}