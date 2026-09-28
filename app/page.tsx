'use client'

import { useState } from 'react'

const headshotUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/headshot%20%281%29-ztu32dwQf28ppIb4qMvdGdSqn4N3Pw.jpg'
const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-FdsLrCOQaDFij9gGJwebpeoaLpaoEt.jpeg'

const services = [
  {
    number: '01',
    title: 'Personal Guest Welcome',
    tagline: 'A warm welcome. A confident beginning.',
    text: 'A scheduled, homeowner-approved arrival and orientation that helps guests feel expected, safe and welcome from the beginning. Guests receive clear guidance for the home, Respect Thy Neighbor expectations and an introduction to the Lincolnville Corridor beyond the front door.',
    price: '$95 per arrival',
  },
  {
    number: '02',
    title: 'Complete Rooted Stay',
    tagline: 'Personal hospitality with local connection.',
    text: 'Pre-arrival coordination, a personal guest welcome, approved non-emergency guest support and homeowner communication throughout the stay. Guests are connected to Lincolnville’s history, parks, locally rooted businesses and community experiences while receiving clear guidance for parking, noise, trash, boundaries and resident privacy. A homeowner follow-up summary completes the stay.',
    price: '$195 per stay',
  },
  {
    number: '03',
    title: 'Property Story & Welcome Foundation',
    tagline: 'Give the home a story guests can carry with them.',
    text: 'A discovery meeting and property walk-through centered on the home’s character, the homeowner’s priorities and the welcome you want guests to remember. Root & Simmer Hospitality Co. develops the hospitality foundation for the home - including its property story, guest welcome approach, neighborhood connection and distinctive webpage language - so the home stands apart while remaining connected to the Lincolnville Corridor.',
    price: '$425 one time',
  },
  {
    number: '04',
    title: 'Lincolnville Digital Guest Guide',
    tagline: 'The community beyond the front door.',
    text: 'A customized digital guide connecting the home to Lincolnville’s history, parks, people, culture, locally rooted businesses, artisans and community experiences. The guide includes homeowner-approved recommendations, local wayfinding and Respect Thy Neighbor guidance so guests can explore with greater confidence, support locally and understand the living neighborhood around them.',
    price: '$225 one time',
  },
]

const benefits = [
  'Guests who arrive welcomed, informed, and confident',
  'Clear communication and dependable follow-through',
  'Greater respect for the property and neighbors',
  'Stronger reviews and opportunities for repeat stays',
]

