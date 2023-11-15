import TagList from "@/components/TagList";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1>Blog</h1>
      <TagList />
      <p>This is a content to make our page longer</p>
      <div className="w-full h-screen bg-green-300"></div>
      <p>Lorem Ipsum is simply dummy text ...</p>
      <div className="w-full h-screen bg-green-300"></div>
    </div>
  );
}
