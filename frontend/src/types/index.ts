export interface HeaderBarData {
  title: string;
  accountValue: string;
  availableCash: string;
  dailyPnL: string;
  dailyPnLPositive: boolean;
  riskRemaining: string;
  riskUsedPercent: number;
  dateTime: string;
  marketOpen: boolean;
}

export interface NavItem {
  label: string;
  active?: boolean;
  badge?: number;
}

export interface RiskGaugeMetrics {
  maxDailyLoss: string;
  todaysLoss: string;
  dailyRemaining: string;
  maxMonthlyLoss: string;
  mtdLoss: string;
  monthlyRemaining: string;
  status: 'LOW' | 'MEDIUM' | 'HIGH';
}

export interface SidebarData {
  navItems: NavItem[];
  riskGauge: RiskGaugeMetrics;
  userName: string;
  userPlan: string;
}

export interface SubEngine {
  name: string;
  status: string;
  color: 'green' | 'orange' | 'red' | 'blue' | 'default';
}

export interface DecisionEngineData {
  ticker: string;
  tickerName: string;
  marketStance: string;
  marketStancePositive: boolean;
  opportunityScore: number;
  finalDecision: string;
  finalDecisionVariant: 'green' | 'red' | 'orange';
  confidenceLevel: number;
  confidenceLabel: string;
  timeframe: string;
  explanation: string;
  subEngines: SubEngine[];
}

export interface Greeks {
  delta: number;
  gamma: number;
  theta: number;
  vega: number;
  rho?: number;
}

export interface RiskTradePlanData {
  strategy: string;
  expiry: string;
  dte: number;
  strike: string;
  greeks: Greeks;
  entryPrice: string;
  contractsAllowed: number;
  dollarRisk: string;
  stopLoss: string;
  target: string;
  riskReward: string;
  winRate: string;
  positionSizer: {
    accountRiskPercent: string;
    maxDollarRisk: string;
    contracts: number;
    maxLoss: string;
  };
}

export interface CandleData {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume?: number;
}

export interface MarketIntelligenceData {
  candles: CandleData[];
  currentPrice: string;
  trend: string;
  trendPositive: boolean;
  momentum: string;
  momentumPositive: boolean;
  expectedMove: string;
  iv30d: string;
  ivRank: string;
  ivRankLevel: 'high' | 'medium' | 'low';
}

export interface OptionsIntelligenceData {
  iv: string;
  ivRank: string;
  ivRankLevel: 'high' | 'medium' | 'low';
  ivPercentile: string;
  putCallRatio: string;
  greeks: Greeks;
  maxPain: string;
}

export interface WatchlistEntry {
  rank: number;
  symbol: string;
  direction: 'up' | 'down';
  score: number;
  setup: string;
}

export interface WatchlistData {
  entries: WatchlistEntry[];
}

export type TradeOutcome = 'WIN' | 'LOSS' | 'WAIT' | 'AVOID';

export interface JournalEntry {
  date: string;
  symbol: string;
  direction: 'up' | 'down';
  outcome: TradeOutcome;
  pnl?: string;
}

export interface TradeJournalData {
  entries: JournalEntry[];
}

export type AlertSeverity = 'warning' | 'danger' | 'info';

export interface AlertEntry {
  severity: AlertSeverity;
  title: string;
  timestamp: string;
  description: string;
}

export interface AlertsData {
  alertCount: number;
  alerts: AlertEntry[];
}
