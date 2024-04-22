import { BackgroundBeams } from "../components/ui/background-beams";
import frierenNotFull from "../../public/output_image-removebg.png";
export default function Home() {
  return (
    <div className="h-svh">
      <div>
        <BackgroundBeams />
      </div>

      <div
        className="absolute inset-0 z-5 "
        style={{
          backgroundImage: `url(${frierenNotFull.src})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      />
    </div>
  );
}
