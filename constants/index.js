import { blog_1, team1, team2, team3, team4, team5, team6, team7, team8, team9, team10, team12, team11, parthdubey, devanshi, akansha, testimonial1, testimonial2, testimonial3, testimonial4, prakash_rawat } from '@/assets';
// importing all the images from assets folder that are being used in testimonial_data

const nav_data = [
    {
        name: 'Home',
        path: '/'
    },

    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Our Units',
        path: '/our-units'
    },
    {
        name: 'Events',
        path: '/events'
    },
    {
        name: 'Blog',
        path: '/blog'
    },
    {
        name: 'Contact',
        path: '/contact'
    },
    {
        name: 'Donate',
        path: '/donate'
    },{
        name: 'Become a Volunteer',
        path: '/volunteer'
    }

]

const blog_data = [
    {
        id: 1,
        title: 'Love the animals: God has given them the rudiments of thought and joy untroubled.',
        content: " After conducting our first drive in the month of May, we headed enthusiastically towards our second drive on June 28 . First of all, we identified the areas with maximum population of stray dogs and cats in the GTB Nagar region.In the hot and humid weather of Delhi, we set up 8 water bowls in different areas to provide clean drinking water for animals. We also supplied them with 4 liters of milk, chapatis, and dog food to meet their nutritional needs. Our efforts included engaging with the local community, promoting animal welfare and rights. The residents greatly supported our work and embraced our guidelines on proper animal care. Overall, the endeavor concluded successfully, achieving our mission to a great extent.As we strolled along the streets of GTB Nagar, we received heartfelt appreciation from the locals for our compassion towards animals in the scorching heat. They also shared valuable suggestions on strategic placements of water and food bowls to reach and help as many dogs as possible. Their encouragement motivated us to work even harder for the welfare of animals. With this being our second drive, the volunteers were much more optimistic and actively participated, bringing chapatis and beautifully designed posters to raise awareness among people. Above all, the strong team spirit and collective effort to make a positive change in humanity filled each of us with a great sense of positivity.",
        imageSrc: "https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/124.jpg?raw=true",
    },

    {
        id: 2,
        title: "A woman's strength lies not only in her ability to endure, but in her determination to thrive and inspire",
        content: "On 8th June, we held a remarkable event at Sheroes Hangout Café, managed by Acid Attack Survivors near Noida Stadium, Sector 21A. During the drive, we recorded a podcast with these brave individuals, where they shared their stories and challenges. Our team explored the café and offered valuable feedback. The participation of members from other units made it an inspiring and uplifting experience for all, and the response received was overwhelmingly positive.On 30th June, at Satyawati College, we organized another enlightening event.Through a social experiment, we assessed college students' awareness of women's safety and the challenges they face.Interacting with them, we asked questions to gauge their understanding of women empowerment and encouraged them to actively promote women's safety. It proved to be an incredible and interactive experience for us.According to students' feedback, there is a pressing need to increase awareness about women empowerment. They emphasized the prevalence of women being exploited in offices, workplaces, and homes, and stressed the importance of reducing such incidents and treating women equally to men. Students also highlighted the significance of family support for women to confidently address exploitation and voice their concerns. They urged against the misuse of women's rights.Overall, the drive provided valuable insights into college students' awareness regarding women empowerment.",
        imageSrc: "https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/blog-2.jpg?raw=true",
    },

    {
        id: 3,
        title: 'Embracing Elders: Spreading Smiles, Sharing Stories',
        content: "Drive in the month of May At Rojavanam Old Age Home, Saket, we shared moments of joy with the elderly through dance and music performances by our unit members.Engaging games like 'guess the movie' were played, and the seniors thoroughly enjoyed it, evident from their reactions and smiles.We also offered thoughtful gifts of bananas, buttermilk, and biscuits, which brought happiness to the residents.Drive in the month of JuneWe organized a donation drive at Human Peace Foundation, Nirman Vihar, providing essential items like biscuits, hand towels, and sandos to support the well- being of the residents.The smiles on their faces while receiving the gifts were priceless!Through these drives, Sampriyata continues to spread happiness and care among the elderly, fostering a sense of togetherness and love in every interaction.In summary, the outcomes of Sampriyata's endeavors have been incredibly fulfilling. The elderly residents conveyed their happiness and appreciation for the companionship and enjoyable activities we provided. Their enthusiastic feedback and longing for our return stand as a testament to the meaningful bonds we have built. Their joy fuels our motivation, and we eagerly anticipate future visits, persistently spreading happiness and making a positive impact in their lives.",
        imageSrc: "https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/blog-3.jpg?raw=true",
    },

    {
        id: 4,
        title: "A child's mind is not a container to be filled but rather a fire to be kindled through right education & knowledge",
        content: "During the month of May, we organized three drives on the 7th, 14th, and 21st at a park near Malkaganj, our designated target location.These drives took place regularly every weekend, allowing us to engage with our students and provide them with sincere and dedicated teaching.To ensure effective teaching for everyone, we divided the students into batches based on their classes and assigned 2-3 volunteers to teach each group.In these drives, we emphasized the development of oral communication skills through speaking sessions, fun activities, games, and interactive sessions.We warmly welcomed new children to join us alongside our regular students, fostering a sense of inclusivity and belonging.Moreover, we took the initiative to interact with the parents of the children, encouraging them to actively support their child's education. We assured them of our commitment to the initiative, which garnered positive responses from both parents and children. As a result, the parents trust our program and regularly send their children to participate in every drive.During the month of June, we conducted drives on the 4th, 11th, and 18th at the same location mentioned earlier.In each drive, we focused on upgrading and monitoring our students' progress by assessing their work and providing revision sessions to improve their retention capabilities. Additionally, we introduced new concepts in their respective subjects and conducted quizzes to encourage interaction among the students and with us",
        imageSrc: "https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/blog-4.jpg?raw=true",
    },

    {
        id: 5,
        title: "Empowering Young Minds: Initiative Sukriti Equips Children to Embrace Life's Challenges",
        content: "The activities were conducted at two schools, Balvantray Mehta Vidya Bhawan in Greater Kailash 3, and Guru Nanak Garib Niwaj Education Society in Greater Kailash 2. The response from the students was overwhelmingly positive.The younger students, full of excitement, eagerly completed the forms with a curious nature that led them to ask numerous questions.They listened attentively to the workshop members' responses and even initiated conversations, sharing their favorite things and displaying a keen interest in learning about others' preferences.Their enthusiasm was evident as they expressed their eagerness for the workshop members to visit again in the future.On the other hand, the senior students showed a certain level of shyness and hesitation when it came to asking questions.Nevertheless, they still filled out the forms with enthusiasm, and after completing them, they engaged in lively discussions with their friends, showing their excitement and enthusiasm for the workshop.Following that, the unit conducted a micro workshop at Kalka Public School, Alaknanda, one of the esteemed school chains in Delhi.During the workshop, a volunteer delivered a presentation on art, with a specific focus on charcoal art painting.The children were truly inspired as the volunteer shared his own art pieces, leaving them amazed and captivated.The students engaged in hushed conversations with their peers, clearly impacted by the presentation.",
        imageSrc: "https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/blog-5.jpg?raw=true",
    },

    {
        id: 6,
        title: 'Breaking the cycle of poverty starts with equipping individuals with the knowledge and skills to make sound financial decisions',
        content: "Our visits and motives On 1st June, our objective was to facilitate the collection of documents from migrant workers for Aadhar Card registration.Throughout the drive, we diligently recorded essential information such as age, date of birth, residence, and phone numbers to support the application process.Additionally, we took the opportunity to engage with the workers on a personal level, aiming to understand the challenges they faced in obtaining their Identification Cards.On 20th June, our primary focus was to efficiently complete the Aadhar Card application process for our target location.To ensure smooth proceedings, we organized the students into smaller groups, dedicated to assisting each worker individually.This approach allowed us to provide clarity on the required procedures and the kind of information they would be asked for during the application.Ultimately, our aim was to ensure that every worker received a Unique Identification number, enabling them to feel as much a part of our nation's citizenry as anyone else.Throughout our drives, we deeply connected with hardworking laborers, understanding their struggles without proper ID Proof.Empowered, our mission was clear: guide them in obtaining essential identification documents.Their remarkable cooperation and unwavering trust motivated our best efforts.Engaging with them, we witnessed their determination to overcome obstacles, grateful to contribute to their growth.",
        imageSrc: "https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/blog-6.jpg?raw=true",
    },

    {
        id: 7,
        title: 'Where Dreams Find Wings, Aroma of Possibilities Prevails.',
        content:  "First drive on 5th MayDuring this captivating drive, we actively engaged with the local community, taking the initiative to comprehend their aspirations and requirements.Through a detailed demonstration, we showcased the step- by - step process of creating incense sticks from discarded flowers, coupled with valuable advice on managing a small - scale business.The response from the community surpassed our expectations, with overwhelming positivity.They not only admired our innovative idea but also displayed a strong interest in witnessing a practical demonstration, which we promptly arranged for subsequent drives.Witnessing people of all age groups enthusiastically eager to learn and seek further guidance was truly heartening.Second Drive in June During our recent drive, we presented a detailed demonstration of the entire process involved in making incense sticks and provided a comprehensive guide on running a small - scale business.We are thrilled to announce that the brand has been officially named 'Sugandhim,' a name suggested by members of the Prayan Foundation.The mission under the brand 'Sugandhim' is to create top - quality incense sticks and blocks crafted with care and skill.The production work primarily involves a collaborative effort with the slum residents, while the dedicated members of the Prayan central team actively manage the brand to ensure its success.",
        imageSrc: "https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/blog-7.jpg?raw=true",
    },

]

