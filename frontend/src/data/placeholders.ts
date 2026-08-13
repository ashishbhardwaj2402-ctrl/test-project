import type {
  HeaderBarData,
  SidebarData,
  DecisionEngineData,
  RiskTradePlanData,
  MarketIntelligenceData,
  OptionsIntelligenceData,
  WatchlistData,
  TradeJournalData,
  AlertsData,
} from '../types';

export const HEADER_DATA: HeaderBarData = {
  title: 'AI TRADER COPILOT - Options Trading Dashboard',
  accountValue: '$5,142.37',
  availableCash: '$2,451.21',
  dailyPnL: '+$38.67 (0.76%)',
  dailyPnLPositive: true,
  riskRemaining: '$61.33 of $100',
  riskUsedPercent: 61,
  dateTime: 'May 22, 2025 10:15 AM ET',
  marketOpen: true,
};

export const SIDEBAR_DATA: SidebarData = {
  navItems: [
    { label: 'Dashboard', active: true },
    { label: 'Opportunities' },
    { label: 'Watchlist' },
    { label: 'Positions', badge: 2 },
    { label: 'Trade Journal' },
    { label: 'Risk Manager' },
    { label: 'Alerts' },
    { label: 'Reports' },
    { label: 'Settings' },
  ],
  riskGauge: {
    status: 'LOW',
    maxDailyLoss: '$100',
    todaysLoss: '-$38.67',
    dailyRemaining: '$61.33',
    maxMonthlyLoss: '$500',
    mtdLoss: '-$126.40',
    monthlyRemaining: '$373.60',
  },
  userName: 'SD',
  userPlan: 'Trader Pro Plan',
};

export const DECISION_ENGINE_DATA: DecisionEngineData = {
  ticker: 'SPY',
  tickerName: 'SPDR S&P 500 ETF',
  marketStance: 'BULLISH ↑',
  marketStancePositive: true,
  opportunityScore: 78,
  finalDecision: 'BUY CALL',
  finalDecisionVariant: 'green',
  confidenceLevel: 4,
  confidenceLabel: 'High',
  timeframe: '1–5 DAYS',
  explanation:
    'Strong bullish momentum with favorable risk/reward and high probability of expected move.',
  subEngines: [
    { name: 'Participation Engine', status: 'STRONG', color: 'green' },
    { name: 'Trend Engine', status: 'BULLISH', color: 'green' },
    { name: 'Volatility Engine', status: 'ELEVATED', color: 'orange' },
    { name: 'Liquidity Engine', status: 'GOOD', color: 'green' },
    { name: 'Risk Engine', status: 'CONTROLLED', color: 'green' },
    { name: 'Reward Engine', status: 'ATTRACTIVE', color: 'green' },
    { name: 'Timing Engine', status: 'FAVORABLE', color: 'green' },
    { name: 'Sentiment Engine', status: 'POSITIVE', color: 'green' },
    { name: 'Probability Engine', status: '68%', color: 'blue' },
    { name: 'Explainability Engine', status: 'HIGH CLARITY', color: 'green' },
  ],
};

export const RISK_TRADE_PLAN_DATA: RiskTradePlanData = {
  strategy: 'Long Call',
  expiry: 'May 30, 2025',
  dte: 8,
  strike: '530 Call',
  greeks: {
    delta: 0.52,
    gamma: 0.057,
    theta: -0.18,
    vega: 0.29,
    rho: 0.02,
  },
  entryPrice: '$3.30',
  contractsAllowed: 1,
  dollarRisk: '$49.50',
  stopLoss: '$2.10',
  target: '$5.80',
  riskReward: '1:2.5',
  winRate: '58%',
  positionSizer: {
    accountRiskPercent: '1.0%',
    maxDollarRisk: '$50',
    contracts: 1,
    maxLoss: '$49.50',
  },
};

