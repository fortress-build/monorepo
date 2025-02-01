import type { Resource } from './models/fhir/Resource';


export function search2Array<T extends Resource>(
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  object: any,
  resource: T
): T[] {
  // Check if the object is a Bundle searchset
  if (object.resourceType !== 'Bundle' || object.type !== 'searchset') {
    throw new Error('Input must be a FHIR Bundle searchset');
  }

  // Extract and map the resources from the entries
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    return object.entry?.map((entry: any) => entry.resource as T) || [];
}
