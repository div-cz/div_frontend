'use client'
import { Card } from '@/app/ui/Card'
import { HeroSection } from '@/app/ui/HeroSection'
import { SectionHeading } from '@/app/ui/SectionHeading'
import { movies, figures } from '@/app/lib/mockData'
import { urls } from '@/app/lib/webData'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24">
      <HeroSection />
      <SectionHeading title={'Filmy'} />
      <div className={'flex flex-wrap gap-4 justify-center'}>
        {/* TODO: remove index as key*/}
        {movies.map((movie) => {
          return (
            <Card
              key={movie.id}
              id={movie.id}
              imageSize={movie.imageSize}
              imageSrc={movie.imageSrc}
              imageAlt={movie.imageAlt}
              title={movie.title}
              titleEng={movie.titleEng}
              description={movie.description}
              redirectUrl={`${urls[0].url}/${movie.id}`}
            />
          )
        })}
      </div>
      <SectionHeading title={'Výročí osobností'} />
      <div className="flex flex-wrap gap-4 justify-center">
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
  )
}
