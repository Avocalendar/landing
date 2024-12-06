"use client"

import DockLive from "./dock-live"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const Hero = () => {
  return (
    <div className="relative flex h-full max-w-full items-center justify-center overflow-hidden rounded-lg bg-background p-5 sm:p-10 mt-5 sm:mt-20">
      <section className="flex flex-col items-center justify-center space-y-5 sm:space-y-10">
        <div className="w-full text-center px-4 sm:px-0">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-semibold leading-tight text-neutral-900 dark:text-neutral-100">
            Soyez les premiers informés de ce qui arrive !
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-neutral-600 dark:text-neutral-300">
            <b>KALEXA</b> : l’app qui manquait à la <b>confraternité</b>.
          </p>
          <form
            className="mt-4 flex flex-col items-center justify-center gap-4 w-full mx-auto py-5 max-w-full "
            action="#"
            method="post"
          >
            <Input
              type="email"
              placeholder="avocat@gmail.com"
              className="w-full lg:max-w-[400px] sm:w-[300px] md:w-[350px] lg:w-[400px] min-w-0 h-[45px] flex-1 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 dark:focus:ring-yellow-400"
              required
            />
            <Button
              className="w-full lg:max-w-[400px] sm:w-[300px] md:w-[350px] lg:w-[400px]"
              size="lg"
            >
              Tenez moi au courant !
            </Button>
            {/* <div className="w-full flex justify-center"> */}
            {/* <p className="mt-4 text-lg sm:text-xl text-neutral-600 dark:text-neutral-300">
             Supported platforms ⚡️ 
          </p> */}

            {/* </div> */}
            <p className=" text-sm sm:text-lg text-neutral-600 dark:text-neutral-300">
              Suivez nous sur les réseaux sociaux ⚡️
            </p>
            <DockLive />
          </form>
        </div>
      </section>
    </div>
  )
}

export default Hero
