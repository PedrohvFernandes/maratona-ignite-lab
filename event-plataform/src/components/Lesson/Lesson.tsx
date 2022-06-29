import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom'
import { CheckCircleComponent, LockComponent } from './Icons'
import classNames from 'classnames'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>()
  const isLessonAvailable = isPast(props.availableAt)

  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM ' de 'uuuu' • 'k'h'mm",
    {
      locale: ptBR
    }
  )
  const isActiveLesson = slug === props.slug

  return (
    <>
      {isLessonAvailable ? (
        <Link to={`/event/lesson/${props.slug}`} className="group">
          <span className="text-gray-300">{availableDateFormatted}</span>
          <div
            className={classNames(
              'rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500',
              {
                'bg-green-500': isActiveLesson
              }
            )}
          >
            <header className="flex items-center justify-between">
              <CheckCircleComponent isActiveLesson={isActiveLesson} />
              <span
                className={classNames(
                  'text-xs rounded py-[0.125rem] px-2 text-white border font-bold',
                  {
                    'border-white': isActiveLesson,
                    'border-green-300': !isActiveLesson
                  }
                )}
              >
                {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
              </span>
            </header>

            <strong
              className={classNames('mt-5 block', {
                'text-white': isActiveLesson,
                'text-gray-200 ': !isActiveLesson
              })}
            >
              {props.title}
            </strong>
          </div>
        </Link>
      ) : (
        <div>
          <span className="text-gray-300">{availableDateFormatted}</span>
          <div className="cursor-not-allowed rounded-md border border-gray-500 mb-6 mt-2 hover:not:border-green-500 focus:outline-none opacity-30">
            <div className="p-4">
              <header className="flex items-center justify-between">
                <LockComponent />
                <span className="text-xs rounded py-[0.125rem] px-2 text-white border font-bold border-green-300">
                  {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                </span>
              </header>

              <strong className="mt-5 block text-gray-200">
                {props.title}
              </strong>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
