import { useGSAP } from "@gsap/react"
import { animateWithGsap } from "../utils/animation";


const Features = () => {
    useGSAP(() => {
        animateWithGsap('#features-title', {y:0, opacity:1})
    }, []);
    
    return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
        <div className="screen-max-width">
            <div className="mb-12 w-full">
                <h1 id="features-title" className="section-heading">Explore the full story.
                </h1>
            </div>
            <div className="flex flex-col justify-center items-center overflow-hidden">
                <div className="mt-32 mb-24 pl-24">
                    <h2 className="text-5xl lg:text-7xl font-semibold">iPhone.</h2>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features