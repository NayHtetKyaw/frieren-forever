import { BackgroundBeams } from "@components/ui/background-beams";
import frierenNotFull from "@public/output_image-removebg.png";
import { Container, Section, Heading } from "@radix-ui/themes";
import { cn } from "@utils/cn";
import { GlowingStarsBackgroundCard } from "@components/ui/glowing-stars";
import Link from "next/link";

export default function Home() {
  return (
    <GlowingStarsBackgroundCard className={cn("relave z-10")}>
      <Container className="h-full">
        <Section>
          <Heading className="flex flex-col justify-center z-10">
            <span className="sm:text-xl md:text-2xl lg:text-5xl font-bold self-center">
              葬送のフリーレン
            </span>
            <span className="sm:text-lg md:text-xl lg:text-2xl font-bold self-center my-4">
              Beyound Journey&apos;s End
            </span>
          </Heading>
          <BackgroundBeams />
        </Section>

        <Section className=" flex justify-center h-[100px] p-6">
          <Link
            href="/characters"
            className=" z-10 relative border-2 border-white h-[65px] w-[200px] rounded-lg text-center p-2 hover:text-black hover:bg-[#ffff]"
          >
            CLICK TO SEE
            <br></br>EVERY CHARACTERS
          </Link>
        </Section>


        <Section
          className="absolute inset-0 z-5 "
          style={{
            backgroundImage: `url(${frierenNotFull.src})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        />
      </Container>
    </GlowingStarsBackgroundCard>
  );
}
