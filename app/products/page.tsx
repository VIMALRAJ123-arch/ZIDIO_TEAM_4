import Link from "next/link"
import Image from "next/image"
import { Filter, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { CurrencyFormatter } from "@/components/currency-formatter"

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-950 to-indigo-950">
      {/* Header Banner */}
      <div className="w-full bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900 py-12">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold text-white text-center">Shop All Heroes</h1>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-8">
        {/* Mobile Filter Button */}
        <div className="flex md:hidden justify-between items-center mb-6">
          <Button variant="outline" className="border-white text-white hover:bg-white/10">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Select>
            <SelectTrigger className="w-[180px] bg-blue-900/30 border-blue-800 text-white">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="bg-blue-900 border-blue-800 text-white">
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="hidden md:block w-64 space-y-6">
            <div className="bg-blue-900/30 border border-blue-800 rounded-lg p-4">
              <h2 className="text-lg font-semibold text-white mb-4">Filters</h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="category" className="border-blue-800">
                  <AccordionTrigger className="text-white hover:text-yellow-300">Category</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {["Men", "Women", "Kids", "Unisex"].map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox id={`category-${category}`} />
                          <label htmlFor={`category-${category}`} className="text-sm text-white cursor-pointer">
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="hero" className="border-blue-800">
                  <AccordionTrigger className="text-white hover:text-yellow-300">Hero Type</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {["Cosmic", "Vigilante", "Mutant", "Tech", "Mythical"].map((hero) => (
                        <div key={hero} className="flex items-center space-x-2">
                          <Checkbox id={`hero-${hero}`} />
                          <label htmlFor={`hero-${hero}`} className="text-sm text-white cursor-pointer">
                            {hero}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="size" className="border-blue-800">
                  <AccordionTrigger className="text-white hover:text-yellow-300">Size</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                        <div key={size} className="flex items-center space-x-2">
                          <Checkbox id={`size-${size}`} />
                          <label htmlFor={`size-${size}`} className="text-sm text-white cursor-pointer">
                            {size}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="color" className="border-blue-800">
                  <AccordionTrigger className="text-white hover:text-yellow-300">Color</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-4 gap-2">
                      {["black", "white", "red", "blue", "green", "yellow", "purple", "gray"].map((color) => (
                        <div
                          key={color}
                          className="w-6 h-6 rounded-full cursor-pointer border border-white/20"
                          style={{ backgroundColor: color }}
                          title={color.charAt(0).toUpperCase() + color.slice(1)}
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="price" className="border-blue-800">
                  <AccordionTrigger className="text-white hover:text-yellow-300">Price</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {["Under $20", "$20 - $30", "$30 - $40", "Over $40"].map((price) => (
                        <div key={price} className="flex items-center space-x-2">
                          <Checkbox id={`price-${price}`} />
                          <label htmlFor={`price-${price}`} className="text-sm text-white cursor-pointer">
                            {price}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-6 space-y-4">
                <Button className="w-full bg-yellow-400 text-blue-950 hover:bg-yellow-300">Apply Filters</Button>
                <Button variant="outline" className="w-full border-white text-white hover:bg-white/10">
                  Reset Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="hidden md:flex justify-between items-center mb-6">
              <p className="text-white">Showing 24 of 128 products</p>
              <Select>
                <SelectTrigger className="w-[180px] bg-blue-900/30 border-blue-800 text-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-blue-900 border-blue-800 text-white">
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <Link href={`/products/${i + 1}`} key={i} className="group">
                  <Card className="overflow-hidden bg-blue-900/30 border-blue-800 transition-all hover:shadow-lg hover:shadow-blue-500/20">
                    <div className="relative aspect-square">
                      <Image
                        src={`/Tshirt${i+1}.jpg?height=400&width=400&text=Hero+${i + 1}`}
                        alt={`Hero T-Shirt ${i + 1}`}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      {i % 3 === 0 && <Badge className="absolute top-2 left-2 bg-yellow-400 text-blue-950">New</Badge>}
                      {i % 5 === 0 && <Badge className="absolute top-2 left-2 bg-red-500">Sale</Badge>}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                        <Button className="bg-yellow-400 text-blue-950 hover:bg-yellow-300">Quick View</Button>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg text-white">{`${["Cosmic", "Stellar", "Galactic", "Nebula"][i % 4]} Hero Tee #${i + 1}`}</h3>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-white/90">
                          {i % 5 === 0 ? (
                            <>
                              <span className="line-through mr-2">
                                <CurrencyFormatter amount={3499} />
                              </span>
                              <CurrencyFormatter amount={2499} />
                            </>
                          ) : (
                            <CurrencyFormatter amount={2999} />
                          )}
                        </p>
                        <div className="flex">
                          {["S", "M", "L", "XL"].map((size) => (
                            <span key={size} className="text-xs text-white/70 mx-0.5">
                              {size}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 h-8 w-8 p-0">
                  <ChevronDown className="h-4 w-4 rotate-90" />
                </Button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <Button
                    key={page}
                    variant={page === 1 ? "default" : "outline"}
                    className={
                      page === 1
                        ? "bg-yellow-400 text-blue-950 hover:bg-yellow-300 h-8 w-8 p-0"
                        : "border-white text-white hover:bg-white/10 h-8 w-8 p-0"
                    }
                  >
                    {page}
                  </Button>
                ))}
                <Button variant="outline" className="border-white text-white hover:bg-white/10 h-8 w-8 p-0">
                  <ChevronDown className="h-4 w-4 -rotate-90" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
