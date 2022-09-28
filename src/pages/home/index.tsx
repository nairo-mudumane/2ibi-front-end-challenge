import { PageContainer } from "../../components";
import { List } from "./list";

export function Home() {
  return (
    <div className="mt-8 min-h-[100vh]">
      <PageContainer>
        <div className="!mt-0 my-6 p-2 text-gray1 !sticky !top-2 !bg-white1 border border-blue2 shadow-sm rounded-md transition hover:shadow-md hover:border-blue1 md:p-4">
          header
        </div>

        <List />
      </PageContainer>
    </div>
  );
}
