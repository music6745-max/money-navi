"use client";

import { useState, useMemo } from "react";

export function ToolSimulator({ slug }: { slug: string }) {
  switch (slug) {
    case "nisa-simulator":
      return <NisaSimulator />;
    case "compound-interest":
      return <CompoundInterest />;
    case "ideco-tax-saving":
      return <IdecoTaxSaving />;
    case "retirement-fund":
      return <RetirementFund />;
    case "fire-calculator":
      return <FireCalculator />;
    case "mortgage-simulator":
      return <MortgageSimulator />;
    case "take-home-calculator":
      return <TakeHomeCalculator />;
    case "side-income-tax":
      return <SideIncomeTax />;
    case "dollar-cost-averaging":
      return <DollarCostAveraging />;
    case "dividend-reinvest":
      return <DividendReinvest />;
    case "target-monthly-investment":
      return <TargetMonthlyInvestment />;
    case "robo-fee-comparison":
      return <RoboFeeComparison />;
    case "fx-leverage-calculator":
      return <FxLeverageCalculator />;
    case "crypto-profit-tax":
      return <CryptoProfitTax />;
    case "point-investment":
      return <PointInvestment />;
    case "household-budget":
      return <HouseholdBudget />;
    case "savings-vs-investment":
      return <SavingsVsInvestment />;
    case "credit-card-points":
      return <CreditCardPoints />;
    case "education-fund":
      return <EducationFund />;
    case "emergency-fund":
      return <EmergencyFund />;
    case "nisa-vs-ideco":
      return <NisaVsIdeco />;
    case "inflation-impact":
      return <InflationImpact />;
    case "furusato-limit":
      return <FurusatoLimit />;
    case "bonus-investment":
      return <BonusInvestment />;
    case "pension-calculator":
      return <PensionCalculator />;
    case "mortgage-refinance":
      return <MortgageRefinance />;
    case "medical-deduction":
      return <MedicalDeduction />;
    case "gift-tax":
      return <GiftTax />;
    case "inheritance-tax":
      return <InheritanceTax />;
    case "retirement-payment-tax":
      return <RetirementPaymentTax />;
    case "rent-vs-buy":
      return <RentVsBuy />;
    case "car-maintenance-cost":
      return <CarMaintenanceCost />;
    case "debt-repayment":
      return <DebtRepayment />;
    case "factoring-fee-calculator":
      return <FactoringFeeCalculator />;
    case "dividend-income-simulator":
      return <DividendIncomeSimulator />;
    case "ipo-profit-calculator":
      return <IpoProfitCalculator />;
    case "gold-investment-simulator":
      return <GoldInvestmentSimulator />;
    case "reit-distribution-calculator":
      return <ReitDistributionCalculator />;
    default:
      return <Placeholder />;
  }
}

function fmt(n: number): string {
  return Math.round(n).toLocaleString();
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
      {children}
    </div>
  );
}

function Result({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`flex justify-between items-center p-3 rounded-lg ${highlight ? "bg-primary/10" : "bg-background"}`}>
      <span className="text-sm text-muted">{label}</span>
      <span className={`font-bold ${highlight ? "text-primary text-lg" : ""}`}>{value}</span>
    </div>
  );
}

function NumberInput({
  label,
  value,
  onChange,
  suffix,
  min = 0,
  step = 1,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  suffix?: string;
  min?: number;
  step?: number;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={value}
          min={min}
          step={step}
          onChange={(e) => onChange(Number(e.target.value))}
          className="flex-1 px-3 py-2 rounded-lg border border-card-border bg-card-bg focus:outline-none focus:border-primary"
        />
        {suffix && <span className="text-sm text-muted">{suffix}</span>}
      </div>
    </div>
  );
}

function Placeholder() {
  return (
    <Card>
      <p className="text-muted">このツールは現在準備中です。近日公開予定です。</p>
    </Card>
  );
}

function NisaSimulator() {
  const [monthly, setMonthly] = useState(33333);
  const [years, setYears] = useState(20);
  const [rate, setRate] = useState(5);
  const result = useMemo(() => {
    const r = rate / 100 / 12;
    const n = years * 12;
    const future = monthly * ((Math.pow(1 + r, n) - 1) / r);
    const principal = monthly * n;
    return { future, principal, profit: future - principal };
  }, [monthly, years, rate]);
  return (
    <Card>
      <h2 className="text-xl font-bold">📊 入力</h2>
      <NumberInput label="毎月の積立額" value={monthly} onChange={setMonthly} suffix="円" step={1000} />
      <NumberInput label="積立期間" value={years} onChange={setYears} suffix="年" />
      <NumberInput label="想定利回り（年率）" value={rate} onChange={setRate} suffix="%" step={0.1} />
      <h2 className="text-xl font-bold pt-4">💰 シミュレーション結果</h2>
      <Result label="将来の資産額" value={`${fmt(result.future)} 円`} highlight />
      <Result label="元本（積立総額）" value={`${fmt(result.principal)} 円`} />
      <Result label="運用益" value={`+${fmt(result.profit)} 円`} />
      <p className="text-xs text-muted">
        ※ 新NISAでは運用益が非課税。通常の課税口座では利益の約20%が税金として差し引かれます。
      </p>
    </Card>
  );
}

function CompoundInterest() {
  const [principal, setPrincipal] = useState(1000000);
  const [monthly, setMonthly] = useState(30000);
  const [years, setYears] = useState(20);
  const [rate, setRate] = useState(5);
  const result = useMemo(() => {
    const r = rate / 100 / 12;
    const n = years * 12;
    const futurePrincipal = principal * Math.pow(1 + r, n);
    const futureMonthly = monthly * ((Math.pow(1 + r, n) - 1) / r);
    const future = futurePrincipal + futureMonthly;
    const invested = principal + monthly * n;
    return { future, invested, profit: future - invested };
  }, [principal, monthly, years, rate]);
  return (
    <Card>
      <NumberInput label="初期投資額" value={principal} onChange={setPrincipal} suffix="円" step={10000} />
      <NumberInput label="毎月の積立額" value={monthly} onChange={setMonthly} suffix="円" step={1000} />
      <NumberInput label="運用期間" value={years} onChange={setYears} suffix="年" />
      <NumberInput label="年利回り" value={rate} onChange={setRate} suffix="%" step={0.1} />
      <Result label="将来価値" value={`${fmt(result.future)} 円`} highlight />
      <Result label="投資元本合計" value={`${fmt(result.invested)} 円`} />
      <Result label="複利運用益" value={`+${fmt(result.profit)} 円`} />
    </Card>
  );
}

function IdecoTaxSaving() {
  const [income, setIncome] = useState(5000000);
  const [monthly, setMonthly] = useState(23000);
  const result = useMemo(() => {
    const annual = monthly * 12;
    let incomeTaxRate = 0.05;
    if (income > 1950000) incomeTaxRate = 0.1;
    if (income > 3300000) incomeTaxRate = 0.2;
    if (income > 6950000) incomeTaxRate = 0.23;
    if (income > 9000000) incomeTaxRate = 0.33;
    if (income > 18000000) incomeTaxRate = 0.4;
    if (income > 40000000) incomeTaxRate = 0.45;
    const incomeTaxSaving = annual * incomeTaxRate;
    const residentTaxSaving = annual * 0.1;
    const total = incomeTaxSaving + residentTaxSaving;
    return { annual, incomeTaxSaving, residentTaxSaving, total, year30: total * 30 };
  }, [income, monthly]);
  return (
    <Card>
      <NumberInput label="年収（額面）" value={income} onChange={setIncome} suffix="円" step={100000} />
      <NumberInput label="iDeCo掛金（月額）" value={monthly} onChange={setMonthly} suffix="円" step={1000} />
      <p className="text-xs text-muted">※ 会社員の上限は月23,000円（企業年金なしの場合）</p>
      <Result label="年間掛金" value={`${fmt(result.annual)} 円`} />
      <Result label="所得税の節税額（年）" value={`${fmt(result.incomeTaxSaving)} 円`} />
      <Result label="住民税の節税額（年）" value={`${fmt(result.residentTaxSaving)} 円`} />
      <Result label="年間節税額合計" value={`${fmt(result.total)} 円`} highlight />
      <Result label="30年間の節税総額" value={`${fmt(result.year30)} 円`} />
    </Card>
  );
}

