type Props = {
    icon: React.ReactNode;
    title: string;
    content: React.ReactNode;
};

const FeatureCard: React.FC<Props> = ({ icon, title, content }) => {
    return (
        <div className="flex space-x-3 lg:flex-col lg:space-x-0 lg:space-y-3">
            {icon}
            <div className="flex flex-col space-y-2">
                <h4 className="text-[20px] font-bold leading-[30px] text-[#323539]">
                    {title}
                </h4>
                <p className="tracking-[-1%] text-[#323539]">{content}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
