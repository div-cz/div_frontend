"use client";
import { Card } from "@/app/ui/Card";
import { Navigation } from "@/app/ui/Navigation";
import { HeroSection } from "@/app/ui/HeroSection";
import { SectionHeading } from "@/app/ui/SectionHeading";
import { FooterSection } from "@/app/ui/FooterSection";
import { movies, figures } from "@/app/lib/mockData";
import Lada from "@/app/ui/Lada";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col items-center px-24">
        <HeroSection />
        {/* <Lada /> */}
        <SectionHeading title={"Filmy"} />
        <div className={"flex flex-wrap gap-4"}>
          {/* TODO: remove index as key*/}
          {movies.map((movie, index) => (
            <Card
              key={index}
              imageSize={movie.imageSize}
              imageSrc={movie.imageSrc}
              imageAlt={movie.imageAlt}
              title={movie.title}
              titleEng={movie.titleEng}
              description={movie.description}
            />
          ))}
        </div>
        <SectionHeading title={"Výročí osobností"} />
        <div className="flex flex-wrap gap-4">
          {/* TODO: remove index as key*/}
          {figures.map((figure, index) => (
            <Card
              key={index}
              imageSize={figure.imageSize}
              imageSrc={figure.imageSrc}
              imageAlt={figure.imageAlt}
              title={figure.title}
              titleEng={figure.titleEng}
              description={figure.description}
            />
          ))}
        </div>
      </main>
      <FooterSection />
    </>
  );
}