function RetirementFund() {
  const [currentAge, setCurrentAge] = useState(35);
  const [retireAge, setRetireAge] = useState(65);
  const [targetAmount, setTargetAmount] = useState(30000000);
  const [currentAsset, setCurrentAsset] = useState(3000000);
  const [rate, setRate] = useState(4);
  const result = useMemo(() => {
    const years = retireAge - currentAge;
    const n = years * 12;
    const r = rate / 100 / 12;
    const futureCurrent = currentAsset * Math.pow(1 + r, n);
    const need = targetAmount - futureCurrent;
    const monthly = need > 0 ? need / ((Math.pow(1 + r, n) - 1) / r) : 0;
    return { years, futureCurrent, monthly: Math.max(0, monthly) };
  }, [currentAge, retireAge, targetAmount, currentAsset, rate]);
  return (
    <Card>
      <NumberInput label="現在の年齢" value={currentAge} onChange={setCurrentAge} suffix="歳" />
      <NumberInput label="退職予定年齢" value={retireAge} onChange={setRetireAge} suffix="歳" />
      <NumberInput label="目標額" value={targetAmount} onChange={setTargetAmount} suffix="円" step={1000000} />
      <NumberInput label="現在の資産" value={currentAsset} onChange={setCurrentAsset} suffix="円" step={100000} />
      <NumberInput label="想定利回り" value={rate} onChange={setRate} suffix="%" step={0.1} />
      <Result label="運用期間" value={`${result.years} 年`} />
      <Result label="現在資産の運用後" value={`${fmt(result.futureCurrent)} 円`} />
      <Result label="毎月の必要積立額" value={`${fmt(result.monthly)} 円`} highlight />
    </Card>
  );
}

function FireCalculator() {
  const [currentAsset, setCurrentAsset] = useState(5000000);
  const [annualExpense, setAnnualExpense] = useState(3000000);
  const [annualSaving, setAnnualSaving] = useState(2000000);
  const [rate, setRate] = useState(5);
  const [withdrawRate] = useState(4);
  const result = useMemo(() => {
    const target = annualExpense / (withdrawRate / 100);
    let asset = currentAsset;
    let years = 0;
    while (asset < target && years < 100) {
      asset = asset * (1 + rate / 100) + annualSaving;
      years += 1;
    }
    return { target, years, finalAsset: asset };
  }, [currentAsset, annualExpense, annualSaving, rate, withdrawRate]);
  return (
    <Card>
      <NumberInput label="現在の資産" value={currentAsset} onChange={setCurrentAsset} suffix="円" step={500000} />
      <NumberInput label="年間支出" value={annualExpense} onChange={setAnnualExpense} suffix="円" step={100000} />
      <NumberInput label="年間貯蓄（投資）額" value={annualSaving} onChange={setAnnualSaving} suffix="円" step={100000} />
      <NumberInput label="想定運用利回り" value={rate} onChange={setRate} suffix="%" step={0.1} />
      <p className="text-xs text-muted">※ 4%ルール（年間支出の25倍をFIRE目標額と設定）</p>
      <Result label="FIRE目標額" value={`${fmt(result.target)} 円`} />
      <Result label="FIRE達成までの年数" value={`${result.years} 年`} highlight />
      <Result label="達成時の資産" value={`${fmt(result.finalAsset)} 円`} />
    </Card>
  );
}

function MortgageSimulator() {
  const [principal, setPrincipal] = useState(35000000);
  const [rate, setRate] = useState(0.5);
  const [years, setYears] = useState(35);
  const result = useMemo(() => {
    const r = rate / 100 / 12;
    const n = years * 12;
    const monthly = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = monthly * n;
    const interest = total - principal;
    return { monthly, total, interest };
  }, [principal, rate, years]);
  return (
    <Card>
      <NumberInput label="借入金額" value={principal} onChange={setPrincipal} suffix="円" step={1000000} />
      <NumberInput label="金利（年率）" value={rate} onChange={setRate} suffix="%" step={0.05} />
      <NumberInput label="返済期間" value={years} onChange={setYears} suffix="年" />
      <Result label="毎月の返済額" value={`${fmt(result.monthly)} 円`} highlight />
      <Result label="総返済額" value={`${fmt(result.total)} 円`} />
      <Result label="利息合計" value={`${fmt(result.interest)} 円`} />
    </Card>
  );
}

function TakeHomeCalculator() {
  const [income, setIncome] = useState(5000000);
  const result = useMemo(() => {
    const socialRate = 0.15;
    const social = income * socialRate;
    const taxable = income - social - 480000 - Math.min(1950000, Math.max(550000, income * 0.3 + 80000));
    let incomeTax = 0;
    const t = Math.max(0, taxable);
    if (t <= 1950000) incomeTax = t * 0.05;
    else if (t <= 3300000) incomeTax = t * 0.1 - 97500;
    else if (t <= 6950000) incomeTax = t * 0.2 - 427500;
    else if (t <= 9000000) incomeTax = t * 0.23 - 636000;
    else if (t <= 18000000) incomeTax = t * 0.33 - 1536000;
    else if (t <= 40000000) incomeTax = t * 0.4 - 2796000;
    else incomeTax = t * 0.45 - 4796000;
    const residentTax = Math.max(0, t * 0.1);
    const takehome = income - social - incomeTax - residentTax;
    return { social, incomeTax, residentTax, takehome, monthly: takehome / 12 };
  }, [income]);
  return (
    <Card>
      <NumberInput label="額面年収" value={income} onChange={setIncome} suffix="円" step={100000} />
      <Result label="社会保険料（概算）" value={`${fmt(result.social)} 円`} />
      <Result label="所得税（概算）" value={`${fmt(result.incomeTax)} 円`} />
      <Result label="住民税（概算）" value={`${fmt(result.residentTax)} 円`} />
      <Result label="手取り年収" value={`${fmt(result.takehome)} 円`} highlight />
      <Result label="手取り月収" value={`${fmt(result.monthly)} 円`} />
      <p className="text-xs text-muted">※ 簡易計算。扶養家族・各種控除により実際の税額は異なります。</p>
    </Card>
  );
}

function SideIncomeTax() {
  const [mainIncome, setMainIncome] = useState(5000000);
  const [sideIncome, setSideIncome] = useState(500000);
  const [sideExpense, setSideExpense] = useState(100000);
  const result = useMemo(() => {
    const sideProfit = Math.max(0, sideIncome - sideExpense);
    const taxableMain = Math.max(0, mainIncome - 1500000);
    let rate = 0.05;
    if (taxableMain > 1950000) rate = 0.1;
    if (taxableMain > 3300000) rate = 0.2;
    if (taxableMain > 6950000) rate = 0.23;
    if (taxableMain > 9000000) rate = 0.33;
    const incomeTax = sideProfit * rate;
    const residentTax = sideProfit * 0.1;
    const total = incomeTax + residentTax;
    return { sideProfit, rate, incomeTax, residentTax, total };
  }, [mainIncome, sideIncome, sideExpense]);
  return (
    <Card>
      <NumberInput label="本業の年収" value={mainIncome} onChange={setMainIncome} suffix="円" step={100000} />
      <NumberInput label="副業の年間売上" value={sideIncome} onChange={setSideIncome} suffix="円" step={10000} />
      <NumberInput label="副業の年間経費" value={sideExpense} onChange={setSideExpense} suffix="円" step={10000} />
      <Result label="副業所得（売上 − 経費）" value={`${fmt(result.sideProfit)} 円`} />
      <Result label="限界税率" value={`${(result.rate * 100).toFixed(0)}%`} />
      <Result label="追加所得税（概算）" value={`${fmt(result.incomeTax)} 円`} />
      <Result label="追加住民税（概算）" value={`${fmt(result.residentTax)} 円`} />
      <Result label="追加税金合計" value={`${fmt(result.total)} 円`} highlight />
      <p className="text-xs text-muted">※ 副業所得が年20万円超で確定申告が必要（給与所得者の場合）。</p>
    </Card>
  );
}

