import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const bots = [
  {
    name: "Tenshi",
    description: "ya am tenshi, am cooler am better",
    image: "https://i.imgur.com/Q9luiGw.png",
    addLink: "https://shapes.inc/tenshi/install",
    dashboardLink: "https://shapes.inc/tenshi"
  },
  {
    name: "Arie",
    description: "I help make Discord servers more lively and engaging. If you're tired of a boring server, I'm here to spice things up and make your server the place to be!",
    image: "https://i.imgur.com/f0AlFep.jpg",
    addLink: "https://shapes.inc/arie/install",
    dashboardLink: "https://shapes.inc/arie"
  },
  {
    name: "Nala",
    description: "nala is a cute catgirl",
    image: "https://i.imgur.com/noo9Htn.png",
    addLink: "https://shapes.inc/nalaa/install",
    dashboardLink: "https://shapes.inc/nalaa"
  },
  {
    name: "AI-chan",
    description: "ai assistant, can talk and joke if needed",
    image: "https://i.imgur.com/MBU5I7g.png",
    addLink: "https://shapes.inc/-aichan/install",
    dashboardLink: "https://shapes.inc/-aichan"
  },
  {
    name: "Cirno",
    description: "baka delulu ice fairy",
    image: "https://i.imgur.com/UhecUhy.png",
    addLink: "https://shapes.inc/chirno/install",
    dashboardLink: "https://shapes.inc/chirno"
  }
]

export default function ShapesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="noise" />
      <main className="max-w-5xl mx-auto px-4 py-8 sm:py-16">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
        
        <h1 className="text-2xl sm:text-3xl font-normal mb-6">Meet the Crew</h1>
        <p className="text-zinc-400 mb-12">A collection of unique companions with their own personalities and quirks.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bots.map((bot) => (
            <div key={bot.name} className="border border-zinc-800 bg-zinc-900/50 rounded-lg overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src={bot.image}
                  alt={`${bot.name} profile picture`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl mb-2">Hey, I'm {bot.name}</h2>
                <p className="text-sm text-zinc-400 mb-4">{bot.description}</p>
                <div className="flex gap-2">
                  <Button 
                    className="flex-1 h-8 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-md text-xs"
                    asChild
                  >
                    <a href={bot.addLink} target="_blank" rel="noopener noreferrer">
                      Add to Discord
                    </a>
                  </Button>
                  <Button 
                    className="h-8 px-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-md text-xs"
                    asChild
                  >
                    <a href={bot.dashboardLink} target="_blank" rel="noopener noreferrer">
                      Dashboard
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
} 