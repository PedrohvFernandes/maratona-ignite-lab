import { useParams } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { LoadingEvent } from '../components/Loading/LoadingEvent'
import { Sidebar } from '../components/Sidebar'
import { Video } from '../components/Video/Video'

export function Event() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <Video lessonSlug={slug} /> : <LoadingEvent />}
        <Sidebar />
      </main>
      <Footer />
    </div>
  )
}
