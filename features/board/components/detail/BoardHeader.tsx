import Title from '@/components/Title';
import UnderlineContainer from '@/components/UnderlineContainer';

interface BoardHeaderProps {
    title: string;
    author: string;
    createdAt: string;
}

const BoardHeader = ({ title, author, createdAt }: BoardHeaderProps) => {
    return (
        <UnderlineContainer>
            <div className="flex flex-col gap-4 p-6">
                <Title>{title}</Title>
                <div className="flex gap-3 items-end">
                    <span className="text-darkGray">{author}</span>
                    <span className="text-gray">{createdAt}</span>
                </div>
            </div>
        </UnderlineContainer>
    );
};

export default BoardHeader;
