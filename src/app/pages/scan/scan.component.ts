import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlockchainService } from '../../services/blockchain.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {

  public code='';
  public blocks = [];
  public selectedBlock = null;

  constructor(private route: ActivatedRoute, private blockchainService: BlockchainService) {
    
   }

  ngOnInit() {
  }


  getVal(val)
  {
    const blockchain = this.blockchainService.blockchainInstance;
    this.blocks = blockchain.getInfoOfIdentityCode(val);
    
  }

}
