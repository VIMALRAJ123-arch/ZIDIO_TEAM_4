import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ComicSpeechBubble } from "@/components/comic-speech-bubble"

export default function CollectionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <div className="w-full bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900 py-12">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold text-white text-center">Hero Collections</h1>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12">
        {/* Featured Collection */}
        <div className="relative mb-16">
          <div className="absolute -top-8 left-8 z-10">
            <ComicSpeechBubble className="transform -rotate-3">
              <p className="text-lg font-bold">New Arrivals!</p>
            </ComicSpeechBubble>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.jpg?height=400&width=1200&text=Featured+Collection"
              alt="Featured Collection"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col items-center justify-end p-8 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">Cosmic Defenders</h2>
              <p className="text-xl text-white/90 max-w-2xl mb-6">
                Our latest collection inspired by the guardians of the galaxy and cosmic heroes.
              </p>
              <Button size="lg" className="bg-yellow-400 text-blue-950 hover:bg-yellow-300">
                Explore Collection
              </Button>
            </div>
          </div>
        </div>

        {/* All Collections */}
        <div className="space-y-16">
          {[
            {
              name: "Cosmic Defenders",
              description: "Inspired by the guardians of the galaxy and cosmic heroes.",
              image: "/placeholder.jpg?height=300&width=600&text=Cosmic+Defenders",
              products: 12,
            },
            {
              name: "City Guardians",
              description: "Dedicated to the vigilantes who protect our cities from the shadows.",
              image: "/collection2.jpg?height=300&width=600&text=City+Guardians",
              products: 15,
            },
            {
              name: "Legendary Warriors",
              description: "Celebrating the mythical heroes with godlike powers and ancient weapons.",
              image: "/collection3.jpg?height=300&width=600&text=Legendary+Warriors",
              products: 10,
            },
            {
              name: "Tech Innovators",
              description: "For those who use their genius and technology to fight evil.",
              image: "/collection4.jpg?height=300&width=600&text=Tech+Innovators",
              products: 8,
            },
            {
              name: "Elemental Forces",
              description: "Heroes who harness the power of nature and the elements.",
              image: "/collection5.jpg?height=300&width=600&text=Elemental+Forces",
              products: 9,
            },
          ].map((collection, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-8 items-center">
              <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src={collection.image || "/placeholder.jpg"}
                    alt={collection.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">{collection.name}</h2>
                <p className="text-lg text-muted-foreground">{collection.description}</p>
                <p className="text-muted-foreground">{collection.products} products in this collection</p>
                <Button asChild>
                  <Link href={`/collections/${i}`}>View Collection</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Limited Editions */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-10">Limited Edition Collections</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Artist Series",
                description: "Exclusive designs by renowned comic artists.",
                image: "/placeholder.jpg?height=300&width=300&text=Artist+Series",
              },
              {
                name: "Vintage Heroes",
                description: "Classic designs inspired by the golden age of comics.",
                image: "/placeholder.jpg?height=300&width=300&text=Vintage+Heroes",
              },
              {
                name: "Crossover Event",
                description: "Special edition tees featuring hero team-ups.",
                image: "/placeholder.jpg?height=300&width=300&text=Crossover+Event",
              },
            ].map((edition, i) => (
              <Card key={i} className="overflow-hidden border-primary/20">
                <div className="relative h-[250px]">
                  <Image src={edition.image || "/placeholder.jpg"} alt={edition.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{edition.name}</h3>
                  <p className="text-muted-foreground mb-4">{edition.description}</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/collections/limited/${i}`}>Explore</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
