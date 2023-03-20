import { BankRate } from "../model";
import CreditCardInfoModal from "./CreditCardInfoModal";
interface CreditRatesListProps {
  bankRates: BankRate[];
  onToggleEnquiry?: () => void;
  onClose?: () => void;
}
const CreditRatesList = ({
  bankRates = [],
  onToggleEnquiry,
  onClose,
}: CreditRatesListProps) => {
  return (
    <section className="mt-4 overflow-auto h-[calc(100vh_-_49px_-_36px)] md:h-fit">
      {bankRates.map(CreditCardInfoModal)}
      <section className="grid grid-cols-2 gap-4 mt-4">
        <button onClick={onClose} className="text-[#2951A3] font-bold">
          Kembali
        </button>
        <button
          onClick={onToggleEnquiry}
          className="bg-[#2951A3] text-white py-2 px-4 rounded-lg active:opacity-70 font-semibold"
        >
          Info Lebih Lanjut
        </button>
      </section>
    </section>
  );
};

export default CreditRatesList;
