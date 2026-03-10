/**
 * Trek Available Dates
 * =====================
 * Update this file to manage departure dates for all treks.
 * Each trek ID maps to an array of departure date objects.
 * Dates are in 'YYYY-MM-DD' format for easy sorting.
 *
 * To update dates:
 *   1. Find the trek by its ID below
 *   2. Add or remove date entries from the array
 *   3. Save — changes reflect immediately on the website
 *
 * Status options:
 *   - 'open'    → Booking Open (green)
 *   - 'filling' → Filling Fast (orange)
 *   - 'closed'  → Sold Out (red, not clickable)
 */

export interface TrekDate {
  /** Departure date in YYYY-MM-DD format */
  date: string;
  /** Booking status */
  status: 'open' | 'filling' | 'closed';
}

/** Grouped dates by month for display */
export interface MonthGroup {
  /** e.g. "May 2026" */
  label: string;
  /** Sort key e.g. "2026-05" */
  key: string;
  dates: TrekDate[];
}

/** Map of trek ID → available departure dates */
export const trekDates: Record<string, TrekDate[]> = {

  // ─── Panch Kedar (Every Saturday: May–Oct 2026) ────────
  'panch-kedar': [
    { date: '2026-05-16', status: 'open' },
    { date: '2026-05-23', status: 'open' },
    { date: '2026-05-30', status: 'open' },
    { date: '2026-06-06', status: 'open' },
    { date: '2026-06-13', status: 'open' },
    { date: '2026-06-20', status: 'open' },
    { date: '2026-06-27', status: 'open' },
    { date: '2026-09-05', status: 'open' },
    { date: '2026-09-12', status: 'open' },
    { date: '2026-09-19', status: 'open' },
    { date: '2026-09-26', status: 'open' },
    { date: '2026-10-03', status: 'open' },
    { date: '2026-10-10', status: 'open' },
    { date: '2026-10-17', status: 'open' },
    { date: '2026-10-24', status: 'open' },
    { date: '2026-10-31', status: 'open' },
  ],

  // ─── Kedarnath Trek (Every Saturday: May–Oct 2026) ─────
  'kedarnath-trek': [
    { date: '2026-05-02', status: 'open' },
    { date: '2026-05-09', status: 'open' },
    { date: '2026-05-16', status: 'open' },
    { date: '2026-05-23', status: 'open' },
    { date: '2026-05-30', status: 'open' },
    { date: '2026-06-06', status: 'open' },
    { date: '2026-06-13', status: 'open' },
    { date: '2026-06-20', status: 'open' },
    { date: '2026-06-27', status: 'open' },
    { date: '2026-07-04', status: 'open' },
    { date: '2026-07-11', status: 'open' },
    { date: '2026-07-18', status: 'open' },
    { date: '2026-07-25', status: 'open' },
    { date: '2026-08-01', status: 'open' },
    { date: '2026-08-08', status: 'open' },
    { date: '2026-08-15', status: 'open' },
    { date: '2026-08-22', status: 'open' },
    { date: '2026-08-29', status: 'open' },
    { date: '2026-09-05', status: 'open' },
    { date: '2026-09-12', status: 'open' },
    { date: '2026-09-19', status: 'open' },
    { date: '2026-09-26', status: 'open' },
    { date: '2026-10-03', status: 'open' },
    { date: '2026-10-10', status: 'open' },
    { date: '2026-10-17', status: 'open' },
    { date: '2026-10-24', status: 'open' },
    { date: '2026-10-31', status: 'open' },
  ],

  // ─── Madhyamaheshwar (Every Saturday: May–Oct 2026) ────
  'madhyamaheshwar': [
    { date: '2026-05-02', status: 'open' },
    { date: '2026-05-09', status: 'open' },
    { date: '2026-05-16', status: 'open' },
    { date: '2026-05-23', status: 'open' },
    { date: '2026-05-30', status: 'open' },
    { date: '2026-06-06', status: 'open' },
    { date: '2026-06-13', status: 'open' },
    { date: '2026-06-20', status: 'open' },
    { date: '2026-06-27', status: 'open' },
    { date: '2026-07-04', status: 'open' },
    { date: '2026-07-11', status: 'open' },
    { date: '2026-07-18', status: 'open' },
    { date: '2026-07-25', status: 'open' },
    { date: '2026-08-01', status: 'open' },
    { date: '2026-08-08', status: 'open' },
    { date: '2026-08-15', status: 'open' },
    { date: '2026-08-22', status: 'open' },
    { date: '2026-08-29', status: 'open' },
    { date: '2026-09-05', status: 'open' },
    { date: '2026-09-12', status: 'open' },
    { date: '2026-09-19', status: 'open' },
    { date: '2026-09-26', status: 'open' },
    { date: '2026-10-03', status: 'open' },
    { date: '2026-10-10', status: 'open' },
    { date: '2026-10-17', status: 'open' },
    { date: '2026-10-24', status: 'open' },
    { date: '2026-10-31', status: 'open' },
  ],

  // ─── Rudranath (Every Saturday: May–Oct 2026) ──────────
  'rudranath': [
    { date: '2026-05-02', status: 'open' },
    { date: '2026-05-09', status: 'open' },
    { date: '2026-05-16', status: 'open' },
    { date: '2026-05-23', status: 'open' },
    { date: '2026-05-30', status: 'open' },
    { date: '2026-06-06', status: 'open' },
    { date: '2026-06-13', status: 'open' },
    { date: '2026-06-20', status: 'open' },
    { date: '2026-06-27', status: 'open' },
    { date: '2026-07-04', status: 'open' },
    { date: '2026-07-11', status: 'open' },
    { date: '2026-07-18', status: 'open' },
    { date: '2026-07-25', status: 'open' },
    { date: '2026-08-01', status: 'open' },
    { date: '2026-08-08', status: 'open' },
    { date: '2026-08-15', status: 'open' },
    { date: '2026-08-22', status: 'open' },
    { date: '2026-08-29', status: 'open' },
    { date: '2026-09-05', status: 'open' },
    { date: '2026-09-12', status: 'open' },
    { date: '2026-09-19', status: 'open' },
    { date: '2026-09-26', status: 'open' },
    { date: '2026-10-03', status: 'open' },
    { date: '2026-10-10', status: 'open' },
    { date: '2026-10-17', status: 'open' },
    { date: '2026-10-24', status: 'open' },
    { date: '2026-10-31', status: 'open' },
  ],

  // ─── Gaumukh Tapovan (Every Saturday: May–Oct 2026) ────
  'gaumukh-tapovan': [
    { date: '2026-05-02', status: 'open' },
    { date: '2026-05-09', status: 'open' },
    { date: '2026-05-16', status: 'open' },
    { date: '2026-05-23', status: 'open' },
    { date: '2026-05-30', status: 'open' },
    { date: '2026-06-06', status: 'open' },
    { date: '2026-06-13', status: 'open' },
    { date: '2026-06-20', status: 'open' },
    { date: '2026-06-27', status: 'open' },
    { date: '2026-07-04', status: 'open' },
    { date: '2026-07-11', status: 'open' },
    { date: '2026-07-18', status: 'open' },
    { date: '2026-07-25', status: 'open' },
    { date: '2026-08-01', status: 'open' },
    { date: '2026-08-08', status: 'open' },
    { date: '2026-08-15', status: 'open' },
    { date: '2026-08-22', status: 'open' },
    { date: '2026-08-29', status: 'open' },
    { date: '2026-09-05', status: 'open' },
    { date: '2026-09-12', status: 'open' },
    { date: '2026-09-19', status: 'open' },
    { date: '2026-09-26', status: 'open' },
    { date: '2026-10-03', status: 'open' },
    { date: '2026-10-10', status: 'open' },
    { date: '2026-10-17', status: 'open' },
    { date: '2026-10-24', status: 'open' },
    { date: '2026-10-31', status: 'open' },
  ],

  // ─── Dayara Bugyal (Every Saturday: Apr–May, Sep–Mar) ──
  'dayara-bugyal': [
    { date: '2026-04-04', status: 'open' },
    { date: '2026-04-11', status: 'open' },
    { date: '2026-04-18', status: 'open' },
    { date: '2026-04-25', status: 'open' },
    { date: '2026-05-02', status: 'open' },
    { date: '2026-05-09', status: 'open' },
    { date: '2026-05-16', status: 'open' },
    { date: '2026-05-23', status: 'open' },
    { date: '2026-05-30', status: 'open' },
    { date: '2026-09-05', status: 'open' },
    { date: '2026-09-12', status: 'open' },
    { date: '2026-09-19', status: 'open' },
    { date: '2026-09-26', status: 'open' },
    { date: '2026-10-03', status: 'open' },
    { date: '2026-10-10', status: 'open' },
    { date: '2026-10-17', status: 'open' },
    { date: '2026-10-24', status: 'open' },
    { date: '2026-10-31', status: 'open' },
    { date: '2026-11-07', status: 'open' },
    { date: '2026-11-14', status: 'open' },
    { date: '2026-11-21', status: 'open' },
    { date: '2026-11-28', status: 'open' },
    { date: '2026-12-05', status: 'open' },
    { date: '2026-12-12', status: 'open' },
    { date: '2026-12-19', status: 'open' },
    { date: '2026-12-26', status: 'open' },
    { date: '2027-01-02', status: 'open' },
    { date: '2027-01-09', status: 'open' },
    { date: '2027-01-16', status: 'open' },
    { date: '2027-01-23', status: 'open' },
    { date: '2027-01-30', status: 'open' },
    { date: '2027-02-06', status: 'open' },
    { date: '2027-02-13', status: 'open' },
    { date: '2027-02-20', status: 'open' },
    { date: '2027-02-27', status: 'open' },
    { date: '2027-03-06', status: 'open' },
    { date: '2027-03-13', status: 'open' },
    { date: '2027-03-20', status: 'open' },
    { date: '2027-03-27', status: 'open' },
  ],

  // ─── Valley of Flowers (Daily: Jul 1 – Sep 30, 2026) ──
  'valley-of-flowers': [
    { date: '2026-07-01', status: 'open' }, { date: '2026-07-02', status: 'open' }, { date: '2026-07-03', status: 'open' }, { date: '2026-07-04', status: 'open' }, { date: '2026-07-05', status: 'open' }, { date: '2026-07-06', status: 'open' }, { date: '2026-07-07', status: 'open' },
    { date: '2026-07-08', status: 'open' }, { date: '2026-07-09', status: 'open' }, { date: '2026-07-10', status: 'open' }, { date: '2026-07-11', status: 'open' }, { date: '2026-07-12', status: 'open' }, { date: '2026-07-13', status: 'open' }, { date: '2026-07-14', status: 'open' },
    { date: '2026-07-15', status: 'open' }, { date: '2026-07-16', status: 'open' }, { date: '2026-07-17', status: 'open' }, { date: '2026-07-18', status: 'open' }, { date: '2026-07-19', status: 'open' }, { date: '2026-07-20', status: 'open' }, { date: '2026-07-21', status: 'open' },
    { date: '2026-07-22', status: 'open' }, { date: '2026-07-23', status: 'open' }, { date: '2026-07-24', status: 'open' }, { date: '2026-07-25', status: 'open' }, { date: '2026-07-26', status: 'open' }, { date: '2026-07-27', status: 'open' }, { date: '2026-07-28', status: 'open' },
    { date: '2026-07-29', status: 'open' }, { date: '2026-07-30', status: 'open' }, { date: '2026-07-31', status: 'open' },
    { date: '2026-08-01', status: 'open' }, { date: '2026-08-02', status: 'open' }, { date: '2026-08-03', status: 'open' }, { date: '2026-08-04', status: 'open' }, { date: '2026-08-05', status: 'open' }, { date: '2026-08-06', status: 'open' }, { date: '2026-08-07', status: 'open' },
    { date: '2026-08-08', status: 'open' }, { date: '2026-08-09', status: 'open' }, { date: '2026-08-10', status: 'open' }, { date: '2026-08-11', status: 'open' }, { date: '2026-08-12', status: 'open' }, { date: '2026-08-13', status: 'open' }, { date: '2026-08-14', status: 'open' },
    { date: '2026-08-15', status: 'open' }, { date: '2026-08-16', status: 'open' }, { date: '2026-08-17', status: 'open' }, { date: '2026-08-18', status: 'open' }, { date: '2026-08-19', status: 'open' }, { date: '2026-08-20', status: 'open' }, { date: '2026-08-21', status: 'open' },
    { date: '2026-08-22', status: 'open' }, { date: '2026-08-23', status: 'open' }, { date: '2026-08-24', status: 'open' }, { date: '2026-08-25', status: 'open' }, { date: '2026-08-26', status: 'open' }, { date: '2026-08-27', status: 'open' }, { date: '2026-08-28', status: 'open' },
    { date: '2026-08-29', status: 'open' }, { date: '2026-08-30', status: 'open' }, { date: '2026-08-31', status: 'open' },
    { date: '2026-09-01', status: 'open' }, { date: '2026-09-02', status: 'open' }, { date: '2026-09-03', status: 'open' }, { date: '2026-09-04', status: 'open' }, { date: '2026-09-05', status: 'open' }, { date: '2026-09-06', status: 'open' }, { date: '2026-09-07', status: 'open' },
    { date: '2026-09-08', status: 'open' }, { date: '2026-09-09', status: 'open' }, { date: '2026-09-10', status: 'open' }, { date: '2026-09-11', status: 'open' }, { date: '2026-09-12', status: 'open' }, { date: '2026-09-13', status: 'open' }, { date: '2026-09-14', status: 'open' },
    { date: '2026-09-15', status: 'open' }, { date: '2026-09-16', status: 'open' }, { date: '2026-09-17', status: 'open' }, { date: '2026-09-18', status: 'open' }, { date: '2026-09-19', status: 'open' }, { date: '2026-09-20', status: 'open' }, { date: '2026-09-21', status: 'open' },
    { date: '2026-09-22', status: 'open' }, { date: '2026-09-23', status: 'open' }, { date: '2026-09-24', status: 'open' }, { date: '2026-09-25', status: 'open' }, { date: '2026-09-26', status: 'open' }, { date: '2026-09-27', status: 'open' }, { date: '2026-09-28', status: 'open' },
    { date: '2026-09-29', status: 'open' }, { date: '2026-09-30', status: 'open' },
  ],

  // ─── Bedni Bugyal (Every Saturday: May–Oct 2026) ───────
  'bedni-bugyal': [
    { date: '2026-05-02', status: 'open' },
    { date: '2026-05-09', status: 'open' },
    { date: '2026-05-16', status: 'open' },
    { date: '2026-05-23', status: 'open' },
    { date: '2026-05-30', status: 'open' },
    { date: '2026-06-06', status: 'open' },
    { date: '2026-06-13', status: 'open' },
    { date: '2026-06-20', status: 'open' },
    { date: '2026-06-27', status: 'open' },
    { date: '2026-07-04', status: 'open' },
    { date: '2026-07-11', status: 'open' },
    { date: '2026-07-18', status: 'open' },
    { date: '2026-07-25', status: 'open' },
    { date: '2026-08-01', status: 'open' },
    { date: '2026-08-08', status: 'open' },
    { date: '2026-08-15', status: 'open' },
    { date: '2026-08-22', status: 'open' },
    { date: '2026-08-29', status: 'open' },
    { date: '2026-09-05', status: 'open' },
    { date: '2026-09-12', status: 'open' },
    { date: '2026-09-19', status: 'open' },
    { date: '2026-09-26', status: 'open' },
    { date: '2026-10-03', status: 'open' },
    { date: '2026-10-10', status: 'open' },
    { date: '2026-10-17', status: 'open' },
    { date: '2026-10-24', status: 'open' },
    { date: '2026-10-31', status: 'open' },
  ],

  // ─── Chopta Tungnath (Every Friday: Oct 2026–May 2027) ─
  'chopta-tungnath': [
    { date: '2026-10-02', status: 'open' },
    { date: '2026-10-09', status: 'open' },
    { date: '2026-10-16', status: 'open' },
    { date: '2026-10-23', status: 'open' },
    { date: '2026-10-30', status: 'open' },
    { date: '2026-11-06', status: 'open' },
    { date: '2026-11-13', status: 'open' },
    { date: '2026-11-20', status: 'open' },
    { date: '2026-11-27', status: 'open' },
    { date: '2026-12-04', status: 'open' },
    { date: '2026-12-11', status: 'open' },
    { date: '2026-12-18', status: 'open' },
    { date: '2026-12-25', status: 'open' },
    { date: '2027-01-01', status: 'open' },
    { date: '2027-01-08', status: 'open' },
    { date: '2027-01-15', status: 'open' },
    { date: '2027-01-22', status: 'open' },
    { date: '2027-01-29', status: 'open' },
    { date: '2027-02-05', status: 'open' },
    { date: '2027-02-12', status: 'open' },
    { date: '2027-02-19', status: 'open' },
    { date: '2027-02-26', status: 'open' },
    { date: '2027-03-05', status: 'open' },
    { date: '2027-03-12', status: 'open' },
    { date: '2027-03-19', status: 'open' },
    { date: '2027-03-26', status: 'open' },
    { date: '2027-04-02', status: 'open' },
    { date: '2027-04-09', status: 'open' },
    { date: '2027-04-16', status: 'open' },
    { date: '2027-04-23', status: 'open' },
    { date: '2027-04-30', status: 'open' },
    { date: '2027-05-07', status: 'open' },
    { date: '2027-05-14', status: 'open' },
    { date: '2027-05-21', status: 'open' },
    { date: '2027-05-28', status: 'open' },
  ],

  // ─── Kedarkantha (Every Saturday: Dec 2026–Mar 2027) ───
  'kedarkantha': [
    { date: '2026-12-05', status: 'open' },
    { date: '2026-12-12', status: 'open' },
    { date: '2026-12-19', status: 'open' },
    { date: '2026-12-26', status: 'open' },
    { date: '2027-01-02', status: 'open' },
    { date: '2027-01-09', status: 'open' },
    { date: '2027-01-16', status: 'open' },
    { date: '2027-01-23', status: 'open' },
    { date: '2027-01-30', status: 'open' },
    { date: '2027-02-06', status: 'open' },
    { date: '2027-02-13', status: 'open' },
    { date: '2027-02-20', status: 'open' },
    { date: '2027-02-27', status: 'open' },
    { date: '2027-03-06', status: 'open' },
    { date: '2027-03-13', status: 'open' },
    { date: '2027-03-20', status: 'open' },
    { date: '2027-03-27', status: 'open' },
  ],

  // ─── Roopkund (Every Saturday: May–Oct 2026) ───────────
  'roopkund': [
    { date: '2026-05-02', status: 'open' },
    { date: '2026-05-09', status: 'open' },
    { date: '2026-05-16', status: 'open' },
    { date: '2026-05-23', status: 'open' },
    { date: '2026-05-30', status: 'open' },
    { date: '2026-06-06', status: 'open' },
    { date: '2026-06-13', status: 'open' },
    { date: '2026-06-20', status: 'open' },
    { date: '2026-06-27', status: 'open' },
    { date: '2026-07-04', status: 'open' },
    { date: '2026-07-11', status: 'open' },
    { date: '2026-07-18', status: 'open' },
    { date: '2026-07-25', status: 'open' },
    { date: '2026-08-01', status: 'open' },
    { date: '2026-08-08', status: 'open' },
    { date: '2026-08-15', status: 'open' },
    { date: '2026-08-22', status: 'open' },
    { date: '2026-08-29', status: 'open' },
    { date: '2026-09-05', status: 'open' },
    { date: '2026-09-12', status: 'open' },
    { date: '2026-09-19', status: 'open' },
    { date: '2026-09-26', status: 'open' },
    { date: '2026-10-03', status: 'open' },
    { date: '2026-10-10', status: 'open' },
    { date: '2026-10-17', status: 'open' },
    { date: '2026-10-24', status: 'open' },
    { date: '2026-10-31', status: 'open' },
  ],

  // ─── Kuari Pass (Every Saturday: Oct 2026–May 2027) ────
  'kuari-pass': [
    { date: '2026-10-03', status: 'open' },
    { date: '2026-10-10', status: 'open' },
    { date: '2026-10-17', status: 'open' },
    { date: '2026-10-24', status: 'open' },
    { date: '2026-10-31', status: 'open' },
    { date: '2026-11-07', status: 'open' },
    { date: '2026-11-14', status: 'open' },
    { date: '2026-11-21', status: 'open' },
    { date: '2026-11-28', status: 'open' },
    { date: '2026-12-05', status: 'open' },
    { date: '2026-12-12', status: 'open' },
    { date: '2026-12-19', status: 'open' },
    { date: '2026-12-26', status: 'open' },
    { date: '2027-01-02', status: 'open' },
    { date: '2027-01-09', status: 'open' },
    { date: '2027-01-16', status: 'open' },
    { date: '2027-01-23', status: 'open' },
    { date: '2027-01-30', status: 'open' },
    { date: '2027-02-06', status: 'open' },
    { date: '2027-02-13', status: 'open' },
    { date: '2027-02-20', status: 'open' },
    { date: '2027-02-27', status: 'open' },
    { date: '2027-03-06', status: 'open' },
    { date: '2027-03-13', status: 'open' },
    { date: '2027-03-20', status: 'open' },
    { date: '2027-03-27', status: 'open' },
    { date: '2027-04-03', status: 'open' },
    { date: '2027-04-10', status: 'open' },
    { date: '2027-04-17', status: 'open' },
    { date: '2027-04-24', status: 'open' },
    { date: '2027-05-01', status: 'open' },
    { date: '2027-05-08', status: 'open' },
    { date: '2027-05-15', status: 'open' },
    { date: '2027-05-22', status: 'open' },
    { date: '2027-05-29', status: 'open' },
  ],

  // ─── Do Dhaam Tungnath (Every Saturday: May–Oct 2026) ──
  'do-dhaam-tungnath': [
    { date: '2026-05-02', status: 'open' },
    { date: '2026-05-09', status: 'open' },
    { date: '2026-05-16', status: 'open' },
    { date: '2026-05-23', status: 'open' },
    { date: '2026-05-30', status: 'open' },
    { date: '2026-06-06', status: 'open' },
    { date: '2026-06-13', status: 'open' },
    { date: '2026-06-20', status: 'open' },
    { date: '2026-06-27', status: 'open' },
    { date: '2026-07-04', status: 'open' },
    { date: '2026-07-11', status: 'open' },
    { date: '2026-07-18', status: 'open' },
    { date: '2026-07-25', status: 'open' },
    { date: '2026-08-01', status: 'open' },
    { date: '2026-08-08', status: 'open' },
    { date: '2026-08-15', status: 'open' },
    { date: '2026-08-22', status: 'open' },
    { date: '2026-08-29', status: 'open' },
    { date: '2026-09-05', status: 'open' },
    { date: '2026-09-12', status: 'open' },
    { date: '2026-09-19', status: 'open' },
    { date: '2026-09-26', status: 'open' },
    { date: '2026-10-03', status: 'open' },
    { date: '2026-10-10', status: 'open' },
    { date: '2026-10-17', status: 'open' },
    { date: '2026-10-24', status: 'open' },
    { date: '2026-10-31', status: 'open' },
  ],

  // ─── Adi Kailash (Every Saturday: May–Jun, Sep–Oct) ────
  'adi-kailash': [
    { date: '2026-05-02', status: 'open' },
    { date: '2026-05-09', status: 'open' },
    { date: '2026-05-16', status: 'open' },
    { date: '2026-05-23', status: 'open' },
    { date: '2026-05-30', status: 'open' },
    { date: '2026-06-06', status: 'open' },
    { date: '2026-06-13', status: 'open' },
    { date: '2026-06-20', status: 'open' },
    { date: '2026-06-27', status: 'open' },
    { date: '2026-09-05', status: 'open' },
    { date: '2026-09-12', status: 'open' },
    { date: '2026-09-19', status: 'open' },
    { date: '2026-09-26', status: 'open' },
    { date: '2026-10-03', status: 'open' },
    { date: '2026-10-10', status: 'open' },
    { date: '2026-10-17', status: 'open' },
    { date: '2026-10-24', status: 'open' },
    { date: '2026-10-31', status: 'open' },
  ],

  // ─── Kailash Mansarovar (Every Saturday: Jun–Sep 2026) ─
  'kailash-mansarovar': [
    { date: '2026-06-06', status: 'open' },
    { date: '2026-06-13', status: 'open' },
    { date: '2026-06-20', status: 'open' },
    { date: '2026-06-27', status: 'open' },
    { date: '2026-07-04', status: 'open' },
    { date: '2026-07-11', status: 'open' },
    { date: '2026-07-18', status: 'open' },
    { date: '2026-07-25', status: 'open' },
    { date: '2026-08-01', status: 'open' },
    { date: '2026-08-08', status: 'open' },
    { date: '2026-08-15', status: 'open' },
    { date: '2026-08-22', status: 'open' },
    { date: '2026-08-29', status: 'open' },
    { date: '2026-09-05', status: 'open' },
    { date: '2026-09-12', status: 'open' },
    { date: '2026-09-19', status: 'open' },
    { date: '2026-09-26', status: 'open' },
  ],

  // ─── Darma Valley (Every Saturday: Jul–Sep 2026) ───────
  'darma-valley': [
    { date: '2026-07-04', status: 'open' },
    { date: '2026-07-11', status: 'open' },
    { date: '2026-07-18', status: 'open' },
    { date: '2026-07-25', status: 'open' },
    { date: '2026-08-01', status: 'open' },
    { date: '2026-08-08', status: 'open' },
    { date: '2026-08-15', status: 'open' },
    { date: '2026-08-22', status: 'open' },
    { date: '2026-08-29', status: 'open' },
    { date: '2026-09-05', status: 'open' },
    { date: '2026-09-12', status: 'open' },
    { date: '2026-09-19', status: 'open' },
    { date: '2026-09-26', status: 'open' },
  ],

  // ─── Harshil Valley (Every Saturday: Jun–Sep 2026) ─────
  'harshil-valley': [
    { date: '2026-06-06', status: 'open' },
    { date: '2026-06-13', status: 'open' },
    { date: '2026-06-20', status: 'open' },
    { date: '2026-06-27', status: 'open' },
    { date: '2026-07-04', status: 'open' },
    { date: '2026-07-11', status: 'open' },
    { date: '2026-07-18', status: 'open' },
    { date: '2026-07-25', status: 'open' },
    { date: '2026-08-01', status: 'open' },
    { date: '2026-08-08', status: 'open' },
    { date: '2026-08-15', status: 'open' },
    { date: '2026-08-22', status: 'open' },
    { date: '2026-08-29', status: 'open' },
    { date: '2026-09-05', status: 'open' },
    { date: '2026-09-12', status: 'open' },
    { date: '2026-09-19', status: 'open' },
    { date: '2026-09-26', status: 'open' },
  ],

  // ─── Niti Valley (Every Saturday: Jul–Sep 2026) ────────
  'niti-valley': [
    { date: '2026-07-04', status: 'open' },
    { date: '2026-07-11', status: 'open' },
    { date: '2026-07-18', status: 'open' },
    { date: '2026-07-25', status: 'open' },
    { date: '2026-08-01', status: 'open' },
    { date: '2026-08-08', status: 'open' },
    { date: '2026-08-15', status: 'open' },
    { date: '2026-08-22', status: 'open' },
    { date: '2026-08-29', status: 'open' },
    { date: '2026-09-05', status: 'open' },
    { date: '2026-09-12', status: 'open' },
    { date: '2026-09-19', status: 'open' },
    { date: '2026-09-26', status: 'open' },
  ],

  // ─── Yulla Kanda (Every Friday: Nov 2026–Mar 2027) ─────
  'yulla-kanda': [
    { date: '2026-11-06', status: 'open' },
    { date: '2026-11-13', status: 'open' },
    { date: '2026-11-20', status: 'open' },
    { date: '2026-11-27', status: 'open' },
    { date: '2026-12-04', status: 'open' },
    { date: '2026-12-11', status: 'open' },
    { date: '2026-12-18', status: 'open' },
    { date: '2026-12-25', status: 'open' },
    { date: '2027-01-01', status: 'open' },
    { date: '2027-01-08', status: 'open' },
    { date: '2027-01-15', status: 'open' },
    { date: '2027-01-22', status: 'open' },
    { date: '2027-01-29', status: 'open' },
    { date: '2027-02-05', status: 'open' },
    { date: '2027-02-12', status: 'open' },
    { date: '2027-02-19', status: 'open' },
    { date: '2027-02-26', status: 'open' },
    { date: '2027-03-05', status: 'open' },
    { date: '2027-03-12', status: 'open' },
    { date: '2027-03-19', status: 'open' },
    { date: '2027-03-26', status: 'open' },
  ],

  // ─── Spiti Valley (Every Saturday: Jun–Sep 2026) ───────
  'spiti-valley': [
    { date: '2026-06-06', status: 'open' },
    { date: '2026-06-13', status: 'open' },
    { date: '2026-06-20', status: 'open' },
    { date: '2026-06-27', status: 'open' },
    { date: '2026-07-04', status: 'open' },
    { date: '2026-07-11', status: 'open' },
    { date: '2026-07-18', status: 'open' },
    { date: '2026-07-25', status: 'open' },
    { date: '2026-08-01', status: 'open' },
    { date: '2026-08-08', status: 'open' },
    { date: '2026-08-15', status: 'open' },
    { date: '2026-08-22', status: 'open' },
    { date: '2026-08-29', status: 'open' },
    { date: '2026-09-05', status: 'open' },
    { date: '2026-09-12', status: 'open' },
    { date: '2026-09-19', status: 'open' },
    { date: '2026-09-26', status: 'open' },
  ],

  // ─── Ladakh Trip (Every Saturday: Jul–Sep 2026) ────────
  'ladakh-trip': [
    { date: '2026-07-04', status: 'open' },
    { date: '2026-07-11', status: 'open' },
    { date: '2026-07-18', status: 'open' },
    { date: '2026-07-25', status: 'open' },
    { date: '2026-08-01', status: 'open' },
    { date: '2026-08-08', status: 'open' },
    { date: '2026-08-15', status: 'open' },
    { date: '2026-08-22', status: 'open' },
    { date: '2026-08-29', status: 'open' },
    { date: '2026-09-05', status: 'open' },
    { date: '2026-09-12', status: 'open' },
    { date: '2026-09-19', status: 'open' },
    { date: '2026-09-26', status: 'open' },
  ],

  // ─── Pangarchulla (Every Saturday: Nov 2026–Mar 2027) ──
  'pangarchulla': [
    { date: '2026-11-07', status: 'open' },
    { date: '2026-11-14', status: 'open' },
    { date: '2026-11-21', status: 'open' },
    { date: '2026-11-28', status: 'open' },
    { date: '2026-12-05', status: 'open' },
    { date: '2026-12-12', status: 'open' },
    { date: '2026-12-19', status: 'open' },
    { date: '2026-12-26', status: 'open' },
    { date: '2027-01-02', status: 'open' },
    { date: '2027-01-09', status: 'open' },
    { date: '2027-01-16', status: 'open' },
    { date: '2027-01-23', status: 'open' },
    { date: '2027-01-30', status: 'open' },
    { date: '2027-02-06', status: 'open' },
    { date: '2027-02-13', status: 'open' },
    { date: '2027-02-20', status: 'open' },
    { date: '2027-02-27', status: 'open' },
    { date: '2027-03-06', status: 'open' },
    { date: '2027-03-13', status: 'open' },
    { date: '2027-03-20', status: 'open' },
    { date: '2027-03-27', status: 'open' },
  ],

  // ─── Chaar Dhaam (Every Sat & Sun: May–Oct 2026) ───────
  'chaar-dhaam': [
    { date: '2026-05-02', status: 'open' },
    { date: '2026-05-03', status: 'open' },
    { date: '2026-05-09', status: 'open' },
    { date: '2026-05-10', status: 'open' },
    { date: '2026-05-16', status: 'open' },
    { date: '2026-05-17', status: 'open' },
    { date: '2026-05-23', status: 'open' },
    { date: '2026-05-24', status: 'open' },
    { date: '2026-05-30', status: 'open' },
    { date: '2026-05-31', status: 'open' },
    { date: '2026-06-06', status: 'open' },
    { date: '2026-06-07', status: 'open' },
    { date: '2026-06-13', status: 'open' },
    { date: '2026-06-14', status: 'open' },
    { date: '2026-06-20', status: 'open' },
    { date: '2026-06-21', status: 'open' },
    { date: '2026-06-27', status: 'open' },
    { date: '2026-06-28', status: 'open' },
    { date: '2026-07-04', status: 'open' },
    { date: '2026-07-05', status: 'open' },
    { date: '2026-07-11', status: 'open' },
    { date: '2026-07-12', status: 'open' },
    { date: '2026-07-18', status: 'open' },
    { date: '2026-07-19', status: 'open' },
    { date: '2026-07-25', status: 'open' },
    { date: '2026-07-26', status: 'open' },
    { date: '2026-08-01', status: 'open' },
    { date: '2026-08-02', status: 'open' },
    { date: '2026-08-08', status: 'open' },
    { date: '2026-08-09', status: 'open' },
    { date: '2026-08-15', status: 'open' },
    { date: '2026-08-16', status: 'open' },
    { date: '2026-08-22', status: 'open' },
    { date: '2026-08-23', status: 'open' },
    { date: '2026-08-29', status: 'open' },
    { date: '2026-08-30', status: 'open' },
    { date: '2026-09-05', status: 'open' },
    { date: '2026-09-06', status: 'open' },
    { date: '2026-09-12', status: 'open' },
    { date: '2026-09-13', status: 'open' },
    { date: '2026-09-19', status: 'open' },
    { date: '2026-09-20', status: 'open' },
    { date: '2026-09-26', status: 'open' },
    { date: '2026-09-27', status: 'open' },
    { date: '2026-10-03', status: 'open' },
    { date: '2026-10-04', status: 'open' },
    { date: '2026-10-10', status: 'open' },
    { date: '2026-10-11', status: 'open' },
    { date: '2026-10-17', status: 'open' },
    { date: '2026-10-18', status: 'open' },
    { date: '2026-10-24', status: 'open' },
    { date: '2026-10-25', status: 'open' },
    { date: '2026-10-31', status: 'open' },
  ],
};

