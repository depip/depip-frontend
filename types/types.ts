export interface IChat {
  from: string;
  value: IChatContent[];
}

export interface IChatContent {
  type: "script" | "string" | "image" | "link";
  content: string;
  json?: any;
  file?: any;
  link?: string;
}

// // TypeScript interfaces based on the provided JSON

// interface Metadata {
//   name: string;
//   image: string;
//   attributes: {
//     value: string;
//     trait_type: string;
//   }[];
//   description: string;
//   external_url: string;
// }

// interface MetadataOnchain {
//   metadata: Metadata;
//   token_uri: string;
// }

// interface MetadataOffchain {
//   image: {
//     url: string;
//     file_path: string;
//     content_type: string;
//   };
//   animation: {};
// }

// interface IpAssetData {
//   id: number;
//   created_at: string;
//   updated_at: string;
//   contract_address: string;
//   token_id: string;
//   owner: string;
//   chain_id: string;
//   metadata_onchain: MetadataOnchain;
//   metadata_offchain: MetadataOffchain;
//   ipasset_id: number;
//   ip_id: string;
// }

// export interface IpAsset {
//   id: number;
//   created_at: string;
//   updated_at: string;
//   contract_address: string;
//   token_id: string;
//   ip_id: string;
//   chain_id: string;
//   name: string;
//   uri: string;
//   registration_date: number;
//   ipAssetData: IpAssetData;
// }

interface MetadataOnchain {
  token_uri: string;
  metadata?: {
    name?: string;
    image?: string;
    attributes?: Array<any>;
    description?: string;
  };
}

interface MetadataOffchain {
  image?: {
    url?: string;
    file_path?: string;
    content_type?: string;
  };
  animation?: any;
}

interface IpAssetData {
  id: number;
  created_at: string;
  updated_at: string;
  contract_address: string;
  token_id: string;
  owner: string;
  chain_id: string;
  metadata_onchain: MetadataOnchain;
  metadata_offchain: MetadataOffchain;
  ipasset_id: number;
  ip_id: string;
}

export interface IpAsset {
  id: number;
  created_at: string;
  updated_at: string;
  contract_address: string;
  token_id: string;
  ip_id: string;
  chain_id: string;
  name: string;
  uri: string;
  registration_date: number;
  number_license_attached: number | null;
  status: string;
  ipAssetData: IpAssetData;
}