const event_data = [
    {
        title: 'Old Age Home Visit',
        description: 'Initiative Sampriyata by Ramjas & JMC Unit has kept scheduled their joint drive in an old age home where they are to conduct several fun activities for elderly people to cherish them and bring their lost playful side out for the possible time being.',
        date: '18-September-23',
        time: '10:00 - 12:00',
        location: 'Nirman Vihar',

    },
    {
        title: 'Old Age Home Visit',
        description: 'Initiative Sampriyata by Ramjas & JMC Unit has kept scheduled their joint drive in an old age home where they are to conduct several fun activities for elderly people to cherish them and bring their lost playful side out for the possible time being.',
        date: '18-September-23',
        time: '10:00 - 12:00',
        location: 'Nirman Vihar',

    },
    {
        title: 'Old Age Home Visit',
        description: 'Initiative Sampriyata by Ramjas & JMC Unit has kept scheduled their joint drive in an old age home where they are to conduct several fun activities for elderly people to cherish them and bring their lost playful side out for the possible time being.',
        date: '18-September-23',
        time: '10:00 - 12:00',
        location: 'Nirman Vihar',

    },
    {
        title: 'Old Age Home Visit',
        description: 'Initiative Sampriyata by Ramjas & JMC Unit has kept scheduled their joint drive in an old age home where they are to conduct several fun activities for elderly people to cherish them and bring their lost playful side out for the possible time being.',
        date: '18-September-23',
        time: '10:00 - 12:00',
        location: 'Nirman Vihar',

    },
    {
        title: 'Old Age Home Visit',
        description: 'Initiative Sampriyata by Ramjas & JMC Unit has kept scheduled their joint drive in an old age home where they are to conduct several fun activities for elderly people to cherish them and bring their lost playful side out for the possible time being.',
        date: '18-September-23',
        time: '10:00 - 12:00',
        location: 'Nirman Vihar',

    },
]

