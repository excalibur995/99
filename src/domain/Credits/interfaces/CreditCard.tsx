import Image from "@/components/common/Image";
import { hardcodedCreditLimit } from "@/lib/constant";
import { Attributes } from "../model";

const CreditCard = (props: Attributes) => {
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
          <p className="text-[#2951A3] font-bold">
            Lihat {props.bankRates.length} Program
          </p>
          <button className="bg-[#2951A3] text-white py-2 px-4 rounded-lg active:opacity-70 font-semibold">
            Info Lebih Lanjut
          </button>
        </div>
      </section>
    </div>
  );
};

export default CreditCard;