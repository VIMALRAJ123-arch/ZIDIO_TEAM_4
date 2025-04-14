import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingCart, Star, Truck, RotateCcw, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ComicSpeechBubble } from "@/components/comic-speech-bubble"
import { CurrencyFormatter } from "@/components/currency-formatter"

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = params.id

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Images */}
          <div className="lg:w-1/2 space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg border border-blue-800">
              <Image
                src={`/Tshirt1.jpg?height=600&width=600&text=Hero+${productId}`}
                alt={`Hero T-Shirt ${productId}`}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4">
                <ComicSpeechBubble position="right" className="transform rotate-6">
                  New Arrival!
                </ComicSpeechBubble>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[0,1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="relative aspect-square overflow-hidden rounded-lg border border-blue-800 cursor-pointer hover:border-yellow-400"
                >
                  <Image
                    src={`/Tshirt${i+1}.jpg?height=150&width=150&text=View+${i+1}`}
                    alt={`Product view ${i+1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:w-1/2 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-white">{`Cosmic Hero Tee #${productId}`}</h1>
              <div className="flex items-center mt-2 space-x-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-white/70">128 reviews</span>
                </div>
                <span className="text-sm text-white/70">SKU: SH-{productId.padStart(4, "0")}</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl font-bold text-white"><CurrencyFormatter amount={1999}/></div>
              <p className="text-sm text-white/70">Tax included. Shipping calculated at checkout.</p>
            </div>

            <p className="text-white/80">
              Embrace your inner hero with our premium quality superhero-inspired t-shirt. Made from 100% organic
              cotton, this comfortable and stylish tee features a stunning design inspired by the cosmic wonders of the
              universe and the heroic spirit that lives within us all.
            </p>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Size</label>
                <div className="flex flex-wrap gap-2">
                  {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                    <Button
                      key={size}
                      variant="outline"
                      className="border-blue-800 text-white hover:border-yellow-400 hover:bg-transparent"
                      size="sm"
                    >
                      {size}
                    </Button>
                  ))}
                </div>
                <p className="text-sm text-white/70">Size Guide</p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Color</label>
                <div className="flex gap-2">
                  {["blue", "black", "purple", "red"].map((color) => (
                    <div
                      key={color}
                      className="w-8 h-8 rounded-full cursor-pointer border-2 border-transparent hover:border-yellow-400"
                      style={{ backgroundColor: color }}
                      title={color.charAt(0).toUpperCase() + color.slice(1)}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Quantity</label>
                <Select defaultValue="1">
                  <SelectTrigger className="w-24 bg-blue-900/30 border-blue-800 text-white">
                    <SelectValue placeholder="1" />
                  </SelectTrigger>
                  <SelectContent className="bg-blue-900 border-blue-800 text-white">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-yellow-400 text-blue-950 hover:bg-yellow-300 flex-1">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                <Heart className="mr-2 h-4 w-4" />
                Add to Wishlist
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-blue-800">
              <div className="flex items-center text-white/80">
                <Truck className="h-5 w-5 mr-2 text-yellow-400" />
                <span className="text-sm">Free shipping over $50</span>
              </div>
              <div className="flex items-center text-white/80">
                <RotateCcw className="h-5 w-5 mr-2 text-yellow-400" />
                <span className="text-sm">30-day returns</span>
              </div>
              <div className="flex items-center text-white/80">
                <Shield className="h-5 w-5 mr-2 text-yellow-400" />
                <span className="text-sm">Secure checkout</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full bg-blue-900/30 border-blue-800 text-white">
              <TabsTrigger
                value="description"
                className="data-[state=active]:bg-yellow-400 data-[state=active]:text-blue-950"
              >
                Description
              </TabsTrigger>
              <TabsTrigger
                value="details"
                className="data-[state=active]:bg-yellow-400 data-[state=active]:text-blue-950"
              >
                Details
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="data-[state=active]:bg-yellow-400 data-[state=active]:text-blue-950"
              >
                Reviews (128)
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="description"
              className="p-6 bg-blue-900/30 border border-blue-800 rounded-b-lg text-white/80 space-y-4"
            >
              <p>
                Inspired by the cosmic wonders of the universe and the heroic spirit that lives within us all, our
                Cosmic Hero Tee is a perfect blend of style, comfort, and inspiration.
              </p>
              <p>
                Each t-shirt features a unique design that captures the essence of heroism against the backdrop of a
                starry night, reminiscent of Van Gogh's masterpiece. The swirling patterns and vibrant colors create a
                mesmerizing effect that draws the eye and sparks the imagination.
              </p>
              <p>
                Whether you're a fan of superheroes, space exploration, or simply appreciate beautiful art, this t-shirt
                is sure to become a favorite in your wardrobe. Wear it to showcase your unique style and to remind
                yourself of the hero within.
              </p>
            </TabsContent>
            <TabsContent
              value="details"
              className="p-6 bg-blue-900/30 border border-blue-800 rounded-b-lg text-white/80"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-white mb-2">Materials & Care</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>100% organic cotton</li>
                    <li>Pre-shrunk fabric</li>
                    <li>Machine wash cold with like colors</li>
                    <li>Tumble dry low</li>
                    <li>Do not iron decoration</li>
                    <li>Do not dry clean</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Features</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Unisex regular fit</li>
                    <li>Crew neck</li>
                    <li>Short sleeves</li>
                    <li>Vibrant, fade-resistant colors</li>
                    <li>Ethically sourced materials</li>
                    <li>Printed in the USA</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="reviews"
              className="p-6 bg-blue-900/30 border border-blue-800 rounded-b-lg text-white/80"
            >
              <div className="space-y-6">
                {[
                  {
                    name: "Alex M.",
                    rating: 5,
                    date: "2 weeks ago",
                    comment:
                      "Absolutely love this t-shirt! The design is even more vibrant in person, and the fabric is super comfortable. Definitely buying more colors!",
                  },
                  {
                    name: "Jamie L.",
                    rating: 4,
                    date: "1 month ago",
                    comment:
                      "Great quality and design. Fits true to size. The only reason I'm not giving 5 stars is because the color was slightly different than what I expected from the photos.",
                  },
                  {
                    name: "Taylor S.",
                    rating: 5,
                    date: "2 months ago",
                    comment:
                      "This is my third shirt from this collection and they never disappoint. The cosmic design is stunning and I get compliments every time I wear it.",
                  },
                ].map((review, i) => (
                  <div key={i} className="border-b border-blue-800 pb-6 last:border-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-white">{review.name}</h4>
                        <div className="flex items-center mt-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${star <= review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-white/60">{review.date}</span>
                    </div>
                    <p className="mt-2">{review.comment}</p>
                  </div>
                ))}
                <Button className="bg-yellow-400 text-blue-950 hover:bg-yellow-300">Read All Reviews</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[0,1, 2, 3].map((i) => (
              <Link href={`/products/${i}`} key={i} className="group">
                <div className="overflow-hidden rounded-lg border border-blue-800 bg-blue-900/30 transition-all hover:shadow-lg hover:shadow-blue-500/20">
                  <div className="relative aspect-square">
                    <Image
                      src={`/Tshirt${i+1}.jpg?height=300&width=300&text=Related+${i+1}`}
                      alt={`Related Product ${i+1}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-white">{`${[ "Captain America", "Thanos","Marvel","Spider Man"][i]} Hero Tee`}</h3>
                    <p className="text-white/90 mt-1">$29.99</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
