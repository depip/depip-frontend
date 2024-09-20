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

interface MetadataOnchain {
  metadata: {
    name: string;
    image: string;
    attributes: Array<any>; // Thay đổi loại nếu có thông tin cụ thể
    description: string;
  };
  token_uri: string;
}

interface MetadataOffchain {
  image: {
    url: string;
    file_path: string;
    content_type: string;
  };
  animation: Record<string, unknown>; // Thay đổi nếu có thông tin cụ thể
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

interface LicenseTermDetail {
  uri: string;
  currency: string;
  expiration: string;
  mintingFee: string;
  transferable: boolean;
  commercialUse: boolean;
  royaltyPolicy: string;
  commercialRevShare: string;
  derivativesAllowed: boolean;
  derivativesApproval: boolean;
  commercialRevCelling: string;
  derivativeRevCelling: string;
  commercialAttribution: boolean;
  commercializerChecker: string;
  derivativesReciprocal: boolean;
  derivativesAttribution: boolean;
  commercializerCheckerData: string;
}

interface LicenseTerm {
  id: number;
  created_at: string;
  updated_at: string;
  license_term_id: number;
  license_template: string;
  license_term_detail: LicenseTermDetail;
  name: string;
}

interface LicenseAttach {
  id: number;
  created_at: string;
  updated_at: string;
  caller: string;
  ip_id: string;
  license_template: string;
  license_term_id: number;
  license_term: LicenseTerm;
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
  number_license_attached: number;
  status: string;
  ipAssetData: IpAssetData;
  license_attaches: LicenseAttach[];
}
