/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Cursor custom scalar type */
  Cursor: { input: any; output: any; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** Decimal custom scalar type */
  Decimal: { input: any; output: any; }
  /**
   *
   *     A string representing a duration conforming to the ISO8601 standard,
   *     such as: P1W1DT13H23M34S
   *     P is the duration designator (for period) placed at the start of the duration representation.
   *     Y is the year designator that follows the value for the number of years.
   *     M is the month designator that follows the value for the number of months.
   *     W is the week designator that follows the value for the number of weeks.
   *     D is the day designator that follows the value for the number of days.
   *     T is the time designator that precedes the time components of the representation.
   *     H is the hour designator that follows the value for the number of hours.
   *     M is the minute designator that follows the value for the number of minutes.
   *     S is the second designator that follows the value for the number of seconds.
   *
   *     Note the time designator, T, that precedes the time value.
   *
   *     Matches moment.js, Luxon and DateFns implementations
   *     ,/. is valid for decimal places and +/- is a valid prefix
   *
   */
  Duration: { input: any; output: any; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: any; output: any; }
  ExportObjectId: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** Month custom scalar type */
  Month: { input: any; output: any; }
  NotificationObjectId: { input: any; output: any; }
  /** ObjectId custom scalar type */
  ObjectId: { input: any; output: any; }
  SystemJobObjectId: { input: any; output: any; }
  Timezone: { input: any; output: any; }
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: { input: any; output: any; }
};

export enum AccountStatus {
  Active = 'ACTIVE',
  Blacklisted = 'BLACKLISTED',
  Disabled = 'DISABLED',
  VerificationLocked = 'VERIFICATION_LOCKED'
}

export type AccountStatusFilter = {
  __typename?: 'AccountStatusFilter';
  equal?: Maybe<AccountStatus>;
  in?: Maybe<Array<AccountStatus>>;
  notEqual?: Maybe<AccountStatus>;
  notIn?: Maybe<Array<AccountStatus>>;
};

export enum AccountType {
  Admin = 'ADMIN',
  Operator = 'OPERATOR'
}

export type Achievement = {
  __typename?: 'Achievement';
  count: Scalars['Int']['output'];
  type: AchievementType;
};

export type AchievementPointsHistoryRecord = Node & {
  __typename?: 'AchievementPointsHistoryRecord';
  dateTimeCreated: Scalars['DateTime']['output'];
  id: Scalars['ObjectId']['output'];
  points: Scalars['Int']['output'];
  type: AchievementType;
};

export type AchievementPointsHistoryRecordFilterInput = {
  dateTimeCreated?: InputMaybe<DateTimeFilterInput>;
  type?: InputMaybe<AchievementTypeFilterInput>;
};

export enum AchievementType {
  BettingBonanza = 'BETTING_BONANZA',
  ConsistentContender = 'CONSISTENT_CONTENDER',
  CuriousNewcomer = 'CURIOUS_NEWCOMER',
  DiverseDebut = 'DIVERSE_DEBUT',
  InnovationIcon = 'INNOVATION_ICON',
  LegendaryLoyalist = 'LEGENDARY_LOYALIST',
  MasterOfDiversity = 'MASTER_OF_DIVERSITY',
  RapidRoller = 'RAPID_ROLLER',
  SteadyStrategist = 'STEADY_STRATEGIST',
  Trailblazer = 'TRAILBLAZER',
  VarietyVirtuoso = 'VARIETY_VIRTUOSO',
  WhirlwindWagerer = 'WHIRLWIND_WAGERER'
}

export type AchievementTypeFilterInput = {
  equal?: InputMaybe<AchievementType>;
  in?: InputMaybe<Array<AchievementType>>;
};

export type ActivityRecordsFilterInput = {
  dateTimeCreated?: InputMaybe<DateTimeFilterInput>;
  type?: InputMaybe<MemberActivityTypeFilterInput>;
};

