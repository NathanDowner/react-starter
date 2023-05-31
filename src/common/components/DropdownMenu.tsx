import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { HiOutlineUser, HiLogout } from 'react-icons/hi';
import { Fragment } from 'react';

type DropdownMenuProps = {
  onLogout: () => void;
};
export const DropdownMenu = ({ onLogout }: DropdownMenuProps) => {
  return (
    <Menu as="div" className="relative flex items-center">
      <Menu.Button className="shrink-0 grid place-items-center rounded-full bg-white/20 p-2 border-none hover:bg-white/30 cursor-pointer">
        {/* <img
          src={user.profile_photo_url}
          className="h-[36px] cursor-pointer rounded-full hover:opacity-80"
          alt=""
        /> */}
        <HiOutlineUser className=" h-6 w-6 text-white" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute top-full right-0 z-50 mt-2 w-56 origin-top-right divide-y divide-tw-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="account/general"
                  className={`${
                    active ? 'bg-light-green text-primary' : 'text-tw-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {/* <IdentificationIcon className="mr-2 h-5" /> */}
                  Account
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={onLogout}
                  className={`${
                    active ? 'bg-light-green text-primary' : 'text-tw-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <HiLogout className="mr-2 h-5" />
                  Logout
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
