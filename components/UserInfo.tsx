interface UserInfoProps {
    username: string;
}

const UserInfo = ({ username }: UserInfoProps) => {
    return (
        <span className="text-darkGray">
            <span className="text-blue">{username}</span>님 반가워요!
        </span>
    );
};

export default UserInfo;
