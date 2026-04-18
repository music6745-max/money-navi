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
