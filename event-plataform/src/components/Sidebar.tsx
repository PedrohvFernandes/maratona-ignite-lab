import { useGetLessonsQuery } from '../graphql/generated'
import { Lesson } from './Lesson/Lesson'

export function Sidebar() {
  const { data } = useGetLessonsQuery();

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map(lessons => {
          return (
            <Lesson
              title={lessons.title}
              slug={lessons.slug}
              availableAt={new Date(lessons.availableAt)}
              type={lessons.lessonType}
              key={lessons.id}
            />
          )
        })}
      </div>
    </aside>
  )
}
