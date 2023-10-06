import { Injectable } from '@nestjs/common';

export interface RIB {
  rib: string;
  bic: string;
}

@Injectable()
export class GetTheRibService {
  private readonly rib: string;
  private readonly bic: string;
  private readonly secret: string;
  constructor() {
    this.rib = process.env.RIB;
    this.bic = process.env.BIC;
    this.secret = process.env.RIB_SECRET;
  }

  private checkPassword(password: string): boolean {
    return password === this.secret;
  }

  get(password: string): RIB {
    if (this.checkPassword(password)) {
      return {
        rib: this.rib,
        bic: this.bic,
      };
    } else {
      throw new Error('Bad password');
    }
  }
}
