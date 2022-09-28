import React from "react";
import { CardCountry, PageContainer } from "../../components";

export function Home() {
  return (
    <PageContainer>
      <div className="mt-8 min-h-[100vh]">
        <div className="!mt-0 my-6 p-2 text-gray1 sticky top-2 bg-white1 border border-blue2 shadow-sm rounded-md transition hover:shadow-md hover:border-blue1 md:p-4">
          header
        </div>

        <div>
          <CardCountry />
        </div>
      </div>
    </PageContainer>
  );
}
