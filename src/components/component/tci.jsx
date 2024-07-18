
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Tci() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header
        className="bg-[#333] text-[#fff] py-4 px-6 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <TrashIcon className="h-8 w-8" />
          <span className="text-2xl font-bold">Impala Dumpsters</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            About Us
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Our Services
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Pay for Services
          </Link>
        </nav>
        <div className="flex items-center gap-4 md:hidden">
          <Link href="#" className="text-[#fff] hover:underline" prefetch={false}>
            <FacebookIcon className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-[#fff] hover:underline" prefetch={false}>
            <InstagramIcon className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-[#fff] hover:underline" prefetch={false}>
            <MailIcon className="h-6 w-6" />
          </Link>
        </div>
        <Button variant="outline" size="sm" className="md:hidden">
          <MenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </header>
      <main className="flex-1">
        <section className="bg-[#f5f5f5] py-12 md:py-24">
          <div className="container max-w-5xl px-4 md:px-6">
            <Carousel className="rounded-xl overflow-hidden">
              <CarouselContent>
                <CarouselItem>
                <img src="/image/icon.jpg" width={1280} height={720} 
                alt="Dumpster Service" 
                className="aspect-video object-cover" />

                </CarouselItem>
                <CarouselItem>
                <img src="/image/img1.jpg" width={1280} height={720} 
                alt="Dumpster Service" 
                className="aspect-video object-cover" />
                </CarouselItem>
                <CarouselItem>
                <img src="/image/img2.jpg" width={1280} height={720} 
                alt="Dumpster Service" 
                className="aspect-video object-cover" />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                <ChevronLeftIcon className="h-8 w-8" />
              </CarouselPrevious>
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
                <ChevronRightIcon className="h-8 w-8" />
              </CarouselNext>
            </Carousel>
          </div>
        </section>
        <section id="about" className="py-12 md:py-24">
          <div className="container max-w-5xl px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold mb-4">About Impala Dumpsters</h2>
                <p className="text-[#666] mb-4">
                  Impala Dumpsters is a leading provider of waste management and recycling services in the region.
                  Founded in 2010, our mission is to help businesses and individuals reduce their environmental impact
                  through responsible  waste disposal and recycling.
                </p>
                <p className="text-[#666]">
                  We take pride in our commitment to sustainability and our focus on providing exceptional customer
                  service. Our team of experienced professionals works closely with our clients to develop customized
                  waste management solutions that meet their unique needs.
                </p>
              </div>
              <div>
              <img src="/image/img4.jpg" width={600} height={400} 
                alt="Dumpster Service" 
                className="aspect-video object-cover" />
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="bg-[#f5f5f5] py-12 md:py-24">
          <div className="container max-w-5xl px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <AnvilIcon className="h-8 w-8" />
                  <h3 className="text-xl font-bold">Steel</h3>
                </CardHeader>
                <CardContent>
                  <p>We recycle and dispose of steel materials.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <PlugIcon className="h-8 w-8" />
                  <h3 className="text-xl font-bold">Plastic</h3>
                </CardHeader>
                <CardContent>
                  <p>We recycle and dispose of plastic materials.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <LightbulbIcon className="h-8 w-8" />
                  <h3 className="text-xl font-bold">Lights &amp; Bulbs</h3>
                </CardHeader>
                <CardContent>
                  <p>We recycle and dispose of lights and bulbs.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <TrashIcon className="h-8 w-8" />
                  <h3 className="text-xl font-bold">Large Trash</h3>
                </CardHeader>
                <CardContent>
                  <p>We dispose of large and bulky items.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BookIcon className="h-8 w-8" />
                  <h3 className="text-xl font-bold">Books &amp; Paper</h3>
                </CardHeader>
                <CardContent>
                  <p>We recycle books, papers, and other documents.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Trash2Icon className="h-8 w-8" />
                  <h3 className="text-xl font-bold">Common Waste</h3>
                </CardHeader>
                <CardContent>
                  <p>We dispose of common household and commercial waste.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <AppleIcon className="h-8 w-8" />
                  <h3 className="text-xl font-bold">Aluminum</h3>
                </CardHeader>
                <CardContent>
                  <p>We recycle aluminum cans and other aluminum materials.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BoxIcon className="h-8 w-8" />
                  <h3 className="text-xl font-bold">Bottles</h3>
                </CardHeader>
                <CardContent>
                  <p>We recycle glass and plastic bottles.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <FishIcon className="h-8 w-8" />
                  <h3 className="text-xl font-bold">Food &amp; Organics</h3>
                </CardHeader>
                <CardContent>
                  <p>We dispose of food and organic waste.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CircuitBoardIcon className="h-8 w-8" />
                  <h3 className="text-xl font-bold">Electronics &amp; Glass</h3>
                </CardHeader>
                <CardContent>
                  <p>We recycle and dispose of electronics and glass.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="py-12 md:py-24">
          <div className="container max-w-5xl px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <form className="grid gap-6">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" type="text" placeholder="Enter your name" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Enter your message" />
              </div>
              <Button type="submit" className="justify-self-end">
                Submit
              </Button>
            </form>
          </div>
        </section>
        <section id="payment" className="bg-[#f5f5f5] py-12 md:py-24">
          <div className="container max-w-5xl px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Pay for Services</h2>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-bold">Dumpster Rental</h3>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Rent a dumpster for your waste disposal needs. Choose from a variety of sizes and schedule a
                    delivery.
                  </p>
                  <Button>Rent a Dumpster</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-bold">Waste Pickup</h3>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Schedule a pickup for your waste and recycling materials. Our team will handle the rest.
                  </p>
                  <Button>Schedule Pickup</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#333] text-[#fff] py-6 px-4 md:px-6">
        <div
          className="container max-w-5xl flex flex-col md:flex-row items-center justify-between">
          <p>&copy; 2024 Impala Dumpsters. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-[#fff] hover:underline" prefetch={false}>
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-[#fff] hover:underline" prefetch={false}>
              <InstagramIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-[#fff] hover:underline" prefetch={false}>
              <MailIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </footer>
    </div>)
  );
}

function AnvilIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4" />
      <path d="M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z" />
      <path d="M9 12v5" />
      <path d="M15 12v5" />
      <path d="M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1" />
    </svg>)
  );
}


function AppleIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>)
  );
}


function BookIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>)
  );
}


function BoxIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>)
  );
}


function ChevronLeftIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>)
  );
}


function ChevronRightIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>)
  );
}


function CircuitBoardIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M11 9h4a2 2 0 0 0 2-2V3" />
      <circle cx="9" cy="9" r="2" />
      <path d="M7 21v-4a2 2 0 0 1 2-2h4" />
      <circle cx="15" cy="15" r="2" />
    </svg>)
  );
}


function FacebookIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>)
  );
}


function FishIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" />
      <path d="M18 12v.5" />
      <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" />
      <path
        d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" />
      <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" />
      <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" />
    </svg>)
  );
}


function InstagramIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>)
  );
}


function LightbulbIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>)
  );
}


function MailIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>)
  );
}


function MenuIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}


function PlugIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </svg>)
  );
}


function Trash2Icon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </svg>)
  );
}


function TrashIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>)
  );
}


function XIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>)
  );
}
