import { BankRate } from "../model";

const RatesItems = (rates: { title: string; value: any }) => {
  return (
    <div className="flex flex-row justify-between items-center last:border-b last:pb-2 last:mb-2">
      <h4 className="text-sm font-thin">{rates.title}</h4>
      <h4 className="text-sm text-[#0D1A35]">{rates.value}</h4>
    </div>
  );
};

const CreditCardInfoModal = (rates: BankRate) => {
  return (
    <div key={rates.id}>
      <h3 className="text-[#0D1A35] text-sm font-bold">{rates.program}</h3>
      <div className="flex flex-col gap-1 mt-2">
        <RatesItems title="Suku Bunga" value={rates.interestRate} />
        <RatesItems title="Masa Kredit Fix" value={rates.fixedYear} />
        <RatesItems title="Tenor" value={rates.tenor} />
      </div>
    </div>
  );
};

export default CreditCardInfoModal;
