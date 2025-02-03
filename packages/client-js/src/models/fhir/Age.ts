/**
 * A duration of time during which an organism (or a process) has
 * existed.
 */
export declare class Age {
  /**
   * The value of the measured amount. The value includes an implicit
   * precision in the presentation of the value.
   */
  value?: number;

  /**
   * How the value should be understood and represented - whether the
   * actual value is greater or less than the stated value due to
   * measurement issues; e.g. if the comparator is &quot;&lt;&quot; , then the real
   * value is &lt; stated value.
   */
  comparator?: '<' | '<=' | '>=' | '>';

  /**
   * A human-readable form of the unit.
   */
  unit?: string;

  /**
   * The identification of the system that provides the coded form of the
   * unit.
   */
  system?: string;

  /**
   * A computer processable form of the unit in some unit representation
   * system.
   */
  code?: string;
}
