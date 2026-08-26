import { useState } from 'react'
import { ArrowRight, CakeSlice, CalendarDays, ChevronDown, Mail, MapPin, Menu, Sparkles, X } from 'lucide-react'
import logo from './assets/baker-ish-logo.jpeg'

const flavors = [
  { name: 'Chocolate', note: 'Rich chocolate cake + smooth coating', accent: 'Chocolate' },
  { name: 'Vanilla', note: 'Classic vanilla with a soft, sweet finish', accent: 'Classic' },
  { name: 'Funfetti', note: 'Colorful, celebratory, and always a favorite', accent: 'Party pick' },
]

const occasions = [
  ['Birthdays', 'Custom colors, sprinkles, themes, and party-ready sets.'],
  ['Baby + Bridal Showers', 'Soft palettes and polished designs for your sweetest celebrations.'],
  ['Holidays', 'Seasonal drops that make gifting and dessert tables extra fun.'],
  ['Just Because', 'Because a Tuesday can absolutely deserve cake pops.'],
]

const faqs = [
  ['How far ahead should I order?', 'For custom orders, 1–2 weeks of notice is ideal. Larger or highly detailed orders may need additional lead time.'],
  ['Where is pickup?', 'Baker-ish is a home-based cottage food business in the Omaha area. Exact pickup details are shared after your order is confirmed.'],
  ['Do you offer custom colors and themes?', 'Yes. Share your colors, inspiration, event theme, and quantity in the order request form and we’ll work from there.'],
  ['Do you deliver?', 'Pickup is the default. For select larger local orders, delivery may be available by arrangement.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  const scrollToOrder = () => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Baker-ish home">
          <span className="brand-mark">B</span>
          <span>Baker-ish</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#flavors">Flavors</a>
          <a href="#occasions">Occasions</a>
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
        </nav>
        <button className="nav-cta desktop-only" onClick={scrollToOrder}>Order cake pops <ArrowRight size={17} /></button>
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <div className="mobile-menu">
            {['flavors','occasions','about','faq'].map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item[0].toUpperCase()+item.slice(1)}</a>
            ))}
            <button onClick={() => { setMenuOpen(false); scrollToOrder(); }}>Order cake pops</button>
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={16}/> Handcrafted in Omaha</div>
            <h1>Not a bakery.<br/><em>Just really good cake pops.</em></h1>
            <p className="hero-lede">Small-batch cake pops made for birthdays, showers, holidays, celebrations—or whenever you need something a little sweeter.</p>
            <div className="hero-actions">
              <button className="primary-btn" onClick={scrollToOrder}>Start an order <ArrowRight size={18}/></button>
              <a className="text-link" href="#flavors">See flavors</a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={16}/> Omaha, Nebraska</span>
              <span><CalendarDays size={16}/> Custom orders welcome</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Baker-ish logo artwork">
            <div className="art-blob blob-one" />
            <div className="art-blob blob-two" />
            <div className="logo-frame">
              <img src={logo} alt="Baker-ish — Not a bakery, just really good cake pops." />
            </div>
            <div className="mini-card card-top">Made locally<br/><strong>with a little flair.</strong></div>
            <div className="mini-card card-bottom">Perfect for<br/><strong>your next party.</strong></div>
          </div>
        </section>

        <section className="marquee" aria-label="Baker-ish specialties">
          <div>CAKE POPS ✦ CUSTOM COLORS ✦ OMAHA PICKUP ✦ SMALL BATCH ✦ REALLY GOOD CAKE POPS ✦</div>
        </section>

        <section className="section-pad intro-grid" id="flavors">
          <div className="section-heading">
            <span className="kicker">The classics</span>
            <h2>Start with a flavor.<br/>Make it yours.</h2>
            <p>Pick a classic base, then customize colors, sprinkles, and details to fit your event.</p>
          </div>
          <div className="flavor-grid">
            {flavors.map((flavor, i) => (
              <article className="flavor-card" key={flavor.name}>
                <span className="card-number">0{i+1}</span>
                <div className="cake-pop-illustration"><span/></div>
                <div>
                  <span className="pill">{flavor.accent}</span>
                  <h3>{flavor.name}</h3>
                  <p>{flavor.note}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="occasions section-pad" id="occasions">
          <div className="section-heading centered">
            <span className="kicker">Made for moments</span>
            <h2>There’s always a reason<br/>for cake pops.</h2>
          </div>
          <div className="occasion-grid">
            {occasions.map(([title, copy], i) => (
              <article className="occasion-card" key={title}>
                <div className="occasion-icon"><CakeSlice size={22}/></div>
                <span>0{i+1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about section-pad" id="about">
          <div className="about-panel visual-panel">
            <img src={logo} alt="Baker-ish logo" />
          </div>
          <div className="about-panel copy-panel">
            <span className="kicker">A little baker-ish</span>
            <h2>Homemade, playful,<br/>and made with care.</h2>
            <p>Baker-ish is an Omaha-area home cake pop business built around one simple idea: dessert should look fun, taste great, and feel personal.</p>
            <p>Every order is made in small batches with attention to the colors, details, and occasion that make it yours.</p>
            <button className="secondary-btn" onClick={scrollToOrder}>Tell us what you’re planning <ArrowRight size={18}/></button>
          </div>
        </section>

        <section className="order section-pad" id="order">
          <div className="order-copy">
            <span className="kicker light">Custom orders</span>
            <h2>Let’s make something<br/><em>really good.</em></h2>
            <p>Tell us what you’re celebrating, how many cake pops you need, and the look you have in mind.</p>
            <div className="contact-stack">
              <a href="mailto:inquiry@baker-ish.com"><Mail size={18}/> inquiry@baker-ish.com</a>
              <span><MapPin size={18}/> Omaha-area pickup</span>
              <a href="https://instagram.com/baker.ish.omaha" target="_blank" rel="noreferrer" aria-label="Instagram"> @baker.ish.omaha </a>
            </div>
          </div>
          <form className="order-form" action="https://formspree.io/f/xaeywqwd" method="post">
            <label>Name<input name="name" type="text" placeholder="Your name" required /></label>
            <label>Email<input name="email" type="email" placeholder="you@example.com" required /></label>
            <div className="form-row">
              <label>Event date<input name="event-date" type="date" /></label>
              <label>Quantity<select name="quantity" defaultValue="">
                <option value="" disabled>Select</option>
                <option>12</option><option>24</option><option>36</option><option>48+</option>
              </select></label>
            </div>
            <label>What are you thinking?<textarea name="details" rows="5" placeholder="Theme, colors, flavors, inspiration, occasion..." /></label>
            <button className="form-submit" type="submit" disabled={formStatus === 'sending'}>
              {formStatus === 'sending'
                ? 'Sending...'
                : 'Send order request'
              }
              {formStatus !== 'sending' && <ArrowRight size={18}/>}</button>

              {formStatus === 'success' && (
                <p className="form-success">
                Thanks! Your order request has been sent. We'll be in touch soon.
                </p>
              )}

              {formStatus === 'error' && (
                <p className="form-error">
                Something went wrong. Please try again or email us directly.
                </p>
              )}
          </form>
        </section>

        <section className="faq section-pad" id="faq">
          <div className="section-heading">
            <span className="kicker">Good to know</span>
            <h2>Questions, answered.</h2>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], i) => (
              <button className={`faq-item ${openFaq===i ? 'open' : ''}`} key={question} onClick={() => setOpenFaq(openFaq===i ? -1 : i)}>
                <span className="faq-q"><span>{question}</span><ChevronDown size={20}/></span>
                {openFaq===i && <span className="faq-a">{answer}</span>}
              </button>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <div className="brand"><span className="brand-mark">B</span><span>Baker-ish</span></div>
          <p>Not a bakery, just really good cake pops.</p>
        </div>
        <div className="footer-links">
          <a href="mailto:inquiry@baker-ish.com">Email</a>
          <a href="#order">Order</a>
          <a href="#faq">FAQ</a>
        </div>
        <p className="legal">© {new Date().getFullYear()} Baker-ish. Home-based cottage food operation in Nebraska.</p>
      </footer>
    </div>
  )
}

export default App
