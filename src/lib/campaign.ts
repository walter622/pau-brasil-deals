export const VIP_URL = 'https://meugrupo.vip/c/a8a40026-0750-4228-8136-c1c3850849fb';
export const EVENT_START = Date.parse('2026-11-06T00:00:00-03:00');
export const EVENT_END = Date.parse('2026-11-09T00:00:00-03:00');

export function getEventStatus(now: number) {
  if (now >= EVENT_END) return 'ended';
  if (now >= EVENT_START) return 'live';
  return 'upcoming';
}

export const faqs = [
  ['Em quais dias acontecerá a Black Pau Brasil?', 'Exclusivamente nos dias 6, 7 e 8 de novembro de 2026: sexta, sábado e domingo, no nosso showroom em Mairinque/SP.'],
  ['O desconto de 50% OFF vale para toda a loja?', 'Sim! Toda a loja com 50% OFF: a campanha contempla 100% do nosso pátio e showroom de móveis a pronta-entrega. As peças são limitadas e não haverá reposição de estoque com esse desconto.'],
  ['Por que entrar no Grupo VIP do WhatsApp?', 'No Grupo VIP você recebe o catálogo antecipado, consulta fotos reais das peças e tem prioridade de atendimento para reservar os seus móveis. As reservas são feitas por ordem de chegada.'],
  ['Onde fica o showroom da promoção?', 'Em Mairinque/SP, na Rodovia Presidente Castello Branco, Km 65, sentido interior — a apenas 2 minutos do Catarina Fashion Outlet.'],
  ['A entrega e a montagem são feitas antes das festas?', 'Sim! O estoque da Black é a pronta-entrega. Nossa frota e equipe própria realizam o agendamento para você receber os móveis antes do Natal e Réveillon. Consulte a equipe sobre a data de entrega para o seu endereço.'],
] as const;