export type Credits = Credit[];

export interface Credit {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  seo: Seo;
  usp: Usp[];
  slug: string;
  about: string;
  color: Color;
  banner: Banner;
  bankName: string;
  position: number;
  tenorMax: number;
  bankRates: BankRate[];
  createdAt: string;
  imageLogo: ImageLogo;
  isSyariah: boolean;
  panduanID: number;
  rateStart: string;
  updatedAt: string;
  submission: Submission[];
  publishedAt: string;
  isPartnership: boolean;
  useCalculator: boolean;
  whatsappNumber?: string;
  bankRatesTiered: BankRatesTiered[];
  whatsappRedirect: boolean;
  bankRatesTakeOver: BankRatesTakeOver[];
  generalRequirement: GeneralRequirement[];
  guidelinesApplyMortgage?: GuidelinesApplyMortgage;
  guidelinesMortgageCosts?: GuidelinesMortgageCosts;
  guidelinesMortgagePayment?: GuidelinesMortgagePayment;
  completenessDocumentDetail: CompletenessDocumentDetail[];
  completenessDocumentGeneral: CompletenessDocumentGeneral[];
  guidelinesMortgageSimulation?: GuidelinesMortgageSimulation;
}

export interface Seo {
  id: number;
  url: string;
  robot: string;
  keywords: any;
  titleMeta: string;
  imageShare: ImageShare;
  descriptionMeta: string;
}

export interface ImageShare {
  data: any;
}

export interface Usp {
  id: number;
  label: string;
  value: string;
  descripiton: string;
}

export interface Color {
  id: number;
  cta: string;
  main: string;
  secondary: string;
}

export interface Banner {
  id: number;
  Logo: Logo;
  title: string;
  subTitle: string;
  banner375: Banner375;
  banner480: Banner480;
  banner768: Banner768;
  banner1024: Banner1024;
  banner1440: Banner1440;
  banner1920: Banner1920;
  buttonText: any;
  buttonClassName: any;
}

export interface Logo {
  data: any;
}

export interface Banner375 {
  data: any;
}

export interface Banner480 {
  data: any;
}

export interface Banner768 {
  data: any;
}

export interface Banner1024 {
  data: any;
}

export interface Banner1440 {
  data: any;
}

export interface Banner1920 {
  data: any;
}

export interface BankRate {
  id: number;
  name: string;
  rate: number;
  tenor: string;
  program: string;
  maxTenor: number;
  minTenor: number;
  fixedYear: string;
  yearTenor: number;
  interestRate: string;
}

export interface ImageLogo {
  data: Data;
}

export interface Data {
  id: number;
  attributes: Attributes2;
}

export interface Attributes2 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  size: number;
  width?: number;
  height?: number;
  caption: string;
  formats?: Formats;
  provider: string;
  createdAt: string;
  updatedAt: string;
  previewUrl: any;
  alternativeText: string;
  provider_metadata: any;
}

export interface Formats {
  xsmall: Xsmall;
}

export interface Xsmall {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface Submission {
  id: number;
  image: Image;
  title?: string;
  value: string;
}

export interface Image {
  data: any;
}

export interface BankRatesTiered {
  id: number;
  maxTenor: number;
  minTenor: number;
  programName: string;
  tieredRatesPeriod: TieredRatesPeriod[];
}

export interface TieredRatesPeriod {
  id: number;
  interestRate: number;
  endsFixedPeriod?: number;
  startsFixedPeriod: number;
}

export interface BankRatesTakeOver {
  id: number;
  tenor: string;
  program: string;
  maxTenor?: number;
  minTenor?: number;
  fixedYear: string;
  interestRate: string;
}

export interface GeneralRequirement {
  id: number;
  image: Image2;
  title?: string;
  value: string;
}

export interface Image2 {
  data: any;
}

export interface GuidelinesApplyMortgage {
  id: number;
  Items: Item[];
  Introduction: Introduction;
}

export interface Item {
  id: number;
  Image: Image3;
  Title: string;
  Description: any;
}

export interface Image3 {
  data: any;
}

export interface Introduction {
  id: number;
  Image: Image4;
  Title: string;
  Description: any;
  DescriptionHtml: string;
}

export interface Image4 {
  data: any;
}

export interface GuidelinesMortgageCosts {
  id: number;
  Image: Image5;
  Title: string;
  Description: any;
  DescriptionHtml: string;
}

export interface Image5 {
  data: any;
}

export interface GuidelinesMortgagePayment {
  id: number;
  Image: Image6;
  Title: string;
  Description: any;
  DescriptionHtml: string;
}

export interface Image6 {
  data: any;
}

export interface CompletenessDocumentDetail {
  id: number;
  label: string;
  value: string;
  descripiton: Descripiton[];
}

export interface Descripiton {
  id: number;
  image: Image7;
  title?: string;
  value: string;
}

export interface Image7 {
  data: any;
}

export interface CompletenessDocumentGeneral {
  id: number;
  image: Image8;
  title?: string;
  value: string;
}

export interface Image8 {
  data: any;
}

export interface GuidelinesMortgageSimulation {
  id: number;
  Image: Image9;
  Title: string;
  Description: string;
  DescriptionHtml: string;
}

export interface Image9 {
  data: any;
}
