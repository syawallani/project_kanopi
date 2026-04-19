import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Menu, 
  X, 
  ChevronRight,
  Shield,
  Hammer,
  Award,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// --- Constants ---
const WHATSAPP_NUMBER = "6281234567890"; // Placeholder
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Tangerang%20Kanopi,%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda.`;

const SERVICES = [
  {
    title: "Kanopi Minimalis",
    description: "Desain modern dan elegan untuk mempercantik teras rumah Anda dengan material berkualitas.",
    image: "https://picsum.photos/seed/canopy1/600/400",
  },
  {
    title: "Pagar & Pintu Besi",
    description: "Keamanan maksimal dengan sentuhan estetika tinggi untuk perlindungan hunian Anda.",
    image: "https://picsum.photos/seed/gate1/600/400",
  },
  {
    title: "Teralis Jendela",
    description: "Perlindungan ekstra untuk jendela Anda dengan berbagai pilihan motif dan warna.",
    image: "https://picsum.photos/seed/window1/600/400",
  },
  {
    title: "Konstruksi Baja",
    description: "Pengerjaan rangka atap baja ringan dan konstruksi besi berat untuk gudang atau pabrik.",
    image: "https://picsum.photos/seed/steel1/600/400",
  },
  {
    title: "Railing Tangga",
    description: "Keamanan tangga dengan desain yang menyesuaikan interior rumah Anda.",
    image: "https://picsum.photos/seed/stair1/600/400",
  },
  {
    title: "Balkon Besi",
    description: "Area santai lantai atas yang aman dan nyaman dengan railing balkon berkualitas.",
    image: "https://picsum.photos/seed/balcony1/600/400",
  },
];

const PORTFOLIO = [
  "https://picsum.photos/seed/p1/800/600",
  "https://picsum.photos/seed/p2/800/600",
  "https://picsum.photos/seed/p3/800/600",
  "https://picsum.photos/seed/p4/800/600",
  "https://picsum.photos/seed/p5/800/600",
  "https://picsum.photos/seed/p6/800/600",
];

const TESTIMONIALS = [
  {
    name: "Bpk. Andi",
    location: "BSD City",
    text: "Pengerjaan sangat rapi dan tepat waktu. Kanopi minimalisnya membuat rumah saya jadi lebih adem dan cantik.",
  },
  {
    name: "Ibu Maya",
    location: "Gading Serpong",
    text: "Harga sangat kompetitif dibanding bengkel las lain. Pelayanan ramah dan konsultasinya sangat membantu.",
  },
  {
    name: "Bpk. Budi",
    location: "Alam Sutera",
    text: "Pagar besi yang dibuat sangat kokoh. Finishing catnya juga halus. Sangat direkomendasikan!",
  },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Layanan", href: "#services" },
    { name: "Portofolio", href: "#portfolio" },
    { name: "FAQ", href: "#faq" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            TK
          </div>
          <span className={`font-bold text-xl tracking-tight ${isScrolled ? "text-slate-900" : "text-white"}`}>
            Tangerang Kanopi
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${isScrolled ? "text-slate-600" : "text-white/90"}`}
            >
              {link.name}
            </a>
          ))}
          <Button render={<a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" />} nativeButton={false} className="bg-green-600 hover:bg-green-700 text-white border-none">
            <MessageCircle className="w-4 h-4 mr-2" />
            Konsultasi Gratis
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" className={isScrolled ? "text-slate-900" : "text-white"} />} nativeButton={true}>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-lg font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <Button render={<a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" />} nativeButton={false} className="bg-green-600 hover:bg-green-700 text-white w-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Hubungi Kami
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/hero-canopy/1920/1080" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-blue-600/20 text-blue-400 border-blue-500/30 px-3 py-1 text-sm">
              #1 Spesialis Kanopi & Las Tangerang
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Wujudkan Hunian <span className="text-blue-500">Nyaman & Aman</span> Bersama Kami
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Layanan profesional pembuatan kanopi, pagar, teralis, dan konstruksi besi dengan material pilihan dan tenaga ahli berpengalaman.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white h-14 px-8 text-lg" render={<a href="#services" />} nativeButton={false}>
                Lihat Layanan
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20 h-14 px-8 text-lg" render={<a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" />} nativeButton={false}>
                <MessageCircle className="w-5 h-5 mr-2" />
                Konsultasi WA
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { icon: Shield, label: "Garansi Kualitas" },
              { icon: Clock, label: "Tepat Waktu" },
              { icon: Award, label: "Material Premium" },
              { icon: Users, label: "Tenaga Ahli" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-white/80">
                <item.icon className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Layanan Unggulan Kami</h2>
          <p className="text-slate-600">
            Kami menyediakan berbagai macam jasa konstruksi besi dan las untuk kebutuhan properti Anda dengan standar kualitas tinggi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow group">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <Button variant="secondary" size="sm" className="w-full" render={<a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" />} nativeButton={false}>
                      Pesan Sekarang
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Portofolio Proyek</h2>
            <p className="text-slate-600">
              Beberapa hasil pengerjaan kami di berbagai wilayah Tangerang dan sekitarnya. Kualitas adalah prioritas utama kami.
            </p>
          </div>
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            Lihat Semua Galeri
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {PORTFOLIO.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={img} 
                alt={`Project ${i + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Apa Kata Pelanggan Kami?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Kepuasan pelanggan adalah bukti nyata dari kualitas layanan yang kami berikan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, star) => (
                  <span key={star} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-slate-300 italic mb-6 leading-relaxed">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                  {t.name[5]}
                </div>
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Pertanyaan Umum</h2>
          <p className="text-slate-600">
            Beberapa hal yang sering ditanyakan oleh pelanggan kami.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left font-semibold text-slate-900">Berapa lama proses pengerjaan kanopi?</AccordionTrigger>
            <AccordionContent className="text-slate-600">
              Waktu pengerjaan bervariasi tergantung luas dan kerumitan desain, biasanya berkisar antara 3 hingga 7 hari kerja setelah material siap.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left font-semibold text-slate-900">Apakah ada garansi untuk hasil pengerjaan?</AccordionTrigger>
            <AccordionContent className="text-slate-600">
              Ya, kami memberikan garansi kebocoran dan kekuatan konstruksi selama 6 bulan hingga 1 tahun tergantung jenis paket yang dipilih.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left font-semibold text-slate-900">Apakah biaya survei lokasi gratis?</AccordionTrigger>
            <AccordionContent className="text-slate-600">
              Tentu! Kami memberikan layanan survei dan konsultasi gratis untuk wilayah Tangerang dan sekitarnya.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left font-semibold text-slate-900">Material apa saja yang tersedia?</AccordionTrigger>
            <AccordionContent className="text-slate-600">
              Kami menyediakan berbagai pilihan material mulai dari Besi Hollow, Stainless Steel, Galvalum, hingga atap Polycarbonate, Alderon, dan Spandek.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-blue-600 rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Siap Memulai Proyek Anda?</h2>
              <p className="text-blue-100 text-lg mb-8">
                Jangan ragu untuk berkonsultasi mengenai kebutuhan kanopi atau konstruksi besi Anda. Tim kami siap memberikan solusi terbaik dengan harga transparan.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm">Telepon / WhatsApp</p>
                    <p className="font-bold text-xl">+62 812-3456-7890</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm">Alamat Workshop</p>
                    <p className="font-bold text-xl">Jl. Raya Serpong No. 123, Tangerang</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-slate-900 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Kirim Pesan Cepat</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nama Lengkap</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Contoh: Andi" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nomor WhatsApp</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="0812..." />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Jenis Layanan</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Kanopi Minimalis</option>
                    <option>Pagar Besi</option>
                    <option>Teralis</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Pesan / Detail Kebutuhan</label>
                  <textarea className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32" placeholder="Jelaskan kebutuhan Anda..."></textarea>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg">
                  Kirim via WhatsApp
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">
                TK
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Tangerang Kanopi
              </span>
            </div>
            <p className="max-w-md mb-6">
              Bengkel las spesialis pembuatan kanopi, pagar, teralis, dan berbagai konstruksi besi berkualitas tinggi di wilayah Tangerang dan sekitarnya. Berpengalaman lebih dari 10 tahun.
            </p>
            <div className="flex gap-4">
              {/* Social icons would go here */}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Tautan Cepat</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-blue-500 transition-colors">Beranda</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Layanan</a></li>
              <li><a href="#portfolio" className="hover:text-blue-500 transition-colors">Portofolio</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Hubungi Kami</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Jam Operasional</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between">
                <span>Senin - Sabtu:</span>
                <span className="text-white">08:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span>Minggu:</span>
                <span className="text-white">Libur (Janji Temu)</span>
              </li>
              <li className="pt-4 text-blue-500 font-medium">
                Melayani Konsultasi 24/7 via WhatsApp
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2024 Tangerang Kanopi. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 transition-colors"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-bounce">
          1
        </span>
      </motion.a>
    </div>
  );
}
