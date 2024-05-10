import About from "@/components/about/about";
import OurDesc from "@/components/about/our-desc";
import Banner from "@/components/banner";
import Branches from "@/components/branches";
import Video from "@/components/video";

export default function Home() {
  return (
    <main className="">
      <Banner
        source="/assets/image/aboutImage.jpg"
        title="About School"
        description="Beersheba - Haldwani"
      />
      <About />
      <OurDesc />
      <Branches />
      <Video source="/assets/videos/video.mp4" />
    </main>
  );
}
