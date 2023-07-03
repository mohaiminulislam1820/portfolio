/* eslint-disable react/prop-types */



const Project = ({ project }) => {
    const { name, description, technologies, live_link, github_link, img } = project;
    return (
        <div className="border rounded-xl shadow-md relative pb-20 bg-white text-[var(--primary)]">
            <div className="min-w-[280px] h-[300px] overflow-hidden relative border-b-2 rounded-t-xl">
                <img src={img} alt="website snapshot" className="w-full h-full object-cover object-top hover:object-bottom transition-all duration-[3600ms] ease-linear" />
            </div>

            <div className="p-6 gap-y-2 flex flex-col text-slate-600 ">

                <p> <span className="font-bold">Name:</span> {name}</p>
                <p><span className="font-bold">Description:</span> {description}</p>
                <p><span className="font-bold">Technologies:</span> {technologies.join(', ')}</p>
                <div className="bottom-8 absolute flex gap-6">
                    <a href={live_link} className="px-6 py-2 font-bold rounded-lg bg-[var(--tertiary)] text-white" target="_blank" rel="noreferrer">Live Site</a>
                    <a href={github_link} className="px-6 py-2 font-bold rounded-lg bg-[var(--tertiary)] text-white" target="_blank" rel="noreferrer">GitHub</a>
                </div>

            </div>

        </div>
    );
};

export default Project;