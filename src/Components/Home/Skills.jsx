

const Skills = () => {
    const skills = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Express',
        'MongoDB',
        'Git',
        'Responsive Web Design'];

    return (
        <section id="skills" className="mb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-5xl font-bold text-center mb-12">Skills</h2>
                <div className="grid grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="p-4 border rounded-md shadow-sm flex items-center bg-white text-black"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 12h14M12 5l7 7-7 7"
                                />
                            </svg>
                            <span>{skill}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
