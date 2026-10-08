import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight, Check, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { VipButton } from '@/components/campaign-controls';
import { catalogueCategories, differentials, faqs, testimonials } from '@/lib/campaign';
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

function Catalogue() {
  const [ref, api] = useEmblaCarousel({ align: 'start', loop: false });
  const [selected, setSelected] = useState(0);
  const [previous, setPrevious] = useState(false);
  const [next, setNext] = useState(true);
  useEffect(() => {
    if (!api) return;
    const update = () => { setSelected(api.selectedScrollSnap()); setPrevious(api.canScrollPrev()); setNext(api.canScrollNext()); };
    update(); api.on('select', update); api.on('reInit', update);
    return () => { api.off('select', update); api.off('reInit', update); };
  }, [api]);
  return <section className="section-space"><div className="page-wrap">
    <div className="catalogue-heading"><div><h2 className="section-heading">Oportunidades da<br />Black Pau Brasil</h2></div><div className="flex gap-2"><Button variant="outline" size="icon" aria-label="Ver categorias anteriores" title="Categorias anteriores" disabled={!previous} onClick={() => api?.scrollPrev()}><ArrowLeft /></Button><Button variant="outline" size="icon" aria-label="Ver próximas categorias" title="Próximas categorias" disabled={!next} onClick={() => api?.scrollNext()}><ArrowRight /></Button></div></div>
    <div className="category-band" role="region" aria-label="Categorias de móveis"><div className="category-marquee">{[0, 1].map(copy => <div className="category-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>{catalogueCategories.map(name => <span className="category-name" key={name}>{name}</span>)}</div>)}</div></div>
    <div className="catalogue-viewport" ref={ref}><div className="catalogue-track">{products.map(product => <article className="catalogue-item" key={product.title}><div className="product-image"><img src={product.image} alt={product.title} loading="lazy" /><span className="discount-label">50% OFF</span></div><h3 className="mt-5 text-2xl">{product.title}</h3></article>)}</div></div>
    <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5"><span className="text-xs text-muted-foreground">{String(selected + 1).padStart(2, '0')} — 04</span><p className="section-copy">Tudo com 50% OFF em toda a loja. Peças únicas de pronta-entrega. Quem chegar primeiro, leva.</p></div>
    <div className="mt-8 text-center"><VipButton /></div>
  </div></section>;
}

function Index() {
  return <main>
    <section className="hero-section">
      <div className="hero-banner">
        <img className="hero-photo" src={diningTable.url} alt="Mesa rústica de madeira maciça com cadeiras no showroom Pau Brasil" fetchPriority="high" />
        <img className="campaign-seal" src={campaignSeal.url} alt="Selo da campanha Black Friday 50% OFF" fetchPriority="high" width={500} height={500} />
      </div>
      <div className="page-wrap hero-intro">
        <header className="campaign-header"><img src={logo.url} alt="Pau Brasil" className="brand-mark" /></header>
        <div className="hero-content reveal">
          <h1 className="hero-title">Black Pau Brasil <span className="hero-discount">com <strong>50%</strong> de desconto</span><span className="hero-subtitle">em toda a loja Pau Brasil</span></h1>
          <p className="hero-description mt-5">Dias 6, 7 e 8 de novembro — apenas 3 dias!</p>
          <p className="hero-description">Móveis rústicos premium em madeira maciça com 50% de desconto e a pronta-entrega.</p>
          <p className="hero-description mt-3">Peças únicas e exclusivas — estoque limitado de pátio e showroom.</p>
          <VipButton className="mt-7" />
        </div>
      </div>
    </section>
    <section className="section-space"><div className="page-wrap story-grid"><div><h2 className="section-heading">A essência da madeira<br />transformada em arte</h2><p className="section-copy mt-5">Há mais de 30 anos, a Pau Brasil Móveis Rústicos transforma casas e espaços de alto padrão com móveis artesanais em madeira maciça.</p><p className="section-copy mt-4">Sofisticação natural, tradição e exclusividade se unem em cada peça feita à mão.</p><p className="section-copy mt-4">Durante a BLACK PAU BRASIL, você terá acesso a condições inéditas de <strong className="text-forest">50% OFF em toda a nossa linha de móveis de luxo.</strong></p><VipButton className="mt-7" /></div><img className="story-photo" src={chairs.url} alt="Cadeiras Pavão de madeira maciça no showroom Pau Brasil" loading="lazy" /></div></section>
    <section className="section-space history-section"><div className="page-wrap"><h2 className="section-heading text-center">Nossa história<br />e autoridade</h2><div className="history-grid mt-9"><div className="history-points"><p className="section-copy">Desde 1993, a Pau Brasil é referência em móveis de madeira maciça, dormentes e cruzetas selecionadas, oferecendo peças únicas para clientes exigentes em todo o Brasil.</p><p className="section-copy">Mais de 35.000 clientes atendidos ao longo de 3 décadas.</p><p className="section-copy">Produção artesanal, com madeira de origem sustentável e acabamentos feitos à mão.</p><p className="section-copy">Entrega própria, segura e especializada.</p></div><div className="history-visual"><img className="story-photo" src={benches.url} alt="Conjunto de móveis rústicos Pau Brasil" loading="lazy" /><VipButton className="mt-7" /></div></div></div></section>
    <section className="section-space"><div className="page-wrap differences-grid"><img className="story-photo" src={family.url} alt="Família reunida à mesa de madeira" loading="lazy" /><div><h2 className="section-heading">Nossos Diferenciais</h2><div className="differentials">{differentials.map(text => <div className="differential" key={text}><Check className="size-5 shrink-0 text-forest" /><p>{text}</p></div>)}</div><VipButton className="mt-8" /></div></div></section>
    <section className="event-band"><div className="page-wrap event-inner"><div><p className="eyebrow text-offer">BLACK PAU BRASIL — 50% OFF em Toda a Loja</p><h2 className="event-title">6, 7 e 8 de Novembro</h2></div><div className="flex items-start gap-3"><MapPin className="mt-1 size-6 shrink-0 text-offer" /><p className="text-sm leading-7">Rodovia Castelo Branco, Km 65<br />Sentido Interior — Mairinque - SP</p></div></div><div className="page-wrap mt-7"><VipButton /></div></section>
    <Catalogue />
    <section className="section-space bg-secondary"><div className="page-wrap delivery-grid"><img className="delivery-photo" src={delivery.url} alt="Caminhão da Pau Brasil para entrega própria e segura" loading="lazy" /><div><h2 className="section-heading">Entrega própria<br />e segura</h2><p className="section-copy mt-5">Montagem profissional, transporte cuidadoso e prazos garantidos para o seu fim de ano.</p><p className="section-copy mt-4">Cada entrega é feita pela equipe Pau Brasil, garantindo a qualidade do início ao fim.</p><VipButton className="mt-7" /></div></div></section>
    <section className="section-space"><div className="page-wrap"><h2 className="section-heading">Depoimentos de clientes</h2><div className="testimonials">{testimonials.map(t => <figure className="testimonial" key={t.name}><span className="quote-mark" aria-hidden="true">“</span><blockquote>{t.quote}</blockquote><figcaption><strong>{t.name}</strong><span>{t.location}</span></figcaption></figure>)}</div><div className="mt-8 text-center"><VipButton /></div></div></section>
    <section className="section-space bg-secondary"><div className="page-wrap faq-grid"><div><h2 className="section-heading">Perguntas<br />frequentes</h2></div><div><Accordion type="single" collapsible>{faqs.map(([question,answer],i) => <AccordionItem value={`faq-${i}`} key={question}><AccordionTrigger className="gap-5 py-6 text-sm font-semibold">{question}</AccordionTrigger><AccordionContent className="section-copy">{answer}</AccordionContent></AccordionItem>)}</Accordion><VipButton className="mt-7" /></div></div></section>
    <section className="closing"><div className="page-wrap"><p className="eyebrow justify-center text-offer">Pau Brasil</p><h2 className="closing-title">O luxo da madeira com alma.</h2><VipButton className="mt-7" /></div></section>
    <footer className="bg-hero text-hero-foreground"><div className="page-wrap footer-inner"><img src={logo.url} alt="Pau Brasil" className="brand-mark" loading="lazy" /><div className="flex items-start gap-3"><MapPin className="mt-1 size-4 shrink-0 text-offer" /><p className="text-xs leading-6 text-hero-muted"><strong className="font-medium text-hero-foreground">Pau Brasil Móveis Rústicos</strong><br />Rodovia Castelo Branco, Km 65 — Sentido Interior<br />Mairinque - SP - CEP 18120-000<br />(2 minutos do Catarina Fashion Outlet)</p></div></div></footer>
    <div className="mobile-vip"><VipButton /></div>
  </main>;
}
