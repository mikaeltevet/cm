import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ChevronRight, ShoppingCart, Book, GraduationCap, Users, Phone, MapPin, Minus, Plus, X } from 'lucide-react'

// Mock cart items for demonstration
const cartItems = [
  { id: 1, name: "Camiseta del Colegio", price: 250, quantity: 1 },
  { id: 2, name: "Sudadera del Colegio", price: 450, quantity: 1 },
]

export default function LandingPage() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="Logo de Colegio Mexicano" width={40} height={40} />
            <span className="font-bold text-orange-600">Colegio Mexicano</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:text-orange-600 hover:underline underline-offset-4" href="#sobre-nosotros">
              Sobre Nosotros
            </Link>
            <Link className="text-sm font-medium hover:text-orange-600 hover:underline underline-offset-4" href="#plataformas">
              Plataformas
            </Link>
            <Link className="text-sm font-medium hover:text-orange-600 hover:underline underline-offset-4" href="#tienda">
              Tienda
            </Link>
            <Link className="text-sm font-medium hover:text-orange-600 hover:underline underline-offset-4" href="#contacto">
              Contacto
            </Link>
          </nav>
          <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
            <SheetTrigger asChild>
              <Button className="ml-4" variant="outline" size="icon">
                <ShoppingCart className="h-4 w-4" />
                <span className="sr-only">Abrir carrito</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[350px] sm:w-[450px]">
              <SheetHeader>
                <SheetTitle>Tu Carrito</SheetTitle>
              </SheetHeader>
              <div className="mt-8">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-4 border-b">
                    <div className="flex items-center space-x-4">
                      <Image src="/placeholder.svg" alt={item.name} width={48} height={48} className="rounded-md" />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">${item.price.toFixed(2)} MXN</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                        <Minus className="h-4 w-4" />
                        <span className="sr-only">Disminuir cantidad</span>
                      </Button>
                      <span>{item.quantity}</span>
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                        <Plus className="h-4 w-4" />
                        <span className="sr-only">Aumentar cantidad</span>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <X className="h-4 w-4" />
                        <span className="sr-only">Eliminar artículo</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium">Total</span>
                  <span className="font-bold">${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)} MXN</span>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">Proceder al Pago</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-orange-100 to-green-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-orange-600">
                    Bienvenidos al Colegio Mexicano
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Empoderando mentes desde 1974. Experimenta la innovación en educación con nuestras plataformas de aprendizaje impulsadas por IA.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-orange-600 hover:bg-orange-700">
                    Inscríbete Ahora
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-100">Conoce Más</Button>
                </div>
              </div>
              <Image
                alt="Campus del Colegio Mexicano"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="550"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section id="sobre-nosotros" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8 text-green-800">Sobre el Colegio Mexicano</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="border-green-200">
                <CardContent className="p-6">
                  <Book className="h-12 w-12 mb-4 text-green-600" />
                  <h3 className="text-2xl font-bold mb-2 text-green-800">Nuestra Historia</h3>
                  <p className="text-gray-600">
                    Fundado en 1974, el Colegio Mexicano ha estado a la vanguardia de la innovación educativa durante casi cinco décadas.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-green-200">
                <CardContent className="p-6">
                  <GraduationCap className="h-12 w-12 mb-4 text-green-600" />
                  <h3 className="text-2xl font-bold mb-2 text-green-800">Excelencia Académica</h3>
                  <p className="text-gray-600">
                    Nuestro riguroso plan de estudios y profesorado dedicado aseguran que los alumnos reciban una educación de clase mundial.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-green-200">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 mb-4 text-green-600" />
                  <h3 className="text-2xl font-bold mb-2 text-green-800">Comunidad</h3>
                  <p className="text-gray-600">
                    Fomentamos una comunidad vibrante e inclusiva que prepara a los alumnos para la ciudadanía global.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="plataformas" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8 text-orange-600">Nuestras Plataformas Impulsadas por IA</h2>
            <Tabs defaultValue="erp" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="erp" className="data-[state=active]:bg-orange-100 data-[state=active]:text-orange-600">ERP</TabsTrigger>
                <TabsTrigger value="sis" className="data-[state=active]:bg-orange-100 data-[state=active]:text-orange-600">SIS</TabsTrigger>
                <TabsTrigger value="lms" className="data-[state=active]:bg-orange-100 data-[state=active]:text-orange-600">LMS</TabsTrigger>
              </TabsList>
              <TabsContent value="erp">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-orange-600">Sistema de Gestión Integral</h3>
                    <p className="text-gray-600 mb-4">
                      Nuestra plataforma ERP garantiza una experiencia educativa fluida y transparente. Los padres pueden acceder fácilmente a información sobre el progreso académico, actividades extracurriculares y eventos escolares, mientras que los alumnos disfrutan de un entorno de aprendizaje más organizado y eficiente.
                    </p>
                    <Button className="bg-orange-600 hover:bg-orange-700">Descubre los Beneficios</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="sis">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-orange-600">Sistema de Información Estudiantil</h3>
                    <p className="text-gray-600 mb-4">
                      El SIS gestiona los datos de los alumnos y los registros académicos, proporcionando información en tiempo real para alumnos, padres y personal. Facilita un seguimiento detallado del progreso individual y permite una comunicación más efectiva entre la escuela y las familias.
                    </p>
                    <Button className="bg-orange-600 hover:bg-orange-700">Explora las Funciones</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="lms">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-orange-600">Sistema de Gestión de Aprendizaje</h3>
                    <p className="text-gray-600 mb-4">
                      Nuestro LMS mejorado con IA crea experiencias de aprendizaje personalizadas, adaptándose a las necesidades y ritmo de cada alumno. Ofrece recursos interactivos, evaluaciones en tiempo real y retroalimentación instantánea para optimizar el proceso de aprendizaje.
                    </p>
                    <Button className="bg-orange-600 hover:bg-orange-700">Conoce la Plataforma</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section id="tienda" className="w-full py-12 md:py-24 lg:py-32 bg-orange-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8 text-orange-800">Tienda de Mercancía Escolar</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="bg-white border-orange-200">
                  <CardContent className="p-4">
                    <Image
                      alt={`Artículo de mercancía ${item}`}
                      className="aspect-square object-cover w-full rounded-lg"
                      height="300"
                      src="/placeholder.svg"
                      width="300"
                    />
                    <h3 className="text-xl font-bold mt-2 text-orange-800">Nombre del Producto</h3>
                    <p className="text-gray-600">$XX.XX MXN</p>
                    <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700 text-white">Añadir al Carrito</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-100">Ver Todos los Productos</Button>
            
            </div>
          </div>
        </section>
        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8 text-green-800">Contáctanos</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="border-green-200">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <Input placeholder="Nombre" className="border-green-300 focus:border-green-500" />
                    <Input placeholder="Correo Electrónico" type="email" className="border-green-300 focus:border-green-500" />
                    <Input placeholder="Asunto" className="border-green-300 focus:border-green-500" />
                    <textarea
                      className="min-h-[100px] w-full rounded-md border border-green-300 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Mensaje"
                    />
                    <Button className="w-full bg-green-600 hover:bg-green-700">Enviar Mensaje</Button>
                  </form>
                </CardContent>
              </Card>
              <Card className="border-green-200">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-5 w-5 text-green-600" />
                      <span>(899) 920 3030</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-green-600" />
                      <span>Av. César Humberto Isassi Cantú s/n, Col. El Círculo, Reynosa, Tamaulipas, México</span>
                    </div>
                    <div className="aspect-[16/9] w-full">
                      <Image
                        alt="Mapa"
                        className="rounded-lg object-cover"
                        height="300"
                        src="/placeholder.svg"
                        width="400"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-orange-100">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-600">
            © 2024 Colegio Mexicano. Todos los derechos reservados.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4 text-gray-600 hover:text-orange-600" href="#">
              Términos de Servicio
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 text-gray-600  hover:text-orange-600" href="#">
              Privacidad
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
