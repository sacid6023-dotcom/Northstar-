import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Layers, 
  ShieldCheck, 
  Mail, 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight, 
  Globe, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Sparkles,
  Flame,
  Award,
  Box,
  CornerDownRight
} from 'lucide-react';

// Import local assets
import logoImg from './assets/logo.png';
import heroCeramicImg from './assets/hero_ceramic.png';
import introCeramicsImg from './assets/intro_ceramics.png';
import materialsGridImg from './assets/materials_grid.png';
import factoryFloorImg from './assets/factory_floor.png';
import packagingProcessImg from './assets/packaging_process.png';
import clientBlueMugs from './assets/IMG_3994.JPG.jpeg';
import clientSpeckledMugs from './assets/IMG_4666.JPG.jpeg';
import clientYellowMugs from './assets/IMG_4667.JPG.jpeg';
import clientWarehousePallets from './assets/IMG_4668.JPG.jpeg';
import clientBrandedBox from './assets/IMG_4669.PNG';

// Mock Product Catalog Data
const PRODUCTS = [
  {
    id: 1,
    sku: 'NS-SW-101',
    name: 'Aura Stoneware Dinner Set',
    category: 'Stoneware Ceramics',
    material: 'Stoneware Clay',
    dimensions: 'Dinner Plate 28cm | Salad Plate 21cm | Bowl 15cm',
    finish: 'Matte Reactive Charcoal Glaze',
    customization: 'Available in custom glazes and size assortments for minimum order quantity (MOQ) of 500 sets.',
    description: 'Bespoke stoneware plates and nesting bowls boasting deep earthy tones. Each piece is individually hand-glazed, showcasing natural variance in texture and reactive finish.',
    image: introCeramicsImg
  },
  {
    id: 2,
    sku: 'NS-SW-102',
    name: 'Horizon Ceramic Carafe Set',
    category: 'Stoneware Ceramics',
    material: 'High-Fired Stoneware',
    dimensions: 'Carafe 1.2L | Cups 280ml',
    finish: 'Granular Sand & Iron Rust Slip',
    customization: 'Engraving or logo embossing available on the bottom base.',
    description: 'An architectural beverage set designed for premium table service, offering exceptional thermal retention and an organic granular grip.',
    image: heroCeramicImg
  },
  {
    id: 3,
    sku: 'NS-PL-201',
    name: 'Zen Porcelain Teapot',
    category: 'Porcelain',
    material: 'Fine Porcelain & Solid Brass',
    dimensions: 'Teapot 850ml | 14cm x 16cm',
    finish: 'Satin Alabaster Glaze',
    customization: 'Brass handle can be customized with brushed nickel or matte black finishing.',
    description: 'A striking minimalist teapot combining pure white satin porcelain with a hand-bent brass handle. Designed with a drip-free spout filter.',
    image: heroCeramicImg
  },
  {
    id: 4,
    sku: 'NS-PL-202',
    name: 'Lunaria Textured Vases',
    category: 'Porcelain',
    material: 'Textured Fine Porcelain',
    dimensions: 'Large 32cm Height | Medium 25cm Height',
    finish: 'Raw Textured Exterior, Clear Glazed Interior',
    customization: 'Bespoke textured reliefs can be developed for hospitality clients.',
    description: 'Elegant porcelain display vases. The unglazed exterior highlights the fine clay texture while the fully glazed interior ensures water tightness.',
    image: introCeramicsImg
  },
  {
    id: 5,
    sku: 'NS-FC-301',
    name: 'Regis Charger Plates',
    category: 'Fine Chinaware',
    material: 'Translucent Fine Chinaware',
    dimensions: 'Diameter 32cm',
    finish: 'High-Gloss Glaze with 24k Gold Rim Trim',
    customization: 'Custom monogramming or resort branding can be painted under glaze.',
    description: 'Translucent bone chinaware charger plates designed to elevate premium banquets and luxury hotel settings. Highly impact-resistant.',
    image: heroCeramicImg
  },
  {
    id: 6,
    sku: 'NS-FC-302',
    name: 'Opus Chinaware Espresso Set',
    category: 'Fine Chinaware',
    material: 'Bone Chinaware',
    dimensions: 'Cups 90ml | Saucer 12cm',
    finish: 'Pure Ivory Glaze',
    customization: 'Available in custom packaging gift boxes for retail exports.',
    description: 'Delicate yet robust espresso cups offering exceptional translucency. The shape is optimized to retain crema and aromatic profiles.',
    image: introCeramicsImg
  },
  {
    id: 7,
    sku: 'NS-CB-401',
    name: 'Teak & Clay Serving Stand',
    category: 'Wood combination products',
    material: 'Stoneware & Premium Teak Wood',
    dimensions: 'Stand 35cm Diameter, Height 12cm',
    finish: 'Reactive Salt Glaze & Natural Food-Grade Oil',
    customization: 'Wood species option: Walnut, Oak, or Teak.',
    description: 'A multi-material dessert or appetizer platter pairing a high-fired ceramic top plate with a sturdy hand-lathed teak base.',
    image: materialsGridImg
  },
  {
    id: 8,
    sku: 'NS-CB-402',
    name: 'Brass-Bound Ceramic Planters',
    category: 'Metal combination products',
    material: 'Textured Stoneware & Solid Brass Bands',
    dimensions: 'Large 25cm x 28cm | Medium 20cm x 22cm',
    finish: 'Coarse Sand Slip & Oxidized Antique Brass',
    customization: 'Available in copper or brass strapping options.',
    description: 'Substantial stoneware indoor planters banded with hand-beaten antique brass, highlighting the marriage of clay and metallurgy.',
    image: materialsGridImg
  },
  {
    id: 9,
    sku: 'NS-CB-403',
    name: 'Glass & Clay Decanter Vessel',
    category: 'Glass combination products',
    material: 'Stoneware & Hand-Blown Glass',
    dimensions: '750ml Vessel | 15cm Base',
    finish: 'Smoky Amber Glass & Matte Graphite Clay',
    customization: 'Custom glass tinting and ceramic coaster shapes available.',
    description: 'An elegant glass decanter fitted onto a precision hand-crafted ceramic coaster base.',
    image: materialsGridImg
  },
  {
    id: 10,
    sku: 'NS-TD-501',
    name: 'Solstice Shallow Pasta Bowls',
    category: 'Table & Dining',
    material: 'Stoneware Clay',
    dimensions: 'Diameter 24cm, Height 5.5cm',
    finish: 'Warm Ochre Reactive Glaze',
    customization: 'Available in sets of 4, 6 or bulk commercial packaging crates.',
    description: 'Broad shallow bowls designed for modern dining. Featuring a thick rim and double-fired glaze for heavy-duty commercial restaurant durability.',
    image: introCeramicsImg
  },
  {
    id: 11,
    sku: 'NS-TD-502',
    name: 'Nesta Ribbed Oil Cruets',
    category: 'Table & Dining',
    material: 'Stoneware & Stainless Steel',
    dimensions: '500ml Volume',
    finish: 'Ribbed Oatmeal Glaze',
    customization: 'Stoppers available in cork, synthetic cork, or metal pourers.',
    description: 'Elegant olive oil and vinegar cruets with a ribbed tactile surface that prevents slipping. Comes with matching ceramic catch plates.',
    image: heroCeramicImg
  },
  {
    id: 12,
    sku: 'NS-HL-601',
    name: 'Aeon Sculptural Ceramic Lamp',
    category: 'Home & Lifestyle',
    material: 'Stoneware & Linen Shade',
    dimensions: 'Base Height 30cm | Total Height 58cm',
    finish: 'Charcoal Black Lava Glaze',
    customization: 'Electrical certifications (CE, UL, UKCA) wired according to region.',
    description: 'A sculptural, organic table lamp base designed to act as a statement piece in hospitality lobbies and high-end residential interiors.',
    image: materialsGridImg
  },
  {
    id: 13,
    sku: 'NS-SW-103',
    name: 'Elysian Glazed Blue Mugs',
    category: 'Stoneware Ceramics',
    material: 'High-Fired Stoneware',
    dimensions: 'Capacity 320ml | Height 9.5cm',
    finish: 'Ocean Blue Reactive Glaze',
    customization: 'Available in custom colors and branding embossments for bulk hospitality buyers.',
    description: 'Beautifully glazed stoneware mugs in deep ocean blue tones. Designed with a wide comfort-grip handle and exceptional heat retention.',
    image: clientBlueMugs
  },
  {
    id: 14,
    sku: 'NS-SW-104',
    name: 'Earthy Speckled Coffee Mugs',
    category: 'Stoneware Ceramics',
    material: 'Coarse Stoneware Clay',
    dimensions: 'Capacity 350ml | Height 10cm',
    finish: 'Matte Speckled Grey-Brown Finish',
    customization: 'Engraving or client monogramming can be added.',
    description: 'Rustic textured coffee mugs showcasing rich mineral iron specks. A robust heavy-duty build ideal for high-traffic cafes and hotels.',
    image: clientSpeckledMugs
  },
  {
    id: 15,
    sku: 'NS-SW-105',
    name: 'Saffron Matte Ceramic Cups',
    category: 'Stoneware Ceramics',
    material: 'Fine Stoneware',
    dimensions: 'Capacity 280ml | Height 8.5cm',
    finish: 'Saffron Yellow Satin Matte Glaze',
    customization: 'Gift box sets available for export markets.',
    description: 'Vibrant and modern yellow ceramic cups. Double-fired to ensure resistance to chipping and stains.',
    image: clientYellowMugs
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerSolid, setHeaderSolid] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Enquiry Form State
  const [enquirySuccess, setEnquirySuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    productInterest: 'Stoneware Ceramics',
    message: ''
  });

  // Track scroll position to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderSolid(true);
      } else {
        setHeaderSolid(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on page change
  const navigateTo = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Pre-fill enquiry form when clicking 'Enquire' on a product
  const handleProductEnquiry = (product) => {
    setFormData({
      ...formData,
      productInterest: product.category,
      message: `Dear Sales Team,\n\nWe are a B2B buyer interested in discussing pricing, minimum order quantities (MOQ), and shipping schedules for the following product:\n\n- Product Name: ${product.name}\n- SKU Code: ${product.sku}\n- Material: ${product.material}\n- Finish: ${product.finish}\n\nPlease share availability of bespoke design changes, development sample timelines, and bulk export pricing models.\n\nBest regards,`
    });
    setSelectedProduct(null); // Close modal
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate premium B2B enquiry submission
    setEnquirySuccess(true);
    setTimeout(() => {
      // Keep state showing success, but clear details
    }, 1000);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      country: '',
      productInterest: 'Stoneware Ceramics',
      message: ''
    });
    setEnquirySuccess(false);
  };

  return (
    <div>
      {/* HEADER / NAVIGATION */}
      <header className={`header ${(headerSolid || currentPage !== 'home') ? 'header-solid' : 'header-transparent'}`}>
        <div className="header-container">
          <a href="#" className="logo-link" onClick={() => navigateTo('home')}>
            <img src={logoImg} alt="Northstar International Logo" className="logo-img" />
            <div className="brand-text">
              <span className="brand-title">NORTHSTAR</span>
              <span className="brand-subtitle">INTERNATIONAL</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav>
            <ul className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              <li>
                <a 
                  href="#home" 
                  className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); navigateTo('home'); }}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); navigateTo('about'); }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#collections" 
                  className={`nav-link ${currentPage === 'collections' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); navigateTo('collections'); }}
                >
                  Collections
                </a>
              </li>
              <li>
                <a 
                  href="#materials" 
                  className={`nav-link ${currentPage === 'materials' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); navigateTo('materials'); }}
                >
                  Materials
                </a>
              </li>
              <li>
                <a 
                  href="#factory" 
                  className={`nav-link ${currentPage === 'factory' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); navigateTo('factory'); }}
                >
                  Factory
                </a>
              </li>
              <li className="nav-cta">
                <a 
                  href="#contact" 
                  className="btn btn-primary"
                  onClick={(e) => { e.preventDefault(); navigateTo('contact'); }}
                >
                  Enquire Now
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburguer Toggle */}
          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* RENDER CURRENT PAGE */}
      <main>
        {currentPage === 'home' && (
          <HomePage 
            navigateTo={navigateTo} 
            setSelectedProduct={setSelectedProduct} 
          />
        )}
        {currentPage === 'about' && (
          <AboutPage 
            navigateTo={navigateTo}
          />
        )}
        {currentPage === 'collections' && (
          <CollectionsPage 
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            handleProductEnquiry={handleProductEnquiry}
          />
        )}
        {currentPage === 'materials' && (
          <MaterialsPage 
            navigateTo={navigateTo}
          />
        )}
        {currentPage === 'factory' && (
          <FactoryPage 
            navigateTo={navigateTo}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage 
            formData={formData}
            handleFormChange={handleFormChange}
            handleFormSubmit={handleFormSubmit}
            enquirySuccess={enquirySuccess}
            resetForm={resetForm}
          />
        )}
        {currentPage === 'privacy' && (
          <PrivacyPage />
        )}
        {currentPage === 'disclaimer' && (
          <DisclaimerPage />
        )}
        {currentPage === 'terms' && (
          <TermsPage />
        )}
      </main>

      {/* PRODUCT SPECIFICATION MODAL OVERLAY */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProduct(null)}>
              <X size={20} />
            </button>
            <div className="modal-img-column">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-img" />
            </div>
            <div className="modal-content-column">
              <span className="modal-cat">{selectedProduct.category}</span>
              <h2 className="modal-title">{selectedProduct.name}</h2>
              <p className="modal-desc">{selectedProduct.description}</p>
              
              <div className="modal-specs">
                <div className="modal-spec-row">
                  <span className="modal-spec-label">SKU / Code:</span>
                  <span className="modal-spec-value">{selectedProduct.sku}</span>
                </div>
                <div className="modal-spec-row" style={{ marginTop: '8px' }}>
                  <span className="modal-spec-label">Base Material:</span>
                  <span className="modal-spec-value">{selectedProduct.material}</span>
                </div>
                <div className="modal-spec-row" style={{ marginTop: '8px' }}>
                  <span className="modal-spec-label">Dimensions:</span>
                  <span className="modal-spec-value">{selectedProduct.dimensions}</span>
                </div>
                <div className="modal-spec-row" style={{ marginTop: '8px' }}>
                  <span className="modal-spec-label">Finishing:</span>
                  <span className="modal-spec-value">{selectedProduct.finish}</span>
                </div>
                <div className="modal-spec-row" style={{ marginTop: '8px' }}>
                  <span className="modal-spec-label">Bespoke Options:</span>
                  <span className="modal-spec-value">{selectedProduct.customization}</span>
                </div>
              </div>

              <button 
                className="btn btn-primary" 
                onClick={() => handleProductEnquiry(selectedProduct)}
              >
                Request Quotation for this Product
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-brand-logo">
                <img src={logoImg} alt="Northstar International Logo" className="footer-logo-img" />
                <div className="brand-text">
                  <span className="brand-title" style={{ fontSize: '1.5rem' }}>NORTHSTAR</span>
                  <span className="brand-subtitle">INTERNATIONAL</span>
                </div>
              </div>
              <p className="footer-brand-desc">
                Premium ceramics and multi-material creations, crafted for discerning B2B and export markets.
              </p>
            </div>
            
            <div className="footer-nav">
              <span className="footer-nav-title">Navigation</span>
              <ul className="footer-nav-links">
                <li><a href="#" className="footer-nav-link" onClick={(e) => { e.preventDefault(); navigateTo('home'); }}>Home</a></li>
                <li><a href="#" className="footer-nav-link" onClick={(e) => { e.preventDefault(); navigateTo('about'); }}>About Us</a></li>
                <li><a href="#" className="footer-nav-link" onClick={(e) => { e.preventDefault(); navigateTo('collections'); }}>Collections</a></li>
                <li><a href="#" className="footer-nav-link" onClick={(e) => { e.preventDefault(); navigateTo('materials'); }}>Materials</a></li>
                <li><a href="#" className="footer-nav-link" onClick={(e) => { e.preventDefault(); navigateTo('factory'); }}>Factory & Supply</a></li>
                <li><a href="#" className="footer-nav-link" onClick={(e) => { e.preventDefault(); navigateTo('contact'); }}>Contact & RFQ</a></li>
              </ul>
            </div>

            <div className="footer-contact">
              <span className="footer-contact-title">Contact Information</span>
              <div className="footer-contact-info">
                <p style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <MapPin size={16} className="text-gold" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <span>Northstar International Manufacturing Hub, (80,000 sq. ft. Integrated Facility), India</span>
                </p>
                <p style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Mail size={16} className="text-gold" />
                  <a href="mailto:business@northstarceramic.com">business@northstarceramic.com</a>
                </p>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <Phone size={16} className="text-gold" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <a href="tel:+916397211261">+91 63972 11261</a>
                    <a href="tel:+917906700054">+91 79067 00054</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom" style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '30px', marginTop: '20px' }}>
            <div className="footer-legal-links" style={{ display: 'flex', gap: '24px', fontSize: '0.85rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="#privacy" onClick={(e) => { e.preventDefault(); navigateTo('privacy'); }}>Privacy Policy</a>
              <a href="#disclaimer" onClick={(e) => { e.preventDefault(); navigateTo('disclaimer'); }}>Disclaimer</a>
              <a href="#terms" onClick={(e) => { e.preventDefault(); navigateTo('terms'); }}>Terms & Conditions</a>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', flexWrap: 'wrap', gap: '15px', color: 'var(--color-stone)' }}>
              <p>&copy; {new Date().getFullYear()} Northstar International. All Rights Reserved.</p>
              <p style={{ opacity: 0.5 }}>Excellence in Ceramics, Worldwide</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --------------------------------------------------------------------------
// PAGES / COMPONENTS
// --------------------------------------------------------------------------

// 1. HOMEPAGE
function HomePage({ navigateTo, setSelectedProduct }) {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img src={heroCeramicImg} alt="Northstar Ceramics Cinematic Hero" className="hero-img" />
        </div>
        <div className="container">
          <div className="hero-content">
            <span className="hero-tagline">Northstar International</span>
            <h1>Crafting Exquisite Ceramics for Global Living</h1>
            <p className="hero-desc">
              Bespoke and exclusive export-grade stoneware, porcelain and fine chinaware, thoughtfully designed, meticulously crafted and supplied from our integrated manufacturing facility.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => navigateTo('collections')}>
                Explore Our Collections
              </button>
              <button className="btn btn-outline-gold" onClick={() => navigateTo('contact')}>
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-text-wrapper">
              <span className="intro-tagline">Introduction</span>
              <h2 className="intro-headline">Where Craftsmanship Meets Contemporary Design</h2>
              <p className="intro-body">
                Northstar International brings together craftsmanship, design and manufacturing expertise to create premium ceramic and multi-material products for discerning markets in India and around the world.
              </p>
              <p className="intro-subtext">
                We specialize in bespoke stoneware ceramics, porcelain, and fine chinaware. Our state-of-the-art facility enables us to develop highly durable, bespoke and exclusive export-grade products tailored to global design expectations and strict international quality criteria.
              </p>
              <button className="btn btn-secondary" onClick={() => navigateTo('about')}>
                Our Story & Vision
              </button>
            </div>
            <div className="intro-img-container">
              <img src={introCeramicsImg} alt="Fine Tableware Detail" className="intro-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">80,000+</div>
              <div className="stat-label">Sq. Ft. Factory</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">People Empowered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">In-House Packaging</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">GLOBAL</div>
              <div className="stat-label">Domestic & International</div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Overview */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Premium Classifications</span>
            <h2>Explore Our Collections</h2>
            <p>Our product categories are developed in-house, focusing on premium materials, unique glaze formulations, and contemporary shapes.</p>
          </div>

          <div className="categories-grid">
            <div className="category-card" onClick={() => navigateTo('collections')}>
              <div className="category-img-container">
                <img src={introCeramicsImg} alt="Stoneware Ceramics" className="category-img" />
              </div>
              <div className="category-overlay">
                <h3 className="category-title">Stoneware Ceramics</h3>
                <p className="category-desc">Bespoke stoneware designed for distinctive dining and living experiences.</p>
              </div>
            </div>

            <div className="category-card" onClick={() => navigateTo('collections')}>
              <div className="category-img-container">
                <img src={heroCeramicImg} alt="Porcelain" className="category-img" />
              </div>
              <div className="category-overlay">
                <h3 className="category-title">Porcelain</h3>
                <p className="category-desc">Refined porcelain collections combining elegance, durability and contemporary design.</p>
              </div>
            </div>

            <div className="category-card" onClick={() => navigateTo('collections')}>
              <div className="category-img-container">
                <img src={heroCeramicImg} alt="Fine Chinaware" className="category-img" />
              </div>
              <div className="category-overlay">
                <h3 className="category-title">Fine Chinaware</h3>
                <p className="category-desc">Premium chinaware crafted for sophisticated table settings and hospitality environments.</p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button className="btn btn-secondary" onClick={() => navigateTo('collections')}>
              View All Categories & Products
            </button>
          </div>
        </div>
      </section>

      {/* Materials Segment Callout */}
      <section className="section materials-section">
        <div className="container">
          <div className="materials-layout">
            <div className="materials-intro">
              <span className="subtitle" style={{ color: 'var(--color-gold)' }}>Design Diversity</span>
              <h2 className="materials-headline" style={{ color: 'var(--color-navy)' }}>More Than Ceramic</h2>
              <p className="materials-desc">
                Our design possibilities extend beyond ceramics. We bring together multiple materials to create distinctive, contemporary products.
              </p>
              <button className="btn btn-primary" onClick={() => navigateTo('materials')}>
                Explore Material Combinations
              </button>
            </div>
            <div>
              <div className="materials-grid-list">
                <div className="material-chip">
                  <div className="material-chip-icon"><Flame size={20} /></div>
                  <span className="material-chip-name">Ceramic</span>
                </div>
                <div className="material-chip">
                  <div className="material-chip-icon"><Award size={20} /></div>
                  <span className="material-chip-name">Metal</span>
                </div>
                <div className="material-chip">
                  <div className="material-chip-icon"><Box size={20} /></div>
                  <span className="material-chip-name">Wood</span>
                </div>
                <div className="material-chip">
                  <div className="material-chip-icon"><Layers size={20} /></div>
                  <span className="material-chip-name">Marble</span>
                </div>
                <div className="material-chip">
                  <div className="material-chip-icon"><Compass size={20} /></div>
                  <span className="material-chip-name">Stone</span>
                </div>
                <div className="material-chip">
                  <div className="material-chip-icon"><Globe size={20} /></div>
                  <span className="material-chip-name">Glass</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bespoke / Custom Design Section */}
      <section className="section custom-cta">
        <div className="custom-cta-bg"></div>
        <div className="container">
          <div className="custom-cta-content">
            <span className="subtitle" style={{ color: 'var(--color-gold)', display: 'block', marginBottom: '20px' }}>Custom Manufacturing</span>
            <h2>Designed Around Your Vision</h2>
            <p>
              From concept to finished product, Northstar International works with clients to develop distinctive products tailored to their design, functional and commercial requirements.
            </p>
            <button className="btn btn-primary" onClick={() => navigateTo('contact')}>
              Discuss Your Requirements
            </button>
          </div>
        </div>
      </section>

      {/* Founders Preview Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Founding Leadership</span>
            <h2>Founded With Vision</h2>
            <p>Guided by active experience and a commitment to modern manufacturing practices in India.</p>
          </div>
          
          <div className="founders-list-clean">
            <div className="founder-item-clean">
              <h3 className="founder-name">Mr. Sameer Arora</h3>
              <span className="founder-title">Co-Founder & Director</span>
              <p className="founder-bio">Co-founder leading strategic growth and expanding Northstar International's manufacturing footprint globally.</p>
              <div className="founder-contact-links" style={{ marginTop: '12px', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                  <Mail size={14} className="text-gold" style={{ color: 'var(--color-gold)' }} />
                  <a href="mailto:sameergas@gmail.com">sameergas@gmail.com</a>
                </div>
              </div>
            </div>
            
            <div className="founder-item-clean">
              <h3 className="founder-name">Mr. Kabeer Arora</h3>
              <span className="founder-title">Co-Founder & Director</span>
              <p className="founder-bio">Co-founder spearheading product engineering, multi-material research, and sustainable factory operations.</p>
              <div className="founder-contact-links" style={{ marginTop: '12px', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                  <Mail size={14} className="text-gold" style={{ color: 'var(--color-gold)' }} />
                  <a href="mailto:kabeerarora2@gmail.com">kabeerarora2@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="founder-item-clean">
              <h3 className="founder-name">Mr. Vasu Arora</h3>
              <span className="founder-title">Co-Founder & Director</span>
              <p className="founder-bio">Co-founder driving creative design systems, global B2B outreach, and export quality assurance compliance.</p>
              <div className="founder-contact-links" style={{ marginTop: '12px', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                  <Mail size={14} className="text-gold" style={{ color: 'var(--color-gold)' }} />
                  <a href="mailto:vasuarora270@gmail.com">vasuarora270@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Supply Callout */}
      <section className="section section-dark global-supply">
        <div className="container">
          <div className="supply-overlay-content">
            <span className="subtitle" style={{ color: 'var(--color-gold)' }}>B2B Logistics Readiness</span>
            <h2 style={{ fontSize: '3rem', marginBottom: '20px', color: 'var(--color-ivory)' }}>From Our Factory to Markets Around the World</h2>
            <p style={{ color: 'var(--color-stone-light)', marginBottom: '32px' }}>
              We facilitate large-scale domestic and international container shipping directly from our integrated facilities.
            </p>
            <button className="btn btn-primary" onClick={() => navigateTo('contact')}>
              Start a Conversation
            </button>
          </div>
          
          <div className="map-illustration">
            {/* Minimal Globe line art */}
            <svg viewBox="0 0 1000 400" className="map-svg">
              <path d="M150,150 Q400,50 850,200 M150,150 Q500,250 850,200 M150,150 Q450,130 850,200 M150,150 Q350,210 850,200" fill="none" stroke="var(--color-gold)" strokeWidth="1.5" strokeDasharray="5,5" />
              <circle cx="150" cy="150" r="6" fill="var(--color-gold)" />
              <circle cx="850" cy="200" r="6" fill="var(--color-gold)" />
              <text x="150" y="180" fill="var(--color-ivory)" fontSize="12" letterSpacing="2" textAnchor="middle">MANUFACTURING CENTER</text>
              <text x="850" y="230" fill="var(--color-ivory)" fontSize="12" letterSpacing="2" textAnchor="middle">GLOBAL DISTRIBUTION</text>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}

// 2. ABOUT US
function AboutPage({ navigateTo }) {
  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      {/* Intro Header */}
      <section className="section" style={{ backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: 0 }}>
            <span className="subtitle">Heritage & Philosophy</span>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Modern Indian Manufacturing, Defined</h1>
            <p>
              Northstar International was established with the vision to build a premium, design-forward manufacturing facility that integrates traditional craft sensibilities with industrial scale.
            </p>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-text-wrapper">
              <span className="intro-tagline">Integrated Operations</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Scale, Precision, and Dedication</h2>
              <p className="intro-body" style={{ fontSize: '1.05rem', color: 'var(--color-stone)' }}>
                Spread across an expansive 80,000 sq. ft., our manufacturing campus integrates all key stages of ceramic production, multi-material jointing, and quality testing. 
              </p>
              <p className="intro-subtext" style={{ marginTop: '20px' }}>
                We believe that reliable B2B supply rests on full control of the value chain. By hosting design, modeling, glaze development, firing, combination assembly, and packaging all under one roof, we guarantee consistent bespoke and exclusive export-grade quality.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '30px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <CheckCircle size={20} className="text-gold" style={{ color: 'var(--color-gold)' }} />
                  <span style={{ fontWeight: '500' }}>Bespoke stoneware, porcelain & fine chinaware capabilities</span>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <CheckCircle size={20} className="text-gold" style={{ color: 'var(--color-gold)' }} />
                  <span style={{ fontWeight: '500' }}>Exquisite combinations of ceramics with metal, wood, marble, stone and glass</span>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <CheckCircle size={20} className="text-gold" style={{ color: 'var(--color-gold)' }} />
                  <span style={{ fontWeight: '500' }}>Strict compliance with environmental guidelines</span>
                </div>
              </div>
            </div>
            <div className="intro-img-container">
              <img src={factoryFloorImg} alt="Modern ceramics factory interior" className="intro-img" style={{ height: '500px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Founders Grid */}
      <section className="section" style={{ backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Executive Leadership</span>
            <h2>Founders & Visionaries</h2>
            <p>Providing the strategic direction and quality benchmarks that govern Northstar International.</p>
          </div>
          
          <div className="founders-list-clean">
            <div className="founder-item-clean">
              <h3 className="founder-name">Mr. Sameer Arora</h3>
              <span className="founder-title">Co-Founder & Director</span>
              <p className="founder-bio">
                Steers corporate planning, capital allocation, and raw materials supply chain strategies to scale export capacities smoothly.
              </p>
              <div className="founder-contact-links" style={{ marginTop: '12px', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                  <Mail size={14} className="text-gold" style={{ color: 'var(--color-gold)' }} />
                  <a href="mailto:sameergas@gmail.com">sameergas@gmail.com</a>
                </div>
              </div>
            </div>
            
            <div className="founder-item-clean">
              <h3 className="founder-name">Mr. Kabeer Arora</h3>
              <span className="founder-title">Co-Founder & Director</span>
              <p className="founder-bio">
                Directs engineering operations, technological modernization of kilns, and multi-material integration systems.
              </p>
              <div className="founder-contact-links" style={{ marginTop: '12px', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                  <Mail size={14} className="text-gold" style={{ color: 'var(--color-gold)' }} />
                  <a href="mailto:kabeerarora2@gmail.com">kabeerarora2@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="founder-item-clean">
              <h3 className="founder-name">Mr. Vasu Arora</h3>
              <span className="founder-title">Co-Founder & Director</span>
              <p className="founder-bio">
                Heads product aesthetics, creative collaborations with international buyers, and quality control systems.
              </p>
              <div className="founder-contact-links" style={{ marginTop: '12px', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                  <Mail size={14} className="text-gold" style={{ color: 'var(--color-gold)' }} />
                  <a href="mailto:vasuarora270@gmail.com">vasuarora270@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Philosophy Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Corporate Benchmarks</span>
            <h2>Quality at Every Stage</h2>
            <p>Our commitment to excellence dictates each phase of our design, production, and shipping workflow.</p>
          </div>

          <div className="quality-grid">
            <div className="quality-card">
              <div className="quality-card-icon"><Award size={36} /></div>
              <h3>Material Selection</h3>
              <p>We source premium quality, high-plastic clays and mineral glazes, conducting batch testing to ensure chemical stability and purity.</p>
            </div>
            <div className="quality-card">
              <div className="quality-card-icon"><Flame size={36} /></div>
              <h3>Manufacturing Precision</h3>
              <p>Utilizing high-temperature, computer-controlled firing cycles to achieve fully vitrified stoneware and porcelain structures.</p>
            </div>
            <div className="quality-card">
              <div className="quality-card-icon"><ShieldCheck size={36} /></div>
              <h3>Finishing & Inspection</h3>
              <p>Every single product undergoes rigorous dimensional tolerance audits, glaze compliance inspections, and visual checks before leaving the table.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-img-container">
              <img src={packagingProcessImg} alt="Eco-friendly packaging" className="intro-img" style={{ height: '400px' }} />
            </div>
            <div className="intro-text-wrapper">
              <span className="intro-tagline" style={{ color: 'var(--color-gold)' }}>Responsibility</span>
              <h2>Manufacturing With Responsibility</h2>
              <p className="intro-body" style={{ marginTop: '20px', color: 'var(--color-stone-light)' }}>
                At Northstar International, we believe that B2B supply lines must be built on sustainable foundations. We strictly monitor environmental compliance throughout our factories.
              </p>
              <p className="intro-subtext" style={{ marginTop: '20px', color: 'var(--color-stone-light)' }}>
                Our operations proudly support a skilled workforce of over 500+ empowered individuals, providing safe workspace conditions, modern ergonomic training, and local employment opportunities.
              </p>
              <button className="btn btn-outline-gold" style={{ marginTop: '30px' }} onClick={() => navigateTo('contact')}>
                Discuss Ethical Auditing Specs
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// 3. COLLECTIONS & CATALOG
function CollectionsPage({ setSelectedProduct, handleProductEnquiry }) {
  const [activeFilter, setActiveFilter] = useState('All');

  // Filter Categories
  const categories = [
    'All',
    'Stoneware Ceramics',
    'Porcelain',
    'Fine Chinaware',
    'Metal combination products',
    'Wood combination products',
    'Glass combination products',
    'Table & Dining',
    'Home & Lifestyle'
  ];

  const filteredProducts = activeFilter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeFilter);

  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      {/* Intro Header */}
      <section className="section" style={{ backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: 0 }}>
            <span className="subtitle">B2B Product Showcase</span>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Our Collections</h1>
            <p>
              Explore our architectural, export-ready ranges. Select any item to view detailed specifications, measurements, custom finishing options, and submit direct RFQs.
            </p>
          </div>
        </div>
      </section>

      {/* Filterable Catalog */}
      <section className="section">
        <div className="container">
          {/* Navigation filters */}
          <div className="collections-nav-bar">
            {categories.map(cat => (
              <button 
                key={cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid list */}
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div 
                key={product.id} 
                className="product-card"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="product-card-img-container">
                  <img src={product.image} alt={product.name} className="product-card-img" />
                </div>
                <div className="product-card-content">
                  <span className="product-card-cat">{product.category}</span>
                  <h3 className="product-card-title">{product.name}</h3>
                  <div className="product-card-materials" style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '10px' }}>
                    <Layers size={14} className="text-gold" style={{ color: 'var(--color-gold)' }} />
                    <span>{product.material}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div style={{ textItems: 'center', padding: '60px 0' }}>
              <p>No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

// 4. MATERIALS & COMBINATIONS
function MaterialsPage({ navigateTo }) {
  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      {/* Intro Header */}
      <section className="section" style={{ backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: 0 }}>
            <span className="subtitle">Exquisite Mixed Media</span>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Multi-Material Creations</h1>
            <p>
              We specialize in combining ceramic with complementary architectural elements to produce highly distinctive home, dining, and lifestyle products.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Material list */}
      <section className="section">
        <div className="container">
          {/* Ceramic + Metal */}
          <div className="materials-detail-row">
            <div className="materials-detail-img-container">
              <img src={materialsGridImg} alt="Ceramic and Metal combination" className="materials-detail-img" />
            </div>
            <div className="materials-detail-content">
              <span className="mat-name">Combination One</span>
              <h3>Ceramic & Metal</h3>
              <p>
                We marry the earthy matte texture of clay with polished, hand-beaten, or oxidized metals. Our catalog features planters, candle stands, and vessels accented with solid brass, stainless steel, and iron bindings.
              </p>
              <button className="btn btn-secondary" onClick={() => navigateTo('collections')}>
                View Metal Combinations
              </button>
            </div>
          </div>

          {/* Ceramic + Wood */}
          <div className="materials-detail-row">
            <div className="materials-detail-img-container">
              <img src={introCeramicsImg} alt="Ceramic and Wood combination" className="materials-detail-img" />
            </div>
            <div className="materials-detail-content">
              <span className="mat-name">Combination Two</span>
              <h3>Ceramic & Wood</h3>
              <p>
                A sensory match combining cool glazed ceramics with the organic warmth of wood. We design dining platters, salt-and-pepper blocks, and tabletop stands featuring hand-turned sustainable teak, acacia, and sheesham wood bases.
              </p>
              <button className="btn btn-secondary" onClick={() => navigateTo('collections')}>
                View Wood Combinations
              </button>
            </div>
          </div>

          {/* Ceramic + Marble / Stone */}
          <div className="materials-detail-row">
            <div className="materials-detail-img-container">
              <img src={heroCeramicImg} alt="Ceramic and Marble combination" className="materials-detail-img" />
            </div>
            <div className="materials-detail-content">
              <span className="mat-name">Combination Three</span>
              <h3>Ceramic & Marble / Stone</h3>
              <p>
                Creating heavy, luxurious statement tabletop boards. White Makrana marble, green marble, and granite pieces are cut, polished, and seamlessly joined to high-fired stoneware using food-grade sealants.
              </p>
              <button className="btn btn-secondary" onClick={() => navigateTo('collections')}>
                View Marble Combinations
              </button>
            </div>
          </div>

          {/* Ceramic + Glass */}
          <div className="materials-detail-row">
            <div className="materials-detail-img-container">
              <img src={materialsGridImg} alt="Ceramic and Glass combination" className="materials-detail-img" />
            </div>
            <div className="materials-detail-content">
              <span className="mat-name">Combination Four</span>
              <h3>Ceramic & Glass</h3>
              <p>
                Pairing light refraction with opaque ceramic glazes. Transparent blown glass domes, inserts, and containers interact beautifully with textured clay catch-trays, suitable for high-end hotel buffets and room decor.
              </p>
              <button className="btn btn-secondary" onClick={() => navigateTo('collections')}>
                View Glass Combinations
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--color-gold)' }}>Have a Specific Multi-Material Blueprint?</h2>
            <p style={{ color: 'var(--color-stone-light)', marginBottom: '30px' }}>
              Our in-house design and engineering department works closely with architectural briefs to review, prototype, and manufacture custom combination designs.
            </p>
            <button className="btn btn-primary" onClick={() => navigateTo('contact')}>
              Consult Our Engineers
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// 5. FACTORY & MANUFACTURING
function FactoryPage({ navigateTo }) {
  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      {/* Intro Header */}
      <section className="section" style={{ backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: 0 }}>
            <span className="subtitle">Manufacturing Operations</span>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Built for Scale. Crafted for Detail.</h1>
            <p>
              Operating an integrated 80,000 sq. ft. campus that combines specialized clay aging chambers, precise kilns, and secure packaging warehouses.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Process Workflow */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Timeline</span>
            <h2>Our Production Flow</h2>
            <p>From visual design concept to overseas supply dispatch, every stage occurs in-house.</p>
          </div>

          <div className="process-flow">
            <div className="process-line"></div>
            <div className="process-grid">
              <div className="process-step">
                <div className="process-num">1</div>
                <h4 className="process-title">Design</h4>
                <p className="process-desc">Initial 3D modeling & sketch reviews.</p>
              </div>

              <div className="process-step">
                <div className="process-num">2</div>
                <h4 className="process-title">Development</h4>
                <p className="process-desc">Glaze formulations & mould casting.</p>
              </div>

              <div className="process-step">
                <div className="process-num">3</div>
                <h4 className="process-title">Production</h4>
                <p className="process-desc">Jiggering, throwing & high-temp firing.</p>
              </div>

              <div className="process-step">
                <div className="process-num">4</div>
                <h4 className="process-title">Quality Check</h4>
                <p className="process-desc">Detailed impact & thermal test audits.</p>
              </div>

              <div className="process-step">
                <div className="process-num">5</div>
                <h4 className="process-title">Packaging</h4>
                <p className="process-desc">Bespoke drop-test proof cardboard crates.</p>
              </div>

              <div className="process-step">
                <div className="process-num">6</div>
                <h4 className="process-title">Supply</h4>
                <p className="process-desc">Domestic container & sea-freight dispatch.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packaging & Logistics Spotlight */}
      <section className="section" style={{ backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Supply Chains</span>
            <h2>Packed In-House. Ready for the World.</h2>
            <p>Providing the shipping container layout structures and transit care that global distributors require.</p>
          </div>

          <div className="logistics-grid">
            <div className="logistics-card">
              <div style={{ color: 'var(--color-gold)' }}><Box size={36} /></div>
              <h3>100% In-House Packaging</h3>
              <p>
                We handle the packaging process internally. Using customized, high-density drop-proof cellular inserts, reinforced dividers, and moisture-controlled pallets, we eliminate breakage during sea-freight container transit.
              </p>
              <div className="logistics-card-img-container">
                <img src={clientBrandedBox} alt="Ceramics packaged in boxes" className="logistics-card-img" style={{ objectFit: 'contain' }} />
              </div>
            </div>

            <div className="logistics-card">
              <div style={{ color: 'var(--color-gold)' }}><Globe size={36} /></div>
              <h3>Global Logistics & Supply</h3>
              <p>
                Equipped with loading docks that handle domestic and international containers, we manage custom clearance documentation, sea-freight tracking, and door-to-port coordination for B2B retailers.
              </p>
              <div className="logistics-card-img-container">
                <img src={clientWarehousePallets} alt="Logistics warehouse loading docks" className="logistics-card-img" style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// 6. CONTACT PAGE & RFQ FORM
function ContactPage({ formData, handleFormChange, handleFormSubmit, enquirySuccess, resetForm }) {
  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      {/* Intro Header */}
      <section className="section" style={{ backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: 0 }}>
            <span className="subtitle">Procurement & Inquiry Hub</span>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Let's Create Something Exceptional</h1>
            <p>
              Connect with our international export sales representatives to request catalog access, place customized sample orders, or submit bulk specifications.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Direct details */}
            <div className="contact-info">
              <div>
                <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>Contact Details</h3>
                <p style={{ color: 'var(--color-stone)', marginBottom: '30px' }}>
                  Our team responds to all B2B and custom design enquiries within 24 business hours. Feel free to contact our office or submit the RFQ form.
                </p>
              </div>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon-box"><MapPin size={20} /></div>
                  <div>
                    <h4>Factory Headquarters</h4>
                    <p>Northstar International Manufacturing Hub, (80,000 sq. ft. Integrated Facility), India</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-box"><Mail size={20} /></div>
                  <div>
                    <h4>B2B Enquiry Email</h4>
                    <p><a href="mailto:business@northstarceramic.com" style={{ fontWeight: '500', color: 'var(--color-navy)' }}>business@northstarceramic.com</a></p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-box"><Phone size={20} /></div>
                  <div>
                    <h4>Primary Call / WhatsApp</h4>
                    <p style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <a href="tel:+916397211261" style={{ fontWeight: '500', color: 'var(--color-navy)' }}>+91 63972 11261</a>
                      <a href="tel:+917906700054" style={{ fontWeight: '500', color: 'var(--color-navy)' }}>+91 79067 00054</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Leadership Contacts Section */}
              <div style={{ marginTop: '40px', backgroundColor: 'var(--color-gold-light)', padding: '24px', borderLeft: '4px solid var(--color-gold)' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '16px', color: 'var(--color-navy)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Users size={18} /> Direct Leadership Channels
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ fontSize: '0.9rem' }}>
                    <div style={{ fontWeight: '600', color: 'var(--color-navy)' }}>Mr. Sameer Arora</div>
                    <div style={{ display: 'flex', gap: '15px', marginTop: '4px', opacity: 0.85 }}>
                      <span>Email: <a href="mailto:sameergas@gmail.com" style={{ textDecoration: 'underline' }}>sameergas@gmail.com</a></span>
                      <span>Phone: <a href="tel:+919837043712" style={{ textDecoration: 'underline' }}>9837043712</a></span>
                    </div>
                  </div>
                  <div style={{ fontSize: '0.9rem' }}>
                    <div style={{ fontWeight: '600', color: 'var(--color-navy)' }}>Mr. Kabeer Arora</div>
                    <div style={{ display: 'flex', gap: '15px', marginTop: '4px', opacity: 0.85 }}>
                      <span>Email: <a href="mailto:kabeerarora2@gmail.com" style={{ textDecoration: 'underline' }}>kabeerarora2@gmail.com</a></span>
                      <span>Phone: <a href="tel:+917906700054" style={{ textDecoration: 'underline' }}>7906700054</a></span>
                    </div>
                  </div>
                  <div style={{ fontSize: '0.9rem' }}>
                    <div style={{ fontWeight: '600', color: 'var(--color-navy)' }}>Mr. Vasu Arora</div>
                    <div style={{ display: 'flex', gap: '15px', marginTop: '4px', opacity: 0.85 }}>
                      <span>Email: <a href="mailto:vasuarora270@gmail.com" style={{ textDecoration: 'underline' }}>vasuarora270@gmail.com</a></span>
                      <span>Phone: <a href="tel:+916397211261" style={{ textDecoration: 'underline' }}>6397211261</a></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links placeholders */}
              <div>
                <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px', fontWeight: '600' }}>Direct Channels</h4>
                <div className="social-links">
                  <a href="#" className="social-icon-btn" title="LinkedIn"><Users size={18} /></a>
                  <a href="#" className="social-icon-btn" title="WhatsApp Business"><Phone size={18} /></a>
                  <a href="#" className="social-icon-btn" title="Contact Email"><Mail size={18} /></a>
                </div>
              </div>
            </div>

            {/* B2B Enquiry Card */}
            <div>
              {enquirySuccess ? (
                <div className="enquiry-form-card" style={{ padding: '60px 40px', textAlign: 'center' }}>
                  <div className="form-success-alert">
                    <CheckCircle size={48} style={{ color: 'var(--color-gold)', margin: '0 auto 20px' }} />
                    <h3>Enquiry Received</h3>
                    <p style={{ marginTop: '10px' }}>
                      Thank you for contacting Northstar International. Our export representative has been assigned to your RFQ and will email you within 24 business hours with pricing details and catalogs.
                    </p>
                  </div>
                  <button className="btn btn-secondary" style={{ marginTop: '30px' }} onClick={resetForm}>
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <div className="enquiry-form-card">
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '24px', color: 'var(--color-navy)' }}>B2B Enquiry Form</h3>
                  <form onSubmit={handleFormSubmit}>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="name">Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          className="form-input" 
                          required 
                          value={formData.name}
                          onChange={handleFormChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="company">Company</label>
                        <input 
                          type="text" 
                          id="company" 
                          name="company" 
                          className="form-input" 
                          required 
                          value={formData.company}
                          onChange={handleFormChange}
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          className="form-input" 
                          required 
                          value={formData.email}
                          onChange={handleFormChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="phone">Phone</label>
                        <input 
                          type="text" 
                          id="phone" 
                          name="phone" 
                          className="form-input" 
                          required 
                          value={formData.phone}
                          onChange={handleFormChange}
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="country">Country</label>
                        <input 
                          type="text" 
                          id="country" 
                          name="country" 
                          className="form-input" 
                          required 
                          value={formData.country}
                          onChange={handleFormChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="productInterest">Product Interest</label>
                        <select 
                          id="productInterest" 
                          name="productInterest" 
                          className="form-input"
                          value={formData.productInterest}
                          onChange={handleFormChange}
                          style={{ appearance: 'none', backgroundImage: 'url("data:image/svg+xml;utf8,<svg fill=\'%230F2B48\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/><path d=\'M0 0h24v24H0z\' fill=\'none\'/></svg>")', backgroundPosition: 'right 12px center', backgroundRepeat: 'no-repeat' }}
                        >
                          <option value="Stoneware Ceramics">Stoneware Ceramics</option>
                          <option value="Porcelain">Porcelain</option>
                          <option value="Fine Chinaware">Fine Chinaware</option>
                          <option value="Metal combination products">Metal combination products</option>
                          <option value="Wood combination products">Wood combination products</option>
                          <option value="Glass combination products">Glass combination products</option>
                          <option value="Table & Dining">Table & Dining</option>
                          <option value="Home & Lifestyle">Home & Lifestyle</option>
                          <option value="Bespoke / Custom Development">Bespoke / Custom Development</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="message">Message / Specifications</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        className="form-input" 
                        required 
                        value={formData.message}
                        onChange={handleFormChange}
                        placeholder="Detail your bulk requirements, customization preferences, target MOQs, or other timeline details..."
                      />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', border: 'none' }}>
                      Send Enquiry RFQ
                    </button>

                  </form>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

// 7. PRIVACY POLICY PAGE
export function PrivacyPage() {
  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      {/* Intro Header */}
      <section className="section" style={{ backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: 0 }}>
            <span className="subtitle">Regulatory Compliance</span>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Privacy Policy</h1>
            <p>
              Your privacy is of critical importance to us. This statement details our practices regarding information collection, usage, and safeguarding at Northstar International.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="legal-content" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>1. Information Collection</h2>
              <p style={{ color: 'var(--color-stone)', fontSize: '1.05rem' }}>
                We collect personal identifiers and business information through our B2B Enquiry RFQ form, including names, company designations, emails, contact numbers, and project specifications. This data is collected solely to assist in serving your business inquiries.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>2. Use of Collected Data</h2>
              <p style={{ color: 'var(--color-stone)', fontSize: '1.05rem' }}>
                The information collected is used to prepare customized quotations, fulfill sample demands, coordinate shipping schedules, and provide direct client support. We do not sell or lease your business details to third-party marketing entities.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>3. Data Security and Safeguards</h2>
              <p style={{ color: 'var(--color-stone)', fontSize: '1.05rem' }}>
                We execute standard database encryption and electronic security measures to shield stored details against unauthorized retrieval, modifications, or leakages.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>4. Cookies and Analytical Tools</h2>
              <p style={{ color: 'var(--color-stone)', fontSize: '1.05rem' }}>
                Our website utilizes basic session cookies to track general page traffic trends and visitor engagement. You have full liberty to change browser permissions to restrict cookies at your discretion.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>5. Contact and Queries</h2>
              <p style={{ color: 'var(--color-stone)', fontSize: '1.05rem' }}>
                If you have queries regarding data deletion requests or need clarification about our compliance frameworks, feel free to email our data protection representative at: <a href="mailto:business@northstarceramic.com" style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}>business@northstarceramic.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// 8. DISCLAIMER PAGE
export function DisclaimerPage() {
  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      {/* Intro Header */}
      <section className="section" style={{ backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: 0 }}>
            <span className="subtitle">Terms of Use Disclaimer</span>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Legal Disclaimer</h1>
            <p>
              Information displayed on this platform is curated for general business introduction and catalog presentation.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="legal-content" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>1. Catalog Accuracy</h2>
              <p style={{ color: 'var(--color-stone)', fontSize: '1.05rem' }}>
                While we strive to ensure that all dimensions, glaze specifications, material compositions, and packaging parameters are accurate, hand-glazed stoneware and custom combination items naturally exhibit structural and aesthetic variations. Actual colors, grains, and raw textures may vary from catalog imagery.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>2. Pricing and Availability</h2>
              <p style={{ color: 'var(--color-stone)', fontSize: '1.05rem' }}>
                All catalog pricing models, sample lead times, and dispatch shipping dates are subject to variable raw material market values and transport conditions. Final commitments are governed exclusively by mutual signatures on individual commercial Proforma Invoices (PI).
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>3. External Links</h2>
              <p style={{ color: 'var(--color-stone)', fontSize: '1.05rem' }}>
                Our website may include links to third-party shipping trackers, trade directories, or partner websites. Northstar International holds no liability for the practices or terms of these external sites.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// 9. TERMS & CONDITIONS PAGE
export function TermsPage() {
  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      {/* Intro Header */}
      <section className="section" style={{ backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: 0 }}>
            <span className="subtitle">B2B Purchase Rules</span>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Terms & Conditions</h1>
            <p>
              These rules outline the regulations for conducting business inquiries, sample procurement, and contracting with Northstar International.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="legal-content" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>1. Acceptance of Terms</h2>
              <p style={{ color: 'var(--color-stone)', fontSize: '1.05rem' }}>
                By browsing this website, requesting catalog accesses, or submitting bulk inquiries, you signify your full acceptance of these terms and conditions. If you disagree with any segment, please discontinue platform usage.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>2. Intellectual Property</h2>
              <p style={{ color: 'var(--color-stone)', fontSize: '1.05rem' }}>
                All graphic systems, logo structures, bespoke product sketch blueprints, glaze compositions, and website layouts are the exclusive intellectual property of Northstar International. Copying, republishing, or mimicking catalog designs without express written consent is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>3. Minimum Order Quantity (MOQ)</h2>
              <p style={{ color: 'var(--color-stone)', fontSize: '1.05rem' }}>
                All custom production batches, private labelling commands, and export shipments are governed by strict category MOQs (typically starting at 500 sets for custom stoneware dinnerware, unless specified otherwise in the product details).
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>4. Shipping and Returns</h2>
              <p style={{ color: 'var(--color-stone)', fontSize: '1.05rem' }}>
                All global container shipping is executed under specific Incoterms (Incoterms 2020: FOB, CIF, or Ex-Works as agreed upon). Since custom ceramics are custom-fired, cancellations or refunds are not supported once a production batch has been launched.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>5. Jurisdiction</h2>
              <p style={{ color: 'var(--color-stone)', fontSize: '1.05rem' }}>
                Any legal actions, commercial disputes, or arbitration proceedings shall be governed by the laws of India and resolved exclusively within the competent courts of the state where our manufacturing hub is registered.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
