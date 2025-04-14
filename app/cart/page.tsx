"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, ShoppingBag, Trash2, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { CurrencyFormatter } from "@/components/currency-formatter"

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Cosmic Hero Tee #1",
      size: "M",
      color: "Blue",
      price: 1999,
      quantity: 2,
      image: "/Tshirt1.jpg?height=100&width=100&text=Product+1",
    },
    {
      id: 2,
      name: "Stellar Hero Tee #3",
      size: "L",
      color: "Black",
      price: 1999,
      quantity: 1,
      image: "/Tshirt2.jpg?height=100&width=100&text=Product+2",
    },
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 3000 ? 0 : 299
  const total = subtotal + shipping

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-950 to-indigo-950">
      <div className="container px-4 md:px-6 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Your Cart</h1>

        {cartItems.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              {/* Cart Items */}
              <div className="bg-blue-900/30 border border-blue-800 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-4">
                    Cart Items ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
                  </h2>

                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex flex-col sm:flex-row gap-4">
                        <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                          <Image src={item.image || "/placeholder.jpg"} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <h3 className="font-medium text-white">{item.name}</h3>
                          <p className="text-sm text-white/70">
                            Size: {item.size} | Color: {item.color}
                          </p>
                          <p className="font-semibold text-white">
                            <CurrencyFormatter amount={item.price} />
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 border-blue-800 text-white hover:bg-blue-800"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-white">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 border-blue-800 text-white hover:bg-blue-800"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="flex items-center">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-white/70 hover:text-white hover:bg-transparent"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Continue Shopping */}
              <div className="flex justify-between items-center">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/products" className="flex items-center">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Continue Shopping
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => setCartItems([])}
                >
                  Clear Cart
                </Button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <div className="bg-blue-900/30 border border-blue-800 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-4">Order Summary</h2>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-white/80">Subtotal</span>
                      <span className="text-white">
                        <CurrencyFormatter amount={subtotal} />
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">Shipping</span>
                      <span className="text-white">
                        {shipping === 0 ? "Free" : <CurrencyFormatter amount={shipping} />}
                      </span>
                    </div>
                    <Separator className="bg-blue-800" />
                    <div className="flex justify-between font-semibold">
                      <span className="text-white">Total</span>
                      <span className="text-white">
                        <CurrencyFormatter amount={total} />
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Promo Code</label>
                      <div className="flex space-x-2">
                        <Input
                          placeholder="Enter code"
                          className="bg-blue-900/50 border-blue-800 text-white placeholder:text-white/50"
                        />
                        <Button variant="outline" className="border-white text-white hover:bg-white/10">
                          Apply
                        </Button>
                      </div>
                    </div>

                    <Button className="w-full bg-yellow-400 text-blue-950 hover:bg-yellow-300">
                      Checkout
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    <p className="text-xs text-center text-white/60">Shipping and taxes calculated at checkout</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900/30 border border-blue-800 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-white mb-4">We Accept</h2>
                  <div className="flex flex-wrap gap-2">
                    {["Visa", "Mastercard", "Amex", "PayPal", "UPI", "Net Banking"].map((payment) => (
                      <div
                        key={payment}
                        className="px-3 py-1 bg-blue-900/50 border border-blue-800 rounded text-sm text-white/80"
                      >
                        {payment}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 space-y-6">
            <div className="flex justify-center">
              <ShoppingBag className="h-24 w-24 text-white/30" />
            </div>
            <h2 className="text-2xl font-semibold text-white">Your cart is empty</h2>
            <p className="text-white/70 max-w-md mx-auto">
              Looks like you haven't added any items to your cart yet. Continue shopping to find your perfect superhero
              tee!
            </p>
            <Button className="bg-yellow-400 text-blue-950 hover:bg-yellow-300">
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