export type Agent = {
  __typename?: 'Agent';
  id?: Maybe<Scalars['ObjectId']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum Bank {
  Aubkphmm = 'AUBKPHMM',
  Bnorphmm = 'BNORPHMM',
  Mbtcphmm = 'MBTCPHMM',
  Mkruphm1 = 'MKRUPHM1'
}

export type BankWithdrawalRecord = Node & WithdrawalRecord & {
  __typename?: 'BankWithdrawalRecord';
  accountNumber?: Maybe<Scalars['String']['output']>;
  amount: Scalars['Decimal']['output'];
  bank?: Maybe<Bank>;
  dateTimeConfirmed?: Maybe<Scalars['DateTime']['output']>;
  dateTimeCreated: Scalars['DateTime']['output'];
  dateTimeLastUpdated: Scalars['DateTime']['output'];
  domain?: Maybe<Scalars['String']['output']>;
  error?: Maybe<WithdrawalError>;
  fee: Scalars['Decimal']['output'];
  id: Scalars['ObjectId']['output'];
  member?: Maybe<Member>;
  netAmount: Scalars['Decimal']['output'];
  platform?: Maybe<Platform>;
  reference?: Maybe<Scalars['String']['output']>;
  referrer?: Maybe<Member>;
  remarks?: Maybe<Scalars['String']['output']>;
  status: WithdrawalStatus;
  type: WithdrawalType;
  withdrawal: Scalars['ObjectId']['output'];
  withdrawalNumber?: Maybe<Scalars['String']['output']>;
};

export type BetRecord = Node & {
  __typename?: 'BetRecord';
  bet: Scalars['Decimal']['output'];
  betContent?: Maybe<Scalars['String']['output']>;
  contestName?: Maybe<Scalars['String']['output']>;
  dateTimeCancelled?: Maybe<Scalars['DateTime']['output']>;
  dateTimeCreated: Scalars['DateTime']['output'];
  dateTimeLastUpdated: Scalars['DateTime']['output'];
  dateTimeSettled?: Maybe<Scalars['DateTime']['output']>;
  externalCategory?: Maybe<Scalars['String']['output']>;
  externalDetails?: Maybe<Scalars['URL']['output']>;
  game: Game;
  id: Scalars['ObjectId']['output'];
  jackpotContribution: Scalars['Decimal']['output'];
  jackpotPayout: Scalars['Decimal']['output'];
  member?: Maybe<Member>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  odds?: Maybe<Scalars['Decimal']['output']>;
  payout: Scalars['Decimal']['output'];
  platform?: Maybe<Platform>;
  referrer?: Maybe<Member>;
  serialCode: Scalars['String']['output'];
  session?: Maybe<Session>;
  status: BetRecordStatus;
  /** @deprecated use `bet` instead */
  totalBet: Scalars['Decimal']['output'];
  /** @deprecated use `payout` instead */
  totalPayout: Scalars['Decimal']['output'];
  transactions?: Maybe<Array<GameRoundTransaction>>;
  validBet: Scalars['Decimal']['output'];
  vendorRoundId?: Maybe<Scalars['String']['output']>;
  winloss?: Maybe<Scalars['Decimal']['output']>;
};

export type BetRecordAggregates = {
  __typename?: 'BetRecordAggregates';
  bet: Scalars['Decimal']['output'];
  jackpotContribution: Scalars['Decimal']['output'];
  jackpotPayout: Scalars['Decimal']['output'];
  payout: Scalars['Decimal']['output'];
  validBet: Scalars['Decimal']['output'];
  winloss?: Maybe<Scalars['Decimal']['output']>;
};

export type BetRecordFilterInput = {
  dateTimeCreated?: InputMaybe<DateTimeFilterInput>;
  dateTimeSettled?: InputMaybe<DateTimeFilterInput>;
  game?: InputMaybe<ObjectIdFilterInput>;
  game__externalId?: InputMaybe<StringFilterInput>;
  game__provider?: InputMaybe<GameProviderFilterInput>;
  game__type?: InputMaybe<GameTypeFilterInput>;
  member?: InputMaybe<ObjectIdFilterInput>;
  member__domain?: InputMaybe<StringFilterInput>;
  member__name?: InputMaybe<StringFilterInput>;
  platform?: InputMaybe<ObjectIdFilterInput>;
  referrer?: InputMaybe<ObjectIdFilterInput>;
  serialCode?: InputMaybe<StringFilterInput>;
  session?: InputMaybe<ObjectIdFilterInput>;
  session__domain?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<BetRecordStatusFilterInput>;
  vendorRoundId?: InputMaybe<StringFilterInput>;
};

export enum BetRecordSortField {
  DateTimeCreated = 'DATE_TIME_CREATED',
  DateTimeSettled = 'DATE_TIME_SETTLED'
}

export enum BetRecordStatus {
  Cancelled = 'CANCELLED',
  Settled = 'SETTLED',
  Started = 'STARTED'
}

export type BetRecordStatusFilterInput = {
  equal?: InputMaybe<BetRecordStatus>;
  in?: InputMaybe<Array<BetRecordStatus>>;
  notEqual?: InputMaybe<BetRecordStatus>;
  notIn?: InputMaybe<Array<BetRecordStatus>>;
};

export type BetSummary = {
  __typename?: 'BetSummary';
  grossGamingRevenue: Scalars['Decimal']['output'];
  totalBet: Scalars['Decimal']['output'];
  totalJackpotContribution: Scalars['Decimal']['output'];
  totalJackpotPayout: Scalars['Decimal']['output'];
  totalPayout: Scalars['Decimal']['output'];
};

export type BetSummaryFilterInput = {
  gameProvider?: InputMaybe<GameProviderFilterInput>;
  gameType?: InputMaybe<GameTypeFilterInput>;
};

export type Bonus = Node & {
  __typename?: 'Bonus';
  amount: Scalars['Decimal']['output'];
  balance: Scalars['Decimal']['output'];
  currentTurnoverRequirementContribution: Scalars['Decimal']['output'];
  currentTurnoverRequirementContributionPercentage: Scalars['Decimal']['output'];
  dateTimeClosed?: Maybe<Scalars['DateTime']['output']>;
  dateTimeCreated: Scalars['DateTime']['output'];
  dateTimeLastUpdated: Scalars['DateTime']['output'];
  deposit?: Maybe<DepositRecord>;
  hasUnsettledGameRounds: Scalars['Boolean']['output'];
  id: Scalars['ObjectId']['output'];
  member?: Maybe<Member>;
  promo: Promo;
  status: BonusStatus;
  turnoverRequirement: Scalars['Decimal']['output'];
};

export type BonusAggregates = {
  __typename?: 'BonusAggregates';
  amount: Scalars['Decimal']['output'];
  balance: Scalars['Decimal']['output'];
};

export type BonusFilterInput = {
  amount?: InputMaybe<DecimalFilterInput>;
  balance?: InputMaybe<DecimalFilterInput>;
  currentTurnoverRequirementContribution?: InputMaybe<DecimalFilterInput>;
  currentTurnoverRequirementContributionPercentage?: InputMaybe<DecimalFilterInput>;
  dateTimeClosed?: InputMaybe<DateTimeFilterInput>;
  dateTimeCreated?: InputMaybe<DateTimeFilterInput>;
  hasUnsettledGameRounds?: InputMaybe<BooleanFilterInput>;
  member?: InputMaybe<ObjectIdFilterInput>;
  promo?: InputMaybe<ObjectIdFilterInput>;
  promo__type?: InputMaybe<PromoTypeFilterInput>;
  status?: InputMaybe<BonusStatusFilterInput>;
  turnoverRequirement?: InputMaybe<DecimalFilterInput>;
};

export enum BonusStatus {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED',
  Cleared = 'CLEARED',
  /** @deprecated No longer supported */
  Closed = 'CLOSED',
  Expired = 'EXPIRED',
  ZeroedOut = 'ZEROED_OUT'
}

export type BonusStatusFilterInput = {
  equal?: InputMaybe<BonusStatus>;
  in?: InputMaybe<Array<BonusStatus>>;
  notEqual?: InputMaybe<BonusStatus>;
  notIn?: InputMaybe<Array<BonusStatus>>;
};

export type BooleanFilter = {
  __typename?: 'BooleanFilter';
  equal?: Maybe<Scalars['Boolean']['output']>;
  in?: Maybe<Array<Scalars['Boolean']['output']>>;
  notEqual?: Maybe<Scalars['Boolean']['output']>;
  notIn?: Maybe<Array<Scalars['Boolean']['output']>>;
};

export type BooleanFilterInput = {
  equal?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  notEqual?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

export type CabinetSiteMachine = {
  __typename?: 'CabinetSiteMachine';
  id: Scalars['ObjectId']['output'];
  name: Scalars['String']['output'];
};

export type CabinetSiteMachineMember = {
  __typename?: 'CabinetSiteMachineMember';
  gameCategory: GameCategory;
  id: Scalars['ObjectId']['output'];
  name: Scalars['String']['output'];
  platform: CabinetSiteMachineMemberPlatform;
};

export type CabinetSiteMachineMemberPlatform = {
  __typename?: 'CabinetSiteMachineMemberPlatform';
  code: Scalars['String']['output'];
  id: Scalars['ObjectId']['output'];
  name: Scalars['String']['output'];
};

export type CabinetSiteSessionReport = {
  __typename?: 'CabinetSiteSessionReport';
  endDateTime: Scalars['DateTime']['output'];
  gameCategory: GameCategory;
  grossGamingRevenue: Scalars['Decimal']['output'];
  items: Array<CabinetSiteSessionReportItem>;
  netDeposit: Scalars['Decimal']['output'];
  startDateTime: Scalars['DateTime']['output'];
  totalBet: Scalars['Decimal']['output'];
  totalDeposit: Scalars['Decimal']['output'];
  totalJackpotContribution: Scalars['Decimal']['output'];
  totalJackpotPayout: Scalars['Decimal']['output'];
  totalPayout: Scalars['Decimal']['output'];
  totalWithdrawal: Scalars['Decimal']['output'];
  totalWithdrawalConfirmed: Scalars['Decimal']['output'];
  totalWithdrawalUnconfirmed: Scalars['Decimal']['output'];
};

export type CabinetSiteSessionReportItem = {
  __typename?: 'CabinetSiteSessionReportItem';
  cabinetSiteMachine: CabinetSiteMachine;
  grossGamingRevenue: Scalars['Decimal']['output'];
  member: CabinetSiteMachineMember;
  netDeposit: Scalars['Decimal']['output'];
  totalBet: Scalars['Decimal']['output'];
  totalDeposit: Scalars['Decimal']['output'];
  totalJackpotContribution: Scalars['Decimal']['output'];
  totalJackpotPayout: Scalars['Decimal']['output'];
  totalPayout: Scalars['Decimal']['output'];
  totalWithdrawal: Scalars['Decimal']['output'];
  totalWithdrawalConfirmed: Scalars['Decimal']['output'];
  totalWithdrawalUnconfirmed: Scalars['Decimal']['output'];
};

export type CabinetWithdrawalRecord = Node & WithdrawalRecord & {
  __typename?: 'CabinetWithdrawalRecord';
  amount: Scalars['Decimal']['output'];
  dateTimeConfirmed?: Maybe<Scalars['DateTime']['output']>;
  dateTimeCreated: Scalars['DateTime']['output'];
  dateTimeLastUpdated: Scalars['DateTime']['output'];
  domain?: Maybe<Scalars['String']['output']>;
  error?: Maybe<WithdrawalError>;
  fee: Scalars['Decimal']['output'];
  id: Scalars['ObjectId']['output'];
  member?: Maybe<Member>;
  netAmount: Scalars['Decimal']['output'];
  platform?: Maybe<Platform>;
  reference?: Maybe<Scalars['String']['output']>;
  referrer?: Maybe<Member>;
  remarks?: Maybe<Scalars['String']['output']>;
  status: WithdrawalStatus;
  type: WithdrawalType;
  withdrawal: Scalars['ObjectId']['output'];
  withdrawalNumber?: Maybe<Scalars['String']['output']>;
};

export type CancelExportInput = {
  id: Scalars['ExportObjectId']['input'];
};

export type Cashback = Node & {
  __typename?: 'Cashback';
  activationEndDateTime?: Maybe<Scalars['DateTime']['output']>;
  activationStartDateTime?: Maybe<Scalars['DateTime']['output']>;
  activeWithBonus: Scalars['Boolean']['output'];
  banner?: Maybe<File>;
  cashbackPercentage?: Maybe<Scalars['Decimal']['output']>;
  cashbackPercentagePerMemberLevel?: Maybe<Scalars['JSON']['output']>;
  dateTimeCreated: Scalars['DateTime']['output'];
  dateTimeLastUpdated: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  gameProviderSettings?: Maybe<CashbackGameProviderSettings>;
  id: Scalars['ObjectId']['output'];
  maximumMonthlyCashback?: Maybe<Scalars['Decimal']['output']>;
  minimumCashback?: Maybe<Scalars['Decimal']['output']>;
  name: Scalars['String']['output'];
  status: CashbackStatus;
  totalBet: Scalars['Decimal']['output'];
  totalBonus: Scalars['Decimal']['output'];
  totalCashbackAmount: Scalars['Decimal']['output'];
  totalClaimedBonus: Scalars['Decimal']['output'];
  totalUnclaimedBonus: Scalars['Decimal']['output'];
  turnoverContributionPercentagePerGameProvider: Scalars['JSON']['output'];
};


export type CashbackGameProviderSettingsArgs = {
  gameProvider: GameProvider;
};


export type CashbackTotalBetArgs = {
  month: Scalars['Month']['input'];
};


export type CashbackTotalBonusArgs = {
  month: Scalars['Month']['input'];
};


export type CashbackTotalClaimedBonusArgs = {
  month: Scalars['Month']['input'];
};


export type CashbackTotalUnclaimedBonusArgs = {
  month: Scalars['Month']['input'];
};

export type CashbackAggregates = {
  __typename?: 'CashbackAggregates';
  totalBet: Scalars['Decimal']['output'];
  totalBonus: Scalars['Decimal']['output'];
  totalClaimedBonus: Scalars['Decimal']['output'];
  totalUnclaimedBonus: Scalars['Decimal']['output'];
};

export type CashbackBonus = Node & {
  __typename?: 'CashbackBonus';
  balance: Scalars['Decimal']['output'];
  bet: Scalars['Decimal']['output'];
  cashback: Cashback;
  claimed: Scalars['Decimal']['output'];
  dateTimeClosed?: Maybe<Scalars['DateTime']['output']>;
  dateTimeCreated: Scalars['DateTime']['output'];
  id: Scalars['ObjectId']['output'];
  status: CashbackBonusStatus;
  total: Scalars['Decimal']['output'];
};

export enum CashbackBonusCursor {
  Balance = 'BALANCE',
  Bet = 'BET',
  Claimed = 'CLAIMED',
  Total = 'TOTAL'
}

export type CashbackBonusFilterInput = {
  cashback?: InputMaybe<ObjectIdFilterInput>;
  status?: InputMaybe<CashbackBonusStatus>;
};

export type CashbackBonusSortInput = {
  cursor?: InputMaybe<CashbackBonusCursor>;
  order: SortOrder;
};

export enum CashbackBonusStatus {
  Closed = 'CLOSED',
  Inactive = 'INACTIVE',
  Open = 'OPEN'
}

export type CashbackFilterInput = {
  id?: InputMaybe<ObjectIdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<CashbackStatusFilterInput>;
};

export type CashbackGameProviderSettings = {
  __typename?: 'CashbackGameProviderSettings';
  maximum?: Maybe<Scalars['Decimal']['output']>;
  minimumTurnoverRequirement?: Maybe<Scalars['Decimal']['output']>;
};

export enum CashbackStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type CashbackStatusFilterInput = {
  equal?: InputMaybe<CashbackStatus>;
  in?: InputMaybe<Array<CashbackStatus>>;
  notEqual?: InputMaybe<CashbackStatus>;
  notIn?: InputMaybe<Array<CashbackStatus>>;
};

export type ChartData = {
  __typename?: 'ChartData';
  changePercentage: Scalars['Decimal']['output'];
  datapoints: Array<DataPoint>;
  value: Scalars['Decimal']['output'];
};

export type Cohort = {
  __typename?: 'Cohort';
  datapoints: Array<CohortDatapoint>;
  date: Scalars['Date']['output'];
  firstDepositsCount: Scalars['Int']['output'];
  firstDepositsCountPercentage: Scalars['Decimal']['output'];
  membersCount: Scalars['Int']['output'];
};

export type CohortDatapoint = {
  __typename?: 'CohortDatapoint';
  percentage: Scalars['Decimal']['output'];
  value: Scalars['Int']['output'];
};

export enum CohortInterval {
  Daily = 'DAILY',
  Weekly = 'WEEKLY'
}

export type CohortsAnalysisData = {
  __typename?: 'CohortsAnalysisData';
  cohorts: Array<Cohort>;
};

export type Connection = {
  __typename?: 'Connection';
  edges?: Maybe<Array<Edge>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CreateBetRecordExportError = ExportLimitExceededError;

export type CreateBetRecordExportInput = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  filter?: InputMaybe<BetRecordFilterInput>;
  id: Scalars['ExportObjectId']['input'];
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateBonusExportError = ExportLimitExceededError;

export type CreateBonusExportInput = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  filter?: InputMaybe<BonusFilterInput>;
  id: Scalars['ExportObjectId']['input'];
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateDailyNetDepositReportExportError = ExportLimitExceededError;

export type CreateDailyNetDepositReportExportFilterInput = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};

export type CreateDailyNetDepositReportExportInput = {
  filter?: InputMaybe<CreateDailyNetDepositReportExportFilterInput>;
  id: Scalars['ExportObjectId']['input'];
};

export type CreateDepositRecordExportError = ExportLimitExceededError;

export type CreateDepositRecordExportInput = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  filter?: InputMaybe<DepositRecordFilterInput>;
  id: Scalars['ExportObjectId']['input'];
  sort?: InputMaybe<SortOrder>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateGgrRecordExportError = ExportLimitExceededError;

export type CreateGgrRecordExportInput = {
  endDate: Scalars['Date']['input'];
  id: Scalars['ExportObjectId']['input'];
  sort?: InputMaybe<SortOrder>;
  startDate: Scalars['Date']['input'];
};

export type CreateInFlowRecordExportError = ExportLimitExceededError;

export type CreateInFlowRecordExportInput = {
  filter?: InputMaybe<InflowRecordFilterInput>;
  id: Scalars['ExportObjectId']['input'];
};

export type CreateJackpotPayoutExportError = ExportLimitExceededError;

export type CreateJackpotPayoutExportInput = {
  filter?: InputMaybe<JackpotPayoutFilterInput>;
  id: Scalars['ExportObjectId']['input'];
};

export type CreateMemberActivityRecordExportError = ExportLimitExceededError;

export type CreateMemberActivityRecordExportInput = {
  filter?: InputMaybe<MemberActivityFilterInput>;
  id: Scalars['ExportObjectId']['input'];
  sort?: InputMaybe<SortOrder>;
};

export type CreateMemberDailyNetDepositRecordExportError = ExportLimitExceededError;

export type CreateMemberDailyNetDepositRecordExportFilterInput = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};

export type CreateMemberDailyNetDepositRecordExportInput = {
  filter?: InputMaybe<CreateMemberDailyNetDepositRecordExportFilterInput>;
  id: Scalars['ExportObjectId']['input'];
};

export type CreateMemberExportInput = {
  filter?: InputMaybe<MemberFilterInput>;
  id: Scalars['ExportObjectId']['input'];
  sort?: InputMaybe<SortOrder>;
};

export type CreateMemberGroupMemberExportError = ExportLimitExceededError;

export type CreateMemberGroupMemberExportInput = {
  filter?: InputMaybe<MemberGroupMemberFilterInput>;
  id: Scalars['ExportObjectId']['input'];
  memberGroup?: InputMaybe<Scalars['ObjectId']['input']>;
};

export type CreateMemberRecordExportError = ExportLimitExceededError;

export type CreateOperatorActivityRecordExportError = ExportLimitExceededError;

export type CreateOperatorActivityRecordExportInput = {
  filter?: InputMaybe<OperatorActivityFilterInput>;
  id: Scalars['ExportObjectId']['input'];
  sort?: InputMaybe<SortOrder>;
};

export type CreatePromosExportError = ExportLimitExceededError;

export type CreatePromosExportInput = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  filter?: InputMaybe<PromoFilterInput>;
  id: Scalars['ExportObjectId']['input'];
  sort?: InputMaybe<SortOrder>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateReferralExportError = ExportLimitExceededError;

export type CreateReferralExportInput = {
  filter?: InputMaybe<ReferralFilterInput>;
  id: Scalars['ExportObjectId']['input'];
};

export type CreateTournamentPayoutExportError = ExportLimitExceededError;

export type CreateTournamentPayoutExportInput = {
  filter?: InputMaybe<TournamentPayoutFilterInput>;
  id: Scalars['ExportObjectId']['input'];
};

export type CreateTransactionRecordExportError = ExportLimitExceededError;

export type CreateTransactionRecordExportInput = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  filter?: InputMaybe<TransactionRecordFilter>;
  id: Scalars['ExportObjectId']['input'];
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateWithdrawalRecordExportError = ExportLimitExceededError;

export type CreateWithdrawalRecordExportInput = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  filter?: InputMaybe<WithdrawalRecordFilterInput>;
  id: Scalars['ExportObjectId']['input'];
  sort?: InputMaybe<SortOrder>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Currency {
  Idr = 'IDR',
  Inr = 'INR',
  Myr = 'MYR',
  Php = 'PHP',
  Usd = 'USD',
  Virtual = 'VIRTUAL'
}

export type DailyNetDepositRecord = Node & {
  __typename?: 'DailyNetDepositRecord';
  date: Scalars['Date']['output'];
  id: Scalars['ObjectId']['output'];
  memberDailyNetDepositRecords: Connection;
  totalDeposit: Scalars['Decimal']['output'];
  totalDepositChangePercentage: Scalars['Decimal']['output'];
  totalNetDeposit: Scalars['Decimal']['output'];
  totalNetDepositChangePercentage: Scalars['Decimal']['output'];
  totalWithdrawal: Scalars['Decimal']['output'];
  totalWithdrawalChangePercentage: Scalars['Decimal']['output'];
};


export type DailyNetDepositRecordMemberDailyNetDepositRecordsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type DailyNetDepositReport = {
  __typename?: 'DailyNetDepositReport';
  records: Array<DailyNetDepositRecord>;
  totalDeposit: Scalars['Decimal']['output'];
  totalNetDeposit: Scalars['Decimal']['output'];
  totalWithdrawal: Scalars['Decimal']['output'];
};

export type DataPoint = {
  __typename?: 'DataPoint';
  timestamp: Scalars['DateTime']['output'];
  value: Scalars['Decimal']['output'];
};

export type DateFilterInput = {
  equal?: InputMaybe<Scalars['Date']['input']>;
  greaterThan?: InputMaybe<Scalars['Date']['input']>;
  greaterThanOrEqual?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  lesserThan?: InputMaybe<Scalars['Date']['input']>;
  lesserThanOrEqual?: InputMaybe<Scalars['Date']['input']>;
  notEqual?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<Scalars['Date']['input']>>;
};

export type DateTimeFilter = {
  __typename?: 'DateTimeFilter';
  equal?: Maybe<Scalars['DateTime']['output']>;
  greaterThan?: Maybe<Scalars['DateTime']['output']>;
  greaterThanOrEqual?: Maybe<Scalars['DateTime']['output']>;
  in?: Maybe<Array<Scalars['DateTime']['output']>>;
  lesserThan?: Maybe<Scalars['DateTime']['output']>;
  lesserThanOrEqual?: Maybe<Scalars['DateTime']['output']>;
  notEqual?: Maybe<Scalars['DateTime']['output']>;
  notIn?: Maybe<Array<Scalars['DateTime']['output']>>;
};

export type DateTimeFilterInput = {
  equal?: InputMaybe<Scalars['DateTime']['input']>;
  greaterThan?: InputMaybe<Scalars['DateTime']['input']>;
  greaterThanOrEqual?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lesserThan?: InputMaybe<Scalars['DateTime']['input']>;
  lesserThanOrEqual?: InputMaybe<Scalars['DateTime']['input']>;
  notEqual?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DecimalFilter = {
  __typename?: 'DecimalFilter';
  greaterThan?: Maybe<Scalars['Decimal']['output']>;
  greaterThanOrEqual?: Maybe<Scalars['Decimal']['output']>;
  lesserThan?: Maybe<Scalars['Decimal']['output']>;
  lesserThanOrEqual?: Maybe<Scalars['Decimal']['output']>;
};

export type DecimalFilterInput = {
  equal?: InputMaybe<Scalars['Decimal']['input']>;
  greaterThan?: InputMaybe<Scalars['Decimal']['input']>;
  greaterThanOrEqual?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lesserThan?: InputMaybe<Scalars['Decimal']['input']>;
  lesserThanOrEqual?: InputMaybe<Scalars['Decimal']['input']>;
  notEqual?: InputMaybe<Scalars['Decimal']['input']>;
  notIn?: InputMaybe<Array<Scalars['Decimal']['input']>>;
};

export enum DepositError {
  /** @deprecated No longer supported */
  DepositCreationRequestFailed = 'DEPOSIT_CREATION_REQUEST_FAILED',
  /** @deprecated No longer supported */
  DepositExecutionRequestFailed = 'DEPOSIT_EXECUTION_REQUEST_FAILED',
  /** @deprecated No longer supported */
  Expired = 'EXPIRED',
  /** @deprecated No longer supported */
  FailedToProcessPayment = 'FAILED_TO_PROCESS_PAYMENT',
  /** @deprecated Use INSUFFICIENT_FUNDS instead */
  InsufficientBalance = 'INSUFFICIENT_BALANCE',
  InsufficientFunds = 'INSUFFICIENT_FUNDS',
  /** @deprecated No longer supported */
  MinimumDepositAmountNotMet = 'MINIMUM_DEPOSIT_AMOUNT_NOT_MET',
  /** @deprecated No longer supported */
  RequestSessionExpired = 'REQUEST_SESSION_EXPIRED',
  /** @deprecated No longer supported */
  RequestTimeout = 'REQUEST_TIMEOUT',
  /** @deprecated No longer supported */
  SystemCancellation = 'SYSTEM_CANCELLATION',
  SystemError = 'SYSTEM_ERROR',
  /** @deprecated No longer supported */
  UnexpectedError = 'UNEXPECTED_ERROR',
  /** @deprecated No longer supported */
  Untouched = 'UNTOUCHED'
}

export type DepositPromo = Node & Promo & {
  __typename?: 'DepositPromo';
  activationEndDateTime: Scalars['DateTime']['output'];
  activationStartDateTime: Scalars['DateTime']['output'];
  activeBonusesCount: Scalars['Int']['output'];
  banner?: Maybe<File>;
  bonusConfigurationPerMemberLevel?: Maybe<Scalars['JSON']['output']>;
  bonusesCount: Scalars['Int']['output'];
  cancelledBonusesCount: Scalars['Int']['output'];
  clearedBonusesCount: Scalars['Int']['output'];
  closedBonusesCount: Scalars['Int']['output'];
  closedBonusesCountPercentage: Scalars['Decimal']['output'];
  dateTimeClosed?: Maybe<Scalars['DateTime']['output']>;
  dateTimeCreated: Scalars['DateTime']['output'];
  dateTimeLastUpdated: Scalars['DateTime']['output'];
  daysToClear: Scalars['Int']['output'];
  depositBonusAmountPercentage?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  depositBonusAmountPercentagePerMemberLevel?: Maybe<Scalars['JSON']['output']>;
  depositPromoActivation: DepositPromoActivation;
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  enabledGameProviders: Array<GameProvider>;
  /** @deprecated No longer supported */
  enrolledMembersCount: Scalars['Int']['output'];
  expiredBonusesCount: Scalars['Int']['output'];
  id: Scalars['ObjectId']['output'];
  maximumBonusAmount?: Maybe<Scalars['Decimal']['output']>;
  maximumDepositAmount?: Maybe<Scalars['Decimal']['output']>;
  memberGroups?: Maybe<Array<Maybe<MemberGroup>>>;
  minimumDepositAmount?: Maybe<Scalars['Decimal']['output']>;
  minimumTicketOddFactorPerSportsGameProvider: Scalars['JSON']['output'];
  name: Scalars['String']['output'];
  status: PromoStatus;
  /** @deprecated use `totalBonusBalance` */
  totalActiveBonus: Scalars['Decimal']['output'];
  totalBet: Scalars['Decimal']['output'];
  totalBonus: Scalars['Decimal']['output'];
  /** @deprecated use `totalBonusCashedOut` */
  totalBonusAwarded: Scalars['Decimal']['output'];
  totalBonusBalance: Scalars['Decimal']['output'];
  totalBonusCashedOut: Scalars['Decimal']['output'];
  totalDeposit: Scalars['Decimal']['output'];
  /** @deprecated use `totalBet` */
  totalTurnover: Scalars['Decimal']['output'];
  turnoverRequirementContributionPercentagePerGameProvider: Scalars['JSON']['output'];
  turnoverRequirementMultiplier?: Maybe<Scalars['Int']['output']>;
  turnoverRequirementType: TurnoverRequirementType;
  type: PromoType;
  zeroOutThreshold: Scalars['Decimal']['output'];
  zeroedOutBonusesCount: Scalars['Int']['output'];
};

export enum DepositPromoActivation {
  AnyDeposit = 'ANY_DEPOSIT',
  FirstDeposit = 'FIRST_DEPOSIT'
}

export type DepositRecord = Node & {
  __typename?: 'DepositRecord';
  amount: Scalars['Decimal']['output'];
  dateTimeConfirmed?: Maybe<Scalars['DateTime']['output']>;
  dateTimeCreated: Scalars['DateTime']['output'];
  dateTimeLastUpdated: Scalars['DateTime']['output'];
  deposit: Scalars['ObjectId']['output'];
  depositNumber?: Maybe<Scalars['String']['output']>;
  domain?: Maybe<Scalars['String']['output']>;
  error?: Maybe<DepositError>;
  fee: Scalars['Decimal']['output'];
  id: Scalars['ObjectId']['output'];
  manualConfirmation?: Maybe<Scalars['Boolean']['output']>;
  member?: Maybe<Member>;
  netAmount: Scalars['Decimal']['output'];
  platform?: Maybe<Platform>;
  reference?: Maybe<Scalars['String']['output']>;
  referenceImage?: Maybe<Scalars['ObjectId']['output']>;
  referrer?: Maybe<Member>;
  remarks?: Maybe<Scalars['String']['output']>;
  serialCode: Scalars['String']['output'];
  status: DepositStatus;
  type: DepositType;
};

export type DepositRecordAggregates = {
  __typename?: 'DepositRecordAggregates';
  amount: Scalars['Decimal']['output'];
  fee: Scalars['Decimal']['output'];
  netDeposit: Scalars['Decimal']['output'];
};

export type DepositRecordFilterInput = {
  dateTimeConfirmed?: InputMaybe<DateTimeFilterInput>;
  dateTimeCreated?: InputMaybe<DateTimeFilterInput>;
  dateTimeLastUpdated?: InputMaybe<DateTimeFilterInput>;
  deposit?: InputMaybe<ObjectIdFilterInput>;
  depositNumber?: InputMaybe<StringFilterInput>;
  domain?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<ObjectIdFilterInput>;
  member?: InputMaybe<ObjectIdFilterInput>;
  member__domain?: InputMaybe<StringFilterInput>;
  member__name?: InputMaybe<StringFilterInput>;
  numeric?: InputMaybe<IntFilterInput>;
  platform?: InputMaybe<ObjectIdFilterInput>;
  reference?: InputMaybe<StringFilterInput>;
  referrer?: InputMaybe<ObjectIdFilterInput>;
  status?: InputMaybe<DepositRecordStatusFilterInput>;
  type?: InputMaybe<DepositRecordTypeFilterInput>;
};

export type DepositRecordStatusFilterInput = {
  equal?: InputMaybe<DepositStatus>;
  in?: InputMaybe<Array<DepositStatus>>;
  notEqual?: InputMaybe<DepositStatus>;
  notIn?: InputMaybe<Array<DepositStatus>>;
};

export type DepositRecordTypeFilterInput = {
  equal?: InputMaybe<DepositType>;
  in?: InputMaybe<Array<DepositType>>;
  notEqual?: InputMaybe<DepositType>;
  notIn?: InputMaybe<Array<DepositType>>;
};

export enum DepositStatus {
  Accepted = 'ACCEPTED',
  Approved = 'APPROVED',
  Cancelled = 'CANCELLED',
  Confirmed = 'CONFIRMED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export enum DepositType {
  AioGcash = 'AIO_GCASH',
  Bank = 'BANK',
  CabinetDeposit = 'CABINET_DEPOSIT',
  Gcash = 'GCASH',
  GcashDirectWebpay = 'GCASH_DIRECT_WEBPAY',
  LibanganPayIn = 'LIBANGAN_PAY_IN',
  Manual = 'MANUAL',
  ManualBank = 'MANUAL_BANK',
  ManualUpi = 'MANUAL_UPI',
  Maya = 'MAYA',
  MayaApp = 'MAYA_APP',
  OnlineBank = 'ONLINE_BANK',
  PisopayCheckout = 'PISOPAY_CHECKOUT',
  /** @deprecated No longer supported */
  PisoPayCheckout = 'PISO_PAY_CHECKOUT',
  QrPh = 'QR_PH'
}

export type Edge = {
  __typename?: 'Edge';
  cursor: Scalars['Cursor']['output'];
  node: Node;
};

export type EmailAddressFilter = {
  __typename?: 'EmailAddressFilter';
  equal?: Maybe<Scalars['EmailAddress']['output']>;
  in?: Maybe<Array<Scalars['EmailAddress']['output']>>;
  notEqual?: Maybe<Scalars['EmailAddress']['output']>;
  notIn?: Maybe<Array<Scalars['EmailAddress']['output']>>;
};

export type EmailAddressFilterInput = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equal?: InputMaybe<Scalars['EmailAddress']['input']>;
  in?: InputMaybe<Array<Scalars['EmailAddress']['input']>>;
  notEqual?: InputMaybe<Scalars['EmailAddress']['input']>;
  notIn?: InputMaybe<Array<Scalars['EmailAddress']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Error = {
  message: Scalars['String']['output'];
};

export type Export = Node & {
  __typename?: 'Export';
  dateTimeCreated: Scalars['DateTime']['output'];
  dateTimeLastUpdated: Scalars['DateTime']['output'];
  id: Scalars['ObjectId']['output'];
  name: Scalars['String']['output'];
  progressPercentage: Scalars['Decimal']['output'];
  status: ExportStatus;
  type: ExportType;
  url?: Maybe<Scalars['URL']['output']>;
};

export type ExportLimitExceededError = Error & {
  __typename?: 'ExportLimitExceededError';
  message: Scalars['String']['output'];
};

export enum ExportStatus {
  Cancelled = 'CANCELLED',
  Done = 'DONE',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export enum ExportType {
  BetRecord = 'BET_RECORD',
  Bonus = 'BONUS',
  DailyNetDepositReport = 'DAILY_NET_DEPOSIT_REPORT',
  DepositRecord = 'DEPOSIT_RECORD',
  GameCategoryGrossGamingRevenueRecord = 'GAME_CATEGORY_GROSS_GAMING_REVENUE_RECORD',
  GameProviderGrossGamingRevenueRecord = 'GAME_PROVIDER_GROSS_GAMING_REVENUE_RECORD',
  GameTypeGrossGamingRevenueRecord = 'GAME_TYPE_GROSS_GAMING_REVENUE_RECORD',
  InflowRecord = 'INFLOW_RECORD',
  JackpotPayout = 'JACKPOT_PAYOUT',
  Member = 'MEMBER',
  MemberActivityRecord = 'MEMBER_ACTIVITY_RECORD',
  MemberDailyNetDepositReport = 'MEMBER_DAILY_NET_DEPOSIT_REPORT',
  MemberGroupMember = 'MEMBER_GROUP_MEMBER',
  OperatorActivityRecord = 'OPERATOR_ACTIVITY_RECORD',
  Promo = 'PROMO',
  Referral = 'REFERRAL',
  TournamentPayout = 'TOURNAMENT_PAYOUT',
  TransactionRecord = 'TRANSACTION_RECORD',
  WithdrawalRecord = 'WITHDRAWAL_RECORD'
}

export type File = Node & {
  __typename?: 'File';
  id: Scalars['ObjectId']['output'];
  mimeType: Scalars['String']['output'];
  url?: Maybe<Scalars['URL']['output']>;
};

export enum FileStatus {
  Ready = 'READY',
  Uploading = 'UPLOADING'
}

export type FloatFilterInput = {
  equal?: InputMaybe<Scalars['Date']['input']>;
  greaterThan?: InputMaybe<Scalars['Date']['input']>;
  greaterThanOrEqual?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  lesserThan?: InputMaybe<Scalars['Date']['input']>;
  lesserThanOrEqual?: InputMaybe<Scalars['Date']['input']>;
  notEqual?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<Scalars['Date']['input']>>;
};

export type GCashWithdrawalRecord = Node & WithdrawalRecord & {
  __typename?: 'GCashWithdrawalRecord';
  amount: Scalars['Decimal']['output'];
  dateTimeConfirmed?: Maybe<Scalars['DateTime']['output']>;
  dateTimeCreated: Scalars['DateTime']['output'];
  dateTimeLastUpdated: Scalars['DateTime']['output'];
  domain?: Maybe<Scalars['String']['output']>;
  error?: Maybe<WithdrawalError>;
  fee: Scalars['Decimal']['output'];
  id: Scalars['ObjectId']['output'];
  member?: Maybe<Member>;
  netAmount: Scalars['Decimal']['output'];
  platform?: Maybe<Platform>;
  recipientMobileNumber?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  referrer?: Maybe<Member>;
  remarks?: Maybe<Scalars['String']['output']>;
  status: WithdrawalStatus;
  type: WithdrawalType;
  withdrawal: Scalars['ObjectId']['output'];
  withdrawalNumber?: Maybe<Scalars['String']['output']>;
};

export type Game = Node & {
  __typename?: 'Game';
  external: Scalars['String']['output'];
  /** @deprecated No longer supported */
  externalId: Scalars['String']['output'];
  id: Scalars['ObjectId']['output'];
  name: Scalars['String']['output'];
  provider: GameProvider;
  type: GameType;
};

export enum GameCategory {
  Ebingo = 'EBINGO',
  Ecasino = 'ECASINO',
  Numeric = 'NUMERIC',
  Specialty = 'SPECIALTY',
  Sports = 'SPORTS'
}

export enum GameCursor {
  Bets_3D = 'BETS_3D',
  Bets_7D = 'BETS_7D',
  Bets_30D = 'BETS_30D',
  TotalBet_3D = 'TOTAL_BET_3D',
  TotalBet_7D = 'TOTAL_BET_7D',
  TotalBet_30D = 'TOTAL_BET_30D',
  TotalPayout_3D = 'TOTAL_PAYOUT_3D',
  TotalPayout_7D = 'TOTAL_PAYOUT_7D',
  TotalPayout_30D = 'TOTAL_PAYOUT_30D',
  TotalWinloss_3D = 'TOTAL_WINLOSS_3D',
  TotalWinloss_7D = 'TOTAL_WINLOSS_7D',
  TotalWinloss_30D = 'TOTAL_WINLOSS_30D'
}

export type GameFilter = {
  external?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<ObjectIdFilterInput>;
  provider?: InputMaybe<GameProviderFilterInput>;
  type?: InputMaybe<GameTypeFilterInput>;
};

export enum GameProvider {
  Alize = 'ALIZE',
  Bgaming = 'BGAMING',
  BigTimeGaming = 'BIG_TIME_GAMING',
  Bng = 'BNG',
  Booongo = 'BOOONGO',
  Bti = 'BTI',
  Cq9 = 'CQ9',
  Darwin = 'DARWIN',
  Dg = 'DG',
  Digitain = 'DIGITAIN',
  Drbingo = 'DRBINGO',
  E2E = 'E2E',
  Etengjue = 'ETENGJUE',
  Evolution = 'EVOLUTION',
  EvolutionNetent = 'EVOLUTION_NETENT',
  EvolutionRedtiger = 'EVOLUTION_REDTIGER',
  Evoplay = 'EVOPLAY',
  Ezugi = 'EZUGI',
  Fachai = 'FACHAI',
  Habanero = 'HABANERO',
  Hacksaw = 'HACKSAW',
  Hollywoodtv = 'HOLLYWOODTV',
  Jdb = 'JDB',
  Jdbgtf = 'JDBGTF',
  Jdbspribe = 'JDBSPRIBE',
  Jili = 'JILI',
  JiliBingo = 'JILI_BINGO',
  Joker = 'JOKER',
  Kingmaker = 'KINGMAKER',
  Kingmidas = 'KINGMIDAS',
  Mega2Spin = 'MEGA2SPIN',
  Megaball = 'MEGABALL',
  Microgaming = 'MICROGAMING',
  NoLimitCity = 'NO_LIMIT_CITY',
  OneapiEvolution = 'ONEAPI_EVOLUTION',
  Pgsoft = 'PGSOFT',
  Playtech = 'PLAYTECH',
  Pragmaticplay = 'PRAGMATICPLAY',
  Relaxgaming = 'RELAXGAMING',
  Rtg = 'RTG',
  Saba = 'SABA',
  Sagaming = 'SAGAMING',
  Spinix = 'SPINIX',
  Spribe = 'SPRIBE',
  Yellowbat = 'YELLOWBAT'
}

export type GameProviderFilterInput = {
  equal?: InputMaybe<GameProvider>;
  in?: InputMaybe<Array<GameProvider>>;
  notEqual?: InputMaybe<GameProvider>;
  notIn?: InputMaybe<Array<GameProvider>>;
};

export type GameRoundTransaction = Node & {
  __typename?: 'GameRoundTransaction';
  amount: Scalars['Decimal']['output'];
  dateTimeCreated: Scalars['DateTime']['output'];
  details: Array<KeyValuePair>;
  externalId: Scalars['String']['output'];
  id: Scalars['ObjectId']['output'];
  serialCode: Scalars['String']['output'];
  type: GameRoundTransactionType;
};

export enum GameRoundTransactionType {
  Bet = 'BET',
  Payout = 'PAYOUT'
}

export type GameSortInput = {
  cursor: GameCursor;
  order: SortOrder;
};

export enum GameStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export enum GameType {
  Arcade = 'ARCADE',
  Bingo = 'BINGO',
  /** @deprecated No longer supported */
  Card = 'CARD',
  /** @deprecated No longer supported */
  Casino = 'CASINO',
  /** @deprecated No longer supported */
  Dozer = 'DOZER',
  Fishing = 'FISHING',
  /** @deprecated Use ARCADE instead */
  Games = 'GAMES',
  Live = 'LIVE',
  /** @deprecated No longer supported */
  Lobby = 'LOBBY',
  /** @deprecated No longer supported */
  Lotto = 'LOTTO',
  Numeric = 'NUMERIC',
  /** @deprecated No longer supported */
  Numerical = 'NUMERICAL',
  /** @deprecated No longer supported */
  Others = 'OTHERS',
  /** @deprecated No longer supported */
  Slot = 'SLOT',
  Slots = 'SLOTS',
  Specialty = 'SPECIALTY',
  Sports = 'SPORTS',
  Table = 'TABLE'
}

export type GameTypeFilterInput = {
  equal?: InputMaybe<GameType>;
  in?: InputMaybe<Array<GameType>>;
  notEqual?: InputMaybe<GameType>;
  notIn?: InputMaybe<Array<GameType>>;
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE'
}

export type GenderFilterInput = {
  equal?: InputMaybe<Gender>;
  notEqual?: InputMaybe<Gender>;
};

export type GenericPromo = Node & Promo & {
  __typename?: 'GenericPromo';
  activationEndDateTime?: Maybe<Scalars['DateTime']['output']>;
  activationStartDateTime?: Maybe<Scalars['DateTime']['output']>;
  activeBonusesCount: Scalars['Int']['output'];
  banner?: Maybe<File>;
  baseTurnoverRequirement?: Maybe<Scalars['Decimal']['output']>;
  bonusAmount?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  bonusAmountPerMemberLevel?: Maybe<Scalars['JSON']['output']>;
  bonusesCount: Scalars['Int']['output'];
  cancelledBonusesCount: Scalars['Int']['output'];
  clearedBonusesCount: Scalars['Int']['output'];
  closedBonusesCount: Scalars['Int']['output'];
  closedBonusesCountPercentage: Scalars['Decimal']['output'];
  dateTimeClosed?: Maybe<Scalars['DateTime']['output']>;
  dateTimeCreated: Scalars['DateTime']['output'];
  dateTimeLastUpdated: Scalars['DateTime']['output'];
  daysToClear: Scalars['Int']['output'];
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  enabledGameProviders: Array<GameProvider>;
  /** @deprecated No longer supported */
  enrolledMembersCount: Scalars['Int']['output'];
  expiredBonusesCount: Scalars['Int']['output'];
  id: Scalars['ObjectId']['output'];
  minimumTicketOddFactorPerSportsGameProvider: Scalars['JSON']['output'];
  name: Scalars['String']['output'];
  status: PromoStatus;
  /** @deprecated use `totalBonusBalance` */
  totalActiveBonus: Scalars['Decimal']['output'];
  totalBet: Scalars['Decimal']['output'];
  totalBonus: Scalars['Decimal']['output'];
  /** @deprecated use `totalBonusCashedOut` */
  totalBonusAwarded: Scalars['Decimal']['output'];
  totalBonusBalance: Scalars['Decimal']['output'];
  totalBonusCashedOut: Scalars['Decimal']['output'];
  totalDeposit?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated use `totalBet` */
  totalTurnover: Scalars['Decimal']['output'];
  turnoverRequirementContributionPercentagePerGameProvider: Scalars['JSON']['output'];
  turnoverRequirementMultiplier?: Maybe<Scalars['Int']['output']>;
  turnoverRequirementType?: Maybe<TurnoverRequirementType>;
  type: PromoType;
  zeroOutThreshold: Scalars['Decimal']['output'];
  zeroedOutBonusesCount: Scalars['Int']['output'];
};

export type GrossGamingRevenueRecord = Node & {
  __typename?: 'GrossGamingRevenueRecord';
  amount: Scalars['Decimal']['output'];
  /** @deprecated No longer supported */
  amount__GAME_CATEGORY__BINGO?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  amount__GAME_CATEGORY__GAMES?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  amount__GAME_CATEGORY__LIVE?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  amount__GAME_CATEGORY__SPECIALTY?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  amount__GAME_CATEGORY__SPORTS?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  amount__GAME_CATEGORY__TABLE?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__ALIZE?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__BGAMING?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__BIG_TIME_GAMING?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__BNG?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__BOOONGO?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__BTI?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__CQ9?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__DARWIN?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__DG?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__DIGITAIN?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__DRBINGO?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__E2E?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__ETENGJUE?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__EVOLUTION?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__EVOLUTION_NETENT?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__EVOLUTION_REDTIGER?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__EVOPLAY?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__EZUGI?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__FACHAI?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__HABANERO?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__HACKSAW?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__HOLLYWOODTV?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__JDB?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__JDBGTF?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__JDBSPRIBE?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__JILI?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__JILI_BINGO?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__JOKER?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__KINGMIDAS?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__MEGA2SPIN?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__MEGABALL?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__MICROGAMING?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__NO_LIMIT_CITY?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__ONEAPI_EVOLUTION?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__PGSOFT?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__PLAYTECH?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__PRAGMATICPLAY?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__RELAXGAMING?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__RTG?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__SABA?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__SAGAMING?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__SPINIX?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__SPRIBE?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_PROVIDER__YELLOWBAT?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_TYPE__ARCADE?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_TYPE__BINGO?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_TYPE__FISHING?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated Use ARCADE instead */
  amount__GAME_TYPE__GAMES?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_TYPE__LIVE?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_TYPE__NUMERICAL?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_TYPE__SLOTS?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_TYPE__SPECIALTY?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_TYPE__SPORTS?: Maybe<Scalars['Decimal']['output']>;
  amount__GAME_TYPE__TABLE?: Maybe<Scalars['Decimal']['output']>;
  date: Scalars['Date']['output'];
  id: Scalars['ObjectId']['output'];
  jackpotContribution?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_CATEGORY__BINGO?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_CATEGORY__GAMES?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_CATEGORY__LIVE?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_CATEGORY__SPECIALTY?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_CATEGORY__SPORTS?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_CATEGORY__TABLE?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__ALIZE?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__BGAMING?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__BIG_TIME_GAMING?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__BNG?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__BOOONGO?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__BTI?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__CQ9?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__DARWIN?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__DG?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__DIGITAIN?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__DRBINGO?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__E2E?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__ETENGJUE?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__EVOLUTION?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__EVOLUTION_NETENT?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__EVOLUTION_REDTIGER?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__EVOPLAY?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__EZUGI?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__FACHAI?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__HABANERO?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__HACKSAW?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__HOLLYWOODTV?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__JDB?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__JDBGTF?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__JDBSPRIBE?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__JILI?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__JILI_BINGO?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__JOKER?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__KINGMIDAS?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__MEGA2SPIN?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__MEGABALL?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__MICROGAMING?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__NO_LIMIT_CITY?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__ONEAPI_EVOLUTION?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__PGSOFT?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__PLAYTECH?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__PRAGMATICPLAY?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__RELAXGAMING?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__RTG?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__SABA?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__SAGAMING?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__SPINIX?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__SPRIBE?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_PROVIDER__YELLOWBAT?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_TYPE__ARCADE?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_TYPE__BINGO?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  jackpotContribution__GAME_TYPE__CARD?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  jackpotContribution__GAME_TYPE__CASINO?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_TYPE__FISHING?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated Use ARCADE instead */
  jackpotContribution__GAME_TYPE__GAMES?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_TYPE__LIVE?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_TYPE__NUMERICAL?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  jackpotContribution__GAME_TYPE__OTHERS?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  jackpotContribution__GAME_TYPE__SLOT?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_TYPE__SLOTS?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_TYPE__SPECIALTY?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_TYPE__SPORTS?: Maybe<Scalars['Decimal']['output']>;
  jackpotContribution__GAME_TYPE__TABLE?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_CATEGORY__BINGO?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_CATEGORY__GAMES?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_CATEGORY__LIVE?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_CATEGORY__SPECIALTY?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_CATEGORY__SPORTS?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_CATEGORY__TABLE?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__ALIZE?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__BGAMING?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__BIG_TIME_GAMING?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__BNG?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__BOOONGO?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__BTI?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__CQ9?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__DARWIN?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__DG?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__DIGITAIN?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__DRBINGO?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__E2E?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__ETENGJUE?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__EVOLUTION?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__EVOLUTION_NETENT?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__EVOLUTION_REDTIGER?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__EVOPLAY?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__EZUGI?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__FACHAI?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__HABANERO?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__HACKSAW?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__HOLLYWOODTV?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__JDB?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__JDBGTF?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__JDBSPRIBE?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__JILI?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__JILI_BINGO?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__JOKER?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__KINGMIDAS?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__MEGA2SPIN?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__MEGABALL?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__MICROGAMING?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__NO_LIMIT_CITY?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__ONEAPI_EVOLUTION?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__PGSOFT?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__PLAYTECH?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__PRAGMATICPLAY?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__RELAXGAMING?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__RTG?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__SABA?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__SAGAMING?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__SPINIX?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__SPRIBE?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_PROVIDER__YELLOWBAT?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_TYPE__ARCADE?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_TYPE__BINGO?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  jackpotPayout__GAME_TYPE__CARD?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  jackpotPayout__GAME_TYPE__CASINO?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_TYPE__FISHING?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated Use ARCADE instead */
  jackpotPayout__GAME_TYPE__GAMES?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_TYPE__LIVE?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_TYPE__NUMERICAL?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  jackpotPayout__GAME_TYPE__OTHERS?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  jackpotPayout__GAME_TYPE__SLOT?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_TYPE__SLOTS?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_TYPE__SPECIALTY?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_TYPE__SPORTS?: Maybe<Scalars['Decimal']['output']>;
  jackpotPayout__GAME_TYPE__TABLE?: Maybe<Scalars['Decimal']['output']>;
  payout?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  payout__GAME_CATEGORY__BINGO?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  payout__GAME_CATEGORY__GAMES?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  payout__GAME_CATEGORY__LIVE?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  payout__GAME_CATEGORY__SPECIALTY?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  payout__GAME_CATEGORY__SPORTS?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  payout__GAME_CATEGORY__TABLE?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__ALIZE?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__BGAMING?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__BIG_TIME_GAMING?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__BNG?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__BOOONGO?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__BTI?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__CQ9?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__DARWIN?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__DG?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__DIGITAIN?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__DRBINGO?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__E2E?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__ETENGJUE?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__EVOLUTION?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__EVOLUTION_NETENT?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__EVOLUTION_REDTIGER?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__EVOPLAY?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__EZUGI?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__FACHAI?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__HABANERO?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__HACKSAW?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__HOLLYWOODTV?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__JDB?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__JDBGTF?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__JDBSPRIBE?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__JILI?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__JILI_BINGO?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__JOKER?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__KINGMIDAS?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__MEGA2SPIN?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__MEGABALL?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__MICROGAMING?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__NO_LIMIT_CITY?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__ONEAPI_EVOLUTION?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__PGSOFT?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__PLAYTECH?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__PRAGMATICPLAY?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__RELAXGAMING?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__RTG?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__SABA?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__SAGAMING?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__SPINIX?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__SPRIBE?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_PROVIDER__YELLOWBAT?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_TYPE__ARCADE?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_TYPE__BINGO?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  payout__GAME_TYPE__CARD?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  payout__GAME_TYPE__CASINO?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_TYPE__FISHING?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated Use ARCADE instead */
  payout__GAME_TYPE__GAMES?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_TYPE__LIVE?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_TYPE__NUMERICAL?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  payout__GAME_TYPE__OTHERS?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  payout__GAME_TYPE__SLOT?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_TYPE__SLOTS?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_TYPE__SPECIALTY?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_TYPE__SPORTS?: Maybe<Scalars['Decimal']['output']>;
  payout__GAME_TYPE__TABLE?: Maybe<Scalars['Decimal']['output']>;
  turnover?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  turnover__GAME_CATEGORY__BINGO?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  turnover__GAME_CATEGORY__GAMES?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  turnover__GAME_CATEGORY__LIVE?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  turnover__GAME_CATEGORY__SPECIALTY?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  turnover__GAME_CATEGORY__SPORTS?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  turnover__GAME_CATEGORY__TABLE?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__ALIZE?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__BGAMING?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__BIG_TIME_GAMING?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__BNG?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__BOOONGO?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__BTI?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__CQ9?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__DARWIN?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__DG?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__DIGITAIN?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__DRBINGO?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__E2E?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__ETENGJUE?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__EVOLUTION?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__EVOLUTION_NETENT?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__EVOLUTION_REDTIGER?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__EVOPLAY?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__EZUGI?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__FACHAI?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__HABANERO?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__HACKSAW?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__HOLLYWOODTV?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__JDB?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__JDBGTF?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__JDBSPRIBE?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__JILI?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__JILI_BINGO?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__JOKER?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__KINGMIDAS?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__MEGA2SPIN?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__MEGABALL?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__MICROGAMING?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__NO_LIMIT_CITY?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__ONEAPI_EVOLUTION?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__PGSOFT?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__PLAYTECH?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__PRAGMATICPLAY?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__RELAXGAMING?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__RTG?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__SABA?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__SAGAMING?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__SPINIX?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__SPRIBE?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_PROVIDER__YELLOWBAT?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_TYPE__ARCADE?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_TYPE__BINGO?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  turnover__GAME_TYPE__CARD?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  turnover__GAME_TYPE__CASINO?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_TYPE__FISHING?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated Use ARCADE instead */
  turnover__GAME_TYPE__GAMES?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_TYPE__LIVE?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_TYPE__NUMERICAL?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  turnover__GAME_TYPE__OTHERS?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  turnover__GAME_TYPE__SLOT?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_TYPE__SLOTS?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_TYPE__SPECIALTY?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_TYPE__SPORTS?: Maybe<Scalars['Decimal']['output']>;
  turnover__GAME_TYPE__TABLE?: Maybe<Scalars['Decimal']['output']>;
  validBet?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  validBet__GAME_CATEGORY__BINGO?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  validBet__GAME_CATEGORY__GAMES?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  validBet__GAME_CATEGORY__LIVE?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  validBet__GAME_CATEGORY__SPECIALTY?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  validBet__GAME_CATEGORY__SPORTS?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  validBet__GAME_CATEGORY__TABLE?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__ALIZE?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__BGAMING?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__BIG_TIME_GAMING?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__BNG?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__BOOONGO?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__BTI?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__CQ9?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__DARWIN?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__DG?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__DIGITAIN?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__DRBINGO?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__E2E?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__ETENGJUE?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__EVOLUTION?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__EVOLUTION_NETENT?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__EVOLUTION_REDTIGER?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__EVOPLAY?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__EZUGI?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__FACHAI?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__HABANERO?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__HACKSAW?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__HOLLYWOODTV?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__JDB?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__JDBGTF?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__JDBSPRIBE?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__JILI?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__JILI_BINGO?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__JOKER?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__KINGMIDAS?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__MEGA2SPIN?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__MEGABALL?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__MICROGAMING?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__NO_LIMIT_CITY?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__ONEAPI_EVOLUTION?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__PGSOFT?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__PLAYTECH?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__PRAGMATICPLAY?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__RELAXGAMING?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__RTG?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__SABA?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__SAGAMING?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__SPINIX?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__SPRIBE?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_PROVIDER__YELLOWBAT?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_TYPE__ARCADE?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_TYPE__BINGO?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  validBet__GAME_TYPE__CARD?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  validBet__GAME_TYPE__CASINO?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_TYPE__FISHING?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated Use ARCADE instead */
  validBet__GAME_TYPE__GAMES?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_TYPE__LIVE?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_TYPE__NUMERICAL?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  validBet__GAME_TYPE__OTHERS?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  validBet__GAME_TYPE__SLOT?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_TYPE__SLOTS?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_TYPE__SPECIALTY?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_TYPE__SPORTS?: Maybe<Scalars['Decimal']['output']>;
  validBet__GAME_TYPE__TABLE?: Maybe<Scalars['Decimal']['output']>;
};

export type GrossGamingRevenueReport = {
  __typename?: 'GrossGamingRevenueReport';
  records: Array<GrossGamingRevenueRecord>;
  totalAmount: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__ALIZE: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__BGAMING: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__BIG_TIME_GAMING: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__BNG: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__BOOONGO: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__BTI: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__CQ9: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__DARWIN: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__DG: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__DIGITAIN: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__DRBINGO: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__E2E: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__ETENGJUE: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__EVOLUTION: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__EVOLUTION_NETENT: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__EVOLUTION_REDTIGER: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__EVOPLAY: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__EZUGI: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__FACHAI: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__HABANERO: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__HACKSAW: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__HOLLYWOODTV: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__JDB: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__JDBGTF: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__JDBSPRIBE: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__JILI: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__JILI_BINGO: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__JOKER: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__KINGMIDAS: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__MEGA2SPIN: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__MEGABALL: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__MICROGAMING: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__NO_LIMIT_CITY: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__ONEAPI_EVOLUTION: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__PGSOFT: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__PLAYTECH: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__PRAGMATICPLAY: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__RELAXGAMING: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__RTG: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__SABA: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__SAGAMING: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__SPINIX: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__SPRIBE: Scalars['Decimal']['output'];
  totalAmount__GAME_PROVIDER__YELLOWBAT: Scalars['Decimal']['output'];
  totalAmount__GAME_TYPE__ARCADE: Scalars['Decimal']['output'];
  totalAmount__GAME_TYPE__BINGO: Scalars['Decimal']['output'];
  totalAmount__GAME_TYPE__FISHING: Scalars['Decimal']['output'];
  /** @deprecated Use ARCADE instead */
  totalAmount__GAME_TYPE__GAMES: Scalars['Decimal']['output'];
  totalAmount__GAME_TYPE__LIVE: Scalars['Decimal']['output'];
  totalAmount__GAME_TYPE__NUMERICAL: Scalars['Decimal']['output'];
  totalAmount__GAME_TYPE__SLOTS: Scalars['Decimal']['output'];
  totalAmount__GAME_TYPE__SPECIALTY: Scalars['Decimal']['output'];
  totalAmount__GAME_TYPE__SPORTS: Scalars['Decimal']['output'];
  totalAmount__GAME_TYPE__TABLE: Scalars['Decimal']['output'];
  totalJackpotContribution: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__ALIZE: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__BGAMING: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__BIG_TIME_GAMING: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__BNG: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__BOOONGO: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__BTI: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__CQ9: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__DARWIN: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__DG: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__DIGITAIN: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__DRBINGO: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__E2E: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__ETENGJUE: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__EVOLUTION: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__EVOLUTION_NETENT: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__EVOLUTION_REDTIGER: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__EVOPLAY: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__EZUGI: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__FACHAI: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__HABANERO: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__HACKSAW: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__HOLLYWOODTV: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__JDB: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__JDBGTF: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__JDBSPRIBE: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__JILI: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__JILI_BINGO: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__JOKER: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__KINGMIDAS: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__MEGA2SPIN: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__MEGABALL: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__MICROGAMING: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__NO_LIMIT_CITY: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__ONEAPI_EVOLUTION: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__PGSOFT: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__PLAYTECH: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__PRAGMATICPLAY: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__RELAXGAMING: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__RTG: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__SABA: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__SAGAMING: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__SPINIX: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__SPRIBE: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_PROVIDER__YELLOWBAT: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_TYPE__ARCADE: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_TYPE__BINGO: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_TYPE__FISHING: Scalars['Decimal']['output'];
  /** @deprecated Use ARCADE instead */
  totalJackpotContribution__GAME_TYPE__GAMES: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_TYPE__LIVE: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_TYPE__NUMERICAL: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_TYPE__SLOTS: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_TYPE__SPECIALTY: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_TYPE__SPORTS: Scalars['Decimal']['output'];
  totalJackpotContribution__GAME_TYPE__TABLE: Scalars['Decimal']['output'];
  totalJackpotPayout: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__ALIZE: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__BGAMING: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__BIG_TIME_GAMING: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__BNG: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__BOOONGO: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__BTI: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__CQ9: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__DARWIN: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__DG: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__DIGITAIN: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__DRBINGO: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__E2E: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__ETENGJUE: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__EVOLUTION: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__EVOLUTION_NETENT: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__EVOLUTION_REDTIGER: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__EVOPLAY: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__EZUGI: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__FACHAI: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__HABANERO: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__HACKSAW: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__HOLLYWOODTV: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__JDB: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__JDBGTF: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__JDBSPRIBE: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__JILI: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__JILI_BINGO: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__JOKER: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__KINGMIDAS: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__MEGA2SPIN: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__MEGABALL: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__MICROGAMING: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__NO_LIMIT_CITY: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__ONEAPI_EVOLUTION: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__PGSOFT: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__PLAYTECH: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__PRAGMATICPLAY: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__RELAXGAMING: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__RTG: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__SABA: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__SAGAMING: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__SPINIX: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__SPRIBE: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_PROVIDER__YELLOWBAT: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_TYPE__ARCADE: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_TYPE__BINGO: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_TYPE__FISHING: Scalars['Decimal']['output'];
  /** @deprecated Use ARCADE instead */
  totalJackpotPayout__GAME_TYPE__GAMES: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_TYPE__LIVE: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_TYPE__NUMERICAL: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_TYPE__SLOTS: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_TYPE__SPECIALTY: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_TYPE__SPORTS: Scalars['Decimal']['output'];
  totalJackpotPayout__GAME_TYPE__TABLE: Scalars['Decimal']['output'];
  totalPayout: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__ALIZE: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__BGAMING: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__BIG_TIME_GAMING: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__BNG: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__BOOONGO: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__BTI: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__CQ9: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__DARWIN: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__DG: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__DIGITAIN: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__DRBINGO: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__E2E: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__ETENGJUE: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__EVOLUTION: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__EVOLUTION_NETENT: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__EVOLUTION_REDTIGER: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__EVOPLAY: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__EZUGI: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__FACHAI: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__HABANERO: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__HACKSAW: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__HOLLYWOODTV: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__JDB: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__JDBGTF: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__JDBSPRIBE: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__JILI: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__JILI_BINGO: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__JOKER: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__KINGMIDAS: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__MEGA2SPIN: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__MEGABALL: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__MICROGAMING: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__NO_LIMIT_CITY: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__ONEAPI_EVOLUTION: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__PGSOFT: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__PLAYTECH: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__PRAGMATICPLAY: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__RELAXGAMING: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__RTG: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__SABA: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__SAGAMING: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__SPINIX: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__SPRIBE: Scalars['Decimal']['output'];
  totalPayout__GAME_PROVIDER__YELLOWBAT: Scalars['Decimal']['output'];
  totalPayout__GAME_TYPE__ARCADE: Scalars['Decimal']['output'];
  totalPayout__GAME_TYPE__BINGO: Scalars['Decimal']['output'];
  totalPayout__GAME_TYPE__FISHING: Scalars['Decimal']['output'];
  /** @deprecated Use ARCADE instead */
  totalPayout__GAME_TYPE__GAMES: Scalars['Decimal']['output'];
  totalPayout__GAME_TYPE__LIVE: Scalars['Decimal']['output'];
  totalPayout__GAME_TYPE__NUMERICAL: Scalars['Decimal']['output'];
  totalPayout__GAME_TYPE__SLOTS: Scalars['Decimal']['output'];
  totalPayout__GAME_TYPE__SPECIALTY: Scalars['Decimal']['output'];
  totalPayout__GAME_TYPE__SPORTS: Scalars['Decimal']['output'];
  totalPayout__GAME_TYPE__TABLE: Scalars['Decimal']['output'];
  totalTurnover: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__ALIZE: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__BGAMING: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__BIG_TIME_GAMING: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__BNG: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__BOOONGO: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__BTI: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__CQ9: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__DARWIN: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__DG: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__DIGITAIN: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__DRBINGO: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__E2E: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__ETENGJUE: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__EVOLUTION: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__EVOLUTION_NETENT: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__EVOLUTION_REDTIGER: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__EVOPLAY: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__EZUGI: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__FACHAI: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__HABANERO: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__HACKSAW: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__HOLLYWOODTV: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__JDB: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__JDBGTF: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__JDBSPRIBE: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__JILI: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__JILI_BINGO: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__JOKER: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__KINGMIDAS: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__MEGA2SPIN: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__MEGABALL: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__MICROGAMING: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__NO_LIMIT_CITY: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__ONEAPI_EVOLUTION: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__PGSOFT: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__PLAYTECH: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__PRAGMATICPLAY: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__RELAXGAMING: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__RTG: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__SABA: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__SAGAMING: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__SPINIX: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__SPRIBE: Scalars['Decimal']['output'];
  totalTurnover__GAME_PROVIDER__YELLOWBAT: Scalars['Decimal']['output'];
  totalTurnover__GAME_TYPE__ARCADE: Scalars['Decimal']['output'];
  totalTurnover__GAME_TYPE__BINGO: Scalars['Decimal']['output'];
  totalTurnover__GAME_TYPE__FISHING: Scalars['Decimal']['output'];
  /** @deprecated Use ARCADE instead */
  totalTurnover__GAME_TYPE__GAMES: Scalars['Decimal']['output'];
  totalTurnover__GAME_TYPE__LIVE: Scalars['Decimal']['output'];
  totalTurnover__GAME_TYPE__NUMERICAL: Scalars['Decimal']['output'];
  totalTurnover__GAME_TYPE__SLOTS: Scalars['Decimal']['output'];
  totalTurnover__GAME_TYPE__SPECIALTY: Scalars['Decimal']['output'];
  totalTurnover__GAME_TYPE__SPORTS: Scalars['Decimal']['output'];
  totalTurnover__GAME_TYPE__TABLE: Scalars['Decimal']['output'];
  totalValidBet: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__ALIZE: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__BGAMING: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__BIG_TIME_GAMING: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__BNG: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__BOOONGO: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__BTI: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__CQ9: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__DARWIN: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__DG: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__DIGITAIN: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__DRBINGO: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__E2E: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__ETENGJUE: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__EVOLUTION: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__EVOLUTION_NETENT: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__EVOLUTION_REDTIGER: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__EVOPLAY: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__EZUGI: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__FACHAI: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__HABANERO: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__HACKSAW: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__HOLLYWOODTV: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__JDB: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__JDBGTF: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__JDBSPRIBE: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__JILI: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__JILI_BINGO: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__JOKER: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__KINGMIDAS: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__MEGA2SPIN: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__MEGABALL: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__MICROGAMING: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__NO_LIMIT_CITY: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__ONEAPI_EVOLUTION: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__PGSOFT: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__PLAYTECH: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__PRAGMATICPLAY: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__RELAXGAMING: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__RTG: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__SABA: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__SAGAMING: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__SPINIX: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__SPRIBE: Scalars['Decimal']['output'];
  totalValidBet__GAME_PROVIDER__YELLOWBAT: Scalars['Decimal']['output'];
  totalValidBet__GAME_TYPE__ARCADE: Scalars['Decimal']['output'];
  totalValidBet__GAME_TYPE__BINGO: Scalars['Decimal']['output'];
  totalValidBet__GAME_TYPE__FISHING: Scalars['Decimal']['output'];
  /** @deprecated Use ARCADE instead */
  totalValidBet__GAME_TYPE__GAMES: Scalars['Decimal']['output'];
  totalValidBet__GAME_TYPE__LIVE: Scalars['Decimal']['output'];
  totalValidBet__GAME_TYPE__NUMERICAL: Scalars['Decimal']['output'];
  totalValidBet__GAME_TYPE__SLOTS: Scalars['Decimal']['output'];
  totalValidBet__GAME_TYPE__SPECIALTY: Scalars['Decimal']['output'];
  totalValidBet__GAME_TYPE__SPORTS: Scalars['Decimal']['output'];
  totalValidBet__GAME_TYPE__TABLE: Scalars['Decimal']['output'];
};

export type InflowRecord = Node & {
  __typename?: 'InflowRecord';
  amount: Scalars['Decimal']['output'];
  currentBalance?: Maybe<Scalars['Decimal']['output']>;
  date: Scalars['DateTime']['output'];
  domain?: Maybe<Scalars['String']['output']>;
  id: Scalars['ObjectId']['output'];
  member?: Maybe<Member>;
  member__name: Scalars['String']['output'];
  type: InflowRecordType;
};

export type InflowRecordFilterInput = {
  date?: InputMaybe<DateTimeFilterInput>;
  domain?: InputMaybe<StringFilterInput>;
  member?: InputMaybe<ObjectIdFilterInput>;
  member__name?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<InflowRecordTypeFilterInput>;
};

export enum InflowRecordType {
  Deposit = 'DEPOSIT',
  Withdrawal = 'WITHDRAWAL'
}

export type InflowRecordTypeFilterInput = {
  equal?: InputMaybe<InflowRecordType>;
  in?: InputMaybe<Array<InflowRecordType>>;
  notEqual?: InputMaybe<InflowRecordType>;
  notIn?: InputMaybe<Array<InflowRecordType>>;
};

export type InstapayWithdrawalRecord = Node & WithdrawalRecord & {
  __typename?: 'InstapayWithdrawalRecord';
  accountName?: Maybe<Scalars['String']['output']>;
  accountNumber?: Maybe<Scalars['String']['output']>;
  amount: Scalars['Decimal']['output'];
  bankName?: Maybe<Scalars['String']['output']>;
  dateTimeConfirmed?: Maybe<Scalars['DateTime']['output']>;
  dateTimeCreated: Scalars['DateTime']['output'];
  dateTimeLastUpdated: Scalars['DateTime']['output'];
  domain?: Maybe<Scalars['String']['output']>;
  error?: Maybe<WithdrawalError>;
  fee: Scalars['Decimal']['output'];
  id: Scalars['ObjectId']['output'];
  member?: Maybe<Member>;
  netAmount: Scalars['Decimal']['output'];
  platform?: Maybe<Platform>;
  reference?: Maybe<Scalars['String']['output']>;
  referrer?: Maybe<Member>;
  remarks?: Maybe<Scalars['String']['output']>;
  status: WithdrawalStatus;
  type: WithdrawalType;
  withdrawal: Scalars['ObjectId']['output'];
  withdrawalNumber?: Maybe<Scalars['String']['output']>;
};

export type IntFilter = {
  __typename?: 'IntFilter';
  equal?: Maybe<Scalars['Int']['output']>;
  greaterThan?: Maybe<Scalars['Int']['output']>;
  greaterThanOrEqual?: Maybe<Scalars['Int']['output']>;
  in?: Maybe<Array<Scalars['Int']['output']>>;
  lesserThan?: Maybe<Scalars['Int']['output']>;
  lesserThanOrEqual?: Maybe<Scalars['Int']['output']>;
  notEqual?: Maybe<Scalars['Int']['output']>;
  notIn?: Maybe<Array<Scalars['Int']['output']>>;
};

export type IntFilterInput = {
  equal?: InputMaybe<Scalars['Int']['input']>;
  greaterThan?: InputMaybe<Scalars['Int']['input']>;
  greaterThanOrEqual?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lesserThan?: InputMaybe<Scalars['Int']['input']>;
  lesserThanOrEqual?: InputMaybe<Scalars['Int']['input']>;
  notEqual?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Jackpot = Node & {
  __typename?: 'Jackpot';
  dateTimeCreated: Scalars['DateTime']['output'];
  dateTimeLastUpdated: Scalars['DateTime']['output'];
  deleted: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  drawing: Scalars['Boolean']['output'];
  id: Scalars['ObjectId']['output'];
  jackpotPayoutPercentage: Scalars['Decimal']['output'];
  jackpotTurnoverContributionPercentagePerGameProvider: Scalars['JSON']['output'];
  maximumJackpotPoolLimit: Scalars['Decimal']['output'];
  minimumBet: Scalars['Decimal']['output'];
  minimumJackpotPayout?: Maybe<Scalars['Decimal']['output']>;
  minimumJackpotPoolDrawingLimit: Scalars['Decimal']['output'];
  minimumMultiplier: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  pool: Scalars['Decimal']['output'];
  seed: Scalars['Decimal']['output'];
  status: JackpotStatus;
  totalPayout: Scalars['Decimal']['output'];
};

export enum JackpotCursor {
  Pool = 'POOL'
}

export type JackpotFilterInput = {
  deleted?: InputMaybe<BooleanFilterInput>;
  drawing?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<ObjectIdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<JackpotStatusFilterInput>;
};

export type JackpotPayout = Node & {
  __typename?: 'JackpotPayout';
  amount: Scalars['Decimal']['output'];
  bet: Scalars['Decimal']['output'];
  dateTimeCreated: Scalars['DateTime']['output'];
  game?: Maybe<Game>;
  id: Scalars['ObjectId']['output'];
  jackpot: Jackpot;
  member: Member;
  multiplier: Scalars['Int']['output'];
  serialCode: Scalars['String']['output'];
};

export type JackpotPayoutAggregates = {
  __typename?: 'JackpotPayoutAggregates';
  amount: Scalars['Decimal']['output'];
  bet: Scalars['Decimal']['output'];
};

export enum JackpotPayoutCursor {
  Amount = 'AMOUNT',
  DateTimeCreated = 'DATE_TIME_CREATED'
}

export type JackpotPayoutFilterInput = {
  dateTimeCreated?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<ObjectIdFilterInput>;
  jackpot?: InputMaybe<ObjectIdFilterInput>;
  member?: InputMaybe<ObjectIdFilterInput>;
};

export type JackpotPayoutSortInput = {
  cursor: JackpotPayoutCursor;
  order: SortOrder;
};

export type JackpotSortInput = {
  cursor: JackpotCursor;
  order: SortOrder;
};

export enum JackpotStatus {
  Active = 'ACTIVE',
  Closing = 'CLOSING',
  Disabled = 'DISABLED'
}

export type JackpotStatusFilterInput = {
  equal?: InputMaybe<JackpotStatus>;
  in?: InputMaybe<Array<JackpotStatus>>;
  notEqual?: InputMaybe<JackpotStatus>;
  notIn?: InputMaybe<Array<JackpotStatus>>;
};

export type KeyValuePair = {
  __typename?: 'KeyValuePair';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type LossRebate = Node & {
  __typename?: 'LossRebate';
  activationEndDate?: Maybe<Scalars['Date']['output']>;
  activationStartDate?: Maybe<Scalars['Date']['output']>;
  createdDateTime?: Maybe<Scalars['Date']['output']>;
  description: Scalars['String']['output'];
  gameProviders?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ObjectId']['output'];
  imageDesktop: Scalars['ObjectId']['output'];
  imageMobile: Scalars['ObjectId']['output'];
  memberGroup?: Maybe<Array<Scalars['ObjectId']['output']>>;
  memberRebate?: Maybe<Scalars['JSON']['output']>;
  payoutFrequency: LossRebatePayoutFrequency;
  rebatePencetage?: Maybe<Scalars['Decimal']['output']>;
  status: LossRebateStatus;
  title: Scalars['String']['output'];
  totalClaimedRebate?: Maybe<Scalars['Decimal']['output']>;
  totalLossRebate?: Maybe<Scalars['Decimal']['output']>;
  totalUnclaimedRebate?: Maybe<Scalars['Decimal']['output']>;
  type: LossRebateType;
};

export type LossRebateBonus = Node & {
  __typename?: 'LossRebateBonus';
  activationEndDate?: Maybe<Scalars['Date']['output']>;
  activationStateDate?: Maybe<Scalars['Date']['output']>;
  claimedRebate?: Maybe<Scalars['Decimal']['output']>;
  createdDateTime?: Maybe<Scalars['Date']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['ObjectId']['output'];
  lossRebate?: Maybe<Scalars['Decimal']['output']>;
  member: Scalars['ObjectId']['output'];
  netLoss?: Maybe<Scalars['Decimal']['output']>;
  status: LossRebateStatus;
  title: Scalars['String']['output'];
  unclaimedRebate?: Maybe<Scalars['Decimal']['output']>;
};

export enum LossRebateBonusCursor {
  ClaimedRebate = 'CLAIMED_REBATE',
  LossRebate = 'LOSS_REBATE',
  Netloss = 'NETLOSS',
  UnclaimedRebate = 'UNCLAIMED_REBATE'
}

export type LossRebateBonusFilterInput = {
  member?: InputMaybe<ObjectIdFilterInput>;
  status?: InputMaybe<LossRebateStatusFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type LossRebateBonusSortInput = {
  cursor: LossRebateBonusCursor;
  order: SortOrder;
};

export enum LossRebateCursor {
  Title = 'TITLE',
  TotalLoss = 'TOTAL_LOSS'
}

export type LossRebateFilterInput = {
  status?: InputMaybe<LossRebateStatusFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export enum LossRebatePayoutFrequency {
  Daily = 'DAILY',
  Weekly = 'WEEKLY'
}

export type LossRebateSortInput = {
  cursor: LossRebateCursor;
  order: SortOrder;
};

export enum LossRebateStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type LossRebateStatusFilterInput = {
  equal?: InputMaybe<LossRebateStatus>;
  in?: InputMaybe<Array<LossRebateStatus>>;
  notEqual?: InputMaybe<LossRebateStatus>;
  notIn?: InputMaybe<Array<LossRebateStatus>>;
};

export enum LossRebateType {
  Fixed = 'FIXED',
  PerMemberLevel = 'PER_MEMBER_LEVEL'
}

export type ManualBankWithdrawalRecord = Node & WithdrawalRecord & {
  __typename?: 'ManualBankWithdrawalRecord';
  amount: Scalars['Decimal']['output'];
  bankAccountName: Scalars['String']['output'];
  bankAccountNumber: Scalars['String']['output'];
  bankIFSCCode: Scalars['String']['output'];
  dateTimeConfirmed?: Maybe<Scalars['DateTime']['output']>;
  dateTimeCreated: Scalars['DateTime']['output'];
  dateTimeLastUpdated: Scalars['DateTime']['output'];
  domain?: Maybe<Scalars['String']['output']>;
  error?: Maybe<WithdrawalError>;
  fee: Scalars['Decimal']['output'];
  id: Scalars['ObjectId']['output'];
  member?: Maybe<Member>;
  netAmount: Scalars['Decimal']['output'];
  platform?: Maybe<Platform>;
  reference?: Maybe<Scalars['String']['output']>;
  referrer?: Maybe<Member>;
  remarks?: Maybe<Scalars['String']['output']>;
  status: WithdrawalStatus;
  type: WithdrawalType;
  withdrawal: Scalars['ObjectId']['output'];
  withdrawalNumber?: Maybe<Scalars['String']['output']>;
};

export type ManualUpiWithdrawalRecord = Node & WithdrawalRecord & {
  __typename?: 'ManualUPIWithdrawalRecord';
  amount: Scalars['Decimal']['output'];
  dateTimeConfirmed?: Maybe<Scalars['DateTime']['output']>;
  dateTimeCreated: Scalars['DateTime']['output'];
  dateTimeLastUpdated: Scalars['DateTime']['output'];
  domain?: Maybe<Scalars['String']['output']>;
  error?: Maybe<WithdrawalError>;
  fee: Scalars['Decimal']['output'];
  id: Scalars['ObjectId']['output'];
  member?: Maybe<Member>;
  netAmount: Scalars['Decimal']['output'];
  platform?: Maybe<Platform>;
  reference?: Maybe<Scalars['String']['output']>;
  referrer?: Maybe<Member>;
  remarks?: Maybe<Scalars['String']['output']>;
  status: WithdrawalStatus;
  type: WithdrawalType;
  upiId: Scalars['String']['output'];
  withdrawal: Scalars['ObjectId']['output'];
  withdrawalNumber?: Maybe<Scalars['String']['output']>;
};

export type ManualWithdrawalRecord = Node & WithdrawalRecord & {
  __typename?: 'ManualWithdrawalRecord';
  amount: Scalars['Decimal']['output'];
  dateTimeConfirmed?: Maybe<Scalars['DateTime']['output']>;
  dateTimeCreated: Scalars['DateTime']['output'];
  dateTimeLastUpdated: Scalars['DateTime']['output'];
  domain?: Maybe<Scalars['String']['output']>;
  error?: Maybe<WithdrawalError>;
  fee: Scalars['Decimal']['output'];
  id: Scalars['ObjectId']['output'];
  member?: Maybe<Member>;
  netAmount: Scalars['Decimal']['output'];
  platform?: Maybe<Platform>;
  reference?: Maybe<Scalars['String']['output']>;
  referrer?: Maybe<Member>;
  remarks?: Maybe<Scalars['String']['output']>;
  status: WithdrawalStatus;
  type: WithdrawalType;
  withdrawal: Scalars['ObjectId']['output'];
  withdrawalNumber?: Maybe<Scalars['String']['output']>;
};

export type MarkNotificationAsRead = {
  id: Scalars['NotificationObjectId']['input'];
};

export type MayaAppWithdrawalRecord = Node & WithdrawalRecord & {
  __typename?: 'MayaAppWithdrawalRecord';
  amount: Scalars['Decimal']['output'];
  dateTimeConfirmed?: Maybe<Scalars['DateTime']['output']>;
  dateTimeCreated: Scalars['DateTime']['output'];
  dateTimeLastUpdated: Scalars['DateTime']['output'];
  domain?: Maybe<Scalars['String']['output']>;
  error?: Maybe<WithdrawalError>;
  fee: Scalars['Decimal']['output'];
  id: Scalars['ObjectId']['output'];
  member?: Maybe<Member>;
  netAmount: Scalars['Decimal']['output'];
  platform?: Maybe<Platform>;
  reference?: Maybe<Scalars['String']['output']>;
  referrer?: Maybe<Member>;
  remarks?: Maybe<Scalars['String']['output']>;
  status: WithdrawalStatus;
  type: WithdrawalType;
  withdrawal: Scalars['ObjectId']['output'];
  withdrawalNumber?: Maybe<Scalars['String']['output']>;
};

export type Member = Node & {
  __typename?: 'Member';
  achievementPointsHistoryRecords: Connection;
  achievements: Array<Achievement>;
  activityRecords: Connection;
  agent?: Maybe<Agent>;
  betRecords: Connection;
  betsChartData: ChartData;
  birthDay?: Maybe<Scalars['Date']['output']>;
  bonuses: Connection;
  branchCode?: Maybe<Scalars['String']['output']>;
  cashbackBonusAggregates: CashbackAggregates;
  cashbackBonuses: Connection;
  dateTimeCreated: Scalars['DateTime']['output'];
  dateTimeLastActive?: Maybe<Scalars['DateTime']['output']>;
  dateTimeLastAndroidLogIn?: Maybe<Scalars['DateTime']['output']>;
  dateTimeLastUpdated: Scalars['DateTime']['output'];
  depositRecordAggregates?: Maybe<MemberDepositRecordAggregates>;
  depositRecords: Connection;
  depositsAggregation: Scalars['Decimal']['output'];
  depositsCount: Scalars['Int']['output'];
  domain?: Maybe<Scalars['String']['output']>;
  emailAddress?: Maybe<Scalars['EmailAddress']['output']>;
  hasFirstDeposit: Scalars['Boolean']['output'];
  historicalDeposit: Array<DataPoint>;
  historicalTurnover: Array<DataPoint>;
  historicalWinloss: Array<DataPoint>;
  historicalWithdrawal: Array<DataPoint>;
  id: Scalars['ObjectId']['output'];
  ipAddress?: Maybe<Scalars['String']['output']>;
  labels: Array<MemberLabel>;
  level?: Maybe<Scalars['Int']['output']>;
  mobileNumber?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  platform?: Maybe<Platform>;
  pointsWallet?: Maybe<PointsWallet>;
  pointsWalletTransactions: Connection;
  realName?: Maybe<Scalars['String']['output']>;
  referralCode?: Maybe<Scalars['String']['output']>;
  referralCommission?: Maybe<ReferralCommission>;
  referrals: Connection;
  referrer?: Maybe<Member>;
  remarks?: Maybe<Scalars['String']['output']>;
  status: MemberStatus;
  summary: Summary;
  test?: Maybe<Scalars['Boolean']['output']>;
  totalBet3d: Scalars['Decimal']['output'];
  totalBet7d: Scalars['Decimal']['output'];
  totalBet30d: Scalars['Decimal']['output'];
  totalBetChartData: ChartData;
  totalDeposit: Scalars['Decimal']['output'];
  totalDeposit3d: Scalars['Decimal']['output'];
  totalDeposit7d: Scalars['Decimal']['output'];
  totalDeposit30d: Scalars['Decimal']['output'];
  totalDepositAggregation: Scalars['Decimal']['output'];
  totalDepositChartData: ChartData;
  /** @deprecated use `totalValidBet` instead */
  totalEffectiveBet: Scalars['Decimal']['output'];
  totalPayout3d: Scalars['Decimal']['output'];
  totalPayout7d: Scalars['Decimal']['output'];
  totalPayout30d: Scalars['Decimal']['output'];
  totalTurnover: Scalars['Decimal']['output'];
  totalWinloss: Scalars['Decimal']['output'];
  totalWinloss3d: Scalars['Decimal']['output'];
  totalWinloss7d: Scalars['Decimal']['output'];
  totalWinloss30d: Scalars['Decimal']['output'];
  totalWinlossChartData: ChartData;
  totalWithdrawal: Scalars['Decimal']['output'];
  totalWithdrawal3d: Scalars['Decimal']['output'];
  totalWithdrawal7d: Scalars['Decimal']['output'];
  totalWithdrawal30d: Scalars['Decimal']['output'];
  totalWithdrawalChartData: ChartData;
  transactionRecords: Connection;
  verificationStatus: MemberVerificationStatus;
  /** @deprecated use `verificationStatus` instead */
  verified: Scalars['Boolean']['output'];
  wallet?: Maybe<Wallet>;
  withdrawalRecordAggregates?: Maybe<WithdrawalRecordAggregates>;
  withdrawalRecords: Connection;
};


export type MemberAchievementPointsHistoryRecordsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AchievementPointsHistoryRecordFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type MemberActivityRecordsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ActivityRecordsFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type MemberBetRecordsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<BetRecordFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortOrder>;
};


export type MemberBetsChartDataArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};


export type MemberBonusesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  filter?: InputMaybe<BonusFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type MemberCashbackBonusAggregatesArgs = {
  filter?: InputMaybe<CashbackBonusFilterInput>;
};


export type MemberCashbackBonusesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CashbackBonusFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<CashbackBonusSortInput>;
};


export type MemberDepositRecordAggregatesArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  filter?: InputMaybe<DepositRecordFilterInput>;
  sort?: InputMaybe<SortOrder>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type MemberDepositRecordsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<DepositRecordFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type MemberDepositsAggregationArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type MemberHistoricalDepositArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type MemberHistoricalTurnoverArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type MemberHistoricalWinlossArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type MemberHistoricalWithdrawalArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type MemberPointsWalletTransactionsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MemberPointsWalletTransactionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type MemberReferralsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ReferralFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ReferralSortInput>;
};


export type MemberSummaryArgs = {
  endDateTime: Scalars['DateTime']['input'];
  startDateTime: Scalars['DateTime']['input'];
};


export type MemberTotalBetChartDataArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};


export type MemberTotalDepositArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type MemberTotalDepositAggregationArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type MemberTotalDepositChartDataArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};


export type MemberTotalTurnoverArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type MemberTotalWinlossArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type MemberTotalWinlossChartDataArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};


export type MemberTotalWithdrawalArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type MemberTotalWithdrawalChartDataArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};


export type MemberTransactionRecordsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  filter?: InputMaybe<TransactionRecordFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type MemberWithdrawalRecordAggregatesArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  filter?: InputMaybe<WithdrawalRecordFilterInput>;
  sort?: InputMaybe<SortOrder>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type MemberWithdrawalRecordsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<WithdrawalRecordFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type MemberActivity = Node & {
  __typename?: 'MemberActivity';
  amount?: Maybe<Scalars['Decimal']['output']>;
  dateTimeCreated: Scalars['DateTime']['output'];
  details: Scalars['String']['output'];
  domain?: Maybe<Scalars['String']['output']>;
  id: Scalars['ObjectId']['output'];
  member?: Maybe<Member>;
  type: MemberActivityType;
};

export type MemberActivityFilterInput = {
  amount?: InputMaybe<DecimalFilterInput>;
  dateTimeCreated?: InputMaybe<DateTimeFilterInput>;
  domain?: InputMaybe<StringFilterInput>;
  member?: InputMaybe<ObjectIdFilterInput>;
  type?: InputMaybe<MemberActivityTypeFilterInput>;
};

export type MemberActivityRecord = Node & {
  __typename?: 'MemberActivityRecord';
  dateTimeCreated: Scalars['DateTime']['output'];
  id: Scalars['ObjectId']['output'];
  member: Member;
  metadata?: Maybe<Scalars['JSON']['output']>;
  type: MemberActivityType;
};

