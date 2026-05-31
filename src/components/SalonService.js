import React, { useState, useEffect } from 'react';

function SalonService() {
  // State for booking flow
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedStylist, setSelectedStylist] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerMessage, setCustomerMessage] = useState('');
  const [hairTypeFilter, setHairTypeFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [specialRequests, setSpecialRequests] = useState({
    privateRoom: false,
    daycare: false,
    quietChair: false,
    wheelchair: false
  });

  // Scroll to top only when changing pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Generate available dates
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      if (date.getDay() !== 0) {
        dates.push(date);
      }
    }
    return dates;
  };

  const availableDates = getAvailableDates();
  const timeSlots = [
    { time: '9:00 AM', popular: false },
    { time: '10:00 AM', popular: true },
    { time: '11:00 AM', popular: false },
    { time: '1:00 PM', popular: true },
    { time: '2:00 PM', popular: false },
    { time: '3:00 PM', popular: false },
    { time: '4:00 PM', popular: true },
    { time: '5:00 PM', popular: false }
  ];

  // Stylists data
  const stylists = [
    {
      id: 1,
      name: 'Jade Antoine',
      title: 'Lead Stylist',
      specialties: ['Textured Hair', 'Curls', 'Protective Styles', 'Locs'],
      rating: 4.9,
      reviews: 48,
      bio: 'Jade has over 8 years of experience working with all hair textures.',
      image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=150&h=150&fit=crop',
      nextAvailable: 'Tomorrow at 10:00 AM',
      quote: 'I work with your natural texture, not against it.',
      services: ['Haircut & Style', 'Curly Cut', 'Precision Trim', 'Protective Style Installation', 'Silk Press', 'Deep Conditioning']
    },
    {
      id: 2,
      name: 'Maya Williams',
      title: 'Senior Stylist',
      specialties: ['Colour', 'Balayage', 'Blowouts', 'Fine Hair'],
      rating: 4.8,
      reviews: 31,
      bio: 'Maya is certified in advanced colour techniques.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop',
      nextAvailable: 'Friday at 2:00 PM',
      quote: 'Great colour starts with healthy hair.',
      services: ['Haircut & Style', 'Blowout', 'Updo', 'Single Process Colour', 'Highlights', 'Balayage', 'Deep Conditioning']
    },
    {
      id: 3,
      name: 'Fatima Hassan',
      title: 'Stylist',
      specialties: ['All Hair Types', 'Hijabi Friendly', 'Precision Cuts'],
      rating: 4.9,
      reviews: 52,
      bio: 'Fatima offers private styling rooms and specializes in low-maintenance cuts.',
      image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=150&h=150&fit=crop',
      nextAvailable: 'Tomorrow at 11:00 AM',
      quote: 'Your comfort and privacy come first.',
      services: ['Haircut & Style', 'Precision Trim', 'Updo', 'Deep Conditioning', 'Scalp Treatment', 'Silk Press']
    },
    {
      id: 4,
      name: 'Sophia Chen',
      title: 'Stylist',
      specialties: ['Straight Hair', 'Fine Hair', 'Asian Hair Textures', 'Precision Cutting'],
      rating: 4.9,
      reviews: 44,
      bio: 'Sophia specializes in precision cutting for straight and fine hair textures.',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop',
      nextAvailable: 'Monday at 1:00 PM',
      quote: 'Precision cutting for every texture.',
      services: ['Haircut & Style', 'Precision Trim', 'Blowout', 'Single Process Colour', 'Highlights', 'Deep Conditioning']
    }
  ];

  // Services data with icons
  const services = [
    { id: 1, name: 'Haircut & Style', category: 'Cuts', description: 'Wash, cut, and blow-dry. Customized to your hair texture.', price: 65, duration: '60 min', popular: true, icon: '✂️' },
    { id: 2, name: 'Curly Cut', category: 'Cuts', description: 'Dry cut for curly, coily, and wavy textures.', price: 75, duration: '75 min', popular: true, icon: '🌀' },
    { id: 3, name: 'Precision Trim', category: 'Cuts', description: 'Quick trim for bangs, layers, or ends.', price: 25, duration: '20 min', popular: false, icon: '✂️' },
    { id: 4, name: 'Blowout', category: 'Styling', description: 'Wash, blow-dry, and style. Smooth and shiny.', price: 45, duration: '45 min', popular: false, icon: '💨' },
    { id: 5, name: 'Updo', category: 'Styling', description: 'Elegant styling for events or special occasions.', price: 85, duration: '60 min', popular: false, icon: '👑' },
    { id: 6, name: 'Single Process Colour', category: 'Color', description: 'All-over colour application.', price: 85, duration: '90 min', popular: false, icon: '🎨' },
    { id: 7, name: 'Highlights', category: 'Color', description: 'Partial or full highlights.', price: 120, duration: '120 min', popular: true, icon: '✨' },
    { id: 8, name: 'Balayage', category: 'Color', description: 'Hand-painted highlights for natural dimension.', price: 150, duration: '120 min', popular: true, icon: '🎨' },
    { id: 9, name: 'Deep Conditioning', category: 'Treatments', description: 'Intensive moisture treatment for all hair types.', price: 35, duration: '30 min', popular: false, icon: '💧' },
    { id: 10, name: 'Scalp Treatment', category: 'Treatments', description: 'Exfoliation and massage for scalp health.', price: 40, duration: '30 min', popular: false, icon: '🌿' },
    { id: 11, name: 'Protective Style Installation', category: 'Styles', description: 'Box braids, cornrows, or twists.', price: 150, duration: '180 min', popular: false, icon: '🔒' },
    { id: 12, name: 'Silk Press', category: 'Styles', description: 'Heat styling for natural textures.', price: 95, duration: '90 min', popular: false, icon: '✨' }
  ];

  // Gallery items
  const galleryItems = [
    { id: 1, type: 'Curl Cut', stylist: 'Jade', hairType: '4C Natural', image: 'https://images.unsplash.com/photo-1594843347405-78624c6eb044?w=400&h=250&fit=crop' },
    { id: 2, type: 'Silk Press', stylist: 'Jade', hairType: '4A Natural', image: 'https://images.unsplash.com/photo-1583195764036-6dc248ac07b9?w=400&h=250&fit=crop' },
    { id: 3, type: 'Box Braids', stylist: 'Jade', hairType: 'Protective', image: 'https://images.unsplash.com/photo-1605980776566-0486c3ac7617?w=400&h=250&fit=crop' },
    { id: 4, type: 'Balayage', stylist: 'Maya', hairType: 'Wavy', image: 'https://images.unsplash.com/photo-1595475884562-073c30d45670?w=400&h=250&fit=crop' },
    { id: 5, type: 'Precision Cut', stylist: 'Sophia', hairType: 'Straight Fine', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=250&fit=crop' },
    { id: 6, type: 'Updo', stylist: 'Fatima', hairType: 'All Textures', image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&h=250&fit=crop' }
  ];

  const handleSelectService = (service) => {
    setSelectedService(service);
    setCurrentPage('book');
  };

  const handleBooking = () => {
    if (customerName && customerEmail && selectedStylist && selectedDate && selectedTime && selectedService) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setCurrentPage('confirmation');
      }, 1000);
    }
  };

  const formatDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  const resetBooking = () => {
    setCurrentPage('home');
    setSelectedStylist(null);
    setSelectedService(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setCustomerName('');
    setCustomerEmail('');
    setCustomerPhone('');
    setCustomerMessage('');
    setSpecialRequests({
      privateRoom: false,
      daycare: false,
      quietChair: false,
      wheelchair: false
    });
  };

  const filteredGallery = hairTypeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.hairType === hairTypeFilter);

  const availableStylistsForService = selectedService 
    ? stylists.filter(stylist => stylist.services.includes(selectedService.name))
    : stylists;

  // Calculate total price
  const totalPrice = selectedService ? selectedService.price : 0;

  // Navigation Component with active underline effect
  const SalonNav = () => (
    <nav style={styles.nav}>
      <div style={styles.navContainer}>
        <div style={styles.logo}>
          Styled by Her
          <span style={styles.businessType}>Women's Hair Salon</span>
        </div>
        <div style={styles.navLinks}>
          <button onClick={() => setCurrentPage('home')} style={currentPage === 'home' ? styles.navLinkActive : styles.navLink}>Home</button>
          <button onClick={() => setCurrentPage('about')} style={currentPage === 'about' ? styles.navLinkActive : styles.navLink}>About</button>
          <button onClick={() => setCurrentPage('stylists')} style={currentPage === 'stylists' ? styles.navLinkActive : styles.navLink}>Stylists</button>
          <button onClick={() => setCurrentPage('services')} style={currentPage === 'services' ? styles.navLinkActive : styles.navLink}>Services</button>
          <button onClick={() => setCurrentPage('gallery')} style={currentPage === 'gallery' ? styles.navLinkActive : styles.navLink}>Gallery</button>
          <button onClick={() => setCurrentPage('contact')} style={currentPage === 'contact' ? styles.navLinkActive : styles.navLink}>Contact</button>
          <button onClick={() => {
            setSelectedService(null);
            setSelectedStylist(null);
            setCurrentPage('book');
          }} style={styles.navButton}>Book Now</button>
        </div>
      </div>
      {/* Top contact bar */}
      <div style={styles.topBar}>
        <div style={styles.topBarContent}>
          <span>📍 123 Elgin St, Ottawa</span>
          <span>📞 (613) 555-0192</span>
          <span>✉️ hello@styledbyher.com</span>
          <span>⏰ Tue-Sat 9am-7pm</span>
        </div>
      </div>
    </nav>
  );

  // Breadcrumb navigation
  const Breadcrumb = ({ pages }) => (
    <div style={styles.breadcrumb}>
      {pages.map((page, index) => (
        <span key={index}>
          <button onClick={() => setCurrentPage(page.link)} style={styles.breadcrumbLink}>
            {page.name}
          </button>
          {index < pages.length - 1 && <span style={styles.breadcrumbSeparator}> / </span>}
        </span>
      ))}
    </div>
  );

  const Footer = () => (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.footerGrid}>
          <div>
            <h4 style={styles.footerTitle}>Styled by Her</h4>
            <p style={styles.footerText}>123 Elgin Street</p>
            <p style={styles.footerText}>Ottawa, ON K1P 5Z4</p>
            <p style={styles.footerText}>(613) 555-0192</p>
            <p style={styles.footerText}>hello@styledbyher.com</p>
          </div>
          <div>
            <h4 style={styles.footerTitle}>Hours</h4>
            <p style={styles.footerText}>Tuesday - Friday: 9am - 7pm</p>
            <p style={styles.footerText}>Saturday: 9am - 5pm</p>
            <p style={styles.footerText}>Sunday - Monday: Closed</p>
          </div>
          <div>
            <h4 style={styles.footerTitle}>Quick Links</h4>
            <button onClick={() => setCurrentPage('about')} style={styles.footerLink}>About Us</button>
            <button onClick={() => setCurrentPage('stylists')} style={styles.footerLink}>Our Stylists</button>
            <button onClick={() => setCurrentPage('services')} style={styles.footerLink}>Services</button>
            <button onClick={() => setCurrentPage('contact')} style={styles.footerLink}>Contact</button>
          </div>
          <div>
            <h4 style={styles.footerTitle}>Designed by</h4>
            <p style={styles.footerText}>Yasmine Bachir</p>
            <p style={styles.footerText}>SEG3125 - Assignment 2</p>
          </div>
        </div>
      </div>
    </footer>
  );

  // Home Page
  const HomePage = () => (
    <>
      <Breadcrumb pages={[{ name: 'Home', link: 'home' }]} />
      <section style={styles.hero}>
        <div style={styles.container}>
          <div style={styles.heroContent}>
            <span style={styles.heroBadge}>WOMEN-OWNED · OTTAWA · EST. 2019</span>
            <h1 style={styles.heroTitle}>Your hair, <span style={{ color: '#E8A87C' }}>celebrated.</span></h1>
            <p style={styles.heroText}>Expert care for every texture, length, and style. Private rooms available. On-site daycare. All women welcome.</p>
            <div style={styles.heroButtons}>
              <button onClick={() => {
                setSelectedService(null);
                setSelectedStylist(null);
                setCurrentPage('book');
              }} style={styles.primaryButton}>Book an Appointment</button>
              <button onClick={() => setCurrentPage('services')} style={styles.secondaryButton}>Explore Services</button>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.stats}>
        <div style={styles.container}>
          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>4.9</div>
              <div style={styles.statLabel}>Average Rating</div>
              <div style={styles.statDetail}>200+ Google Reviews</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>8+</div>
              <div style={styles.statLabel}>Years Serving Ottawa</div>
              <div style={styles.statDetail}>Since 2019</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>4</div>
              <div style={styles.statLabel}>Expert Stylists</div>
              <div style={styles.statDetail}>All Hair Textures</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>Private</div>
              <div style={styles.statLabel}>Rooms Available</div>
              <div style={styles.statDetail}>Hijabi Friendly</div>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.gallery}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>See our stylists' work before you book.</h2>
          <div style={styles.galleryFilters}>
            <button onClick={() => setHairTypeFilter('all')} style={hairTypeFilter === 'all' ? styles.filterActive : styles.filter}>All Textures</button>
            <button onClick={() => setHairTypeFilter('4C Natural')} style={hairTypeFilter === '4C Natural' ? styles.filterActive : styles.filter}>4C Natural</button>
            <button onClick={() => setHairTypeFilter('Wavy')} style={hairTypeFilter === 'Wavy' ? styles.filterActive : styles.filter}>Wavy</button>
            <button onClick={() => setHairTypeFilter('Straight Fine')} style={hairTypeFilter === 'Straight Fine' ? styles.filterActive : styles.filter}>Straight & Fine</button>
            <button onClick={() => setHairTypeFilter('Protective')} style={hairTypeFilter === 'Protective' ? styles.filterActive : styles.filter}>Protective Styles</button>
          </div>
          <div style={styles.galleryGrid}>
            {filteredGallery.map(item => (
              <div key={item.id} style={styles.galleryCard}>
                <img src={item.image} alt={item.type} style={styles.galleryImage} />
                <div style={styles.galleryInfo}>
                  <div>
                    <span style={styles.galleryType}>{item.type}</span>
                    <span style={styles.galleryHairType}>{item.hairType}</span>
                  </div>
                  <span style={styles.galleryStylist}>by {item.stylist}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.features}>
        <div style={styles.container}>
          <div style={styles.featuresGrid}>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>🧕🏽</div>
              <h3 style={styles.featureTitle}>Hijabi Friendly</h3>
              <p style={styles.featureText}>Private styling rooms with floor-to-ceiling curtains. Female-only staff.</p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>🧸</div>
              <h3 style={styles.featureTitle}>On-Site Daycare</h3>
              <p style={styles.featureText}>Supervised play area while you get your hair done. No extra charge.</p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>🪑</div>
              <h3 style={styles.featureTitle}>Quiet Chair</h3>
              <p style={styles.featureText}>Prefer a silent service? Request a quiet chair. No talking required.</p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>♿</div>
              <h3 style={styles.featureTitle}>Wheelchair Accessible</h3>
              <p style={styles.featureText}>Fully accessible entrance and styling stations.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  // About Page
  const AboutPage = () => (
    <section style={styles.pageSection}>
      <div style={styles.container}>
        <Breadcrumb pages={[
          { name: 'Home', link: 'home' },
          { name: 'About', link: 'about' }
        ]} />
        <h1 style={styles.pageTitle}>About Styled by Her</h1>
        
        <div style={styles.aboutGrid}>
          <div style={styles.aboutCard}>
            <h2 style={styles.aboutTitle}>Our Story</h2>
            <p style={styles.aboutText}>Styled by Her was founded in 2019 with a simple mission: to create a women-only space where every hair texture is celebrated, not just tolerated. We saw too many women feeling anxious or unwelcome at traditional salons, and we knew we could do better.</p>
            <p style={styles.aboutText}>Today, we are proud to serve hundreds of women across Ottawa, from busy professionals to new moms, from curly hair enthusiasts to those embracing their natural texture for the first time.</p>
          </div>
          
          <div style={styles.aboutCard}>
            <h2 style={styles.aboutTitle}>Our Philosophy</h2>
            <p style={styles.aboutText}>We believe that getting your hair done should be a relaxing, empowering experience — not a source of anxiety. That is why we offer:</p>
            <ul style={styles.aboutList}>
              <li>🧕🏽 Private rooms for hijabi clients</li>
              <li>🧸 Free on-site daycare for moms</li>
              <li>🪑 Quiet chair option for those who prefer silence</li>
              <li>♿ Fully wheelchair accessible</li>
              <li>💇‍♀️ Stylists trained in all hair textures</li>
            </ul>
          </div>
          
          <div style={styles.aboutCard}>
            <h2 style={styles.aboutTitle}>Meet the Team</h2>
            <p style={styles.aboutText}>Our stylists bring years of experience and genuine passion for hair. Each specialist undergoes continuous training to stay current with techniques and trends.</p>
            <button onClick={() => setCurrentPage('stylists')} style={styles.aboutButton}>Meet Our Stylists →</button>
          </div>
          
          <div style={styles.aboutCard}>
            <h2 style={styles.aboutTitle}>Our Space</h2>
            <p style={styles.aboutText}>Located in the heart of downtown Ottawa at 123 Elgin Street, our salon is designed with your comfort in mind. Natural light, calming colors, and thoughtful layout create a peaceful atmosphere.</p>
          </div>
        </div>
        
        <div style={styles.aboutValues}>
          <h2 style={styles.valuesTitle}>Our Core Values</h2>
          <div style={styles.valuesGrid}>
            <div style={styles.valueCard}>✨ Inclusivity</div>
            <div style={styles.valueCard}>💖 Comfort</div>
            <div style={styles.valueCard}>🌟 Quality</div>
            <div style={styles.valueCard}>🤝 Trust</div>
          </div>
        </div>
      </div>
    </section>
  );

  // Contact Page
  const ContactPage = () => {
    const handleContactSubmit = (e) => {
      e.preventDefault();
      alert(`Thank you ${customerName || 'guest'}! We have received your message and will respond within 24 hours.`);
      setCustomerName('');
      setCustomerEmail('');
      setCustomerPhone('');
      setCustomerMessage('');
    };

    return (
      <section style={styles.pageSection}>
        <div style={styles.container}>
          <Breadcrumb pages={[
            { name: 'Home', link: 'home' },
            { name: 'Contact', link: 'contact' }
          ]} />
          <h1 style={styles.pageTitle}>Contact Us</h1>
          <p style={styles.pageSubtitle}>Have questions? We would love to hear from you.</p>
          
          <div style={styles.contactLayout}>
            <div style={styles.contactInfo}>
              <div style={styles.contactCard}>
                <h3 style={styles.contactCardTitle}>📍 Visit Us</h3>
                <p style={styles.contactText}>123 Elgin Street</p>
                <p style={styles.contactText}>Ottawa, ON K1P 5Z4</p>
                <p style={styles.contactText}>Canada</p>
              </div>
              
              <div style={styles.contactCard}>
                <h3 style={styles.contactCardTitle}>📞 Call Us</h3>
                <p style={styles.contactText}>Phone: (613) 555-0192</p>
                <p style={styles.contactText}>Text: (613) 555-0193</p>
              </div>
              
              <div style={styles.contactCard}>
                <h3 style={styles.contactCardTitle}>📧 Email Us</h3>
                <p style={styles.contactText}>hello@styledbyher.com</p>
                <p style={styles.contactText}>bookings@styledbyher.com</p>
              </div>
              
              <div style={styles.contactCard}>
                <h3 style={styles.contactCardTitle}>⏰ Hours</h3>
                <p style={styles.contactText}>Tuesday - Friday: 9am - 7pm</p>
                <p style={styles.contactText}>Saturday: 9am - 5pm</p>
                <p style={styles.contactText}>Sunday - Monday: Closed</p>
              </div>
            </div>
            
            <div style={styles.contactForm}>
              <h3 style={styles.contactFormTitle}>Send us a message</h3>
              <form onSubmit={handleContactSubmit}>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Your name *</label>
                  <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} style={styles.input} placeholder="Full name" required />
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Email address *</label>
                  <input type="email" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} style={styles.input} placeholder="email@example.com" required />
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Phone number</label>
                  <input type="tel" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} style={styles.input} placeholder="(613) 555-0123" />
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Message *</label>
                  <textarea rows="5" value={customerMessage} onChange={(e) => setCustomerMessage(e.target.value)} style={styles.textarea} placeholder="How can we help you?" required></textarea>
                </div>
                
                <button type="submit" style={styles.submitButton}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Stylists Page
  const StylistsPage = () => (
    <section style={styles.pageSection}>
      <div style={styles.container}>
        <Breadcrumb pages={[
          { name: 'Home', link: 'home' },
          { name: 'Stylists', link: 'stylists' }
        ]} />
        <h1 style={styles.pageTitle}>Meet your stylist.</h1>
        <p style={styles.pageSubtitle}>Each stylist brings unique expertise. All welcome all hair types.</p>
        
        <div style={styles.stylistsGrid}>
          {stylists.map(stylist => (
            <div key={stylist.id} style={styles.stylistCard}>
              <div style={styles.stylistHeader}>
                <img src={stylist.image} alt={stylist.name} style={styles.stylistAvatar} />
                <div>
                  <h3 style={styles.stylistName}>{stylist.name}</h3>
                  <p style={styles.stylistTitle}>{stylist.title}</p>
                  <p style={styles.stylistRating}>★ {stylist.rating} ({stylist.reviews} reviews)</p>
                </div>
              </div>
              <div style={styles.stylistSpecialties}>
                {stylist.specialties.map((spec, i) => (
                  <span key={i} style={styles.specialtyBadge}>{spec}</span>
                ))}
              </div>
              <p style={styles.stylistBio}>{stylist.bio}</p>
              <p style={styles.stylistQuote}>“{stylist.quote}”</p>
              <div style={styles.stylistNext}>
                <strong>Next available:</strong> {stylist.nextAvailable}
              </div>
              <button onClick={() => { 
                setSelectedStylist(stylist);
                setSelectedService(null);
                setCurrentPage('book'); 
              }} style={styles.bookButton}>
                Book with {stylist.name.split(' ')[0]}
              </button>
            </div>
          ))}
        </div>

        <div style={styles.reviewsContainer}>
          <h3 style={styles.reviewsTitle}>What clients are saying</h3>
          <div style={styles.reviewsGrid}>
            <div style={styles.reviewCard}>
              <p style={styles.reviewText}>“Jade understood my 4C hair immediately. I cried happy tears.”</p>
              <p style={styles.reviewAuthor}>— Kezia T. · 4C Natural</p>
            </div>
            <div style={styles.reviewCard}>
              <p style={styles.reviewText}>“Sophia gave me the best precision cut I have ever had.”</p>
              <p style={styles.reviewAuthor}>— Michelle L. · Fine Straight Hair</p>
            </div>
            <div style={styles.reviewCard}>
              <p style={styles.reviewText}>“The private room made me feel so comfortable. Fatima is amazing.”</p>
              <p style={styles.reviewAuthor}>— Aisha K. · Hijabi Client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Services Page with icons
  const ServicesPage = () => (
    <section style={styles.pageSection}>
      <div style={styles.container}>
        <Breadcrumb pages={[
          { name: 'Home', link: 'home' },
          { name: 'Services', link: 'services' }
        ]} />
        <h1 style={styles.pageTitle}>Services and prices. No surprises.</h1>
        <p style={styles.pageSubtitle}>What you see is what you pay. No hidden fees.</p>
        
        {['Cuts', 'Styling', 'Color', 'Treatments', 'Styles'].map(cat => (
          <div key={cat} style={styles.serviceCategory}>
            <h2 style={styles.categoryTitle}>
              <span style={styles.categoryIcon}>
                {cat === 'Cuts' && '✂️'}
                {cat === 'Styling' && '💨'}
                {cat === 'Color' && '🎨'}
                {cat === 'Treatments' && '💧'}
                {cat === 'Styles' && '👑'}
              </span>
              {cat}
            </h2>
            {services.filter(s => s.category === cat).map(service => (
              <div key={service.id} style={styles.serviceRow}>
                <div style={styles.serviceInfo}>
                  <div style={styles.serviceHeader}>
                    <span style={styles.serviceIcon}>{service.icon}</span>
                    <span style={styles.serviceName}>{service.name}</span>
                    <span style={styles.serviceDuration}>{service.duration}</span>
                    {service.popular && <span style={styles.popularBadge}>Most Popular</span>}
                  </div>
                  <p style={styles.serviceDescription}>{service.description}</p>
                </div>
                <div style={styles.servicePriceCol}>
                  <span style={styles.servicePrice}>${service.price}</span>
                  <button onClick={() => handleSelectService(service)} style={styles.serviceSelect}>
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
        
        <div style={styles.guestNote}>
          <span>🔒</span> No account needed. Book as a guest. We will text you a reminder.
          <span style={styles.trustBadge}>✓ Secure Booking</span>
          <span style={styles.trustBadge}>✓ Free Cancellation</span>
        </div>
      </div>
    </section>
  );

  // Gallery Page
  const GalleryPage = () => (
    <section style={styles.pageSection}>
      <div style={styles.container}>
        <Breadcrumb pages={[
          { name: 'Home', link: 'home' },
          { name: 'Gallery', link: 'gallery' }
        ]} />
        <h1 style={styles.pageTitle}>See our work</h1>
        <p style={styles.pageSubtitle}>Real results on real clients. Browse by hair type.</p>
        
        <div style={styles.galleryFilters}>
          <button onClick={() => setHairTypeFilter('all')} style={hairTypeFilter === 'all' ? styles.filterActive : styles.filter}>All Textures</button>
          <button onClick={() => setHairTypeFilter('4C Natural')} style={hairTypeFilter === '4C Natural' ? styles.filterActive : styles.filter}>4C Natural</button>
          <button onClick={() => setHairTypeFilter('Wavy')} style={hairTypeFilter === 'Wavy' ? styles.filterActive : styles.filter}>Wavy</button>
          <button onClick={() => setHairTypeFilter('Straight Fine')} style={hairTypeFilter === 'Straight Fine' ? styles.filterActive : styles.filter}>Straight & Fine</button>
          <button onClick={() => setHairTypeFilter('Protective')} style={hairTypeFilter === 'Protective' ? styles.filterActive : styles.filter}>Protective Styles</button>
        </div>
        
        <div style={styles.galleryGrid}>
          {filteredGallery.map(item => (
            <div key={item.id} style={styles.galleryCard}>
              <img src={item.image} alt={item.type} style={styles.galleryImage} />
              <div style={styles.galleryInfo}>
                <div>
                  <span style={styles.galleryType}>{item.type}</span>
                  <span style={styles.galleryHairType}>{item.hairType}</span>
                </div>
                <span style={styles.galleryStylist}>by {item.stylist}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Booking Page with summary sidebar and all improvements
  const BookingPage = () => (
    <section style={styles.pageSection}>
      <div style={styles.container}>
        <Breadcrumb pages={[
          { name: 'Home', link: 'home' },
          { name: 'Services', link: 'services' },
          { name: 'Book', link: 'book' }
        ]} />
        
        <div style={styles.bookingLayout}>
          {/* Left side - Form */}
          <div style={styles.bookingForm}>
            <h2 style={styles.bookingTitle}>Book your appointment</h2>
            <p style={styles.bookingNote}>No account needed. We'll send a text reminder.</p>
            
            {/* Cancellation policy notice */}
            <div style={styles.cancellationNotice}>
              <span>📋</span>
              <div>
                <strong>Free cancellation up to 24 hours before your appointment.</strong>
                <p style={styles.cancellationText}>No questions asked. Just let us know.</p>
              </div>
            </div>
            
            {selectedService && (
              <div style={styles.selectedServiceBox}>
                <span style={styles.selectedServiceName}>
                  <span style={styles.serviceIcon}>{selectedService.icon}</span>
                  {selectedService.name}
                </span>
                <span style={styles.selectedServicePrice}>${selectedService.price}</span>
                <button onClick={() => { setSelectedService(null); setSelectedStylist(null); }} style={styles.changeServiceButton}>Change</button>
              </div>
            )}
            
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Select stylist *</label>
              <div style={styles.stylistRadios}>
                {availableStylistsForService.map(s => (
                  <button 
                    key={s.id} 
                    onClick={() => setSelectedStylist(s)} 
                    className={selectedStylist?.id === s.id ? 'active' : ''}
                    style={{
                      ...styles.stylistRadio, 
                      backgroundColor: selectedStylist?.id === s.id ? '#E8A87C' : '#F5F0E8', 
                      color: selectedStylist?.id === s.id ? 'white' : '#4A5D5E',
                      border: selectedStylist?.id === s.id ? '2px solid #E8A87C' : '1px solid #E8DDD0'
                    }}
                  >
                    {s.name}
                    {selectedStylist?.id === s.id && <span style={styles.selectedCheck}>✓</span>}
                  </button>
                ))}
              </div>
              {selectedService && availableStylistsForService.length === 0 && (
                <p style={styles.errorNote}>No stylists available for this service. Please select a different service.</p>
              )}
            </div>
            
            {!selectedService && (
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Select service *</label>
                <select 
                  onChange={(e) => {
                    const service = services.find(s => s.id === parseInt(e.target.value));
                    setSelectedService(service);
                    setSelectedStylist(null);
                  }} 
                  style={styles.select} 
                  defaultValue=""
                >
                  <option value="" disabled>Choose a service</option>
                  {services.map(s => (
                    <option key={s.id} value={s.id}>{s.icon} {s.name} - ${s.price} ({s.duration})</option>
                  ))}
                </select>
              </div>
            )}
            
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Your name *</label>
              <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} style={styles.input} placeholder="Full name" />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Email address *</label>
              <input type="email" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} style={styles.input} placeholder="email@example.com" />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Phone number</label>
              <input type="tel" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} style={styles.input} placeholder="(613) 555-0123" />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Special requests (select all that apply)</label>
              <div style={styles.checkboxGroup}>
                <label style={styles.checkboxLabel}>
                  <input type="checkbox" checked={specialRequests.privateRoom} onChange={(e) => setSpecialRequests({...specialRequests, privateRoom: e.target.checked})} style={styles.checkbox} />
                  🧕🏽 Private room needed (hijabi friendly)
                </label>
                <label style={styles.checkboxLabel}>
                  <input type="checkbox" checked={specialRequests.daycare} onChange={(e) => setSpecialRequests({...specialRequests, daycare: e.target.checked})} style={styles.checkbox} />
                  🧸 Bringing child to daycare
                </label>
                <label style={styles.checkboxLabel}>
                  <input type="checkbox" checked={specialRequests.quietChair} onChange={(e) => setSpecialRequests({...specialRequests, quietChair: e.target.checked})} style={styles.checkbox} />
                  🪑 Quiet chair requested (no talking)
                </label>
                <label style={styles.checkboxLabel}>
                  <input type="checkbox" checked={specialRequests.wheelchair} onChange={(e) => setSpecialRequests({...specialRequests, wheelchair: e.target.checked})} style={styles.checkbox} />
                  ♿ Wheelchair accessible station needed
                </label>
              </div>
            </div>

            {/* FAQ Section */}
            <div style={styles.faqSection}>
              <h4 style={styles.faqTitle}>Frequently Asked Questions</h4>
              <div style={styles.faqItem}>
                <strong>What if I am late?</strong>
                <p>Please call us. We will do our best to accommodate you, but your service may be shortened.</p>
              </div>
              <div style={styles.faqItem}>
                <strong>Can I bring my child?</strong>
                <p>Yes! Our on-site daycare is free. Just let us know when you book.</p>
              </div>
              <div style={styles.faqItem}>
                <strong>What is your cancellation policy?</strong>
                <p>Free cancellation up to 24 hours before. After that, 50% of service price.</p>
              </div>
            </div>
          </div>
          
          {/* Right side - Calendar and Summary */}
          <div>
            <div style={styles.bookingCalendar}>
              <div style={styles.calendarBox}>
                <h3 style={styles.calendarTitle}>Pick a date & time</h3>
                
                <div style={styles.dateGrid}>
                  {availableDates.slice(0, 7).map((date, i) => (
                    <button key={i} onClick={() => setSelectedDate(date)} style={{
                      ...styles.dateButton, 
                      backgroundColor: selectedDate?.toDateString() === date.toDateString() ? '#E8A87C' : '#F5F0E8', 
                      color: selectedDate?.toDateString() === date.toDateString() ? 'white' : '#4A5D5E'
                    }}>
                      <div style={styles.dateDay}>{formatDate(date).split(',')[0]}</div>
                      <div style={styles.dateNum}>{date.getDate()}</div>
                    </button>
                  ))}
                </div>
                
                {selectedDate && (
                  <div>
                    <h4 style={styles.timeTitle}>Select a time — {formatDate(selectedDate)}</h4>
                    <div style={styles.timeGrid}>
                      {timeSlots.map((slot, i) => (
                        <button key={i} onClick={() => setSelectedTime(slot.time)} style={{
                          ...styles.timeButton, 
                          backgroundColor: selectedTime === slot.time ? '#E8A87C' : '#F5F0E8', 
                          color: selectedTime === slot.time ? 'white' : '#4A5D5E'
                        }}>
                          {slot.time}
                          {slot.popular && <span style={styles.popularTimeBadge}>🔥 Often booked</span>}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Trust badges */}
                <div style={styles.trustBadges}>
                  <span style={styles.trustBadgeItem}>✓ No account needed</span>
                  <span style={styles.trustBadgeItem}>✓ Free cancellation</span>
                  <span style={styles.trustBadgeItem}>✓ Secure booking</span>
                  <span style={styles.trustBadgeItem}>✓ Text reminder</span>
                </div>
                
                <button 
                  onClick={handleBooking} 
                  style={styles.confirmButton} 
                  disabled={!selectedStylist || !selectedService || !selectedDate || !selectedTime || !customerName || !customerEmail || isLoading}
                >
                  {isLoading ? 'Processing...' : 'Confirm Booking'}
                </button>
                
                {(!selectedStylist || !selectedService || !selectedDate || !selectedTime || !customerName || !customerEmail) && (
                  <p style={styles.requiredNote}>Please fill in all required fields (*)</p>
                )}
              </div>
            </div>

            {/* Booking Summary Sidebar */}
            <div style={styles.summarySidebar}>
              <h3 style={styles.summaryTitle}>Booking Summary</h3>
              <div style={styles.summaryRow}>
                <span>Service:</span>
                <span><strong>{selectedService?.name || 'Not selected'}</strong></span>
              </div>
              <div style={styles.summaryRow}>
                <span>Duration:</span>
                <span>{selectedService?.duration || '—'}</span>
              </div>
              <div style={styles.summaryRow}>
                <span>Stylist:</span>
                <span>{selectedStylist?.name || 'Not selected'}</span>
              </div>
              <div style={styles.summaryRow}>
                <span>Date:</span>
                <span>{selectedDate ? formatDate(selectedDate) : 'Not selected'}</span>
              </div>
              <div style={styles.summaryRow}>
                <span>Time:</span>
                <span>{selectedTime || 'Not selected'}</span>
              </div>
              <div style={styles.summaryDivider}></div>
              <div style={styles.summaryTotal}>
                <span>Total:</span>
                <span><strong>${totalPrice}</strong></span>
              </div>
              <p style={styles.summaryNote}>Pay at salon. No card required.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Confirmation Page
  const ConfirmationPage = () => (
    <section style={styles.pageSection}>
      <div style={styles.container}>
        <div style={styles.confirmationCard}>
          <div style={styles.checkmark}>✓</div>
          <h1 style={styles.confirmationTitle}>You are booked, {customerName.split(' ')[0]}.</h1>
          <p style={styles.confirmationSubtitle}>We are looking forward to meeting you.</p>
          
          <div style={styles.confirmationDetails}>
            <div style={styles.confirmationRow}><span style={styles.confirmationLabel}>Stylist</span><span style={styles.confirmationValue}>{selectedStylist?.name}</span></div>
            <div style={styles.confirmationRow}><span style={styles.confirmationLabel}>Service</span><span style={styles.confirmationValue}>{selectedService?.name}</span></div>
            <div style={styles.confirmationRow}><span style={styles.confirmationLabel}>Date & Time</span><span style={styles.confirmationValue}>{selectedDate ? formatDate(selectedDate) : ''} at {selectedTime}</span></div>
            <div style={styles.confirmationRow}><span style={styles.confirmationLabel}>Duration</span><span style={styles.confirmationValue}>{selectedService?.duration}</span></div>
            <div style={styles.confirmationRow}><span style={styles.confirmationLabel}>Price</span><span style={styles.confirmationValue}>${selectedService?.price}</span></div>
            <div style={styles.confirmationRow}><span style={styles.confirmationLabel}>Location</span><span style={styles.confirmationValue}>Styled by Her, 123 Elgin St, Ottawa</span></div>
          </div>
          
          <p style={styles.confirmationNote}>Confirmation sent to {customerEmail}</p>
          
          {/* Special requests summary */}
          {(specialRequests.privateRoom || specialRequests.daycare || specialRequests.quietChair || specialRequests.wheelchair) && (
            <div style={styles.specialRequestsSummary}>
              <strong>Special requests noted:</strong>
              <ul>
                {specialRequests.privateRoom && <li>🧕🏽 Private room requested</li>}
                {specialRequests.daycare && <li>🧸 Daycare needed</li>}
                {specialRequests.quietChair && <li>🪑 Quiet chair requested</li>}
                {specialRequests.wheelchair && <li>♿ Wheelchair accessible station</li>}
              </ul>
            </div>
          )}
          
          <div style={styles.whatToExpect}>
            <h3 style={styles.expectTitle}>What to expect</h3>
            <div style={styles.expectGrid}>
              <div><strong>📅 Before you arrive</strong><p style={styles.expectText}>Come with clean, dry hair if possible. Arrive 5 minutes early.</p></div>
              <div><strong>💇‍♀️ During your appointment</strong><p style={styles.expectText}>Your stylist will assess your hair and discuss your goals.</p></div>
              <div><strong>🧕🏽 Private room available</strong><p style={styles.expectText}>Ask at reception if you prefer a private room.</p></div>
              <div><strong>🧸 Daycare drop-off</strong><p style={styles.expectText}>Bring your kids to our supervised play area. No extra charge.</p></div>
            </div>
          </div>
          
          <div style={styles.confirmationButtons}>
            <button style={styles.outlineButton}>Add to Google Calendar</button>
            <button style={styles.outlineButton}>Add to Apple Calendar</button>
            <button onClick={resetBooking} style={styles.primaryButton}>Book Another Service</button>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div style={styles.app}>
      <SalonNav />
      <main style={styles.main}>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'stylists' && <StylistsPage />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'gallery' && <GalleryPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'book' && <BookingPage />}
        {currentPage === 'confirmation' && <ConfirmationPage />}
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  app: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    backgroundColor: '#FDF9F5',
    minHeight: '100vh',
    color: '#4A5D5E'
  },
  main: {
    paddingTop: '120px'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 32px'
  },
  // Navigation
  nav: {
    backgroundColor: '#FFFFFF',
    borderBottom: '1px solid #E8DDD0',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000
  },
  topBar: {
    backgroundColor: '#4A5D5E',
    padding: '8px 0',
    borderBottom: '1px solid #5A7A7A'
  },
  topBarContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 32px',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.75rem',
    color: '#B0C4C4'
  },
  navContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '16px 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#4A5D5E',
    display: 'flex',
    flexDirection: 'column',
    letterSpacing: '-0.3px'
  },
  businessType: {
    fontSize: '0.7rem',
    fontWeight: '400',
    color: '#E8A87C',
    letterSpacing: 'normal'
  },
  navLinks: {
    display: 'flex',
    gap: '32px',
    alignItems: 'center'
  },
  navLink: {
    background: 'none',
    border: 'none',
    fontSize: '0.95rem',
    color: '#5A6E6E',
    cursor: 'pointer',
    padding: '8px 0',
    fontFamily: 'inherit',
    position: 'relative',
    transition: 'color 0.2s'
  },
  navLinkActive: {
    background: 'none',
    border: 'none',
    fontSize: '0.95rem',
    color: '#E8A87C',
    cursor: 'pointer',
    padding: '8px 0',
    fontFamily: 'inherit',
    fontWeight: '500',
    position: 'relative'
  },
  navButton: {
    backgroundColor: '#E8A87C',
    color: 'white',
    border: 'none',
    padding: '8px 20px',
    borderRadius: '30px',
    fontSize: '0.9rem',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontWeight: '500',
    transition: 'all 0.2s'
  },
  // Breadcrumb
  breadcrumb: {
    marginBottom: '24px',
    fontSize: '0.85rem',
    color: '#8A9B9B'
  },
  breadcrumbLink: {
    background: 'none',
    border: 'none',
    color: '#E8A87C',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: '0.85rem'
  },
  breadcrumbSeparator: {
    margin: '0 8px',
    color: '#8A9B9B'
  },
  // Hero
  hero: {
    backgroundColor: '#E8DDD0',
    padding: '80px 0',
    textAlign: 'center'
  },
  heroContent: {
    maxWidth: '700px',
    margin: '0 auto'
  },
  heroBadge: {
    display: 'inline-block',
    fontSize: '0.8rem',
    color: '#C4734F',
    backgroundColor: 'rgba(232, 168, 124, 0.2)',
    padding: '6px 14px',
    borderRadius: '30px',
    marginBottom: '24px'
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: '600',
    color: '#4A5D5E',
    marginBottom: '20px',
    lineHeight: '1.2'
  },
  heroText: {
    fontSize: '1.2rem',
    color: '#6B7B7C',
    marginBottom: '32px',
    lineHeight: '1.5'
  },
  heroButtons: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center'
  },
  primaryButton: {
    backgroundColor: '#E8A87C',
    color: 'white',
    border: 'none',
    padding: '12px 28px',
    borderRadius: '30px',
    fontSize: '1rem',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontWeight: '500',
    transition: 'all 0.2s'
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: '#E8A87C',
    border: '1px solid #E8A87C',
    padding: '12px 28px',
    borderRadius: '30px',
    fontSize: '1rem',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontWeight: '500',
    transition: 'all 0.2s'
  },
  // Stats
  stats: {
    padding: '60px 0',
    backgroundColor: '#FFFFFF'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '32px',
    textAlign: 'center'
  },
  statCard: {
    padding: '24px'
  },
  statNumber: {
    fontSize: '2rem',
    fontWeight: '600',
    color: '#E8A87C',
    marginBottom: '8px'
  },
  statLabel: {
    fontSize: '0.9rem',
    fontWeight: '500',
    color: '#4A5D5E',
    marginBottom: '4px'
  },
  statDetail: {
    fontSize: '0.8rem',
    color: '#8A9B9B'
  },
  // Gallery
  gallery: {
    padding: '60px 0',
    backgroundColor: '#FDF9F5'
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: '500',
    color: '#4A5D5E',
    textAlign: 'center',
    marginBottom: '48px'
  },
  galleryFilters: {
    display: 'flex',
    gap: '12px',
    marginBottom: '32px',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  filter: {
    backgroundColor: 'white',
    border: '1px solid #E8DDD0',
    padding: '8px 20px',
    borderRadius: '30px',
    cursor: 'pointer',
    fontFamily: 'inherit',
    color: '#4A5D5E',
    transition: 'all 0.2s'
  },
  filterActive: {
    backgroundColor: '#E8A87C',
    border: '1px solid #E8A87C',
    color: 'white',
    padding: '8px 20px',
    borderRadius: '30px',
    cursor: 'pointer',
    fontFamily: 'inherit'
  },
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px'
  },
  galleryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    transition: 'transform 0.2s'
  },
  galleryImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  },
  galleryInfo: {
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  galleryType: {
    fontWeight: '500',
    color: '#4A5D5E',
    display: 'block',
    marginBottom: '4px'
  },
  galleryHairType: {
    fontSize: '0.75rem',
    color: '#8A9B9B'
  },
  galleryStylist: {
    fontSize: '0.8rem',
    color: '#E8A87C'
  },
  // Features
  features: {
    padding: '60px 0',
    backgroundColor: '#E8DDD0'
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '32px'
  },
  featureCard: {
    textAlign: 'center',
    padding: '24px',
    backgroundColor: 'white',
    borderRadius: '16px',
    transition: 'transform 0.2s'
  },
  featureIcon: {
    fontSize: '2.5rem',
    marginBottom: '16px'
  },
  featureTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#4A5D5E',
    marginBottom: '12px'
  },
  featureText: {
    fontSize: '0.85rem',
    color: '#6B7B7C',
    lineHeight: '1.5'
  },
  // Page layouts
  pageSection: {
    padding: '60px 0',
    minHeight: '70vh'
  },
  pageTitle: {
    fontSize: '2.5rem',
    fontWeight: '500',
    color: '#4A5D5E',
    marginBottom: '16px'
  },
  pageSubtitle: {
    fontSize: '1rem',
    color: '#6B7B7C',
    marginBottom: '48px'
  },
  // About Page
  aboutGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '32px',
    marginBottom: '48px'
  },
  aboutCard: {
    backgroundColor: '#FFFFFF',
    padding: '32px',
    borderRadius: '16px',
    border: '1px solid #E8DDD0',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
  },
  aboutTitle: {
    fontSize: '1.5rem',
    fontWeight: '500',
    color: '#4A5D5E',
    marginBottom: '16px'
  },
  aboutText: {
    fontSize: '1rem',
    color: '#6B7B7C',
    lineHeight: '1.6',
    marginBottom: '16px'
  },
  aboutList: {
    listStyle: 'none',
    padding: 0,
    marginTop: '16px'
  },
  aboutButton: {
    backgroundColor: '#E8A87C',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '30px',
    fontSize: '0.9rem',
    cursor: 'pointer',
    fontFamily: 'inherit',
    marginTop: '16px',
    transition: 'all 0.2s'
  },
  aboutValues: {
    backgroundColor: '#FFFFFF',
    padding: '40px',
    borderRadius: '16px',
    border: '1px solid #E8DDD0',
    textAlign: 'center'
  },
  valuesTitle: {
    fontSize: '1.5rem',
    fontWeight: '500',
    color: '#4A5D5E',
    marginBottom: '24px'
  },
  valuesGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '24px',
    flexWrap: 'wrap'
  },
  valueCard: {
    backgroundColor: '#E8DDD0',
    padding: '12px 24px',
    borderRadius: '40px',
    fontSize: '1rem',
    fontWeight: '500',
    color: '#4A5D5E'
  },
  // Contact Page
  contactLayout: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '48px'
  },
  contactInfo: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '24px'
  },
  contactCard: {
    backgroundColor: '#FFFFFF',
    padding: '24px',
    borderRadius: '16px',
    border: '1px solid #E8DDD0'
  },
  contactCardTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#4A5D5E',
    marginBottom: '16px'
  },
  contactText: {
    fontSize: '0.9rem',
    color: '#6B7B7C',
    marginBottom: '8px',
    lineHeight: '1.5'
  },
  contactForm: {
    backgroundColor: '#FFFFFF',
    padding: '32px',
    borderRadius: '16px',
    border: '1px solid #E8DDD0'
  },
  contactFormTitle: {
    fontSize: '1.25rem',
    fontWeight: '500',
    color: '#4A5D5E',
    marginBottom: '24px'
  },
  submitButton: {
    backgroundColor: '#E8A87C',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '30px',
    fontSize: '1rem',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontWeight: '500',
    width: '100%',
    transition: 'all 0.2s'
  },
  textarea: {
    width: '100%',
    padding: '12px',
    borderRadius: '12px',
    border: '1px solid #E8DDD0',
    backgroundColor: '#FFFFFF',
    fontFamily: 'inherit',
    fontSize: '0.9rem',
    resize: 'vertical'
  },
  // Stylists Page
  stylistsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '32px',
    marginBottom: '60px'
  },
  stylistCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    padding: '28px',
    border: '1px solid #E8DDD0',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    transition: 'transform 0.2s'
  },
  stylistHeader: {
    display: 'flex',
    gap: '20px',
    marginBottom: '20px'
  },
  stylistAvatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover'
  },
  stylistName: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#4A5D5E',
    marginBottom: '4px'
  },
  stylistTitle: {
    fontSize: '0.85rem',
    color: '#E8A87C',
    marginBottom: '6px'
  },
  stylistRating: {
    fontSize: '0.85rem',
    color: '#6B7B7C'
  },
  stylistSpecialties: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '16px'
  },
  specialtyBadge: {
    backgroundColor: '#F0ECE6',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '0.75rem',
    color: '#4A5D5E'
  },
  stylistBio: {
    fontSize: '0.9rem',
    color: '#6B7B7C',
    lineHeight: '1.5',
    marginBottom: '16px'
  },
  stylistQuote: {
    fontSize: '0.9rem',
    fontStyle: 'italic',
    color: '#E8A87C',
    backgroundColor: '#FDF9F5',
    padding: '12px 16px',
    borderRadius: '8px',
    marginBottom: '16px'
  },
  stylistNext: {
    fontSize: '0.85rem',
    color: '#6B7B7C',
    marginBottom: '20px'
  },
  bookButton: {
    width: '100%',
    backgroundColor: '#E8A87C',
    color: 'white',
    border: 'none',
    padding: '10px',
    borderRadius: '30px',
    fontSize: '0.9rem',
    cursor: 'pointer',
    fontFamily: 'inherit',
    transition: 'all 0.2s'
  },
  reviewsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    padding: '40px',
    border: '1px solid #E8DDD0'
  },
  reviewsTitle: {
    fontSize: '1.5rem',
    fontWeight: '500',
    color: '#4A5D5E',
    textAlign: 'center',
    marginBottom: '32px'
  },
  reviewsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px'
  },
  reviewCard: {
    textAlign: 'center',
    padding: '20px'
  },
  reviewText: {
    fontSize: '0.95rem',
    color: '#6B7B7C',
    lineHeight: '1.5',
    marginBottom: '12px'
  },
  reviewAuthor: {
    fontSize: '0.85rem',
    color: '#E8A87C'
  },
  // Services Page
  serviceCategory: {
    marginBottom: '48px'
  },
  categoryTitle: {
    fontSize: '1.5rem',
    fontWeight: '500',
    color: '#4A5D5E',
    marginBottom: '24px',
    paddingBottom: '8px',
    borderBottom: '2px solid #E8DDD0',
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  categoryIcon: {
    fontSize: '1.5rem'
  },
  serviceRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 0',
    borderBottom: '1px solid #E8DDD0'
  },
  serviceInfo: {
    flex: 2
  },
  serviceHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '6px',
    flexWrap: 'wrap'
  },
  serviceIcon: {
    fontSize: '1rem'
  },
  serviceName: {
    fontSize: '1rem',
    fontWeight: '500',
    color: '#4A5D5E'
  },
  serviceDuration: {
    fontSize: '0.8rem',
    color: '#8A9B9B'
  },
  popularBadge: {
    backgroundColor: '#E8A87C',
    color: 'white',
    padding: '2px 10px',
    borderRadius: '20px',
    fontSize: '0.7rem'
  },
  serviceDescription: {
    fontSize: '0.85rem',
    color: '#6B7B7C'
  },
  servicePriceCol: {
    textAlign: 'right',
    minWidth: '100px'
  },
  servicePrice: {
    fontSize: '1.1rem',
    fontWeight: '500',
    color: '#4A5D5E',
    display: 'block',
    marginBottom: '8px'
  },
  serviceSelect: {
    backgroundColor: 'transparent',
    border: '1px solid #E8A87C',
    color: '#E8A87C',
    padding: '4px 16px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    cursor: 'pointer',
    fontFamily: 'inherit',
    transition: 'all 0.2s'
  },
  guestNote: {
    backgroundColor: '#F0ECE6',
    padding: '16px',
    borderRadius: '8px',
    textAlign: 'center',
    color: '#4A5D5E',
    marginTop: '32px',
    display: 'flex',
    justifyContent: 'center',
    gap: '24px',
    flexWrap: 'wrap'
  },
  trustBadge: {
    backgroundColor: '#E8A87C',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '0.75rem'
  },
  // Booking Page
  bookingLayout: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '48px'
  },
  bookingForm: {
    backgroundColor: '#FFFFFF',
    padding: '32px',
    borderRadius: '16px',
    border: '1px solid #E8DDD0'
  },
  bookingTitle: {
    fontSize: '1.5rem',
    fontWeight: '500',
    color: '#4A5D5E',
    marginBottom: '8px'
  },
  bookingNote: {
    fontSize: '0.85rem',
    color: '#E8A87C',
    marginBottom: '24px'
  },
  cancellationNotice: {
    backgroundColor: '#F0ECE6',
    padding: '12px 16px',
    borderRadius: '12px',
    display: 'flex',
    gap: '12px',
    marginBottom: '24px',
    alignItems: 'center'
  },
  cancellationText: {
    fontSize: '0.8rem',
    color: '#6B7B7C',
    marginTop: '4px'
  },
  selectedServiceBox: {
    backgroundColor: '#F0ECE6',
    padding: '12px 16px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20px'
  },
  selectedServiceName: {
    fontWeight: '600',
    color: '#4A5D5E',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  selectedServicePrice: {
    color: '#E8A87C',
    fontWeight: '500'
  },
  changeServiceButton: {
    background: 'none',
    border: 'none',
    color: '#E8A87C',
    cursor: 'pointer',
    fontSize: '0.8rem'
  },
  formGroup: {
    marginBottom: '20px'
  },
  formLabel: {
    display: 'block',
    fontSize: '0.85rem',
    fontWeight: '500',
    color: '#4A5D5E',
    marginBottom: '8px'
  },
  stylistRadios: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  },
  stylistRadio: {
    padding: '8px 16px',
    borderRadius: '30px',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: '0.85rem',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.2s'
  },
  selectedCheck: {
    fontSize: '0.8rem'
  },
  select: {
    width: '100%',
    padding: '12px',
    borderRadius: '12px',
    border: '1px solid #E8DDD0',
    backgroundColor: '#FFFFFF',
    fontFamily: 'inherit',
    fontSize: '0.9rem'
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '12px',
    border: '1px solid #E8DDD0',
    backgroundColor: '#FFFFFF',
    fontFamily: 'inherit',
    fontSize: '0.9rem'
  },
  checkboxGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '0.85rem',
    color: '#6B7B7C',
    cursor: 'pointer'
  },
  checkbox: {
    width: '18px',
    height: '18px',
    cursor: 'pointer'
  },
  bookingCalendar: {
    backgroundColor: '#FFFFFF',
    padding: '32px',
    borderRadius: '16px',
    border: '1px solid #E8DDD0',
    marginBottom: '24px'
  },
  calendarBox: {
    textAlign: 'center'
  },
  calendarTitle: {
    fontSize: '1.25rem',
    fontWeight: '500',
    color: '#4A5D5E',
    marginBottom: '24px'
  },
  dateGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '12px',
    marginBottom: '24px'
  },
  dateButton: {
    padding: '12px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'inherit',
    textAlign: 'center',
    transition: 'all 0.2s'
  },
  dateDay: {
    fontSize: '0.7rem',
    textTransform: 'uppercase'
  },
  dateNum: {
    fontSize: '1rem',
    fontWeight: '500'
  },
  timeTitle: {
    fontSize: '0.9rem',
    color: '#6B7B7C',
    marginBottom: '12px',
    textAlign: 'left'
  },
  timeGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '8px',
    marginBottom: '32px'
  },
  timeButton: {
    padding: '8px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: '0.8rem',
    position: 'relative',
    transition: 'all 0.2s'
  },
  popularTimeBadge: {
    display: 'block',
    fontSize: '0.6rem',
    marginTop: '4px',
    color: '#E8A87C'
  },
  trustBadges: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '16px',
    marginBottom: '24px',
    padding: '12px',
    backgroundColor: '#F0ECE6',
    borderRadius: '12px'
  },
  trustBadgeItem: {
    fontSize: '0.75rem',
    color: '#4A5D5E'
  },
  confirmButton: {
    width: '100%',
    backgroundColor: '#E8A87C',
    color: 'white',
    border: 'none',
    padding: '14px',
    borderRadius: '30px',
    fontSize: '1rem',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontWeight: '500',
    transition: 'all 0.2s'
  },
  requiredNote: {
    fontSize: '0.8rem',
    color: '#C4734F',
    marginTop: '12px'
  },
  errorNote: {
    fontSize: '0.8rem',
    color: '#C4734F',
    marginTop: '8px'
  },
  summarySidebar: {
    backgroundColor: '#FFFFFF',
    padding: '24px',
    borderRadius: '16px',
    border: '1px solid #E8DDD0'
  },
  summaryTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#4A5D5E',
    marginBottom: '16px',
    paddingBottom: '8px',
    borderBottom: '2px solid #E8DDD0'
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '12px',
    fontSize: '0.85rem',
    color: '#6B7B7C'
  },
  summaryDivider: {
    height: '1px',
    backgroundColor: '#E8DDD0',
    margin: '12px 0'
  },
  summaryTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#4A5D5E'
  },
  summaryNote: {
    fontSize: '0.75rem',
    color: '#8A9B9B',
    marginTop: '12px',
    textAlign: 'center'
  },
  faqSection: {
    marginTop: '32px',
    paddingTop: '24px',
    borderTop: '1px solid #E8DDD0'
  },
  faqTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#4A5D5E',
    marginBottom: '16px'
  },
  faqItem: {
    marginBottom: '16px'
  },
  // Confirmation Page
  confirmationCard: {
    backgroundColor: '#FFFFFF',
    padding: '48px',
    borderRadius: '16px',
    border: '1px solid #E8DDD0',
    maxWidth: '700px',
    margin: '0 auto'
  },
  checkmark: {
    width: '60px',
    height: '60px',
    backgroundColor: '#E8A87C',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    color: 'white',
    margin: '0 auto 24px'
  },
  confirmationTitle: {
    fontSize: '1.75rem',
    fontWeight: '500',
    color: '#4A5D5E',
    textAlign: 'center',
    marginBottom: '8px'
  },
  confirmationSubtitle: {
    textAlign: 'center',
    color: '#6B7B7C',
    marginBottom: '32px'
  },
  confirmationDetails: {
    backgroundColor: '#FDF9F5',
    borderRadius: '12px',
    padding: '24px',
    marginBottom: '24px'
  },
  confirmationRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #E8DDD0'
  },
  confirmationLabel: {
    fontWeight: '500',
    color: '#4A5D5E'
  },
  confirmationValue: {
    color: '#6B7B7C',
    textAlign: 'right'
  },
  confirmationNote: {
    textAlign: 'center',
    color: '#E8A87C',
    fontSize: '0.85rem',
    marginBottom: '24px'
  },
  specialRequestsSummary: {
    backgroundColor: '#F0ECE6',
    padding: '16px',
    borderRadius: '12px',
    marginBottom: '24px'
  },
  whatToExpect: {
    marginBottom: '32px'
  },
  expectTitle: {
    fontSize: '1.1rem',
    fontWeight: '500',
    color: '#4A5D5E',
    marginBottom: '16px'
  },
  expectGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px'
  },
  expectText: {
    fontSize: '0.8rem',
    color: '#6B7B7C',
    marginTop: '4px'
  },
  confirmationButtons: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  outlineButton: {
    backgroundColor: 'transparent',
    border: '1px solid #E8A87C',
    color: '#E8A87C',
    padding: '10px 20px',
    borderRadius: '30px',
    cursor: 'pointer',
    fontFamily: 'inherit',
    transition: 'all 0.2s'
  },
  // Footer
  footer: {
    backgroundColor: '#4A5D5E',
    padding: '48px 0',
    marginTop: '60px'
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '48px'
  },
  footerTitle: {
    color: 'white',
    fontSize: '1rem',
    fontWeight: '500',
    marginBottom: '16px'
  },
  footerText: {
    color: '#B0C4C4',
    fontSize: '0.85rem',
    marginBottom: '8px',
    lineHeight: '1.5'
  },
  footerLink: {
    background: 'none',
    border: 'none',
    color: '#B0C4C4',
    fontSize: '0.85rem',
    cursor: 'pointer',
    display: 'block',
    marginBottom: '8px',
    fontFamily: 'inherit',
    transition: 'color 0.2s'
  }
};

export default SalonService;