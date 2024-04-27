import { BackgroundBeams } from "@components/ui/background-beams";
import frierenNotFull from "@public/output_image-removebg.png";
import { Container, Section, Heading } from "@radix-ui/themes";
import { cn } from "@utils/cn";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@components/ui/glowing-stars";

export default function Home() {
  return (
    <GlowingStarsBackgroundCard className={cn("relave z-10")}>
      <Container className="h-full">
        <Section>
          <Heading className="flex flex-col justify-center ">
            <span className="sm:text-xl md:text-2xl lg:text-5xl font-bold self-center">
              葬送のフリーレン
            </span>
            <span className="sm:text-lg md:text-xl lg:text-2xl font-bold self-center">
              Beyound Journey&apos;s End
            </span>
          </Heading>
          <BackgroundBeams />
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
