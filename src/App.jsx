import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">
  <div className="flex justify-between items-center px-8 py-4">

    {/* LOGO */}
    <h1 className="text-yellow-400 font-serif text-2xl tracking-wide">
      Anne’s Villa
    </h1>

    {/* LINKS */}
    <div className="space-x-6 text-sm">
      <a href="#home" className="hover:text-yellow-400">Home</a>
      <a href="#about" className="hover:text-yellow-400">About</a>
      <a href="#gallery" className="hover:text-yellow-400">Gallery</a>
      <a href="#contact" className="hover:text-yellow-400">Contact</a>
    </div>

  </div>
</nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="h-screen pt-20 flex flex-col justify-center items-center text-center px-4 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')"
        }}
      >

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* CONTENT */}
        <motion.div 
            className="relative z-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
          <h1 className="text-6xl md:text-8xl font-serif text-yellow-400 tracking-wide">
            Anne’s Villa
          </h1>
          <p className="mt-6 text-lg text-gray-300 tracking-wide">
            Built with Love
          </p>
        </motion.div>
      </section>

     

      {/* ABOUT */}
      <motion.section
        id="about"
        className="py-28 px-6 md:px-20 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl text-yellow-400 mb-6 font-serif">
          Our Story
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          Anne’s Villa was built as a heartfelt birthday gift — a home
          created with love, care, and a dream of something truly special.
        </p>
      </motion.section>
     

      {/* GALLERY */}
      <motion.section
      id="gallery"
      className="py-28 px-6 md:px-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      <h2 className="text-3xl text-yellow-400 text-center mb-10 font-serif">
        Gallery
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

      <img 
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
        alt="Luxury villa exterior"
        className="rounded-2xl h-64 w-full object-cover hover:scale-110 transition duration-700 ease-in-out"
      />

      <img 
        src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
        alt="Modern villa design"
        className="rounded-2xl h-64 w-full object-cover hover:scale-110 transition duration-700 ease-in-out"
      />

      <img 
        src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e"
        alt="Elegant house architecture"
        className="rounded-2xl h-64 w-full object-cover hover:scale-110 transition duration-700 ease-in-out"
      />
      </div>

      </motion.section>

      {/* CONTACT */}
      <motion.section 
        id="contact"
        className="py-28 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl text-yellow-400 mb-6 font-serif">
          Contact
        </h2>
        <p className="text-gray-300">Gamekkanda, Mathugama, Sri Lanka</p>
        <p className="text-gray-300">+94 70 421 4127</p>
      </motion.section>

    </div>
  );
}