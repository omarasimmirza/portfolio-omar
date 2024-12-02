const database = "my-mongodb";

// The current database to use.
use(database);

// Create a new collection.
db.createCollection("abouts");
db.createCollection("contacts");
db.createCollection("experiences");
db.createCollection("intros");
db.createCollection("projects");

const aboutsColl = db.getCollection("abouts");
const contactsColl = db.getCollection("contacts");
const expColl = db.getCollection("experiences");
const introsColl = db.getCollection("intros");
const projColl = db.getCollection("projects");

const abouts = [
  {
    lottieURL:
      "https://lottie.host/f6552667-f008-48f7-b0d5-a479b0819c56/xDeoA5eewa.json",
    description1:
      "At a very young age, I was captivated by a film portraying an inventor who simplified his life through automation. This sparked a desire to create solutions that alleviate manual tasks across various industries. My internship at Tübitak solidified my passion for cloud technologies and software development, showcasing the boundless potential for automation through imagination and creativity. I'm particularly excited by the prospect of applying this mindset to the AI sector, empowering users of Camunda’s online services with efficient cloud-managed solutions.",
    description2:
      "I have been working as a Cloud Engineer at Tübitak Bilgem on and off during January 2022 up until October 2023 for a total of 9 Months. I have gained valuable experience in designing, developing, and deploying cloud-native applications. I am proficient in a variety of programming languages, including Python, Java, and JavaScript, and have a strong understanding of cloud computing platforms such as Kubernetes and OpenStack. In my previous role, I was responsible for developing and securing the Safir Cloud IAM service with Multi-Factor Authentication using FastAPI, and I also enhanced the UI for improved user experience using ReactJS.",
    skills: [
      "Spring",
      "Spring-Boot",
      "Angular 12",
      "Next.js",
      "pecan",
      "React",
      "FARM",
      "Django",
      "FastAPI",
      "Java 8 SE",
      "Python 3",
      "TypeScript",
      "Javascript",
      "JSX",
      "HTML 5",
      "CSS",
      "C++",
    ],
  },
];

const experiences = [
  {
    company: "Tübitak",
    title: "Cloud Engineer",
    period: "July 2023 - Oct 2023",
    description: [
      "Developed and secured the Safir Cloud IAM service with Multi-Factor Authentication using FastAPI.",
      "Enhanced UI for improved user experience using ReactJS.",
      "Active contributor to the OpenStack Community.",
      "Fostered strong team relationships, enhancing overall performance.",
    ],
  },
  {
    company: "Tübitak",
    title: "Cloud Engineer",
    period: "Oct 2022 - Jan 2023",
    description: [
      "Managing permissions for users on openstack cloud services.",
      "Using keystone to implement security for services.",
      "Integrating LDAP into keystone.",
    ],
  },
  {
    company: "Tübitak",
    title: "Internship",
    period: "July 2022 - Sep 2022",
    description: [
      "Monitored and stored system usage data for multiple virtual machines using SNMP, Fernet, SQLAlchemy, and Paramiko.",
      "Created a REST API with the Pecan framework.",
      "Implemented the UI for a CRUD app using ReactJS.",
    ],
  },
  {
    company: "Brain Debugger",
    title: "Web Developer",
    period: "Jan 2019 - Nov 2020",
    description: [
      "User Login/Registration, product browsing and search, checkout, and emailing of the final receipt.",
      "Full CRUD operation implementation using Spring Database Templates and MySQL database.",
      "Wrote SQL queries to fetch, visualize/customize data.",
    ],
  },
];

const intros = [
  {
    welcomeText: "Welcome, my name is",
    firstName: "Omar Asim",
    lastName: "Mirza",
    caption: "Software Engineer",
    description:
      "I am a Computer Science graduate with hands-on experience in cloud technologies and software development. I have practical knowledge of Kubernetes, OpenStack, and various programming languages like Java, Python, and Typescript. In my internships at Tübitak Bilgem, I managed cloud services, developed and secured an IAM service, and gained experience with infrastructure monitoring and REST APIs. I also have experience developing a full-stack e-commerce website. I am a Kubernetes Certified Application Developer and am eager to secure a challenging Software Engineering position.",
  },
];

