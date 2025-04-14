"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  BarChart3,
  Users,
  Package,
  ShoppingCart,
  Tag,
  Settings,
  LogOut,
  Search,
  Bell,
  Plus,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex h-screen bg-gradient-to-b from-blue-950 to-indigo-950">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col bg-blue-900/50 border-r border-blue-800">
        <div className="flex h-14 items-center border-b border-blue-800 px-4">
          <Link href="/admin" className="flex items-center gap-2 font-semibold text-white">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span>SuperTees Admin</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-auto py-4">
          <div className="px-4 mb-4">
            <h2 className="px-2 text-xs font-semibold text-white/60 uppercase tracking-wider">Main</h2>
            <div className="mt-2 space-y-1">
              <Link href="/admin" className="flex items-center gap-3 rounded-md px-2 py-2 text-white bg-blue-800">
                <BarChart3 className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/admin/products"
                className="flex items-center gap-3 rounded-md px-2 py-2 text-white/70 hover:text-white hover:bg-blue-800/50"
              >
                <Package className="h-4 w-4" />
                Products
              </Link>
              <Link
                href="/admin/orders"
                className="flex items-center gap-3 rounded-md px-2 py-2 text-white/70 hover:text-white hover:bg-blue-800/50"
              >
                <ShoppingCart className="h-4 w-4" />
                Orders
              </Link>
              <Link
                href="/admin/customers"
                className="flex items-center gap-3 rounded-md px-2 py-2 text-white/70 hover:text-white hover:bg-blue-800/50"
              >
                <Users className="h-4 w-4" />
                Customers
              </Link>
              <Link
                href="/admin/discounts"
                className="flex items-center gap-3 rounded-md px-2 py-2 text-white/70 hover:text-white hover:bg-blue-800/50"
              >
                <Tag className="h-4 w-4" />
                Discounts
              </Link>
            </div>
          </div>
          <div className="px-4">
            <h2 className="px-2 text-xs font-semibold text-white/60 uppercase tracking-wider">Settings</h2>
            <div className="mt-2 space-y-1">
              <Link
                href="/admin/settings"
                className="flex items-center gap-3 rounded-md px-2 py-2 text-white/70 hover:text-white hover:bg-blue-800/50"
              >
                <Settings className="h-4 w-4" />
                Store Settings
              </Link>
              <button className="w-full flex items-center gap-3 rounded-md px-2 py-2 text-white/70 hover:text-white hover:bg-blue-800/50">
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="flex h-14 items-center gap-4 border-b border-blue-800 bg-blue-900/30 px-4 sm:px-6">
          <button className="md:hidden">
            <Package className="h-6 w-6 text-white" />
            <span className="sr-only">Toggle Menu</span>
          </button>

          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-white/50" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full bg-blue-900/50 border-blue-800 pl-8 text-white placeholder:text-white/50 md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>

          <Button variant="outline" size="icon" className="border-blue-800 text-white hover:bg-blue-800">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Image
                  src="/placeholder.svg?height=32&width=32&text=Admin"
                  alt="Admin"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-blue-900 border-blue-800 text-white">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-blue-800" />
              <DropdownMenuItem className="hover:bg-blue-800">Profile</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-blue-800">Settings</DropdownMenuItem>
              <DropdownMenuSeparator className="bg-blue-800" />
              <DropdownMenuItem className="hover:bg-blue-800">Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            <Button className="bg-yellow-400 text-blue-950 hover:bg-yellow-300">
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-6">
            <Card className="bg-blue-900/30 border-blue-800 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-white/70">Total Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-white/70 mt-1">+20.1% from last month</p>
                <div className="mt-4 flex items-center text-sm text-green-400">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  <span>12%</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-blue-900/30 border-blue-800 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-white/70">Total Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2,350</div>
                <p className="text-xs text-white/70 mt-1">+15.3% from last month</p>
                <div className="mt-4 flex items-center text-sm text-green-400">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  <span>8.2%</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-blue-900/30 border-blue-800 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-white/70">New Customers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-white/70 mt-1">+6.2% from last month</p>
                <div className="mt-4 flex items-center text-sm text-red-400">
                  <ArrowDownRight className="mr-1 h-4 w-4" />
                  <span>2.5%</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <div className="mt-6">
            <Tabs defaultValue="overview" onValueChange={setActiveTab}>
              <TabsList className="bg-blue-900/30 border-blue-800 text-white">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-yellow-400 data-[state=active]:text-blue-950"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="analytics"
                  className="data-[state=active]:bg-yellow-400 data-[state=active]:text-blue-950"
                >
                  Analytics
                </TabsTrigger>
                <TabsTrigger
                  value="reports"
                  className="data-[state=active]:bg-yellow-400 data-[state=active]:text-blue-950"
                >
                  Reports
                </TabsTrigger>
                <TabsTrigger
                  value="notifications"
                  className="data-[state=active]:bg-yellow-400 data-[state=active]:text-blue-950"
                >
                  Notifications
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6 space-y-6">
                {/* Recent Orders */}
                <Card className="bg-blue-900/30 border-blue-800 text-white">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Recent Orders</CardTitle>
                      <Button variant="outline" className="border-white text-white hover:bg-white/10">
                        View All
                      </Button>
                    </div>
                    <CardDescription className="text-white/70">You have {128} total orders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow className="border-blue-800">
                          <TableHead className="text-white">Order</TableHead>
                          <TableHead className="text-white">Customer</TableHead>
                          <TableHead className="text-white">Date</TableHead>
                          <TableHead className="text-white">Status</TableHead>
                          <TableHead className="text-white text-right">Amount</TableHead>
                          <TableHead className="text-white"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            id: "ORD-7352",
                            customer: "John Smith",
                            date: "2023-06-12",
                            status: "Completed",
                            amount: 125.99,
                          },
                          {
                            id: "ORD-7353",
                            customer: "Sarah Johnson",
                            date: "2023-06-12",
                            status: "Processing",
                            amount: 89.99,
                          },
                          {
                            id: "ORD-7354",
                            customer: "Michael Brown",
                            date: "2023-06-11",
                            status: "Shipped",
                            amount: 149.99,
                          },
                          {
                            id: "ORD-7355",
                            customer: "Emily Davis",
                            date: "2023-06-11",
                            status: "Pending",
                            amount: 59.99,
                          },
                          {
                            id: "ORD-7356",
                            customer: "Robert Wilson",
                            date: "2023-06-10",
                            status: "Completed",
                            amount: 199.99,
                          },
                        ].map((order) => (
                          <TableRow key={order.id} className="border-blue-800">
                            <TableCell className="font-medium text-white">{order.id}</TableCell>
                            <TableCell className="text-white">{order.customer}</TableCell>
                            <TableCell className="text-white">{order.date}</TableCell>
                            <TableCell>
                              <Badge
                                className={
                                  order.status === "Completed"
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
                            <TableCell className="text-right text-white">${order.amount.toFixed(2)}</TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon" className="text-white hover:bg-blue-800">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="bg-blue-900 border-blue-800 text-white">
                                  <DropdownMenuItem className="hover:bg-blue-800">View details</DropdownMenuItem>
                                  <DropdownMenuItem className="hover:bg-blue-800">Update status</DropdownMenuItem>
                                  <DropdownMenuSeparator className="bg-blue-800" />
                                  <DropdownMenuItem className="hover:bg-blue-800">Cancel order</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                {/* Top Products */}
                <Card className="bg-blue-900/30 border-blue-800 text-white">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Top Products</CardTitle>
                      <Button variant="outline" className="border-white text-white hover:bg-white/10">
                        View All
                      </Button>
                    </div>
                    <CardDescription className="text-white/70">Your best selling products this month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow className="border-blue-800">
                          <TableHead className="text-white">Product</TableHead>
                          <TableHead className="text-white">Category</TableHead>
                          <TableHead className="text-white">Stock</TableHead>
                          <TableHead className="text-white text-right">Price</TableHead>
                          <TableHead className="text-white text-right">Sales</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          { id: 1, name: "Cosmic Hero Tee", category: "Men", stock: 45, price: 29.99, sales: 128 },
                          { id: 2, name: "Stellar Hero Tee", category: "Women", stock: 32, price: 29.99, sales: 95 },
                          { id: 3, name: "Galactic Hero Tee", category: "Kids", stock: 18, price: 24.99, sales: 82 },
                          { id: 4, name: "Nebula Hero Tee", category: "Unisex", stock: 53, price: 34.99, sales: 76 },
                          { id: 5, name: "Cosmic Hero Hoodie", category: "Men", stock: 12, price: 49.99, sales: 64 },
                        ].map((product) => (
                          <TableRow key={product.id} className="border-blue-800">
                            <TableCell className="font-medium text-white">{product.name}</TableCell>
                            <TableCell className="text-white">{product.category}</TableCell>
                            <TableCell>
                              <Badge
                                className={
                                  product.stock > 40
                                    ? "bg-green-500"
                                    : product.stock > 20
                                      ? "bg-yellow-500"
                                      : "bg-red-500"
                                }
                              >
                                {product.stock} in stock
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right text-white">${product.price.toFixed(2)}</TableCell>
                            <TableCell className="text-right text-white">{product.sales}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="mt-6">
                <Card className="bg-blue-900/30 border-blue-800 text-white">
                  <CardHeader>
                    <CardTitle>Analytics</CardTitle>
                    <CardDescription className="text-white/70">Your store performance analytics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center border border-blue-800 rounded-md">
                      <p className="text-white/70">Analytics charts will be displayed here</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reports" className="mt-6">
                <Card className="bg-blue-900/30 border-blue-800 text-white">
                  <CardHeader>
                    <CardTitle>Reports</CardTitle>
                    <CardDescription className="text-white/70">Generate and view reports</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {["Sales Report", "Inventory Report", "Customer Report"].map((report) => (
                          <Card key={report} className="bg-blue-800/50 border-blue-700">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm">{report}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <Button variant="outline" className="w-full border-white text-white hover:bg-white/10">
                                Generate
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="mt-6">
                <Card className="bg-blue-900/30 border-blue-800 text-white">
                  <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription className="text-white/70">Recent system notifications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { title: "New Order", description: "Order #ORD-7352 has been placed", time: "5 minutes ago" },
                        {
                          title: "Low Stock Alert",
                          description: "Cosmic Hero Hoodie is running low on stock (12 remaining)",
                          time: "2 hours ago",
                        },
                        {
                          title: "Payment Received",
                          description: "Payment for Order #ORD-7350 has been received",
                          time: "5 hours ago",
                        },
                        {
                          title: "New Review",
                          description: "A new 5-star review has been submitted for Stellar Hero Tee",
                          time: "1 day ago",
                        },
                      ].map((notification, i) => (
                        <div key={i} className="flex items-start space-x-4 p-4 border border-blue-800 rounded-md">
                          <div className="rounded-full bg-blue-800 p-2">
                            <Bell className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <p className="font-medium">{notification.title}</p>
                            <p className="text-sm text-white/70">{notification.description}</p>
                            <p className="text-xs text-white/50">{notification.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
