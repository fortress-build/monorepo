import type { Identifier } from "./Identifier";
import type { Resource } from "./Resource";
import type { Signature } from "./Signature";

export declare class BundleLink {
  // See http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1
  relation: "self" | "next" | "previous" | "first" | "last";
  url: string;
}

export declare class Bundle extends Resource {
  resourceType: "Bundle";
  identifier?: Identifier;
  type:
    | "document"
    | "message"
    | "transaction"
    | "transaction-response"
    | "batch"
    | "batch-response"
    | "history"
    | "searchset"
    | "collection";

  timestamp?: string;
  total?: number;
  link?: BundleLink[];
  entry?: {
    link?: BundleLink[];
    fullUrl?: string;
    resource: Resource;
    search?: {
      mode?: "match" | "include" | "outcome";
      score?: number;
    };
    request?: {
      method: "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "PATCH";
      url: string;

      ifNoneMatch?: string;
      ifModifiedSince?: string;
      ifMatch?: string;
      ifNoneExist?: string;
    };
    response?: {
      status: string;
      location?: string;
      etag?: string;
      lastModified?: string;
      outcome?: Resource;
    };
  }[];
  signature?: Signature;
}
