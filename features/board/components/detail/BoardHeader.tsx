import Title from '@/components/Title';
import UnderlineContainer from '@/components/UnderlineContainer';

const BoardHeader = () => {
    return (
        <UnderlineContainer>
            <div className="flex flex-col gap-4 p-6">
                <Title>뽀야미 초대하는 방법</Title>
                <div className="flex gap-3 items-end">
                    <span className="text-darkGray">너구리</span>
                    <span className="text-gray">2024.06.17</span>
                </div>
            </div>
        </UnderlineContainer>
    );
};

export default BoardHeader;
