import { BackgroundBeams } from "@components/ui/background-beams";
import frierenNotFull from "@public/output_image-removebg.png";
import { Container, Section, Heading } from "@radix-ui/themes"


export default function Home() {
  return (
    <Container className="h-full">
      <Section>
        <Heading className="flex justify-center h-96">
          <span className="sm:text-xl md:text-2xl lg:text-5xl font-bold self-center"> 葬送のフリーレン</span>
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
  );
}
