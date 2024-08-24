interface ITextContent {
  title?: string;
  paragraph: string;
  image?: string;
}

export interface IExcursion {
  id: number;
  excursion?: string;
  images?: string[];
  description?: string;
  textContent?: ITextContent[];
  title: string;
  route: string;
  previewImg: string;
  maps?: {
    googleMapData: {
      markers: {
        description: string;
        position: { lat: number; lng: number };
      }[];
      position: { lat: number; lng: number };
    };
    iframeLink: string;
  };
}

export interface IVirtualExcursions {
  excursions: IExcursion[];
}

export interface IDefaultExcursion {
  data: IExcursion;
}