const NGO_about_mission_vision = [
    {
        eventKey: "about",
        title: "About",
        content: "PRAYAN FOUNDATION, a non-governmental organization registered under NITI AAYOG, was founded by a group of motivated undergraduate students led by Mr. Parth Ojha, who is recognized as the recipient of the President of India Award in field of Social Service. Our primary objective is to create the positive change we envision for the world. We strongly believe that a fulfilling life involves serving others, and we carry this belief with love, compassion, and kindness in our hearts every day. Prayan Foundation is committed to realizing the goals of India@75, guided by the esteemed Prime Minister of India. Initially, we launched three central projects—Project Akshaypatra, Project Swashrit, and Project Prakrit—that garnered participation from students across Delhi University. Subsequently, we decentralized our efforts by establishing individual umbrella units in colleges to extend our support to more individuals in need. Our organization has a strong presence in Delhi University, with units in more than 14 prominent colleges. In addition to that, we also have units in 5+ campus across the nation extending & serving our sense of selfless service. With a functional strength of 500+ members, we have a dedicated team of individuals working towards our goals. Alongside our members, we also have a large network of volunteers, with more than 2000 individuals actively contributing to our cause. Together, we strive to make a positive impact in our communities and society."
    },
    {
        eventKey: "mission",
        title: "Mission",
        content: "Prayan Foundation is dedicated for creating a sustainable and inclusive society by promoting women empowerment, generating employment opportunities, ensuring children's welfare, addressing mental health concerns, protecting animal rights, enhancing food security and distribution, raising environmental awareness, advocating for personal hygiene and sanitation, and providing compassionate care for the elderly. Through community engagement and resource mobilization, Prayan Foundation endeavors to create a lasting impact on individuals' lives and society as a whole. Together, we can build a world that values empowerment, compassion, and the well-being of all living beings."
    },
    {
        eventKey: "vision",
        title: "Vision",
        content: "We aim at creation of society where every individual, regardless of age, gender, or background, is empowered, supported, and given the opportunity to lead a fulfilling life.At Prayan Foundation, our vision is to build a world where all individuals, regardless of their background or circumstances, can live in peace, dignity, and prosperity.We are committed to aligning our efforts with the United Nations Sustainable Development Goals(SDGs) and other international conventions alongwith the ideas of Honorable Prime Minister of India@75 to create a lasting impact on a global scale.Our vision encompasses the following key principles: Sustainable Development, Gender Equality and Women's Empowerment, Climate Action and Environmental Stewardship, Prayan Foundation aspires to be a driving force in promoting sustainable development, social justice, and global harmony. Through collaboration with stakeholders, governments, and other NGOs, we seek to create transformative change and a brighter future for generations to come."
    }

]

