import CategoryList from "@/components/CategoryList";
import TagList from "@/components/TagList";

export default function Home() {
  return (
    <div className="container mx-auto p-24 flex-1 bg-dark-blue">
      <h1>Blog</h1>
      <div className="flex gap-4">
        <CategoryList className="flex-1" />
        <TagList className="flex-1" />
      </div>
    </div>
  );
}
