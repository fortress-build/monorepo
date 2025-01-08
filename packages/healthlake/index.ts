import "server-only";

import {
  type DatastoreProperties,
  HealthLakeClient,
  ListFHIRDatastoresCommand,
} from "@aws-sdk/client-healthlake";
import { keys } from "./keys";

export type DatastoreInfo = DatastoreProperties;

const healthlake = new HealthLakeClient({
  region: keys().AWS_REGION,
  credentials: async () => ({
    accessKeyId: keys().AWS_ACCESS_KEY_ID,
    secretAccessKey: keys().AWS_SECRET_ACCESS_KEY,
  }),
});

export async function getSandboxInfo(
  tenantSlug: string,
): Promise<DatastoreInfo | undefined> {
  const res = await healthlake.send(
    new ListFHIRDatastoresCommand({
      Filter: {
        DatastoreName: tenantSlug,
      },
    }),
  );

  if (
    res.DatastorePropertiesList === undefined ||
    res.DatastorePropertiesList.length === 0
  ) {
    return undefined;
  }

  return res.DatastorePropertiesList[0];
}
