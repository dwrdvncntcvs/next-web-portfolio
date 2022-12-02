export interface CertificateData {
  description: string;
  certificates: Certificate[];
}

export interface Certificate {
  imageUrl: string;
  title: string;
}
