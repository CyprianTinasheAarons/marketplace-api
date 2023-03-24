import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { MarketplaceService } from './marketplace.service';

@Controller('marketplace')
export class MarketplaceController {
  constructor(private readonly marketplaceService: MarketplaceService) {}

  @Post('buyoutListing')
  async buyoutListing(
    @Res() response,
    @Body('listingId') listingId: string,
    @Body('quantity') quantity: number,
    @Body('contractAddress') contractAddress: string,
  ) {
    const buyoutListing = await this.marketplaceService.buyoutListing(
      listingId,
      quantity,
      contractAddress,
    );
    return response.status(HttpStatus.OK).json(buyoutListing);
  }

  @Post('buyListing')
  async buyListing(
    @Res() response,
    @Body('listingId') listingId: string,
    @Body('buyForAddress') buyForAddress: string,
    @Body('quantity') quantity: number,
    @Body('currencyContractAddress') currencyContractAddress: string,
    @Body('totalPrice') totalPrice: number,
    @Body('contractAddress') contractAddress: string,
  ) {
    const buyListing = await this.marketplaceService.buyListing(
      listingId,
      buyForAddress,
      quantity,
      currencyContractAddress,
      totalPrice,
      contractAddress,
    );
    return response.status(HttpStatus.OK).json(buyListing);
  }

  @Get('getActiveListings/:contractAddress')
  async getActiveListings(
    @Res() response,
    @Param('contractAddress') contractAddress: string,
  ) {
    const activeListings = await this.marketplaceService.getActiveListings(
      contractAddress,
    );
    return response.status(HttpStatus.OK).json(activeListings);
  }

  @Get('getListings/:contractAddress')
  async getListings(
    @Res() response,
    @Param('contractAddress') contractAddress: string,
  ) {
    const listings = await this.marketplaceService.getListings(contractAddress);
    return response.status(HttpStatus.OK).json(listings);
  }

  @Get('getListing/:contractAddress/:listingId')
  async getListing(
    @Res() response,
    @Param('contractAddress') contractAddress: string,
    @Param('listingId') listingId: string,
  ) {
    const listing = await this.marketplaceService.getListingById(
      contractAddress,
      listingId,
    );
    return response.status(HttpStatus.OK).json(listing);
  }

  @Get('getOffers/:contractAddress/:listingId')
  async getOffers(
    @Res() response,
    @Param('contractAddress') contractAddress: string,
    @Param('listingId') listingId: string,
  ) {
    const offers = await this.marketplaceService.getOffersForListing(
      contractAddress,
      listingId,
    );

    return response.status(HttpStatus.OK).json(offers);
  }

  @Post('makeOffer')
  async makeOffer(
    @Res() response,
    @Body('listingId') listingId: string,
    @Body('price') price: number,
    @Body('quantity') quantity: number,
    @Body('contractAddress') contractAddress: string,
  ) {
    const makeOffer = await this.marketplaceService.makeOffer(
      listingId,
      price,
      quantity,
      contractAddress,
    );

    return response.status(HttpStatus.OK).json(makeOffer);
  }

  @Post('acceptOffer')
  async acceptOffer(
    @Res() response,
    @Body('listingId') listingId: string,
    @Body('offerorAddress') offerId: string,
    @Body('currenyContractAddress') currencyContractAddres: string,
    @Body('pricePerToken') pricePerToken: number,
    @Body('contractAddress') contractAddress: string,
  ) {
    const acceptOffer = await this.marketplaceService.acceptOffer(
      listingId,
      offerId,
      currencyContractAddres,
      pricePerToken,
      contractAddress,
    );

    return response.status(HttpStatus.OK).json(acceptOffer);
  }

  @Post('createAuction')
  async createAuction(
    @Res() response,
    @Body('tokenAddress') tokenAddress: string,
    @Body('tokenId') tokenId: string,
    @Body('startTimestamp') startTimestamp: Date,
    @Body('listingDuration') listingDuration: number,
    @Body('quantity') quantity: number,
    @Body('currencyContractAddress') currencyContractAddress: string,
    @Body('buyoutPrice') buyoutPrice: string,
    @Body('reservePrice') reservePrice: string,
    @Body('contractAddress') contractAddress: string,
  ) {
    const createAuction = await this.marketplaceService.createAuction(
      tokenAddress,
      tokenId,
      startTimestamp,
      listingDuration,
      quantity,
      currencyContractAddress,
      buyoutPrice,
      reservePrice,
      contractAddress,
    );

    return response.status(HttpStatus.OK).json(createAuction);
  }

  @Post('createDirectListing')
  async createDirectListing(
    @Res() response,
    @Body('tokenAddress') tokenAddress: string,
    @Body('tokenId') tokenId: string,
    @Body('startTimestamp') startTimestamp: Date,
    @Body('listingDuration') listingDuration: number,
    @Body('quantity') quantity: number,
    @Body('currencyContractAddress') currencyContractAddress: string,
    @Body('buyoutPrice') buyoutPrice: string,
    @Body('reservePrice') reservePrice: string,
    @Body('contractAddress') contractAddress: string,
  ) {
    const createListing = await this.marketplaceService.createDirectListing(
      tokenAddress,
      tokenId,
      startTimestamp,
      listingDuration,
      quantity,
      currencyContractAddress,
      buyoutPrice,
      reservePrice,
      contractAddress,
    );

    return response.status(HttpStatus.OK).json(createListing);
  }

  @Post('cancelDirectListing')
  async cancelDirectListing(
    @Res() response,
    @Body('listingId') listingId: string,
    @Body('contractAddress') contractAddress: string,
  ) {
    const cancelListing = await this.marketplaceService.cancelDirectListing(
      listingId,
      contractAddress,
    );

    return response.status(HttpStatus.OK).json(cancelListing);
  }

  @Post('cancelAuction')
  async cancelAuction(
    @Res() response,
    @Body('listingId') listingId: string,
    @Body('closeForAddress') closeFortAddress: string,
    @Body('contractAddress') contractAddress: string,
  ) {
    const cancelAuction = await this.marketplaceService.cancelAuctionListing(
      listingId,
      closeFortAddress,
      contractAddress,
    );

    return response.status(HttpStatus.OK).json(cancelAuction);
  }

  @Post('updateListing')
  async updateListing(
    @Res() response,
    @Body('listingId') listingId: string,
    @Body('quantity') quantity: number,
    @Body('reservePrice') reservePrice: number,
    @Body('buyoutPrice') buyoutPrice: number,
    @Body('currenyToAccept') currenyToAccept: string,
    @Body('startTimestamp') startTimestamp: Date,
    @Body('listingDuration') listingDuration: number,
    @Body('contractAddress') contractAddress: string,
  ) {
    const updateListing = await this.marketplaceService.updateListing(
      listingId,
      quantity,
      reservePrice,
      buyoutPrice,
      currenyToAccept,
      startTimestamp,
      listingDuration,
      contractAddress,
    );

    return response.status(HttpStatus.OK).json(updateListing);
  }
}
