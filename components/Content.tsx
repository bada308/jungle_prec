interface ContentProps {
    text: string;
}

const Content = ({ text }: ContentProps) => {
    return <span className="font-Pretendard px-3 py-8">{text}</span>;
};

export default Content;
