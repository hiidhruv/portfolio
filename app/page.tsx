import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageSquare, Twitter, ExternalLink, Globe } from 'lucide-react'

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="noise" />
      <main className="max-w-5xl mx-auto px-4 py-8 sm:py-16">
        {/* Hero Section */}
        <section className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-16 sm:mb-24">
          <div className="w-24 h-24 sm:w-32 sm:h-32 bg-zinc-200 shrink-0">
            <Image
              src="https://i.imgur.com/c19AS0w.jpg"
              alt="Profile picture"
              width={128}
              height={128}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div className="flex flex-col justify-between items-center sm:items-start h-auto sm:h-32 w-full">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <h1 className="text-2xl sm:text-3xl font-normal leading-none mb-1">Hey, I'm Dhruv</h1>
              <p className="text-sm sm:text-base text-zinc-500">I build stuff on the internet</p>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
              <Button 
                className="h-8 px-3 sm:px-4 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-none text-xs sm:text-sm"
                asChild
              >
                <a href="https://discord.com/users/hiidhruv" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                  @hiidhruv
                </a>
              </Button>
              <Button 
                className="h-8 px-3 sm:px-4 bg-zinc-900 hover:bg-zinc-800 text-white rounded-none text-xs sm:text-sm"
                asChild
              >
                <a href="https://twitter.com/hiidhruv" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                  @hiidhruv
                </a>
              </Button>
              <Button 
                className="h-8 px-3 sm:px-4 bg-zinc-900 hover:bg-zinc-800 text-white rounded-none text-xs sm:text-sm"
                asChild
              >
                <a href="/thebun">
                  <Globe className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                  TheBun
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-12 sm:mb-16">
          <div className="border border-zinc-800 p-4 sm:p-6">
            <p className="text-xs sm:text-sm text-zinc-400">
              I'm an engineering student who's into building digital products. Currently working on growth at shapes.inc. 
              I enjoy learning new tech and finding ways to solve real problems. When I'm not working or studying, I'm probably tinkering with some new tool or technology. I love playing and doing stuff!
            </p>
          </div>
        </section>

        {/* Fun Stuff */}
        <section>
          <h2 className="text-lg sm:text-xl border-b border-zinc-800 pb-2 mb-4 sm:mb-6">FUN STUFF</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="border border-zinc-800 p-4 sm:p-6 relative min-h-[180px]">
              <h3 className="text-sm sm:text-base mb-2">TheBun</h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                A pack of web experiments and stuff by me, mostly minor image manipulation tools like EditorBun, Monowalls, AsciiBun and more. Very Cool Must Check!
              </p>
              <div className="absolute bottom-0 right-0 p-4 sm:p-6">
                <Button 
                  className="h-7 sm:h-8 px-3 sm:px-4 bg-black hover:bg-zinc-900 text-white border-t border-l border-zinc-800 rounded-none text-[10px] sm:text-xs after:content-[''] after:absolute after:top-0 after:right-0 after:w-2 after:h-2 after:border-t after:border-r after:border-zinc-800 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-2 before:h-2 before:border-b before:border-l before:border-zinc-800"
                  asChild
                >
                  <a href="/thebun">
                    <ExternalLink className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1.5 sm:mr-2" />
                    TheBun
                  </a>
                </Button>
              </div>
            </div>

            <div className="border border-zinc-800 p-4 sm:p-6 relative min-h-[180px]">
              <h3 className="text-sm sm:text-base mb-2">shapes</h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                Meet our crew of unique companions! Say hi to Tenshi, Arie, Nala, Cirno, AI-chan and more - each with their own personality and charm.
              </p>
              <div className="absolute bottom-0 right-0 p-4 sm:p-6">
                <Button 
                  className="h-7 sm:h-8 px-3 sm:px-4 bg-black hover:bg-zinc-900 text-white border-t border-l border-zinc-800 rounded-none text-[10px] sm:text-xs after:content-[''] after:absolute after:top-0 after:right-0 after:w-2 after:h-2 after:border-t after:border-r after:border-zinc-800 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-2 before:h-2 before:border-b before:border-l before:border-zinc-800"
                  asChild
                >
                  <a href="/shapes">
                    <ExternalLink className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1.5 sm:mr-2" />
                    Meet them
                  </a>
                </Button>
              </div>
            </div>

            <div className="border border-zinc-800 p-4 sm:p-6 relative min-h-[180px]">
              <h3 className="text-sm sm:text-base mb-2">Inc Blog</h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                A blog site for services - where we share insights, updates, and stories about our journey.
              </p>
              <div className="absolute bottom-0 right-0 p-4 sm:p-6">
                <Button 
                  className="h-7 sm:h-8 px-3 sm:px-4 bg-black hover:bg-zinc-900 text-white border-t border-l border-zinc-800 rounded-none text-[10px] sm:text-xs after:content-[''] after:absolute after:top-0 after:right-0 after:w-2 after:h-2 after:border-t after:border-r after:border-zinc-800 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-2 before:h-2 before:border-b before:border-l before:border-zinc-800"
                  asChild
                >
                  <a href="/blog">
                    <ExternalLink className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1.5 sm:mr-2" />
                    Read Blog
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 sm:mt-24 text-center text-xs sm:text-sm text-zinc-600">
          <p>All rights up for sale 💸</p>
        </footer>
      </main>
    </div>
  )
}

