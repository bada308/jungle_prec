interface HeaderProps extends React.PropsWithChildren<{}> {}

const Header = ({ children }: HeaderProps) => {
    return (
        <div className="w-full h-20 border-b border-lightGray flex justify-between items-center px-10 fixed top-0 bg-white">
            {children}
        </div>
    );
};

export default Header;
