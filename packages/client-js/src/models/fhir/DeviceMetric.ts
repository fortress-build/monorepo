import type { CodeableConcept } from './CodeableConcept';
import type { Device } from './Device';
import type { Identifier } from './Identifier';
import type { Reference } from './Reference';
import type { DomainResource } from './Resource';
import type { Timing } from './Timing';

/**
 * Describes a measurement, calculation or setting capability of a
 * medical device.
 */
export declare class DeviceMetric extends DomainResource{
  resourceType: 'DeviceMetric';
  
  /**
   * Unique instance identifiers assigned to a device by the device or
   * gateway software, manufacturers, other organizations or owners. For
   * example: handle ID.
   */
  identifier?: Identifier[];

  /**
   * Describes the type of the metric. For example: Heart Rate, PEEP
   * Setting, etc.
   */
  type: CodeableConcept;

  /**
   * Describes the unit that an observed value determined for this metric
   * will have. For example: Percent, Seconds, etc.
   */
  unit?: CodeableConcept;

  /**
   * Describes the link to the  Device that this DeviceMetric belongs to
   * and that contains administrative device information such as
   * manufacturer, serial number, etc.
   */
  source?: Reference<Device>;

  /**
   * Describes the link to the  Device that this DeviceMetric belongs to
   * and that provide information about the location of this DeviceMetric
   * in the containment structure of the parent Device. An example would be
   * a Device that represents a Channel. This reference can be used by a
   * client application to distinguish DeviceMetrics that have the same
   * type, but should be interpreted based on their containment location.
   */
  parent?: Reference<Device>;

  /**
   * Indicates current operational state of the device. For example: On,
   * Off, Standby, etc.
   */
  operationalStatus?: 'on' | 'off' | 'standby' | 'entered-in-error';

  /**
   * Describes the color representation for the metric. This is often used
   * to aid clinicians to track and identify parameter types by color. In
   * practice, consider a Patient Monitor that has ECG/HR and Pleth for
   * example; the parameters are displayed in different characteristic
   * colors, such as HR-blue, BP-green, and PR and SpO2- magenta.
   */
  color?:
    | 'black'
    | 'red'
    | 'green'
    | 'yellow'
    | 'blue'
    | 'magenta'
    | 'cyan'
    | 'white';

  /**
   * Indicates the category of the observation generation process. A
   * DeviceMetric can be for example a setting, measurement, or
   * calculation.
   */
  category: 'measurement' | 'setting' | 'calculation' | 'unspecified';

  /**
   * Describes the measurement repetition time. This is not necessarily the
   * same as the update period. The measurement repetition time can range
   * from milliseconds up to hours. An example for a measurement repetition
   * time in the range of milliseconds is the sampling rate of an ECG. An
   * example for a measurement repetition time in the range of hours is a
   * NIBP that is triggered automatically every hour. The update period may
   * be different than the measurement repetition time, if the device does
   * not update the published observed value with the same frequency as it
   * was measured.
   */
  measurementPeriod?: Timing;

  /**
   * Describes the calibrations that have been performed or that are
   * required to be performed.
   */
  calibration?: DeviceMetricCalibration[];
}

/**
 * Describes the calibrations that have been performed or that are
 * required to be performed.
 */
export interface DeviceMetricCalibration {
  /**
   * Describes the type of the calibration method.
   */
  type?: 'unspecified' | 'offset' | 'gain' | 'two-point';

  /**
   * Describes the state of the calibration.
   */
  state?:
    | 'not-calibrated'
    | 'calibration-required'
    | 'calibrated'
    | 'unspecified';

  /**
   * Describes the time last calibration has been performed.
   */
  time?: string;
}