export const MARKET_INTEL_DATA: MarketIntelligenceData = {
  candles: [
    { time: '09:30', open: 518.0, high: 519.5, low: 517.2, close: 519.1 },
    { time: '10:00', open: 519.1, high: 520.8, low: 518.6, close: 520.5 },
    { time: '10:30', open: 520.5, high: 521.3, low: 519.8, close: 520.0 },
    { time: '11:00', open: 520.0, high: 522.0, low: 519.5, close: 521.7 },
    { time: '11:30', open: 521.7, high: 523.2, low: 521.0, close: 522.8 },
    { time: '12:00', open: 522.8, high: 523.5, low: 521.8, close: 521.9 },
    { time: '12:30', open: 521.9, high: 522.6, low: 520.5, close: 521.0 },
    { time: '13:00', open: 521.0, high: 523.8, low: 520.8, close: 523.4 },
    { time: '13:30', open: 523.4, high: 525.0, low: 522.9, close: 524.7 },
    { time: '14:00', open: 524.7, high: 526.2, low: 524.1, close: 525.8 },
    { time: '14:30', open: 525.8, high: 526.5, low: 524.6, close: 524.9 },
    { time: '15:00', open: 524.9, high: 527.3, low: 524.5, close: 526.8 },
    { time: '15:30', open: 526.8, high: 528.4, low: 526.2, close: 527.5 },
    { time: '16:00', open: 527.5, high: 529.1, low: 527.0, close: 528.9 },
    { time: '16:30', open: 528.9, high: 530.2, low: 528.3, close: 529.7 },
    { time: '17:00', open: 529.7, high: 531.0, low: 529.1, close: 530.4 },
    { time: '17:30', open: 530.4, high: 531.5, low: 529.6, close: 529.8 },
    { time: '18:00', open: 529.8, high: 531.8, low: 529.3, close: 531.2 },
  ],
  currentPrice: '$529.74',
  trend: 'UPTREND',
  trendPositive: true,
  momentum: 'STRONG',
  momentumPositive: true,
  expectedMove: '+$7.21 (1.36%)',
  iv30d: '17.8%',
  ivRank: '68 (High)',
  ivRankLevel: 'high',
};

export const OPTIONS_INTEL_DATA: OptionsIntelligenceData = {
  iv: '17.8%',
  ivRank: '68 (High)',
  ivRankLevel: 'high',
  ivPercentile: '72%',
  putCallRatio: '0.78',
  greeks: {
    delta: 0.52,
    gamma: 0.057,
    theta: -0.18,
    vega: 0.28,
    rho: 0.02,
  },
  maxPain: '$528.00',
};

export const WATCHLIST_DATA: WatchlistData = {
  entries: [
    { rank: 1, symbol: 'SPY', direction: 'up', score: 78, setup: 'Bull Call Spread' },
    { rank: 2, symbol: 'QQQ', direction: 'up', score: 72, setup: 'Long Call' },
    { rank: 3, symbol: 'NVDA', direction: 'up', score: 65, setup: 'Bull Call Spread' },
    { rank: 4, symbol: 'IWM', direction: 'down', score: 61, setup: 'Put Credit Spread' },
    { rank: 5, symbol: 'AAPL', direction: 'up', score: 55, setup: 'Long Call' },
  ],
};

export const TRADE_JOURNAL_DATA: TradeJournalData = {
  entries: [
    { date: 'May 21', symbol: 'QQQ', direction: 'up', outcome: 'WIN', pnl: '+$42.30' },
    { date: 'May 20', symbol: 'SPY', direction: 'up', outcome: 'WIN', pnl: '+$31.20' },
    { date: 'May 19', symbol: 'NVDA', direction: 'up', outcome: 'WAIT' },
    { date: 'May 18', symbol: 'AAPL', direction: 'up', outcome: 'AVOID' },
    { date: 'May 15', symbol: 'TSLA', direction: 'up', outcome: 'LOSS', pnl: '-$48.75' },
  ],
};

export const ALERTS_DATA: AlertsData = {
  alertCount: 2,
  alerts: [
    {
      severity: 'warning',
      title: 'Monthly loss approaching limit',
      timestamp: '10:12 AM',
      description: "You've used 25% of monthly loss limit. MTD Loss: -$126.40/$500",
    },
    {
      severity: 'warning',
      title: 'High IV Opportunity',
      timestamp: '10:10 AM',
      description: "NVDA's IV Rank is 82 (Very High)",
    },
  ],
};
