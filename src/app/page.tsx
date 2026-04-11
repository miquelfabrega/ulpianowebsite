import Hero from './_components/Hero'
import SocialProof from './_components/SocialProof'
import Outputs from './_components/Outputs'
import ParaQuien from './_components/ParaQuien'
import ComoFunciona from './_components/ComoFunciona'
import Testimonio from './_components/Testimonio'
import CtaFinal from './_components/CtaFinal'
import ScrollRevealInit from './_components/ScrollRevealInit'

export default function HomePage() {
  return (
    <>
      <ScrollRevealInit />
      <Hero />
      <SocialProof />
      <Outputs />
      <ParaQuien />
      <ComoFunciona />
      <Testimonio />
      <CtaFinal />
    </>
  )
}
