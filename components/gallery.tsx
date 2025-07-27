"use client"

import { useState, useEffect, useRef } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const galleryImages = [
  { 
    src: "/images/image8.png", 
    alt: "Indiabulls Heights luxury living room interior design with modern furnishing", 
    category: "Interior",
    width: 600,
    height: 400
  },
  { 
    src: "/images/image2.png", 
    alt: "Indiabulls Heights spacious master bedroom with premium amenities", 
    category: "Interior",
    width: 600,
    height: 400
  },
  { 
    src: "/images/image3.png", 
    alt: "Indiabulls Heights modern kitchen with premium appliances and fittings", 
    category: "Interior",
    width: 600,
    height: 400
  },
  { 
    src: "/images/image4.png", 
    alt: "Indiabulls Heights building exterior architecture in Sector 104 Gurugram", 
    category: "Exterior",
    width: 600,
    height: 400
  },
  { 
    src: "/images/image5.png", 
    alt: "Indiabulls Heights Olympic-size swimming pool amenity", 
    category: "Amenities",
    width: 600,
    height: 400
  },
  { 
    src: "/images/image6.png", 
    alt: "Indiabulls Heights fully equipped fitness center and gymnasium", 
    category: "Amenities",
    width: 600,
    height: 400
  },
  { 
    src: "/images/image7.png", 
    alt: "Indiabulls Heights covered parking facilities for residents", 
    category: "Amenities",
    width: 600,
    height: 400
  },
  { 
    src: "/images/image9.png", 
    alt: "Indiabulls Heights premium kitchen design with island counter", 
    category: "Interior",
    width: 600,
    height: 400
  },
  { 
    src: "/images/image1.png", 
    alt: "Indiabulls Heights apartment balcony view overlooking Sector 104 Gurugram", 
    category: "Interior",
    width: 600,
    height: 400
  },
]

const categories = ["All", "Interior", "Exterior", "Amenities"]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "unset"
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === "Escape") closeLightbox()
        if (e.key === "ArrowRight") nextImage()
        if (e.key === "ArrowLeft") prevImage()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage])

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Project <span className="text-orange-600">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the stunning interiors, exteriors, and amenities of Indiabulls Heights through our comprehensive
            gallery.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-orange-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="animate-on-scroll group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(index)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-lg font-semibold">{image.alt}</div>
                    <div className="text-sm">{image.category}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button onClick={closeLightbox} className="absolute top-4 right-4 text-white hover:text-gray-300 z-10">
              <X className="h-8 w-8" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <div className="max-w-4xl max-h-full">
              <img
                src={filteredImages[selectedImage].src || "/placeholder.svg"}
                alt={filteredImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />
              <div className="text-center text-white mt-4">
                <div className="text-xl font-semibold">{filteredImages[selectedImage].alt}</div>
                <div className="text-sm text-gray-300">{filteredImages[selectedImage].category}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
