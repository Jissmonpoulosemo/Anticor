import React, { useState, useEffect } from "react";
import "./App.css";
import { motion, useScroll } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Play,
  X,
  MessageCircle,
  Send,
  Sun,
  Moon,
  Menu,
  Mail,
  Phone,
  Trash2,
} from "lucide-react";

// Import social media icons from react-icons
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { type: "bot", text: "Hello! I'm your AI assistant. How can I help you today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [volunteerForm, setVolunteerForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Logo - Using your image 1000820745.jpg
  const logoUrl = "/image/1000820745.jpg";

  // Gallery state with your images - renamed as News 1, News 2, etc.
  const [galleryImages, setGalleryImages] = useState([
    { 
      id: 1, 
      url: "/image/1000820748.jpg", 
      title: "News 1", 
      category: "News" 
    },
    { 
      id: 2, 
      url: "/image/sunil.jpg", 
      title: "News 2", 
      category: "News" 
    },
    { 
      id: 3, 
      url: "/image/sunil2.jpg", 
      title: "News 4", 
      category: "News" 
    },
    { 
      id: 4, 
      url: "/image/1000820746.jpg", 
      title: "News 3", 
      category: "News" 
    },
  ]);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);
  const [galleryFilter, setGalleryFilter] = useState("all");

  // Main person images for carousel (portrait images)
  const heroImages = [
    "/image/1000820751.jpg",
    "/image/1000820751.jpg",
    "/image/1000820751.jpg",
  ];

  // Auto-slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // useScroll is kept for potential future use
  useScroll();

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    setChatMessages([...chatMessages, { type: "user", text: chatMessage }]);
    setIsLoading(true);
    setTimeout(() => {
      const responses = [
        "Our education policy focuses on accessible, quality education for all.",
        "The next rally is scheduled for December 15th at 5 PM.",
        "You can volunteer by filling out the volunteer form on our website.",
        "Today's event is at the City Convention Center at 3 PM."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setChatMessages(prev => [...prev, { type: "bot", text: randomResponse }]);
      setIsLoading(false);
    }, 1000);
    setChatMessage("");
  };

  // Gallery functions
  const handleDeleteImage = (id) => {
    setGalleryImages(galleryImages.filter(img => img.id !== id));
  };

  const filteredGallery = galleryFilter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === galleryFilter);

  const categories = [...new Set(galleryImages.map(img => img.category))];

  // Volunteer form submission - WhatsApp
  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "9633228352";
    const message = `Name: ${volunteerForm.name}%0APhone: ${volunteerForm.phone}%0AEmail: ${volunteerForm.email}%0AMessage: ${volunteerForm.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setVolunteerForm({ name: "", phone: "", email: "", message: "" });
  };

  const timelineEvents = [
    { year: 2012, title: "Started Movement", description: "Founded with a vision for change" },
    { year: 2015, title: "First Public Campaign", description: "Launched our first major campaign" },
    { year: 2018, title: "Education Reforms", description: "Implemented key social studies" },
    { year: 2022, title: "Youth Leadership", description: "Empowered young leaders for the people" },
    { year: 2026, title: "Future Vision", description: "Building a brighter tomorrow for anti corruption" },
  ];

  const achievements = [
    { label: "Projects Completed", value: 10, icon: "🏗️" },
    { label: "Roads resolved", value: 14, icon: "🛣️" },
    { label: "Water Projects resolved", value: 1, icon: "💧" },
    { label: "Employment Generated", value: 8, icon: "💼" },
  ];

  const OurVision = [
    { title: "Education", icon: "🎓", description: "Quality education for every citizen" },
    { title: "Healthcare", icon: "🏥", description: "Universal healthcare access" },
    { title: "Women Empowerment", icon: "👩", description: "Empowering women in all sectors" },
    { title: "Agriculture", icon: "🌾", description: "Modernizing farming practices" },
    { title: "Employment", icon: "💼", description: "Creating jobs and opportunities" },
    { title: "Digital India", icon: "💻", description: "Digital transformation for all" },
    { title: "Environment", icon: "🌿", description: "Sustainable development" },
    { title: "Infrastructure", icon: "🏗️", description: "Building modern infrastructure" },
  ];

  return (
    <div className={`App ${isDarkMode ? "dark" : ""}`}>
      {/* Background Effects */}
      <div className="bg-gradient"></div>
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      {/* Navbar */}
      <nav className={`navbar ${isDarkMode ? "dark" : ""}`}>
        <div className="nav-container">
          <div className="logo">
            <img 
              src={logoUrl} 
              alt="Logo" 
              className="logo-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/60x60/FF6B00/FFFFFF?text=M";
              }}
            />
            <span className="logo-text">Anti Corruption People</span>
          </div>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#vision">Vision</a>
            <a href="#achievements">Achievements</a>
            <a href="#gallery">Gallery</a>
            <a href="#volunteer">Volunteer</a>
            <a href="#contact">Contact</a>
            <button className="theme-toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#home">Home</a>
            <a href="#vision">Vision</a>
            <a href="#achievements">Achievements</a>
            <a href="#gallery">Gallery</a>
            <a href="#volunteer">Volunteer</a>
            <a href="#contact">Contact</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section with Carousel */}
      <section id="home" className="hero">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-content"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.02, 1],
              opacity: [1, 0.8, 1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="hero-badge"
          >
            <span className="badge-dot"></span>
            A movement for people
          </motion.div>

          <h1 className="hero-title">
            Leading With
            <span className="gradient-text"> Vision</span>
          </h1>

          <p className="hero-subtitle">
            Dedicated to public service, leadership, education and global dialogue through impactful initiatives and meaningful work.
          </p>

          <div className="hero-buttons">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="primary-btn"
              onClick={() => {
                document.getElementById('volunteer')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Connect Now
              <ArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="secondary-btn"
              onClick={() => window.open('https://youtube.com/@sunilkarappadam2452?si=sEai5jH871iwUm8s', '_blank')}
            >
              <Play size={18} />
              Watch Story
            </motion.button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                20+
              </motion.h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                120
              </motion.h3>
              <p>Public Talks</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                15
              </motion.h3>
              <p>Social Achievements</p>
            </div>
          </div>
        </motion.div>

        {/* Portrait Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hero-carousel"
        >
          <div className="carousel-container">
            {heroImages.map((image, index) => (
              <div 
                key={index}
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              >
                <img 
                  src={image} 
                  alt={`Portrait ${index + 1}`} 
                  loading="lazy"
                />
              </div>
            ))}
            <div className="carousel-dots">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="image-overlay"></div>
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="pulse-ring"
          ></motion.div>
        </motion.div>
      </section>

      {/* Vision Section - Cards only, no paragraph */}
      <section id="vision" className="vision-section">
        <h2 className="section-title">Our Vision</h2>
        <div className="vision-grid">
          {OurVision.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
              }}
              className="vision-card"
            >
              <div className="vision-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <button className="learn-more">Learn More →</button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements - Cards only, no paragraph */}
      <section id="achievements" className="achievements-section">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="achievement-card"
            >
              <div className="achievement-icon">{item.icon}</div>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {item.value.toLocaleString()}
              </motion.h3>
              <p>{item.label}</p>
              <div className="progress-bar">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${Math.min((item.value / 1000) * 100, 100)}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="progress-fill"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <h2 className="section-title">News Gallery</h2>
        
        {/* Gallery Filters - News only */}
        <div className="gallery-filters">
          <button 
            className={galleryFilter === "all" ? "active" : ""} 
            onClick={() => setGalleryFilter("all")}
          >
            All
          </button>
          {categories.map(cat => (
            <button 
              key={cat}
              className={galleryFilter === cat ? "active" : ""} 
              onClick={() => setGalleryFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredGallery.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.03 }}
              className="gallery-item"
              onClick={() => setSelectedGalleryImage(image)}
            >
              <img src={image.url} alt={image.title} loading="lazy" />
              <div className="gallery-overlay">
                <h4>{image.title}</h4>
                <span className="gallery-category">{image.category}</span>
                <button 
                  className="delete-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteImage(image.id);
                  }}
                  aria-label="Delete image"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedGalleryImage && (
          <div className="lightbox" onClick={() => setSelectedGalleryImage(null)}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={() => setSelectedGalleryImage(null)}>
                <X size={24} />
              </button>
              <img src={selectedGalleryImage.url} alt={selectedGalleryImage.title} />
              <div className="lightbox-info">
                <h3>{selectedGalleryImage.title}</h3>
                <span className="lightbox-category">{selectedGalleryImage.category}</span>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <h2 className="section-title">Our Journey</h2>
        <div className="timeline">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="timeline-item"
            >
              <div className="timeline-year">{event.year}</div>
              <div className="timeline-content">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
              {index < timelineEvents.length - 1 && (
                <div className="timeline-line"></div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Volunteer Portal - WhatsApp Integration */}
      <section id="volunteer" className="volunteer-section">
        <h2 className="section-title">Volunteer Portal</h2>
        <div className="volunteer-container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="volunteer-info"
          >
            <h3>Join the Movement</h3>
            <p>Be part of something bigger. Your skills and time can make a real difference in our communities.</p>
            <div className="volunteer-stats">
              <div className="volunteer-stat">
                <span>10</span>
                <p>Active Volunteers</p>
              </div>
              <div className="volunteer-stat">
                <span>3</span>
                <p>Achievements Done</p>
              </div>
              <div className="volunteer-stat">
                <span>85%</span>
                <p>Impact Rate</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="volunteer-form"
          >
            <h3>Connect via WhatsApp</h3>
            <p className="form-subtitle">Send a message directly to our team</p>
            <form onSubmit={handleVolunteerSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={volunteerForm.name}
                  onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={volunteerForm.phone}
                  onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={volunteerForm.email}
                  onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  value={volunteerForm.message}
                  onChange={(e) => setVolunteerForm({ ...volunteerForm, message: e.target.value })}
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="submit-btn whatsapp-btn"
              >
                <Send size={18} /> Send via WhatsApp
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2 className="section-title">Contact</h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <Phone size={24} />
              <div>
                <h4>Phone</h4>
                <p>+91 9446828106</p>
              </div>
            </div>
            <div className="contact-item">
              <Mail size={24} />
              <div>
                <h4>Email</h4>
                <p>anticorruptionpeople@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <MapPin size={24} />
              <div>
                <h4>Location</h4>
                <p>India</p>
              </div>
            </div>
          </div>
          <div className="social-links-large">
            <a href="https://www.instagram.com/bjp.karappadam?igsh=MXFuOTkxbTdna2Mzeg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={30} /></a>
            <a href="https://www.facebook.com/share/1LgbjxjGgB/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF size={30} /></a>
            <a href="https://youtube.com/@sunilkarappadam2452?si=sEai5jH871iwUm8s" target="_blank" rel="noopener noreferrer" aria-label="Youtube"><FaYoutube size={30} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter size={30} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn size={30} /></a>
          </div>
        </div>
      </section>

      {/* AI Chat Assistant */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className={`chat-bubble ${showChat ? "active" : ""}`}
        onClick={() => setShowChat(!showChat)}
      >
        <MessageCircle size={24} />
      </motion.div>

      {showChat && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="chat-window"
        >
          <div className="chat-header">
            <h3>AI Assistant</h3>
            <button className="close-chat" onClick={() => setShowChat(false)}>
              <X size={20} />
            </button>
          </div>
          <div className="chat-messages">
            {chatMessages.map((msg, index) => (
              <div key={index} className={`message ${msg.type}`}>
                {msg.type === "bot" && <div className="avatar">🤖</div>}
                <div className="message-content">{msg.text}</div>
                {msg.type === "user" && <div className="avatar">👤</div>}
              </div>
            ))}
            {isLoading && (
              <div className="message bot">
                <div className="avatar">🤖</div>
                <div className="message-content typing">
                  <span>.</span><span>.</span><span>.</span>
                </div>
              </div>
            )}
          </div>
          <form onSubmit={handleChatSubmit} className="chat-input">
            <input
              type="text"
              placeholder="Ask me anything..."
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
            />
            <button type="submit">
              <Send size={20} />
            </button>
          </form>
        </motion.div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Anti Corruption People</h3>
            <p>Dedicated to public service, leadership, education and global dialogue.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#vision">Vision</a>
            <a href="#achievements">Achievements</a>
            <a href="#gallery">Gallery</a>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <a href="#volunteer">Volunteer</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://www.instagram.com/bjp.karappadam?igsh=MXFuOTkxbTdna2Mzeg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={20} /></a>
              <a href="https://www.facebook.com/share/1LgbjxjGgB/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF size={20} /></a>
              <a href="https://youtube.com/@sunilkarappadam2452?si=sEai5jH871iwUm8s" target="_blank" rel="noopener noreferrer" aria-label="Youtube"><FaYoutube size={20} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter size={20} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn size={20} /></a>
            </div>
            <div className="newsletter">
              <input type="email" placeholder="Your Email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Anti Corruption People. All rights reserved.</p>
          <p>Helpline: 9633228352</p>
        </div>
      </footer>
    </div>
  );
}

export default App;