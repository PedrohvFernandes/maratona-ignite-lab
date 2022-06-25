import classNames from 'classnames'
import {CheckCircle, Lock} from 'phosphor-react'


interface IconsParams{
  isActiveLesson: boolean;
}

export function CheckCircleComponent(props:IconsParams){
  return (
    <span className={classNames('text-sm text-blue-500 font-medium flex items-center gap-2',{
      'text-white': props.isActiveLesson,
      'text-blue-500': !props.isActiveLesson,
    })}>
      <CheckCircle size={20}/>
      Conteúdo liberado
    </span>
  )
}

export function LockComponent(){
  return (
    <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
      <Lock size={20}/>
      Em breve
    </span>
  )
}