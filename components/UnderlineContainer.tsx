interface UnderlineContainerProps extends React.PropsWithChildren<{}> {}

const UnderlineContainer = ({ children }: UnderlineContainerProps) => {
    return <div className="border-b-[1.5px] border-gray w-full h-fit">{children}</div>;
};

export default UnderlineContainer;
