import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

import { CoreService } from '../../shared/services/core.service';
import { TranslateService } from '../../shared/services/translate.service';

import {
  ELinkableIconType,
  ELinkableTarget,
  LinkableIcon
} from 'src/app/shared/components/linkable-icon/linkable-icon';
import { IAccordion } from 'src/app/shared/models/core';
import { IAccordionItem, URLS } from '../../shared/models/core';
import { ECurrency } from '../../shared/models/currency';

@Component({
  selector: 'app-tools-page',
  templateUrl: './tools-page.component.html',
  styleUrls: ['./tools-page.component.scss']
})
export class ToolsPageComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  showExpanded = false;
  bitcoinText = ECurrency.BTC.text;

  toolsList: IAccordion[] = [];
  customToolsList: LinkableIcon[] = [];

  private ctlCalculator = 'ctlCalculator';
  private ctlWhenToSell = 'ctlWhenToSell';
  private ctlBenefits = 'ctlBenefits';

  constructor(
    private coreService: CoreService,
    private translateService: TranslateService,
  ) { }

  ngOnInit(): void {
    this.initialize();
  }

  private initialize(): void {
    this.prepareCustomTools();
    this.prepareToolsList();
    if (this.accordion) { this.accordion.openAll(); }
  }

  private prepareCustomTools(): void {
    this.customToolsList = [];
    this.customToolsList.push(new LinkableIcon(this.ctlCalculator, {
      // routerLink: 'calculator',
      title: 'PAGES.TOOLS.CUSTOM.calculator',
      tooltip: 'PAGES.TOOLS.CUSTOM.calculatorTooltip',
      iconPath: 'dialpad',
      color: '#fff',
      type: ELinkableIconType.ICON,
      target: ELinkableTarget.SELF,
      showText: true,
      isCard: true
    }));
    this.customToolsList.push(new LinkableIcon(this.ctlWhenToSell, {
      // routerLink: 'when-to-sell',
      title: 'PAGES.TOOLS.CUSTOM.whenToSell',
      tooltip: 'PAGES.TOOLS.CUSTOM.whenToSellTooltip',
      iconPath: 'score',
      color: '#fff',
      type: ELinkableIconType.ICON,
      target: ELinkableTarget.SELF,
      showText: true,
      isCard: true
    }));
    this.customToolsList.push(new LinkableIcon(this.ctlBenefits, {
      // routerLink: 'calculator-benefits',
      title: 'PAGES.TOOLS.CUSTOM.benefits',
      tooltip: 'PAGES.TOOLS.CUSTOM.benefitsTooltip',
      iconPath: 'poll',
      color: '#fff',
      type: ELinkableIconType.ICON,
      target: ELinkableTarget.SELF,
      showText: true,
      isCard: true
    }));
  }

  private prepareToolsList(): void {
    this.toolsList = [];
    this.toolsList.push(this.prepareToolsAnalysisMarket());
    this.toolsList.push(this.prepareToolsAnalysisTechnical());
    this.toolsList.push(this.prepareToolsBitcoin());
    this.toolsList.push(this.prepareBitcoinWallets());
    this.toolsList.push(this.prepareToolsExchangeCEX());
    this.toolsList.push(this.prepareToolsExchangeDEX());
    this.toolsList.push(this.prepareToolsWallets());
    this.toolsList.push(this.prepareToolsOthers());
  }

  private prepareToolsAnalysisMarket(): IAccordion {
    const groupName = 'ANALYSIS_MARKET';
    const accordion = this.createToolsGroup(
      groupName,
      [
        this.createToolItem(groupName, 'CoinGecko', URLS.REF_CoinGecko, 4.5),
        this.createToolItem(groupName, 'CoinMarketCap', URLS.REF_CoinMarketCap, 4),
        this.createToolItem(groupName, 'CoinMarketCal', URLS.REF_CoinMarketCal, 4.5),
        this.createToolItem(groupName, 'Lunarcrush', URLS.REF_Lunarcrush, 3.5),
        this.createToolItem(groupName, 'DefiLlama', URLS.REF_DefiLlama, 3.5),
        this.createToolItem(groupName, 'Google Trends', URLS.REF_GoogleTrends, 1.5),
      ],
      'multiline_chart'
    );
    return accordion;
  }

  private prepareToolsAnalysisTechnical(): IAccordion {
    const groupName = 'ANALYSIS_TECH';
    const accordion = this.createToolsGroup(
      groupName,
      [
        this.createToolItem(groupName, 'TradingView', URLS.REF_TradingView, 4.5),
      ],
      'insert_chart_outlined'
    );
    return accordion;
  }

  private prepareToolsBitcoin(): IAccordion {
    const groupName = 'BITCOIN_TOOLS';
    const accordion = this.createToolsGroup(
      groupName,
      [
        this.createToolItem(groupName, 'Bitcoin Rainbow Chart', URLS.REF_BitcoinRainbowChart, 5),
        this.createToolItem(groupName, 'KYCP', URLS.REF_KYCP, 4),
        this.createToolItem(groupName, 'StackerNews', URLS.REF_StackerNews, 4),
      ],
      'bitcoin'
    );
    return accordion;
  }

  private prepareBitcoinWallets(): IAccordion {
    return this.coreService.prepareBitcoinWallets();
  }

  private prepareToolsExchangeCEX(): IAccordion {
    const groupName = 'EXCHANGES_CEX';
    const accordion = this.createToolsGroup(
      groupName,
      [
        this.createToolItem(groupName, 'Binance', URLS.REF_Binance, 4.5),
        this.createToolItem(groupName, 'Bit2Me', URLS.REF_Bit2Me, 3),
        this.createToolItem(groupName, 'BingX', URLS.REF_BingX, 4.2),
        this.createToolItem(groupName, 'Cryptocom', URLS.REF_CryptoCom, 3),
        this.createToolItem(groupName, 'FTX', URLS.REF_FTX, 4.3),
        this.createToolItem(groupName, 'Gemini', URLS.REF_Gemini, 2.5),
        this.createToolItem(groupName, 'KuCoin', URLS.REF_KuCoin, 4.5),
        this.createToolItem(groupName, 'Nexo', URLS.REF_Nexo, 4.1),
        this.createToolItem(groupName, 'Wirex', URLS.REF_Wirex, 4.6),
      ],
      'account_balance'
    );
    return accordion;
  }

  private prepareToolsExchangeDEX(): IAccordion {
    const groupName = 'EXCHANGES_DEX';
    const accordion = this.createToolsGroup(
      groupName,
      [
        this.createToolItem(groupName, 'PancakeSwap', URLS.REF_PancakeSwap, 5),
        // this.createToolItem(groupName, 'BoggedFinance', URLS.REF_BoggedFinance, 0),
        // this.createToolItem(groupName, 'DexGuru', URLS.REF_DexGuru, 0),
        // this.createToolItem(groupName, 'DexTools', URLS.REF_DexTools, 0),
        // this.createToolItem(groupName, 'PooCoin', URLS.REF_PooCoin, 0),
      ],
      'device_hub'
    );
    return accordion;
  }

  private prepareToolsWallets(): IAccordion {
    const groupName = 'WALLETS';
    const accordion = this.createToolsGroup(
      groupName,
      [
        this.createToolItem(groupName, 'Brave Wallet', URLS.REF_BraveWallet, 4.2),
        this.createToolItem(groupName, 'Metamask', URLS.REF_Metamask, 3.8),
        this.createToolItem(groupName, 'Safepal', URLS.REF_Safepal, 4),
        this.createToolItem(groupName, 'TrustWallet', URLS.REF_TrustWallet, 3.5),
      ],
      'account_balance_wallet'
    );
    return accordion;
  }

  private prepareToolsOthers(): IAccordion {
    const groupName = 'OTHERS';
    const accordion = this.createToolsGroup(
      groupName,
      [
        this.createToolItem(groupName, 'BSCheck', URLS.REF_BSCheck, 2),
        this.createToolItem(groupName, 'Chainlist', URLS.REF_Chainlist, 4.5),
        this.createToolItem(groupName, 'HoneyPot', URLS.REF_Honeypot, 3.5),
        this.createToolItem(groupName, 'Mudra', URLS.REF_Mudra, 4),
        this.createToolItem(groupName, 'RugDoc', URLS.REF_RugDoc, 4),
      ],
      'important_devices'
    );
    return accordion;
  }

  private createToolsGroup(groupName: string, items: IAccordionItem[], icon?: string, disabled?: boolean): IAccordion {
    return this.coreService.createToolsGroup(groupName, items, icon, disabled);
  }

  private createToolItem(groupName: string, name: string, link: string, rank: number): IAccordionItem {
    return this.coreService.createToolItem(groupName, name, link, rank);
  }

  isNullOrEmpty(val: string): boolean {
    val = this.translateService.instant(val);
    return this.coreService.isNullOrEmpty(val.trim());
  }
}
