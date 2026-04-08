import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">
  <div className="flex justify-between items-center px-8 py-4">

    {/* LOGO */}
    <div className="text-yellow-400 font-serif flex flex-col items-center leading-tight">
      <h1 className="text-2xl tracking-wide">
        Anne’s Villa
      </h1>
      <p className="text-xs tracking-widest uppercase opacity-70">
        Gamekkanda
      </p>
    </div>

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

          <a
            href="mailto:annesvilla.gamekkanda@gmail.com?subject=Stay Booking Inquiry&body=Hello,%0A%0AI would like to inquire about booking a stay at Anne's Villa.%0A%0AThank you."
            target="_blank"
            className="mt-6 px-6 py-3 bg-yellow-400 text-black rounded-full hover:bg-yellow-300 transition inline-block"
          >
            Book a Stay
          </a>
        </motion.div>
      </section>

     

      {/* ABOUT */}
<motion.section
  id="about"
  className="relative py-28 px-6 md:px-20 text-center bg-cover bg-[center_40%]"
  style={{
    backgroundImage: "url('/mom-bg.jpg')"
  }}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-3xl mx-auto">

    <h2 className="text-3xl text-yellow-400 mb-6 font-serif">
      Our Story
    </h2>

    <p className="text-gray-300 leading-relaxed">
      Anne’s Villa was built as a heartfelt birthday gift — a home created 
      with love, care, and a dream of something truly special.
    </p>

  </div>

</motion.section>

<motion.section
  id="about"
  className="py-28 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>

  {/* IMAGE */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src="/mom.jpg"
      alt="Anne"
      className="rounded-2xl w-72 h-72 object-cover shadow-2xl transition duration-500 hover:scale-105"
    />
  </div>

  {/* TEXT */}
  <div className="w-full md:w-1/2 text-center md:text-left">
    <h2 className="text-3xl text-yellow-400 mb-4 font-serif">
      For Anne
    </h2>

    <div className="w-12 h-[2px] bg-yellow-400 mb-4 mx-auto md:mx-0"></div>

    <p className="text-gray-300 leading-relaxed">
      This villa was built with love, as a special birthday surprise for Anne — 
      a woman whose warmth, strength, and kindness have shaped the lives around her.  
      Every corner of this home carries a story, a memory, and a deep appreciation 
      for everything she has given.
    </p>
  </div>

</motion.section>
     

      {/* GALLERY */}
      <motion.section
      id="gallery"
      className="py-20 px-6 md:px-20"
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

<motion.section
  id="reviews"
  className="py-20 px-6 md:px-20 text-center"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>

  <h2 className="text-3xl text-yellow-400 mb-12 font-serif">
    What People Say
  </h2>

  <div className="flex gap-6 overflow-x-auto pb-4">

    {/* REVIEW CARD */}
    <div className="min-w-[300px] bg-gray-900 p-6 rounded-2xl shadow-lg">
      <p className="text-gray-300 italic">
        “A beautiful and peaceful place. Truly feels like home.”
      </p>
      <h4 className="mt-4 text-yellow-400 font-semibold">– Guest</h4>
    </div>

    <div className="min-w-[300px] bg-gray-900 p-6 rounded-2xl shadow-lg">
      <p className="text-gray-300 italic">
        “Amazing design and atmosphere. A perfect getaway.”
      </p>
      <h4 className="mt-4 text-yellow-400 font-semibold">– Visitor</h4>
    </div>

    <div className="min-w-[300px] bg-gray-900 p-6 rounded-2xl shadow-lg">
      <p className="text-gray-300 italic">
        “Everything about this place feels warm and welcoming.”
      </p>
      <h4 className="mt-4 text-yellow-400 font-semibold">– Traveler</h4>
    </div>

    {/* ADD MORE REVIEWS LIKE THIS 👇 */}
    <div className="min-w-[300px] bg-gray-900 p-6 rounded-2xl shadow-lg">
      <p className="text-gray-300 italic">
        “A truly relaxing and beautiful environment.”
      </p>
      <h4 className="mt-4 text-yellow-400 font-semibold">– Guest</h4>
    </div>

    <div className="min-w-[300px] bg-gray-900 p-6 rounded-2xl shadow-lg">
      <p className="text-gray-300 italic">
        “Was a great experience, Had a great time with the fam.”
      </p>
      <h4 className="mt-4 text-yellow-400 font-semibold">– Guest</h4>
    </div>

        <div className="min-w-[300px] bg-gray-900 p-6 rounded-2xl shadow-lg">
      <p className="text-gray-300 italic">
        “Awesome place, Awesome staff.”
      </p>
      <h4 className="mt-4 text-yellow-400 font-semibold">– Guest</h4>
    </div>

  </div>

</motion.section>

      {/* CONTACT */}
      <motion.section 
        id="contact"
        className="py-20 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl text-yellow-400 mb-6 font-serif">
          Contact
        </h2>
        <p className="text-gray-300">Gamekkanda, Mathugama, Sri Lanka</p>
        <p className="text-gray-300">+94 70 421 4127</p>
        <a href="https://wa.me/94704214127" target="_blank">
        Chat on WhatsApp
        </a>
      </motion.section>

    </div>
  );
}