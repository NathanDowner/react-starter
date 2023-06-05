import { HiClipboardList, HiQuestionMarkCircle } from 'react-icons/hi';
import NavItem, { NavItemProps } from './NavItem';

type AsideProps = {
  isDrawerOpen: boolean;
};

const items: NavItemProps[] = [
  {
    name: 'Overview',
    link: '/dashboard',
    icon: HiClipboardList,
  },
  {
    name: 'Get help',
    link: '/dashboard/help',
    icon: HiQuestionMarkCircle,
  },
];

const Aside = ({ isDrawerOpen }: AsideProps) => {
  return (
    <aside
      className={`fixed top-0 z-50 h-screen w-[234px] shrink-0 bg-white py-12 transition-all md:sticky ${
        isDrawerOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}
    >
      <header className="mb-12 flex items-center justify-center space-x-2 text-xl font-semibold text-secondary">
        {/* <img src={logo} className="h-6" alt="Unbank Logo" /> */}
        <span>Project Name Here</span>
      </header>

      {/* Options */}
      <nav>
        <ul className="flex flex-col space-y-2">
          {items.map((item) => (
            <NavItem key={item.name} {...item} />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