export type MemberActivityRecordFilterInput = {
  dateTimeCreated?: InputMaybe<DateTimeFilterInput>;
  member?: InputMaybe<ObjectIdFilterInput>;
  member__name?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<MemberActivityTypeFilterInput>;
};

export enum MemberActivityType {
  Bet = 'BET',
  Bonus = 'BONUS',
  CashbackBonus = 'CASHBACK_BONUS',
  Deposit = 'DEPOSIT',
  FirstDeposit = 'FIRST_DEPOSIT',
  Login = 'LOGIN',
  /** @deprecated No longer supported */
  Promo = 'PROMO',
  Registration = 'REGISTRATION',
  /** @deprecated No longer supported */
  UpdateAccount = 'UPDATE_ACCOUNT',
  /** @deprecated No longer supported */
  Withdraw = 'WITHDRAW',
  Withdrawal = 'WITHDRAWAL'
}

export type MemberActivityTypeFilterInput = {
  equal?: InputMaybe<MemberActivityType>;
  in?: InputMaybe<Array<MemberActivityType>>;
  notEqual?: InputMaybe<MemberActivityType>;
  notIn?: InputMaybe<Array<MemberActivityType>>;
};

export type MemberAggregates = {
  __typename?: 'MemberAggregates';
  balance: Scalars['Decimal']['output'];
};

