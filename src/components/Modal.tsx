import { Fragment, ReactNode } from "react";
import { Dialog, Transition } from "@headlessui/react";

type ModalProps = {
    children: ReactNode,
    open: boolean,
    onClose: () => void,
}

export default function ModalComponent(props: ModalProps) {
    const { children, open, onClose } = props;

    return(
      <Transition show={open} as={Fragment}>
        <Dialog onClose={() => onClose()}>
          <Transition.Child 
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" />
          </Transition.Child>
          <Transition.Child 
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed flex inset-0 items-center justify-center p-4">
                <Dialog.Panel className="bg-gray-50 dark:bg-slate-600 dark:text-white p-6 rounded-md shadow-md">
                  {/* <Dialog.Title className="mb-4 font-medium">{title}</Dialog.Title> */}
                  {children}
                </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    )
}