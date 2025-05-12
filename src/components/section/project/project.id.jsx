import { useTranslation } from "react-i18next";
import { SiApplemusic, SiChatbot } from "react-icons/si";
import chatbot1 from "../../../assets/jpg/chatbot1.jpg"
import chatbot2 from "../../../assets/jpg/chatbot2.jpg"
import chatbot3 from "../../../assets/jpg/chatbot3.jpg"
import { FaSquareGithub } from "react-icons/fa6";
import { CiViewList } from "react-icons/ci";
import { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { MdPreview } from "react-icons/md";
import { LuNotebookPen } from "react-icons/lu";
import { FaBook } from "react-icons/fa6";

const ProjectId = (props) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [previewAvailable, setPreviewAvailable] = useState(false);
    const images = [chatbot1, chatbot2, chatbot3];

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
        setPreviewAvailable(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setPreviewAvailable(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };
    const [input, setInput] = useState("");
    return (
        <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-10">
            <div className="flex flex-col justify-center border-2 border-[#EC4899] rounded-2xl p-4">
                <div className="flex items-center gap-5">
                    {props.id === "1" && <SiChatbot className="text-5xl text-[#169FFF]" />}
                    {props.id === "2" && < FaBook className="text-5xl text-[#FFD682]" />}
                    {props.id === "3" && <SiApplemusic className="text-5xl text-[#E04F5F]" />}
                    <h2 className="text-lg font-bold text-center">{t(`project.project${props.id}.title`)}</h2>
                    <span className="italic">{t(`project.project${props.id}.time`)}</span>
                </div>
                <div className="grid grid-cols-[1fr_3fr] max-sm:grid-cols-1 gap-2 p-5">
                    <span className="font-bold underline text-[#EC4899]">{t('project.techtitle')}</span>
                    <span>{t(`project.project${props.id}.tech`)}</span>
                    <span className="font-bold underline text-[#EC4899]">{t('project.teamsizetitle')}</span>
                    <span>{t(`project.project${props.id}.teamsize`)}</span>
                    <span className="font-bold underline text-[#EC4899]">{t('project.roletitle')}</span>
                    <span>{t(`project.project${props.id}.role`)}</span>
                    <span className="font-bold underline text-[#EC4899]">{t('project.descriptiontitle')}</span>
                    <span>{t(`project.project${props.id}.description`)}</span>
                </div>
            </div>
            <div className="px-8 max-sm:p-0 flex flex-col gap-6">
                <div className="space-x-4">
                    {!previewAvailable ? (
                        <div className="flex gap-3 max-[821px]:flex-col max-[821px]:w-[50%]">
                            <div className="flex bg-blue-500 p-2 items-center cursor-pointer rounded-2xl" onClick={() => openModal(0)} >
                                <MdPreview className="text-2xl" />
                                <button
                                    className="p-2 font-bold max-sm:text-sm cursor-pointer"
                                >
                                    {t('project.preview')}
                                </button>
                            </div>
                            <div className="flex bg-blue-500 p-2 items-center cursor-pointer rounded-2xl" onClick={() => openModal(0)} >
                                <FaSquareGithub className="text-2xl" />
                                <button
                                    className="p-2 font-bold max-sm:text-sm cursor-pointer"
                                >
                                    Github
                                </button>
                            </div>
                            <div className="flex bg-blue-500 p-2 items-center cursor-pointer rounded-2xl" onClick={() => openModal(0)} >
                                <CiViewList className="text-2xl" />
                                <button
                                    className="p-2 font-bold max-sm:text-sm cursor-pointer"
                                >
                                    {t('project.demo')}
                                </button>
                            </div>
                        </div>

                    ) : (
                        <div className="flex">
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Thumbnail ${index}`}
                                    className="w-20 h-20 object-cover cursor-pointer hidden"
                                    onClick={() => openModal(index)}
                                />
                            ))}
                        </div>
                    )}

                    {/* Modal */}
                    {isOpen && (
                        <div
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
                            className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50"
                            onClick={closeModal}
                        >
                            <div
                                className="relative w-3/4 max-w-4xl bg-white border-2"
                                onClick={(e) => e.stopPropagation()}
                            >

                                {/* Mũi tên trái */}
                                <button
                                    className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 text-white text-5xl cursor-pointer"
                                    onClick={prevImage}
                                >
                                    <FaChevronCircleLeft />
                                </button>

                                {/* Ảnh preview */}
                                <img
                                    src={images[currentImageIndex]}
                                    alt="Preview"
                                    className="w-full h-auto object-contain"
                                />

                                {/* Mũi tên phải */}
                                <button
                                    className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 text-white text-5xl cursor-pointer"
                                    onClick={nextImage}
                                >
                                    <FaChevronCircleRight />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center gap-3 p-4">
                        <LuNotebookPen className="text-2xl" />
                        <h2 className="font-bold">{t(`project.comment${props.id}`)}</h2>
                    </div>
                    <textarea value={input} onChange={(e) => setInput(e.target.value)} className="w-full h-30 p-3 border-2 rounded-2xl font-mono resize-none"></textarea>
                    <div className="p-3">
                        <button onClick={() => setInput("")} className={`text-left py-2 px-3 font-bold bg-[#1F1F1F] text-[#fff] rounded-sm cursor-pointer hover:opacity-50`}>{t('project.send')}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProjectId;