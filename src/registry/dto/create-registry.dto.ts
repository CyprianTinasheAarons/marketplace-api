import { Registry } from '../entities/registry.entity';

export class CreateRegistryDto extends Registry {
  firstName: string;
  lastName: string;
  walletAddress: string;
  websiteUrl: string;
  twitterUrl: string;
  instagramUrl: string;
  otherURL: string;
  artistName: string;
  artwork: [];
  acknowledgement: boolean;
  acknowledgement2: boolean;
  acknowledgement3: boolean;
  prompts: [];
}
