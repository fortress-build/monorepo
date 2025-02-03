import type { Period } from "./Period";

/**
 * Details for all kinds of technology mediated contact points for a
 * person or organization, including telephone, email, etc.
 */
export interface ContactPoint {
  /**
   * Identifies the purpose for the contact point.
   */
  use?: 'home' | 'work' | 'temp' | 'old' | 'mobile';

  /**
   * Specifies a preferred order in which to use a set of contacts.
   * ContactPoints with lower rank values are more preferred than those
   * with higher rank values.
   */
  rank?: number;

  /**
   * Time period when the contact point was/is in use.
   */
  period?: Period;
}