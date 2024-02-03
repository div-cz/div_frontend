import Image from 'next/image'
import { Card, CardProps } from '@/app/ui/Card'

export default function Home() {
  const imageData: CardProps = {
    imageSize: 'medium',
    imageSrc: '/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg',
    imageAlt: 'Barbie',
    title: 'Barbie',
    titleEng: 'Barbie',
    description:
      'Žít v Zemi Barbie znamená být dokonalou bytostí na dokonalém …',
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Card
          imageSize={imageData.imageSize}
          imageSrc={imageData.imageSrc}
          imageAlt={imageData.imageAlt}
          title={imageData.title}
          titleEng={imageData.titleEng}
          description={imageData.description}
        />
      </div>
    </main>
  )
}