function DollarCostAveraging() {
  const [monthly, setMonthly] = useState(30000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(5);
  const result = useMemo(() => {
    const r = rate / 100 / 12;
    const n = years * 12;
    const dca = monthly * ((Math.pow(1 + r, n) - 1) / r);
    const lump = monthly * n * Math.pow(1 + rate / 100, years);
    const principal = monthly * n;
    return { dca, lump, principal };
  }, [monthly, years, rate]);
  return (
    <Card>
      <NumberInput label="毎月の投資額" value={monthly} onChange={setMonthly} suffix="円" step={1000} />
      <NumberInput label="期間" value={years} onChange={setYears} suffix="年" />
      <NumberInput label="平均利回り" value={rate} onChange={setRate} suffix="%" step={0.1} />
      <Result label="ドルコスト平均法（毎月積立）" value={`${fmt(result.dca)} 円`} highlight />
      <Result label="一括投資（初期に全額投入）" value={`${fmt(result.lump)} 円`} />
      <Result label="投資元本" value={`${fmt(result.principal)} 円`} />
      <p className="text-xs text-muted">※ 右肩上がりの相場では一括投資が有利。ボラティリティが高い場合は積立が有効。</p>
    </Card>
  );
}

function DividendReinvest() {
  const [principal, setPrincipal] = useState(3000000);
  const [yield_, setYield] = useState(4);
  const [growth, setGrowth] = useState(2);
  const [years, setYears] = useState(20);
  const result = useMemo(() => {
    let asset = principal;
    for (let i = 0; i < years; i++) {
      const dividend = asset * (yield_ / 100);
      asset = asset * (1 + growth / 100) + dividend * 0.8;
    }
    return { future: asset, profit: asset - principal };
  }, [principal, yield_, growth, years]);
  return (
    <Card>
      <NumberInput label="元本" value={principal} onChange={setPrincipal} suffix="円" step={100000} />
      <NumberInput label="配当利回り" value={yield_} onChange={setYield} suffix="%" step={0.1} />
      <NumberInput label="株価成長率（年）" value={growth} onChange={setGrowth} suffix="%" step={0.1} />
      <NumberInput label="期間" value={years} onChange={setYears} suffix="年" />
      <p className="text-xs text-muted">※ 配当金は税引後（約20%課税）で再投資と仮定</p>
      <Result label="将来価値" value={`${fmt(result.future)} 円`} highlight />
      <Result label="運用益" value={`+${fmt(result.profit)} 円`} />
    </Card>
  );
}

function TargetMonthlyInvestment() {
  const [target, setTarget] = useState(10000000);
  const [years, setYears] = useState(15);
  const [rate, setRate] = useState(5);
  const result = useMemo(() => {
    const r = rate / 100 / 12;
    const n = years * 12;
    const monthly = target / ((Math.pow(1 + r, n) - 1) / r);
    return { monthly, totalInvested: monthly * n };
  }, [target, years, rate]);
  return (
    <Card>
      <NumberInput label="目標金額" value={target} onChange={setTarget} suffix="円" step={1000000} />
      <NumberInput label="達成までの期間" value={years} onChange={setYears} suffix="年" />
      <NumberInput label="想定利回り" value={rate} onChange={setRate} suffix="%" step={0.1} />
      <Result label="毎月の必要積立額" value={`${fmt(result.monthly)} 円`} highlight />
      <Result label="積立総額" value={`${fmt(result.totalInvested)} 円`} />
    </Card>
  );
}

function RoboFeeComparison() {
  const [amount, setAmount] = useState(3000000);
  const result = useMemo(() => {
    const wealthnavi = amount * 0.011;
    const theo = amount * 0.00715;
    const rakuWrap = amount * 0.00715;
    const susten = amount * 0.00484;
    return { wealthnavi, theo, rakuWrap, susten };
  }, [amount]);
  return (
    <Card>
      <NumberInput label="運用額" value={amount} onChange={setAmount} suffix="円" step={100000} />
      <Result label="ウェルスナビ（1.1%）" value={`年 ${fmt(result.wealthnavi)} 円`} />
      <Result label="THEO（0.715%）" value={`年 ${fmt(result.theo)} 円`} />
      <Result label="楽ラップ（0.715%）" value={`年 ${fmt(result.rakuWrap)} 円`} />
      <Result label="SUSTEN（0.484%）" value={`年 ${fmt(result.susten)} 円`} highlight />
      <p className="text-xs text-muted">※ 税抜料率ベース。運用プランにより変動あり。</p>
    </Card>
  );
}

function FxLeverageCalculator() {
  const [rate, setRate] = useState(150);
  const [lot, setLot] = useState(10000);
  const [lev, setLev] = useState(25);
  const result = useMemo(() => {
    const value = rate * lot;
    const margin = value / lev;
    const pipValue = lot * 0.01;
    return { value, margin, pipValue };
  }, [rate, lot, lev]);
  return (
    <Card>
      <NumberInput label="為替レート" value={rate} onChange={setRate} suffix="円" step={0.1} />
      <NumberInput label="取引数量" value={lot} onChange={setLot} suffix="通貨" step={1000} />
      <NumberInput label="レバレッジ" value={lev} onChange={setLev} suffix="倍" />
      <Result label="取引額（想定元本）" value={`${fmt(result.value)} 円`} />
      <Result label="必要証拠金" value={`${fmt(result.margin)} 円`} highlight />
      <Result label="1pipsあたりの損益" value={`${fmt(result.pipValue)} 円`} />
    </Card>
  );
}

function CryptoProfitTax() {
  const [profit, setProfit] = useState(500000);
  const [salary, setSalary] = useState(5000000);
  const result = useMemo(() => {
    const taxableSalary = Math.max(0, salary - 1500000);
    const combined = taxableSalary + profit;
    let rate = 0.05;
    if (combined > 1950000) rate = 0.1;
    if (combined > 3300000) rate = 0.2;
    if (combined > 6950000) rate = 0.23;
    if (combined > 9000000) rate = 0.33;
    if (combined > 18000000) rate = 0.4;
    if (combined > 40000000) rate = 0.45;
    const incomeTax = profit * rate;
    const residentTax = profit * 0.1;
    return { rate, incomeTax, residentTax, total: incomeTax + residentTax };
  }, [profit, salary]);
  return (
    <Card>
      <NumberInput label="仮想通貨の利益" value={profit} onChange={setProfit} suffix="円" step={10000} />
      <NumberInput label="給与所得" value={salary} onChange={setSalary} suffix="円" step={100000} />
      <Result label="限界税率" value={`${(result.rate * 100).toFixed(0)}%`} />
      <Result label="所得税（概算）" value={`${fmt(result.incomeTax)} 円`} />
      <Result label="住民税（概算）" value={`${fmt(result.residentTax)} 円`} />
      <Result label="税金合計" value={`${fmt(result.total)} 円`} highlight />
      <p className="text-xs text-muted">※ 仮想通貨は雑所得扱い、総合課税で計算。最大税率55%。</p>
    </Card>
  );
}

function PointInvestment() {
  const [monthly, setMonthly] = useState(2000);
  const [years, setYears] = useState(15);
  const [rate, setRate] = useState(5);
  const result = useMemo(() => {
    const r = rate / 100 / 12;
    const n = years * 12;
    const future = monthly * ((Math.pow(1 + r, n) - 1) / r);
    return { future, principal: monthly * n };
  }, [monthly, years, rate]);
  return (
    <Card>
      <NumberInput label="毎月のポイント投資額" value={monthly} onChange={setMonthly} suffix="pt/円" step={100} />
      <NumberInput label="期間" value={years} onChange={setYears} suffix="年" />
      <NumberInput label="想定利回り" value={rate} onChange={setRate} suffix="%" step={0.1} />
      <Result label="将来価値" value={`${fmt(result.future)} 円相当`} highlight />
      <Result label="投資元本" value={`${fmt(result.principal)} pt相当`} />
    </Card>
  );
}

function HouseholdBudget() {
  const [income, setIncome] = useState(300000);
  const [housing, setHousing] = useState(80000);
  const [food, setFood] = useState(50000);
  const [utility, setUtility] = useState(20000);
  const [communication, setCommunication] = useState(15000);
  const [insurance, setInsurance] = useState(10000);
  const [other, setOther] = useState(30000);
  const result = useMemo(() => {
    const total = housing + food + utility + communication + insurance + other;
    const saving = income - total;
    const rate = income > 0 ? (saving / income) * 100 : 0;
    return { total, saving, rate };
  }, [income, housing, food, utility, communication, insurance, other]);
  return (
    <Card>
      <NumberInput label="月収（手取り）" value={income} onChange={setIncome} suffix="円" step={10000} />
      <NumberInput label="住居費" value={housing} onChange={setHousing} suffix="円" />
      <NumberInput label="食費" value={food} onChange={setFood} suffix="円" />
      <NumberInput label="水道光熱費" value={utility} onChange={setUtility} suffix="円" />
      <NumberInput label="通信費" value={communication} onChange={setCommunication} suffix="円" />
      <NumberInput label="保険料" value={insurance} onChange={setInsurance} suffix="円" />
      <NumberInput label="その他" value={other} onChange={setOther} suffix="円" />
      <Result label="支出合計" value={`${fmt(result.total)} 円`} />
      <Result label="貯蓄可能額" value={`${fmt(result.saving)} 円`} highlight />
      <Result label="貯蓄率" value={`${result.rate.toFixed(1)}%`} />
      <p className="text-xs text-muted">※ 理想的な貯蓄率は手取りの20%以上。</p>
    </Card>
  );
}

function SavingsVsInvestment() {
  const [monthly, setMonthly] = useState(30000);
  const [years, setYears] = useState(20);
  const [savingRate, setSavingRate] = useState(0.1);
  const [investRate, setInvestRate] = useState(5);
  const result = useMemo(() => {
    const n = years * 12;
    const rSave = savingRate / 100 / 12;
    const rInv = investRate / 100 / 12;
    const saving = rSave > 0 ? monthly * ((Math.pow(1 + rSave, n) - 1) / rSave) : monthly * n;
    const investing = monthly * ((Math.pow(1 + rInv, n) - 1) / rInv);
    return { saving, investing, diff: investing - saving };
  }, [monthly, years, savingRate, investRate]);
  return (
    <Card>
      <NumberInput label="毎月の積立額" value={monthly} onChange={setMonthly} suffix="円" step={1000} />
      <NumberInput label="期間" value={years} onChange={setYears} suffix="年" />
      <NumberInput label="預金金利" value={savingRate} onChange={setSavingRate} suffix="%" step={0.01} />
      <NumberInput label="投資利回り" value={investRate} onChange={setInvestRate} suffix="%" step={0.1} />
      <Result label="預金の将来価値" value={`${fmt(result.saving)} 円`} />
      <Result label="投資の将来価値" value={`${fmt(result.investing)} 円`} highlight />
      <Result label="差額" value={`+${fmt(result.diff)} 円`} />
    </Card>
  );
}

function CreditCardPoints() {
  const [monthly, setMonthly] = useState(200000);
  const [rate, setRate] = useState(1);
  const result = useMemo(() => {
    const monthlyPoint = monthly * (rate / 100);
    const annual = monthlyPoint * 12;
    const tenYear = annual * 10;
    return { monthlyPoint, annual, tenYear };
  }, [monthly, rate]);
  return (
    <Card>
      <NumberInput label="月間カード利用額" value={monthly} onChange={setMonthly} suffix="円" step={10000} />
      <NumberInput label="還元率" value={rate} onChange={setRate} suffix="%" step={0.1} />
      <Result label="月間獲得ポイント" value={`${fmt(result.monthlyPoint)} pt`} />
      <Result label="年間獲得ポイント" value={`${fmt(result.annual)} pt`} highlight />
      <Result label="10年間の獲得総額" value={`${fmt(result.tenYear)} pt`} />
    </Card>
  );
}

function EducationFund() {
  const [childAge, setChildAge] = useState(3);
  const [collegePlan, setCollegePlan] = useState(1);
  const result = useMemo(() => {
    const pubCollege = 5000000;
    const privCollege = 8000000;
    const need = collegePlan === 1 ? pubCollege : privCollege;
    const years = 18 - childAge;
    const r = 5 / 100 / 12;
    const n = years * 12;
    const monthly = n > 0 ? need / ((Math.pow(1 + r, n) - 1) / r) : need;
    return { need, years, monthly };
  }, [childAge, collegePlan]);
  return (
    <Card>
      <NumberInput label="子どもの現在年齢" value={childAge} onChange={setChildAge} suffix="歳" />
      <div>
        <label className="block text-sm font-medium mb-1">進学プラン</label>
        <select
          value={collegePlan}
          onChange={(e) => setCollegePlan(Number(e.target.value))}
          className="w-full px-3 py-2 rounded-lg border border-card-border bg-card-bg"
        >
          <option value={1}>国公立大学（約500万円）</option>
          <option value={2}>私立大学（約800万円）</option>
        </select>
      </div>
      <Result label="必要教育資金" value={`${fmt(result.need)} 円`} />
      <Result label="準備期間" value={`${result.years} 年`} />
      <Result label="毎月の積立額（利回り5%想定）" value={`${fmt(result.monthly)} 円`} highlight />
    </Card>
  );
}

function EmergencyFund() {
  const [monthlyExpense, setMonthlyExpense] = useState(250000);
  const [type, setType] = useState(2);
  const result = useMemo(() => {
    const months = type === 1 ? 3 : type === 2 ? 6 : 12;
    const total = monthlyExpense * months;
    return { months, total };
  }, [monthlyExpense, type]);
  return (
    <Card>
      <NumberInput label="月間生活費" value={monthlyExpense} onChange={setMonthlyExpense} suffix="円" step={10000} />
      <div>
        <label className="block text-sm font-medium mb-1">職業タイプ</label>
        <select
          value={type}
          onChange={(e) => setType(Number(e.target.value))}
          className="w-full px-3 py-2 rounded-lg border border-card-border bg-card-bg"
        >
          <option value={1}>公務員・大企業正社員（3ヶ月）</option>
          <option value={2}>一般会社員（6ヶ月）</option>
          <option value={3}>フリーランス・自営業（12ヶ月）</option>
        </select>
      </div>
      <Result label="推奨月数" value={`${result.months} ヶ月分`} />
      <Result label="生活防衛資金の目安" value={`${fmt(result.total)} 円`} highlight />
      <p className="text-xs text-muted">※ 生活防衛資金は普通預金・定期預金など、すぐに引き出せる口座で確保。</p>
    </Card>
  );
}

function NisaVsIdeco() {
  const [annualIncome, setAnnualIncome] = useState(5000000);
  const [monthly, setMonthly] = useState(23000);
  const [years, setYears] = useState(30);
  const result = useMemo(() => {
    const taxRate =
      annualIncome <= 3300000 ? 0.2 :
      annualIncome <= 6950000 ? 0.3 :
      annualIncome <= 9000000 ? 0.33 :
      annualIncome <= 18000000 ? 0.43 : 0.5;
    const idecoTaxSave = monthly * 12 * taxRate;
    const idecoTotalTaxSave = idecoTaxSave * years;
    const r = 0.05 / 12;
    const n = years * 12;
    const fv = monthly * ((Math.pow(1 + r, n) - 1) / r);
    const nisaGain = fv - monthly * n;
    const idecoAfterTax = fv + idecoTotalTaxSave - (fv > monthly * n ? (fv - monthly * n) * 0.1 : 0);
    return { taxRate, idecoTaxSave, idecoTotalTaxSave, fv, nisaGain, idecoAfterTax };
  }, [annualIncome, monthly, years]);
  return (
    <Card>
      <NumberInput label="年収（額面）" value={annualIncome} onChange={setAnnualIncome} suffix="円" step={100000} />
      <NumberInput label="毎月の積立額" value={monthly} onChange={setMonthly} suffix="円" step={1000} />
      <NumberInput label="運用期間" value={years} onChange={setYears} suffix="年" min={1} />
      <Result label="適用所得税・住民税率（概算）" value={`${Math.round(result.taxRate * 100)} %`} />
      <Result label="iDeCoの年間節税額" value={`${fmt(result.idecoTaxSave)} 円/年`} />
      <Result label="iDeCoの累計節税額" value={`${fmt(result.idecoTotalTaxSave)} 円`} />
      <Result label="運用後資産（共通：年5%想定）" value={`${fmt(result.fv)} 円`} />
      <Result label="新NISA実効利益（非課税）" value={`${fmt(result.nisaGain)} 円`} highlight />
      <Result label="iDeCo実効利益（節税込み）" value={`${fmt(result.idecoAfterTax - monthly * 12 * years)} 円`} highlight />
      <p className="text-xs text-muted">
        ※NISAは流動性あり・iDeCoは60歳まで引き出せないが節税効果あり。まずはNISA優先、余裕があればiDeCo併用が基本戦略です。
      </p>
    </Card>
  );
}

function InflationImpact() {
  const [amount, setAmount] = useState(10000000);
  const [years, setYears] = useState(20);
  const result = useMemo(() => {
    const calc = (rate: number) => amount / Math.pow(1 + rate, years);
    return {
      scenario2: calc(0.02),
      scenario3: calc(0.03),
      scenario5: calc(0.05),
    };
  }, [amount, years]);
  return (
    <Card>
      <NumberInput label="現在の現金額" value={amount} onChange={setAmount} suffix="円" step={100000} />
      <NumberInput label="経過年数" value={years} onChange={setYears} suffix="年" min={1} />
      <Result label="インフレ率2%の場合の実質価値" value={`${fmt(result.scenario2)} 円`} />
      <Result label="インフレ率3%の場合の実質価値" value={`${fmt(result.scenario3)} 円`} highlight />
      <Result label="インフレ率5%の場合の実質価値" value={`${fmt(result.scenario5)} 円`} />
      <p className="text-xs text-muted">
        ※日銀の目標物価上昇率は年2%。現預金だけで保有していると、インフレ率分だけ実質価値が減少します。
      </p>
    </Card>
  );
}

function FurusatoLimit() {
  const [income, setIncome] = useState(5000000);
  const [family, setFamily] = useState(1);
  const result = useMemo(() => {
    const baseLimit = income <= 3000000 ? income * 0.006 :
      income <= 5000000 ? income * 0.0075 :
      income <= 8000000 ? income * 0.01 :
      income <= 12000000 ? income * 0.013 : income * 0.016;
    const multiplier = family === 1 ? 1.0 : family === 2 ? 0.85 : family === 3 ? 0.75 : 0.65;
    const limit = baseLimit * multiplier;
    const rewardValue = limit * 0.3;
    return { limit, rewardValue };
  }, [income, family]);
  return (
    <Card>
      <NumberInput label="年収（額面）" value={income} onChange={setIncome} suffix="円" step={100000} />
      <div>
        <label className="block text-sm font-medium mb-1">家族構成</label>
        <select
          value={family}
          onChange={(e) => setFamily(Number(e.target.value))}
          className="w-full px-3 py-2 rounded-lg border border-card-border bg-card-bg"
        >
          <option value={1}>独身・共働き（扶養なし）</option>
          <option value={2}>夫婦（配偶者扶養あり）</option>
          <option value={3}>夫婦+子1人（高校生）</option>
          <option value={4}>夫婦+子2人（高校生・大学生）</option>
        </select>
      </div>
      <Result label="ふるさと納税の概算限度額" value={`${fmt(result.limit)} 円`} highlight />
      <Result label="想定返礼品価値（30%）" value={`${fmt(result.rewardValue)} 円相当`} />
      <p className="text-xs text-muted">
        ※概算値です。住宅ローン控除・医療費控除等との併用で限度額は減ります。詳細はシミュレーターで個別に試算を。
      </p>
    </Card>
  );
}

function BonusInvestment() {
  const [bonus, setBonus] = useState(500000);
  const [times, setTimes] = useState(2);
  const [years, setYears] = useState(20);
  const [rate, setRate] = useState(5);
  const result = useMemo(() => {
    const annual = bonus * times;
    const r = rate / 100;
    const fv = annual * ((Math.pow(1 + r, years) - 1) / r);
    const invested = annual * years;
    return { annual, fv, invested, gain: fv - invested };
  }, [bonus, times, years, rate]);
  return (
    <Card>
      <NumberInput label="1回あたりのボーナス投資額" value={bonus} onChange={setBonus} suffix="円" step={10000} />
      <NumberInput label="年間ボーナス回数" value={times} onChange={setTimes} min={1} />
      <NumberInput label="投資期間" value={years} onChange={setYears} suffix="年" min={1} />
      <NumberInput label="想定利回り" value={rate} onChange={setRate} suffix="%" min={0} />
      <Result label="年間投資額" value={`${fmt(result.annual)} 円`} />
      <Result label="投資元本合計" value={`${fmt(result.invested)} 円`} />
      <Result label="運用後資産" value={`${fmt(result.fv)} 円`} highlight />
      <Result label="運用益" value={`${fmt(result.gain)} 円`} />
      <p className="text-xs text-muted">
        ※新NISA成長投資枠（年間240万円）を活用すれば運用益が非課税に。
      </p>
    </Card>
  );
}

function PensionCalculator() {
  const [annualIncome, setAnnualIncome] = useState(5000000);
  const [years, setYears] = useState(40);
  const result = useMemo(() => {
    const avgMonthlyIncome = annualIncome / 12;
    const kouseiAnnual = avgMonthlyIncome * 12 * 0.005481 * years;
    const kokuminAnnual = 816000 * (years / 40);
    const total = kouseiAnnual + kokuminAnnual;
    return { kouseiAnnual, kokuminAnnual, total, monthly: total / 12 };
  }, [annualIncome, years]);
  return (
    <Card>
      <NumberInput label="平均年収（現役期間）" value={annualIncome} onChange={setAnnualIncome} suffix="円" step={100000} />
      <NumberInput label="厚生年金加入年数" value={years} onChange={setYears} suffix="年" min={1} />
      <Result label="厚生年金（年間）" value={`${fmt(result.kouseiAnnual)} 円`} />
      <Result label="国民年金（年間・満額相当）" value={`${fmt(result.kokuminAnnual)} 円`} />
      <Result label="合計年金受給額（年）" value={`${fmt(result.total)} 円`} />
      <Result label="月額換算" value={`${fmt(result.monthly)} 円`} highlight />
      <p className="text-xs text-muted">
        ※概算値。実際の受給額は加入履歴・物価スライド等で変動します。老後資金シミュレーターと組み合わせて計画を。
      </p>
    </Card>
  );
}

function MortgageRefinance() {
  const [currentBalance, setCurrentBalance] = useState(25000000);
  const [currentRate, setCurrentRate] = useState(1.5);
  const [newRate, setNewRate] = useState(0.5);
  const [remainingYears, setRemainingYears] = useState(25);
  const [refinanceCost, setRefinanceCost] = useState(600000);
  const result = useMemo(() => {
    const n = remainingYears * 12;
    const calc = (rate: number) => {
      const r = rate / 100 / 12;
      return r === 0 ? currentBalance / n : (currentBalance * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    };
    const currentMonthly = calc(currentRate);
    const newMonthly = calc(newRate);
    const monthlySaving = currentMonthly - newMonthly;
    const totalSaving = monthlySaving * n - refinanceCost;
    return { currentMonthly, newMonthly, monthlySaving, totalSaving };
  }, [currentBalance, currentRate, newRate, remainingYears, refinanceCost]);
  return (
    <Card>
      <NumberInput label="現在の残債" value={currentBalance} onChange={setCurrentBalance} suffix="円" step={100000} />
      <NumberInput label="現在の金利" value={currentRate} onChange={setCurrentRate} suffix="%" step={0.01} />
      <NumberInput label="借換後の金利" value={newRate} onChange={setNewRate} suffix="%" step={0.01} />
      <NumberInput label="残存期間" value={remainingYears} onChange={setRemainingYears} suffix="年" min={1} />
      <NumberInput label="借換諸費用" value={refinanceCost} onChange={setRefinanceCost} suffix="円" step={10000} />
      <Result label="現在の月額返済" value={`${fmt(result.currentMonthly)} 円`} />
      <Result label="借換後の月額返済" value={`${fmt(result.newMonthly)} 円`} />
      <Result label="月々の節約額" value={`${fmt(result.monthlySaving)} 円`} />
      <Result label="諸費用控除後の総節約額" value={`${fmt(result.totalSaving)} 円`} highlight />
      <p className="text-xs text-muted">
        ※金利差1%以上・残期間10年以上・残債1,000万円以上が借換の目安とされています。
      </p>
    </Card>
  );
}

function MedicalDeduction() {
  const [medicalCost, setMedicalCost] = useState(200000);
  const [income, setIncome] = useState(5000000);
  const result = useMemo(() => {
    const threshold = Math.min(100000, income * 0.05);
    const deductible = Math.max(0, medicalCost - threshold);
    const taxRate =
      income <= 1950000 ? 0.15 :
      income <= 3300000 ? 0.2 :
      income <= 6950000 ? 0.3 :
      income <= 9000000 ? 0.33 :
      income <= 18000000 ? 0.43 : 0.5;
    const refund = deductible * taxRate;
    return { threshold, deductible, refund };
  }, [medicalCost, income]);
  return (
    <Card>
      <NumberInput label="年間医療費（自己負担分）" value={medicalCost} onChange={setMedicalCost} suffix="円" step={10000} />
      <NumberInput label="年収（額面）" value={income} onChange={setIncome} suffix="円" step={100000} />
      <Result label="控除対象の足切り額" value={`${fmt(result.threshold)} 円`} />
      <Result label="医療費控除額" value={`${fmt(result.deductible)} 円`} />
      <Result label="還付される所得税+住民税（概算）" value={`${fmt(result.refund)} 円`} highlight />
      <p className="text-xs text-muted">
        ※年間10万円または所得の5%のいずれか少ない方が足切り額。確定申告が必要です。
      </p>
    </Card>
  );
}

function GiftTax() {
  const [amount, setAmount] = useState(3000000);
  const [relation, setRelation] = useState(1);
  const result = useMemo(() => {
    const taxable = Math.max(0, amount - 1100000);
    const rates = relation === 1
      ? [[2000000, 0.1, 0], [4000000, 0.15, 100000], [6000000, 0.2, 300000], [10000000, 0.3, 900000], [15000000, 0.4, 1900000], [30000000, 0.45, 2650000], [45000000, 0.5, 4150000], [Infinity, 0.55, 6400000]]
      : [[2000000, 0.1, 0], [3000000, 0.15, 100000], [4000000, 0.2, 250000], [6000000, 0.3, 650000], [10000000, 0.4, 1250000], [15000000, 0.45, 1750000], [30000000, 0.5, 2500000], [Infinity, 0.55, 4000000]];
    let tax = 0;
    for (const [limit, rate, deduction] of rates) {
      if (taxable <= limit) {
        tax = taxable * rate - deduction;
        break;
      }
    }
    return { taxable, tax: Math.max(0, tax) };
  }, [amount, relation]);
  return (
    <Card>
      <NumberInput label="贈与額（年間合計）" value={amount} onChange={setAmount} suffix="円" step={100000} />
      <div>
        <label className="block text-sm font-medium mb-1">受贈者と贈与者の関係</label>
        <select
          value={relation}
          onChange={(e) => setRelation(Number(e.target.value))}
          className="w-full px-3 py-2 rounded-lg border border-card-border bg-card-bg"
        >
          <option value={1}>直系尊属（親・祖父母）から20歳以上の子・孫へ（特例税率）</option>
          <option value={2}>上記以外（兄弟・夫婦・他人間など／一般税率）</option>
        </select>
      </div>
      <Result label="基礎控除後の課税価格" value={`${fmt(result.taxable)} 円`} />
      <Result label="贈与税額（年間）" value={`${fmt(result.tax)} 円`} highlight />
      <p className="text-xs text-muted">
        ※年間110万円までは非課税。相続時精算課税を選択する場合は別計算になります。
      </p>
    </Card>
  );
}

function InheritanceTax() {
  const [totalAssets, setTotalAssets] = useState(50000000);
  const [heirs, setHeirs] = useState(3);
  const result = useMemo(() => {
    const basicDeduction = 30000000 + 6000000 * heirs;
    const taxable = Math.max(0, totalAssets - basicDeduction);
    const perHeir = taxable / heirs;
    const calcTax = (n: number) => {
      const rates = [[10000000, 0.1, 0], [30000000, 0.15, 500000], [50000000, 0.2, 2000000], [100000000, 0.3, 7000000], [200000000, 0.4, 17000000], [300000000, 0.45, 27000000], [600000000, 0.5, 42000000], [Infinity, 0.55, 72000000]];
      for (const [limit, rate, deduction] of rates) {
        if (n <= limit) return n * rate - deduction;
      }
      return 0;
    };
    const totalTax = calcTax(perHeir) * heirs;
    return { basicDeduction, taxable, totalTax: Math.max(0, totalTax) };
  }, [totalAssets, heirs]);
  return (
    <Card>
      <NumberInput label="遺産総額（純財産）" value={totalAssets} onChange={setTotalAssets} suffix="円" step={1000000} />
      <NumberInput label="法定相続人の人数" value={heirs} onChange={setHeirs} min={1} />
      <Result label="基礎控除額" value={`${fmt(result.basicDeduction)} 円`} />
      <Result label="課税価格" value={`${fmt(result.taxable)} 円`} />
      <Result label="相続税総額（概算）" value={`${fmt(result.totalTax)} 円`} highlight />
      <p className="text-xs text-muted">
        ※基礎控除3,000万円+600万円×法定相続人数。配偶者控除・2割加算等の個別要素は反映していません。
      </p>
    </Card>
  );
}

function RetirementPaymentTax() {
  const [payment, setPayment] = useState(20000000);
  const [years, setYears] = useState(35);
  const result = useMemo(() => {
    const deduction = years <= 20 ? 400000 * years : 8000000 + 700000 * (years - 20);
    const effectiveDeduction = Math.max(800000, deduction);
    const taxable = Math.max(0, (payment - effectiveDeduction) / 2);
    const calcIncomeTax = (n: number) => {
      const rates = [[1950000, 0.05, 0], [3300000, 0.1, 97500], [6950000, 0.2, 427500], [9000000, 0.23, 636000], [18000000, 0.33, 1536000], [40000000, 0.4, 2796000], [Infinity, 0.45, 4796000]];
      for (const [limit, rate, deduction] of rates) {
        if (n <= limit) return n * rate - deduction;
      }
      return 0;
    };
    const incomeTax = calcIncomeTax(taxable) * 1.021;
    const residentTax = taxable * 0.1;
    return { deduction: effectiveDeduction, taxable, incomeTax, residentTax, total: incomeTax + residentTax };
  }, [payment, years]);
  return (
    <Card>
      <NumberInput label="退職金額" value={payment} onChange={setPayment} suffix="円" step={100000} />
      <NumberInput label="勤続年数" value={years} onChange={setYears} suffix="年" min={1} />
      <Result label="退職所得控除額" value={`${fmt(result.deduction)} 円`} />
      <Result label="課税退職所得金額" value={`${fmt(result.taxable)} 円`} />
      <Result label="所得税＋復興特別所得税" value={`${fmt(result.incomeTax)} 円`} />
      <Result label="住民税" value={`${fmt(result.residentTax)} 円`} />
      <Result label="税金合計" value={`${fmt(result.total)} 円`} highlight />
      <p className="text-xs text-muted">
        ※退職所得は分離課税で、控除額が大きく設定されているため税負担が軽いのが特徴です。
      </p>
    </Card>
  );
}

function RentVsBuy() {
  const [rent, setRent] = useState(120000);
  const [rentIncrease, setRentIncrease] = useState(0.5);
  const [housePrice, setHousePrice] = useState(40000000);
  const [downPayment, setDownPayment] = useState(5000000);
  const [loanRate, setLoanRate] = useState(0.8);
  const [years, setYears] = useState(30);
  const result = useMemo(() => {
    let totalRent = 0;
    for (let y = 0; y < years; y++) {
      totalRent += rent * 12 * Math.pow(1 + rentIncrease / 100, y);
    }
    const loan = housePrice - downPayment;
    const r = loanRate / 100 / 12;
    const n = years * 12;
    const monthlyPayment = r === 0 ? loan / n : (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalLoanPayment = monthlyPayment * n;
    const totalHouse = totalLoanPayment + downPayment + housePrice * 0.02 * years; // 固定資産税・修繕費想定
    return { totalRent, totalLoanPayment, totalHouse, monthlyPayment };
  }, [rent, rentIncrease, housePrice, downPayment, loanRate, years]);
  return (
    <Card>
      <NumberInput label="現在の家賃（月）" value={rent} onChange={setRent} suffix="円" step={1000} />
      <NumberInput label="家賃上昇率（年）" value={rentIncrease} onChange={setRentIncrease} suffix="%" step={0.1} />
      <NumberInput label="物件価格" value={housePrice} onChange={setHousePrice} suffix="円" step={1000000} />
      <NumberInput label="頭金" value={downPayment} onChange={setDownPayment} suffix="円" step={100000} />
      <NumberInput label="住宅ローン金利" value={loanRate} onChange={setLoanRate} suffix="%" step={0.01} />
      <NumberInput label="比較期間" value={years} onChange={setYears} suffix="年" min={1} />
      <Result label="賃貸の総支払額" value={`${fmt(result.totalRent)} 円`} />
      <Result label="持ち家の月々返済額" value={`${fmt(result.monthlyPayment)} 円`} />
      <Result label="持ち家の総コスト（ローン+頭金+維持費）" value={`${fmt(result.totalHouse)} 円`} highlight />
      <p className="text-xs text-muted">
        ※持ち家には固定資産税・修繕費を年2%で計上。物件価値の変動は考慮していません。
      </p>
    </Card>
  );
}

function CarMaintenanceCost() {
  const [gasCost, setGasCost] = useState(8000);
  const [insurance, setInsurance] = useState(60000);
  const [parking, setParking] = useState(15000);
  const [tax, setTax] = useState(39500);
  const [shaken, setShaken] = useState(80000);
  const result = useMemo(() => {
    const annual = gasCost * 12 + insurance + parking * 12 + tax + shaken / 2;
    return { annual, monthly: annual / 12 };
  }, [gasCost, insurance, parking, tax, shaken]);
  return (
    <Card>
      <NumberInput label="月間ガソリン代" value={gasCost} onChange={setGasCost} suffix="円" step={500} />
      <NumberInput label="年間任意保険料" value={insurance} onChange={setInsurance} suffix="円" step={5000} />
      <NumberInput label="月額駐車場代" value={parking} onChange={setParking} suffix="円" step={1000} />
      <NumberInput label="年間自動車税" value={tax} onChange={setTax} suffix="円" step={1000} />
      <NumberInput label="車検費用（2年ごと）" value={shaken} onChange={setShaken} suffix="円" step={5000} />
      <Result label="年間維持費合計" value={`${fmt(result.annual)} 円`} />
      <Result label="月額換算" value={`${fmt(result.monthly)} 円`} highlight />
      <p className="text-xs text-muted">
        ※ローン・残価・消耗品交換は含みません。カーシェア・リースとの比較検討に。
      </p>
    </Card>
  );
}

function DebtRepayment() {
  const [balance, setBalance] = useState(1000000);
  const [rate, setRate] = useState(15);
  const [monthlyPayment, setMonthlyPayment] = useState(30000);
  const result = useMemo(() => {
    const r = rate / 100 / 12;
    let remaining = balance;
    let months = 0;
    let totalInterest = 0;
    while (remaining > 0 && months < 600) {
      const interest = remaining * r;
      const principal = Math.min(monthlyPayment - interest, remaining);
      if (principal <= 0) {
        return { months: -1, totalPay: 0, totalInterest: 0 };
      }
      totalInterest += interest;
      remaining -= principal;
      months++;
    }
    return { months, totalPay: monthlyPayment * months, totalInterest };
  }, [balance, rate, monthlyPayment]);
  return (
    <Card>
      <NumberInput label="借入残高" value={balance} onChange={setBalance} suffix="円" step={10000} />
      <NumberInput label="年利" value={rate} onChange={setRate} suffix="%" step={0.1} />
      <NumberInput label="毎月の返済額" value={monthlyPayment} onChange={setMonthlyPayment} suffix="円" step={1000} />
      {result.months === -1 ? (
        <Result label="警告" value="月々の返済額が利息より少ないため、永遠に完済できません" highlight />
      ) : (
        <>
          <Result label="完済までの期間" value={`${result.months} ヶ月（${Math.floor(result.months / 12)}年${result.months % 12}ヶ月）`} />
          <Result label="返済総額" value={`${fmt(result.totalPay)} 円`} />
          <Result label="うち利息合計" value={`${fmt(result.totalInterest)} 円`} highlight />
        </>
      )}
      <p className="text-xs text-muted">
        ※カードローン・キャッシング・リボ払いの試算に。繰上返済で総利息を大きく圧縮できます。
      </p>
    </Card>
  );
}

function FactoringFeeCalculator() {
  const [receivable, setReceivable] = useState(1000000);
  const [feeRate, setFeeRate] = useState(12);
  const [type, setType] = useState<"2" | "3">("2");
  const result = useMemo(() => {
    const effectiveRate = type === "2" ? feeRate : Math.min(feeRate, 9);
    const fee = (receivable * effectiveRate) / 100;
    const received = receivable - fee;
    return { fee, received, effectiveRate };
  }, [receivable, feeRate, type]);
  return (
    <Card>
      <NumberInput label="売掛金（請求書金額）" value={receivable} onChange={setReceivable} suffix="円" step={10000} />
      <NumberInput label="手数料率" value={feeRate} onChange={setFeeRate} suffix="%" step={0.5} />
      <div>
        <label className="block text-sm font-medium mb-2">ファクタリング形態</label>
        <div className="flex gap-2">
          <button onClick={() => setType("2")} className={`px-4 py-2 rounded-lg text-sm ${type === "2" ? "bg-primary text-white" : "bg-card-bg border border-card-border"}`}>2社間（8〜20%）</button>
          <button onClick={() => setType("3")} className={`px-4 py-2 rounded-lg text-sm ${type === "3" ? "bg-primary text-white" : "bg-card-bg border border-card-border"}`}>3社間（1〜9%）</button>
        </div>
      </div>
      <Result label="適用手数料率" value={`${result.effectiveRate}%`} />
      <Result label="手数料" value={`${fmt(result.fee)} 円`} />
      <Result label="実際の入金額" value={`${fmt(result.received)} 円`} highlight />
      <p className="text-xs text-muted">※2社間は取引先への通知不要、3社間は通知必要で手数料が低めです。</p>
    </Card>
  );
}

function DividendIncomeSimulator() {
  const [investment, setInvestment] = useState(10000000);
  const [yieldRate, setYieldRate] = useState(4);
  const [reinvestYears, setReinvestYears] = useState(10);
  const result = useMemo(() => {
    const annual = (investment * yieldRate) / 100;
    const monthly = annual / 12;
    const afterTax = annual * 0.79685;
    const futureValue = investment * Math.pow(1 + yieldRate / 100, reinvestYears);
    const futureAnnual = (futureValue * yieldRate) / 100;
    return { annual, monthly, afterTax, futureValue, futureAnnual };
  }, [investment, yieldRate, reinvestYears]);
  return (
    <Card>
      <NumberInput label="投資元本" value={investment} onChange={setInvestment} suffix="円" step={100000} />
      <NumberInput label="配当利回り" value={yieldRate} onChange={setYieldRate} suffix="%" step={0.1} />
      <NumberInput label="再投資年数" value={reinvestYears} onChange={setReinvestYears} suffix="年" step={1} />
      <Result label="年間配当金（税引前）" value={`${fmt(result.annual)} 円`} />
      <Result label="月額換算" value={`${fmt(result.monthly)} 円`} />
      <Result label="年間配当金（税引後20.315%）" value={`${fmt(result.afterTax)} 円`} />
      <Result label={`${reinvestYears}年後の資産額`} value={`${fmt(result.futureValue)} 円`} />
      <Result label={`${reinvestYears}年後の年間配当`} value={`${fmt(result.futureAnnual)} 円`} highlight />
      <p className="text-xs text-muted">※NISA口座なら配当金は非課税。米国株は米国で10%源泉徴収されます。</p>
    </Card>
  );
}

function IpoProfitCalculator() {
  const [offerPrice, setOfferPrice] = useState(2000);
  const [openingPrice, setOpeningPrice] = useState(5000);
  const [units, setUnits] = useState(100);
  const result = useMemo(() => {
    const cost = offerPrice * units;
    const sale = openingPrice * units;
    const profit = sale - cost;
    const tax = Math.max(profit * 0.20315, 0);
    const netProfit = profit - tax;
    const returnRate = (profit / cost) * 100;
    return { cost, sale, profit, tax, netProfit, returnRate };
  }, [offerPrice, openingPrice, units]);
  return (
    <Card>
      <NumberInput label="公募価格" value={offerPrice} onChange={setOfferPrice} suffix="円" step={100} />
      <NumberInput label="初値" value={openingPrice} onChange={setOpeningPrice} suffix="円" step={100} />
      <NumberInput label="保有株数" value={units} onChange={setUnits} suffix="株" step={100} />
      <Result label="取得価額" value={`${fmt(result.cost)} 円`} />
      <Result label="売却金額" value={`${fmt(result.sale)} 円`} />
      <Result label="売却益" value={`${fmt(result.profit)} 円`} />
      <Result label="税金（20.315%）" value={`${fmt(result.tax)} 円`} />
      <Result label="税引後手取り" value={`${fmt(result.netProfit)} 円`} highlight />
      <Result label="騰落率" value={`${result.returnRate.toFixed(2)}%`} />
      <p className="text-xs text-muted">※NISA成長投資枠で購入した場合は売却益も非課税になります。</p>
    </Card>
  );
}

function GoldInvestmentSimulator() {
  const [monthly, setMonthly] = useState(10000);
  const [years, setYears] = useState(20);
  const [annualReturn, setAnnualReturn] = useState(4);
  const result = useMemo(() => {
    const months = years * 12;
    const r = annualReturn / 100 / 12;
    let value = 0;
    for (let i = 0; i < months; i++) {
      value = (value + monthly) * (1 + r);
    }
    const contribution = monthly * months;
    const gain = value - contribution;
    return { value, contribution, gain };
  }, [monthly, years, annualReturn]);
  return (
    <Card>
      <NumberInput label="毎月の積立額" value={monthly} onChange={setMonthly} suffix="円" step={1000} />
      <NumberInput label="積立期間" value={years} onChange={setYears} suffix="年" step={1} />
      <NumberInput label="想定年利" value={annualReturn} onChange={setAnnualReturn} suffix="%" step={0.5} />
      <Result label="積立元本合計" value={`${fmt(result.contribution)} 円`} />
      <Result label="運用後資産" value={`${fmt(result.value)} 円`} highlight />
      <Result label="運用益" value={`${fmt(result.gain)} 円`} />
      <p className="text-xs text-muted">※金は過去30年平均で年利5〜7%。インフレヘッジ目的なら3〜4%想定が保守的。</p>
    </Card>
  );
}

function ReitDistributionCalculator() {
  const [investment, setInvestment] = useState(3000000);
  const [yieldRate, setYieldRate] = useState(4.5);
  const [useNisa, setUseNisa] = useState(true);
  const result = useMemo(() => {
    const annual = (investment * yieldRate) / 100;
    const monthly = annual / 12;
    const tax = useNisa ? 0 : annual * 0.20315;
    const netAnnual = annual - tax;
    const netMonthly = netAnnual / 12;
    return { annual, monthly, tax, netAnnual, netMonthly };
  }, [investment, yieldRate, useNisa]);
  return (
    <Card>
      <NumberInput label="投資元本" value={investment} onChange={setInvestment} suffix="円" step={100000} />
      <NumberInput label="分配金利回り" value={yieldRate} onChange={setYieldRate} suffix="%" step={0.1} />
      <div>
        <label className="block text-sm font-medium mb-2">
          <input type="checkbox" checked={useNisa} onChange={(e) => setUseNisa(e.target.checked)} className="mr-2" />
          NISA成長投資枠で運用する（分配金非課税）
        </label>
      </div>
      <Result label="年間分配金（税引前）" value={`${fmt(result.annual)} 円`} />
      <Result label="税金" value={`${fmt(result.tax)} 円`} />
      <Result label="年間分配金（税引後）" value={`${fmt(result.netAnnual)} 円`} highlight />
      <Result label="月額換算" value={`${fmt(result.netMonthly)} 円`} />
      <p className="text-xs text-muted">※J-REITの平均分配金利回りは4〜5%程度。NISA枠で保有すれば分配金も非課税に。</p>
    </Card>
  );
}
