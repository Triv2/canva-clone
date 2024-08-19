import { protectServer } from "@/features/auth/utils";
import Editor from "@/features/editor/components/editor";

interface EditorProjectIdPageProps {}

const EditorProjectIdPage = async () => {
  await protectServer();
  return <Editor />;
};
export default EditorProjectIdPage;