/**
 * Helper: Format a date string (YYYY-MM-DD) to a full readable format
 * e.g. "2026-05-16" → "May 16, 2026"
 */
export function formatTrekDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

/**
 * Helper: Get the month-year label from a date string
 * e.g. "2026-05-16" → "May 2026"
 */
export function getMonthLabel(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

/**
 * Helper: Get the month key for grouping (e.g. "2026-05")
 */
function getMonthKey(dateStr: string): string {
  return dateStr.substring(0, 7);
}

/**
 * Helper: Get upcoming dates for a trek (filters out past dates)
 */
export function getUpcomingDates(trekId: string): TrekDate[] {
  const dates = trekDates[trekId] || [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return dates.filter(d => new Date(d.date + 'T00:00:00') >= today);
}

/**
 * Helper: Group dates by month for display
 */
export function getGroupedDates(trekId: string): MonthGroup[] {
  const upcoming = getUpcomingDates(trekId);
  const groups: Record<string, MonthGroup> = {};

  for (const d of upcoming) {
    const key = getMonthKey(d.date);
    if (!groups[key]) {
      groups[key] = {
        label: getMonthLabel(d.date),
        key,
        dates: [],
      };
    }
    groups[key].dates.push(d);
  }

  return Object.values(groups).sort((a, b) => a.key.localeCompare(b.key));
}
