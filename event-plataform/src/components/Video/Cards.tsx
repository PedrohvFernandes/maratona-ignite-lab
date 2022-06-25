import { CaretRight, FileArrowDown, Image } from "phosphor-react"

interface CardsProps{
  type: 'primary' | 'secondary'
  href: string
}

export default function Cards({type, href}:CardsProps){
  return(
    <>
      {type === 'primary' ?(
        <a 
          href={href}
          className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'
        >
          <div className="bg-green-700 h-full p-6 flex items-center">
            <FileArrowDown size={40}/>
          </div>
          <div className="py-6 leading-relaxed">
            <strong className="text-2xl">Material complementar</strong>
            <p className="text-sm text-gray-200 mt-2">
             Acesse o material complementar para acelerar o seu desenvolvimento
            </p>
          </div>  
          <div className="h-full p-6 flex items-center">
            <CaretRight size={24}/>
          </div>
        </a>
      ): (
        <a 
        href={href}
        className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'
        >
          <div className="bg-green-700 h-full p-6 flex items-center">
            <Image size={40}/>
          </div>
          <div className="py-6 leading-relaxed">
            <strong className="text-2xl">Wallpapers exclusivos</strong>
            <p className="text-sm text-gray-200 mt-2">
              Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
            </p>
          </div>  
          <div className="h-full p-6 flex items-center">
            <CaretRight size={24}/>
          </div>
        </a>
      )
      }
    
    </>
  )
}