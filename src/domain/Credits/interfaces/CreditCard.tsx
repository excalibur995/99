import Image from "@/components/common/Image";
import Modal from "@/components/common/Modal";
import { hardcodedCreditLimit } from "@/lib/constant";
import useToggle from "@/lib/hooks/useToggle";
import dynamic from "next/dynamic";
import { Attributes } from "../model";

const CreditRatesList = dynamic(() => import("./CreditRatesList"));
const CreditEnquiryForm = dynamic(() => import("./CreditEnquiryForm"));

const CreditCard = (props: Attributes) => {
  const [ratesVisible, toggleRates] = useToggle();
  const [enquiryVisible, toggleEnquiry] = useToggle();
  return (
    <div className="border border-[#E7E8EB rounded-xl overflow-hidden">
      <div className="flex flex-col gap-3 ] p-3 ">
        <section className="flex flex-row items-center gap-2">
          <Image
            src={props.imageLogo.data.attributes.url}
            alt="bank logo"
            className="w-24 h-[53px]"
            nextImageConfig={{ className: "object-contain" }}
          />
          <p className="text-[#0D1A35] font-bold">{props.bankName}</p>
        </section>
        <section className="grid grid-cols-2 gap-4">
          <div className="w-full">
            <h2 className="text-xs font-light">Suku bunga mulai dari</h2>
            <p className="text-[#0D1A35]">{props.bankRates[0].interestRate}</p>
          </div>
          <div>
            <h2 className="text-xs font-light">Tenor</h2>
            <p className="text-[#0D1A35]">{props.bankRates[0].tenor}</p>
          </div>
        </section>
        <section>
          <h2 className="text-xs font-light">Limit Credit</h2>
          <p className="text-[#0D1A35]">
            {
              hardcodedCreditLimit[
                (props.position ?? 1) % hardcodedCreditLimit.length
              ]
            }
          </p>
        </section>
      </div>
      <section className="bg-[#F3F7FF] ] p-3 ">
        <div className="flex flex-row justify-between items-center">
          <button onClick={toggleRates} className="text-[#2951A3] font-bold">
            Lihat {props.bankRates.length} Program
          </button>
          <button
            onClick={toggleEnquiry}
            className="bg-[#2951A3] text-white py-2 px-4 rounded-lg active:opacity-70 font-semibold"
          >
            Info Lebih Lanjut
          </button>
        </div>
      </section>
      <Modal
        open={ratesVisible}
        onClose={toggleRates}
        title="Program Multiguna Bank BTN"
      >
        {ratesVisible && (
          <CreditRatesList
            bankRates={props.bankRates}
            onClose={toggleRates}
            onToggleEnquiry={() => {
              toggleRates();
              toggleEnquiry();
            }}
          />
        )}
      </Modal>
      <Modal
        open={enquiryVisible}
        onClose={toggleEnquiry}
        title="Program Multiguna Bank BTN"
      >
        {enquiryVisible && (
          <CreditEnquiryForm onSuccessSendData={toggleEnquiry} />
        )}
      </Modal>
    </div>
  );
};

export default CreditCard;
