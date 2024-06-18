interface HeaderProps extends React.PropsWithChildren<{}> {}

const Header = ({ children }: HeaderProps) => {
    return <div className="w-full h-20 border-b border-lightGray">{children}</div>;
};

export default Header;
