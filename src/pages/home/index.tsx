import { Header, PageContainer } from "../../components";
import { List } from "./list";

export function Home() {
  return (
    <div className="mt-8 min-h-[100vh]">
      <PageContainer>
        <Header />

        <List />
      </PageContainer>
    </div>
  );
}