const values = [
  {
    title: 'Hospitality with Appreciation',
    text: 'Every person deserves to feel seen, heard, respected and appreciated. Root & Simmer Hospitality Co. leads with warmth, gratitude and genuine care for every homeowner, guest, resident and community partner.',
  },
  {
    title: 'Respect the Roots',
    text: 'Every home is part of a larger story. Root & Simmer Hospitality Co. cares for the property, honors Lincolnville’s history and respects the community that gives this neighborhood its character.',
  },
  {
    title: 'Neighbors Keep the Heartbeat',
    text: 'Long-term residents bring Lincolnville’s history, character and community to life. Root & Simmer Hospitality Co. respects their privacy, property and daily lives while supporting redevelopment that listens to residents, includes them and allows them to benefit from the neighborhood’s future.',
  },
  {
    title: 'Share a Deeper-Rooted History',
    text: 'There is more to Lincolnville than what appears on the tourist map. Root & Simmer Hospitality Co. invites guests beyond the familiar route to discover the people, places and stories that shaped this community - with Little Africa as its historical heartbeat.',
  },
  {
    title: 'Support Locally. Thrive Together.',
    text: 'Tourism should create opportunity throughout the Lincolnville Corridor. Root & Simmer Hospitality Co. introduces guests to locally rooted businesses, artisans, cultural organizations and community experiences - helping the benefits of tourism remain within the community as redevelopment moves forward. The goal is not simply to survive change, but to grow together and thrive while preserving the history and character that make Lincolnville worth discovering.',
  },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Root and Simmer home">
          <span className="brand-mark" aria-hidden="true">⌁</span>
          <span><strong>ROOT</strong><em>&amp;</em><strong>SIMMER</strong><small>HOSPITALITY CO.</small></span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span className="sr-only">Toggle navigation</span>{menuOpen ? 'Close' : 'Menu'}
        </button>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
          <a href="#mission" onClick={() => setMenuOpen(false)}>Mission</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#values" onClick={() => setMenuOpen(false)}>Values</a>
          <a className="nav-cta" href="mailto:rootnsimmer@gmail.com">Start a conversation <span>↗</span></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">The heartbeat of Lincolnville</p>
          <h1>Hospitality<br /><span className="rooted">Rooted</span> in<br />Community.</h1>
          <p className="hero-lede">Your home opens the door to the historic Lincolnville Corridor.</p>
          <p className="hero-sub">Root &amp; Simmer Hospitality Co. connects guests to the history, people, places and living community beyond the front door.</p>
          <p className="hero-together">Together, we create the experience.</p>
          <a className="button button-dark" href="#mission">Discover Root &amp; Simmer <span>→</span></a>
        </div>
        <div className="hero-art">
          <img className="hero-logo" src={logoUrl} alt="Root & Simmer Hospitality Co. logo" />
        </div>
      </section>

      <section className="mission-section" id="mission">
        <div className="section-label">01 / Mission • Vision • Purpose with Passion</div>
        <div className="mission-grid">
          <article className="mission-item">
            <h2>Mission</h2>
            <p>Root &amp; Simmer Hospitality Co. partners with homeowners throughout the Lincolnville Corridor to create the personal welcome between the reservation and the neighborhood. Through a warm arrival, clear local guidance and historical exploration, I help guests feel safe, confident and a genuine sense of belonging - while honoring the home, respecting residents and introducing them to the history, people, parks and locally rooted businesses beyond the front door.</p>
          </article>
          <article className="mission-item">
            <h2>Vision</h2>
            <p>Root &amp; Simmer Hospitality Co. envisions the Lincolnville Corridor fully represented on St. Augustine&apos;s visitor guide map as a thriving historic community - where the legacy of Little Africa is honored, residents are respected, locally rooted businesses benefit from tourism and redevelopment carries the neighborhood&apos;s history and character forward while supporting long-term residents.</p>
          </article>
          <article className="mission-item">
            <h2>Purpose with <i>Passion</i></h2>
            <p>Root &amp; Simmer Hospitality Co.&apos;s purpose is to turn each stay into a doorway to Lincolnville - where the home becomes the beginning of an experience that welcomes guests, honors history, supports homeowners and locally rooted businesses, and respects residents.</p>
            <p>Root &amp; Simmer Hospitality Co. is determined to help place Lincolnville on the visitor map and preserve Little Africa as its historical heartbeat - so guests discover the community beyond their front door before they follow the tourist guide map to Flagler, and leave with a reason to return.</p>
          </article>
        </div>
      </section>

      <section className="corridor-band">
        <div className="corridor-line" />
        <div className="corridor-grid"><span>The Lincolnville Corridor<br /><i>is the journey.</i></span><span>Little Africa<br /><i>is the heartbeat.</i></span><span>Root &amp; Simmer Hospitality Co.<br /><i>is the gateway.</i></span></div>
        <p className="corridor-together">Together, we create the experience.</p>
        <div className="corridor-line" />
      </section>

      <section className="services-section" id="services">
        <div className="section-label">02 / The services</div>
        <div className="services-heading">
          <h2>Hospitality<br /><i>Beyond the Front Door.</i></h2>
          <div className="services-intro">
            <p className="services-sub">Your home. Your vision. A welcome guests remember.</p>
            <p>Every home has a story, and every homeowner has a vision for the experience they want to create. Root &amp; Simmer Hospitality Co. builds a thoughtful hospitality experience around your home and your priorities - welcoming guests, connecting them to the Lincolnville Corridor and helping protect the home, neighborhood and community beyond the front door.</p>
            <p className="services-kicker">The reservation begins the stay. The welcome opens the door to Lincolnville.</p>
          </div>
        </div>
        <div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p className="service-tagline">{service.tagline}</p><p>{service.text}</p><strong>{service.price}</strong></article>)}</div>
      </section>

      <section className="benefits-section">
        <div><p className="eyebrow">A stay with more meaning</p><h2>Good for the home.<br /><i>Good for the neighborhood.</i></h2></div>
        <div className="benefits-list">{benefits.map((benefit, index) => <div className="benefit" key={benefit}><span>0{index + 1}</span><p>{benefit}</p></div>)}</div>
      </section>

      <section className="about-section" id="about">
        <div className="about-image-wrap"><img src={headshotUrl} alt="Kimberly Joyce, Vacation Rental Coordinator and Community Host at Root and Simmer Hospitality Co." /><span className="image-note">About Kimberly Joyce</span></div>
        <div className="about-copy">
          <div className="section-label">03 / About Kimberly Joyce</div>
          <h2>A personal welcome.<br /><i>A lasting impact.</i></h2>
          <p className="lead">For more than 30 years, my work has required me to listen closely, anticipate needs, solve problems, advocate for others and build trust. I have learned that people remember how they were welcomed, whether they felt supported and whether someone cared enough to notice what they needed.</p>
          <p>As a former Airbnb host and world traveler, I have experienced both sides of the front door - the care a homeowner puts into a stay and the sense of belonging a guest remembers.</p>
          <p>When I arrived in St. Augustine, I explored the city the way many visitors do - with a sightseeing map and visitor guide. The map directed me toward downtown, but it never led me to Sweet Mama&apos;s Peach Cobbler at The Corner Market or into the deeper history of Lincolnville.</p>
          <p>One-way streets and Do Not Enter signs kept me circling without a clear route back. The visitor guide showed me where tourists go. The people of Lincolnville helped me understand where I was.</p>
          <p>I began talking with residents and business owners, asking questions and listening. Those conversations introduced me to Lincolnville&apos;s history, businesses, relationships, challenges and living community.</p>
          <p>Root &amp; Simmer Hospitality Co. grew from my belief that a personal welcome can do more than help someone find the door. It can invite guests to slow down, meet new friends, understand the community&apos;s history and challenges, support locally rooted businesses, fall in love with Lincolnville and want to return. It can help a homeowner stand apart, bring a new customer to a local business and carry the community&apos;s story - both past and present - forward so Lincolnville can thrive.</p>
          <p>I am here to listen, build trusted partnerships and use hospitality to support and strengthen what is already here.</p>
          <blockquote>Lincolnville does not need someone to give it a story.<br />Visitors need a better way to see it, support it and respect it.</blockquote>
          <div className="signature">
            <p className="signature-name">Kimberly Joyce</p>
            <p className="signature-title">Vacation Rental Coordinator &amp; Community Host</p>
          </div>
        </div>
      </section>

      <section className="values-section" id="values">
        <div className="section-label">04 / Five core values</div>
        <h2>What we<br /><i>stand for.</i></h2>
        <div className="values-list">{values.map((value, index) => <article className="value" key={value.title}><span className="value-number">0{index + 1}</span><h3>{value.title}</h3><p>{value.text}</p></article>)}</div>
      </section>

      <section className="contact-section" id="contact"><div className="contact-tree" aria-hidden="true">⌁</div><p className="eyebrow">Begin a homeowner conversation</p><h2>Let&apos;s create an experience<br /><i>guests remember.</i></h2><a className="button button-light" href="mailto:rootnsimmer@gmail.com">rootnsimmer@gmail.com <span>↗</span></a><p className="contact-phone">760-481-4961</p></section>

      <footer className="site-footer"><div className="footer-brand"><img src={logoUrl} alt="Root & Simmer Hospitality Co. logo" /><span>Hospitality Rooted in Community.</span></div><div className="footer-meta"><span>St. Augustine, Florida</span><span>© {new Date().getFullYear()} Root &amp; Simmer Hospitality Co.</span></div><a href={logoUrl} target="_blank" rel="noreferrer">View full logo ↗</a></footer>
    </main>
  )
}
