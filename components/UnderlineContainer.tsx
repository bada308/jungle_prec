interface UnderlineContainerProps extends React.PropsWithChildren<{}> {}

const UnderlineContainer = ({ children }: UnderlineContainerProps) => {
    return <div className="border-b-2 border-lightGray w-full h-fit">{children}</div>;
};

export default UnderlineContainer;
