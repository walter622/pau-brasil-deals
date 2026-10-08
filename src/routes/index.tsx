import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight, CalendarDays, Check, Leaf, MapPin, ShieldCheck, Tag, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Countdown, VipButton } from '@/components/campaign-controls';
import { faqs, VIP_URL } from '@/lib/campaign';
import hero from '@/assets/hero.asset.json';
import logo from '@/assets/logo.asset.json';
import family from '@/assets/family.asset.json';
import chairs from '@/assets/chairs.asset.json';
import benches from '@/assets/benches.asset.json';
import buffet from '@/assets/buffet.asset.json';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Black Pau Brasil — Toda a loja com 50% OFF | 6, 7 e 8 de novembro' },
    { name: 'description', content: 'Madeira maciça, tradição e 50% OFF em todo o pátio e showroom. Dias 6, 7 e 8 de novembro em Mairinque/SP. Entre no Grupo VIP da Black Pau Brasil.' },
    { property: 'og:title', content: 'Black Pau Brasil — Toda a loja com 50% OFF' },
    { property: 'og:description', content: 'A maior oportunidade do ano em madeira maciça. 6, 7 e 8 de novembro em Mairinque/SP. Garanta acesso antecipado no Grupo VIP.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

const products = [
  { title: 'Mesas de jantar imponentes', text: 'O centro das atenções nas festas de fim de ano. Madeira maciça pela metade do preço.', image: hero.url, tag: 'PARA REUNIR A FAMÍLIA' },
  { title: 'Conjuntos de varanda & gourmet', text: 'Seu espaço de receber, completo. Peças para compartilhar bons momentos no Natal e Réveillon.', image: benches.url, tag: 'PARA RECEBER BEM' },
  { title: 'Namoradeiras & poltronas', text: 'Charme e aconchego para jardins, decks e varandas. Seu novo lugar favorito de descanso.', image: chairs.url, tag: 'PARA APROVEITAR A VIDA' },
  { title: 'Cristaleiras, buffets & aparadores', text: 'Elegância e organização em madeira nobre. Toda a linha com 50% de desconto.', image: buffet.url, tag: 'PARA COMPOR SEU LAR' },
  { title: 'Pranchas orgânicas únicas', text: 'Design natural e exclusivo. A personalidade da madeira em peças únicas com 50% OFF.', image: null, tag: 'DESIGN DA NATUREZA' },
  { title: 'Sofás em couro legítimo', text: 'O conforto do couro encontra a estrutura duradoura da madeira maciça. Pela metade do valor.', image: null, tag: 'CONFORTO QUE PERMANECE' },
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
    <div className="catalogue-heading"><div><p className="eyebrow mb-3 text-forest">Sua casa pronta para celebrar</p><h2 className="section-heading">Seu próximo móvel.<br />Pela metade do preço.</h2></div><div className="flex gap-2"><Button variant="outline" size="icon" aria-label="Ver categorias anteriores" title="Categorias anteriores" disabled={!previous} onClick={() => api?.scrollPrev()}><ArrowLeft /></Button><Button variant="outline" size="icon" aria-label="Ver próximas categorias" title="Próximas categorias" disabled={!next} onClick={() => api?.scrollNext()}><ArrowRight /></Button></div></div>
    <p className="section-copy mb-7">Showroom em Black Friday a pronta-entrega. Toda a loja com 50% OFF, em Mairinque.</p>
    <div className="catalogue-viewport" ref={ref}><div className="catalogue-track">{products.map((product, i) => <article className="catalogue-item" key={product.title}><div className={`product-image ${product.image ? '' : 'bg-forest text-hero-foreground'}`}>{product.image ? <img src={product.image} alt={product.title} loading="lazy" /> : <div className="flex h-full flex-col justify-end p-7"><Leaf className="mb-5 size-8 text-offer" /><span className="font-display text-4xl leading-none">{product.title}</span><span className="mt-4 text-xs text-hero-muted">Catálogo completo no Grupo VIP</span></div>}<span className="discount-label">50% OFF</span></div><p className="mt-5 text-[9px] font-bold tracking-[1px] text-muted-foreground">0{i + 1} / {product.tag}</p><h3 className="mt-2 text-2xl">{product.title}</h3><p className="section-copy mt-2">{product.text}</p></article>)}</div></div>
    <div className="mt-8 flex items-center justify-between border-t border-border pt-5"><span className="text-xs text-muted-foreground">{String(selected + 1).padStart(2, '0')} — 06 categorias</span><span className="flex items-center gap-2 text-xs text-muted-foreground"><Check className="size-4 text-forest" /> Peças de pátio e showroom</span></div>
    <div className="mt-8 text-center"><VipButton>Receber ofertas da Black no Grupo VIP</VipButton></div>
  </div></section>;
}

function Index() {
  return <main>
    <section className="hero-section">
      <img className="hero-photo" src={hero.url} alt="Mesa de madeira maciça no showroom da Pau Brasil" fetchPriority="high" />
      <div className="page-wrap"><header className="campaign-header border-b border-hero-line"><img src={logo.url} alt="Pau Brasil" className="brand-mark" /><span className="header-location flex items-center gap-2 text-xs text-hero-muted"><MapPin className="size-4" /> MAIRINQUE · SP</span><Button variant="campaign" size="sm" asChild><a href={VIP_URL} target="_blank" rel="noopener noreferrer">Acesso VIP <ArrowRight /></a></Button></header>
      <div className="hero-content reveal"><p className="eyebrow text-offer"><span className="h-1.5 w-1.5 rounded-full bg-offer" /> 6, 7 e 8 de novembro · Apenas 3 dias</p><h1 className="hero-title">BLACK<br />PAU BRASIL</h1><div className="offer-line"><span className="offer-number">50%</span><div className="offer-details"><span className="text-offer">OFF</span><br />EM TODA A LOJA.</div></div>
      <p className="hero-description">A maior oportunidade do ano em madeira maciça. Renove seu lar para as festas com peças de pátio e showroom <strong className="font-semibold text-hero-foreground">a pronta-entrega, pela metade do preço.</strong></p>
      <div className="hero-meta"><span><CalendarDays className="size-4 text-offer" /> Sexta, sábado e domingo</span><span><Truck className="size-4 text-offer" /> Pronta-entrega para o fim do ano</span></div>
      <VipButton /><p className="mt-4 flex items-center gap-2 text-[11px] text-hero-muted"><ShieldCheck className="size-3.5 text-primary" /> Catálogo antecipado. Atendimento preferencial. Peças únicas.</p>
      </div></div>
    </section>
    <section className="event-band"><div className="page-wrap event-inner"><div className="max-w-md"><p className="eyebrow text-offer">Oportunidade com data marcada</p><h2 className="mt-2 text-[32px]">6, 7 e 8 de novembro.</h2><p className="mt-2 text-xs leading-relaxed text-hero-muted">Estoque limitado, sem reposição com 50% OFF.<br />Peças reservadas por ordem de chegada.</p></div><Countdown /></div></section>
    <div className="page-wrap authority"><div className="authority-item"><strong>+30<span className="ml-1 text-lg">anos</span></strong><p>De tradição e paixão<br />pela madeira nobre.</p></div><div className="authority-item"><strong>+35.000</strong><p>Lares e projetos<br />transformados.</p></div><div className="authority-item"><strong>100%</strong><p>Frota, entrega e montagem<br />próprias. Sem intermediários.</p></div></div>
    <Catalogue />
    <section className="section-space bg-secondary"><div className="page-wrap story-grid"><img className="story-photo" src={family.url} alt="Família reunida à mesa de madeira para uma refeição" loading="lazy" /><div><p className="eyebrow mb-4 text-forest">Muito além de um móvel</p><h2 className="section-heading">Mais de 30 anos.<br />Feitos para durar<br />gerações.</h2><p className="section-copy mt-5">Por trás de cada peça, uma história de paixão pela madeira. Há mais de três décadas, a Pau Brasil transforma casas com a nobreza da madeira maciça e o cuidado do acabamento artesanal.</p><p className="section-copy mt-4">A nossa Black não é uma promoção comum: é o evento oficial do ano. A mesma qualidade que conquistou mais de 35.000 clientes, agora com <strong className="text-foreground">50% OFF em toda a loja.</strong></p><div className="mt-5 flex items-center gap-3 border-t border-border pt-5"><Leaf className="size-5 text-forest" /><span className="text-xs font-medium">Madeira nobre. Acabamento artesanal. Qualidade definitiva.</span></div><VipButton className="mt-7">Conhecer nosso showroom em Mairinque</VipButton></div></div></section>
    <section className="section-space bg-hero text-hero-foreground"><div className="page-wrap"><p className="eyebrow mb-4 text-offer">A Black que a sua casa merece</p><h2 className="section-heading">Desconto de verdade.<br />Qualidade para a vida toda.</h2><div className="benefits">{[
      { icon: Tag, title: '50% OFF em toda a loja', text: 'Metade do preço real em todo o pátio e showroom. Uma oportunidade do tamanho dos seus planos.' },
      { icon: Truck, title: 'Pronta-entrega para celebrar', text: 'Escolheu, garantiu. Estoque disponível e equipe própria para entregar e montar antes das festas de fim de ano.' },
      { icon: ShieldCheck, title: 'A força da madeira maciça', text: 'Madeiras nobres e acabamento artesanal. Peças de alta resistência, com personalidade única e feitas para durar.' },
    ].map(({icon: Icon,title,text}) => <div key={title}><div className="benefit-icon"><Icon className="size-5" /></div><h3 className="mt-5 text-[27px]">{title}</h3><p className="mt-3 text-sm leading-7 text-hero-muted">{text}</p></div>)}</div></div></section>
    <section className="section-space"><div className="page-wrap faq-grid"><div><p className="eyebrow mb-4 text-forest">Tudo o que você precisa saber</p><h2 className="section-heading">Sua próxima<br />boa escolha,<br />sem dúvidas.</h2><p className="section-copy mt-5">Perguntas frequentes sobre a Black Pau Brasil.</p></div><Accordion type="single" collapsible>{faqs.map(([question,answer],i) => <AccordionItem value={`faq-${i}`} key={question}><AccordionTrigger className="gap-5 py-6 text-sm font-semibold">{question}</AccordionTrigger><AccordionContent className="section-copy">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>
    <section className="closing"><div className="page-wrap"><p className="eyebrow justify-center text-offer">6, 7 e 8 de novembro · Mairinque/SP</p><h2 className="mt-5 text-5xl leading-none md:text-6xl">A sua casa nova começa aqui.<br /><span className="text-offer">E custa a metade.</span></h2><p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-hero-muted">Não perca a maior Black Friday de madeira maciça de SP.<br />Entre no Grupo VIP e tenha acesso antecipado às ofertas exclusivas.</p><VipButton className="mt-7">Entrar no Grupo VIP da Black</VipButton><p className="mt-4 text-[11px] text-hero-muted">Toda a loja com 50% OFF. Peças únicas. Estoque limitado.</p></div></section>
    <footer className="bg-hero text-hero-foreground"><div className="page-wrap footer-inner"><img src={logo.url} alt="Pau Brasil" className="brand-mark" loading="lazy" /><div className="flex items-start gap-3"><MapPin className="mt-1 size-4 shrink-0 text-offer" /><p className="text-xs leading-6 text-hero-muted"><strong className="font-medium text-hero-foreground">Showroom Pau Brasil · Mairinque/SP</strong><br />Rod. Pres. Castello Branco, Km 65 · Sentido interior<br />A 2 minutos do Catarina Fashion Outlet</p></div><span className="text-[10px] text-hero-muted">© 2026 Pau Brasil.<br />Todos os direitos reservados.</span></div></footer>
    <div className="mobile-vip"><VipButton>Entrar no Grupo VIP da Black</VipButton></div>
  </main>;
}
