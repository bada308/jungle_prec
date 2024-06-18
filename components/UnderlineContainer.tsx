interface UnderlineContainerProps extends React.PropsWithChildren<{}> {}

const UnderlineContainer = ({ children }: UnderlineContainerProps) => {
    return <div className="border-b border-gray w-fit h-fit px-3 py-6">{children}</div>;
};

export default UnderlineContainer;
