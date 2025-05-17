import { useTranslation } from "react-i18next";

const SQLCode = () => {
    const { t } = useTranslation();
    return (
        <div className="sql-card w-[30%] max-sm:w-[100%] max-[821px]:w-[50%] p-4 bg-[#1F1F1F]">
            <span className="sql-keyword">SELECT</span> S.NAME <span className="sql-keyword">AS</span> SKILL_NAME<br />
            <span className="sql-keyword">FROM</span> USER U<br />
            <span className="sql-keyword">JOIN</span> SKILL S <span className="sql-keyword">ON</span> U.ID = S.USER_ID<br />
            <span className="sql-keyword">WHERE</span> U.NAME = <span className="sql-string">"{t('introduce.name')}"</span>;
        </div>
    );
}

export default SQLCode;