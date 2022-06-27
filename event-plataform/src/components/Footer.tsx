import { LogoRocket } from './LogoRocket'
export function Footer() {
  return (
    <footer className="flex justify-between items-center border-t border-gray-500 p-[2rem] bg-gray-900 w-full">
      <div className="flex items-center gap-[1.5rem]">
        <LogoRocket />

        <p>Rocketseat - Todos os diretos reservados</p>
      </div>

      <p>Políticas de privacidade</p>
    </footer>
  )
}