export enum MemberCursor {
  DateTimeCreated = 'DATE_TIME_CREATED',
  DateTimeLastActive = 'DATE_TIME_LAST_ACTIVE',
  TotalBet_3D = 'TOTAL_BET_3_D',
  TotalBet_7D = 'TOTAL_BET_7_D',
  TotalBet_30D = 'TOTAL_BET_30_D',
  TotalDeposit_3D = 'TOTAL_DEPOSIT_3_D',
  TotalDeposit_7D = 'TOTAL_DEPOSIT_7_D',
  TotalDeposit_30D = 'TOTAL_DEPOSIT_30_D',
  TotalPayout_3D = 'TOTAL_PAYOUT_3_D',
  TotalPayout_7D = 'TOTAL_PAYOUT_7_D',
  TotalPayout_30D = 'TOTAL_PAYOUT_30_D',
  TotalWinloss_3D = 'TOTAL_WINLOSS_3_D',
  TotalWinloss_7D = 'TOTAL_WINLOSS_7_D',
  TotalWinloss_30D = 'TOTAL_WINLOSS_30_D',
  TotalWithdrawal_3D = 'TOTAL_WITHDRAWAL_3_D',
  TotalWithdrawal_7D = 'TOTAL_WITHDRAWAL_7_D',
  TotalWithdrawal_30D = 'TOTAL_WITHDRAWAL_30_D',
  WalletBalance = 'WALLET__BALANCE'
}

export type MemberDailyNetDepositRecord = Node & {
  __typename?: 'MemberDailyNetDepositRecord';
  date: Scalars['Date']['output'];
  deposits: Scalars['Int']['output'];
  id: Scalars['ObjectId']['output'];
  member: Scalars['ObjectId']['output'];
  member__name: Scalars['String']['output'];
  totalDeposit: Scalars['Decimal']['output'];
  totalNetDeposit: Scalars['Decimal']['output'];
  totalWithdrawal: Scalars['Decimal']['output'];
  withdrawals: Scalars['Int']['output'];
};

export type MemberDepositRecordAggregates = {
  __typename?: 'MemberDepositRecordAggregates';
  appliedAmount: Scalars['Decimal']['output'];
  receivedAmount: Scalars['Decimal']['output'];
  transactionFees: Scalars['Decimal']['output'];
};

export type MemberFilter = {
  __typename?: 'MemberFilter';
  agent?: Maybe<ObjectIdFilter>;
  dateTimeCreated?: Maybe<DateTimeFilter>;
  dateTimeLastActive?: Maybe<DateTimeFilter>;
  domain?: Maybe<StringFilter>;
  emailAddress?: Maybe<EmailAddressFilter>;
  /** @deprecated No longer supported */
  id?: Maybe<ObjectIdFilter>;
  level?: Maybe<IntFilter>;
  /** @deprecated No longer supported */
  member?: Maybe<ObjectIdFilter>;
  mobileNumber?: Maybe<StringFilter>;
  status?: Maybe<AccountStatusFilter>;
  test?: Maybe<BooleanFilter>;
  totalBet?: Maybe<DecimalFilter>;
  totalBet3d?: Maybe<DecimalFilter>;
  totalBet7d?: Maybe<DecimalFilter>;
  totalBet30d?: Maybe<DecimalFilter>;
  totalBonus?: Maybe<DecimalFilter>;
  totalBonus3d?: Maybe<DecimalFilter>;
  totalBonus7d?: Maybe<DecimalFilter>;
  totalBonus30d?: Maybe<DecimalFilter>;
  totalDeposit?: Maybe<DecimalFilter>;
  totalDeposit3d?: Maybe<DecimalFilter>;
  totalDeposit7d?: Maybe<DecimalFilter>;
  totalDeposit30d?: Maybe<DecimalFilter>;
  totalPayout?: Maybe<DecimalFilter>;
  totalPayout3d?: Maybe<DecimalFilter>;
  totalPayout7d?: Maybe<DecimalFilter>;
  totalPayout30d?: Maybe<DecimalFilter>;
  totalWinloss?: Maybe<DecimalFilter>;
  totalWinloss3d?: Maybe<DecimalFilter>;
  totalWinloss7d?: Maybe<DecimalFilter>;
  totalWinloss30d?: Maybe<DecimalFilter>;
  totalWithdrawal?: Maybe<DecimalFilter>;
  totalWithdrawal3d?: Maybe<DecimalFilter>;
  totalWithdrawal7d?: Maybe<DecimalFilter>;
  totalWithdrawal30d?: Maybe<DecimalFilter>;
  verificationStatus?: Maybe<MemberVerificationStatusFilter>;
  wallet__balance?: Maybe<DecimalFilter>;
};

export type MemberFilterInput = {
  agent?: InputMaybe<ObjectIdFilterInput>;
  birthDay?: InputMaybe<DateFilterInput>;
  branchCode?: InputMaybe<StringFilterInput>;
  dateTimeCreated?: InputMaybe<DateTimeFilterInput>;
  dateTimeLastActive?: InputMaybe<DateTimeFilterInput>;
  dateTimeLastAndroidLogIn?: InputMaybe<DateTimeFilterInput>;
  domain?: InputMaybe<StringFilterInput>;
  emailAddress?: InputMaybe<EmailAddressFilterInput>;
  hasFirstDeposit?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<ObjectIdFilterInput>;
  ipAddress?: InputMaybe<StringFilterInput>;
  labels?: InputMaybe<ObjectIdFilterInput>;
  level?: InputMaybe<IntFilterInput>;
  mobileNumber?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  platform?: InputMaybe<ObjectIdFilterInput>;
  realName?: InputMaybe<StringFilterInput>;
  referrer?: InputMaybe<ObjectIdFilterInput>;
  status?: InputMaybe<MemberStatusFilterInput>;
  test?: InputMaybe<BooleanFilterInput>;
  totalBet3d?: InputMaybe<DecimalFilterInput>;
  totalBet7d?: InputMaybe<DecimalFilterInput>;
  totalBet30d?: InputMaybe<DecimalFilterInput>;
  totalBonus3d?: InputMaybe<DecimalFilterInput>;
  totalBonus7d?: InputMaybe<DecimalFilterInput>;
  totalBonus30d?: InputMaybe<DecimalFilterInput>;
  totalDeposit?: InputMaybe<DecimalFilterInput>;
  totalDeposit3d?: InputMaybe<DecimalFilterInput>;
  totalDeposit7d?: InputMaybe<DecimalFilterInput>;
  totalDeposit30d?: InputMaybe<DecimalFilterInput>;
  totalPayout3d?: InputMaybe<DecimalFilterInput>;
  totalPayout7d?: InputMaybe<DecimalFilterInput>;
  totalPayout30d?: InputMaybe<DecimalFilterInput>;
  totalWinloss3d?: InputMaybe<DecimalFilterInput>;
  totalWinloss7d?: InputMaybe<DecimalFilterInput>;
  totalWinloss30d?: InputMaybe<DecimalFilterInput>;
  totalWithdrawal?: InputMaybe<DecimalFilterInput>;
  totalWithdrawal3d?: InputMaybe<DecimalFilterInput>;
  totalWithdrawal7d?: InputMaybe<DecimalFilterInput>;
  totalWithdrawal30d?: InputMaybe<DecimalFilterInput>;
  verificationStatus?: InputMaybe<MemberVerificationStatusFilterInput>;
  wallet__balance?: InputMaybe<DecimalFilterInput>;
};

export type MemberGroup = Node & {
  __typename?: 'MemberGroup';
  _members: Connection;
  dateTimeCreated: Scalars['DateTime']['output'];
  dateTimeLastUpdated: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  file?: Maybe<File>;
  filter?: Maybe<MemberFilter>;
  id: Scalars['ObjectId']['output'];
  members: Array<Maybe<Member>>;
  membersCount: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  static: Scalars['Boolean']['output'];
  status?: Maybe<MemberGroupStatus>;
};


export type MemberGroup_MembersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MemberGroupMemberFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export enum MemberGroupCursor {
  MembersCount = 'MEMBERS_COUNT'
}

export type MemberGroupFilterInput = {
  dateTimeCreated?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<ObjectIdFilterInput>;
};

export type MemberGroupMemberFilterInput = {
  id?: InputMaybe<ObjectIdFilterInput>;
};

export type MemberGroupSortInput = {
  cursor: MemberGroupCursor;
  order: SortOrder;
};

export enum MemberGroupStatus {
  Deleted = 'DELETED',
  Failed = 'FAILED',
  Materializing = 'MATERIALIZING',
  Pending = 'PENDING',
  Ready = 'READY'
}

export type MemberLabel = Node & {
  __typename?: 'MemberLabel';
  color: Scalars['String']['output'];
  dateTimeCreated: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ObjectId']['output'];
  membersCount: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export enum MemberLabelCursor {
  MembersCount = 'MEMBERS_COUNT'
}

export type MemberLabelFilterInput = {
  dateTimeCreated?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<ObjectIdFilterInput>;
  membersCount?: InputMaybe<IntFilterInput>;
};

export type MemberLabelSortInput = {
  cursor?: InputMaybe<MemberLabelCursor>;
  order: SortOrder;
};

export type MemberPointsWalletTransactionFilterInput = {
  amount?: InputMaybe<DecimalFilterInput>;
  balance?: InputMaybe<DecimalFilterInput>;
  dateTimeCreated?: InputMaybe<DateTimeFilterInput>;
  type?: InputMaybe<PointsWalletTransactionTypeFilterInput>;
};

export type MemberReferralCommissionFilterInput = {
  dateTimeCreated?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<ObjectIdFilterInput>;
};

export enum MemberSortField {
  DateTimeCreated = 'DATE_TIME_CREATED',
  DateTimeLastActive = 'DATE_TIME_LAST_ACTIVE',
  TotalBet_3D = 'TOTAL_BET_3D',
  TotalBet_7D = 'TOTAL_BET_7D',
  TotalBet_30D = 'TOTAL_BET_30D'
}

export type MemberSortInput = {
  cursor: MemberCursor;
  order: SortOrder;
};

export enum MemberStatus {
  Active = 'ACTIVE',
  Blacklisted = 'BLACKLISTED',
  Deleted = 'DELETED',
  Disabled = 'DISABLED',
  Suspended = 'SUSPENDED',
  VerificationLocked = 'VERIFICATION_LOCKED'
}

export type MemberStatusFilterInput = {
  equal?: InputMaybe<MemberStatus>;
  in?: InputMaybe<Array<MemberStatus>>;
  notEqual?: InputMaybe<MemberStatus>;
  notIn?: InputMaybe<Array<MemberStatus>>;
};

export type MemberVerificationNotification = Node & Notification & {
  __typename?: 'MemberVerificationNotification';
  dateTimeCreated: Scalars['DateTime']['output'];
  id: Scalars['ObjectId']['output'];
  markedAsRead: Scalars['Boolean']['output'];
  member?: Maybe<Member>;
  type: NotificationType;
};

export enum MemberVerificationStatus {
  Pending = 'PENDING',
  Unverified = 'UNVERIFIED',
  Verified = 'VERIFIED'
}

export type MemberVerificationStatusFilter = {
  __typename?: 'MemberVerificationStatusFilter';
  equal?: Maybe<MemberVerificationStatus>;
  in?: Maybe<Array<MemberVerificationStatus>>;
  notEqual?: Maybe<MemberVerificationStatus>;
  notIn?: Maybe<Array<MemberVerificationStatus>>;
};

export type MemberVerificationStatusFilterInput = {
  equal?: InputMaybe<MemberVerificationStatus>;
  in?: InputMaybe<Array<MemberVerificationStatus>>;
  notEqual?: InputMaybe<MemberVerificationStatus>;
  notIn?: InputMaybe<Array<MemberVerificationStatus>>;
};

export type MultiplierTournament = Node & Tournament & {
  __typename?: 'MultiplierTournament';
  activationEndDateTime: Scalars['DateTime']['output'];
  activationStartDateTime: Scalars['DateTime']['output'];
  currentLeaderboard: Connection;
  dateTimeCreated?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  enabledGameProviders: Array<GameProvider>;
  frequency: TournamentFrequency;
  id: Scalars['ObjectId']['output'];
  memberGroup?: Maybe<Scalars['ObjectId']['output']>;
  mobileBanner?: Maybe<File>;
  mode: TournamentMode;
  name: Scalars['String']['output'];
  previousLeaderboard: Connection;
  rewardSettings: Scalars['JSON']['output'];
  status: TournamentStatus;
  topPayouts?: Maybe<Array<TournamentPayout>>;
  totalPayout: Scalars['Decimal']['output'];
  totalReward: Scalars['Decimal']['output'];
  type: TournamentType;
  webBanner?: Maybe<File>;
  winnersCount: Scalars['Int']['output'];
};


export type MultiplierTournamentCurrentLeaderboardArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type MultiplierTournamentPreviousLeaderboardArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  cancelExport: Scalars['Boolean']['output'];
  createBetRecordExport?: Maybe<CreateBetRecordExportError>;
  createBonusExport?: Maybe<CreateBonusExportError>;
  createDailyNetDepositReportExport?: Maybe<CreateDailyNetDepositReportExportError>;
  createDepositRecordExport?: Maybe<CreateDepositRecordExportError>;
  createGameProviderGGRRecordExport?: Maybe<CreateGgrRecordExportError>;
  createGameTypeGGRRecordExport?: Maybe<CreateGgrRecordExportError>;
  createInFlowRecordExport?: Maybe<CreateInFlowRecordExportError>;
  createJackpotPayoutExport?: Maybe<CreateJackpotPayoutExportError>;
  createMemberActivityRecordExport?: Maybe<CreateMemberActivityRecordExportError>;
  createMemberDailyNetDepositRecordExport?: Maybe<CreateMemberDailyNetDepositRecordExportError>;
  createMemberExport?: Maybe<CreateMemberRecordExportError>;
  createMemberGroupMemberExport?: Maybe<CreateMemberGroupMemberExportError>;
  createOperatorActivityRecordExport?: Maybe<CreateOperatorActivityRecordExportError>;
  createPromosExport?: Maybe<CreatePromosExportError>;
  createReferralExport?: Maybe<CreateReferralExportError>;
  createTournamentPayoutExport?: Maybe<CreateTournamentPayoutExportError>;
  createTransactionRecordExport?: Maybe<CreateTransactionRecordExportError>;
  createWithdrawalRecordExport?: Maybe<CreateWithdrawalRecordExportError>;
  markAllNotificationsAsRead: Scalars['Boolean']['output'];
  markNotificationAsRead: Scalars['Boolean']['output'];
  startSystemJob: Scalars['Boolean']['output'];
};


export type MutationCancelExportArgs = {
  input?: InputMaybe<CancelExportInput>;
};


export type MutationCreateBetRecordExportArgs = {
  input: CreateBetRecordExportInput;
};


export type MutationCreateBonusExportArgs = {
  input: CreateBonusExportInput;
};


export type MutationCreateDailyNetDepositReportExportArgs = {
  input: CreateDailyNetDepositReportExportInput;
};


export type MutationCreateDepositRecordExportArgs = {
  input?: InputMaybe<CreateDepositRecordExportInput>;
};


export type MutationCreateGameProviderGgrRecordExportArgs = {
  input?: InputMaybe<CreateGgrRecordExportInput>;
};


export type MutationCreateGameTypeGgrRecordExportArgs = {
  input?: InputMaybe<CreateGgrRecordExportInput>;
};


export type MutationCreateInFlowRecordExportArgs = {
  input?: InputMaybe<CreateInFlowRecordExportInput>;
};


export type MutationCreateJackpotPayoutExportArgs = {
  input?: InputMaybe<CreateJackpotPayoutExportInput>;
};


export type MutationCreateMemberActivityRecordExportArgs = {
  input?: InputMaybe<CreateMemberActivityRecordExportInput>;
};


export type MutationCreateMemberDailyNetDepositRecordExportArgs = {
  input: CreateMemberDailyNetDepositRecordExportInput;
};


export type MutationCreateMemberExportArgs = {
  input?: InputMaybe<CreateMemberExportInput>;
};


export type MutationCreateMemberGroupMemberExportArgs = {
  input: CreateMemberGroupMemberExportInput;
};


export type MutationCreateOperatorActivityRecordExportArgs = {
  input?: InputMaybe<CreateOperatorActivityRecordExportInput>;
};


export type MutationCreatePromosExportArgs = {
  input?: InputMaybe<CreatePromosExportInput>;
};


export type MutationCreateReferralExportArgs = {
  input?: InputMaybe<CreateReferralExportInput>;
};


export type MutationCreateTournamentPayoutExportArgs = {
  input: CreateTournamentPayoutExportInput;
};


export type MutationCreateTransactionRecordExportArgs = {
  input: CreateTransactionRecordExportInput;
};


export type MutationCreateWithdrawalRecordExportArgs = {
  input?: InputMaybe<CreateWithdrawalRecordExportInput>;
};


export type MutationMarkNotificationAsReadArgs = {
  input: MarkNotificationAsRead;
};


export type MutationStartSystemJobArgs = {
  input: StartSystemJobInput;
};

export type Node = {
  id: Scalars['ObjectId']['output'];
};

export type Notification = {
  dateTimeCreated: Scalars['DateTime']['output'];
  markedAsRead: Scalars['Boolean']['output'];
  type: NotificationType;
};

export type NotificationFilterInput = {
  markedAsRead?: InputMaybe<BooleanFilterInput>;
  type?: InputMaybe<NotificationTypeFilterInput>;
};