const testimonialData = [
    {
        name: 'Disha Goel',
        role: 'Member at Akshaypatra',
        imageSrc: 'https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/testimonial-1.jpeg?raw=true',
        text:
            "For me, Prayan is a source of joy and gratefulness through which I feel I make a tiny contribution towards the well-being of society. It is like a family to me where we work together, learn and grow.",
    },
    {
        name: 'Nitish Pandey',
        role: 'Member at Project Swashrit',
        imageSrc: 'https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/testimonial-2.jpeg?raw=true',
        text:
            "I absolutely love this organization! Their unwavering dedication to their mission is inspiring, and the impact they have made is truly remarkable. Their team is committed to making a difference.",
    },
    {
        name: 'Priyam Tiwari',
        role: 'Joint Secretary ZHDC Unit',
        imageSrc: 'https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/testimonial-3.jpg?raw=true',
        text:
            "Prayan, an exceptional organization, with an amazing team and their unwavering commitment to empowering communities in need has been inspiring, and I am grateful to be a part of their meaningful work.",
    },
    {
        name: 'Ananya Gupta',
        role: 'Member Miranda House Unit',
        imageSrc: 'https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/testimonial-4.jpeg?raw=true',
        text:
            "Prayan according to me is an organization which tries its best to make this world a better place for everyone be it humans or animals.",
    },

    // Add more testimonial objects here
];

const Cardsdata = [
    {
        name: 'Parth Ojha',
        role: 'Founder &  President',
        imageSrc: 'https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/team1.png?raw=true',
        linkedin: 'https://www.linkedin.com/in/parth-ojha-a91084227',
        insta: 'https://instagram.com/nexusgtr?igshid=MzRlODBiNWFlZA==',
        gmail: ''
    },
    {
        name: 'Avni Jain',
        role: 'Vice President',
        imageSrc: 'https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/team2.png?raw=true',
        linkedin: 'https://www.linkedin.com/in/avni-jain-34263a211',
        insta: 'https://instagram.com/jnavni29?igshid=OTk0YzhjMDVlZA==',
        gmail: ''
    },
    {
        name: 'Prince Kumar Yadav',
        role: 'General Secretary',
        imageSrc: 'https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/team7.png?raw=true',
        linkedin: '',
        insta: '',
        gmail: ''
    },
    {
        name: 'Samya Jain',
        role: 'Strategic Director',
        imageSrc: 'https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/team4.png?raw=true',
        linkedin: '',
        insta: '',
        gmail: ''
    },
    {
        name: 'Dhruv Vijaywergia',
        role: 'Research and Development Head',
        imageSrc: 'https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/team5.png?raw=true',
        linkedin: '',
        insta: '',
        gmail: ''
    },
    {
        name: 'Chandan Jhanwar',
        role: 'Corporate Head',
        imageSrc: 'https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/team6.png?raw=true',
        linkedin: '',
        insta: '',
        gmail: ''
    },
    {
        name: 'Jhalak Grover',
        role: 'Content Head',
        imageSrc: 'https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/team8.png?raw=true',
        linkedin: '',
        insta: '',
        gmail: ''
    },
    {
        name: 'Akansha Sinha',
        role: 'Human Resources Head',
        imageSrc: 'https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/akansha.jpg?raw=true',
        linkedin: '',
        insta: '',
        gmail: ''
    },
    {
        name: 'Devanshi Bhardwaj',
        role: 'Graphics Head',
        imageSrc: 'https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/devanshi.png?raw=true',
        linkedin: '',
        insta: '',
        gmail: ''
    },
    {
        name: 'Parth Dubey',
        role: 'Project Director Akshaypatra',
        imageSrc: 'https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/parthdubey.jpg?raw=true',
        linkedin: '',
        insta: '',
        gmail: ''
    },
    {
        name: 'Kavitesh Lodhi',
        role: 'Project Director Swashrit',
        imageSrc: 'https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/team11.png?raw=true',
        linkedin: '',
        insta: '',
        gmail: ''
    },
    {
        name: 'Aryan Sapra',
        role: 'Project Director Prakrit',
        imageSrc: 'https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/team12.png?raw=true',
        linkedin: '',
        insta: '',
        gmail: ''
    },


    // Add more testimonial objects here
];

