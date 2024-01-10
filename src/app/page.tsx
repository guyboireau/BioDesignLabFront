import TagList from "@/components/TagList";

export default function Home() {
  return (
    <div className="container mx-auto p-24 flex-1 bg-green-300">
      <h1>Blog</h1>
      <TagList />
    </div>
  );
}