export enum NotificationType {
  MemberVerification = 'MEMBER_VERIFICATION'
}

export type NotificationTypeFilterInput = {
  equal?: InputMaybe<NotificationType>;
  in?: InputMaybe<Array<NotificationType>>;
  notEqual?: InputMaybe<NotificationType>;
  notIn?: InputMaybe<Array<NotificationType>>;
};

export type ObjectIdFilter = {
  __typename?: 'ObjectIdFilter';
  equal?: Maybe<Scalars['ObjectId']['output']>;
  in?: Maybe<Array<Scalars['ObjectId']['output']>>;
  notEqual?: Maybe<Scalars['ObjectId']['output']>;
  notIn?: Maybe<Array<Scalars['ObjectId']['output']>>;
};

export type ObjectIdFilterInput = {
  equal?: InputMaybe<Scalars['ObjectId']['input']>;
  in?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
  notEqual?: InputMaybe<Scalars['ObjectId']['input']>;
  notIn?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
};

export enum ObjectType {
  Account = 'ACCOUNT',
  DomainOperatorAccount = 'DOMAIN_OPERATOR_ACCOUNT',
  Export = 'EXPORT',
  LossRebate = 'LOSS_REBATE',
  LossRebateBonus = 'LOSS_REBATE_BONUS',
  Notification = 'NOTIFICATION',
  Platform = 'PLATFORM',
  Referral = 'REFERRAL',
  SystemJob = 'SYSTEM_JOB'
}

export type Operator = Node & {
  __typename?: 'Operator';
  id: Scalars['ObjectId']['output'];
  name: Scalars['String']['output'];
  type: AccountType;
};

export type OperatorActivity = Node & {
  __typename?: 'OperatorActivity';
  dateTimeCreated: Scalars['DateTime']['output'];
  details: Array<KeyValuePair>;
  id: Scalars['ObjectId']['output'];
  operator: OperatorActivityOperator;
  type: OperatorActivityType;
};

export type OperatorActivityFilterInput = {
  dateTimeCreated?: InputMaybe<DateTimeFilterInput>;
  operator?: InputMaybe<ObjectIdFilterInput>;
  type?: InputMaybe<OperatorActivityTypeFilterInput>;
};

export type OperatorActivityOperator = Node & {
  __typename?: 'OperatorActivityOperator';
  id: Scalars['ObjectId']['output'];
  name: Scalars['String']['output'];
};

export enum OperatorActivityType {
  ActivateCashback = 'ACTIVATE_CASHBACK',
  ApproveWithdrawal = 'APPROVE_WITHDRAWAL',
  BlacklistMemberAccount = 'BLACKLIST_MEMBER_ACCOUNT',
  CancelDeposit = 'CANCEL_DEPOSIT',
  CancelWithdrawal = 'CANCEL_WITHDRAWAL',
  ConfirmDeposit = 'CONFIRM_DEPOSIT',
  ConfirmWithdrawal = 'CONFIRM_WITHDRAWAL',
  CreateBonus = 'CREATE_BONUS',
  CreateCashback = 'CREATE_CASHBACK',
  CreateJackpot = 'CREATE_JACKPOT',
  CreateNewMember = 'CREATE_NEW_MEMBER',
  CreatePromo = 'CREATE_PROMO',
  DeactivateCashback = 'DEACTIVATE_CASHBACK',
  DeleteJackpot = 'DELETE_JACKPOT',
  DeleteMemberAccount = 'DELETE_MEMBER_ACCOUNT',
  DisableJackpot = 'DISABLE_JACKPOT',
  DisablePromo = 'DISABLE_PROMO',
  EnableJackpot = 'ENABLE_JACKPOT',
  EnablePromo = 'ENABLE_PROMO',
  Login = 'LOGIN',
  ManualDeposit = 'MANUAL_DEPOSIT',
  ManualWithdrawal = 'MANUAL_WITHDRAWAL',
  RejectWithdrawal = 'REJECT_WITHDRAWAL',
  SuspendMemberAccount = 'SUSPEND_MEMBER_ACCOUNT',
  UnsuspendMemberAccount = 'UNSUSPEND_MEMBER_ACCOUNT',
  UpdateCashback = 'UPDATE_CASHBACK',
  UpdateDepositSettings = 'UPDATE_DEPOSIT_SETTINGS',
  UpdateJackpot = 'UPDATE_JACKPOT',
  UpdateMemberAccount = 'UPDATE_MEMBER_ACCOUNT',
  UpdatePromo = 'UPDATE_PROMO',
  UpdateSystemAlertSettings = 'UPDATE_SYSTEM_ALERT_SETTINGS',
  UpdateWithdrawalSettings = 'UPDATE_WITHDRAWAL_SETTINGS',
  VoidWithdrawal = 'VOID_WITHDRAWAL'
}

export type OperatorActivityTypeFilterInput = {
  equal?: InputMaybe<OperatorActivityType>;
  in?: InputMaybe<Array<OperatorActivityType>>;
  notEqual?: InputMaybe<OperatorActivityType>;
  notIn?: InputMaybe<Array<OperatorActivityType>>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
};

export enum Permission {
  ReadBetRecord = 'READ_BET_RECORD',
  ReadBonus = 'READ_BONUS',
  ReadCashbackBonus = 'READ_CASHBACK_BONUS',
  ReadCashbackPromo = 'READ_CASHBACK_PROMO',
  ReadDailyNetDeposit = 'READ_DAILY_NET_DEPOSIT',
  ReadDashboard = 'READ_DASHBOARD',
  ReadDeposit = 'READ_DEPOSIT',
  ReadDepositPromo = 'READ_DEPOSIT_PROMO',
  ReadGgr = 'READ_GGR',
  ReadGrossGamingRevenue = 'READ_GROSS_GAMING_REVENUE',
  ReadInflowReport = 'READ_INFLOW_REPORT',
  ReadJackpot = 'READ_JACKPOT',
  ReadJackpotPayout = 'READ_JACKPOT_PAYOUT',
  ReadMember = 'READ_MEMBER',
  ReadMemberAccount = 'READ_MEMBER_ACCOUNT',
  ReadMemberActivity = 'READ_MEMBER_ACTIVITY',
  ReadMemberBalance = 'READ_MEMBER_BALANCE',
  /** @deprecated Use READ_BET_RECORD instead */
  ReadMemberBetRecords = 'READ_MEMBER_BET_RECORDS',
  ReadMemberDepositWithdrawalRecord = 'READ_MEMBER_DEPOSIT_WITHDRAWAL_RECORD',
  ReadMemberGroup = 'READ_MEMBER_GROUP',
  ReadMemberKyc = 'READ_MEMBER_KYC',
  ReadMemberProfileBetRecord = 'READ_MEMBER_PROFILE_BET_RECORD',
  ReadMemberProfileTransaction = 'READ_MEMBER_PROFILE_TRANSACTION',
  ReadMobileNumber = 'READ_MOBILE_NUMBER',
  ReadPaymentSettings = 'READ_PAYMENT_SETTINGS',
  ReadPaymentWithdrawals = 'READ_PAYMENT_WITHDRAWALS',
  ReadPointsWallet = 'READ_POINTS_WALLET',
  ReadTournament = 'READ_TOURNAMENT',
  ReadTournamentPayout = 'READ_TOURNAMENT_PAYOUT',
  ReadWithdrawal = 'READ_WITHDRAWAL',
  WriteBetRecord = 'WRITE_BET_RECORD',
  WriteCashbackPromo = 'WRITE_CASHBACK_PROMO',
  WriteDeposit = 'WRITE_DEPOSIT',
  WriteDepositPromo = 'WRITE_DEPOSIT_PROMO',
  WriteJackpot = 'WRITE_JACKPOT',
  WriteMemberAccount = 'WRITE_MEMBER_ACCOUNT',
  WriteMemberBalance = 'WRITE_MEMBER_BALANCE',
  WriteMemberGroup = 'WRITE_MEMBER_GROUP',
  WriteMemberKyc = 'WRITE_MEMBER_KYC',
  WriteMemberProfile = 'WRITE_MEMBER_PROFILE',
  WritePaymentSettings = 'WRITE_PAYMENT_SETTINGS',
  WritePaymentWithdrawals = 'WRITE_PAYMENT_WITHDRAWALS',
  WritePointsClubSettings = 'WRITE_POINTS_CLUB_SETTINGS',
  WriteTournament = 'WRITE_TOURNAMENT',
  WriteWithdrawal = 'WRITE_WITHDRAWAL'
}

export type PisoPayRemittanceWithdrawalRecord = Node & WithdrawalRecord & {
  __typename?: 'PisoPayRemittanceWithdrawalRecord';
  accountName?: Maybe<Scalars['String']['output']>;
  accountNumber?: Maybe<Scalars['String']['output']>;
  amount: Scalars['Decimal']['output'];
  bankCode?: Maybe<Scalars['String']['output']>;
  bankName?: Maybe<Scalars['String']['output']>;
  dateTimeConfirmed?: Maybe<Scalars['DateTime']['output']>;
  dateTimeCreated: Scalars['DateTime']['output'];
  dateTimeLastUpdated: Scalars['DateTime']['output'];
  domain?: Maybe<Scalars['String']['output']>;
  error?: Maybe<WithdrawalError>;
  fee: Scalars['Decimal']['output'];
  id: Scalars['ObjectId']['output'];
  member?: Maybe<Member>;
  netAmount: Scalars['Decimal']['output'];
  platform?: Maybe<Platform>;
  reference?: Maybe<Scalars['String']['output']>;
  referrer?: Maybe<Member>;
  remarks?: Maybe<Scalars['String']['output']>;
  status: WithdrawalStatus;
  type: WithdrawalType;
  withdrawal: Scalars['ObjectId']['output'];
  withdrawalNumber?: Maybe<Scalars['String']['output']>;
};

export type Platform = Node & {
  __typename?: 'Platform';
  code: Scalars['String']['output'];
  currency: Currency;
  dateTimeCreated: Scalars['DateTime']['output'];
  dateTimeLastUpdated: Scalars['DateTime']['output'];
  id: Scalars['ObjectId']['output'];
  name: Scalars['String']['output'];
  status: PlatformStatus;
  timezone: Scalars['Timezone']['output'];
};

export enum PlatformStatus {
  Active = 'ACTIVE',
  Disabled = 'DISABLED',
  Locked = 'LOCKED'
}

export type PointsWallet = Node & {
  __typename?: 'PointsWallet';
  dateTimeCreated: Scalars['DateTime']['output'];
  id: Scalars['ObjectId']['output'];
  points: Scalars['Decimal']['output'];
};

export type PointsWalletTransaction = Node & {
  __typename?: 'PointsWalletTransaction';
  amount: Scalars['Decimal']['output'];
  balance: Scalars['Decimal']['output'];
  dateTimeCreated: Scalars['DateTime']['output'];
  id: Scalars['ObjectId']['output'];
  type: PointsWalletTransactionType;
};

export enum PointsWalletTransactionType {
  PointsToCashConversion = 'POINTS_TO_CASH_CONVERSION',
  TurnoverCommission = 'TURNOVER_COMMISSION'
}

export type PointsWalletTransactionTypeFilterInput = {
  equal?: InputMaybe<PointsWalletTransactionType>;
  in?: InputMaybe<Array<PointsWalletTransactionType>>;
  notEqual?: InputMaybe<PointsWalletTransactionType>;
  notIn?: InputMaybe<Array<PointsWalletTransactionType>>;
};

export type Promo = {
  activationEndDateTime?: Maybe<Scalars['DateTime']['output']>;
  activationStartDateTime?: Maybe<Scalars['DateTime']['output']>;
  activeBonusesCount: Scalars['Int']['output'];
  banner?: Maybe<File>;
  bonusesCount: Scalars['Int']['output'];
  cancelledBonusesCount: Scalars['Int']['output'];
  clearedBonusesCount: Scalars['Int']['output'];
  closedBonusesCount: Scalars['Int']['output'];
  closedBonusesCountPercentage: Scalars['Decimal']['output'];
  dateTimeClosed?: Maybe<Scalars['DateTime']['output']>;
  dateTimeCreated: Scalars['DateTime']['output'];
  dateTimeLastUpdated: Scalars['DateTime']['output'];
  daysToClear: Scalars['Int']['output'];
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  enabledGameProviders: Array<GameProvider>;
  /** @deprecated No longer supported */
  enrolledMembersCount: Scalars['Int']['output'];
  expiredBonusesCount: Scalars['Int']['output'];
  minimumTicketOddFactorPerSportsGameProvider: Scalars['JSON']['output'];
  name: Scalars['String']['output'];
  status: PromoStatus;
  /** @deprecated use `totalBonusBalance` */
  totalActiveBonus: Scalars['Decimal']['output'];
  totalBet: Scalars['Decimal']['output'];
  totalBonus: Scalars['Decimal']['output'];
  /** @deprecated use `totalBonusCashedOut` */
  totalBonusAwarded: Scalars['Decimal']['output'];
  totalBonusBalance: Scalars['Decimal']['output'];
  totalBonusCashedOut: Scalars['Decimal']['output'];
  totalDeposit?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated use `totalBet` */
  totalTurnover: Scalars['Decimal']['output'];
  turnoverRequirementContributionPercentagePerGameProvider: Scalars['JSON']['output'];
  turnoverRequirementMultiplier?: Maybe<Scalars['Int']['output']>;
  turnoverRequirementType?: Maybe<TurnoverRequirementType>;
  type: PromoType;
  zeroOutThreshold: Scalars['Decimal']['output'];
  zeroedOutBonusesCount: Scalars['Int']['output'];
};

export type PromoAggregates = {
  __typename?: 'PromoAggregates';
  activeBonusesCount: Scalars['Decimal']['output'];
  totalActiveBonus: Scalars['Decimal']['output'];
  totalBet: Scalars['Decimal']['output'];
  totalBonus: Scalars['Decimal']['output'];
  totalBonusAwarded: Scalars['Decimal']['output'];
  totalBonusBalance: Scalars['Decimal']['output'];
  totalBonusCashedOut: Scalars['Decimal']['output'];
  totalDeposit: Scalars['Decimal']['output'];
  totalTurnover: Scalars['Decimal']['output'];
};

export type PromoFilterInput = {
  activationEndDateTime?: InputMaybe<DateTimeFilterInput>;
  activationStartDateTime?: InputMaybe<DateTimeFilterInput>;
  dateTimeClosed?: InputMaybe<DateTimeFilterInput>;
  dateTimeCreated?: InputMaybe<DateTimeFilterInput>;
  enabled?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<ObjectIdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<PromoStatusFilterInput>;
  totalBonusAmount?: InputMaybe<DecimalFilterInput>;
  type?: InputMaybe<PromoTypeFilterInput>;
};

export enum PromoStatus {
  Active = 'ACTIVE',
  Disabled = 'DISABLED',
  Inactive = 'INACTIVE'
}

export type PromoStatusFilterInput = {
  equal?: InputMaybe<PromoStatus>;
  in?: InputMaybe<Array<PromoStatus>>;
  notEqual?: InputMaybe<PromoStatus>;
  notIn?: InputMaybe<Array<PromoStatus>>;
};

export enum PromoType {
  Deposit = 'DEPOSIT',
  Generic = 'GENERIC',
  Registration = 'REGISTRATION',
  SpotBonus = 'SPOT_BONUS'
}

export type PromoTypeFilterInput = {
  equal?: InputMaybe<PromoType>;
  in?: InputMaybe<Array<PromoType>>;
  notEqual?: InputMaybe<PromoType>;
  notIn?: InputMaybe<Array<PromoType>>;
};

export type PromosByNameFilterInput = {
  activationEndDateTime?: InputMaybe<DateTimeFilterInput>;
  activationStartDateTime?: InputMaybe<DateTimeFilterInput>;
  enabled?: InputMaybe<BooleanFilterInput>;
  status?: InputMaybe<PromoStatusFilterInput>;
  type?: InputMaybe<PromoTypeFilterInput>;
};

export type Query = {
  __typename?: 'Query';
  _betRecords: _Connection;
  _members: _Connection;
  achievementPointsHistoryRecords: Connection;
  activeMembersChartData: ChartData;
  activePromos: Array<Promo>;
  agentsByName: Array<Agent>;
  availableCashbacks: Array<Cashback>;
  availablePromos: Array<Promo>;
  betRecordAggregates?: Maybe<BetRecordAggregates>;
  betRecords: Connection;
  betRecordsByVendorId: Array<BetRecord>;
  betsChartData: ChartData;
  bonusAggregates: BonusAggregates;
  bonuses: Connection;
  cabinetSiteSessionReport: CabinetSiteSessionReport;
  cashbackAggregates: CashbackAggregates;
  cashbacks: Connection;
  cashbacksByName: Array<Cashback>;
  cohortsAnalysisData: CohortsAnalysisData;
  dailyNetDepositReport: DailyNetDepositReport;
  depositRecordAggregates?: Maybe<DepositRecordAggregates>;
  depositRecords: Connection;
  downlinesByName: Array<Referral>;
  exports: Array<Export>;
  /** @deprecated No longer supported */
  filteredMembersCount: Scalars['Int']['output'];
  firstDepositsChartData: ChartData;
  games: Connection;
  gamesByName: Array<Game>;
  grossGamingRevenueReport: GrossGamingRevenueReport;
  historicalActiveMembers: Array<DataPoint>;
  historicalActiveMembersCount: Array<DataPoint>;
  historicalBetRecordsCount: Array<DataPoint>;
  historicalDeposit: Array<DataPoint>;
  historicalFirstDepositsCount: Array<DataPoint>;
  historicalTurnover: Array<DataPoint>;
  historicalWinloss: Array<DataPoint>;
  historicalWithdrawal: Array<DataPoint>;
  inflowRecords: Connection;
  jackpotPayoutAggregates: JackpotPayoutAggregates;
  jackpotPayouts: Connection;
  jackpots: Connection;
  jackpotsByName?: Maybe<Array<Jackpot>>;
  lossRebate: Connection;
  lossRebateBonus: Connection;
  member: Member;
  memberActivities: Connection;
  /** @deprecated use Query.memberActivities instead */
  memberActivityRecords: Connection;
  memberAggregates?: Maybe<MemberAggregates>;
  memberGroups: Connection;
  memberGroupsByName: Array<MemberGroup>;
  memberLabels: Connection;
  memberLabelsByName: Array<MemberLabel>;
  members: Connection;
  membersByDomain: Array<Member>;
  membersByEmailAddress: Array<Member>;
  membersByMobileNumber: Array<Member>;
  membersByName: Array<Member>;
  membersByRealName: Array<Member>;
  membersByReferralCode: Array<Member>;
  node?: Maybe<Node>;
  notifications: Connection;
  operatorActivities: Connection;
  operatorsByName: Array<Operator>;
  pointsWalletTransactions: Connection;
  promoAggregates: PromoAggregates;
  promoByCode?: Maybe<SpotBonusPromo>;
  promos: Connection;
  promosByName: Array<Promo>;
  referralCommissions: Connection;
  referralLevelGameTypeSettings?: Maybe<ReferralLevelGameTypeSettings>;
  summary: Summary;
  timestamp: Scalars['DateTime']['output'];
  totalActiveMembers: Scalars['Decimal']['output'];
  totalActiveMembersCount: Scalars['Decimal']['output'];
  totalBetChartData: ChartData;
  totalBetRecordsCount: Scalars['Decimal']['output'];
  totalDeposit: Scalars['Decimal']['output'];
  totalDepositChartData: ChartData;
  totalFirstDepositsCount: Scalars['Decimal']['output'];
  totalTurnover: Scalars['Decimal']['output'];
  totalWinloss: Scalars['Decimal']['output'];
  totalWinlossChartData: ChartData;
  totalWithdrawal: Scalars['Decimal']['output'];
  totalWithdrawalChartData: ChartData;
  tournamentAggregates: TournamentAggregates;
  tournamentPayoutAggregates: TournamentPayoutAggregates;
  tournamentPayouts: Connection;
  tournaments: Connection;
  tournamentsByName?: Maybe<Array<Tournament>>;
  transactionRecords: Connection;
  uplinesByName: Array<Referral>;
  withdrawalRecordAggregates?: Maybe<WithdrawalRecordAggregates>;
  withdrawalRecords: Connection;
};


export type Query_BetRecordsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<BetRecordFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<_BetRecordSortInput>;
};


export type Query_MembersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MemberFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<_MemberSortInput>;
};


export type QueryAchievementPointsHistoryRecordsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AchievementPointsHistoryRecordFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryActiveMembersChartDataArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};


export type QueryAgentsByNameArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  search: Scalars['String']['input'];
};


export type QueryAvailableCashbacksArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBetRecordAggregatesArgs = {
  filter?: InputMaybe<BetRecordFilterInput>;
  sort?: InputMaybe<SortOrder>;
};


export type QueryBetRecordsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<BetRecordFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortOrder>;
};


export type QueryBetRecordsByVendorIdArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  search: Scalars['String']['input'];
};


export type QueryBetsChartDataArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};


export type QueryBonusAggregatesArgs = {
  filter?: InputMaybe<BonusFilterInput>;
};


export type QueryBonusesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<BonusFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCabinetSiteSessionReportArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  gameCategory: GameCategory;
  startDateTime: Scalars['DateTime']['input'];
};


export type QueryCashbackAggregatesArgs = {
  filter?: InputMaybe<CashbackFilterInput>;
  month: Scalars['Month']['input'];
};


export type QueryCashbacksArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CashbackFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCashbacksByNameArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  search: Scalars['String']['input'];
};


export type QueryCohortsAnalysisDataArgs = {
  interval: CohortInterval;
};


export type QueryDailyNetDepositReportArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};


export type QueryDepositRecordAggregatesArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  filter?: InputMaybe<DepositRecordFilterInput>;
  sort?: InputMaybe<SortOrder>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryDepositRecordsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  filter?: InputMaybe<DepositRecordFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryDownlinesByNameArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  search: Scalars['String']['input'];
};


export type QueryFilteredMembersCountArgs = {
  filter: MemberFilterInput;
};


export type QueryFirstDepositsChartDataArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};


export type QueryGamesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GameFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<GameSortInput>;
};


export type QueryGamesByNameArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  search: Scalars['String']['input'];
};


export type QueryGrossGamingRevenueReportArgs = {
  domain?: InputMaybe<Scalars['String']['input']>;
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};


export type QueryHistoricalActiveMembersArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryHistoricalActiveMembersCountArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryHistoricalBetRecordsCountArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryHistoricalDepositArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryHistoricalFirstDepositsCountArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryHistoricalTurnoverArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryHistoricalWinlossArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryHistoricalWithdrawalArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryInflowRecordsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<InflowRecordFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryJackpotPayoutAggregatesArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  filter?: InputMaybe<JackpotPayoutFilterInput>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryJackpotPayoutsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<JackpotPayoutFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<JackpotPayoutSortInput>;
};


