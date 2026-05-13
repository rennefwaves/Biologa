import { motion, AnimatePresence } from 'motion/react';
import { 
  TreePine, 
  MapPin, 
  ShieldCheck, 
  BookOpen, 
  Users, 
  ChevronRight, 
  ArrowRight,
  Menu,
  Facebook,
  Instagram,
  Linkedin,
  X,
  Share2,
  Leaf,
  Globe,
  Droplets,
  Bird,
  Calendar,
  MessageCircle,
  QrCode,
  Mail,
  Phone
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';

// Custom SVG Logo component for Ecoturismo México
const EcoMexicoLogo = ({ className = "w-12 h-12", color = "currentColor" }: { className?: string, color?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10c-22 0-40 18-40 40s18 40 40 40 40-18 40-40-18-40-40-40zM30 50c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20z" opacity="0.1" />
    <path d="M50 20c-16 0-30 14-30 30 0 5 1 10 4 14l26-44z" fill="#4B5E4A" />
    <path d="M50 80c16 0 30-14 30-30 0-5-1-10-4-14l-26 44z" fill="#3D2B1F" />
    <path d="M50 35c8 0 15 7 15 15s-7 15-15 15-15-7-15-15 7-15 15-15z" fill="#2D3A2D" />
  </svg>
);

// Custom component for the new graphics with background removal
const DynamicGraphic = ({ src, className = "" }: { src: string, className?: string }) => {
  return (
    <div className={`overflow-hidden flex items-center justify-center h-[200px] ${className}`}>
      <img 
        src={src} 
        alt="Graphic" 
        className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 hover:scale-110"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

// Custom component for Contact Modal
const ContactModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const whatsappNumber = "525625790387";
  const whatsappMessage = encodeURIComponent("¡Hola! Me interesa agendar una cita para conocer más sobre Silvestria Senderismo Comunitario.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const email = "silvestria.crc@outlook.com";
  
  // Outlook.com format for scheduling
  const calendarUrl = `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${encodeURIComponent("Cita con Silvestria")}&body=${encodeURIComponent("Cita para conocer más sobre el senderismo comunitario de Silvestria.")}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-forest/80 backdrop-blur-md"
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-cream w-full max-w-2xl rounded-[40px] overflow-hidden shadow-2xl relative z-10 grid md:grid-cols-2 max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 md:p-10 space-y-8 flex flex-col">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl overflow-hidden shadow-lg border-4 border-white shrink-0">
                  <img 
                    src="/contacto_perfil.png" 
                    alt="Ivonne Morales" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl md:text-3xl font-serif text-forest leading-none">Contáctanos</h3>
                  <p className="text-forest/60 text-xs md:text-sm italic">Conecta con la naturaleza y la ciencia.</p>
                </div>
              </div>

              <div className="space-y-4">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 bg-emerald-50 text-emerald-700 rounded-2xl hover:bg-emerald-100 transition-colors group"
                >
                  <div className="bg-emerald-500 text-white p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold">WhatsApp Directo</span>
                    <span className="text-xs opacity-70">Chatea con nosotros ahora</span>
                  </div>
                </a>

                <a 
                  href={calendarUrl}
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 bg-sepia/5 text-sepia rounded-2xl hover:bg-sepia/10 transition-colors group"
                >
                  <div className="bg-sepia text-sand p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold">Agendar Cita</span>
                    <span className="text-xs opacity-70">Sincroniza con tu calendario</span>
                  </div>
                </a>

                <a 
                  href={`mailto:${email}?subject=Interés en Silvestria&body=Hola Ivonne, me gustaría agendar una cita para...`}
                  className="flex items-center gap-4 p-4 bg-forest/5 text-forest rounded-2xl hover:bg-forest/10 transition-colors group"
                >
                  <div className="bg-forest text-sand p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold">Enviar Correo</span>
                    <span className="text-xs opacity-70">{email}</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-forest p-8 md:p-10 flex flex-col items-center justify-center text-center text-sand space-y-6">
              <div className="bg-white p-4 rounded-3xl shadow-2xl hidden md:block">
                <QRCodeSVG value={whatsappUrl} size={180} />
              </div>
              <div className="space-y-2 hidden md:block">
                <p className="text-sm font-bold uppercase tracking-widest text-emerald-400">Escanea el Código QR</p>
                <p className="text-xs text-sand/60 max-w-[200px] mx-auto">Abre WhatsApp en tu teléfono y escanea para chatear instantáneamente.</p>
              </div>
              <button 
                onClick={onClose}
                className="text-[10px] uppercase tracking-[0.2em] font-bold border-b border-sand/30 pb-1 hover:text-emerald-400 transition-colors"
              >
                Cerrar ventana
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Navbar = ({ onContactClick }: { onContactClick: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'bg-cream/95 backdrop-blur-xl py-2 md:py-4 shadow-xl shadow-forest/5' : 'bg-transparent py-4 md:py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2 md:gap-4 group cursor-pointer">
          <div className="w-16 h-16 md:w-24 md:h-24 relative flex items-center justify-center">
            <img 
              src="/1.png" 
              alt="Silvestria Logo" 
              className="w-full h-full object-contain mix-blend-multiply group-hover:rotate-6 transition-transform"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-xl md:text-3xl font-bold tracking-tight text-forest uppercase">Silvestria</span>
            <span className="text-[8px] md:text-[12px] uppercase tracking-[0.4em] text-sepia font-bold ml-1">Senderismo Comunitario</span>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-forest/60">
          <a href="#" className="hover:text-sepia transition-colors relative group">
            Inicio
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-sepia group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#mision" className="hover:text-sepia transition-colors relative group">
            Estrategia
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-sepia group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#biologa" className="hover:text-sepia transition-colors relative group">
            Ivonne Morales
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-sepia group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#expediciones" className="hover:text-sepia transition-colors relative group">
            Expediciones
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-sepia group-hover:w-full transition-all duration-300"></span>
          </a>
          <button 
            onClick={onContactClick}
            className="bg-forest text-sand px-8 py-3 rounded-full hover:bg-sepia transition-all hover:shadow-2xl hover:shadow-sepia/20 flex items-center gap-3 font-sans"
          >
            Contactar
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
          </button>
        </div>

        <button onClick={() => setMobileMenu(true)} className="lg:hidden text-forest p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-forest z-[100] p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
              <EcoMexicoLogo className="w-10 h-10 text-sand" />
              <button onClick={() => setMobileMenu(false)} className="text-sand p-2">
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col gap-8 text-4xl font-serif text-sand">
              <a href="#" onClick={() => setMobileMenu(false)}>Inicio</a>
              <a href="#mision" onClick={() => setMobileMenu(false)}>Estrategia</a>
              <a href="#biologa" onClick={() => setMobileMenu(false)}>Ivonne Morales</a>
              <a href="#expediciones" onClick={() => setMobileMenu(false)}>Expediciones</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-forest">
      <div className="absolute inset-0 z-0 scale-105">
        <img 
          src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=2560" 
          alt="Bosque de Niebla" 
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-forest via-forest/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-sand/10 border border-sand/20 text-sand text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] mb-6 md:mb-10 backdrop-blur-md">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              Conservación • Ciencia • Senderismo Comunitario
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-9xl text-sand font-serif leading-[0.85] mb-8 md:mb-10 tracking-tight uppercase">
              Silvestria <br />
              <span className="italic font-extralight text-sand/60 text-3xl md:text-5xl lg:text-7xl lowercase tracking-tighter italic">"Senderismo Comunitario"</span>
            </h1>
            <p className="text-sand/80 text-base md:text-2xl max-w-2xl mb-10 md:mb-12 leading-relaxed font-light">
              Liderado por la <span className="text-white font-medium italic underline decoration-sepia/50 underline-offset-4">Biol. Ivonne Morales Muñoz</span>, reconocida por su labor en el Suelo de Conservación de la CDMX y el desarrollo de proyectos de restauración y educación ambiental. Transformamos la ciencia en desarrollo sostenible local.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <button className="bg-sand text-forest px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:bg-cream transition-all shadow-2xl hover:scale-105 group font-sans">
                Explorar Rutas
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical text */}
      <div className="absolute right-12 bottom-12 hidden xl:block">
        <div className="flex items-center gap-4 rotate-90 origin-right translate-x-full">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-sand/30">Fundada en 2025 • Ivonne Morales</span>
          <div className="w-24 h-px bg-sand/20"></div>
        </div>
      </div>
    </section>
  );
};

const StrategicPlan = () => {
  return (
    <section id="mision" className="py-32 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 p-24 opacity-[0.03] scale-[3] pointer-events-none">
        <EcoMexicoLogo color="forest" />
      </div>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 text-center lg:text-left"
          >
           <DynamicGraphic src="/2.png" className="mb-4" />
            <div className="flex items-center justify-center lg:justify-start gap-4 text-sepia">
              <TreePine className="w-10 h-10" />
              <h3 className="text-3xl font-serif text-forest">Misión</h3>
            </div>
            <p className="text-forest/70 text-lg leading-relaxed font-light italic">
              "Fomentar una cultura de respeto hacia los ecosistemas mexicanos mediante el senderismo comunitario, integrando el conocimiento técnico para generar un impacto social y ambiental positivo."
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-8 text-center lg:text-left"
          >
            <DynamicGraphic src="/3.png" className="mb-4" />
            <div className="flex items-center justify-center lg:justify-start gap-4 text-sepia">
              <Globe className="w-10 h-10" />
              <h3 className="text-3xl font-serif text-forest">Visión</h3>
            </div>
            <p className="text-forest/70 text-lg leading-relaxed font-light italic">
              "Ser el puente líder entre el conocimiento biológico científico de la UNAM y la gestión gubernamental, transformando el ecoturismo en un motor de regeneración ambiental en México."
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8 text-center lg:text-left"
          >
            <DynamicGraphic src="/4.png" className="mb-4" />
            <div className="flex items-center justify-center lg:justify-start gap-4 text-sepia">
              <ShieldCheck className="w-10 h-10" />
              <h3 className="text-3xl font-serif text-forest">Objetivo</h3>
            </div>
            <p className="text-forest/70 text-lg leading-relaxed font-light italic">
              "Garantizar la preservación de recursos naturales mediante la implementación de ecotecnias, monitoreo biológico y educación ambiental con rigor técnico y normativo."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProfileSection = () => {
  return (
    <section id="biologa" className="py-32 bg-sand relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center">
        <div className="relative group max-w-md mx-auto lg:max-w-none">
          <div className="absolute -inset-4 bg-sepia/5 rounded-[60px] blur-3xl transform rotate-3 scale-95 group-hover:rotate-0 transition-transform duration-1000"></div>
          <div className="relative aspect-[3/4] rounded-[50px] overflow-hidden shadow-2xl border-4 md:border-8 border-cream group-hover:shadow-forest/20 transition-shadow">
            <img 
              src="/biologa_perfil.png" 
              alt="Biol. Ivonne Morales Muñoz - Senderismo Comunitario" 
              className="w-full h-full object-cover saturate-[0.9] contrast-110"
              referrerPolicy="no-referrer"
            />
            {/* Overlay for branding */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent"></div>
            <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8">
              <div className="bg-sand/90 backdrop-blur-md p-3 md:p-4 rounded-xl md:rounded-2xl border border-sand/50 shadow-xl">
                <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-sepia mb-1">Especialidad</p>
                <p className="text-lg md:text-xl font-serif text-forest italic">Senderismo Comunitario</p>
              </div>
            </div>
          </div>
          {/* Badge */}
          <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-forest p-6 md:p-10 rounded-full shadow-2xl flex flex-col items-center justify-center text-sand border-4 border-sand scale-75 md:scale-100 z-10">
            <EcoMexicoLogo color="#F5F2ED" className="w-6 h-6 md:w-10 md:h-10 mb-2" />
            <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-emerald-400">CIENCIAS UNAM</span>
            <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest">Bióloga</span>
          </div>
        </div>

        <div className="space-y-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sepia">
              <div className="w-10 h-px bg-sepia"></div>
              <span className="text-xs font-bold uppercase tracking-[0.3em]">Perfil Profesional</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif text-forest leading-[1.1]">
              Ivonne del Carmen <br />
              <span className="italic font-light text-2xl md:text-4xl text-sepia">Morales Muñoz</span>
            </h2>
            <p className="text-forest text-sm font-bold uppercase tracking-widest italic">Bióloga por la Facultad de Ciencias, UNAM</p>
          </div>
          <p className="text-forest/70 text-xl leading-relaxed font-light italic">
            "Mi experiencia en la planeación y ejecución de proyectos ambientales, en coordinación con diversas instituciones de la CDMX y la academia, me permite hoy integrar el senderismo comunitario como eje de transformación territorial."
          </p>
          <div className="grid grid-cols-2 gap-10 py-6 border-y border-forest/10">
            <div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-forest/40 mb-2">Especialidad Técnica</p>
              <p className="text-lg font-bold text-forest">Sanidad Forestal</p>
              <p className="text-sm text-forest/60">Monitoreo y Restauración</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-forest/40 mb-2">Impacto Social</p>
              <p className="text-lg font-bold text-forest">Turismo Comunitario</p>
              <p className="text-sm text-forest/60">Educación Ambiental Activa</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => {
                const modalEvent = new CustomEvent('openContactModal');
                window.dispatchEvent(modalEvent);
              }}
              className="bg-sepia text-sand px-8 py-4 rounded-full font-bold hover:bg-forest transition-all shadow-lg flex items-center gap-3 font-sans"
            >
              Contactar por Email
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExpeditionCard = ({ title, location, type, img }: { title: string, location: string, type: string, img: string }) => (
    <motion.div 
    whileHover={{ y: -15 }}
    className="group relative h-[400px] md:h-[600px] rounded-[30px] md:rounded-[50px] overflow-hidden cursor-pointer"
  >
    <img 
      src={img} 
      alt={title} 
      className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-1000 group-hover:scale-110 group-hover:grayscale-0" 
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/20 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full translate-y-4 md:translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
      <div className="flex items-center gap-3 text-sand/60 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] mb-2 md:mb-4">
        <MapPin className="w-3 h-3" />
        {location}
      </div>
      <h3 className="text-2xl md:text-4xl font-serif text-sand mb-4 md:mb-6">{title}</h3>
      <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
        <div className="flex gap-2 md:gap-3 flex-wrap">
          <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[8px] md:text-[10px] font-bold text-sand uppercase tracking-widest border border-white/10">{type}</span>
          <span className="px-3 py-1 bg-emerald-500 rounded-full text-[8px] md:text-[10px] font-bold text-sand uppercase tracking-widest">En Reserva</span>
        </div>
        <div className="bg-sand text-forest p-2 md:p-3 rounded-full hover:scale-110 transition-transform">
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
        </div>
      </div>
    </div>
  </motion.div>
);

const Expeditions = () => {
  return (
    <section id="expediciones" className="py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-8">
        <div className="max-w-2xl mb-24">
          <div className="flex items-center gap-3 text-sepia mb-6">
            <div className="w-12 h-px bg-sepia"></div>
            <span className="text-xs font-bold uppercase tracking-[0.4em]">Experiencias 2025</span>
          </div>
          <h2 className="text-6xl font-serif text-forest leading-tight">
            Viajes que siembran <br />
            <span className="italic font-light">futuro.</span>
          </h2>
        </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <ExpeditionCard 
            title="Suelo de Conservación"
            location="Milpa Alta, CDMX"
            type="Gestión Forestal"
            img="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200"
          />
          <ExpeditionCard 
            title="Restauración Ecológica"
            location="Iztapalapa"
            type="Turismo Comunitario"
            img="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200"
          />
          <ExpeditionCard 
            title="Divulgación Científica"
            location="Comunidad de Aprendizaje"
            type="Senderismo Educativo"
            img="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=1200"
          />
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-forest pt-32 pb-12 text-sand overflow-hidden relative">
      {/* Decorative large logo in background */}
      <div className="absolute -bottom-20 -right-20 opacity-[0.03] scale-[4] rotate-12 pointer-events-none">
        <EcoMexicoLogo />
      </div>

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 mb-24">
          <div className="lg:col-span-2 space-y-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 text-center md:text-left">
              <div className="w-32 h-32 md:w-48 md:h-48 relative flex items-center justify-center">
                <img 
                  src="/1.png" 
                  alt="Silvestria Logo" 
                  className="w-full h-full object-contain mix-blend-multiply"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-3xl md:text-5xl font-bold tracking-tight uppercase">SILVESTRIA</span>
                <span className="text-[10px] md:text-sm uppercase tracking-[0.5em] text-sepia font-bold mt-2 md:ml-1 text-emerald-400">Senderismo Comunitario</span>
              </div>
            </div>
            <p className="text-base md:text-lg text-sand/50 max-w-md font-light italic leading-relaxed text-center md:text-left mx-auto md:mx-0">
              Plataforma dedicada a la conservación de la biodiversidad mexicana a través del turismo científico. Liderado por Ivonne Morales Muñoz.
            </p>
            <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-sand/30">
              <span className="text-emerald-400 underline decoration-sepia decoration-2 underline-offset-4">UNAM Alumni</span>
              <span>Gestión Ambiental</span>
              <span>Protección de Suelos</span>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-xl font-serif">Plan Estratégico</h4>
            <ul className="space-y-4 text-sm text-sand/40 font-medium">
              <li className="hover:text-sand transition-colors cursor-pointer">Sustentabilidad UNAM</li>
              <li className="hover:text-sand transition-colors cursor-pointer">Educación Ambiental</li>
              <li className="hover:text-sand transition-colors cursor-pointer">Gestión de Recursos</li>
              <li className="hover:text-sand transition-colors cursor-pointer">Ética de Conservación</li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xl font-serif">Contacto Directo</h4>
            <ul className="space-y-4 text-sm text-sand/40 font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-sepia" />
                <span>Alcaldía Milpa Alta, CDMX <br /> <span className="opacity-50">Suelo de Conservación</span></span>
              </li>
              <li className="flex items-center gap-3">
                <Droplets className="w-5 h-5 shrink-0 text-sepia" />
                <a href="mailto:silvestria.crc@outlook.com" className="hover:text-sand break-all">silvestria.crc@outlook.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Leaf className="w-5 h-5 shrink-0 text-sepia" />
                <span>+52 56 2579 0387</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-sand/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-sand/20">
          <div className="flex gap-8">
            <span>© 2026 Silvestria - Senderismo Comunitario</span>
            <span>Conservación & Biodiversidad</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-sand transition-colors">Ética Científica</a>
            <a href="#" className="hover:text-sand transition-colors">Transparencia Pública</a>
            <a href="#" className="hover:text-sand transition-colors">UNAM Alumni</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsContactModalOpen(true);
    window.addEventListener('openContactModal', handleOpenModal);
    return () => window.removeEventListener('openContactModal', handleOpenModal);
  }, []);

  return (
    <main className="bg-cream selection:bg-sepia selection:text-sand">
      <Navbar onContactClick={() => setIsContactModalOpen(true)} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <Hero />
      
      {/* Dynamic Ticker */}
      <div className="bg-sepia text-sand py-4 overflow-hidden whitespace-nowrap border-y border-white/10 relative z-20">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-24 items-center text-[10px] font-bold uppercase tracking-[0.5em]"
        >
          <span>Silvestria</span>
          <div className="w-1.5 h-1.5 bg-sand/30 rounded-full"></div>
          <span>Senderismo Comunitario</span>
          <div className="w-1.5 h-1.5 bg-sand/30 rounded-full"></div>
          <span>Biol. Ivonne Morales Muñoz</span>
          <div className="w-1.5 h-1.5 bg-sand/30 rounded-full"></div>
          <span>Gestión de Suelo de Conservación</span>
          <div className="w-1.5 h-1.5 bg-sand/30 rounded-full"></div>
          <span>Restauración Ecológica</span>
          <div className="w-1.5 h-1.5 bg-sand/30 rounded-full"></div>
          <span>Turismo Comunitario</span>
          <div className="w-1.5 h-1.5 bg-sand/30 rounded-full"></div>
          <span>UNAM Ciencias</span>
          <div className="w-1.5 h-1.5 bg-sand/30 rounded-full"></div>
          <span>Sustentabilidad Territorial</span>
        </motion.div>
      </div>

      <StrategicPlan />
      <ProfileSection />
      
      {/* Featured Quote Section */}
      <section className="py-40 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="absolute -top-20 -left-20 text-[20rem] font-serif text-forest/5 leading-none select-none">“</div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-12 relative z-10"
          >
            <h2 className="text-5xl lg:text-8xl font-serif text-forest leading-tight italic">
              "No heredamos la tierra de nuestros ancestros, la pedimos prestada a nuestros hijos."
            </h2>
            <div className="flex items-center justify-center gap-6">
              <div className="w-12 h-px bg-sepia"></div>
              <p className="text-xl font-serif italic text-sepia">Proverbio de Conservación</p>
              <div className="w-12 h-px bg-sepia"></div>
            </div>
          </motion.div>
        </div>
      </section>

      <Expeditions />
      
      {/* Contact Section instead of ShareSection */}
      <section className="py-32 bg-sepia relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[#000] mix-blend-overlay"></div>
          <img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=2560" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center text-sand">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-sand/10 rounded-full flex items-center justify-center mx-auto mb-10 backdrop-blur-md border border-sand/20 text-sand">
              <TreePine className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-7xl font-serif mb-10 leading-tight">
              ¿Listo para ser parte <br />
              <span className="italic font-light text-sand/60 text-2xl md:text-6xl">del cambio biológico?</span>
            </h2>
            <p className="text-xl opacity-70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Contacta directamente a la Biol. Ivonne Morales para expediciones personalizadas o consultoría en conservación.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <button 
                onClick={() => {
                  const modalEvent = new CustomEvent('openContactModal');
                  window.dispatchEvent(modalEvent);
                }}
                className="bg-sand text-sepia px-12 py-5 rounded-full font-bold flex items-center gap-3 hover:bg-white transition-all shadow-2xl active:scale-95 font-sans"
              >
                silvestria.crc@outlook.com
                <ArrowRight className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-4 text-sand/60 text-xs font-bold uppercase tracking-widest font-sans">
                <span>WhatsApp:</span>
                <span className="text-sand">+52 56 2579 0387</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