const InitiativeData = [
    {
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/karuna.jpg?raw=true",
        title:"Initiative Karuna",
        description:"'karuna', in Sanskrit means 'Compassion'. Founded on the principles of empathy, and understanding, Initiative Karuna embodies a resolute commitment to improving the lives of animals both great and small. In the spirit of compassion in action, the SGTBK Unit , undertakes direct initiatives to improve the lives of animals. From rescue and rehabilitation to providing shelter and medical care, the organization's dedicated volunteers work on the front lines to alleviate suffering and restore hope. Through their unwavering commitment, they exemplify the transformative power of empathy and kindness. In a world often preoccupied with its own affairs, Initiative Karuna reminds us of our shared responsibility towards all living creatures. They remind us that compassion transcends species barriers and that each of us can make a positive difference, no matter how small and that compassion is a powerful force that can truly change the world, one paw, hoof, or wing at a time.",
    },
    {
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/sahyog.jpg?raw=true",
        title:"Initiative Sahyog",
        description:"'Sahyog' itself translates to 'support' in Hindi, which embodies the core mission of the initiative. Sahyog firmly believes that every individual, regardless of their abilities, deserves equal rights and opportunities to lead a fulfilling life. With this belief at the heart of their work, the initiative strives to empower and create an inclusive society for people with disabilities. Sahyog also seeks to create awareness and advocate for the rights of the disabled community by organizing campaigns, workshops, and training sessions. Sahyog's ultimate vision is to create an inclusive society where people with disabilities are empowered, respected, and provided with equal opportunities to lead independent and meaningful lives. Through their relentless efforts, SPM Unit who has initiated 'Sahyog' aspires to be a beacon of hope and support for the disabled community, striving towards a future where disabilities are not seen as limitations but as mere variations of humanity.",
    },
    {
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/samadhan.jpg?raw=true",
        title:"Initiative Samadhan",
        description:"The initiative Samadhan aims at creating a nurturing environment where individuals can seek solace, support & healing with a commitment to break the stigma surrounding mental health issues . One of the most significant hurdles in addressing mental health issues is the stigma attached to seeking help. Initiative Samadhan is dedicated to erasing this stigma by fostering an inclusive and compassionate community. By promoting conversations around mental health in schools, workplaces, and local communities, they are encouraging everyone to play a part in creating a society that prioritizes mental well-being. In a world where mental well-being is often overshadowed, the MLNC Unit emerges as a guiding light, advocating for the significance of addressing mental health concerns just as earnestly as physical health. Their unwavering dedication to nurturing minds and transforming lives sets them apart as a true force for positive change in the field of mental health",
    },
    {
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/samatva.jpg?raw=true",
        title:"Initiative Samatva",
        description:"Initiative Samatva aims to empower individuals with essential financial knowledge and skills enabling them to make informed decisions about budgeting, saving, and investing. Recognizing that every community has unique needs and challenges, the SVC Unit customizes its programs to address the specific financial concerns of each area. They ensure that participants receive guidance that is relevant and applicable to their circumstances. Samatva's mission is rooted in the belief that everyone, regardless of their background or socioeconomic status, deserves access to fundamental financial education. By promoting sound financial practices, the initiative strives to break the cycle of poverty, promote economic stability, and pave the way for a more prosperous tomorrow.",
    },
    {
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/sukriti.jpg?raw=true",
        title:"Initiative Sukriti",
        description:"Sukriti means the benevolence and that's what this initiative’s approach is towards the social and mental development of children. This initiative aims at fostering smooth development of children with its prime focus on the social and mental well-being of the children with special emphasis over the emotional prosperousness as mental health assumes a prime aspect of an overall well-being of a human in today’s time. The Prayan ZHDC & IPCW came together to begin with small acts of kindness which can make a big change in the society by nurturing young minds and averting them from indulging in inhumane acts and acts of societal harm. The motto of Initiative Sukriti is to channelize the young minds full of passion, grit and freshness in direction of nation building in a way to ensure creation of sustainable future for all",
    },
    {
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/swakarman.jpg?raw=true",
        title:"Initiative Svakarman",
        description:"'svakarman' which means 'self-employment' in Sanskrit, aims at empowering individuals and communities by equipping them with essential resources, knowledge & guidance to create their own pathways to success. The DRC & SRCC Unit believes that every individual possesses unique talents and skills, which, when nurtured and harnessed, can lead to meaningful employment and financial independence. The initiative, recognizes that employment is not merely a source of income, but a means to cultivate skills, enhance personal development, and contribute to the overall growth of society. By fostering a culture of entrepreneurship, skill-building, and job creation, Initiative Svakarman aims to create a sustainable ecosystem that uplifts both individuals and the economy. The Initiative Svakarman is not just about job placement; it's about transforming lives and communities. By enabling individuals to secure dignified employment, the initiative contributes to poverty alleviation, social inclusion, and economic development.",
    },
    {
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/avyanna.jpg?raw=true",
        title:"Initiative Avyanna",
        description:"Initiate Avyanna is a transformative endeavor aimed at empowering women across various walks of life. It's a movement that strives to create a world where every woman has the opportunity to reach her full potential, unburdened by societal limitations or prejudices. Women who were once confined by societal norms have broken free from those chains, becoming entrepreneurs, leaders, and change-makers. From skills development workshops to mentorship programs, the unit tailors its efforts to address the unique challenges faced by women in various contexts. The Satyawati & Maitreyi Unit, don't just impart skills; it ignites a fire within these women, inspiring them to believe in their capabilities and pursue their dreams with unwavering determination.",
    },
    {
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/sampriyata.jpg?raw=true",
        title:"Initiative Sampriyata",
        description:"'To provide care for the people who once cared for us is one of life’s greatest honors.' is what lies at the heart of Initiative Sampriyata. Through our Ramjas & JMC Unit, we strive to give the elderly little joys of life, where they can thrive and feel valued. We provide essential medical care, nutritious meals, and engaging activities to keep them physically and mentally active. Our team of dedicated members ensures that the elderly receive compassionate care and emotional support. We believe in empowering them to lead a fulfilling life and be an active part of society.",
    },
    {
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/sambhav.jpg?raw=true",
        title:"Initiative Samhav",
        description:"'Sambhav' signifies the importance of the possibility in the world full of uncertainties. This initiative emphasizes that in the times where disparities are common, education should be provided to all. Providing basic yet quality education to children is the main agenda under this with primarily targeting the under privileged sections of society. This initiative run by MH & ARSD Unit will be a great leap in the lives of the children who need assistance as the structure of our initiative will help them not just dream big but also help them carve their way upto it. This initiative is a step that will turn the possibility of creation of an ideal nation become the undeniable reality of every citizen witnessing it.",
    },

];
const Ourcabinet=[
    {
        name:"Swarnim Anand",
        role:"ZHDC Unit Head",
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/swarnim.jpg?raw=true",
        insta:"",
        linkedin:"",
        email:""
    },
    {
        name:"Hunnar Kaushal",
        role:"JMC Unit Head",
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/hunnar.jpg?raw=true",
        insta:"",
        linkedin:"",
        email:""
    },
    {
        name:"Tanishk Taluja",
        role:"MLNC Unit Head",
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/tanishq.jpg?raw=true",
        insta:"",
        linkedin:"",
        email:""
    },
    {
        name:"Priyanka Thawani",
        role:"SPM Unit Head",
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/priyanka.jpg?raw=true",
        insta:"",
        linkedin:"",
        email:""
    },
    {
        name:"Abdul Ghani",
        role:"SRCC Unit Head",
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/abdul.jpg?raw=true",
        insta:"",
        linkedin:"",
        email:""
    },
    {
        name:"Snehal Gupta",
        role:"MH Unit Head",
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/sneha.jpg?raw=true",
        insta:"",
        linkedin:"",
        email:""
    },
    {
        name:"Mouli",
        role:"RAMJAS Unit Head",
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/IMG_20231118_130004.jpg?raw=true",
        insta:"",
        linkedin:"",
        email:""
    },
    {
        name:"Jaya",
        role:"MAITREYI Unit Head",
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/jaya.jpg?raw=true",
        insta:"",
        linkedin:"",
        email:""
    },
    {
        name:"Divya",
        role:"IPWC Unit Head",
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/divya.jpg?raw=true",
        insta:"",
        linkedin:"",
        email:""
    },
    {
        name:"Anshika Singh",
        role:"SATYAWATI Unit Head",
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/anshika.jpg?raw=true",
        insta:"",
        linkedin:"",
        email:""
    },
    {
        name:"Jasleen Kaur",
        role:"SGTBKC Unit Head",
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/jasleen.jpg?raw=true",
        insta:"",
        linkedin:"",
        email:""
    },
    {
        name:"Nabilah Qureshi",
        role:"DRC Unit Head",
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/nabilah.jpg?raw=true",
        insta:"",
        linkedin:"",
        email:""
    },
]

