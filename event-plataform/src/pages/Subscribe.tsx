// import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Header/Logo";
import codeMockup from '../assets/image/code-mockup.png'
import { useCreateSubscriberMutation } from "../graphql/generated";
import { Footer } from "../components/Footer";
import { IconLoading } from "../components/Loading/IconLoading";


export function Subscribe(){
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent){
    event?.preventDefault();

    await createSubscriber({
      variables:{
        name,
        email
      }

    })
    
    navigate('/event')

  }

  return(
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[68.75rem] flex flex-col lg:flex lg:flex-row items-center justify-between mt-20 px-6 mx-auto">
        <div className="flex flex-col max-w-[21.875rem] lg:max-w-[580px] xl:max-w-[40rem] items-center lg:items-start justify-center text-center lg:text-left mb-8 lg:mb-0">
          <Logo/>
          <h1 className="mt-8 text-[2.125rem] xl:text-[2.5rem] leading-tight">
            Construa uma <strong className="text-blue-500"> aplicação completa</strong>, do zero, com <strong className="text-blue-500"> React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded w-full lg:w-auto">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rounded border-gray-900 px-5 h-14 placeholder-gray-300 
              focus:outline-0 focus:border focus:ring-green-300 focus:border-green-300
              hover:border-green-300 hover:border
              invalid:text-red-500 focus:invalid:border-red-500
              transition-all duration-500 ease-in-out
              text-sm
              lg:text-[100%]
              "
              type="text" 
              placeholder="Seu nome completo" 
              onChange={event => setName(event.target.value)}
              required
              />
            <input
              className="bg-gray-900 rounded border-gray-900 px-5 h-14 placeholder-gray-300 
              focus:outline-0  focus:border focus:ring-green-300 focus:border-green-300
              hover:border-green-300 transition-all duration-500 ease-in-out hover:border
              invalid:text-red-500 focus:invalid:border-red-500
              text-sm
              lg:text-[100%]
              "
              type="email" 
              placeholder="Digite seu e-mail" 
              onChange={event => setEmail(event.target.value)}
              required
              />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50 flex justify-center"
            >
             {loading ?  <IconLoading size={40}/> : "Garantir minha vaga"} 
            </button>
          </form>
        </div>
      </div>
      {/* <img src="./src/assets/image/code-mockup.png" className="mt-10" alt="" /> */}
      <img src={codeMockup} className="mt-10" alt="" />
      <div className="flex w-full bg-gray-900 px-8">
        <Footer/>
      </div>
    </div>
  )
}