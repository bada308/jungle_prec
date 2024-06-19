interface ContentProps {
    text: string;
}

const Content = ({ text }: ContentProps) => {
    return <pre className="font-Pretendard px-3 pt-8 pb-12 w-full text-wrap">{text}</pre>;
};

export default Content;
