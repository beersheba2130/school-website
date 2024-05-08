import Banner from "@/components/banner";
import Video from "@/components/video";

export default function Home() {
  return (
    <main className="">
      <Banner
        source="/assets/image/aboutImage.jpg"
        title="About School"
        description="Beersheba - Haldwani"
      />
      <Video source="/assets/videos/video.mp4" />
    </main>
  );
}
