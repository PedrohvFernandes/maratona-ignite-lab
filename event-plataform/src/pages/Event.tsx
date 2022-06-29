import { useParams } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header/Header'
import { LoadingEvent } from '../components/Loading/LoadingEvent'
import { Sidebar } from '../components/Sidebar'
import { Video } from '../components/Video/Video'

export function Event() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 pt-[4.75rem]">
        {slug ? <Video lessonSlug={slug} /> : <LoadingEvent />}
        <div className="hidden xl:flex flex-initial">
          <Sidebar />
        </div>
      </main>
      <div className="flex w-full bg-gray-900 px-8">
        <Footer />
      </div>
    </div>
  )
}
