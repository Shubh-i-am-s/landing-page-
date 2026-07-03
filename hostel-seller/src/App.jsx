import React, { useState, useEffect } from 'react';
import './App.css';

const featuredHostels = [
  {
    id: 1,
    heroTitle: ["Nature's", "Perfect", "Hideaways"],
    title: "Evergreen Pine Dorm Lodge",
    location: "Forest Retreat",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop",
    themeColor: "#d9f99d", // Pale lime green matching forest theme
    price: "$25",
    description: "Discover handpicked budget hostels in breathtaking locations. Unplug, unwind, and reconnect with fellow travelers from around the world.",
    guests: "1 bed in 6-bed dorm"
  },
  {
    id: 2,
    heroTitle: ["Urban", "Concrete", "Jungle"],
    title: "Urban Loft Dorms",
    location: "Downtown City",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2000&auto=format&fit=crop",
    themeColor: "#bae6fd", // Pale sky blue matching city/urban lights
    price: "$35",
    description: "Modern pod-style beds in the heart of the metropolis with high-speed WiFi and incredible skyline views.",
    guests: "1 private pod"
  },
  {
    id: 3,
    heroTitle: ["Alpine", "Peak", "Escapes"],
    title: "Alpine Peaks Lodge",
    location: "Mountain Ranges",
    image: "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=2000&auto=format&fit=crop",
    themeColor: "#94a3b8", // Concrete grey
    price: "$42",
    description: "Cozy wooden dorms with breathtaking snow-capped mountain views and nightly campfire meetups.",
    guests: "1 bed in 4-bed dorm"
  },
  {
    id: 4,
    heroTitle: ["Vintage", "Heritage", "Retreats"],
    title: "Heritage Haven",
    location: "Old Town District",
    image: "https://images.unsplash.com/photo-1533759413974-9e15f3b745ac?q=80&w=2000&auto=format&fit=crop",
    themeColor: "#fbbf24", // Richer amber/gold for better visibility
    price: "$28",
    description: "Experience history in our beautifully restored 18th-century vintage manor right in the center of the old town.",
    guests: "Private Room"
  }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredHostels.length);
    }, 5000); // Switches every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const currentHostel = featuredHostels[currentIndex];

  return (
    <div 
      className="landing-wrapper"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url('${currentHostel.image}')`
      }}
    >
      <div className="landing-container">
        
        {/* Navigation */}
        <nav className="navbar">
          <div className="logo">
            <span className="logo-icon">🛖</span>
            <span className="logo-text">HostelNest</span>
          </div>
          
          <div className="nav-links">
            <a href="#">Locations</a>
            <a href="#">Rooms</a>
            <a href="#">Experiences</a>
            <a href="#">Contact</a>
          </div>
          
          <button className="book-now-btn">Book Now</button>
        </nav>

        {/* Main Content */}
        <main className="main-content">
          <div className="hero-text">
            <h1 key={currentHostel.id} className="fade-in-text" style={{ color: currentHostel.themeColor }}>
              {currentHostel.heroTitle[0]}<br/>
              {currentHostel.heroTitle[1]}<br/>
              {currentHostel.heroTitle[2]}
            </h1>
            
            <div className="hero-footer">
              <p key={`desc-${currentHostel.id}`} className="description fade-in-text">
                {currentHostel.description}
              </p>
              <div className="rating">
                <span className="star">★</span> 4.7
                <div className="reviews">from 1,800+ stays</div>
              </div>
            </div>
            
            {/* Slide Indicators */}
            <div className="slide-indicators">
              {featuredHostels.map((_, index) => (
                <div 
                  key={index} 
                  className={`indicator ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Dynamic Booking Card */}
          <div key={`card-${currentHostel.id}`} className="booking-card fade-in-card">
            <div className="card-header">
              <h3>{currentHostel.title}<br/><span className="location-tag">📍 {currentHostel.location}</span></h3>
              <button className="edit-btn">✏️</button>
            </div>
            
            <div className="date-picker">
              <div className="date-input">
                <span className="icon-text">📅 Feb 11</span>
                <span className="arrow">▼</span>
              </div>
              <div className="date-input">
                <span className="icon-text">📅 Mar 25</span>
                <span className="arrow">▼</span>
              </div>
            </div>

            <div className="check-times">
              <div className="time-block">
                <span className="label">Check-in</span>
                <span className="value">After 2:00 PM</span>
              </div>
              <div className="time-block">
                <span className="label">Check-out</span>
                <span className="value">Until 12:00 PM</span>
              </div>
            </div>

            <div className="price-section">
              <div className="price">
                <span className="amount">{currentHostel.price}</span>/night
              </div>
              <div className="guests">{currentHostel.guests}</div>
            </div>

            <button className="reserve-btn">Reserve</button>
          </div>
        </main>
      </div>

      {/* NEW SECTION: Mobile App Showcase */}
      <section className="mobile-showcase">
        
        {/* Panel 1: Featured Lodges */}
        <div className="mobile-panel">
          <div className="panel-header">
            <div className="panel-logo">🛖 HostelNest</div>
            <div className="menu-icon">☰</div>
          </div>
          <h3 style={{fontSize: '1.8rem', fontWeight: 400, marginBottom: '5px'}}>Featured<br/>Lodges</h3>
          <p style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', marginBottom: '20px'}}>This week's most loved retreats</p>
          
          <div className="featured-list">
            {featuredHostels.map((h, i) => (
              <div key={i} className="small-hostel-card">
                <div className="small-hostel-img" style={{ backgroundImage: `url(${h.image})` }} />
                <div className="small-hostel-info">
                  <h4>{h.title}</h4>
                  <div className="price">{h.price}<span>/night</span></div>
                  <button>Reserve</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Panel 2: Hero App View */}
        <div className="mobile-panel">
          <div className="panel-header">
            <div className="panel-logo">🛖 HostelNest</div>
            <div className="menu-icon">☰</div>
          </div>
          <div className="panel-hero">
            <h2 key={currentHostel.id} className="fade-in-text" style={{ color: currentHostel.themeColor }}>
              {currentHostel.heroTitle[0]}<br/>
              {currentHostel.heroTitle[1]}<br/>
              {currentHostel.heroTitle[2]}
            </h2>
            <p key={`panel-desc-${currentHostel.id}`} className="fade-in-text">
              {currentHostel.description}
            </p>
            <div className="rating">
                <span className="star">★</span> 4.7
                <div className="reviews" style={{fontSize: '0.75rem'}}>from 1,800+ stays</div>
            </div>
            <button>Book Now</button>
          </div>
        </div>

        {/* Panel 3: Booking Preview */}
        <div className="mobile-panel">
          <div className="panel-header">
            <div className="panel-logo">🛖 HostelNest</div>
            <div className="menu-icon">☰</div>
          </div>
          <h3 style={{fontSize: '1.8rem', fontWeight: 400, marginBottom: '20px'}}>Reserve<br/>Your Retreat</h3>
          
          <div className="booking-preview-img fade-in-card" style={{ backgroundImage: `url(${currentHostel.image})` }} key={currentHostel.id} />
          
          <div className="booking-preview-card fade-in-card" key={`bpc-${currentHostel.id}`}>
            <div className="card-header">
              <h3>{currentHostel.title}</h3>
              <button className="edit-btn" style={{width: '28px', height: '28px'}}>✏️</button>
            </div>
            
            <div className="date-picker">
              <div className="date-input" style={{padding: '10px 12px'}}>
                <span className="icon-text" style={{fontSize: '0.8rem'}}>📅 Feb 11</span>
                <span className="arrow">▼</span>
              </div>
              <div className="date-input" style={{padding: '10px 12px'}}>
                <span className="icon-text" style={{fontSize: '0.8rem'}}>📅 Mar 25</span>
                <span className="arrow">▼</span>
              </div>
            </div>

            <div className="check-times" style={{marginBottom: '16px'}}>
              <div className="time-block" style={{padding: '10px'}}>
                <span className="label" style={{fontSize: '0.65rem'}}>Check-in</span>
                <span className="value" style={{fontSize: '0.75rem'}}>After 2:00 PM</span>
              </div>
              <div className="time-block" style={{padding: '10px'}}>
                <span className="label" style={{fontSize: '0.65rem'}}>Check-out</span>
                <span className="value" style={{fontSize: '0.75rem'}}>Until 12:00 PM</span>
              </div>
            </div>

            <div className="price-section" style={{marginBottom: '16px'}}>
              <div className="price">
                <span className="amount" style={{fontSize: '1.4rem'}}>{currentHostel.price}</span><span style={{fontSize: '0.8rem'}}>/night</span>
              </div>
              <div className="guests" style={{fontSize: '0.75rem'}}>{currentHostel.guests}</div>
            </div>

            <button className="reserve-btn" style={{padding: '12px'}}>Reserve</button>
          </div>
        </div>

      </section>

    </div>
  );
}

export default App;
