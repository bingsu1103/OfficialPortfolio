const CodePreView = () => {
    return (
        <div className="m-auto text-sm w-[80%] border-2 border-[#C689FF] rounded-lg bg-[var(--background-hero-right)] #1A1A1A">
            <div className="border-t border-t-[var(--border-top-hero-right)] border-r-0 border-b-0 border-l-0"></div>
            <div className="border-b-2 flex items-center gap-2 px-[30px] h-[50px] border-[#C689FF] border-t-0 border-l-0 border-r-0">
                <div className="h-3 w-3 rounded-full bg-[var(--text-red-500)]"></div>
                <div className="h-3 w-3 rounded-full bg-[var(--text-yellow-500)]"></div>
                <div className="h-3 w-3 rounded-full bg-[var(--text-green-500)]"></div>
            </div>
            <div className="px-[30px] pt-[30px] pb-[40px] bg-[#0D1224]">
                <code className="text-[var(--text-white-0)]">
                    <div>
                        <span className="mr-2 text-[var(--text-pink-100)]">const</span>
                        <span className="mr-2 text-[#DBDBAA]">developer</span>
                        <span className="mr-2 text-[var(--text-pink-100)]">=</span>
                        <span className="text-[#fff]">{'{'}</span>
                    </div>
                    <div>
                        <span className="ml-6 mr-2 text-[#fff]">name:</span>
                        <span className="text-[var(--text-yellow-500)]">{`'Gia An',`}</span>
                    </div>
                    <div>
                        <span className="ml-6 mr-2 text-[#fff]">role:</span>
                        <span className="text-[var(--text-yellow-500)]">{`'Front-end Developer',`}</span>
                    </div>
                    <div className="ml-6 mr-2 text-[#169FFF]">
                        <span className="text-[var(--text-white-0)]">skills:</span>
                        <span>{`['`}</span>
                        <span>React</span>
                        <span>{`', '`}</span>
                        <span>NodeJS</span>
                        <span>{`', '`}</span>
                        <span>Express</span>
                        <span>{`', '`}</span>
                        <span>SQL</span>
                        <span>{`', '`}</span>
                        <span>TypeScript</span>
                        <span>{`', ...]`}</span>
                    </div>
                    <div>
                        <span className="ml-6 mr-2">hardWorker:</span>
                        <span className="text-[var(--text-red-500)]">true</span>,
                    </div>
                    <div>
                        <span className="ml-6 mr-2">quickLearner:</span>
                        <span className="text-[var(--text-red-500)]">true</span>,
                    </div>
                    <div>
                        <span className="ml-6 mr-2">problemSolver:</span>
                        <span className="text-[var(--text-red-500)]">true</span>,
                    </div>
                    <div>
                        <span className="ml-6 mr-2 text-[var(--text-green-700)]">isHireable:</span>
                        <span className="text-[var(--text-red-500)]">function</span>
                        <span>{'() {'}</span>
                    </div>
                    <div>
                        <span className="ml-12 mr-2 text-[var(--text-red-500)]">return</span>
                        <span>{`(`}</span>
                    </div>
                    <div>
                        <span className="ml-16 pl-3 text-[var(--text-blue-100)]">this.</span>
                        <span className="mr-2">hardWorker</span>
                        <span className="text-[var(--text-blue-100)]">&amp;&amp;</span>
                    </div>
                    <div>
                        <span className="ml-16 pl-3 text-[var(--text-blue-100)]">this.</span>
                        <span className="mr-2">problemSolver</span>
                        <span className="text-[var(--text-blue-100)]">&amp;&amp;</span>
                    </div>
                    <div>
                        <span className="ml-16 pl-3 text-[var(--text-blue-100)]">this.</span>
                        <span className="mr-2">skills.length</span>
                        <span className="mr-2 text-[var(--text-blue-100)]">&gt;=</span>
                        <span className="text-[var(--text-red-500)]">5</span>
                    </div>
                    <div>
                        <span className="ml-12 mr-2">{`);`}</span>
                    </div>
                    <div>
                        <span className="ml-6">{`};`}</span>
                    </div>
                    <div>
                        <span>{`};`}</span>
                    </div>
                </code>
            </div>
        </div>
    );
};

export default CodePreView;