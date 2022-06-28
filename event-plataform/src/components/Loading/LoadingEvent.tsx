import { IconLoading } from "./IconLoading";
export function LoadingEvent() {
  return (
    <div className="my-auto mx-10 sm:mx-auto flex flex-col justify-center items-center">
      <div className="text-center rounded border border-green-500 py-9 px-9 bg-green-500 text-xl">
        <p>Clique em alguma aula para começar o evento</p>
      </div>
      <IconLoading size={100}/>
    </div>
  )
}
