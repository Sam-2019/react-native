export interface Props {
    id?: number;
    title?: string;
    releaseYear?: string;
    
    name: string;
    symbol: string;
    price_usd: string;
}

export type CryptoInfoProps = {
    route?: any;
    blog_url?: any;
    logo_url?: any;
    whitepaper_url?: any;
    website_url?: any;
    facebook_url?: any;
  };
  

export type CryptoItemProps = {
    name: string;
    symbol: string;
    price_usd: string;
    id: any;
  };