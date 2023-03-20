import { Dialog, Transition } from "@headlessui/react";
import { Fragment, PropsWithChildren } from "react";
interface ModalProps extends PropsWithChildren {
  title?: string;
  open?: boolean;
  onClose?: () => void;
  className?: string;
}

export default function Modal(props: ModalProps) {
  const { onClose = () => {} } = props;

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog as="div" className="relative z-[9999]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0  z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center md:p-4 sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden w-full md:min-w-[480px] md:rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg h-screen md:h-fit">
                <div className="bg-white px-4 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 w-full sm:mt-0 sm:ml-4 sm:text-left">
                      <div className="flex flex-row justify-between items-center border-b pb-2">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-semibold leading-6 text-gray-900"
                        >
                          {props.title}
                        </Dialog.Title>
                        <button
                          onClick={onClose}
                          className="text-4xl text-gray-400 font-thin rotate-45"
                        >
                          +
                        </button>
                      </div>
                      <div className="mt-2">{props.children}</div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