const developers_data = [
    {
        name: 'Prakash Singh Rawat',
        image: prakash_rawat,
        role: 'Full Stack Web Developer',
        github: 'https://github.com/PrakashSinghRawat-git',
        linkedin: 'https://www.linkedin.com/in/prakash-singh-rawat-a48b11254',
        portfolio:'https://prakash-rawat.vercel.app/'
    },
   
    {
        name: 'Sahil Sanjay Gaikwad',
        image: "https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/SahilDeveloper.jpeg?raw=true",
        role: 'Full Stack Web Developer',
        github: 'https://github.com/DragoonKing',
        linkedin: 'https://www.linkedin.com/in/sahil-gaikwad-6b8068175/',
        portfolio:'https://sahil-profile.netlify.app/'
    },
   
   
]
const OurInidata=[
    {
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/1.png?raw=true",
        title:"PROJECT AKSHAYPATRA",
        content:"Here we aim at creating awareness of food resources and its conservation through workshops accompanied by food distribution amongst needy."
    },
    {
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/2.png?raw=true",
        title:"PROJECT SWASHRIT",
        content:"This project adresses issues which includes Child Vaccination, Women Health & Hygiene, Awareness related to Sexually Transmitting Diseases(STD) etc."
    },
    {
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/3.png?raw=true",
        title:"PROJECT PRAKRIT",
        content:"Project Prakrit works around environmentalism and sustainability, climate change and environmental degradation to bring out an initiative which is unique and effective through a process of research and development of the same"
    },
    {
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/4.png?raw=true",
        title:"INITIATIVE SUKRITI",
        content:"ZHDC & IPCW Unit jointly envision towards creation of a safe and enriching space for children with their aim centered at Social & Mental Development Of Children"
    },
    {
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/9.png?raw=true",
        title:"INITIATIVE SAMBHAV",
        content:"With the idea of contributing towards implementation of SDG-4 on ground, MH & ARSD Unit works for ensuring quality Children Education."
    },
    {
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/11.png?raw=true",
        title:"INITIATIVE AVYANNA",
        content:"Fostering the idea of bridging ubiquitous gender lacuna in society, Satyawati & Maitreyi Unit work towards Women Empowerment."
    },

    {
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/5.png?raw=true",
        title:"INITIATIVE SVAKARMAN",
        content:"Strenghening the idea of Self-Reliant and Self-Sufficient India under the aegis of 'India@75' Goals, SRCC & DRC Unit come together to nurture micro-entrepreneurship ventures in a direction of generating widescale employment oppurtunities."
    },
    {
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/7.png?raw=true",
        title:"INITIATIVE SAMPRIYATA",
        content:"Ramjas & JMC Unit jointly works for the empowerment of voice of elderly section of society whose needs usually go diminishing in the limelight of active mainstream workforce."
    },
    {
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/8.png?raw=true",
        title:"INITIATIVE KARUNA",
        content:"SGTBK Unit strives to become the voice of those who can't express themselves by working for animal welfare and creation of a animal friendly space in society."
    },
    {
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/6.png?raw=true",
        title:"INITIATIVE SAMATVA",
        content:"SVC Unit addresses the need of globalising hour by awaring people of financial nuances and educating them about the science behind making profitable investments in self-assisted manner."
    },
    {
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/10.png?raw=true",
        title:"INITIATIVE SAMADHAN",
        content:"MLNC Unit derives its working from a famous quote:' Revitalizing minds, transforming lives' which implies the essence of regenerating mental health for a better tomorrow"
    },
    {
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/Screenshot%20(229).png?raw=true",
        title:"INITIATIVE SAHYOG",
        content:"SPM Unit works towards the moral upliftment of diffrently abled people by creating a sense of inclusivity in their conscience as well as conscience of mainstream society through different workshops and demonstration drives under their initiative."
    },
]