export type QueryJackpotsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<JackpotFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<JackpotSortInput>;
};


export type QueryJackpotsByNameArgs = {
  filter?: InputMaybe<JackpotFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  search: Scalars['String']['input'];
};


export type QueryLossRebateArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<LossRebateFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<LossRebateSortInput>;
};


export type QueryLossRebateBonusArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<LossRebateBonusFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<LossRebateBonusSortInput>;
};


export type QueryMemberActivitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MemberActivityFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMemberActivityRecordsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MemberActivityRecordFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMemberAggregatesArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  filter?: InputMaybe<MemberFilterInput>;
  sort?: InputMaybe<SortOrder>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryMemberGroupsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MemberGroupFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<MemberGroupSortInput>;
};


export type QueryMemberGroupsByNameArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  search: Scalars['String']['input'];
};


export type QueryMemberLabelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MemberLabelFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<MemberLabelSortInput>;
};


export type QueryMemberLabelsByNameArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  search: Scalars['String']['input'];
};


export type QueryMembersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MemberFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<MemberSortInput>;
  totalCount?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMembersByDomainArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  search: Scalars['String']['input'];
};


export type QueryMembersByEmailAddressArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  search: Scalars['String']['input'];
};


export type QueryMembersByMobileNumberArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  search: Scalars['String']['input'];
};


export type QueryMembersByNameArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  search: Scalars['String']['input'];
};


export type QueryMembersByRealNameArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  search: Scalars['String']['input'];
};


export type QueryMembersByReferralCodeArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  search: Scalars['String']['input'];
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['ObjectId']['input']>;
};


export type QueryNotificationsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<NotificationFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryOperatorActivitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OperatorActivityFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryOperatorsByNameArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  search: Scalars['String']['input'];
};


export type QueryPointsWalletTransactionsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<QueryPointsWalletTransactionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPromoAggregatesArgs = {
  filter?: InputMaybe<PromoFilterInput>;
};


export type QueryPromoByCodeArgs = {
  code: Scalars['String']['input'];
};


export type QueryPromosArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PromoFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPromosByNameArgs = {
  filter?: InputMaybe<PromosByNameFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  search: Scalars['String']['input'];
};


export type QueryReferralCommissionsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ReferralCommissionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ReferralCommissionSortInput>;
};


export type QueryReferralLevelGameTypeSettingsArgs = {
  gameType: GameType;
  level: Scalars['Int']['input'];
};


export type QuerySummaryArgs = {
  endDateTime: Scalars['DateTime']['input'];
  platform?: InputMaybe<ObjectIdFilterInput>;
  startDateTime: Scalars['DateTime']['input'];
};


export type QueryTotalActiveMembersArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryTotalActiveMembersCountArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryTotalBetChartDataArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};


export type QueryTotalBetRecordsCountArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryTotalDepositArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryTotalDepositChartDataArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};


export type QueryTotalFirstDepositsCountArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryTotalTurnoverArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryTotalWinlossArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryTotalWinlossChartDataArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};


export type QueryTotalWithdrawalArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryTotalWithdrawalChartDataArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};


export type QueryTournamentAggregatesArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  filter?: InputMaybe<TournamentFilterInput>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryTournamentPayoutAggregatesArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  filter?: InputMaybe<TournamentPayoutFilterInput>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryTournamentPayoutsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<TournamentPayoutFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<TournamentPayoutSortInput>;
};


export type QueryTournamentsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<TournamentFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTournamentsByNameArgs = {
  filter?: InputMaybe<TournamentFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  search: Scalars['String']['input'];
};


export type QueryTransactionRecordsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  filter?: InputMaybe<TransactionRecordFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryUplinesByNameArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  search: Scalars['String']['input'];
};


export type QueryWithdrawalRecordAggregatesArgs = {
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  filter?: InputMaybe<WithdrawalRecordFilterInput>;
  sort?: InputMaybe<SortOrder>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryWithdrawalRecordsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  filter?: InputMaybe<WithdrawalRecordFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};

export type QueryPointsWalletTransactionFilterInput = {
  account?: InputMaybe<ObjectIdFilterInput>;
  amount?: InputMaybe<DecimalFilterInput>;
  balance?: InputMaybe<DecimalFilterInput>;
  dateTimeCreated?: InputMaybe<DateTimeFilterInput>;
  type?: InputMaybe<PointsWalletTransactionTypeFilterInput>;
};

export type Referral = Node & {
  __typename?: 'Referral';
  commission: Scalars['Decimal']['output'];
  dateTimeCreated: Scalars['DateTime']['output'];
  downline: Member;
  downline__name: Scalars['String']['output'];
  id: Scalars['ObjectId']['output'];
  level: Scalars['Int']['output'];
  turnover: Scalars['Decimal']['output'];
  upline: Member;
  upline__name: Scalars['String']['output'];
};

export type ReferralCommission = Node & {
  __typename?: 'ReferralCommission';
  account: Member;
  commission: Scalars['Decimal']['output'];
  dateTimeCreated: Scalars['DateTime']['output'];
  dateTimeLastUpdated: Scalars['DateTime']['output'];
  id: Scalars['ObjectId']['output'];
  level1Commission: Scalars['Decimal']['output'];
  level1ReferralsCount: Scalars['Int']['output'];
  level2Commission: Scalars['Decimal']['output'];
  level2ReferralsCount: Scalars['Int']['output'];
  level3Commission: Scalars['Decimal']['output'];
  level3ReferralsCount: Scalars['Int']['output'];
  referralCode?: Maybe<Scalars['String']['output']>;
  referralsCount: Scalars['Int']['output'];
};

export enum ReferralCommissionCursor {
  Commission = 'COMMISSION',
  Referralscount = 'REFERRALSCOUNT'
}

export type ReferralCommissionFilterInput = {
  account?: InputMaybe<ObjectIdFilterInput>;
  id?: InputMaybe<ObjectIdFilterInput>;
};

export type ReferralCommissionSortInput = {
  cursor: ReferralCommissionCursor;
  order: SortOrder;
};

export enum ReferralCursor {
  Commission = 'COMMISSION',
  Level = 'LEVEL',
  Turnover = 'TURNOVER'
}

export type ReferralFilterInput = {
  downline?: InputMaybe<ObjectIdFilterInput>;
  level?: InputMaybe<IntFilterInput>;
  upline?: InputMaybe<ObjectIdFilterInput>;
};

export type ReferralLevelGameTypeSettings = {
  __typename?: 'ReferralLevelGameTypeSettings';
  maximumTurnoverCommission?: Maybe<Scalars['Decimal']['output']>;
  turnoverCommissionPercentage?: Maybe<Scalars['Decimal']['output']>;
};

export type ReferralSortInput = {
  cursor: ReferralCursor;
  order: SortOrder;
};

export type RegistrationPromo = Node & Promo & {
  __typename?: 'RegistrationPromo';
  activationEndDateTime?: Maybe<Scalars['DateTime']['output']>;
  activationStartDateTime?: Maybe<Scalars['DateTime']['output']>;
  activeBonusesCount: Scalars['Int']['output'];
  banner?: Maybe<File>;
  bonusAmount?: Maybe<Scalars['Decimal']['output']>;
  bonusesCount: Scalars['Int']['output'];
  cancelledBonusesCount: Scalars['Int']['output'];
  clearedBonusesCount: Scalars['Int']['output'];
  closedBonusesCount: Scalars['Int']['output'];
  closedBonusesCountPercentage: Scalars['Decimal']['output'];
  code: Scalars['String']['output'];
  dateTimeClosed?: Maybe<Scalars['DateTime']['output']>;
  dateTimeCreated: Scalars['DateTime']['output'];
  dateTimeLastUpdated: Scalars['DateTime']['output'];
  daysToClear: Scalars['Int']['output'];
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  enabledGameProviders: Array<GameProvider>;
  /** @deprecated No longer supported */
  enrolledMembersCount: Scalars['Int']['output'];
  excludeReferrals?: Maybe<Scalars['Boolean']['output']>;
  expiredBonusesCount: Scalars['Int']['output'];
  id: Scalars['ObjectId']['output'];
  maximumBonusesCountLimit: Scalars['Int']['output'];
  maximumTotalBonus?: Maybe<Scalars['Decimal']['output']>;
  messageContent?: Maybe<Scalars['String']['output']>;
  messageTitle?: Maybe<Scalars['String']['output']>;
  minimumTicketOddFactorPerSportsGameProvider: Scalars['JSON']['output'];
  name: Scalars['String']['output'];
  status: PromoStatus;
  /** @deprecated use `totalBonusBalance` */
  totalActiveBonus: Scalars['Decimal']['output'];
  totalBet: Scalars['Decimal']['output'];
  totalBonus: Scalars['Decimal']['output'];
  /** @deprecated use `totalBonusCashedOut` */
  totalBonusAwarded: Scalars['Decimal']['output'];
  totalBonusBalance: Scalars['Decimal']['output'];
  totalBonusCashedOut: Scalars['Decimal']['output'];
  totalDeposit?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated use `totalBet` */
  totalTurnover: Scalars['Decimal']['output'];
  turnoverRequirementContributionPercentagePerGameProvider: Scalars['JSON']['output'];
  turnoverRequirementMultiplier?: Maybe<Scalars['Int']['output']>;
  turnoverRequirementType?: Maybe<TurnoverRequirementType>;
  type: PromoType;
  zeroOutThreshold: Scalars['Decimal']['output'];
  zeroedOutBonusesCount: Scalars['Int']['output'];
};

export enum Role {
  Admin = 'ADMIN',
  DomainOperator = 'DOMAIN_OPERATOR',
  Member = 'MEMBER',
  Operator = 'OPERATOR',
  SuperAdmin = 'SUPER_ADMIN'
}

export type Session = {
  __typename?: 'Session';
  domain?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ObjectId']['output']>;
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type SpotBonusPromo = Node & Promo & {
  __typename?: 'SpotBonusPromo';
  activationEndDateTime?: Maybe<Scalars['DateTime']['output']>;
  activationStartDateTime?: Maybe<Scalars['DateTime']['output']>;
  activeBonusesCount: Scalars['Int']['output'];
  banner?: Maybe<File>;
  bonusAmount?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated No longer supported */
  bonusAmountPerMemberLevel?: Maybe<Scalars['JSON']['output']>;
  bonusConfigurationPerMemberLevel?: Maybe<Scalars['JSON']['output']>;
  bonusesCount: Scalars['Int']['output'];
  cancelledBonusesCount: Scalars['Int']['output'];
  clearedBonusesCount: Scalars['Int']['output'];
  closedBonusesCount: Scalars['Int']['output'];
  closedBonusesCountPercentage: Scalars['Decimal']['output'];
  code: Scalars['String']['output'];
  dateTimeClosed?: Maybe<Scalars['DateTime']['output']>;
  dateTimeCreated: Scalars['DateTime']['output'];
  dateTimeLastUpdated: Scalars['DateTime']['output'];
  daysToClear: Scalars['Int']['output'];
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  enabledGameProviders: Array<GameProvider>;
  /** @deprecated No longer supported */
  enrolledMembersCount: Scalars['Int']['output'];
  expiredBonusesCount: Scalars['Int']['output'];
  id: Scalars['ObjectId']['output'];
  maximumBonusesCountLimit: Scalars['Int']['output'];
  memberGroups?: Maybe<Array<Maybe<MemberGroup>>>;
  minimumTicketOddFactorPerSportsGameProvider: Scalars['JSON']['output'];
  name: Scalars['String']['output'];
  status: PromoStatus;
  /** @deprecated use `totalBonusBalance` */
  totalActiveBonus: Scalars['Decimal']['output'];
  totalBet: Scalars['Decimal']['output'];
  totalBonus: Scalars['Decimal']['output'];
  /** @deprecated use `totalBonusCashedOut` */
  totalBonusAwarded: Scalars['Decimal']['output'];
  totalBonusBalance: Scalars['Decimal']['output'];
  totalBonusCashedOut: Scalars['Decimal']['output'];
  totalDeposit?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated use `totalBet` */
  totalTurnover: Scalars['Decimal']['output'];
  turnoverRequirementContributionPercentagePerGameProvider: Scalars['JSON']['output'];
  turnoverRequirementMultiplier?: Maybe<Scalars['Int']['output']>;
  turnoverRequirementType?: Maybe<TurnoverRequirementType>;
  type: PromoType;
  zeroOutThreshold: Scalars['Decimal']['output'];
  zeroedOutBonusesCount: Scalars['Int']['output'];
};

export type StartSystemJobInput = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['SystemJobObjectId']['input'];
  type: SystemJobType;
};

export type StringFilter = {
  __typename?: 'StringFilter';
  equal?: Maybe<Scalars['String']['output']>;
  in?: Maybe<Array<Scalars['String']['output']>>;
  notEqual?: Maybe<Scalars['String']['output']>;
  notIn?: Maybe<Array<Scalars['String']['output']>>;
};

export type StringFilterInput = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equal?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  notEqual?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Summary = {
  __typename?: 'Summary';
  betSummary: BetSummary;
  grossGamingRevenue: Scalars['Decimal']['output'];
  netDeposit: Scalars['Decimal']['output'];
  platform?: Maybe<Platform>;
  totalBalance: Scalars['Decimal']['output'];
  totalBet: Scalars['Decimal']['output'];
  totalDeposit: Scalars['Decimal']['output'];
  totalJackpotContribution: Scalars['Decimal']['output'];
  totalJackpotPayout: Scalars['Decimal']['output'];
  totalPayout: Scalars['Decimal']['output'];
  totalWithdrawal: Scalars['Decimal']['output'];
  totalWithdrawalConfirmed: Scalars['Decimal']['output'];
  totalWithdrawalUnconfirmed: Scalars['Decimal']['output'];
};


export type SummaryBetSummaryArgs = {
  filter?: InputMaybe<BetSummaryFilterInput>;
};

export type SystemJob = Node & {
  __typename?: 'SystemJob';
  data?: Maybe<Scalars['JSON']['output']>;
  dateTimeCreated: Scalars['DateTime']['output'];
  dateTimeLastUpdated: Scalars['DateTime']['output'];
  id: Scalars['ObjectId']['output'];
  status: SystemJobStatus;
  type: SystemJobType;
};

export enum SystemJobStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Running = 'RUNNING'
}

export enum SystemJobType {
  GenerateCurrentReports = 'GENERATE_CURRENT_REPORTS',
  RangedMemberMetricsCalculation = 'RANGED_MEMBER_METRICS_CALCULATION',
  SendGtsiRecords = 'SEND_GTSI_RECORDS'
}

export type Tournament = {
  activationEndDateTime?: Maybe<Scalars['DateTime']['output']>;
  activationStartDateTime?: Maybe<Scalars['DateTime']['output']>;
  currentLeaderboard: Connection;
  dateTimeCreated?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  previousLeaderboard: Connection;
  status: TournamentStatus;
  topPayouts?: Maybe<Array<TournamentPayout>>;
  totalPayout: Scalars['Decimal']['output'];
  type: TournamentType;
};


export type TournamentCurrentLeaderboardArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type TournamentPreviousLeaderboardArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type TournamentAggregates = {
  __typename?: 'TournamentAggregates';
  totalPayout: Scalars['Decimal']['output'];
};

export type TournamentFilterInput = {
  activationEndDateTime?: InputMaybe<DateTimeFilterInput>;
  activationStartDateTime?: InputMaybe<DateTimeFilterInput>;
  dateTimeCreated?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<ObjectIdFilterInput>;
  status?: InputMaybe<TournamentStatusFilterInput>;
  totalPayout?: InputMaybe<DecimalFilterInput>;
  type?: InputMaybe<TournamentTypeFilterInput>;
};

export enum TournamentFrequency {
  Daily = 'DAILY',
  Monthly = 'MONTHLY',
  Weekly = 'WEEKLY'
}

export type TournamentLeaderboard = Node & {
  __typename?: 'TournamentLeaderboard';
  dateTimeCreated: Scalars['DateTime']['output'];
  id: Scalars['ObjectId']['output'];
  multiplier: Scalars['Int']['output'];
  prize?: Maybe<Scalars['Decimal']['output']>;
  username: Scalars['String']['output'];
};

export enum TournamentMode {
  OneTime = 'ONE_TIME',
  Recurring = 'RECURRING'
}

export type TournamentPayout = Node & {
  __typename?: 'TournamentPayout';
  amount: Scalars['Decimal']['output'];
  bet: Scalars['Decimal']['output'];
  dateTimeCreated: Scalars['DateTime']['output'];
  id: Scalars['ObjectId']['output'];
  member: Member;
  multiplier: Scalars['Int']['output'];
  rank: Scalars['Int']['output'];
  serialCode: Scalars['String']['output'];
  tournament: Tournament;
};

export type TournamentPayoutAggregates = {
  __typename?: 'TournamentPayoutAggregates';
  amount: Scalars['Decimal']['output'];
  bet: Scalars['Decimal']['output'];
};

export enum TournamentPayoutCursor {
  Amount = 'AMOUNT'
}

export type TournamentPayoutFilterInput = {
  dateTimeCreated?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<ObjectIdFilterInput>;
  member?: InputMaybe<ObjectIdFilterInput>;
  tournament?: InputMaybe<ObjectIdFilterInput>;
};

export type TournamentPayoutSortInput = {
  cursor: TournamentPayoutCursor;
  order: SortOrder;
};

export enum TournamentStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
  Inactive = 'INACTIVE'
}

export type TournamentStatusFilterInput = {
  equal?: InputMaybe<TournamentStatus>;
  in?: InputMaybe<Array<TournamentStatus>>;
  notEqual?: InputMaybe<TournamentStatus>;
  notIn?: InputMaybe<Array<TournamentStatus>>;
};

export enum TournamentType {
  Multiplier = 'MULTIPLIER'
}

export type TournamentTypeFilterInput = {
  equal?: InputMaybe<TournamentType>;
  in?: InputMaybe<Array<TournamentType>>;
  notEqual?: InputMaybe<TournamentType>;
  notIn?: InputMaybe<Array<TournamentType>>;
};

export type TransactionRecord = Node & {
  __typename?: 'TransactionRecord';
  amount: Scalars['Decimal']['output'];
  content?: Maybe<Scalars['String']['output']>;
  currentBalance: Scalars['Decimal']['output'];
  currentBonusBalance?: Maybe<Scalars['Decimal']['output']>;
  dateTimeCreated: Scalars['DateTime']['output'];
  details?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ObjectId']['output'];
  member?: Maybe<Member>;
  referenceNumber: Scalars['String']['output'];
  reservedBalance?: Maybe<Scalars['Decimal']['output']>;
  type: TransactionRecordType;
};

export type TransactionRecordFilter = {
  amount?: InputMaybe<DecimalFilterInput>;
  currentBalance?: InputMaybe<DecimalFilterInput>;
  currentBonusBalance?: InputMaybe<DecimalFilterInput>;
  dateTimeCreated?: InputMaybe<DateTimeFilterInput>;
  member?: InputMaybe<ObjectIdFilterInput>;
  member__name?: InputMaybe<StringFilterInput>;
  referenceNumber?: InputMaybe<StringFilterInput>;
  reservedBalance?: InputMaybe<DecimalFilterInput>;
  type?: InputMaybe<TransactionRecordTypeFilterInput>;
};

export enum TransactionRecordType {
  /** @deprecated No longer supported */
  BankWithdrawal = 'BANK_WITHDRAWAL',
  Bet = 'BET',
  BetRefund = 'BET_REFUND',
  /** @deprecated No longer supported */
  Bonus = 'BONUS',
  BonusBet = 'BONUS_BET',
  BonusCancelled = 'BONUS_CANCELLED',
  BonusCleared = 'BONUS_CLEARED',
  BonusCreated = 'BONUS_CREATED',
  BonusPayout = 'BONUS_PAYOUT',
  BonusZeroedOut = 'BONUS_ZEROED_OUT',
  CashbackBonus = 'CASHBACK_BONUS',
  /** @deprecated No longer supported */
  CommitReserve = 'COMMIT_RESERVE',
  CreditReservedBalance = 'CREDIT_RESERVED_BALANCE',
  DebitReservedBalance = 'DEBIT_RESERVED_BALANCE',
  Deposit = 'DEPOSIT',
  /** @deprecated No longer supported */
  GcashDeposit = 'GCASH_DEPOSIT',
  /** @deprecated No longer supported */
  GcashWithdrawal = 'GCASH_WITHDRAWAL',
  JackpotPayout = 'JACKPOT_PAYOUT',
  /** @deprecated No longer supported */
  ManualDeposit = 'MANUAL_DEPOSIT',
  /** @deprecated No longer supported */
  ManualWithdrawal = 'MANUAL_WITHDRAWAL',
  Payout = 'PAYOUT',
  /** @deprecated No longer supported */
  PayoutRefund = 'PAYOUT_REFUND',
  PointsToCashConversion = 'POINTS_TO_CASH_CONVERSION',
  /** @deprecated No longer supported */
  RejectWithdrawal = 'REJECT_WITHDRAWAL',
  ReleaseReservedBalance = 'RELEASE_RESERVED_BALANCE',
  /** @deprecated No longer supported */
  Reserve = 'RESERVE',
  ReserveBalance = 'RESERVE_BALANCE',
  Rollback = 'ROLLBACK',
  /** @deprecated No longer supported */
  RollbackPayout = 'ROLLBACK_PAYOUT',
  /** @deprecated No longer supported */
  RollbackReserve = 'ROLLBACK_RESERVE',
  TournamentPayout = 'TOURNAMENT_PAYOUT',
  TransferIn = 'TRANSFER_IN',
  TransferOut = 'TRANSFER_OUT',
  Withdrawal = 'WITHDRAWAL',
  WithdrawalRefund = 'WITHDRAWAL_REFUND'
}

export type TransactionRecordTypeFilterInput = {
  equal?: InputMaybe<TransactionRecordType>;
  in?: InputMaybe<Array<TransactionRecordType>>;
  notEqual?: InputMaybe<TransactionRecordType>;
  notIn?: InputMaybe<Array<TransactionRecordType>>;
};

export enum TurnoverRequirementType {
  Bonus = 'BONUS',
  DepositPlusBonus = 'DEPOSIT_PLUS_BONUS'
}

