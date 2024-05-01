import { BackgroundBeams } from "@components/ui/background-beams";
import frierenNotFull from "@public/output_image-removebg.png";
import { Container, Section, Heading } from "@radix-ui/themes"
import Link from "next/link";


export default function Home() {
  return (
    <Container className="h-full">
      <Section>
        <Heading className="flex flex-col justify-center h-96">
          <span className="sm:text-xl md:text-2xl lg:text-5xl font-bold self-center"> 葬送のフリーレン</span>
          <span className="sm:text-lg md:text-xl lg:text-2xl font-bold self-center"> Beyound Journey's End</span>
        </Heading>
        <BackgroundBeams />
      </Section>

  <section className=" flex justify-center h-[100px] ">
  <Link href="/aura" className=" z-10 relative border-2 border-white h-[65px] w-[140px] rounded-lg text-center p-2 hover:text-black hover:bg-[#ffff]" >
    
      CLICK TO SEE #1 WAIFU

</Link>
  </section>

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
