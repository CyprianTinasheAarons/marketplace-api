import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Marketplace, MarketplaceDocument } from './schema/marketplace.schema';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';

const sdk = new ThirdwebSDK('goerli');

@Injectable()
export class MarketplaceService {
  constructor(
    @InjectModel(Marketplace.name)
    private readonly marketplaceModel: Model<MarketplaceDocument>,
  ) {}

  // .Purchase NFTs
  //Buy a Direct or Auction listing on your marketplace
  async buyoutListing(
    listingId: string,
    quantity: number,
    contractAddress: string,
  ): Promise<any> {
    const contract = await sdk.getContract(contractAddress, 'marketplace');

    const buyoutListing = await contract.buyoutListing(listingId, quantity);

    return buyoutListing;
  }

  //simple buy listing
  async buyListing(
    listingId: string,
    buyForAddress: string,
    quantity: number,
    currencyContractAddress: string,
    totalPrice: number,
    contractAddress: string,
  ): Promise<any> {
    const contract = await sdk.getContract(contractAddress, 'marketplace');

    const buyListing = await contract.call(
      'buyListing',
      listingId,
      buyForAddress,
      quantity,
      currencyContractAddress,
      totalPrice,
    );

    return buyListing;
  }

  //Get all active listing
  async getActiveListings(contractAddress: string): Promise<any> {
    const contract = await sdk.getContract(contractAddress, 'marketplace');

    const activeListings = await contract.getActiveListings();

    return activeListings;
  }
  //Get all listings
  async getListings(contractAddress: string): Promise<any> {
    const contract = await sdk.getContract(contractAddress, 'marketplace');

    const listings = await contract.getAllListings();

    return listings;
  }

  //get a listing by id
  async getListingById(
    listingId: string,
    contractAddress: string,
  ): Promise<any> {
    const contract = await sdk.getContract(contractAddress, 'marketplace');

    const listing = await contract.getListing(listingId);

    return listing;
  }

  //get all the offers for a listing
  async getOffersForListing(
    listingId: string,
    contractAddress: string,
  ): Promise<any> {
    const contract = await sdk.getContract(contractAddress, 'marketplace');

    const offers = await contract.getOffers(listingId);

    return offers;
  }

  //make offer
  // Make an offer on a direct or auction listing
  async makeOffer(
    listingId: string,
    pricePerToken: number,
    quantity: number,
    contractAddress: string,
  ): Promise<any> {
    const contract = await sdk.getContract(contractAddress, 'marketplace');

    const offer = await contract.makeOffer(listingId, pricePerToken, quantity);

    return offer;
  }

  //accept offer
  // Accept an offer on a direct or auction listing
  async acceptOffer(
    listingId: string,
    offerorAddress: string,
    currencyContractAddress: string,
    pricePerToken: number,
    contractAddress: string,
  ): Promise<any> {
    const contract = await sdk.getContract(contractAddress, 'marketplace');

    const offer = await contract.call(
      'acceptOffer',
      listingId,
      offerorAddress,
      currencyContractAddress,
      pricePerToken,
    );

    return offer;
  }

  //   Auctions
  // Create and manage auctions in your marketplace.
  async createAuction(
    assetContractAddress: string,
    tokenId: string,
    startTimestamp: Date,
    listingDurationInSeconds: number,
    quantity: number,
    currencyContractAddress: string,
    buyoutPricePerToken: string,
    reservePricePerToken: string,
    contractAddress: string,
  ): Promise<any> {
    const contract = await sdk.getContract(contractAddress, 'marketplace');

    const auction = await contract.auction.createListing({
      assetContractAddress,
      tokenId,
      startTimestamp,
      listingDurationInSeconds,
      quantity,
      currencyContractAddress,
      buyoutPricePerToken,
      reservePricePerToken,
    });
    const receipt = auction.receipt;

    return receipt;
  }

  //  Direct Listings
  // Create and manage direct listings in your marketplace.
  async createDirectListing(
    assetContractAddress: string,
    tokenId: string,
    startTimestamp: Date,
    listingDurationInSeconds: number,
    quantity: number,
    currencyContractAddress: string,
    buyoutPricePerToken: string,
    reservePricePerToken: string,
    contractAddress: string,
  ): Promise<any> {
    const contract = await sdk.getContract(contractAddress, 'marketplace');

    const auction = await contract.auction.createListing({
      assetContractAddress,
      tokenId,
      startTimestamp,
      listingDurationInSeconds,
      quantity,
      currencyContractAddress,
      reservePricePerToken,
      buyoutPricePerToken,
    });
    const receipt = auction.receipt;

    return receipt;
  }

  //cancel direct lising
  async cancelDirectListing(
    listingId: string,
    contractAddress: string,
  ): Promise<any> {
    const contract = await sdk.getContract(contractAddress, 'marketplace');

    const cancelListing = await contract.call('cancelDirectListing', listingId);

    return cancelListing;
  }

  //cancel auction listing
  //Lets an account close an auction for either the (1) winning bidder, or (2) auction creator.
  async cancelAuctionListing(
    listingId: string,
    closeForAddress: string,
    contractAddress: string,
  ): Promise<any> {
    const contract = await sdk.getContract(contractAddress, 'marketplace');

    const cancelListing = await contract.call(
      'closeAuction',
      listingId,
      closeForAddress,
    );

    return cancelListing;
  }

  //update Listing
  // Update a listing's price and/or quantity
  async updateListing(
    listingId: string,
    quantityToList: number,
    reservePricePerToken: number,
    buyoutPricePerToken: number,
    currencyToAccept: string,
    startTimeStamp: Date,
    listingDurationInSeconds: number,
    contractAddress: string,
  ): Promise<any> {
    const contract = await sdk.getContract(contractAddress, 'marketplace');

    const updateListing = await contract.call(
      'updateListing',
      listingId,
      quantityToList,
      reservePricePerToken,
      buyoutPricePerToken,
      currencyToAccept,
      startTimeStamp,
      listingDurationInSeconds,
    );

    return updateListing;
  }
}