export type VentajaDisbursementWithdrawalRecord = Node & WithdrawalRecord & {
  __typename?: 'VentajaDisbursementWithdrawalRecord';
  accountName?: Maybe<Scalars['String']['output']>;
  accountNumber?: Maybe<Scalars['String']['output']>;
  amount: Scalars['Decimal']['output'];
  bankName?: Maybe<Scalars['String']['output']>;
  dateTimeConfirmed?: Maybe<Scalars['DateTime']['output']>;
  dateTimeCreated: Scalars['DateTime']['output'];
  dateTimeLastUpdated: Scalars['DateTime']['output'];
  domain?: Maybe<Scalars['String']['output']>;
  error?: Maybe<WithdrawalError>;
  fee: Scalars['Decimal']['output'];
  id: Scalars['ObjectId']['output'];
  member?: Maybe<Member>;
  netAmount: Scalars['Decimal']['output'];
  platform?: Maybe<Platform>;
  reference?: Maybe<Scalars['String']['output']>;
  referrer?: Maybe<Member>;
  remarks?: Maybe<Scalars['String']['output']>;
  status: WithdrawalStatus;
  type: WithdrawalType;
  withdrawal: Scalars['ObjectId']['output'];
  withdrawalNumber?: Maybe<Scalars['String']['output']>;
};

export type Wallet = Node & {
  __typename?: 'Wallet';
  balance: Scalars['Decimal']['output'];
  currency: Currency;
  historicalBalance: Array<DataPoint>;
  id: Scalars['ObjectId']['output'];
};


export type WalletHistoricalBalanceArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export enum WithdrawalError {
  DailyPurchaseOrDepositLimitExceeded = 'DAILY_PURCHASE_OR_DEPOSIT_LIMIT_EXCEEDED',
  Expired = 'EXPIRED',
  FailedToProcessPayment = 'FAILED_TO_PROCESS_PAYMENT',
  InsufficientFunds = 'INSUFFICIENT_FUNDS',
  RequestSessionExpired = 'REQUEST_SESSION_EXPIRED',
  RequestTimeout = 'REQUEST_TIMEOUT',
  SystemCancellation = 'SYSTEM_CANCELLATION',
  UnexpectedError = 'UNEXPECTED_ERROR',
  WithdrawalAccountEmpty = 'WITHDRAWAL_ACCOUNT_EMPTY',
  WithdrawalCreationRequestFailed = 'WITHDRAWAL_CREATION_REQUEST_FAILED',
  WithdrawalExecutionRequestFailed = 'WITHDRAWAL_EXECUTION_REQUEST_FAILED'
}

export type WithdrawalRecord = {
  amount: Scalars['Decimal']['output'];
  dateTimeConfirmed?: Maybe<Scalars['DateTime']['output']>;
  dateTimeCreated: Scalars['DateTime']['output'];
  dateTimeLastUpdated: Scalars['DateTime']['output'];
  domain?: Maybe<Scalars['String']['output']>;
  error?: Maybe<WithdrawalError>;
  fee: Scalars['Decimal']['output'];
  member?: Maybe<Member>;
  netAmount: Scalars['Decimal']['output'];
  platform?: Maybe<Platform>;
  reference?: Maybe<Scalars['String']['output']>;
  referrer?: Maybe<Member>;
  remarks?: Maybe<Scalars['String']['output']>;
  status: WithdrawalStatus;
  type: WithdrawalType;
  withdrawal: Scalars['ObjectId']['output'];
  withdrawalNumber?: Maybe<Scalars['String']['output']>;
};

export type WithdrawalRecordAggregates = {
  __typename?: 'WithdrawalRecordAggregates';
  amount: Scalars['Decimal']['output'];
};

export type WithdrawalRecordFilterInput = {
  dateTimeConfirmed?: InputMaybe<DateTimeFilterInput>;
  dateTimeCreated?: InputMaybe<DateTimeFilterInput>;
  dateTimeLastUpdated?: InputMaybe<DateTimeFilterInput>;
  domain?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<ObjectIdFilterInput>;
  member?: InputMaybe<ObjectIdFilterInput>;
  member__domain?: InputMaybe<StringFilterInput>;
  member__name?: InputMaybe<StringFilterInput>;
  platform?: InputMaybe<ObjectIdFilterInput>;
  reference?: InputMaybe<StringFilterInput>;
  referrer?: InputMaybe<ObjectIdFilterInput>;
  status?: InputMaybe<WithdrawalRecordStatusFilterInput>;
  type?: InputMaybe<WithdrawalRecordTypeFilterInput>;
  withdrawal?: InputMaybe<ObjectIdFilterInput>;
  withdrawalNumber?: InputMaybe<StringFilterInput>;
};

export type WithdrawalRecordStatusFilterInput = {
  equal?: InputMaybe<WithdrawalStatus>;
  in?: InputMaybe<Array<WithdrawalStatus>>;
  notEqual?: InputMaybe<WithdrawalStatus>;
  notIn?: InputMaybe<Array<WithdrawalStatus>>;
};

export type WithdrawalRecordTypeFilterInput = {
  equal?: InputMaybe<WithdrawalType>;
  in?: InputMaybe<Array<WithdrawalType>>;
  notEqual?: InputMaybe<WithdrawalType>;
  notIn?: InputMaybe<Array<WithdrawalType>>;
};

export enum WithdrawalStatus {
  Accepted = 'ACCEPTED',
  Approved = 'APPROVED',
  Cancelled = 'CANCELLED',
  Confirmed = 'CONFIRMED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
  Voided = 'VOIDED'
}

export enum WithdrawalType {
  Bank = 'BANK',
  CabinetWithdrawal = 'CABINET_WITHDRAWAL',
  Gcash = 'GCASH',
  Instapay = 'INSTAPAY',
  Manual = 'MANUAL',
  ManualBank = 'MANUAL_BANK',
  ManualCabinetWithdrawal = 'MANUAL_CABINET_WITHDRAWAL',
  ManualUpi = 'MANUAL_UPI',
  MayaApp = 'MAYA_APP',
  PisoPayRemittance = 'PISO_PAY_REMITTANCE',
  VentajaDisbursement = 'VENTAJA_DISBURSEMENT'
}

export type _BetRecordSortInput = {
  field: BetRecordSortField;
  order: SortOrder;
};

export type _Connection = {
  __typename?: '_Connection';
  edges: Array<Edge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type _MemberSortInput = {
  field: MemberSortField;
  order: SortOrder;
};

export type MemberFieldsFragment = { __typename?: 'Member', id: any, name: string, emailAddress?: any | null, mobileNumber?: string | null, domain?: string | null, status: MemberStatus, verificationStatus: MemberVerificationStatus, dateTimeCreated: any, dateTimeLastActive?: any | null, wallet?: { __typename?: 'Wallet', balance: any } | null } & { ' $fragmentName'?: 'MemberFieldsFragment' };

export type GetMembersQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MemberFilterInput>;
}>;


export type GetMembersQuery = { __typename?: 'Query', members: { __typename?: 'Connection', edges?: Array<{ __typename?: 'Edge', cursor: any, node: { __typename?: 'AchievementPointsHistoryRecord' } | { __typename?: 'BankWithdrawalRecord' } | { __typename?: 'BetRecord' } | { __typename?: 'Bonus' } | { __typename?: 'CabinetWithdrawalRecord' } | { __typename?: 'Cashback' } | { __typename?: 'CashbackBonus' } | { __typename?: 'DailyNetDepositRecord' } | { __typename?: 'DepositPromo' } | { __typename?: 'DepositRecord' } | { __typename?: 'Export' } | { __typename?: 'File' } | { __typename?: 'GCashWithdrawalRecord' } | { __typename?: 'Game' } | { __typename?: 'GameRoundTransaction' } | { __typename?: 'GenericPromo' } | { __typename?: 'GrossGamingRevenueRecord' } | { __typename?: 'InflowRecord' } | { __typename?: 'InstapayWithdrawalRecord' } | { __typename?: 'Jackpot' } | { __typename?: 'JackpotPayout' } | { __typename?: 'LossRebate' } | { __typename?: 'LossRebateBonus' } | { __typename?: 'ManualBankWithdrawalRecord' } | { __typename?: 'ManualUPIWithdrawalRecord' } | { __typename?: 'ManualWithdrawalRecord' } | { __typename?: 'MayaAppWithdrawalRecord' } | (
        { __typename?: 'Member' }
        & { ' $fragmentRefs'?: { 'MemberFieldsFragment': MemberFieldsFragment } }
      ) | { __typename?: 'MemberActivity' } | { __typename?: 'MemberActivityRecord' } | { __typename?: 'MemberDailyNetDepositRecord' } | { __typename?: 'MemberGroup' } | { __typename?: 'MemberLabel' } | { __typename?: 'MemberVerificationNotification' } | { __typename?: 'MultiplierTournament' } | { __typename?: 'Operator' } | { __typename?: 'OperatorActivity' } | { __typename?: 'OperatorActivityOperator' } | { __typename?: 'PisoPayRemittanceWithdrawalRecord' } | { __typename?: 'Platform' } | { __typename?: 'PointsWallet' } | { __typename?: 'PointsWalletTransaction' } | { __typename?: 'Referral' } | { __typename?: 'ReferralCommission' } | { __typename?: 'RegistrationPromo' } | { __typename?: 'SpotBonusPromo' } | { __typename?: 'SystemJob' } | { __typename?: 'TournamentLeaderboard' } | { __typename?: 'TournamentPayout' } | { __typename?: 'TransactionRecord' } | { __typename?: 'VentajaDisbursementWithdrawalRecord' } | { __typename?: 'Wallet' } }> | null, pageInfo?: { __typename?: 'PageInfo', endCursor?: any | null, hasNextPage: boolean } | null } };

export type GetMembersByNameQueryVariables = Exact<{
  search: Scalars['String']['input'];
}>;


export type GetMembersByNameQuery = { __typename?: 'Query', membersByName: Array<{ __typename?: 'Member', id: any, name: string }> };

export type GetMembersByEmailAddressQueryVariables = Exact<{
  search: Scalars['String']['input'];
}>;


export type GetMembersByEmailAddressQuery = { __typename?: 'Query', membersByEmailAddress: Array<{ __typename?: 'Member', id: any, name: string, emailAddress?: any | null }> };

export type GetMembersByMobileNumberSearchQueryVariables = Exact<{
  search: Scalars['String']['input'];
}>;


export type GetMembersByMobileNumberSearchQuery = { __typename?: 'Query', membersByMobileNumber: Array<{ __typename?: 'Member', id: any, name: string, mobileNumber?: string | null }> };

export type GetMembersByDomainSearchQueryVariables = Exact<{
  search: Scalars['String']['input'];
}>;


export type GetMembersByDomainSearchQuery = { __typename?: 'Query', membersByDomain: Array<{ __typename?: 'Member', id: any, name: string, domain?: string | null }> };

export type GetMembersByEmailQueryVariables = Exact<{
  email: Scalars['String']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type GetMembersByEmailQuery = { __typename?: 'Query', members: { __typename?: 'Connection', edges?: Array<{ __typename?: 'Edge', cursor: any, node: { __typename?: 'AchievementPointsHistoryRecord' } | { __typename?: 'BankWithdrawalRecord' } | { __typename?: 'BetRecord' } | { __typename?: 'Bonus' } | { __typename?: 'CabinetWithdrawalRecord' } | { __typename?: 'Cashback' } | { __typename?: 'CashbackBonus' } | { __typename?: 'DailyNetDepositRecord' } | { __typename?: 'DepositPromo' } | { __typename?: 'DepositRecord' } | { __typename?: 'Export' } | { __typename?: 'File' } | { __typename?: 'GCashWithdrawalRecord' } | { __typename?: 'Game' } | { __typename?: 'GameRoundTransaction' } | { __typename?: 'GenericPromo' } | { __typename?: 'GrossGamingRevenueRecord' } | { __typename?: 'InflowRecord' } | { __typename?: 'InstapayWithdrawalRecord' } | { __typename?: 'Jackpot' } | { __typename?: 'JackpotPayout' } | { __typename?: 'LossRebate' } | { __typename?: 'LossRebateBonus' } | { __typename?: 'ManualBankWithdrawalRecord' } | { __typename?: 'ManualUPIWithdrawalRecord' } | { __typename?: 'ManualWithdrawalRecord' } | { __typename?: 'MayaAppWithdrawalRecord' } | (
        { __typename?: 'Member' }
        & { ' $fragmentRefs'?: { 'MemberFieldsFragment': MemberFieldsFragment } }
      ) | { __typename?: 'MemberActivity' } | { __typename?: 'MemberActivityRecord' } | { __typename?: 'MemberDailyNetDepositRecord' } | { __typename?: 'MemberGroup' } | { __typename?: 'MemberLabel' } | { __typename?: 'MemberVerificationNotification' } | { __typename?: 'MultiplierTournament' } | { __typename?: 'Operator' } | { __typename?: 'OperatorActivity' } | { __typename?: 'OperatorActivityOperator' } | { __typename?: 'PisoPayRemittanceWithdrawalRecord' } | { __typename?: 'Platform' } | { __typename?: 'PointsWallet' } | { __typename?: 'PointsWalletTransaction' } | { __typename?: 'Referral' } | { __typename?: 'ReferralCommission' } | { __typename?: 'RegistrationPromo' } | { __typename?: 'SpotBonusPromo' } | { __typename?: 'SystemJob' } | { __typename?: 'TournamentLeaderboard' } | { __typename?: 'TournamentPayout' } | { __typename?: 'TransactionRecord' } | { __typename?: 'VentajaDisbursementWithdrawalRecord' } | { __typename?: 'Wallet' } }> | null, pageInfo?: { __typename?: 'PageInfo', endCursor?: any | null, hasNextPage: boolean } | null } };

export type GetMembersByMobileNumberQueryVariables = Exact<{
  mobileNumber: Scalars['String']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type GetMembersByMobileNumberQuery = { __typename?: 'Query', members: { __typename?: 'Connection', edges?: Array<{ __typename?: 'Edge', cursor: any, node: { __typename?: 'AchievementPointsHistoryRecord' } | { __typename?: 'BankWithdrawalRecord' } | { __typename?: 'BetRecord' } | { __typename?: 'Bonus' } | { __typename?: 'CabinetWithdrawalRecord' } | { __typename?: 'Cashback' } | { __typename?: 'CashbackBonus' } | { __typename?: 'DailyNetDepositRecord' } | { __typename?: 'DepositPromo' } | { __typename?: 'DepositRecord' } | { __typename?: 'Export' } | { __typename?: 'File' } | { __typename?: 'GCashWithdrawalRecord' } | { __typename?: 'Game' } | { __typename?: 'GameRoundTransaction' } | { __typename?: 'GenericPromo' } | { __typename?: 'GrossGamingRevenueRecord' } | { __typename?: 'InflowRecord' } | { __typename?: 'InstapayWithdrawalRecord' } | { __typename?: 'Jackpot' } | { __typename?: 'JackpotPayout' } | { __typename?: 'LossRebate' } | { __typename?: 'LossRebateBonus' } | { __typename?: 'ManualBankWithdrawalRecord' } | { __typename?: 'ManualUPIWithdrawalRecord' } | { __typename?: 'ManualWithdrawalRecord' } | { __typename?: 'MayaAppWithdrawalRecord' } | (
        { __typename?: 'Member' }
        & { ' $fragmentRefs'?: { 'MemberFieldsFragment': MemberFieldsFragment } }
      ) | { __typename?: 'MemberActivity' } | { __typename?: 'MemberActivityRecord' } | { __typename?: 'MemberDailyNetDepositRecord' } | { __typename?: 'MemberGroup' } | { __typename?: 'MemberLabel' } | { __typename?: 'MemberVerificationNotification' } | { __typename?: 'MultiplierTournament' } | { __typename?: 'Operator' } | { __typename?: 'OperatorActivity' } | { __typename?: 'OperatorActivityOperator' } | { __typename?: 'PisoPayRemittanceWithdrawalRecord' } | { __typename?: 'Platform' } | { __typename?: 'PointsWallet' } | { __typename?: 'PointsWalletTransaction' } | { __typename?: 'Referral' } | { __typename?: 'ReferralCommission' } | { __typename?: 'RegistrationPromo' } | { __typename?: 'SpotBonusPromo' } | { __typename?: 'SystemJob' } | { __typename?: 'TournamentLeaderboard' } | { __typename?: 'TournamentPayout' } | { __typename?: 'TransactionRecord' } | { __typename?: 'VentajaDisbursementWithdrawalRecord' } | { __typename?: 'Wallet' } }> | null, pageInfo?: { __typename?: 'PageInfo', endCursor?: any | null, hasNextPage: boolean } | null } };

export type GetMembersByDomainQueryVariables = Exact<{
  domain: Scalars['String']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type GetMembersByDomainQuery = { __typename?: 'Query', members: { __typename?: 'Connection', edges?: Array<{ __typename?: 'Edge', cursor: any, node: { __typename?: 'AchievementPointsHistoryRecord' } | { __typename?: 'BankWithdrawalRecord' } | { __typename?: 'BetRecord' } | { __typename?: 'Bonus' } | { __typename?: 'CabinetWithdrawalRecord' } | { __typename?: 'Cashback' } | { __typename?: 'CashbackBonus' } | { __typename?: 'DailyNetDepositRecord' } | { __typename?: 'DepositPromo' } | { __typename?: 'DepositRecord' } | { __typename?: 'Export' } | { __typename?: 'File' } | { __typename?: 'GCashWithdrawalRecord' } | { __typename?: 'Game' } | { __typename?: 'GameRoundTransaction' } | { __typename?: 'GenericPromo' } | { __typename?: 'GrossGamingRevenueRecord' } | { __typename?: 'InflowRecord' } | { __typename?: 'InstapayWithdrawalRecord' } | { __typename?: 'Jackpot' } | { __typename?: 'JackpotPayout' } | { __typename?: 'LossRebate' } | { __typename?: 'LossRebateBonus' } | { __typename?: 'ManualBankWithdrawalRecord' } | { __typename?: 'ManualUPIWithdrawalRecord' } | { __typename?: 'ManualWithdrawalRecord' } | { __typename?: 'MayaAppWithdrawalRecord' } | (
        { __typename?: 'Member' }
        & { ' $fragmentRefs'?: { 'MemberFieldsFragment': MemberFieldsFragment } }
      ) | { __typename?: 'MemberActivity' } | { __typename?: 'MemberActivityRecord' } | { __typename?: 'MemberDailyNetDepositRecord' } | { __typename?: 'MemberGroup' } | { __typename?: 'MemberLabel' } | { __typename?: 'MemberVerificationNotification' } | { __typename?: 'MultiplierTournament' } | { __typename?: 'Operator' } | { __typename?: 'OperatorActivity' } | { __typename?: 'OperatorActivityOperator' } | { __typename?: 'PisoPayRemittanceWithdrawalRecord' } | { __typename?: 'Platform' } | { __typename?: 'PointsWallet' } | { __typename?: 'PointsWalletTransaction' } | { __typename?: 'Referral' } | { __typename?: 'ReferralCommission' } | { __typename?: 'RegistrationPromo' } | { __typename?: 'SpotBonusPromo' } | { __typename?: 'SystemJob' } | { __typename?: 'TournamentLeaderboard' } | { __typename?: 'TournamentPayout' } | { __typename?: 'TransactionRecord' } | { __typename?: 'VentajaDisbursementWithdrawalRecord' } | { __typename?: 'Wallet' } }> | null, pageInfo?: { __typename?: 'PageInfo', endCursor?: any | null, hasNextPage: boolean } | null } };

export const MemberFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MemberFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Member"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"mobileNumber"}},{"kind":"Field","name":{"kind":"Name","value":"domain"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"verificationStatus"}},{"kind":"Field","name":{"kind":"Name","value":"dateTimeCreated"}},{"kind":"Field","name":{"kind":"Name","value":"dateTimeLastActive"}},{"kind":"Field","name":{"kind":"Name","value":"wallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}}]}}]} as unknown as DocumentNode<MemberFieldsFragment, unknown>;
export const GetMembersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMembers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"MemberFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"members"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MemberFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MemberFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Member"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"mobileNumber"}},{"kind":"Field","name":{"kind":"Name","value":"domain"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"verificationStatus"}},{"kind":"Field","name":{"kind":"Name","value":"dateTimeCreated"}},{"kind":"Field","name":{"kind":"Name","value":"dateTimeLastActive"}},{"kind":"Field","name":{"kind":"Name","value":"wallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}}]}}]} as unknown as DocumentNode<GetMembersQuery, GetMembersQueryVariables>;
export const GetMembersByNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMembersByName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"membersByName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"20"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetMembersByNameQuery, GetMembersByNameQueryVariables>;
export const GetMembersByEmailAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMembersByEmailAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"membersByEmailAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"20"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}}]}}]}}]} as unknown as DocumentNode<GetMembersByEmailAddressQuery, GetMembersByEmailAddressQueryVariables>;
export const GetMembersByMobileNumberSearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMembersByMobileNumberSearch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"membersByMobileNumber"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"20"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mobileNumber"}}]}}]}}]} as unknown as DocumentNode<GetMembersByMobileNumberSearchQuery, GetMembersByMobileNumberSearchQueryVariables>;
export const GetMembersByDomainSearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMembersByDomainSearch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"membersByDomain"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"20"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"domain"}}]}}]}}]} as unknown as DocumentNode<GetMembersByDomainSearchQuery, GetMembersByDomainSearchQueryVariables>;
export const GetMembersByEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMembersByEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"members"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"emailAddress"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contains"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MemberFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MemberFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Member"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"mobileNumber"}},{"kind":"Field","name":{"kind":"Name","value":"domain"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"verificationStatus"}},{"kind":"Field","name":{"kind":"Name","value":"dateTimeCreated"}},{"kind":"Field","name":{"kind":"Name","value":"dateTimeLastActive"}},{"kind":"Field","name":{"kind":"Name","value":"wallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}}]}}]} as unknown as DocumentNode<GetMembersByEmailQuery, GetMembersByEmailQueryVariables>;
export const GetMembersByMobileNumberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMembersByMobileNumber"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mobileNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"members"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"mobileNumber"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contains"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mobileNumber"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MemberFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MemberFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Member"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"mobileNumber"}},{"kind":"Field","name":{"kind":"Name","value":"domain"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"verificationStatus"}},{"kind":"Field","name":{"kind":"Name","value":"dateTimeCreated"}},{"kind":"Field","name":{"kind":"Name","value":"dateTimeLastActive"}},{"kind":"Field","name":{"kind":"Name","value":"wallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}}]}}]} as unknown as DocumentNode<GetMembersByMobileNumberQuery, GetMembersByMobileNumberQueryVariables>;
export const GetMembersByDomainDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMembersByDomain"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"domain"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"members"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"domain"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equal"},"value":{"kind":"Variable","name":{"kind":"Name","value":"domain"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MemberFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MemberFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Member"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"mobileNumber"}},{"kind":"Field","name":{"kind":"Name","value":"domain"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"verificationStatus"}},{"kind":"Field","name":{"kind":"Name","value":"dateTimeCreated"}},{"kind":"Field","name":{"kind":"Name","value":"dateTimeLastActive"}},{"kind":"Field","name":{"kind":"Name","value":"wallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}}]}}]} as unknown as DocumentNode<GetMembersByDomainQuery, GetMembersByDomainQueryVariables>;