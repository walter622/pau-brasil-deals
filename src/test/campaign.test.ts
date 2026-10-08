import { describe, expect, it } from 'vitest';
import { EVENT_START, EVENT_END, getEventStatus, VIP_URL, faqs, catalogueCategories } from '@/lib/campaign';

describe('Black Pau Brasil campaign', () => {
  it('uses the supplied VIP destination', () => {
    expect(VIP_URL).toBe('https://meugrupo.vip/c/a8a40026-0750-4228-8136-c1c3850849fb');
  });
  it('changes state at the correct São Paulo event boundaries', () => {
    expect(getEventStatus(EVENT_START - 1)).toBe('upcoming');
    expect(getEventStatus(EVENT_START)).toBe('live');
    expect(getEventStatus(EVENT_END - 1)).toBe('live');
    expect(getEventStatus(EVENT_END)).toBe('ended');
  });
  it('includes all six supplied FAQ topics', () => expect(faqs).toHaveLength(6));
  it('includes the supplied categories for the animated strip', () => {
    expect(catalogueCategories).toEqual(['Dormentes', 'Cadeiras Pavão', 'Aparadores', 'Mesas Rústicas', 'Conjuntos Gourmet', 'Espreguiçadeiras']);
  });
});