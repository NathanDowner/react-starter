import { NavLink } from 'react-router-dom';

export type NavItemProps = {
  name: string;
  link: string;
  icon?: (props: React.ComponentProps<'svg'>) => JSX.Element;
};

const NavItem = ({ name, link, icon }: NavItemProps) => {
  const Icon = icon
    ? icon
    : (props: React.ComponentProps<'svg'>) => (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M12.24 8.55967C11.93 9.79967 10 9.16967 9.4 8.99967L9.95 6.81967C10.57 6.99967 12.56 7.25967 12.24 8.55967ZM9.13 10.1197L8.53 12.5297C9.27 12.7197 11.56 13.4497 11.9 12.0897C12.26 10.6697 9.87 10.2997 9.13 10.1197ZM19.7 12.4197C18.36 17.7797 12.94 21.0397 7.58 19.6997C2.22 18.3597 -1.037 12.9397 0.300001 7.57967C1.64 2.21967 7.06 -1.03633 12.42 0.299674C17.77 1.63967 21.03 7.05967 19.7 12.4197ZM12.21 6.04967L12.66 4.24967L11.56 3.99967L11.12 5.72967C10.83 5.65967 10.54 5.58967 10.24 5.52967L10.68 3.75967L9.59 3.49967L9.14 5.28967C8.9 5.22967 8.66 5.17967 8.44 5.11967L6.93 4.73967L6.63 5.90967C6.63 5.90967 7.45 6.09967 7.43 6.10967C7.88 6.21967 7.96 6.49967 7.94 6.74967L6.71 11.6797C6.66 11.8197 6.5 11.9997 6.21 11.9497C6.22 11.9597 5.41 11.7497 5.41 11.7497L4.87 12.9997L6.29 13.3597C6.56 13.4297 6.82 13.4997 7.08 13.5597L6.62 15.3797L7.72 15.6597L8.17 13.8497C8.47 13.9297 8.76 13.9997 9.04 14.0797L8.59 15.8697L9.69 16.1497L10.15 14.3297C12 14.6797 13.42 14.5397 14 12.8497C14.5 11.4997 14 10.6997 13 10.1897C13.72 9.99967 14.26 9.54967 14.41 8.56967C14.61 7.23967 13.59 6.52967 12.21 6.04967Z"
            fill="currentColor"
          />
        </svg>
      );
  return (
    <NavLink to={link}>
      {({ isActive }) => (
        <div
          className={`group relative flex items-center gap-4 fill-gray-dark px-8 py-3 text-sm ${
            isActive
              ? 'bg-light-green text-primary'
              : 'text-gray-dark hover:bg-light-green hover:text-primary'
          }`}
        >
          <span
            className={`absolute left-0 h-full w-1 rounded-r-full bg-primary ${
              isActive ? 'block' : 'hidden group-hover:block'
            }`}
          />
          <>
            <Icon className="h-6 shrink-0" /> <span>{name}</span>
          </>
        </div>
      )}
    </NavLink>
  );
};

export default NavItem;
