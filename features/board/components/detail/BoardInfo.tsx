import Content from '@/components/Content';
import BoardHeader from './BoardHeader';
import UnderlineContainer from '@/components/UnderlineContainer';

interface BoardInfoProps {
    title: string;
    content: string;
    author: string;
    createdAt: string;
}

const BoardInfo = ({ title, content, author, createdAt }: BoardInfoProps) => {
    return (
        <div className="w-full px-12 py-8 flex flex-col items-center gap-6">
            <BoardHeader title={title} author={author} createdAt={createdAt} />
            <UnderlineContainer>
                <Content text={content} />
            </UnderlineContainer>
        </div>
    );
};

export default BoardInfo;
