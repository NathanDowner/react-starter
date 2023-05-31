import { Transition } from '@headlessui/react';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
  reveal: boolean;
};

const AppearDown: React.FC<Props> = ({ children, reveal }) => {
  return (
    <Transition
      show={reveal}
      enter="transition-transform duration-100 ease-out"
      enterFrom="transform -translate-y-2 opacity-0"
      enterTo="transform translate-y-0 opacity-100"
      leave="transition-transform duration-75 ease-out"
      leaveFrom="transform translate-y-0 opacity-100"
      leaveTo="transform -translate-y-2 opacity-0"
    >
      {children}
    </Transition>
  );
};

export default AppearDown;
