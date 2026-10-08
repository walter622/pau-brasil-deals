import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight, Hammer, Headset, MapPin, MessageCircle, Package, TreePine, Truck } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { VipButton } from '@/components/campaign-controls';
import carlosPhoto from '@/assets/carlos.jpg';
import patriciaPhoto from '@/assets/patricia.jpg';
import { catalogueCategories, differentials, faqs, testimonials, VIP_URL } from '@/lib/campaign';
import logo from '@/assets/logo.asset.json';
import family from '@/assets/family.asset.json';
import chairs from '@/assets/chairs.asset.json';
import benches from '@/assets/benches.asset.json';
import diningTable from '@/assets/mesa-showroom.jpeg.asset.json';
import sideboard from '@/assets/aparador-showroom.jpeg.asset.json';
import delivery from '@/assets/entrega-propria.webp.asset.json';
import campaignSeal from '@/assets/campaign-seal.png.asset.json';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Black Pau Brasil com 50% de desconto em toda a loja Pau Brasil' },
    { name: 'description', content: 'Dias 6, 7 e 8 de novembro — apenas 3 dias! Móveis rústicos premium em madeira maciça com 50% de desconto e a pronta-entrega. Peças únicas e exclusivas — estoque limitado de pátio e showroom.' },
    { property: 'og:title', content: 'Black Pau Brasil com 50% de desconto em toda a loja Pau Brasil' },
    { property: 'og:description', content: 'Dias 6, 7 e 8 de novembro — apenas 3 dias! Móveis rústicos premium em madeira maciça com 50% de desconto e a pronta-entrega.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

const products = [
  { title: 'Mesas Rústicas', image: diningTable.url },
  { title: 'Conjuntos Gourmet', image: benches.url },
  { title: 'Cadeiras Pavão', image: chairs.url },
  { title: 'Aparadores', image: sideboard.url },
];
const icons = [TreePine, Hammer, Headset, Truck, Package];

function Catalogue() {
  const [ref, api] = useEmblaCarousel({ align: 'start', loop: true });
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    if (!api) return;
    const update = () => setSelected(api.selectedScrollSnap());
    update(); api.on('select', update); api.on('reInit', update);
    return () => { api.off('select', update); api.off('reInit', update); };
  }, [api]);
  return <section className="lp-section bg-sand"><div className="page-wrap">
    <div className="section-head center reveal"><h2 className="section-heading">Oportunidades da Black Pau Brasil</h2></div>
    <ul className="category-tags reveal" aria-label="Categorias de móveis">{catalogueCategories.map(name => <li key={name}>{name}</li>)}</ul>
    <div className="carousel reveal">
      <div className="catalogue-viewport" ref={ref}><div className="catalogue-track">{products.map(p => <article className="catalogue-item" key={p.title}><div className="product-image"><img src={p.image} alt={p.title} loading="lazy" /><span className="discount-label">50% OFF</span></div><h3>{p.title}</h3></article>)}</div></div>
      <button className="carousel-arrow prev" aria-label="Categoria anterior" onClick={() => api?.scrollPrev()}><ArrowLeft /></button>
      <button className="carousel-arrow next" aria-label="Próxima categoria" onClick={() => api?.scrollNext()}><ArrowRight /></button>
    </div>
    <div className="carousel-dots">{products.map((p, i) => <button key={p.title} aria-label={`Ver ${p.title}`} className={i === selected ? 'active' : ''} onClick={() => api?.scrollTo(i)} />)}</div>
    <p className="urgency reveal">Tudo com 50% OFF em toda a loja. Peças únicas de pronta-entrega. <strong>Quem chegar primeiro, leva.</strong></p>
    <div className="cta-row"><VipButton /></div>
  </div></section>;
}

