import Input from "@/components/common/Input";
import Spinner from "@/components/common/Spinner";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import { sendToZapier } from "../services";

const phoneRegex = new RegExp(
  /(\()?(\d{2,3})?\)?[ .-]?\d{2,4}[ .-]?\d{2,4}[ .-]?\d{2,4}/g
);

const schema = yup
  .object({
    name: yup.string().required(),
    phone: yup
      .string()
      .matches(phoneRegex, "Phone number is not valid")
      .required(),
    enquire: yup
      .number()
      .integer()
      .min(0)
      .required()
      .typeError("Jumlah Pinjaman is required"),
    location: yup.string(),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

interface CreditEnquiryForm {
  onSuccessSendData?: () => void;
}

const CreditEnquiryForm = (props: CreditEnquiryForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const { mutate, isLoading } = useMutation(sendToZapier, {
    onSuccess(data, variables, context) {
      props.onSuccessSendData?.();
      toast.success("Permintaan Berhasil", {
        autoClose: 500,
        position: "bottom-center",
      });
    },
    onError(error, variables, context) {
      toast.error("Permintaan gagal, silahkan coba lagi", {
        autoClose: 500,
      });
    },
  });

  const onSubmit = (data: FormData) => mutate(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 py-4"
    >
      <Input
        label="Nama"
        required
        placeholder="Tulis Nama"
        errors={errors.name?.message}
        {...register("name")}
      />
      <Input
        label="Nomor Telepon"
        required
        prefix="+62"
        placeholder="Telepon"
        type="tel"
        errors={errors.phone?.message}
        {...register("phone")}
      />
      <Input
        type="number"
        label="Jumlah Pinjaman"
        required
        prefix="Rp"
        placeholder="0"
        errors={errors.enquire?.message}
        {...register("enquire")}
      />
      <Input
        label="Lokasi"
        whitePrefix
        type="search"
        prefix={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.2709 15.4394C13.1255 15.4394 15.4396 13.1253 15.4396 10.2708C15.4396 7.41635 13.1255 5.10228 10.2709 5.10228C7.4164 5.10228 5.10229 7.41635 5.10229 10.2708C5.10229 13.1247 7.4164 15.4394 10.2709 15.4394ZM10.2709 4C13.7343 4 16.5419 6.80748 16.5419 10.2708C16.5419 11.804 15.9915 13.2088 15.0776 14.2983L19.8386 19.0593C20.0541 19.2742 20.0535 19.623 19.8386 19.8384C19.6238 20.0539 19.275 20.0539 19.0595 19.8384L14.2985 15.0774C13.209 15.9913 11.8042 16.5417 10.2709 16.5417C6.80752 16.5417 4 13.7336 4 10.2708C4 6.80748 6.80752 4 10.2709 4Z"
              fill="#677E8C"
            />
          </svg>
        }
        placeholder="Cari Lokasi atau area"
        {...register("location")}
      />
      <p>{errors.location?.message}</p>

      <button
        type="submit"
        disabled={isLoading}
        className="flex flex-row items-center justify-center bg-[#2951A3] text-white py-2 px-4 rounded-lg active:opacity-70 font-semibold"
      >
        {isLoading && <Spinner />}
        Kirim
      </button>
    </form>
  );
};

export default CreditEnquiryForm;
