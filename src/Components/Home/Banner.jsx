import { useContext } from "react";
import { DarkModeContext } from "../../App";


const Banner = () => {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <section className="w-10/12 mx-auto min-h-[calc(100vh-150px)] grid grid-cols-1 lg:grid-cols-2 items-center mb-16">
            <div className="">
                <h2 className="text-5xl lg:text-6xl mb-2 pt-10 ">Hello!</h2>
                <h3 className="text-4xl lg:text-5xl mb-1">I&apos;m <span className="font-bold">Md Mohaiminul Islam</span></h3>
                <h4 className="text-xl mb-6">Front-End Developer</h4>

                <a href="/Md_Mohaiminul_Islam_Resume.pdf" download className={darkMode ? "px-6 py-3 rounded-lg bg-[var(--secondary)] text-[var(--primary)] font-bold" : "px-6 py-3 rounded-lg font-bold bg-[var(--tertiary)] text-[var(--secondary)]"}>Download Resume</a>

                <div className="mt-6 flex gap-4">
                    <a href="https://www.linkedin.com/in/mohaiminul-islam-pran/" target="_blank" rel="noreferrer">
                        <svg fill="black" className="w-12 border-2 shadow-sm p-2 rounded-md bg-white" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_801_"> <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"></path> <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"></path> <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"></path> </g> </g></svg>
                    </a>
                    <a href="https://github.com/mohaiminulislam1820" target="_blank" rel="noreferrer">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 border-2 shadow-sm p-1 rounded-md bg-white" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M13.4142 3.82843C12.6332 3.04738 11.3668 3.04738 10.5858 3.82843L9.91421 4.5L11.482 6.06774C11.6472 6.02356 11.8208 6 12 6C13.1046 6 14 6.89543 14 8C14 8.17916 13.9764 8.35282 13.9323 8.51804L15.982 10.5677C16.1472 10.5236 16.3208 10.5 16.5 10.5C17.6046 10.5 18.5 11.3954 18.5 12.5C18.5 13.6046 17.6046 14.5 16.5 14.5C15.3954 14.5 14.5 13.6046 14.5 12.5C14.5 12.3208 14.5236 12.1472 14.5677 11.982L13 10.4142V15.2676C13.5978 15.6134 14 16.2597 14 17C14 18.1046 13.1046 19 12 19C10.8954 19 10 18.1046 10 17C10 16.2597 10.4022 15.6134 11 15.2676V9.73244C10.4022 9.38663 10 8.74028 10 8C10 7.82084 10.0236 7.64718 10.0677 7.48196L8.5 5.91421L3.82843 10.5858C3.04738 11.3668 3.04738 12.6332 3.82843 13.4142L10.5858 20.1716C11.3668 20.9526 12.6332 20.9526 13.4142 20.1716L20.1716 13.4142C20.9526 12.6332 20.9526 11.3668 20.1716 10.5858L13.4142 3.82843ZM9.17157 2.41421C10.7337 0.852115 13.2663 0.852119 14.8284 2.41422L21.5858 9.17157C23.1479 10.7337 23.1479 13.2663 21.5858 14.8284L14.8284 21.5858C13.2663 23.1479 10.7337 23.1479 9.17157 21.5858L2.41421 14.8284C0.852115 13.2663 0.852119 10.7337 2.41422 9.17157L9.17157 2.41421Z" fill="#000000"></path> </g></svg>
                    </a>
                </div>

            </div>

            <div>  <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_bdeb0ep9.json" mode="bounce"
                background="transparent" style={{ "width": "100%", "height": "100%" }} speed=".7" loop autoplay></lottie-player></div>
        </section>
    );
};

export default Banner;