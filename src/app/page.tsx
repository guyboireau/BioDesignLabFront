import CategoryList from "@/components/CategoryList";
import TagList from "@/components/TagList";

export default function Home() {
  return (
    <div className="container">
      <h1>Blog</h1>
      <div className="flex gap-4">
        <CategoryList className="flex-1" />
        <TagList className="flex-1" />
      </div>
    </div>
  );
}