const contacts = [
  {
    name: "Omar Asim Mirza",
    gender: "Male",
    email: "omirza@alumni.sabanciuniv.edu",
    mobile: "+966504648766",
    age: "26",
    address: "Dhahran, Saudi Arabia",
  },
];
const projects = [
  {
    technologies: ["React", "Firebase"],
    title: "Graduation Project",
    image:
      "https://lottie.host/ce99aee9-97ab-4e94-a575-553d5b75aaf9/MHoe2z3Elo.json",
    description: [
      "Developed the frontend of a web application using ReactJS and Material-UI to streamline course registration requests.",
      "Implemented features for submitting, evaluating, and recommending courses using FastAPI",
      "Integrated with the university's CAS authentication system for secure user access.",
    ],
    link: "/",
  },
  {
    technologies: [],
    title: "Algorithm Design and Analysis",
    image:
      "https://lottie.host/0fcfa851-6ff3-48a9-9fce-67f295690a03/EK5jF9MUie.json",
    description: [
      "Studied the independent set problem, which is to find the largest subset of nodes in a graph that are not connected by any edge, as part of an algorithms course project.",
      "Implemented and compared three different algorithms to solve the problem: a brute force algorithm, an approximate/heuristic algorithm, and a self-designed algorithm.",
      "Used various algorithm design techniques, such as dynamic programming, greedy method, and randomization, to improve the efficiency and accuracy of the algorithms.",
      "Analyzed the time and space complexity, correctness, and performance of the algorithms using mathematical proofs, pseudo-code, and experimental tests.",
      "Generated random instances of graphs using Python libraries and measured the running time and output quality of the algorithms on different input sizes.",
      "Wrote a report summarizing the problem description, algorithm description, analysis, implementation, and testing results.",
    ],
    link: "/",
  },
  {
    technologies: [],
    title: "Full-Stack Recipe App",
    image:
      "https://lottie.host/bc0e75da-a71b-484e-adb9-dd8daf866921/eKME36i12F.json",
    description: [
      "Developed a full-stack recipe app for Android using Java, Spring Boot, and MongoDB as part of a personal project.",
      "Implemented the front end using Android SDK and Jetpack Compose, with features such as recipe browsing, searching, and viewing.",
      "Implemented the back-end using Spring Boot and Java, with features such as recipe creation, editing, deletion, and rating.",
      "Used MongoDB as the database to store and retrieve the recipe data in JSON format.",
      "Tested and deployed the app using Firebase hosting and authentication services.",
    ],
    link: "/",
  },
  {
    technologies: [],
    title: "Shill Bidding Detection",
    image:
      "https://lottie.host/815a4a69-f965-47a7-a1f5-83c80436759e/cr15282CKu.json",
    description: [
      "Used Python, Pandas, Google Colab, and machine learning libraries to process and analyze a large dataset of online auction bidders.",
      "Implemented and evaluated various classification models to identify shill bidders based on their bidding behavior and patterns.",
      "Achieved 99% accuracy on the test and validation sets.",
      "Wrote a report explaining the data preprocessing, feature engineering, model selection, and performance metrics.",
    ],
    link: "/",
  },
  {
    technologies: [],
    title: "Data Analysis",
    image:
      "https://lottie.host/31665839-725e-46fd-9b24-5d373d0069b1/R6sOMPdXb1.json",
    description: [
      "Collected and analyzed data from 200 Turkish universities using Excel.",
      "Created a report and a presentation on the trends and patterns of student scores, quotas, majors, and enrollments.",
      "Defended a thesis on the growth of CS as a major in Turkey based on data visualization and statistical analysis.",
      "Coordinated weekly meetings with the instructor and the team members.",
    ],
    link: "/",
  },
  {
    technologies: ["React", "Firebase"],
    title: "Turkish Football Federation",
    image:
      "https://lottie.host/ce2811e9-e7ba-4c13-8c22-fc9245615bad/QhPs1UGUpA.json",
    description: [
      "Developed a full-stack website using React and Firebase for the Turkish Football Federation to manage the league's financial tasks.",
      "Implemented features such as player trading, late fees, financial reports, budget planning, and contract management.",
      "Designed and integrated user interfaces for different types of users: team managers, federation representatives, and players.",
      "Tested and deployed the website using Firebase hosting and authentication services.",
    ],
    link: "/",
  },
];

expColl.insertMany(experiences);
projColl.insertMany(projects);
aboutsColl.insertMany(abouts);
introsColl.insertMany(intros);
contactsColl.insertMany(contacts);