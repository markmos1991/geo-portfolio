
import Image from 'next/image'
import Hero from "../components/landing"
import { PageWrapper } from "./page-wrapper"

export default function Home() {
  return (
    <PageWrapper>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
    </main>
    </PageWrapper>
  )
}