const Ourprojects =[
    {
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/akshaypatra.jpg?raw=true",
        title:"PROJECT AKSHAYPATRA",
        content:"The Akshaypatra project is one of the main initiatives of the Prayan Foundation, that aims to promote food security and sustainability. Akshaypatra, which means 'inexhaustible vessel,' embodies the idea of abundance and generosity in Indian culture. The project works towards fulfilling the mission of 'Annadanam Param Daanam,' which means 'The Gift of Food is great to cater.' Akshaypatra is a team of about 20 enthusiastic peolpe along with core members of Prayan Foundation. We collect food from PGs and other sources and distributes it to those who need it most in areas around North Campus like Malka Ganj, Kamla Nagar, Vijay Nagar, near GTB metro station and Vishwavidyalaya metro station, New Delhi. We are targeting the scattered population along road sides in these areas who can't even afford two meals a day. Since January 2023, the foundation has conducted eight successful drives, feeding around 30-40 people each time. We are working towards conducting four food distribution drives each month, as well as increasing our efforts to ensure food security and sustainability.This includes creating awareness about the importance of food security and implementing sustainable practices in food distribution. By providing food to those in need and promoting food security and sustainability, Project Akshaypatra is making a significant difference in the lives of many. It relies on the support of individuals and organizations to continue its work and achieve its goals. Together, we can work towards creating a better, more sustainable future for all."
    },
    {
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/swashrit.jpg?raw=true",
        title:"PROJECT SWASHRIT",
        content:"Proiect Swashrit recognizes the importance of good health as the greatest fortune. With this in mind, the project strives to improve the well-being of individuals through various initiatives such as raising awareness about health, distributing medicines and hygiene products, and conducting workshops on various health related topics. By catering to people of all age groups, Swashrit has impacted over 1000+ lives, donating useful daily essentials such as nail cutters, combs, earthen pots, and refreshments to maintain personal hygiene at old age homes. Swashrit believes that evolution is an inherent part of life, and as such, it is essential to expand one's horizons to adapt to changing times. This is why the organization has taken on several initiatives to raise awareness about critical health issues, including women's hygiene, sexually transmitted diseases (STDs), and mental health. While these areas pose significant challenges, Swashrit is committed to overcoming them and improving the lives of those it serves. The projects commitment to promoting health and well-being is exemplified by its drive to conduct workshops on balanced diets, mental health, and personal hygiene. Additionally, Swashrit has carried out various programs such as COVID-19 vaccinations, blood donations, child vaccinations, and distribution of sanitary pads and warm clothes to help individuals in need.Swashrit recognizes that the essence of good health is constant rejuvenation and renewal of life.To achieve its future vision of creating a society where people not only live healthy lives but also eliminate the hesitation and stigma associated with various social aspects, Swashrit is diligently working towards making a significant contribution to the 'Ayushman Bharat Mission.' This initiative is designed to provide accessible and affordable healthcare to every Indian citizen,regardless of their financial situation. Swashrit's belief is that success and growth are achieved by setting and achieving goals and sing these accomplishments as stepping stones to achieve other objectives. This approach has allowed it to impact the lives of over 1000+ individuals and create a lasting impact on the communities it serves. Through its commitment to promoting health and well-being, Swashrit continues to demonstrate that good health is indeed the greatest fortune."
    },
    {
        imageSrc:"https://github.com/whatsUpWeHere/prayanFoundationwebsiteImages/blob/main/prakrit.jpg?raw=true",
        title:"PROJECT PRAKRIT",
        content:"Project Prakrit works around environmentalism and sustainability, climate change and environmental degradation to bring out an initiative which is unique and effective through a process of research and development of the same"
    },
]
export { nav_data, blog_data, Ourprojects,event_data, NGO_about_mission_vision, testimonialData, Cardsdata, InitiativeData,Ourcabinet , developers_data,OurInidata};
