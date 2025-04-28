import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ComicSpeechBubble } from "@/components/comic-speech-bubble"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <div className="w-full bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900 py-12">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold text-white text-center">About SuperTees</h1>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12">
        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <Image
              src="/placeholder.jpg?height=500&width=500&text=Our+Story"
              alt="SuperTees Team"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -top-6 -right-6">
              <ComicSpeechBubble position="right" className="transform rotate-3">
                <p className="text-lg font-bold">Heroes wear our tees!</p>
              </ComicSpeechBubble>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-lg text-muted-foreground">
              SuperTees was born from a passion for superheroes and quality apparel. What started as a small project
              between comic book enthusiasts has grown into India's premier destination for superhero-themed clothing.
            </p>
            <p className="text-lg text-muted-foreground">
              Our mission is to help everyone unleash their inner hero through unique, high-quality designs that
              celebrate the cosmic wonder and extraordinary abilities we all admire in our favorite characters.
            </p>
            <p className="text-lg text-muted-foreground">
              Each SuperTee is crafted with premium materials and printed with eco-friendly inks to ensure both comfort
              and durability, just like a hero's costume.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                description:
                  "We use only premium materials and printing techniques to ensure our t-shirts are as durable as a hero's costume.",
                icon: "🌟",
              },
              {
                title: "Creativity",
                description:
                  "Our designs are created by passionate artists who bring superhero universes to life with unique artistic visions.",
                icon: "🎨",
              },
              {
                title: "Community",
                description:
                  "We believe in building a community of hero enthusiasts who share our passion for comics and pop culture.",
                icon: "👥",
              },
              {
                title: "Sustainability",
                description:
                  "Our eco-friendly production processes ensure we're protecting the planet while celebrating its heroes.",
                icon: "🌍",
              },
              {
                title: "Inclusivity",
                description:
                  "Heroes come in all shapes and sizes, and so do our t-shirts. We design for everyone who wants to embrace their inner hero.",
                icon: "🤝",
              },
              {
                title: "Fun",
                description:
                  "Above all, we believe wearing a SuperTee should bring joy and let you express your heroic side with pride.",
                icon: "😄",
              },
            ].map((value, i) => (
              <Card key={i} className="overflow-hidden border-primary/20">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Aseel", role: "Founder & CEO", avatar: "1" },
              { name: "Bhavya", role: "Creative Director", avatar: "2" },
              { name: "Tanishq", role: "Head of Operations", avatar: "3" },
              { name: "Vimal", role: "Customer Experience", avatar: "4" },
              { name: "Vasanth", role: "Customer Experience", avatar: "5" },
              { name: "Manthan", role: "Customer Experience", avatar: "6" },
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <Image
                    src={`/placeholder.jpg?height=160&width=160&text=Team+${member.avatar}`}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Universe?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our collection of superhero-inspired t-shirts and find the perfect design to unleash your inner
            hero.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/products">Shop Collection</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
