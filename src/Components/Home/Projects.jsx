import Project from "./Project";


const Projects = () => {
    const projects = [{
        "id": 1,
        "img": "https://i.ibb.co/fF4VS64/122346-harlem-heartstrings-web-app-1.webp",
        "name": "Harlem Heartstrings",
        "live_link": "https://harlem-heartstrings.web.app",
        "github_link": "https://github.com/mohaiminulislam1820/harlem-heartstrings",
        "technologies": [
            "React",
            "Tailwind CSS",
            "Firebase authentication",
            "Express.js",
            "JWT",
            "MongoDB",
            "Stripe payment"
        ],
        "description": "An online platform offering violin classes by top instructors to students. It provides features such as user registration and login, role-based dashboards, admin dashboard for class management, instructor submission review, user role control, payment system integration, booking classes, and updating available seats."
    },
    {
        "id": 2,
        "img": "https://i.ibb.co/cF5hg5Y/6-2023-165417-toynirvana-18-web-app-1.webp",
        "name": "Toy Nirvana",
        "live_link": "https://toynirvana-18.web.app",
        "github_link": "https://github.com/mohaiminulislam1820/toy-nirvana",
        "technologies": [
            "React",
            "Tailwind CSS",
            "Firebase authentication",
            "Express.js",
            "MongoDB"
        ],
        "description": "An online toy marketplace where users can see and manage their toy collections. It provides features such as user authentication, private routes, CRUD functionality for toy management, searching and sorting functionality, and ensures a seamless user experience."
    },
    {
        "id": 3,
        "img":"https://i.ibb.co/DWCBvjC/6-2023-17240-chow-eateries-web-app-1.webp",
        "name": "Chow Eateries",
        "live_link": "https://chow-eateries.web.app",
        "github_link": "https://github.com/mohaiminulislam1820/chow-eateries",
        "technologies": [
            "React",
            "Tailwind CSS",
            "Firebase authentication",
            "Express.js"
        ],
        "description": "A responsive React app for exploring recipes from top chefs. It provides features such as user authentication, favorite recipes functionality, a blog page with a downloadable PDF, a list of top chefs in Indonesia, chef profiles, recipe exploration."
    }

    ]
    return (
        <section id="projects" className="w-10/12 mx-auto">
            <h1 className="font-bold text-5xl text-center mb-16">Projects</h1>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                {projects.map(project => <Project key={project.id} project={project} />)}
            </div>
        </section>
    );
};

export default Projects;