function Index() {
  return <main>
    <section className="hero">
      <div className="hero-media">
        <img className="hero-blur" src={diningTable.url} alt="" aria-hidden="true" />
        <img className="hero-photo" src={diningTable.url} alt="Mesa rústica de madeira maciça com cadeiras no showroom Pau Brasil" fetchPriority="high" />
        <img className="hero-seal" src={campaignSeal.url} alt="Selo da campanha Black Friday 50% OFF" width={500} height={500} fetchPriority="high" />
      </div>
      <div className="hero-inner">
        <img src={logo.url} alt="Pau Brasil" className="hero-logo" />
        <p className="hero-date">Dias 6, 7 e 8 de novembro — apenas 3 dias!</p>
        <h1 className="hero-title">Black Pau Brasil com <strong>50% de desconto</strong> em toda a loja Pau Brasil</h1>
        <p className="hero-copy">Móveis rústicos premium em madeira maciça com <strong>50% de desconto</strong> e a pronta-entrega.</p>
        <p className="hero-scarcity">Peças únicas e exclusivas — estoque limitado de pátio e showroom.</p>
        <VipButton className="hero-cta" />
      </div>
    </section>

    <section className="lp-section bg-cream"><div className="page-wrap split">
      <div className="split-text reveal"><h2 className="section-heading">A essência da madeira transformada em arte</h2><p className="section-copy">Há mais de 30 anos, a Pau Brasil Móveis Rústicos transforma casas e espaços de alto padrão com <strong>móveis artesanais em madeira maciça.</strong></p><p className="section-copy">Sofisticação natural, tradição e exclusividade se unem em cada peça feita à mão.</p><p className="section-copy">Durante a BLACK PAU BRASIL, você terá acesso a condições inéditas de <strong className="text-forest">50% OFF em toda a nossa linha de móveis de luxo.</strong></p><VipButton /></div>
      <img className="split-photo reveal" src={chairs.url} alt="Cadeiras Pavão de madeira maciça no showroom Pau Brasil" loading="lazy" />
    </div></section>

    <section className="lp-section bg-sand"><div className="page-wrap split reverse">
      <div className="split-text reveal"><h2 className="section-heading">Nossa história e autoridade</h2><p className="section-copy">Desde 1993, a Pau Brasil é referência em móveis de madeira maciça, dormentes e cruzetas selecionadas, oferecendo <strong>peças únicas para clientes exigentes</strong> em todo o Brasil.</p><p className="section-copy">Mais de 35.000 clientes atendidos ao longo de 3 décadas.</p><p className="section-copy">Produção artesanal, com madeira de origem sustentável e acabamentos feitos à mão.</p><p className="section-copy">Entrega própria, segura e especializada.</p>
        <dl className="stats"><div><dt>1993</dt><dd>Referência em madeira maciça</dd></div><div><dt>+35.000</dt><dd>Clientes atendidos</dd></div><div><dt>+1.000</dt><dd>Peças em pronta-entrega</dd></div></dl>
        <VipButton /></div>
      <img className="split-photo reveal" src={benches.url} alt="Conjunto de móveis rústicos Pau Brasil" loading="lazy" />
    </div></section>

    <section className="lp-section bg-cream"><div className="page-wrap split">
      <div className="split-text wide reveal"><h2 className="section-heading">Nossos Diferenciais</h2>
        <ul className="differentials">{differentials.map((text, i) => { const Icon = icons[i]; return <li key={text}><Icon strokeWidth={1.25} className="diff-icon" /><p>{text}</p></li>; })}</ul>
        <VipButton /></div>
      <img className="split-photo reveal" src={family.url} alt="Família reunida à mesa de madeira" loading="lazy" />
    </div></section>

    <section className="event-band"><div className="page-wrap event-inner reveal">
      <img className="event-seal" src={campaignSeal.url} alt="" loading="lazy" width={500} height={500} />
      <div className="event-text">
        <p className="event-kicker">BLACK PAU BRASIL — 50% OFF em Toda a Loja</p>
        <h2 className="event-title">6, 7 e 8 de Novembro</h2>
        <p className="event-address"><MapPin strokeWidth={1.5} className="size-5 shrink-0 text-offer" /><span>Rodovia Castelo Branco, Km 65<br />Sentido Interior — Mairinque - SP</span></p>
        <VipButton />
      </div>
    </div></section>

    <Catalogue />

    <section className="lp-section bg-cream"><div className="page-wrap split">
      <div className="split-text reveal"><h2 className="section-heading">Entrega própria e segura</h2><p className="section-copy">Montagem profissional, transporte cuidadoso e <strong>prazos garantidos para o seu fim de ano.</strong></p><p className="section-copy">Cada entrega é feita pela equipe Pau Brasil, garantindo a qualidade do início ao fim.</p><VipButton /></div>
      <img className="split-photo reveal" src={delivery.url} alt="Caminhão da Pau Brasil para entrega própria e segura" loading="lazy" />
    </div></section>

    <section className="lp-section bg-sand"><div className="page-wrap">
      <div className="section-head center reveal"><h2 className="section-heading">Depoimentos de clientes</h2></div>
      <div className="testimonials">{testimonials.map(t => <figure className="testimonial reveal" key={t.name}><span className="quote-mark" aria-hidden="true">“</span><blockquote>{t.quote}</blockquote><figcaption><img className="avatar" src={t.name.startsWith('Carlos') ? carlosPhoto : patriciaPhoto} alt={t.name} width={56} height={56} loading="lazy" /><span><strong>{t.name}</strong><small>{t.location}</small></span></figcaption></figure>)}</div>
      <div className="cta-row"><VipButton /></div>
    </div></section>

    <section className="lp-section bg-cream"><div className="page-wrap faq-wrap">
      <div className="section-head center reveal"><h2 className="section-heading">Perguntas frequentes</h2></div>
      <Accordion type="single" collapsible className="faq">{faqs.map(([q, a], i) => <AccordionItem value={`faq-${i}`} key={q}><AccordionTrigger className="faq-trigger">{q}</AccordionTrigger><AccordionContent className="section-copy">{a}</AccordionContent></AccordionItem>)}</Accordion>
      <div className="cta-row"><VipButton /></div>
    </div></section>

    <footer className="footer"><div className="page-wrap footer-inner">
      <img src={logo.url} alt="Pau Brasil" className="footer-logo" loading="lazy" />
      <p className="footer-slogan">O luxo da madeira com alma.</p>
      <p className="footer-address"><MapPin strokeWidth={1.5} className="size-4 shrink-0 text-offer" /><span><strong>Pau Brasil Móveis Rústicos</strong><br />Rodovia Castelo Branco, Km 65 — Sentido Interior<br />Mairinque - SP - CEP 18120-000<br />(2 minutos do Catarina Fashion Outlet)</span></p>
      <a className="footer-ig" href="https://www.instagram.com/lojapaubrasil/" target="_blank" rel="noopener noreferrer">@lojapaubrasil</a>
    </div></footer>

    <a className="wa-float" href={VIP_URL} target="_blank" rel="noopener noreferrer" aria-label="Entrar no grupo exclusivo do WhatsApp"><MessageCircle className="size-7" /></a>
  </main>;
}
