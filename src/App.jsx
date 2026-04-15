import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const images = [
  "/villa1.jpg",
  "/villa2.jpg",
  "/villa3.jpg",
  "/villa4.jpg",
  "/villa5.jpg",
  "/villa6.jpg",
  "/villa7.jpg",
  "/villa8.jpg",
  "/villa9.jpg",
  "/villa10.jpg",
  "/villa11.jpg",
  "/villa12.jpg",
  "/villa13.jpg",
  "/villa14.jpg",
  "/villa15.jpg",
  "/villa16.jpg",
];

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
  const handleKey = (e) => {
    if (!selectedImage) return;

    const currentIndex = images.indexOf(selectedImage);

    if (e.key === "ArrowRight") {
      const nextIndex = (currentIndex + 1) % images.length;
      setSelectedImage(images[nextIndex]);
    }

    if (e.key === "ArrowLeft") {
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      setSelectedImage(images[prevIndex]);
    }

    if (e.key === "Escape") {
      setSelectedImage(null);
    }
  };

  window.addEventListener("keydown", handleKey);
  return () => window.removeEventListener("keydown", handleKey);
}, [selectedImage]);

  const [touchStart, setTouchStart] = useState(0);

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
      <a href="#home" className="hover:text-yellow-400 transition">Home</a>
      <a href="#about" className="hover:text-yellow-400 transition">About</a>
      <a href="#gallery" className="hover:text-yellow-400 transition">Gallery</a>
      <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
    </div>

  </div>
</nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="h-screen pt-20 flex flex-col justify-center items-center text-center px-4 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/villa.jpg')"
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

      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>

     

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

  <div className="flex overflow-x-auto gap-6 pb-4">

    {images.map((img, index) => (
      <div
        key={index}
        onClick={() => setSelectedImage(img)}
        className="relative min-w-[250px] h-64 overflow-hidden rounded-2xl group cursor-pointer"
      >
        {/* IMAGE */}
        <img
          src={img}
          alt={`Villa ${index + 1}`}
          loading="lazy"
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
          <span className="text-white text-sm tracking-wide">
            View
          </span>
        </div>
      </div>
    ))}

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

  <p className="text-gray-300">
    Gamekkanda, Mathugama, Sri Lanka
  </p>

  <a
    href="https://wa.me/94704214127"
    className="text-gray-300 hover:text-green-400 transition block mt-2"
  >
    +94 70 421 4127
  </a>

  <a
    href="https://wa.me/94704214127"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-500 transition duration-300 shadow-lg hover:scale-105"
  >
    <FaWhatsapp className="text-xl" />
    Chat on WhatsApp
  </a>

</motion.section>

<footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-800">
  © {new Date().getFullYear()} Anne’s Villa Gamekkanda. All rights reserved.
</footer>

  <a
    href="https://wa.me/94704214127"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-500 transition duration-300 z-50"
  >
    <FaWhatsapp className="text-2xl" />
  </a>

{selectedImage && (
  <div
    className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"

    onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}

    onTouchEnd={(e) => {
      const touchEnd = e.changedTouches[0].clientX;
      const diff = touchStart - touchEnd;

      const currentIndex = images.indexOf(selectedImage);

      if (diff > 50) {
        const nextIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[nextIndex]);
      }

      if (diff < -50) {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedImage(images[prevIndex]);
      }
    }}
  >

    {/* CLOSE BUTTON */}
    <button
      onClick={() => setSelectedImage(null)}
      className="absolute top-6 right-6 text-white text-3xl hover:text-yellow-400 transition"
    >
      ✕
    </button>

    {/* LEFT ARROW */}
    <button
      onClick={() => {
        const currentIndex = images.indexOf(selectedImage);
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedImage(images[prevIndex]);
      }}
      className="absolute left-6 bg-black/40 px-3 py-1 rounded-full text-white text-3xl hover:text-yellow-400 transition"
    >
      ‹
    </button>

    {/* IMAGE */}
    <img
      src={selectedImage}
      alt="Preview"
      className="max-w-[90%] max-h-[90%] rounded-xl scale-95 animate-[fadeIn_0.3s_ease_forwards]"
      onClick={(e) => e.stopPropagation()}
    />

    {/* RIGHT ARROW */}
    <button
      onClick={() => {
        const currentIndex = images.indexOf(selectedImage);
        const nextIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[nextIndex]);
      }}
      className="absolute right-6 bg-black/40 px-3 py-1 rounded-full text-white text-3xl hover:text-yellow-400 transition"
    >
      ›
    </button>

  </div>
)}
    </div>
  );
}