import { getFormattedDate } from '@/constants/functions';

describe('getFormattedDate', () => {
  beforeAll(() => {
    process.env.TZ = 'UTC'; // fuerza zona horaria fija
  });

  it('formatea correctamente una fecha UTC', () => {
    const date = new Date('2025-10-07T00:00:00Z');
    const result = getFormattedDate(date);
    expect(result).toBe('2025-10-07');
  });

  it('formatea correctamente una fecha local sin cambiar el día', () => {
    const date = new Date(2025, 9, 7); // 7 octubre 2025 (mes 9)
    const result = getFormattedDate(date);
    expect(result).toBe('2025-10-07');
  });

  it('no cambia el día con una fecha con zona horaria -5', () => {
    const date = new Date('2025-10-07T05:00:00-05:00');
    const result = getFormattedDate(date);
    expect(result).toBe('2025-10-07');
  });
});
