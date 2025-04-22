"use client"

import { useState } from "react"
import Image from "next/image"
import { ShoppingBag, Heart, CreditCard, MapPin, Bell, LogOut, Edit, Package, ChevronRight, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("orders")
  const [selectedAvatar, setSelectedAvatar] = useState("/avtaar1.jpg?height=96&width=96&text=Hero")

  const avatarOptions = [
    { id: "avatar1", src: "/avtaar1.jpg?height=96&width=96&text=Hero+1", alt: "Superhero 1" },
    { id: "avatar2", src: "/avtaar2.jpg?height=96&width=96&text=Hero+2", alt: "Superhero 2" },
    { id: "avatar3", src: "/avtaar3.jpg?height=96&width=96&text=Hero+3", alt: "Superhero 3" },
    { id: "avatar4", src: "/avtaar4.jpg?height=96&width=96&text=Hero+4", alt: "Superhero 4" },
    { id: "avatar5", src: "/avtaar5.jpg?height=96&width=96&text=Hero+5", alt: "Superhero 5" },
    { id: "avatar6", src: "/avtaar6.jpg?height=96&width=96&text=Hero+6", alt: "Superhero 6" },
    { id: "avatar7", src: "/avtaar7.jpg?height=96&width=96&text=Hero+7", alt: "Superhero 7" },
    { id: "avatar8", src: "/avtaar8.jpg?height=96&width=96&text=Hero+8", alt: "Superhero 8" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-950 to-indigo-950">
      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-1/4">
            <Card className="bg-blue-900/30 border-blue-800 text-white">
              <CardHeader className="pb-2">
                <div className="flex flex-col items-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" className="relative rounded-full h-24 w-24 p-0 mb-4">
                        <Avatar className="h-24 w-24">
                          <AvatarImage src={selectedAvatar} alt="User Avatar" />
                          <AvatarFallback className="bg-yellow-400 text-blue-950">JD</AvatarFallback>
                        </Avatar>
                        <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                          <Edit className="h-6 w-6 text-white" />
                        </div>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Choose your superhero avatar</DialogTitle>
                        <DialogDescription>Select an avatar that represents your inner hero</DialogDescription>
                      </DialogHeader>
                      <div className="grid grid-cols-3 gap-4 py-4">
                        <RadioGroup value={selectedAvatar} onValueChange={setSelectedAvatar}>
                          {avatarOptions.map((avatar) => (
                            <div key={avatar.id} className="flex items-center space-x-2">
                              <RadioGroupItem value={avatar.src} id={avatar.id} className="sr-only" />
                              <Label
                                htmlFor={avatar.id}
                                className="cursor-pointer rounded-full overflow-hidden border-2 transition-all"
                                style={{
                                  borderColor: selectedAvatar === avatar.src ? "rgb(250 204 21)" : "transparent",
                                }}
                              >
                                <Image
                                  src={avatar.src || "/avtaar1.jpg"}
                                  alt={avatar.alt}
                                  width={80}
                                  height={80}
                                  className="rounded-full"
                                />
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                      <div className="flex justify-end">
                        <Button type="button">Save Changes</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <CardTitle className="text-xl">John Doe</CardTitle>
                  <CardDescription className="text-white/70">john.doe@example.com</CardDescription>
                  <Button variant="outline" size="sm" className="mt-4 border-white text-white hover:bg-white/10">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Profile
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <nav className="mt-6 space-y-1">
                  <button
                    className={`w-full flex items-center gap-3 rounded-md px-3 py-2 text-white ${activeTab === "orders" ? "bg-blue-800" : "hover:bg-blue-800/50"}`}
                    onClick={() => setActiveTab("orders")}
                  >
                    <ShoppingBag className="h-4 w-4" />
                    My Orders
                  </button>
                  <button
                    className={`w-full flex items-center gap-3 rounded-md px-3 py-2 text-white ${activeTab === "wishlist" ? "bg-blue-800" : "hover:bg-blue-800/50"}`}
                    onClick={() => setActiveTab("wishlist")}
                  >
                    <Heart className="h-4 w-4" />
                    Wishlist
                  </button>
                  <button
                    className={`w-full flex items-center gap-3 rounded-md px-3 py-2 text-white ${activeTab === "payment" ? "bg-blue-800" : "hover:bg-blue-800/50"}`}
                    onClick={() => setActiveTab("payment")}
                  >
                    <CreditCard className="h-4 w-4" />
                    Payment Methods
                  </button>
                  <button
                    className={`w-full flex items-center gap-3 rounded-md px-3 py-2 text-white ${activeTab === "addresses" ? "bg-blue-800" : "hover:bg-blue-800/50"}`}
                    onClick={() => setActiveTab("addresses")}
                  >
                    <MapPin className="h-4 w-4" />
                    Addresses
                  </button>
                  <button
                    className={`w-full flex items-center gap-3 rounded-md px-3 py-2 text-white ${activeTab === "notifications" ? "bg-blue-800" : "hover:bg-blue-800/50"}`}
                    onClick={() => setActiveTab("notifications")}
                  >
                    <Bell className="h-4 w-4" />
                    Notifications
                  </button>
                  <Separator className="my-2 bg-blue-800" />
                  <button className="w-full flex items-center gap-3 rounded-md px-3 py-2 text-white hover:bg-blue-800/50">
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="bg-blue-900/30 border-blue-800 text-white">
                <TabsTrigger
                  value="orders"
                  className="data-[state=active]:bg-yellow-400 data-[state=active]:text-blue-950"
                >
                  Orders
                </TabsTrigger>
                <TabsTrigger
                  value="wishlist"
                  className="data-[state=active]:bg-yellow-400 data-[state=active]:text-blue-950"
                >
                  Wishlist
                </TabsTrigger>
                <TabsTrigger
                  value="payment"
                  className="data-[state=active]:bg-yellow-400 data-[state=active]:text-blue-950"
                >
                  Payment
                </TabsTrigger>
                <TabsTrigger
                  value="addresses"
                  className="data-[state=active]:bg-yellow-400 data-[state=active]:text-blue-950"
                >
                  Addresses
                </TabsTrigger>
                <TabsTrigger
                  value="notifications"
                  className="data-[state=active]:bg-yellow-400 data-[state=active]:text-blue-950"
                >
                  Notifications
                </TabsTrigger>
              </TabsList>

              <TabsContent value="orders" className="mt-6 space-y-6">
                <Card className="bg-blue-900/30 border-blue-800 text-white">
                  <CardHeader>
                    <CardTitle>My Orders</CardTitle>
                    <CardDescription className="text-white/70">View and track your orders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow className="border-blue-800">
                          <TableHead className="text-white">Order</TableHead>
                          <TableHead className="text-white">Date</TableHead>
                          <TableHead className="text-white">Status</TableHead>
                          <TableHead className="text-white text-right">Total</TableHead>
                          <TableHead className="text-white"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          { id: "ORD-7352", date: "2023-06-12", status: "Delivered", total: 1299 },
                          { id: "ORD-7345", date: "2023-05-28", status: "Delivered", total: 899 },
                          { id: "ORD-7339", date: "2023-05-15", status: "Delivered", total: 1499 },
                        ].map((order) => (
                          <TableRow key={order.id} className="border-blue-800">
                            <TableCell className="font-medium text-white">{order.id}</TableCell>
                            <TableCell className="text-white">{order.date}</TableCell>
                            <TableCell>
                              <Badge
                                className={
                                  order.status === "Delivered"
                                    ? "bg-green-500"
                                    : order.status === "Processing"
                                      ? "bg-blue-500"
                                      : order.status === "Shipped"
                                        ? "bg-yellow-500"
                                        : "bg-gray-500"
                                }
                              >
                                {order.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right text-white">₹{order.total.toFixed(2)}</TableCell>
                            <TableCell>
                              <Button variant="ghost" size="sm" className="text-white hover:bg-blue-800">
                                Details
                                <ChevronRight className="ml-1 h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <Card className="bg-blue-900/30 border-blue-800 text-white">
                  <CardHeader>
                    <CardTitle>Order Details</CardTitle>
                    <CardDescription className="text-white/70">
                      Order #ORD-7352 - Placed on June 12, 2023
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                        <div className="flex-1 space-y-1">
                          <h4 className="text-sm font-medium text-white/70">Shipping Address</h4>
                          <p className="text-white">John Doe</p>
                          <p className="text-white">123 Hero Street</p>
                          <p className="text-white">Mumbai, MH 400001</p>
                          <p className="text-white">India</p>
                        </div>
                        <div className="flex-1 space-y-1">
                          <h4 className="text-sm font-medium text-white/70">Payment Method</h4>
                          <p className="text-white">Visa ending in 4242</p>
                        </div>
                        <div className="flex-1 space-y-1">
                          <h4 className="text-sm font-medium text-white/70">Order Summary</h4>
                          <div className="flex justify-between">
                            <span className="text-white/80">Subtotal</span>
                            <span className="text-white">₹1199.00</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/80">Shipping</span>
                            <span className="text-white">₹100.00</span>
                          </div>
                          <Separator className="my-2 bg-blue-800" />
                          <div className="flex justify-between font-medium">
                            <span className="text-white">Total</span>
                            <span className="text-white">₹1299.00</span>
                          </div>
                        </div>
                      </div>

                      <Separator className="bg-blue-800" />

                      <div className="space-y-4">
                        <h4 className="font-medium text-white">Items</h4>
                        <div className="space-y-4">
                          {[
                            {
                              name: "Cosmic Hero Tee #1",
                              size: "M",
                              color: "Blue",
                              price: 599,
                              quantity: 1,
                              image: "/placeholder.svg?height=80&width=80&text=Product+1",
                            },
                            {
                              name: "Stellar Hero Tee #3",
                              size: "L",
                              color: "Black",
                              price: 599,
                              quantity: 1,
                              image: "/placeholder.svg?height=80&width=80&text=Product+2",
                            },
                          ].map((item, i) => (
                            <div key={i} className="flex gap-4 border-b border-blue-800 pb-4 last:border-0">
                              <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                                <Image
                                  src={item.image || "/placeholder.svg"}
                                  alt={item.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="flex-1">
                                <h5 className="font-medium text-white">{item.name}</h5>
                                <p className="text-sm text-white/70">
                                  Size: {item.size} | Color: {item.color}
                                </p>
                                <div className="flex justify-between mt-2">
                                  <p className="text-white/70">Qty: {item.quantity}</p>
                                  <p className="font-medium text-white">₹{(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <Button variant="outline" className="border-white text-white hover:bg-white/10">
                          <Package className="mr-2 h-4 w-4" />
                          Track Order
                        </Button>
                        <Button className="bg-yellow-400 text-blue-950 hover:bg-yellow-300">Buy Again</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="wishlist" className="mt-6">
                <Card className="bg-blue-900/30 border-blue-800 text-white">
                  <CardHeader>
                    <CardTitle>My Wishlist</CardTitle>
                    <CardDescription className="text-white/70">Items you've saved for later</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="relative group">
                          <div className="overflow-hidden rounded-lg border border-blue-800 bg-blue-900/30">
                            <div className="relative aspect-square">
                              <Image
                                src={`/placeholder.svg?height=300&width=300&text=Wishlist+${i}`}
                                alt={`Wishlist Item ${i}`}
                                fill
                                className="object-cover transition-transform group-hover:scale-105"
                              />
                            </div>
                            <div className="p-4">
                              <h3 className="font-semibold text-white">{`${["Cosmic", "Stellar", "Galactic", "Nebula"][i % 4]} Hero Tee`}</h3>
                              <p className="text-white/90 mt-1">₹599.00</p>
                              <div className="flex gap-2 mt-4">
                                <Button className="flex-1 bg-yellow-400 text-blue-950 hover:bg-yellow-300">
                                  Add to Cart
                                </Button>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="border-white text-white hover:bg-white/10"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="payment" className="mt-6">
                <Card className="bg-blue-900/30 border-blue-800 text-white">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Payment Methods</CardTitle>
                        <CardDescription className="text-white/70">Manage your payment methods</CardDescription>
                      </div>
                      <Button className="bg-yellow-400 text-blue-950 hover:bg-yellow-300">Add New Card</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { type: "Visa", last4: "4242", expiry: "12/25", default: true },
                        { type: "Mastercard", last4: "5555", expiry: "08/24", default: false },
                      ].map((card, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-4 border border-blue-800 rounded-lg"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-8 bg-white rounded flex items-center justify-center text-blue-950 font-bold text-sm">
                              {card.type}
                            </div>
                            <div>
                              <p className="font-medium text-white">
                                {card.type} ending in {card.last4}
                              </p>
                              <p className="text-sm text-white/70">Expires {card.expiry}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {card.default && <Badge className="bg-green-500">Default</Badge>}
                            <Button variant="ghost" size="sm" className="text-white hover:bg-blue-800">
                              Edit
                            </Button>
                            {!card.default && (
                              <Button variant="ghost" size="sm" className="text-white hover:bg-blue-800">
                                Remove
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="addresses" className="mt-6">
                <Card className="bg-blue-900/30 border-blue-800 text-white">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Addresses</CardTitle>
                        <CardDescription className="text-white/70">Manage your shipping addresses</CardDescription>
                      </div>
                      <Button className="bg-yellow-400 text-blue-950 hover:bg-yellow-300">Add New Address</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        {
                          name: "John Doe",
                          address: "123 Hero Street",
                          city: "Mumbai",
                          state: "MH",
                          zip: "400001",
                          country: "India",
                          default: true,
                        },
                        {
                          name: "John Doe",
                          address: "456 Cosmic Avenue",
                          city: "Delhi",
                          state: "DL",
                          zip: "110001",
                          country: "India",
                          default: false,
                        },
                      ].map((address, i) => (
                        <div key={i} className="p-4 border border-blue-800 rounded-lg">
                          <div className="flex justify-between">
                            <h4 className="font-medium text-white">{address.name}</h4>
                            {address.default && <Badge className="bg-green-500">Default</Badge>}
                          </div>
                          <p className="text-white/80 mt-2">{address.address}</p>
                          <p className="text-white/80">
                            {address.city}, {address.state} {address.zip}
                          </p>
                          <p className="text-white/80">{address.country}</p>
                          <div className="flex gap-2 mt-4">
                            <Button variant="outline" size="sm" className="border-white text-white hover:bg-white/10">
                              Edit
                            </Button>
                            {!address.default && (
                              <Button variant="outline" size="sm" className="border-white text-white hover:bg-white/10">
                                Remove
                              </Button>
                            )}
                            {!address.default && (
                              <Button variant="outline" size="sm" className="border-white text-white hover:bg-white/10">
                                Set as Default
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="mt-6">
                <Card className="bg-blue-900/30 border-blue-800 text-white">
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription className="text-white/70">Manage how you receive notifications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Order Updates",
                          description: "Receive notifications about your order status",
                          enabled: true,
                        },
                        {
                          title: "Promotions",
                          description: "Receive notifications about sales and special offers",
                          enabled: true,
                        },
                        {
                          title: "New Arrivals",
                          description: "Be the first to know when new products arrive",
                          enabled: false,
                        },
                        {
                          title: "Back in Stock",
                          description: "Get notified when out-of-stock items become available",
                          enabled: true,
                        },
                      ].map((notification, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-4 border border-blue-800 rounded-lg"
                        >
                          <div>
                            <h4 className="font-medium text-white">{notification.title}</h4>
                            <p className="text-sm text-white/70">{notification.description}</p>
                          </div>
                          <div className="flex items-center">
                            <Switch checked={notification.enabled} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

// Simple Switch component since we don't have access to the actual shadcn Switch
function Switch({ checked = false }) {
  const [isChecked, setIsChecked] = useState(checked)

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
        isChecked ? "bg-yellow-400" : "bg-blue-800"
      }`}
      onClick={() => setIsChecked(!isChecked)}
    >
      <span
        className={`${
          isChecked ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
      />
    </button>
  )
}
