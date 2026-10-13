const ditCourseSubjects = [
  { title: "Introduction to Information & Communication Technologies (ICT)", nav: "Introduction to ICT", slug: "ict", part: "Part I", icon: "⌘", summary: "Build an understanding of information and communication technologies and their role in everyday computing." },
  { title: "Introduction to MS Office", nav: "MS Office", slug: "ms-office", part: "Part I", icon: "▦", summary: "Develop practical familiarity with office applications and digital productivity." },
  { title: "Computer Networks", nav: "Computer Networks", slug: "computer-networks", part: "Part I", icon: "⌁", summary: "Explore the foundations of computer networks, connectivity, and communication." },
  { title: "Operating Systems", nav: "Operating Systems", slug: "operating-systems", part: "Part I", icon: "▣", summary: "Learn the purpose of operating systems and how they support computer use." },
  { title: "Introduction to Programming", nav: "Introduction to Programming", slug: "programming", part: "Part I", icon: "⌨", summary: "Start learning computational thinking and the foundations of writing programs." },
  { title: "Database Systems", nav: "Database Systems", slug: "database-systems", part: "Part II", icon: "▤", summary: "Get introduced to structured information and the role of database systems." },
  { title: "Video Editing", nav: "Video Editing", slug: "video-editing", part: "Part II", icon: "▷", summary: "Explore the creative workflow for editing and preparing video content." },
  { title: "Web Development Essentials", nav: "Web Development Essentials", slug: "web-development", part: "Part II", icon: "〈/〉", summary: "Discover the building blocks of websites and modern web development." },
  { title: "Graphics Design", nav: "Graphics Design", slug: "graphics-design", part: "Part II", icon: "◇", summary: "Explore graphic design principles and digital visual communication." },
  { title: "Capstone Project", nav: "Capstone Project", slug: "capstone-project", part: "Part II", icon: "✳", summary: "Plan an integrated practical project to bring your DIT learning together." }
];

const ictModules = [
  {
    title: "Introduction to Computers",
    weeks: 3,
    hours: 18,
    introduction: "Understand what a computer does, how its parts work together, and why computers are used across everyday life and industry.",
    lessons: [
      {
        title: "History and evolution of computers",
        text: "Computing developed over centuries from physical counting aids to programmable, networked electronic systems. Each stage addressed a limitation of earlier tools: speed of calculation, accuracy, repeatability, storage, or the ability to reuse instructions. Computer-generation labels are a useful teaching framework based mainly on dominant hardware technology; the dates overlap, and historians do not use one universally exact boundary for every generation.",
        points: ["A computer accepts input, processes it according to instructions, stores data, and produces output.", "Important ideas accumulated over time: representing numbers mechanically, automating repeated calculation, storing instructions, and making machines smaller and more reliable.", "Modern computing includes desktop and mobile devices, cloud services, embedded controllers, and high-performance systems."]
      },
      {
        title: "Hardware components",
        text: "Hardware is the physical equipment of a computer system. Components cooperate: input devices capture data, the system unit processes it, storage keeps it, communication devices transfer it, and output devices present the results.",
        points: ["Input devices: keyboard, mouse, scanner, microphone, camera, and touch screen.", "Output devices: monitor, printer, speakers, headphones, and projector.", "System unit: the case and internal components such as the motherboard, processor, memory, storage, and power supply.", "Storage devices keep files and programs, while communication devices and network adapters connect computers and networks."]
      },
      {
        title: "Computer software",
        text: "Software is the set of instructions that tells hardware what to do. System software runs and manages the computer; application software helps people complete tasks such as writing, accounting, communication, or editing media. A program must be compatible with the device and operating system.",
        points: ["Install software only from trusted sources, check system requirements, and read the installer prompts before accepting optional changes.", "Run a program from its installed shortcut or application menu; save work in a known folder and close the program normally.", "Software development usually includes understanding a problem, planning a solution, writing instructions, testing, correcting errors, documenting, and maintaining the program."]
      },
      {
        title: "Types of computers",
        text: "Computer types are often distinguished by their size, purpose, portability, and number of users. The categories overlap: a phone is a mobile computer and may also control embedded systems.",
        points: ["Personal computers include desktop computers and portable laptops.", "Mobile computing devices include smartphones and tablets.", "Embedded computers control a dedicated device, such as an appliance, vehicle, or industrial machine.", "Game consoles are designed primarily for interactive entertainment.", "Servers provide services or resources to other computers; thin clients rely on a server for much of their processing.", "Mainframes handle large-scale, reliable transaction workloads; supercomputers solve highly demanding scientific and engineering problems."]
      },
      {
        title: "Computer applications",
        text: "Computers support people and organizations by processing information, automating repeated work, communicating, and helping make decisions.",
        points: ["Education: research, lessons, learning management, and digital practice.", "Finance and government: records, transactions, public services, and reporting.", "Health care and science: patient records, diagnostic support, research, and data analysis.", "Publishing and travel: content production, reservations, and planning.", "Manufacturing: design, inventory, process control, and quality checks."]
      }
    ],
    practice: "Identify the input, processing, storage, output, and communication parts of a computer you use. Make a table of five computer types and one real-world use for each."
  },
  {
    title: "System Unit Components",
    weeks: 3,
    hours: 18,
    introduction: "Learn the purpose of the motherboard, processor, memory, expansion options, ports, and power supply inside a computer.",
    lessons: [
      {
        title: "Motherboard",
        text: "The motherboard is the main circuit board. It provides connections and communication pathways for the processor, memory, storage, expansion cards, and external ports. Component compatibility depends on the motherboard's form factor, socket, supported memory, and available connectors."
      },
      {
        title: "Processor: control unit, ALU, machine cycle, and clock",
        text: "The central processing unit (CPU) executes program instructions. Its control unit coordinates instruction handling and data movement; its arithmetic logic unit (ALU) performs arithmetic and logical comparisons. During the machine cycle, the processor fetches an instruction, decodes it, executes it, and stores or writes back the result. The system clock provides timing signals; clock speed is only one factor in performance, alongside core count, architecture, cache, memory, and workload.",
        points: ["Compare processors by generation, supported socket and memory, core/thread count, cache, power requirements, and intended workload.", "Do not assume a higher clock number alone guarantees a faster computer; compare results for the tasks the system must perform."]
      },
      {
        title: "Memory: bits, bytes, addressing, and types",
        text: "A bit is a binary 0 or 1; a byte is typically eight bits. Storage capacity is expressed in bytes and larger units. Memory locations are addressed so the processor can find instructions and data.",
        points: ["RAM is fast, temporary working memory; its contents normally disappear when power is removed.", "ROM refers to non-volatile memory traditionally used for firmware; modern firmware is commonly stored in rewritable flash memory.", "Cache is small, very fast memory that helps the processor access frequently used data.", "Flash memory retains data without power and is used in SSDs, USB drives, and memory cards.", "CMOS is a traditional name associated with motherboard settings and a small battery-backed memory/clock function; modern implementations vary."]
      },
      {
        title: "Expansion slots, adapter cards, and drive bays",
        text: "Expansion slots allow compatible cards to add or improve capabilities, such as graphics, sound, or network connectivity. Drive bays and mounting points hold storage devices. Check the system's size, interface, power, and compatibility before selecting parts."
      },
      {
        title: "Ports and connectors",
        text: "Ports connect external devices and carry data, video, audio, or network traffic. The connector shape and supported standard both matter; two physically similar connectors may not support the same speed or features.",
        points: ["USB connects many peripherals and can carry data and power.", "VGA is an older analog video connection; HDMI carries digital video and audio.", "Audio jacks connect microphones, headphones, and speakers.", "Ethernet/network ports provide wired network connectivity.", "FireWire is an older interface found on some legacy equipment."]
      },
      {
        title: "Power supply",
        text: "The power supply converts mains electricity into the regulated voltages required by internal components. Its capacity, connectors, efficiency, and physical size must suit the system. A damaged or incorrectly connected power supply can cause equipment damage or injury."
      }
    ],
    practice: "With the computer switched off and unplugged, identify the motherboard, CPU cooler, memory, storage, power supply, expansion slots, and ports from labels or a supervised demonstration. Never open a power supply or touch internal parts while equipment is connected to power."
  },
  {
    title: "Input and Output Devices",
    weeks: 2,
    hours: 12,
    introduction: "Recognize the devices people use to enter data and commands and the devices that communicate computer results.",
    lessons: [
      {
        title: "What is input?",
        text: "Input is data or a command supplied to a computer for processing. Good input devices make it easier to enter text, point, capture images or sound, control games, or verify identity."
      },
      {
        title: "Keyboards and pointing devices",
        text: "A keyboard enters letters, numbers, symbols, and commands. Pointing devices control the on-screen pointer or select objects.",
        points: ["A mouse detects movement and button actions; a touchpad is a common laptop pointing surface.", "A joystick gives directional control, especially in games and simulations.", "A trackball moves the pointer by rotating a ball while the device remains stationary.", "Use correct posture and gentle key and mouse actions to reduce strain."]
      },
      {
        title: "Touch screens, pens, and styluses",
        text: "Touch screens accept direct interaction with displayed controls. A digital pen or stylus can provide more precise selection, drawing, or handwriting when supported by the device. Keep screens clean with manufacturer-approved methods and avoid sharp objects."
      },
      {
        title: "Other input methods",
        text: "Different tasks call for different forms of input.",
        points: ["Game controllers provide buttons, triggers, and directional input.", "Digital cameras capture images and video.", "Voice input uses a microphone and speech-recognition software.", "Scanners convert paper documents or images into digital files.", "Biometric devices measure characteristics such as fingerprints for identity checks.", "Terminals provide a dedicated interface for entering or retrieving information."]
      },
      {
        title: "What is output?",
        text: "Output is information produced by a computer after processing. It may be visual, printed, audio, or projected. Choose an output device based on the audience, quality, accessibility, and cost requirements."
      },
      {
        title: "Display devices",
        text: "CRT monitors use a cathode-ray tube and are bulky legacy displays. LCD displays use liquid-crystal panels; LED commonly describes the backlighting used by many LCD screens. Evaluate a display by size, resolution, brightness, refresh rate, connection, and viewing comfort."
      },
      {
        title: "Printers",
        text: "Impact printers physically strike a ribbon or paper; non-impact printers do not. Inkjet printers spray liquid ink and suit varied color printing. Laser printers use toner and are often efficient for higher-volume text. Multifunction printers combine printing with scanning or copying. Thermal printers use heat-sensitive media and are common for receipts and labels. Plotters and large-format printers produce oversized technical or visual output."
      },
      {
        title: "Other output devices",
        text: "Speakers and headphones provide audio output. Multimedia projectors enlarge a display for a group. Interactive whiteboards combine projected content with touch or pen input. Check volume, accessibility, connection, and room requirements before use."
      }
    ],
    practice: "Connect a keyboard, mouse, display, and printer using the correct ports. Open a document, print one test page only with permission, and identify which devices are input, output, or both."
  },
  {
    title: "Digital Storage",
    weeks: 2,
    hours: 12,
    introduction: "Compare common storage technologies and select a safe, suitable place for files and backups.",
    lessons: [
      {
        title: "Hard disk drives",
        text: "A hard disk drive (HDD) stores data magnetically on rotating platters. It offers persistent storage and is often available at a lower cost per capacity than an SSD, but it has moving parts and can be more vulnerable to shock.",
        points: ["Internal drives are installed in a computer; external drives connect through an external interface.", "RAID combines multiple drives for performance, availability, or both depending on its configuration; RAID is not a substitute for a separate backup.", "Network-attached storage (NAS) makes shared storage available over a network. Protect access with accounts, updates, and backups."]
      },
      {
        title: "Flash storage",
        text: "Flash storage retains data without moving mechanical parts. SSDs provide fast access for operating systems and applications. Memory cards and USB flash drives are portable, but small and easily lost; safely eject removable media and keep another copy of important work. ExpressCard modules are a legacy expansion format."
      },
      {
        title: "Optical storage",
        text: "CDs, DVDs, and Blu-ray discs use laser-readable optical media and differ in capacity and supported formats. Discs can be useful for distribution or archives, but may be scratched and require a compatible optical drive."
      },
      {
        title: "Magnetic tape",
        text: "Magnetic tape provides sequential-access storage and is used in some large backup and archive systems. It can offer economical long-term storage at scale, but retrieving a particular file can take longer than with disk storage."
      },
      {
        title: "Cloud storage",
        text: "Cloud storage keeps files on provider-managed servers and makes them available over the Internet. It supports synchronization and sharing, but requires a trusted provider, secure account, network access, and careful sharing permissions. Review privacy and retention settings before uploading sensitive information."
      },
      {
        title: "Choosing storage and protecting files",
        text: "Match a storage choice to capacity, speed, portability, durability, cost, and recovery needs. Keep more than one copy of important files, store a backup separately from the original, and periodically verify that the backup can be restored."
      }
    ],
    practice: "Create a clearly named practice folder, save a file locally, copy it to approved removable or cloud storage, then open the copied version. Do not format or erase a drive unless the instructor has confirmed the target and backup."
  },
  {
    title: "System Software",
    weeks: 3,
    hours: 18,
    introduction: "Learn how the operating system manages the computer and practice safe file, device, update, and maintenance workflows.",
    lessons: [
      {
        title: "Operating systems and their functions",
        text: "An operating system (OS) is system software that provides a working environment between people, applications, and hardware. It starts the computer and coordinates its resources.",
        points: ["Start-up and shutdown: loads the operating system and closes services safely.", "User interface: provides graphical or command-based ways to work.", "Program and memory management: starts applications and allocates working memory.", "Task coordination: schedules work and shares processor time.", "Device configuration: communicates with peripherals through drivers and settings.", "Internet and network functions: support connections, shared resources, and network controls.", "Performance and file management: provide monitoring, folders, search, and common utilities.", "Updates and security: apply fixes, manage permissions, and help protect the system."]
      },
      {
        title: "Operating-system types",
        text: "A stand-alone OS runs on an individual computer; a server OS provides services to networked users or devices; an embedded OS runs within a dedicated device. Windows and Linux are examples of operating-system families. Select software that is compatible with the installed OS and supported by its vendor."
      },
      {
        title: "Utility programs",
        text: "Utilities help maintain, inspect, protect, or manage a computer. Common examples include file managers, search tools, uninstallers, image viewers, disk cleanup, backup and restore tools, screen savers, firewalls, antivirus and other malware-removal tools, compression utilities, media players, and disc-burning software.",
        points: ["Use disk cleanup to remove only files identified as safe to remove.", "Use backup and restore tools to protect important data and test recovery.", "Disk defragmentation is intended for suitable hard disk drives; do not manually defragment SSDs unless the operating system's own tool explicitly manages optimization.", "Use a firewall and reputable, updated security software; avoid running several competing real-time antivirus products."]
      },
      {
        title: "Personal computer maintenance",
        text: "Good maintenance combines physical care, reliable backups, updates, account security, and careful troubleshooting.",
        points: ["Keep vents unobstructed and the work area clean; power down and unplug before external cleaning.", "Install operating-system and application updates from trusted sources.", "Back up important files and periodically confirm they can be restored.", "Use strong unique passwords, a screen lock, and standard user accounts for routine work.", "Record symptoms and recent changes before troubleshooting; make one safe change at a time."]
      }
    ],
    practice: "Use the file manager to create folders and copy, move, rename, search for, and delete a disposable practice file. Restore it from the recycle bin, review Task Manager, check for updates, and describe the purpose of each step."
  },
  {
    title: "Application Software",
    weeks: 3,
    hours: 18,
    introduction: "Select, use, and organize application software for personal, educational, and business tasks.",
    lessons: [
      {
        title: "The need and role of application software",
        text: "Application software helps users perform a defined task, such as preparing a report, calculating a budget, keeping records, communicating, or editing media. Choose an application by task fit, compatibility, accessibility, support, privacy, licensing, and cost."
      },
      {
        title: "Working with application software",
        text: "A typical workflow is to confirm requirements, obtain the program from a trusted source, install it with appropriate permissions, learn its interface, create or import a file, save in an appropriate format, export or share carefully, and close the application. Keep working files organized and use clear file names."
      },
      {
        title: "Business and productivity software",
        text: "Organizations use different applications to create information, perform calculations, communicate, and manage work.",
        points: ["Word processors create and format letters, reports, and other documents.", "Spreadsheets organize data, calculate values with formulas, and summarize results.", "Database software organizes related records for structured entry, search, and reporting.", "Presentation software communicates ideas using slides and visual material.", "Project-management software helps plan tasks, dates, and responsibilities.", "Personal information managers organize calendars, contacts, and tasks.", "Smartphone business apps support mobile productivity; accounting applications track financial transactions and reports."]
      },
      {
        title: "Graphics and multimedia software",
        text: "Creative tools support the design, editing, and publication of visual, audio, and video material.",
        points: ["Computer-aided design (CAD) supports technical drawing and design.", "Desktop publishing arranges text and images for publication.", "Paint and image-editing software creates or modifies raster/vector artwork and photographs.", "Audio and video editors arrange and refine recorded media.", "Multimedia authoring combines media and interaction into a presentation or learning product.", "Web-page authoring tools help create and maintain website content."]
      },
      {
        title: "Web applications",
        text: "A web application is accessed through a web browser and may store information on a remote service. It can reduce local installation needs and support collaboration, but users should check the address, account permissions, privacy terms, and network requirements before entering information."
      },
      {
        title: "Typing assistance software",
        text: "Typing tutors provide structured practice in accuracy, key placement, and speed. Start slowly with correct posture and home-row technique; prioritize accuracy before increasing speed. Practice regularly and take short breaks."
      }
    ],
    practice: "Prepare a one-page report in a word processor, a small expense table in a spreadsheet, and a three-slide presentation using the same fictional school event. Save each file in a named folder and choose descriptive file names."
  },
  {
    title: "The Internet and the World Wide Web",
    weeks: 4,
    hours: 24,
    introduction: "Understand the Internet, use the web and online services, recognize e-commerce, and make safer choices online.",
    lessons: [
      {
        title: "Networks, Internet access, and data travel",
        text: "A network connects devices so they can exchange data or share resources. The Internet is a global network of interconnected networks. Home and campus access may use fiber, DSL, cable, cellular, or other technologies through an Internet service provider (ISP).",
        points: ["Data is divided into addressed packets and forwarded through networks; the route and timing can vary.", "IP addresses identify network endpoints; domain names provide human-readable names that DNS can resolve.", "Routers connect networks, switches connect devices within a local network, and wireless access points provide Wi-Fi access.", "Use the access method and account authorized by the institution or service provider."]
      },
      {
        title: "The World Wide Web",
        text: "The web is a service that runs over the Internet. A browser requests web resources from servers and displays pages. A URL identifies a resource and commonly includes a scheme such as HTTPS, a domain, and an optional path.",
        points: ["Navigate using links, browser controls, tabs, and bookmarks; check the address before signing in.", "Search with clear keywords, exact phrases where useful, and filters; compare multiple credible sources and check author, date, evidence, and purpose.", "Websites may be informational, educational, commercial, governmental, social, or interactive.", "Web publishing involves planning content, creating pages, checking usability and accessibility, publishing to a hosting service, and maintaining content."]
      },
      {
        title: "E-commerce",
        text: "E-commerce is the buying and selling of goods or services using electronic networks. It can connect businesses and consumers, businesses with other businesses, or individuals with buyers. Online ordering may involve product discovery, payment or cash on delivery, fulfillment, delivery, customer service, and returns.",
        points: ["Before buying, verify the seller, product details, total cost, delivery terms, return policy, and secure payment options.", "For a seller, accurate descriptions, transparent prices, safe handling of customer information, and responsive service build trust.", "Avoid sending payment credentials or one-time codes to someone who contacts you unexpectedly."]
      },
      {
        title: "Other Internet services",
        text: "Internet services support communication and file exchange in different ways.",
        points: ["Email sends messages and attachments; verify recipients and treat unexpected attachments cautiously.", "Instant messaging supports quick text and media exchanges.", "Voice over Internet Protocol (VoIP) carries voice calls over IP networks.", "FTP is a file-transfer protocol; use secure, authorized transfer methods for sensitive files.", "Video conferencing supports live remote meetings; check microphone, camera, meeting links, and sharing permissions.", "Social media enables publishing and interaction; review privacy settings and think carefully before posting."]
      },
      {
        title: "Computer security and malware",
        text: "Malware is software intended to harm, disrupt, spy on, or gain unauthorized access to systems or data. Viruses attach to files and spread when they run; worms spread across systems or networks; Trojan horses disguise harmful behavior as legitimate software. Other threats include spyware, ransomware, and fraudulent messages.",
        points: ["Keep operating systems, browsers, and applications updated.", "Use reputable security software and a firewall; download software only from trusted sources.", "Treat unexpected links, attachments, pop-ups, and requests for passwords or one-time codes as suspicious.", "Use unique passwords and multi-factor authentication where available.", "Back up important files so a clean copy is available if data is lost or encrypted."]
      },
      {
        title: "Information privacy",
        text: "Personal information includes details that identify or describe a person. Share only what is necessary, use privacy settings, review app permissions, and check that a site is legitimate before submitting forms. A padlock/HTTPS protects a connection in transit but does not prove that a seller or page is trustworthy."
      },
      {
        title: "Computer ethics and cybercrime",
        text: "Computer ethics means using technology honestly, respectfully, and within the law. Respect copyright, privacy, institutional rules, and other people's accounts and data. Cybercrime includes unauthorized access, fraud, identity misuse, harassment, and theft of digital information. Do not attempt to access systems without permission; report suspected incidents to a trusted teacher or responsible authority."
      },
      {
        title: "Health concerns of computer use",
        text: "Long or poorly arranged computer sessions may contribute to eye strain, discomfort, repetitive strain, or sedentary habits. Use a comfortable chair and neutral posture, position the display to reduce glare, keep wrists relaxed, vary tasks, take regular movement and eye breaks, and ask for ergonomic or accessibility adjustments when needed."
      }
    ],
    practice: "Connect to an authorized network, identify the router/access point and ISP role, visit a trusted educational website, search for a topic, and compare two sources. Draft a sample email without private data and identify the warning signs in a mock suspicious message."
  }
];

const ictComputerHistory = [
  ["Ancient era", "Abacus", "A manually operated counting frame for representing quantities and performing arithmetic. It is not an electronic computer, but it demonstrates how external tools can support calculation."],
  ["1614", "Napier's bones and logarithms", "John Napier described logarithms and created numbered rods that helped users multiply and divide by reducing the work to simpler operations."],
  ["1620s", "Slide rule", "William Oughtred's slide rule used logarithmic scales for approximate multiplication, division, and other calculations. Engineers and scientists used slide rules widely before electronic calculators."],
  ["1642", "Pascaline", "Blaise Pascal built a geared mechanical adding and subtracting machine to help with tax calculations. Carrying between digit wheels made it an important early calculator design."],
  ["1670s", "Leibniz's stepped reckoner", "Gottfried Wilhelm Leibniz designed a mechanical calculator intended to add, subtract, multiply, and divide. Its stepped-drum mechanism influenced later calculator mechanisms."],
  ["1801", "Jacquard loom", "Joseph-Marie Jacquard's loom used punched cards to control weaving patterns. The cards showed how instructions could be encoded and reused to control a machine."],
  ["1820s", "Difference Engine", "Charles Babbage designed the Difference Engine to calculate and print mathematical tables mechanically, reducing errors made by hand."],
  ["1830s", "Analytical Engine", "Babbage proposed a general-purpose mechanical design with a store for numbers, a mill for arithmetic, input using punched cards, and operations controlled by instructions. It was not completed in his lifetime, but its design introduced ideas resembling memory, a processor, input, and programming."],
  ["1840s", "Ada Lovelace's notes", "Ada Lovelace published detailed notes on the Analytical Engine, including a method for calculating Bernoulli numbers. Her explanation considered that a programmable machine could manipulate symbols as well as numbers."],
  ["1890", "Hollerith punched-card tabulator", "Herman Hollerith's electromechanical tabulating equipment read punched cards to process census information more quickly than manual tabulation. The business that grew from this work later became part of IBM."],
  ["1930s–1940s", "Programmable and electromechanical machines", "Several teams developed relay-based or early electronic calculating machines. Designs such as Zuse's machines and Harvard Mark I automated lengthy calculations, though their speed and capabilities differed from later electronic computers."],
  ["1940s", "Colossus", "Built in Britain during the Second World War for specialized codebreaking work, Colossus was an electronic, programmable digital machine. Its wartime role remained secret for many years, so it was not a general commercial computer."],
  ["1940s", "ENIAC", "The Electronic Numerical Integrator and Computer was a large, general-purpose electronic digital computer. Its early programming involved configuring switches and cables; it demonstrated the speed of electronic calculation but used many vacuum tubes and substantial power."],
  ["1940s–1950s", "Stored-program concept and EDVAC", "The stored-program approach keeps instructions and data in memory so a machine can change tasks by loading a program rather than rewiring its hardware. EDVAC was an early design associated with this approach, which became fundamental to most general-purpose computers."],
  ["1951", "UNIVAC I", "UNIVAC I was among the first commercially produced computers in the United States. It showed that electronic computers could be used for business and government information processing as well as scientific calculation."],
  ["First generation · approximately 1940s–mid-1950s", "Vacuum tubes", "Vacuum tubes switched electronic signals. Machines were very large, generated substantial heat, consumed considerable power, and required frequent maintenance. Input often used punched cards or paper tape; output could be printed or stored on magnetic media."],
  ["Second generation · approximately mid-1950s–mid-1960s", "Transistors", "Transistors replaced many vacuum tubes, reducing size, heat, and power use while improving reliability. Magnetic-core memory and magnetic tape or disks became common; assembly language and high-level languages such as FORTRAN and COBOL supported more practical programming."],
  ["Third generation · approximately mid-1960s–early-1970s", "Integrated circuits", "Integrated circuits placed multiple electronic components on a small semiconductor chip. Computers became more compact and dependable; operating systems, multiprogramming, terminals, and families of compatible machines helped broaden business and institutional use."],
  ["Fourth generation · from the 1970s onward", "Microprocessors and personal computers", "Large-scale integration put a processor on one or a few chips. Microcomputers and personal computers became affordable and widespread; graphical interfaces, local networks, portable computers, and later the Internet made computing part of everyday work and communication."],
  ["Fifth generation · a common textbook label from the 1980s onward", "AI, parallel processing, and natural-language goals", "This label is often used for research and systems emphasizing artificial intelligence, knowledge-based methods, parallel processing, and natural-language interaction. It is not a clean replacement for the fourth generation: modern computers still rely on microprocessors and integrated circuits, while AI runs across many kinds of hardware."],
  ["Today", "Mobile, cloud, embedded, and accelerated computing", "Smartphones, servers, cloud platforms, graphics processors, and small embedded controllers combine earlier advances. Current trends include machine learning, specialized accelerators, energy-efficient systems, and research into quantum computing; quantum machines are specialized and are not replacements for ordinary PCs."]
];

const ictPracticalLabs = [
  {
    title: "Identify computer hardware",
    steps: ["Shut down the computer and disconnect external power before opening the case; work only under instructor supervision.", "Use a diagram or supervised demonstration to identify the processor and cooler, RAM, storage, motherboard, expansion slots, power supply, and ports.", "Record each component's purpose and one safety precaution. Do not open the power supply."]
  },
  {
    title: "Install, remove, and troubleshoot hardware",
    steps: ["Review the part and computer manuals and confirm compatibility before touching hardware.", "Power down, unplug, and use the lab's electrostatic-discharge precautions; install or remove only instructor-approved components.", "Reconnect and test one change at a time, then record the symptom, action, and result. Never work inside a powered computer or open a power supply."]
  },
  {
    title: "Connect external devices",
    steps: ["Identify the correct port and cable for a display, keyboard, mouse, printer, or scanner; power devices off first when required by their manuals.", "Connect one device, start it, and check the operating system's device settings and the manufacturer's approved driver.", "Disconnect safely and store cables without bending or pulling on the connector."]
  },
  {
    title: "Explore Windows, settings, and accounts",
    steps: ["Identify desktop icons, the Start menu, taskbar, windows, menus, and notification area.", "Create a desktop shortcut to an approved application and remove only the shortcut when finished.", "Use Control Panel or Settings to inspect display, devices, and updates; review user account types with the instructor.", "Change only settings and account details authorized for the lab; do not create accounts on a shared computer without permission."]
  },
  {
    title: "Organize files and practice command-line basics",
    steps: ["Create a practice folder and subfolder using clear names; create, save, copy, move, rename, and delete a disposable practice file.", "Restore the practice file from Recycle Bin and compare common file extensions such as `.txt`, `.pdf`, and `.jpg`.", "Open Command Prompt and safely try navigation/listing commands such as `cd` and `dir` in the practice folder.", "Do not run unfamiliar commands, commands that delete data, or commands requiring administrator access."]
  },
  {
    title: "Inspect system information and maintenance tools",
    steps: ["Open the system information/settings page and record the OS edition, processor, installed memory, and storage capacity.", "Open Task Manager and identify running applications and basic CPU, memory, disk, and network usage.", "Review disk cleanup, backup, and restore utilities with the instructor.", "Disk formatting erases data: demonstrate only on an explicitly designated disposable drive after confirming the target and instructor approval. Use the operating system's optimization tool; do not manually defragment an SSD."]
  },
  {
    title: "Install and configure Windows in a training environment",
    steps: ["Use only an instructor-provided virtual machine or designated lab computer; never reinstall the OS on a shared or personal computer without explicit permission.", "Follow the approved installation media and setup checklist, selecting the assigned language, edition, disk, and account settings.", "After setup, check device drivers, network connection, updates, and security settings, then document the configuration."]
  },
  {
    title: "Install, run, and remove applications",
    steps: ["Confirm the application is approved, compatible, and available from its official or institution-approved source.", "Review the publisher, requested permissions, and installer options; install a typing tutor or other approved application only with authorization.", "Launch the program and confirm it works; review its update method and close it normally.", "If instructed, uninstall it using the operating system's normal Apps/Programs settings and verify the result."]
  },
  {
    title: "Printer and scanner setup and troubleshooting",
    steps: ["Check power, connection, selected printer, paper size, and queue before printing a single test page with permission.", "For a paper jam, follow the device's instructions and remove paper gently from the accessible path; do not force parts.", "Replace toner or ink only with instructor permission and according to the printer manual; avoid touching hot or sensitive internal parts.", "Connect a scanner, use its approved software to scan a non-sensitive test page, and save it in the practice folder."]
  },
  {
    title: "Connect to a local network",
    steps: ["Identify a modem, router, switch, wireless access point, and Ethernet cable in a supervised network diagram or lab.", "Connect only to the authorized LAN or Wi-Fi and confirm the assigned connection status.", "Observe how permitted shared resources are accessed; do not probe, scan, or attempt to enter devices or networks without authorization."]
  },
  {
    title: "Use browsers, search, email, and video meetings",
    steps: ["Install or open an approved browser and check that the address bar shows the intended website before interacting.", "Search the web and use a search engine's advanced filters or exact-phrase search; compare source, author, date, and supporting evidence.", "Use a training email account to compose, address, send, receive, and reply to a test message with no private data.", "Join an instructor-approved video conference, test microphone and camera, and share only the assigned window or file."]
  },
  {
    title: "Antivirus, compression, and removable media",
    steps: ["Update the approved security application and scan a teacher-provided safe sample or practice folder; never download malware for a test.", "Select non-sensitive practice files and create a ZIP archive using the built-in operating-system tool; extract it to a new folder and verify the files.", "Practice disc burning only if the lab has a writable drive and instructor-approved blank media; verify files and avoid recording confidential information.", "Use the safe-eject option before removing USB drives or memory cards."]
  }
];

function renderIctNotes(courseUrl) {
  const moduleNavigation = ictModules.map((module, index) =>
    `<a href="#ict-module-${index + 1}"><span>${String(index + 1).padStart(2, "0")}</span>${module.title}</a>`
  ).join("") + `<a href="#ict-computer-history"><span>HIST</span>Computer history timeline</a><a href="#dit-extended-notes-ict"><span>MORE</span>Extended ICT foundations</a>`;
  const modules = ictModules.map((module, index) => `
    <details class="ict-module" id="ict-module-${index + 1}" ${index === 0 ? "open" : ""}>
      <summary><span class="ict-module-number">MODULE ${String(index + 1).padStart(2, "0")}</span><span class="ict-module-title">${module.title}</span><span class="ict-module-meta">${module.weeks} weeks · ${module.hours} hours</span></summary>
      <div class="ict-module-content">
        <p class="ict-module-intro">${module.introduction}</p>
        ${module.lessons.map((lesson) => `<section class="ict-lesson"${lesson.title === "History and evolution of computers" ? ` id="ict-computer-history"` : ""}><h3>${lesson.title}</h3><p>${lesson.text}</p>${lesson.points ? `<ul>${lesson.points.map((point) => `<li>${point}</li>`).join("")}</ul>` : ""}${lesson.title === "History and evolution of computers" ? `<h4 class="ict-timeline-heading">From counting tools to modern computing</h4><div class="web-table-wrap ict-history-table-wrap"><table class="web-reference-table ict-history-table"><thead><tr><th scope="col">Period</th><th scope="col">Milestone</th><th scope="col">What changed and why it matters</th></tr></thead><tbody>${ictComputerHistory.map(([period, milestone, explanation]) => `<tr><th scope="row">${period}</th><td><strong>${milestone}</strong></td><td>${explanation}</td></tr>`).join("")}</tbody></table></div><p class="ict-history-note">The first through fifth generation labels are a simplified teaching convention. Technologies overlap: a modern AI service may still run on fourth-generation microprocessors, while parallel processing and AI research began well before today's systems.</p>` : ""}</section>`).join("")}
        <div class="ict-practice"><strong>Practice task</strong><p>${module.practice}</p></div>
      </div>
    </details>
  `).join("");
  const labs = ictPracticalLabs.map((lab, index) => `
    <details class="ict-lab">
      <summary><span>${String(index + 1).padStart(2, "0")}</span>${lab.title}</summary>
      <ol>${lab.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
    </details>
  `).join("");

  return `<section class="ict-notes-layout dit-page-width" aria-label="ICT course notes">
    <aside class="ict-notes-nav">
      <div class="ict-notes-nav-label">COURSE CONTENTS</div>
      <nav aria-label="ICT modules">${moduleNavigation}<a href="#ict-practical-labs"><span>LAB</span>Practical lab guide</a><a href="#ict-learning-links"><span>LINK</span>Learning links</a></nav>
      <a class="ict-notes-back" href="${courseUrl}">← All DIT subjects</a>
    </aside>
    <div class="ict-notes-main">
      <section class="ict-learning-outcomes">
        <div class="dit-eyebrow">HOW TO USE THESE NOTES</div>
        <h2>Learn it, try it, explain it.</h2>
        <p>Work through the seven curriculum modules in order. Read each lesson, complete its practice task, and perform the lab activities only on approved equipment and with your instructor's permission.</p>
        <div class="ict-outcome-grid"><div><strong>01</strong><span>Use essential computer vocabulary accurately.</span></div><div><strong>02</strong><span>Identify common computer components and devices.</span></div><div><strong>03</strong><span>Manage files, software, and basic maintenance safely.</span></div><div><strong>04</strong><span>Use the Internet and online services responsibly.</span></div></div>
        <p class="ict-curriculum-note">Aligned to the KP BT&CE DIT Curriculum Revised 2022: Part I · 20 weeks · 120 contact hours (40 theory, 80 practical).</p>
      </section>
      <section class="ict-module-list" aria-label="ICT learning modules">${modules}</section>
      ${renderSupplementaryNotes("ict")}
      <section class="ict-labs-section" id="ict-practical-labs">
        <div class="dit-eyebrow">HANDS-ON LEARNING</div><h2>Practical lab guide</h2>
        <p class="ict-section-intro">Use a supervised lab computer and follow local safety and account rules. These guided exercises cover the practical skills listed in the DIT curriculum.</p>
        <div class="ict-lab-list">${labs}</div>
      </section>
      <section class="ict-links-section" id="ict-learning-links">
        <div class="dit-eyebrow">CONTINUE LEARNING</div><h2>Trusted learning links</h2>
        <p class="ict-section-intro">External websites open in a new tab. Review the publisher and page before sharing information or downloading software.</p>
        <div class="ict-resource-grid">
          <a href="https://edu.gcfglobal.org/en/computerbasics/" target="_blank" rel="noopener noreferrer"><strong>GCFGlobal · Computer Basics</strong><span>Beginner-friendly lessons on computer basics, operating systems, files, and the Internet.</span><b>Open resource ↗</b></a>
          <a href="https://support.microsoft.com/windows" target="_blank" rel="noopener noreferrer"><strong>Microsoft Support · Windows</strong><span>Official help for Windows settings, files, updates, devices, and troubleshooting.</span><b>Open resource ↗</b></a>
          <a href="https://www.cisa.gov/secure-our-world" target="_blank" rel="noopener noreferrer"><strong>CISA · Secure Our World</strong><span>Practical guidance for safer accounts, recognizing phishing, and protecting devices.</span><b>Open resource ↗</b></a>
          <a href="https://beinternetawesome.withgoogle.com/en_us/" target="_blank" rel="noopener noreferrer"><strong>Google · Be Internet Awesome</strong><span>Interactive activities and guidance for thoughtful, safer online behavior.</span><b>Open resource ↗</b></a>
        </div>
        <p class="ict-reference-note"><strong>Curriculum reference:</strong> Shelly, G. B., &amp; Vermaat, M. E., <em>Discovering Computers: Fundamentals</em> (Cengage Learning), as listed in the KP BT&amp;CE curriculum. Use your institute's current edition and instructor guidance.</p>
      </section>
    </div>
  </section>`;
}

const msOfficeModules = [
  {
    title: "Office Automation and the Office 2016 Interface",
    weeks: 1,
    hours: 6,
    introduction: "Understand office automation, compare software licensing approaches, and find your way around Word, Excel, PowerPoint, and Access.",
    lessons: [
      {
        title: "Office automation and software types",
        text: "Office automation uses computer applications to create, calculate, present, organize, and communicate information. Open-source software makes its source code available under a license that permits specified use and modification. Proprietary software is controlled by its publisher and governed by its license. Neither label alone guarantees quality: check the license, support, compatibility, privacy, and the task you need to complete.",
        points: ["Use software only under its license and your institution's rules.", "Save files in suitable formats and consider whether recipients can open them."]
      },
      {
        title: "The Microsoft Office suite",
        text: "The curriculum uses Microsoft Office 2016. Word is designed for documents, Excel for spreadsheets and analysis, PowerPoint for presentations, and Access for relational databases. Their shared interface concepts make it easier to learn more than one application."
      },
      {
        title: "The primary user interface",
        text: "The title bar identifies the application and current file. The Quick Access Toolbar holds frequently used commands. The Ribbon organizes commands into tabs and groups. The document or worksheet is the main work area; the status bar provides contextual information such as page, word, or zoom status.",
        points: ["Select a Ribbon tab to display related command groups.", "A dialog-box launcher opens more detailed settings for a group.", "The File tab opens Backstage options such as New, Open, Save, Print, and Export.", "Zoom changes the on-screen view, not the actual size of printed content."]
      },
      {
        title: "A reliable file workflow",
        text: "Create or open the correct file, save it in a clearly named folder, work in small steps, save regularly, and export or print only after checking the result. Use descriptive file names with a date or version when needed. Keep editable originals as well as PDFs when a fixed-layout copy is required."
      }
    ],
    practice: "Open Word, Excel, PowerPoint, or Access in the lab. Identify the title bar, Quick Access Toolbar, File tab, Ribbon, work area, and status bar, then create and save a small practice file."
  },
  {
    title: "Microsoft Word",
    weeks: 4,
    hours: 24,
    introduction: "Create clear English or Urdu documents, format text and paragraphs, manage page layout, build tables, and prepare documents for printing or sharing.",
    lessons: [
      {
        title: "Word processors and the Word workspace",
        text: "A word processor supports creating, editing, formatting, reviewing, and printing text documents. Word's document page is the editable work area; the Ribbon contains commands, while the status bar and view controls show page and display information. Use Print Layout to judge pages and other views when they help with editing."
      },
      {
        title: "Create, open, save, and share documents",
        text: "Use File > New or the Quick Access Toolbar to start a blank document or select a template. Use Save for an existing file and Save As to choose a new name, folder, or format. Word's editable format is DOCX; PDF is useful when recipients need a consistent page layout.",
        points: ["Before sharing, use Print Preview to inspect page breaks, margins, and missing content.", "Use Find to locate text and Replace to make repeated corrections; review replacements before saving.", "AutoCorrect can fix common typing patterns, but check names and specialized terms.", "Cut removes selected content for moving; Copy leaves the original; Paste inserts the clipboard content.", "Templates provide a starting layout; replace sample text and check the document's styles and metadata."]
      },
      {
        title: "Character formatting and styles",
        text: "The Font group changes typeface, size, emphasis, color, and attributes such as superscript or subscript. Character spacing settings adjust the distance between letters. Format Painter copies formatting from one selection to another; Clear Formatting removes direct formatting. Styles apply coordinated formatting and make long documents easier to navigate.",
        points: ["Use readable fonts and consistent sizes; reserve decorative WordArt for short headings.", "Apply a heading style rather than merely enlarging text when a section is a real heading.", "Use the Font dialog's Advanced options for character spacing when the layout genuinely requires it."]
      },
      {
        title: "Paragraph formatting, indents, and lists",
        text: "Paragraph settings control alignment, indents, line spacing, and space before or after a paragraph. A first-line indent moves only the first line; a hanging indent leaves the first line at the margin and indents the remaining lines. Left and right indents move the paragraph edges inward.",
        points: ["Use paragraph spacing instead of repeated blank lines for consistent document layout.", "Bullets suit items without a required order; numbering suits steps or ranked items.", "Use the list-level controls to create nested sublists, not manually typed spaces."]
      },
      {
        title: "Page layout, breaks, and printing",
        text: "The Layout/Page Layout tab controls margins, orientation, paper size, and columns. A page break starts content on a new page; a section break divides a document into sections so those sections can use different layouts, headers, or numbering. Select an available printer and inspect the print range, copies, paper, and orientation in Backstage Print.",
        points: ["Use section breaks intentionally; they can affect headers, footers, and page numbering.", "Check that the selected printer and paper size match the document.", "Use Print Preview before printing multiple copies."]
      },
      {
        title: "Create and format tables",
        text: "Insert a table by choosing its row and column count or entering dimensions in the Insert Table dialog. Add headings and data, then use Table Layout tools to resize rows and columns, apply AutoFit, merge cells for a suitable heading, or split cells when one cell needs subdivision.",
        points: ["Keep table headings meaningful and data types consistent within a column.", "Use AutoFit to fit content or page width, then inspect the printed result.", "Avoid using merged cells where they make sorting or accessibility confusing."]
      },
      {
        title: "Set up Urdu typing",
        text: "Add an Urdu keyboard through Windows language and keyboard settings, then switch input languages from the taskbar or the configured keyboard shortcut. On older systems, follow the institute's approved guidance for a phonetic keyboard or Pak-Urdu installer. Use a Unicode-compatible Urdu font such as Noto Nastaliq Urdu or an installed Urdu typeface; legacy font workflows may not transfer correctly between computers.",
        points: ["Set paragraph direction to right-to-left when writing Urdu.", "Test a short document on the target computer and verify shaping, punctuation, and PDF export.", "Download language packs and keyboard tools only from trusted, approved sources."]
      },
      {
        title: "Proofread and prepare a professional document",
        text: "Use spelling and grammar tools as aids, not as a substitute for proofreading. Check names, dates, numbers, headings, table alignment, page breaks, and print readability. Save the editable DOCX and make a PDF copy when a fixed-layout version is needed."
      }
    ],
    practice: "Create a two-page institute event notice from a template. Add a heading, formatted paragraphs, a numbered schedule, a 3-column by 5-row table, and a footer; then save a DOCX and export a checked PDF."
  },
  {
    title: "Microsoft Excel",
    weeks: 9,
    hours: 54,
    introduction: "Build structured workbooks, use formulas and functions, summarize information, create charts, and automate repetitive formatting with carefully controlled macros.",
    lessons: [
      {
        title: "Workbooks, worksheets, rows, columns, and cells",
        text: "An Excel workbook contains one or more worksheets. Rows are numbered, columns are lettered, and their intersection forms a cell such as B3. A cell range such as B2:B10 selects multiple cells. A formula calculates a result; a function is a named formula that performs a common calculation.",
        points: ["The Name Box shows the active cell or selected range; the formula bar displays or edits its content.", "The active cell is where typing or editing occurs.", "Use worksheet tabs to move between sheets; rename sheets with descriptive names."]
      },
      {
        title: "Create and edit a workbook",
        text: "Start with a blank workbook or an approved template. Enter text, numbers, and dates in cells; edit a cell directly or through the formula bar. Delete removes cells or rows/columns and may shift other data; Clear Contents removes values while keeping the cell itself. Cut, copy, and paste data carefully, especially when formulas refer to other cells.",
        points: ["Save the editable workbook as XLSX; export to PDF for a fixed page layout.", "Use fill handles for a series or copied formula, and inspect the result.", "Use Print Selection, Active Sheet, or Entire Workbook intentionally; set scaling and page orientation after previewing."]
      },
      {
        title: "Format cells and worksheets",
        text: "Insert or delete cells, rows, and columns using the appropriate shift behavior. Merge adjacent cells sparingly, typically for a heading rather than data. Format Painter copies appearance, not underlying values. Add headers and footers for printed pages, change worksheet names, add sheets, and use zoom to adjust the screen view.",
        points: ["Keep raw data in a rectangular table with one header row and no merged data cells.", "Apply number formats deliberately: date, currency, percentage, or decimal.", "Before deleting a row, column, or cell, verify the selected range to avoid shifting unrelated data."]
      },
      {
        title: "Formulas and references",
        text: "Formulas begin with `=` and use operators such as `+`, `-`, `*`, and `/`. Parentheses make calculation order explicit. Relative references (A1) adjust when copied; absolute references ($A$1) keep both row and column fixed; mixed references ($A1 or A$1) fix only one part. Ranges such as A2:A10 refer to a group of cells.",
        points: ["Example: `=B2*C2` calculates line amount when B is quantity and C is unit price.", "Example: `=D2/$F$1` keeps the tax or rate cell fixed when filled down.", "Use Formulas > Show Formulas to inspect formulas on the sheet and confirm that references are correct."]
      },
      {
        title: "Summarize information with functions",
        text: "Functions can summarize a range without writing each calculation manually. Check the selected range and how each function treats text and blank cells.",
        points: ["`SUM(range)` adds numeric values; `AVERAGE(range)` calculates their arithmetic mean.", "`COUNT(range)` counts numeric cells; `COUNTA(range)` counts non-empty cells; `COUNTBLANK(range)` counts blank cells.", "`MIN(range)` and `MAX(range)` return the smallest and largest numeric values.", "`IF(test, value_if_true, value_if_false)` chooses a result based on a condition; `AND(test1, test2)` is TRUE when all tests are TRUE; `OR(test1, test2)` is TRUE when at least one is TRUE.", "`SUMIF(range, criterion, sum_range)` adds values that meet one criterion; `COUNTIF(range, criterion)` counts matching cells.", "For example, `=IF(E2>=50,\"Pass\",\"Review\")` assigns a result based on a score. Confirm local list separators and function names for the installed Excel version."]
      },
      {
        title: "Modify and combine text",
        text: "Text functions extract, clean, change case, or join text. They are useful for tidying imported information and creating consistent labels.",
        points: ["`LEFT(text, count)` returns characters from the beginning; `RIGHT` returns characters from the end; `MID(text, start, count)` extracts from a chosen position.", "`TRIM(text)` removes extra spaces between words and at the ends (while preserving single word spaces).", "`UPPER(text)` and `LOWER(text)` change letter case.", "`CONCATENATE(text1, text2, ...)` joins values in Excel 2016; the `&` operator is another simple joining method.", "Check the result when combining names or identifiers; do not remove meaningful spaces, leading zeros, or characters."]
      },
      {
        title: "Create and format charts",
        text: "Select a clean data range and insert a chart suited to the message. A line chart can show change across ordered categories or time; other chart types may suit category comparisons. Add a clear chart title and axis titles, format the data series, adjust the legend, and switch rows and columns if Excel interprets the series incorrectly.",
        points: ["Keep source data labels clear and include only relevant series.", "Use a consistent scale and avoid decorative effects that obscure comparisons.", "Update the source range when adding data and verify that the chart reflects the intended values."]
      },
      {
        title: "Record and run macros safely",
        text: "A macro records or runs a sequence of actions to automate repetitive work. In Office 2016, enable the Developer tab through File > Options > Customize Ribbon. Start Record Macro, assign a meaningful name, optionally set a shortcut and description, choose where to store it, perform the actions, and select Stop Recording. Relative-reference recording repeats actions relative to the selected starting cell; absolute-reference recording uses fixed locations.",
        points: ["Test a macro on a copy of a workbook and check every affected cell before using it on real data.", "Use meaningful macro names and run them from Developer > Macros or a deliberately assigned shortcut/control.", "Only enable macros from trusted workbooks and sources. Never enable a macro simply because a document asks; macros can execute harmful actions.", "A workbook containing macros must be saved in a macro-enabled format such as XLSM; XLSX does not preserve VBA macros.", "The curriculum's recorded examples include inserting a list, formatting a worksheet, applying a date format, and creating a reusable marks-certificate layout."]
      }
    ],
    practice: "Build a fictional class-marks workbook: enter ten students and five subject scores, calculate totals and percentages, assign results with IF, use SUM/COUNT/AVERAGE/MIN/MAX and one SUMIF or COUNTIF, extract or clean text, chart two tests, and test any recorded macro only on a copy."
  },
  {
    title: "Microsoft PowerPoint",
    weeks: 3,
    hours: 18,
    introduction: "Plan and build presentations with clear slide layouts, readable text, useful tables and charts, and purposeful animation.",
    lessons: [
      {
        title: "PowerPoint workspace and Ribbon",
        text: "The startup screen offers blank presentations, templates, recent files, and open options. In the editor, the title bar, Quick Access Toolbar, Ribbon, Slides pane, main work area, dialog-box launchers, and status bar support presentation creation. Ribbon tabs contain commands for building and presenting slides."
      },
      {
        title: "Create, organize, save, and print slides",
        text: "Create a new presentation and save it as PPTX. Add slides using layouts suited to the content, duplicate useful slides, rearrange them in the Slides pane, and delete slides that are no longer needed. Use Print Preview to select full-page slides or handout layouts such as multiple slides per page.",
        points: ["A title slide establishes topic and presenter; content layouts keep a consistent hierarchy.", "Save early and often, and use a clear file name and folder.", "Check the intended handout layout, color mode, and page range before printing."]
      },
      {
        title: "Add and format slide text",
        text: "Use text boxes for content that is not part of a layout placeholder. Change font size and color for readability and use Format Painter to repeat formatting. Bulleted lists group related points; numbered lists show sequence. Text-box Quick Styles, fill, borders, textures, and patterns can add emphasis, but should not reduce contrast or distract from meaning.",
        points: ["Keep slide text concise; explain details verbally or in speaker notes.", "Use a consistent type scale, contrast, and alignment across slides.", "Run spelling checks and proofread names, figures, and labels."]
      },
      {
        title: "Insert tables, worksheets, and charts",
        text: "Insert a PowerPoint table for simple structured content, an Excel worksheet when spreadsheet editing is needed, or a chart when a visual comparison is clearer. Apply table styles, then resize and position charts so labels remain legible. Check that imported values and source data are correct."
      },
      {
        title: "Transitions, animation, and slide shows",
        text: "Transitions control how one slide changes to the next; animations control when objects appear or move within a slide. Motion paths can guide an object along a route. Set start options and timing deliberately, then preview the sequence. Set up the slide show and rehearse using Presenter View. PowerPoint Zoom can create interactive navigation between slides or sections.",
        points: ["Use effects only when they clarify sequence or draw attention to a specific point.", "Avoid excessive movement, unexpected audio, or timing that makes content difficult to follow.", "Test the show on the display and equipment that will be used."]
      }
    ],
    practice: "Create a short training presentation with a title slide and four content slides. Include a readable bulleted list, a styled text box, one table and chart, a restrained transition, and a rehearsed slide show; also preview a two-slides-per-page handout."
  },
  {
    title: "Microsoft Access",
    weeks: 3,
    hours: 18,
    introduction: "Design a small relational database with tables and keys, then enter, find, filter, and present records using forms, queries, and reports.",
    lessons: [
      {
        title: "Databases and Access objects",
        text: "A database stores related information in a structured form. In Access, tables store records; queries select or calculate information; forms provide a user-friendly way to enter and review records; reports arrange information for presentation or printing. The Navigation Pane lists database objects.",
        points: ["Start from a blank database or a suitable sample template, then save it in a known location.", "Give tables and fields descriptive names and decide what each record represents."]
      },
      {
        title: "Create tables and choose data types",
        text: "Datasheet View allows direct entry into columns and rows. Design View lets you define fields, names, data types, and properties. Choose data types to match values, such as Short Text for names, Number for quantities, Date/Time for dates, and Currency for money. An AutoNumber field can generate a unique identifier.",
        points: ["A primary key uniquely identifies each record and should not be reused for a different record.", "Avoid storing multiple values in one field or repeating the same group of fields.", "Changing a field type after entering data may lose or alter values; plan before converting."]
      },
      {
        title: "Primary keys, foreign keys, and relationships",
        text: "A relationship links records in different tables. A primary key identifies a row in its own table; a foreign key stores a related row's key in another table. For example, a Students table can have StudentID as its primary key and an Enrolments table can store StudentID as a foreign key.",
        points: ["Use the Relationships window to connect matching key fields.", "Referential integrity helps prevent orphaned related records; enable it when the data model and existing records satisfy its rules.", "A one-to-many relationship is common: one student may have multiple enrolment records."]
      },
      {
        title: "Create and use forms",
        text: "A simple form can be created from a table, or the Form Wizard can select fields and layout. Design View allows controls to be arranged and formatted. Use a form to navigate, add, and edit records; sort or filter data to find a subset. Save changes to the form design and verify record values in the underlying table."
      },
      {
        title: "Build queries and criteria",
        text: "A query asks the database for selected fields and records. Use Query Wizard for a simple starting query, or Design View to add tables, fields, sorting, and criteria. Queries may use one table or multiple related tables.",
        points: ["A criterion filters a field, such as a specific city or a date range.", "Criteria on the same row are generally combined with AND; criteria on separate rows can express OR conditions in the design grid.", "Run and review query results after changing criteria; save queries with names that explain their purpose."]
      },
      {
        title: "Create and refine reports",
        text: "A report presents selected information in a structured, printable layout. Create a quick report, use Report Wizard to choose fields and grouping, or build a report in Design View. Review Print Preview, adjust layout and spacing, and confirm that important records and page headings are not clipped."
      },
      {
        title: "A practical database workflow",
        text: "Plan the records and relationships before building objects. Create tables and keys first, enter a small set of test records, create forms for data entry, build queries to answer questions, and use reports to present the results. Back up the database before restructuring tables or changing field types."
      }
    ],
    practice: "Create a small fictional student database with Students and Courses tables plus an Enrolments table. Set primary and foreign keys, create a relationship, enter test records, build a data-entry form, query students by a chosen criterion, and produce a report preview."
  }
];

const msOfficePracticalLabs = [
  {
    title: "Find your way around the Office interface",
    steps: ["Open an Office application and identify its title bar, Quick Access Toolbar, File tab, Ribbon tabs and groups, work area, and status bar.", "In Word, identify the document page; in Excel, identify the Name Box, formula bar, worksheet tabs, row/column headings, and active cell.", "Open a Ribbon tab and describe the commands shown in its groups."]
  },
  {
    title: "Create, save, reopen, and export a Word document",
    steps: ["Create a new Word document from the File tab or Quick Access Toolbar; optionally begin with a suitable template.", "Add a title and a few paragraphs, then save into a new practice folder with a unique file name.", "Close and reopen the document, make a small edit, and use Save As or Export to create a PDF.", "Use Print Preview to review pages and settings; do not print without permission."]
  },
  {
    title: "Format Word text, paragraphs, and lists",
    steps: ["Use the Font group to change typeface, size, color, superscript, or subscript on selected text.", "Use the Font dialog's Advanced tab to inspect character spacing; apply a modest change and compare.", "Use Format Painter to copy formatting, then Clear Formatting to remove it from a selected sample.", "Set left, right, first-line, and hanging indents; set line and before/after paragraph spacing.", "Convert a group of lines to bulleted and numbered lists and create a nested sublist."]
  },
  {
    title: "Set Word page layout and tables",
    steps: ["Set portrait or landscape orientation, paper size, and page margins; insert a page break and, separately, a section break.", "Create a 3-column by 5-row table, add row and column headings, and enter sample information.", "Resize rows and columns, use AutoFit, and merge or split selected cells where appropriate.", "Preview the document and confirm that the table and sections print as intended."]
  },
  {
    title: "Prepare a short Urdu document",
    steps: ["On the training computer, add the Urdu keyboard through Windows Language & keyboard settings, following the instructor's approved procedure.", "Switch to the Urdu input method and type a short, non-sensitive paragraph.", "Set right-to-left paragraph direction and apply an installed Unicode Urdu font.", "Save and export a PDF, then open it to verify text shaping and font display."]
  },
  {
    title: "Create and organize an Excel workbook",
    steps: ["Open Excel and inspect the startup screen; create a blank workbook.", "Enter simple sample data on multiple worksheets, rename a sheet, add another sheet, and save as XLSX.", "Reopen the workbook, copy and move a sample range between sheets, and clear test cell contents.", "Insert and delete a practice row, column, and cell; use Format Painter on a sample range.", "Add a header and footer and use the Fill Handle to extend a simple series."]
  },
  {
    title: "Use Excel formulas, references, and functions",
    steps: ["Enter sample numeric values and write an arithmetic formula beginning with `=`; use Show Formulas to inspect it.", "Copy a formula using a relative reference and note how it adjusts; repeat with absolute and mixed references.", "Use SUM, COUNT, COUNTA, and COUNTBLANK on a small mixed data range; use AVERAGE, MIN, and MAX on numeric data.", "Create fictional student records and use AND, IF, SUMIF, and COUNTIF to answer clear questions.", "Use LEFT, RIGHT, MID, TRIM, UPPER, LOWER, and CONCATENATE on practice text; check the output for unwanted space or lost characters."]
  },
  {
    title: "Build and print an Excel chart",
    steps: ["Enter class numbers and one test-score series with clear headers.", "Create a line chart, add a chart title and axis titles, and edit the series and legend.", "Add a second score series and adjust chart style or switch row/column interpretation if needed.", "Print a selection, active sheet, or entire workbook only as assigned; preview the output first."]
  },
  {
    title: "Record and test an Excel macro",
    steps: ["Use an instructor-approved workbook copy and confirm no important data is present.", "Enable the Developer tab through File > Options > Customize Ribbon, then choose absolute or relative references before recording.", "Record a harmless formatting action with a meaningful macro name and optional shortcut; stop recording.", "Run it from Developer > Macros and verify the result on the copy.", "Save as XLSM to preserve the macro. Do not enable macros from unknown files or sources."]
  },
  {
    title: "Create and deliver a PowerPoint presentation",
    steps: ["Create a presentation from a blank file or approved template; use a title layout and suitable content layouts.", "Add, duplicate, move, rearrange, and delete practice slides; save as PPTX.", "Format text with readable size and color, create bullets or numbering, and check spelling.", "Insert a table and a chart; resize and move the chart so labels stay visible.", "Add restrained transitions or animations, configure start and timing, then rehearse with Presenter View.", "Preview a multi-slide handout layout before printing."]
  },
  {
    title: "Create an Access database and related tables",
    steps: ["Create a blank practice database or open an approved sample and identify its tables, forms, reports, and queries in the Navigation Pane.", "Create a Students table and define meaningful fields with appropriate data types in Design View.", "Set a primary key, then create related Courses and Enrolments tables with matching foreign-key fields.", "Create relationships and enable referential integrity only after the test data satisfies the relationship rules.", "Enter a few fictional records and verify the linked values."]
  },
  {
    title: "Use Access forms, queries, and reports",
    steps: ["Create a basic form for one table, then create a second form with Form Wizard.", "Use Design View to arrange labels and fields, switch to Form View, and navigate records.", "Sort and filter the form; verify that the source data is unchanged except for intentional edits.", "Create a query using Query Wizard, then inspect it in Design View and add criteria using AND/OR logic.", "Create a query using related tables, run it, and verify selected records.", "Create a report with Report Wizard or Design View and inspect it in Print Preview."]
  }
];

const msOfficeShortcutRows = [
  ["All Office apps", "Ctrl+N", "Create a new file or database object."],
  ["All Office apps", "Ctrl+O", "Open a file."],
  ["All Office apps", "Ctrl+S", "Save the current file."],
  ["All Office apps", "F12", "Open Save As in many Office desktop applications."],
  ["All Office apps", "Ctrl+P", "Open Print and preview settings."],
  ["All Office apps", "Ctrl+Z", "Undo the last action."],
  ["All Office apps", "Ctrl+Y", "Redo or repeat an action where supported."],
  ["All Office apps", "Ctrl+X / Ctrl+C / Ctrl+V", "Cut / copy / paste selected content."],
  ["All Office apps", "Ctrl+A", "Select all content in the current context."],
  ["All Office apps", "Ctrl+F", "Find text or data."],
  ["All Office apps", "Ctrl+H", "Find and replace where supported."],
  ["All Office apps", "Ctrl+W", "Close the current document or window."],
  ["All Office apps", "Alt+F", "Open the File tab / Backstage view."],
  ["All Office apps", "F1", "Open Help."],
  ["All Office apps", "Ctrl+F1", "Show or hide the Ribbon in many Office apps."],
  ["Word", "Ctrl+B / Ctrl+I / Ctrl+U", "Bold / italic / underline selected text."],
  ["Word", "Ctrl+L / Ctrl+E / Ctrl+R / Ctrl+J", "Align paragraph left / center / right / justify."],
  ["Word", "Ctrl+Shift+> / Ctrl+Shift+<", "Increase / decrease selected text size in steps."],
  ["Word", "Ctrl+]", "Increase selected font size by one point."],
  ["Word", "Ctrl+[", "Decrease selected font size by one point."],
  ["Word", "Ctrl+1 / Ctrl+2 / Ctrl+5", "Set single / double / 1.5 line spacing."],
  ["Word", "Ctrl+M", "Increase paragraph indent."],
  ["Word", "Ctrl+Shift+M", "Decrease paragraph indent."],
  ["Word", "Ctrl+T", "Create a hanging indent."],
  ["Word", "Ctrl+Shift+T", "Reduce a hanging indent."],
  ["Word", "Ctrl+Enter", "Insert a page break."],
  ["Word", "Ctrl+K", "Insert or edit a hyperlink."],
  ["Word", "Ctrl+Shift+N", "Apply the Normal paragraph style."],
  ["Word", "Ctrl+Alt+1 / Ctrl+Alt+2 / Ctrl+Alt+3", "Apply Heading 1 / Heading 2 / Heading 3."],
  ["Word", "Ctrl+Home / Ctrl+End", "Move to the beginning / end of the document."],
  ["Word", "Shift+F3", "Cycle selected text through upper, lower, and title case."],
  ["Word", "F7", "Open spelling and grammar review."],
  ["Word", "Ctrl+Shift+8", "Show or hide paragraph marks and other formatting symbols."],
  ["Word", "Ctrl+Alt+M", "Insert a new comment."],
  ["Word", "Ctrl+Shift+E", "Turn Track Changes on or off."],
  ["Excel", "F2", "Edit the active cell."],
  ["Excel", "Alt+Enter", "Start a new line inside a cell while editing."],
  ["Excel", "Ctrl+1", "Open Format Cells."],
  ["Excel", "Ctrl+;", "Enter the current date in a cell."],
  ["Excel", "Ctrl+Shift+;", "Enter the current time in a cell."],
  ["Excel", "Ctrl+`", "Show or hide formulas on a worksheet."],
  ["Excel", "Alt+=", "Insert AutoSum for a nearby range."],
  ["Excel", "Ctrl+Arrow key", "Move to the edge of the current data region."],
  ["Excel", "Ctrl+Shift+Arrow key", "Select to the edge of the current data region."],
  ["Excel", "Ctrl+Home / Ctrl+End", "Move to the first cell / last used cell in the worksheet."],
  ["Excel", "Ctrl+Page Up / Ctrl+Page Down", "Move to the previous / next worksheet."],
  ["Excel", "Shift+F11", "Insert a new worksheet."],
  ["Excel", "Ctrl+Space", "Select the current column."],
  ["Excel", "Shift+Space", "Select the current row."],
  ["Excel", "Ctrl+D", "Fill down from the cell or row above."],
  ["Excel", "Ctrl+R", "Fill right from the cell to the left."],
  ["Excel", "Ctrl+Shift+L", "Turn AutoFilter on or off for a data range."],
  ["Excel", "Ctrl+T", "Create a table from the selected data range."],
  ["Excel", "F4", "Repeat an action; while editing a formula, cycle reference types."],
  ["Excel", "Ctrl+Shift+~", "Apply the General number format."],
  ["Excel", "Ctrl+Shift+$", "Apply the Currency format."],
  ["Excel", "Ctrl+Shift+%", "Apply the Percentage format."],
  ["Excel", "Ctrl+9 / Ctrl+0", "Hide selected rows / columns."],
  ["PowerPoint", "Ctrl+M", "Insert a new slide."],
  ["PowerPoint", "Ctrl+D", "Duplicate the selected slide or object."],
  ["PowerPoint", "Ctrl+G / Ctrl+Shift+G", "Group / ungroup selected objects."],
  ["PowerPoint", "Ctrl+K", "Insert or edit a hyperlink."],
  ["PowerPoint", "F5", "Start the slide show from the beginning."],
  ["PowerPoint", "Shift+F5", "Start the slide show from the current slide."],
  ["PowerPoint", "Esc", "End a slide show."],
  ["PowerPoint", "B / W during slide show", "Show a black / white screen temporarily; press again to return."],
  ["PowerPoint", "Ctrl+Shift+C / Ctrl+Shift+V", "Copy / apply formatting to selected text or objects."],
  ["PowerPoint", "Ctrl+Shift+> / Ctrl+Shift+<", "Increase / decrease selected text size."],
  ["PowerPoint", "Arrow keys", "Move between slides in Normal view or navigate during a slide show."],
  ["PowerPoint", "Home / End in slide pane", "Select the first / last slide."],
  ["PowerPoint", "Ctrl+Enter", "Move to the next placeholder or insert a new slide when appropriate."],
  ["Access", "Ctrl+N", "Create a new database."],
  ["Access", "Ctrl+O", "Open an existing database."],
  ["Access", "F11", "Show or hide the Navigation Pane."],
  ["Access", "F6", "Move between panes in the database window."],
  ["Access", "F4", "Open or close the Property Sheet in design contexts."],
  ["Access", "Ctrl+; / Ctrl+Shift+;", "Insert the current date / time in a field."],
  ["Access", "Ctrl+'", "Copy the value from the same field in the previous record."],
  ["Access", "Tab / Shift+Tab", "Move to the next / previous field."],
  ["Access", "Ctrl+Enter", "Open the selected object in Design view from the Navigation Pane in supported contexts."],
  ["Access", "Alt+F11", "Open the Visual Basic editor; use only in trusted databases."],
  ["Access", "F5", "Switch between Form view and Design view in supported contexts."],
  ["Access", "Ctrl+S", "Save changes to the current database object design."]
];

const msOfficeShortcutReference = `
  <section class="ict-links-section web-reference-section" id="ms-office-shortcuts">
    <div class="dit-eyebrow">QUICK REFERENCE</div><h2>Microsoft Office keyboard shortcuts</h2>
    <p class="ict-section-intro">These are common Windows desktop shortcuts for Office 2016. Some commands depend on the active view, selected item, keyboard layout, or application version. Use the KeyTips shown when you press <kbd>Alt</kbd> to navigate the Ribbon, and check the application's Help if a command behaves differently.</p>
    <div class="web-table-wrap"><table class="web-reference-table"><thead><tr><th scope="col">Application</th><th scope="col">Shortcut</th><th scope="col">What it does</th></tr></thead><tbody>${msOfficeShortcutRows.map(([application, shortcut, description]) => `<tr><th scope="row">${application}</th><td><kbd>${shortcut}</kbd></td><td>${description}</td></tr>`).join("")}</tbody></table></div>
    <p class="ict-reference-note"><strong>Practice tip:</strong> learn a few shortcuts that match your task, try them on a practice file, and save regularly. Keyboard shortcuts improve speed but do not replace proofreading, checking formulas, reviewing print layout, or backing up important files.</p>
  </section>`;

const ditSupplementaryNotes = {
  ict: {
    title: "Extended ICT foundations",
    articles: [
      {
        title: "How a computer represents information",
        text: "Digital computers represent information using binary states, commonly described as 0 and 1. A bit is one binary digit and a byte is commonly eight bits. Text, images, audio, and video are encoded as patterns of bits; software interprets those patterns according to a file format or data standard.",
        points: ["Binary place values increase by powers of two: 1, 2, 4, 8, 16, and so on. For example, binary 1011 equals decimal 11 (8 + 0 + 2 + 1).", "Character encodings such as Unicode assign codes to text characters so that different languages can be represented consistently.", "A file extension is a useful clue about file type, but the application and actual file format determine how the contents are interpreted.", "Storage units are commonly expressed as KB, MB, GB, and TB; networking rates often use bits per second, while file sizes usually use bytes. Check whether a provider uses decimal or binary unit conventions."]
      },
      {
        title: "Choose and care for storage devices",
        text: "Primary memory and long-term storage serve different purposes. RAM holds working data while a computer is powered; it is fast but volatile. ROM or firmware storage holds startup instructions. SSDs store files in flash memory and have no moving disk platter; hard disk drives store data magnetically on rotating platters. Removable flash drives and memory cards are convenient for transfer but can be lost or damaged.",
        points: ["Use RAM for currently running programs and persistent storage for files that must remain after shutdown.", "Keep at least one separate backup of important work; synchronizing a file is not always the same as maintaining a recoverable backup.", "Use safe-eject procedures before unplugging removable media, and do not store the only copy of important work on a USB drive.", "Before upgrading storage, check the connection type, physical size, device compatibility, backup status, and instructor authorization."]
      }
    ]
  },
  "ms-office": {
    title: "Extended Office workflow notes",
    articles: [
      {
        title: "Build reliable Excel calculations",
        text: "A spreadsheet formula begins with an equals sign and calculates a result from values, cell references, operators, and functions. Relative references change when a formula is copied; absolute references use dollar signs to lock a row or column; mixed references lock only one part. Choosing the correct reference type is essential when filling a formula across rows or columns.",
        points: ["For a quantity in B2 and unit price in C2, use =B2*C2 for the line total, then copy the formula down the table.", "If a tax rate is stored in F1, =D2*$F$1 keeps the rate fixed when copied down; inspect the result in each row.", "Use SUM for totals, AVERAGE for a mean, COUNT for numeric entries, COUNTA for non-empty cells, and IF for a clearly defined condition.", "Use descriptive headings, one record per row, consistent data types, and no blank spacer rows in a dataset that must be sorted, filtered, or charted.", "Before sharing, compare a few calculated results manually with the formula bar and check for missing values, unintended text, and incorrect ranges."]
      },
      {
        title: "Select the right Office tool and output",
        text: "A professional workflow starts by choosing the application that matches the information. Word is suited to paginated documents, Excel to tabular calculations, PowerPoint to a visual presentation, and Access to related records that need structured entry and queries. A tool should clarify the work, not add unnecessary complexity.",
        points: ["Use Word styles and headings to keep longer reports consistent and easier to navigate; use page and section breaks deliberately.", "Use PowerPoint's Slide Master for repeated layouts and check contrast, font size, and projected readability.", "Use Access tables for stored data, queries for selected answers, forms for entry, and reports for formatted summaries.", "Save an editable source file and export a PDF when preserving layout is important. Reopen the exported file to verify it.", "Use fictional data for exercises and remove personal, financial, or student information before sharing examples."]
      }
    ]
  },
  "computer-networks": {
    title: "Extended networking explanations",
    articles: [
      {
        title: "Follow a network request through protocol layers",
        text: "Network communication is easier to understand when divided into layers. A browser creates an application request, transport protocols manage the conversation, IP routes packets between networks, and Ethernet or Wi-Fi carries frames over the local link. Receiving devices process the data in reverse order. Standards allow equipment from different vendors to interoperate when they implement compatible protocols.",
        points: ["At the application layer, HTTP/HTTPS supports web requests and DNS helps resolve a domain name to an IP address.", "TCP provides an ordered, reliable byte stream; UDP sends datagrams without the same delivery guarantees. The application chooses what behavior it needs.", "IP provides logical addressing and routing between networks; the local link delivers frames to the next device on that network.", "A switch forwards local Ethernet frames using learned MAC addresses; a router forwards IP packets between networks.", "The OSI seven-layer model is a teaching and troubleshooting reference. Real Internet protocol suites do not map perfectly one-to-one to every OSI layer."]
      },
      {
        title: "Read a simple IPv4 address and subnet",
        text: "An IPv4 address contains 32 bits and is written as four decimal octets. A prefix such as /24 identifies how many leading bits form the network portion; the remaining bits are available for addresses inside that subnet. A subnet mask such as 255.255.255.0 is another way to show a /24 prefix.",
        points: ["For 192.168.10.25/24, the network is 192.168.10.0/24 and the host portion is represented by the final octet.", "In a conventional /24 IPv4 subnet, .0 is the network address and .255 is the directed broadcast address; usable host availability depends on subnet size and network design.", "The default gateway is the router or Layer 3 interface a host uses to reach destinations outside its local subnet.", "Private IPv4 ranges are intended for internal networks and are not directly routed across the public Internet; network address translation is commonly used at the edge.", "Use approved calculators or a simulator to practise subnet ranges. Do not change a live institute address or scan networks without permission."]
      }
    ]
  },
  "operating-systems": {
    title: "Extended operating-system notes",
    articles: [
      {
        title: "From power-on to the sign-in screen",
        text: "A computer begins startup in firmware stored on the motherboard. BIOS or UEFI performs basic checks and selects a boot device. A boot manager loads the operating-system kernel, which initializes memory, processors, and device drivers. System services start, then the login interface becomes available. Exact steps vary by operating system and device.",
        points: ["Firmware settings and boot menus affect startup; change them only on an assigned lab computer and with instructor approval.", "A bootloader is the small program that locates and starts the operating system. Secure Boot, when configured, helps verify trusted boot components.", "The kernel is the central part of an OS responsible for core hardware, memory, process, and system-call operations.", "A missing boot device, damaged system files, incompatible driver, or failed update can interrupt startup; record the exact message before troubleshooting.", "Back up user files before repair or installation. Reinstalling an OS or changing partitions can permanently erase data."]
      },
      {
        title: "Accounts, permissions, updates, and recovery",
        text: "Operating-system security depends on using suitable accounts and permissions. Standard accounts reduce the impact of mistakes during ordinary work; administrator accounts can install software and change system-wide settings. Updates fix security and reliability issues, while recovery tools help restore a system after some failures.",
        points: ["Use unique sign-in credentials and lock the screen when leaving a shared workstation.", "Install updates from the operating system's official update mechanism and follow institute maintenance policies.", "Keep personal work in the assigned user profile or approved storage location; avoid saving credentials in public lab browsers.", "Know where approved backups and recovery instructions are kept before changing settings.", "When reporting a problem, include device identity, operating-system version, error wording, steps to reproduce, and changes made."]
      }
    ]
  },
  programming: {
    title: "Extended programming foundations",
    articles: [
      {
        title: "Turn a problem into an algorithm",
        text: "Programming begins before code is typed. Define the problem, identify inputs, determine the processing rules, and specify the expected output. An algorithm is a finite, ordered procedure for producing a result. Pseudocode describes those steps in readable language; a flowchart uses standard shapes and arrows to show their sequence and decisions.",
        points: ["Example problem: calculate the average of three marks. Inputs are the marks; processing validates them and computes (mark1 + mark2 + mark3) / 3; output is the average.", "A sequence lists operations in order, selection chooses a path using a condition, and iteration repeats a step while a condition applies.", "Trace an algorithm with sample values before implementation; a trace table records variable values after each important step.", "Check edge cases such as zero, negative values, empty input, and values at a permitted boundary.", "Keep a solution small and readable first. Add optional features after the main requirements work."]
      },
      {
        title: "Test, debug, and improve a program",
        text: "A program that runs without a syntax error can still produce the wrong answer. Testing compares actual behavior with expected results. Debugging identifies and corrects the cause of a defect. A disciplined cycle changes one thing at a time, runs relevant tests again, and records what was verified.",
        points: ["Syntax errors violate the language grammar; runtime errors happen while a program runs; logic errors allow execution but produce an incorrect result.", "Use representative normal inputs, boundary values, invalid inputs, and repeated use as separate test cases.", "Read the full error message and line location, inspect relevant variable values, and reduce the problem to a small reproducible example.", "After a correction, rerun the failed test and neighboring tests so a fix does not break working behavior.", "Use versioned copies or source control where available; do not put passwords, API keys, or private user data in source files."]
      }
    ]
  },
  "database-systems": {
    title: "Extended database study notes",
    articles: [
      {
        title: "Improve a design with normalization",
        text: "Relational design organizes facts into tables so the same fact does not have to be repeated unnecessarily. Normalization is a set of design principles that helps prevent update, insertion, and deletion anomalies. It does not replace understanding the real requirements; always model the facts and relationships the application needs.",
        points: ["First normal form (1NF): store one value per field and avoid repeating groups of columns such as Phone1, Phone2, and Phone3.", "Second normal form (2NF): in a table with a composite key, non-key facts should depend on the whole key, not only part of it.", "Third normal form (3NF): non-key facts should depend on the key, the whole key, and nothing but the key; move facts about a different entity into its own related table.", "For a course enrolment system, keep Student, Course, and Enrolment facts in related tables rather than repeating a student's name on every course record.", "Normalization improves consistency, while carefully chosen indexes and queries support performance. Evaluate both with realistic data and the course requirements."]
      },
      {
        title: "Use SQL to retrieve and change records",
        text: "Structured Query Language (SQL) describes operations on relational database data. SELECT retrieves rows, INSERT adds rows, UPDATE changes existing rows, and DELETE removes rows. A WHERE clause limits which rows are affected or returned, so it must be checked carefully before changing data.",
        points: ["A basic query follows the pattern SELECT column_list FROM table_name WHERE condition ORDER BY column_name.", "A JOIN combines related rows from tables using a matching key, such as Students.StudentID and Enrolments.StudentID.", "Use parameters rather than concatenating untrusted input into SQL in real applications; this helps prevent injection vulnerabilities.", "Before UPDATE or DELETE, test the WHERE condition with a SELECT that shows exactly which records match.", "Back up important data and use transactions where supported so a group of changes can be committed together or rolled back."]
      }
    ]
  },
  "video-editing": {
    title: "Extended video-production notes",
    articles: [
      {
        title: "Plan and organize a reliable editing project",
        text: "A video project moves from an idea and audience to a script or shot plan, recording, editing, review, and delivery. A short brief keeps the work focused: state the audience, purpose, duration, platform, orientation, deadline, and any accessibility or branding requirements before importing footage.",
        points: ["Create a named project folder with separate folders for source media, audio, graphics, project files, exports, and approved backups.", "Copy source recordings before editing and avoid moving or renaming linked files while the editor is open.", "Use descriptive clip names, bins, markers, and sequence labels so another editor can find assets and understand the timeline.", "Build a rough cut for story and timing before polishing transitions, color, titles, and sound.", "Keep an untouched copy of camera originals and save versions before major revisions."]
      },
      {
        title: "Frame rate, resolution, codecs, and export checks",
        text: "Resolution describes the number of pixels in each frame; frame rate describes frames per second. A codec compresses and decompresses audio or video, while a container such as MP4 packages streams and metadata. Choose settings based on the source material and destination platform rather than selecting the largest numbers automatically.",
        points: ["Match the sequence frame rate to the main source footage or delivery requirement; mixed frame rates can look uneven if interpreted incorrectly.", "A larger frame size and higher bitrate can improve detail but increase file size and upload time. Compression quality depends on codec, bitrate, motion, and content.", "Balance dialogue and music so speech remains clear; listen on headphones and device speakers, and check for clipping or unwanted noise.", "Add readable titles and captions, keep important content inside safe areas, and verify contrast against the background.", "Before delivery, play the exported file from start to finish, inspect audio sync, spelling, black frames, aspect ratio, and file naming."]
      }
    ]
  },
  "web-development": {
    title: "Extended web-development practice notes",
    articles: [
      {
        title: "What happens when a browser opens a website",
        text: "When a user enters a URL, the browser identifies the scheme and domain, resolves the host name through DNS, establishes a network connection, and requests a resource from a server. HTTPS protects the connection with encryption and server identity checks. The browser then parses HTML, applies CSS, runs JavaScript, and displays the resulting page.",
        points: ["A domain name is a memorable name; DNS helps locate the IP address for the relevant service.", "HTML provides structure, CSS controls presentation, and JavaScript adds behavior. Separate files make the responsibilities easier to maintain.", "Use relative links for pages and assets inside a static site so the same files can work under a GitHub Pages project path.", "A static host serves files; it does not automatically provide a database, private account system, payment processing, or server-side form handling.", "Test production links, image paths, browser console messages, keyboard behavior, and mobile layouts after deployment."]
      },
      {
        title: "Accessibility, performance, and trustworthy pages",
        text: "A usable site works for people with different devices, connection speeds, and ways of interacting. Semantic elements, descriptive link text, form labels, keyboard access, captions, and readable contrast make content more robust. Performance and security also depend on keeping assets and behavior appropriately simple.",
        points: ["Use one clear page-level h1, logical heading order, landmarks such as header/nav/main/footer, and meaningful image alternative text.", "Ensure every form control has a visible label and validation messages are understandable without relying on color alone.", "Compress appropriately sized images, avoid unnecessary large scripts, and test on a slower connection and small screen.", "Treat text from users as data; use safe DOM methods such as textContent rather than inserting untrusted HTML.", "Use HTTPS hosting, keep dependencies current when used, and never expose credentials or private information in client-side source."]
      }
    ]
  },
  "graphics-design": {
    title: "Extended graphic-design explanations",
    articles: [
      {
        title: "Build a clear visual hierarchy",
        text: "Visual hierarchy guides a viewer through a design in a deliberate order. Size, contrast, position, spacing, alignment, color, and type weight can signal what is most important. A good layout communicates its main message quickly and still makes supporting information easy to find.",
        points: ["Start with the communication goal and audience; list the single most important message before choosing decoration.", "Use alignment and consistent spacing to group related items. Repeated margins and a simple grid make multiple pages feel like one system.", "Create contrast between heading, body, and supporting text while maintaining readable color contrast.", "Limit typefaces and colors to a consistent set; use size, weight, and spacing to create variety before adding more fonts.", "Check the design at its final display size. Small text that looks readable while zoomed in may fail on a phone or printed notice."]
      },
      {
        title: "Choose the right format and prepare delivery",
        text: "Raster graphics store pixels and are well suited to photographs; enlarging them too far reveals pixelation. Vector graphics store paths and shapes that can scale smoothly for logos and diagrams. The correct working file preserves editability, while the export format should fit the intended screen, print process, or platform.",
        points: ["Use an editable project format while designing and export a copy for delivery; keep links to placed images and fonts organized.", "PNG supports lossless imagery and transparency; JPEG is commonly used for photographs; SVG stores scalable vector artwork; PDF can preserve a print-ready page.", "For print, confirm page size, bleed, image resolution, color requirements, and font handling with the print provider.", "For web or social media, export the correct pixel dimensions, use an appropriate compressed format, and preview the result on a phone.", "Check licensing and permission for photographs, icons, typefaces, and templates; retain attribution where required."]
      }
    ]
  },
  "capstone-project": {
    title: "Extended capstone project guidance",
    articles: [
      {
        title: "Define a manageable project and acceptance criteria",
        text: "A successful capstone solves a bounded problem for an identifiable user. A proposal should state the problem, target users, objectives, scope, constraints, tools, risks, deliverables, and schedule. Acceptance criteria turn broad goals into checks that a reviewer can observe or test.",
        points: ["Replace vague goals such as 'make a good website' with a testable criterion such as 'a visitor can find course contact details from the home page on desktop and mobile'.", "Separate required features from optional improvements so the minimum viable result can be completed first.", "Identify privacy, licensing, backup, accessibility, and deployment risks before collecting information or publishing.", "Break work into small milestones and show the supervisor working evidence rather than waiting until the final week.", "Get approval before using real personal records, publishing institute claims, or deploying a project publicly."]
      },
      {
        title: "Test, present, and hand over the finished work",
        text: "The final stage is a verified handoff, not just a demonstration on the developer's own device. Test each acceptance criterion, record defects, correct the important failures, and recheck related features. The report and presentation should explain what was built, how it was tested, what remains limited, and how another person can run or maintain it.",
        points: ["Include normal, invalid, boundary, and recovery tests appropriate to the project, with expected and actual results.", "Prepare a clean demonstration dataset and remove credentials, private records, and temporary files from the deliverable.", "Document software versions, setup instructions, file structure, known limitations, sources, and licenses.", "Cite external code, images, fonts, and data accurately; clearly distinguish your contribution from supplied material.", "Keep a final backup and provide source files and exported outputs in the format the supervisor requested."]
      }
    ]
  }
};

function renderSupplementaryNotes(subjectSlug) {
  const notes = ditSupplementaryNotes[subjectSlug];
  if (!notes) return "";
  const articles = notes.articles.map((article) =>
    `<article class="dit-supplementary-article"><h3>${article.title}</h3><p>${article.text}</p><ul>${article.points.map((point) => `<li>${point}</li>`).join("")}</ul></article>`
  ).join("");
  return `<section class="ict-links-section dit-supplementary-section" id="dit-extended-notes-${subjectSlug}"><div class="dit-eyebrow">GO FURTHER</div><h2>${notes.title}</h2><p class="ict-section-intro">Use these expanded explanations to connect the module vocabulary to decisions you will make in a real task. Try explaining each idea in your own words and test it with the guided practicals.</p><div class="dit-supplementary-grid">${articles}</div></section>`;
}

function renderMsOfficeNotes(courseUrl) {
  const moduleNavigation = msOfficeModules.map((module, index) =>
    `<a href="#ms-office-module-${index + 1}"><span>${String(index + 1).padStart(2, "0")}</span>${module.title}</a>`
  ).join("") + `<a href="#ms-office-shortcuts"><span>KEYS</span>Office keyboard shortcuts</a>`;
  const modules = msOfficeModules.map((module, index) => `
    <details class="ict-module" id="ms-office-module-${index + 1}" ${index === 0 ? "open" : ""}>
      <summary><span class="ict-module-number">MODULE ${String(index + 1).padStart(2, "0")}</span><span class="ict-module-title">${module.title}</span><span class="ict-module-meta">${module.weeks} ${module.weeks === 1 ? "week" : "weeks"} · ${module.hours} hours</span></summary>
      <div class="ict-module-content">
        <p class="ict-module-intro">${module.introduction}</p>
        ${module.lessons.map((lesson) => `<section class="ict-lesson"><h3>${lesson.title}</h3><p>${lesson.text}</p>${lesson.points ? `<ul>${lesson.points.map((point) => `<li>${point}</li>`).join("")}</ul>` : ""}</section>`).join("")}
        <div class="ict-practice"><strong>Practice task</strong><p>${module.practice}</p></div>
      </div>
    </details>
  `).join("");
  const labs = msOfficePracticalLabs.map((lab, index) => `
    <details class="ict-lab">
      <summary><span>${String(index + 1).padStart(2, "0")}</span>${lab.title}</summary>
      <ol>${lab.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
    </details>
  `).join("");

  return `<section class="ict-notes-layout dit-page-width" aria-label="MS Office course notes">
    <aside class="ict-notes-nav">
      <div class="ict-notes-nav-label">COURSE CONTENTS</div>
      <nav aria-label="MS Office modules">${moduleNavigation}<a href="#ms-office-practical-labs"><span>LAB</span>Practical lab guide</a><a href="#ms-office-learning-links"><span>LINK</span>Learning links</a></nav>
      <a class="ict-notes-back" href="${courseUrl}">← All DIT subjects</a>
    </aside>
    <div class="ict-notes-main">
      <section class="ict-learning-outcomes">
        <div class="dit-eyebrow">HOW TO USE THESE NOTES</div>
        <h2>Create, calculate, present, and organize.</h2>
        <p>Follow the five modules and complete the guided practice with fictional or non-sensitive data. These notes follow the supplied DIT Part I outline for Office 2016; Ribbon labels and features can vary in newer Office versions.</p>
        <div class="ict-outcome-grid"><div><strong>01</strong><span>Create and format English or Urdu documents in Word.</span></div><div><strong>02</strong><span>Calculate, summarize, chart, and automate work in Excel.</span></div><div><strong>03</strong><span>Communicate ideas clearly with PowerPoint.</span></div><div><strong>04</strong><span>Build a small relational database in Access.</span></div></div>
        <p class="ict-curriculum-note">Aligned to the KP BT&CE DIT Curriculum Revised 2022: Part I · 20 weeks · 120 contact hours (40 theory, 80 practical).</p>
      </section>
      <section class="ict-module-list" aria-label="MS Office learning modules">${modules}</section>
      ${msOfficeShortcutReference}
      ${renderSupplementaryNotes("ms-office")}
      <section class="ict-labs-section" id="ms-office-practical-labs">
        <div class="dit-eyebrow">HANDS-ON LEARNING</div><h2>Practical lab guide</h2>
        <p class="ict-section-intro">Use the institute's approved Office installation. Follow instructor guidance for printing, installing language tools, and using macros; practice with fictional data and keep a clean copy of your work.</p>
        <div class="ict-lab-list">${labs}</div>
      </section>
      <section class="ict-links-section" id="ms-office-learning-links">
        <div class="dit-eyebrow">CONTINUE LEARNING</div><h2>Trusted learning links</h2>
        <p class="ict-section-intro">Office 2016 screens may differ from current online documentation. Use the curriculum version in class and treat these official resources as supplementary references.</p>
        <div class="ict-resource-grid">
          <a href="https://support.microsoft.com/office" target="_blank" rel="noopener noreferrer"><strong>Microsoft Support · Office</strong><span>Official help and how-to articles for Word, Excel, PowerPoint, and Access.</span><b>Open resource ↗</b></a>
          <a href="https://edu.gcfglobal.org/en/topics/office/" target="_blank" rel="noopener noreferrer"><strong>GCFGlobal · Office</strong><span>Beginner-friendly lessons on productivity applications and office tasks.</span><b>Open resource ↗</b></a>
          <a href="https://learn.microsoft.com/training/browse/?products=office" target="_blank" rel="noopener noreferrer"><strong>Microsoft Learn · Office</strong><span>Microsoft learning paths and training material for Office tools.</span><b>Open resource ↗</b></a>
          <a href="https://www.youtube.com/@LearnitTraining" target="_blank" rel="noopener noreferrer"><strong>Learnit Training · Video lessons</strong><span>Video tutorials for productivity applications; check the lesson version and date.</span><b>Open resource ↗</b></a>
        </div>
        <p class="ict-reference-note"><strong>Curriculum references:</strong> Microsoft Official Academic Course material aligned to the listed MOS Word, Excel, PowerPoint, and Access objectives; <em>Excel Macros for Dummies</em> by Michael Alexander; and Learnit Training, as listed in the supplied KP BT&amp;CE curriculum.</p>
      </section>
    </div>
  </section>`;
}

const networkModules = [
  {
    title: "Basic Network Terminologies",
    weeks: 2,
    hours: 12,
    introduction: "Learn the parts of a communication system, what a computer network is, and how physical and logical network scopes differ.",
    lessons: [
      {
        title: "The communication model",
        text: "Communication transfers a message from a source to a destination using a medium and shared rules. In a computer network, the host or sender creates data, a message carries it, media carries signals, protocols define how systems communicate, and a destination or receiver accepts the data.",
        points: ["Host/sender: an endpoint that originates a message, such as a computer or phone.", "Message: the data being exchanged, such as a web request or file.", "Media: the wired or wireless path that carries signals.", "Protocol: agreed rules for formatting, addressing, timing, and handling messages.", "Destination/receiver: the endpoint or service intended to receive the communication."]
      },
      {
        title: "Computer networks and why they are used",
        text: "A computer network is a group of connected devices that exchange information or share resources. Networks support communication, shared printers and files, centralized services, collaboration, and Internet access. A network's design depends on its size, performance needs, availability, budget, and security requirements."
      },
      {
        title: "Geographical network types",
        text: "Network labels often describe coverage, although actual boundaries depend on the organization and provider.",
        points: ["LAN (local area network): connects devices in a limited area such as a classroom, home, or building.", "MAN (metropolitan area network): interconnects networks across a city or metropolitan region.", "WAN (wide area network): connects networks across large geographic areas, often through carrier infrastructure.", "The Internet is a global interconnection of networks, not simply one large LAN."]
      },
      {
        title: "Physical and logical networks: VLANs and VPNs",
        text: "A physical network describes the actual devices and links. A logical network describes how traffic and membership are organized over that infrastructure. A VLAN (virtual LAN) segments a switched network into separate logical broadcast domains; devices in different VLANs generally need a router or Layer 3 switch to communicate. A VPN (virtual private network) creates an authenticated, encrypted tunnel across an untrusted network to a private network or service.",
        points: ["VLANs can improve organization and help isolate groups, but correct switch and routing configuration is essential.", "A VPN protects traffic between its endpoints but does not make an untrusted device or destination automatically safe.", "Only configure VLANs or VPNs on networks and accounts for which you have permission."]
      },
      {
        title: "How a network communication works",
        text: "An application creates data, transport and network functions add information needed to deliver it, and link/physical technologies carry it over a local connection. Network devices forward traffic toward its destination. The receiving system processes the data and returns a response when the application or protocol requires one. Names, addresses, routes, and protocols cooperate; no single cable or device performs every task."
      }
    ],
    practice: "Draw a labeled message path from a classroom computer to an online learning website. Mark sender, receiver, message, protocol, wired or wireless media, and the local network boundary."
  },
  {
    title: "Network Topologies",
    weeks: 2,
    hours: 12,
    introduction: "Compare the physical or logical arrangements of network devices and understand their trade-offs.",
    lessons: [
      {
        title: "What is a topology?",
        text: "A topology describes how nodes and links are arranged. Physical topology describes actual connections; logical topology describes how data flows. The chosen design affects cost, performance, fault isolation, scalability, and resilience."
      },
      {
        title: "Bus topology",
        text: "In a bus arrangement, devices share a common backbone. It uses less cable than some designs but a break or fault in the shared backbone can disrupt communication, and all devices contend for the shared medium. Traditional coaxial bus Ethernet is a legacy design rather than a typical modern LAN."
      },
      {
        title: "Star topology",
        text: "In a star, each endpoint connects to a central device such as a switch or access point. It is easy to add devices and isolate a single endpoint cable fault. If the central device or its uplink fails, the connected portion of the network can lose service. Switched Ethernet LANs commonly use a physical star."
      },
      {
        title: "Ring and mesh topologies",
        text: "A ring connects nodes in a loop; older ring systems may pass access in a controlled order. A mesh provides multiple paths between nodes, improving resilience but requiring more links and configuration. Full mesh links every node to every other node; partial mesh provides selected redundant paths."
      },
      {
        title: "Hybrid and wireless topologies",
        text: "A hybrid combines topology patterns, such as star-shaped classroom networks joined through a central distribution layer. Wi-Fi commonly uses access points to connect wireless clients to a LAN; mesh Wi-Fi nodes can extend coverage through wireless backhaul. Satellite, radio, or microwave links can connect distant locations when wired access is limited.",
        points: ["Wireless signals share a medium and can be affected by distance, obstacles, interference, and channel use.", "Satellite links can cover remote areas but may have higher latency, depending on orbit and service.", "Choose a topology for actual service goals, not just the number of devices."]
      }
    ],
    practice: "Use Packet Tracer or a drawing tool to model bus, star, ring, mesh, and hybrid arrangements. For each, predict what happens if one endpoint link or the central device fails."
  },
  {
    title: "Networking Devices",
    weeks: 2,
    hours: 12,
    introduction: "Identify network interface cards, modems, hubs, switches, wireless access points, and routers by their roles.",
    lessons: [
      {
        title: "Nodes and network interface cards",
        text: "A node is a device that participates in a network, such as a computer, printer, switch, or router. A network interface card (NIC) provides a wired or wireless interface for a host to connect. A NIC has link capabilities and a hardware address used on its local link; the host also uses network-layer addressing to communicate across networks."
      },
      {
        title: "Modems and access links",
        text: "A modem adapts signals for a particular access technology so a customer network can communicate over the provider's line. DSL, cable, and cellular systems use different access technologies. A modem is not necessarily a router, switch, or Wi-Fi access point, although consumer devices often combine several functions in one enclosure."
      },
      {
        title: "Hub and switch",
        text: "A hub repeats incoming signals to its other ports and does not intelligently forward traffic to a selected endpoint. An Ethernet switch learns source hardware addresses and forwards frames to the relevant port within a LAN. Hubs are legacy equipment; switches are used for most modern wired local networks.",
        points: ["A switch primarily connects devices within a LAN; a router forwards traffic between IP networks.", "Managed switches offer configuration features such as VLANs and management interfaces; exact capabilities depend on the model.", "A wireless switch/hub is an imprecise term; a wireless access point provides Wi-Fi connectivity and may be integrated with other equipment."]
      },
      {
        title: "Wireless access points and wireless NICs",
        text: "A wireless access point (AP) allows Wi-Fi clients to join a wireless LAN and commonly bridges them to a wired network. A wireless NIC, built in or external, gives a device a Wi-Fi interface. A USB Wi-Fi adapter may include an antenna; position and compatibility affect reception. Secure AP configuration uses current encryption, protected management, and authorized credentials."
      },
      {
        title: "Routers, switches, and the WAN",
        text: "A router connects IP networks and chooses where to forward packets based on routes. A home router often combines routing, NAT, DHCP, firewall functions, a switch, and Wi-Fi access point. A WAN connects networks across distance; the Internet is a global network of networks. Learn which function a device performs rather than relying on its product label."
      }
    ],
    practice: "Use device labels, diagrams, or a powered-down lab demonstration to identify a NIC, modem, hub, switch, AP, and router. Create a comparison chart with each device's purpose and typical network location."
  },
  {
    title: "Transmission Media",
    weeks: 3,
    hours: 18,
    introduction: "Compare guided copper and fiber media with wireless transmission, connectors, and common Ethernet naming.",
    lessons: [
      {
        title: "Guided and unguided media",
        text: "Guided media carries signals along a physical path such as copper wire or optical fiber. Unguided (wireless) media sends electromagnetic signals through space. Selection depends on distance, bandwidth, interference, environment, installation cost, and the equipment at each end."
      },
      {
        title: "Coaxial cable and BNC",
        text: "Coaxial cable has a central conductor, insulation, shielding, and an outer jacket. Older Ethernet specifications such as 10BASE2 and 10BASE5 used coaxial segments; these are historical technologies. 10BASE-T uses twisted-pair copper, while 100BASE-X is a family of Fast Ethernet physical-layer variants and may use copper or fiber depending on the variant. BNC is a connector used in some legacy coaxial systems and other equipment."
      },
      {
        title: "Twisted-pair copper, UTP, STP, and RJ-45",
        text: "Twisted-pair cable uses pairs of insulated copper conductors twisted together to reduce interference. UTP is unshielded twisted pair; STP adds shielding for environments where additional protection from interference is required and must be installed/grounded according to its design. Ethernet commonly uses eight-position modular connectors often called RJ-45 in everyday language (technically 8P8C in common Ethernet patch leads).",
        points: ["Cable categories specify performance characteristics; Cat 5e, Cat 6, and newer approved categories are more typical for modern Ethernet installations.", "Cat 2, Cat 3, and older Cat 4 references in historical curricula may have limited or legacy use; select cable to match current standards and device requirements.", "Use compatible connectors and a tested termination. Avoid sharp bends, crushed cable, and excessive untwist near the connector."]
      },
      {
        title: "Fiber-optic cable",
        text: "Fiber carries light through glass or plastic, supporting high bandwidth and long distances while resisting electromagnetic interference. Single-mode fiber uses a narrow light path and is suited to longer distances; multimode fiber supports multiple light paths and is commonly used for shorter building links. Fiber transceivers, connectors, and optical budgets must match the equipment and cable."
      },
      {
        title: "Wireless technologies",
        text: "Wireless links are useful where mobility, difficult cabling, or remote access makes a physical cable impractical. Wi-Fi connects local devices; Bluetooth connects nearby peripherals; microwave links can provide directional point-to-point connections; radio waves support different communication services; satellite links cover large areas. Each technology has its own range, capacity, interference, security, and licensing considerations."
      },
      {
        title: "Wireless LAN components",
        text: "A WLAN includes wireless clients with NICs and one or more access points, plus wired switching and routing as needed. A wireless access point or controller manages the wireless connection, while the wireless NIC sends and receives radio frames. Strong authentication, current encryption, sensible access-point placement, and updated firmware help protect the network."
      }
    ],
    practice: "Identify UTP, a twisted-pair connector, coaxial media, and fiber examples from approved lab samples. Compare their connectors, use cases, distance considerations, and handling precautions."
  },
  {
    title: "How Networks Transfer Data: OSI and TCP/IP Models",
    weeks: 3,
    hours: 18,
    introduction: "Use layered models to describe how application data is prepared, addressed, transported, and carried over network links.",
    lessons: [
      {
        title: "Why use network models?",
        text: "Layered models divide communication responsibilities into manageable parts. They help learners describe where addressing, forwarding, transport reliability, and physical signaling occur. Real implementations do not always align perfectly with a teaching diagram, but the models provide shared vocabulary for troubleshooting."
      },
      {
        title: "The seven OSI layers",
        text: "The OSI model is a conceptual seven-layer model. As data is sent, each layer provides services to the layer above and uses the layer below; receiving systems process the data in reverse.",
        points: ["7 Application: network services used by applications, such as web or file access.", "6 Presentation: data representation, encoding, compression, and encryption concepts.", "5 Session: establishment, coordination, and management of communication sessions.", "4 Transport: process-to-process delivery, segmentation, ports, and reliability or datagrams.", "3 Network: logical addressing and routing between networks.", "2 Data Link: local-link frames, hardware addressing, and link access.", "1 Physical: signals, bits, connectors, radio, and physical transmission."]
      },
      {
        title: "The TCP/IP model",
        text: "The Internet protocol suite is often taught as four layers: Application, Transport, Internet/Network, and Link/Network Access. It describes the practical protocol architecture used for Internet communication.",
        points: ["Application includes protocols and formats used by applications, such as HTTP, DNS, and email protocols.", "Transport commonly uses TCP or UDP to communicate between application processes.", "Internet/Network uses IP addressing and routing across networks.", "Link/Network Access describes local delivery over technologies such as Ethernet or Wi-Fi."]
      },
      {
        title: "Encapsulation and decapsulation",
        text: "As data moves down the sending stack, each layer adds control information such as ports, IP addresses, or link addresses. The link transmits a frame containing a packet; the receiver removes the relevant headers as data moves up the stack. Names such as segment, packet, frame, and bits describe data at different layers in common teaching models."
      },
      {
        title: "Apply the models to troubleshooting",
        text: "A layered approach tests from the local connection upward: is the cable or Wi-Fi link active, is local addressing configured, can the device reach its gateway, does name resolution work, and can the application connect? A visible symptom does not prove which layer failed, so gather evidence before changing configuration."
      }
    ],
    practice: "Trace opening an HTTPS web page through the TCP/IP layers and map each step to the closest OSI layer. Label sample information as application data, port, IP address, local frame, or physical signal."
  },
  {
    title: "IP Addresses",
    weeks: 2,
    hours: 12,
    introduction: "Understand how IP addresses identify interfaces, read IPv4 notation, recognize historical address classes, and explore IPv6.",
    lessons: [
      {
        title: "What an IP address does",
        text: "An Internet Protocol (IP) address is a logical address assigned to a network interface for communication at the network layer. A host uses its IP address and subnet prefix to determine whether a destination is local; traffic for a different network is normally sent to a configured default gateway. Addressing and routes allow packets to cross interconnected networks."
      },
      {
        title: "IPv4 addresses and prefixes",
        text: "IPv4 addresses are 32 bits, commonly written as four decimal octets separated by dots, for example 192.168.10.25. A subnet mask or prefix length identifies the network portion and host portion. `192.168.10.25/24` means the first 24 bits are the network prefix; in a simple IPv4 subnet, the all-zero host value identifies the network and the all-one host value is the broadcast address.",
        points: ["An address must be valid for its subnet and not conflict with another device.", "The subnet mask, default gateway, and DNS configuration have different purposes.", "Private IPv4 ranges commonly used in internal networks include 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16."]
      },
      {
        title: "Historical IPv4 classes",
        text: "Classful addressing historically grouped IPv4 addresses into Classes A, B, and C for unicast networks, Class D for multicast, and Class E for experimental or reserved use. The old classful boundaries are useful as history and for recognizing curriculum terminology; modern networks use classless inter-domain routing (CIDR) prefixes, not fixed A/B/C network boundaries.",
        points: ["Class A, B, and C were associated with different default network/host boundaries.", "Class D represents multicast space; Class E has special/experimental allocation history.", "Do not assign an address based only on its historical class; use the actual prefix and allocation plan."]
      },
      {
        title: "Why IPv6 was introduced",
        text: "IPv6 provides a much larger address space than IPv4, supporting continued growth of connected devices and improved modern network design. IPv6 addresses are 128 bits, written as hexadecimal groups separated by colons. Leading zeros within a group can be omitted, and one run of consecutive zero groups may be compressed with `::` once in an address.",
        points: ["IPv6 is not just a longer IPv4 address; it has different notation and operational features.", "Networks may run IPv4, IPv6, or both during transition.", "Check whether the device, router, and service support the same protocol when troubleshooting."]
      }
    ],
    practice: "Given the fictional lab address 192.168.10.25/24, identify the prefix, network address, and likely default gateway in the exercise plan. Compare it with the notation and length of an IPv6 address."
  },
  {
    title: "Network Protocols",
    weeks: 2,
    hours: 12,
    introduction: "Distinguish protocols that carry application data from protocols that help routers choose paths, and review TCP, UDP, FTP, and HTTPS.",
    lessons: [
      {
        title: "What is a protocol?",
        text: "A protocol is an agreed set of rules for exchanging information. Protocols specify such details as message structure, addressing, connection setup, timing, error handling, and security. Protocols can operate at different layers and commonly work together."
      },
      {
        title: "Routed protocols and routing protocols",
        text: "A routed protocol carries user or control traffic with logical addresses that routers can forward, such as IP. A routing protocol lets routers exchange reachability information and select routes. IP is not itself a routing protocol; routing protocols such as OSPF or BGP help routers learn paths according to their scope and design.",
        points: ["A static route is entered by an administrator; a dynamic routing protocol can update routes as network information changes.", "Routing choices depend on configuration, metrics, policy, and reachability.", "Do not configure routing on a production network without authorization."]
      },
      {
        title: "TCP and UDP",
        text: "TCP provides a connection-oriented byte stream with sequencing, acknowledgments, retransmission, and flow control. UDP sends datagrams with lower protocol overhead but does not itself guarantee delivery or order. Applications choose based on their needs; they may add reliability or timing behavior above UDP."
      },
      {
        title: "FTP and secure file transfer",
        text: "FTP is a file-transfer protocol with separate control and data connections in its traditional form. Classic FTP does not encrypt credentials or file contents. For sensitive transfers, use a secure, institution-approved method such as SFTP or FTPS when supported; these are distinct protocols and not simply encrypted FTP commands."
      },
      {
        title: "HTTPS",
        text: "HTTPS is HTTP carried over TLS, which helps authenticate the server and protect data in transit. Check the domain carefully before entering credentials. HTTPS does not prove that a site is honest, safe to buy from, or free of harmful content."
      },
      {
        title: "Protocols work together",
        text: "When a browser requests a secure page, DNS may resolve the site name, IP routes packets toward the server, TCP or another supported transport carries the connection, and TLS protects the HTTPS exchange. Ethernet or Wi-Fi carries data on the local link. A failure at one stage can prevent the entire application request."
      }
    ],
    practice: "Make a protocol comparison table for IP, TCP, UDP, FTP, HTTPS, and one routing protocol. Include its role, approximate layer, and one caution or use case."
  },
  {
    title: "Practical Networking and Packet Tracer",
    weeks: 4,
    hours: 24,
    introduction: "Practice cabling, device configuration, safe command-line troubleshooting, and simulated wired, switched, wireless, and routed networks.",
    lessons: [
      {
        title: "Set up a modem and DSL connection",
        text: "A DSL setup uses a provider line, compatible DSL modem, and customer equipment. Physical connections and account credentials vary by provider, so use the provider's instructions and instructor-approved lab profile. Many modern customer devices combine modem, router, switch, Wi-Fi, DHCP, and firewall functions.",
        points: ["Inspect power, line, DSL/synchronization, and network indicators against the device manual.", "Do not expose provider credentials or change service settings on a live institute connection.", "In a simulation, distinguish the modem/access link from the router and local switch."]
      },
      {
        title: "Identify networking hardware and cable tools",
        text: "Identify a NIC, RJ-45/8P8C Ethernet plug, RJ-11 telephone plug, UTP cable, crimping tool, and cable tester. Inspect connector pins, cable jacket, clip, and tester indicators before use. Do not use damaged tools or cables."
      },
      {
        title: "Make a straight-through Ethernet cable",
        text: "A straight-through cable uses the same pinout standard at both ends—commonly T568A at both ends or T568B at both ends. Traditional 10/100 Ethernet uses pairs on pins 1-2 and 3-6; modern gigabit links use all four pairs. Follow the instructor's selected wiring standard rather than mixing standards.",
        points: ["Measure and cut cable with a small service allowance; strip only enough jacket to expose pairs.", "Arrange conductors in the chosen T568A or T568B order, keep twists close to the termination, trim evenly, and insert fully into the plug.", "Crimp with the correct tool, then test continuity and pair order with a cable tester before connecting equipment.", "Connect a computer to a hub/switch in the lab and check link indicators."]
      },
      {
        title: "Make a crossover cable",
        text: "A traditional 10/100BASE-T crossover cable uses T568A on one end and T568B on the other to cross transmit and receive pairs. Some modern interfaces support Auto MDI-X and can connect devices using a straight-through cable; still learn the curriculum's crossover method and verify link requirements for the equipment.",
        points: ["Prepare the cable and terminate each end to the explicitly assigned standard.", "Test the resulting pair mapping with the cable tester.", "Connect two computers directly only in an isolated lab and configure compatible IP addresses; never connect a practice cable to an unauthorized network."]
      },
      {
        title: "Configure a small IP network",
        text: "Each device on the same IPv4 LAN needs a unique address in the correct subnet. A subnet mask or prefix defines the local network; a default gateway is used to reach other networks; DNS helps resolve host names. DHCP can provide settings automatically, while static settings are configured manually for a planned purpose.",
        points: ["For example, a simulator lab can use two hosts in 192.168.10.0/24 with unique host addresses and no gateway when only local communication is needed.", "Check for duplicate addresses and ensure every host uses a consistent subnet mask.", "Do not manually change live institute network settings; ask the network administrator."]
      },
      {
        title: "Use network troubleshooting commands",
        text: "Run only approved commands on a lab computer. These tools show configuration or test reachability; results require interpretation.",
        points: ["`ipconfig /all` displays Windows interface configuration, addresses, gateways, DNS, and adapter details.", "`ping <address-or-name>` tests reachability using ICMP when the destination/network permits it; a blocked ping does not always mean the service is down.", "`tracert <destination>` shows the network hops that respond along a route; some routers do not reply.", "`arp -a` displays the local ARP cache mapping IPv4 neighbors to link-layer addresses.", "`hostname` displays the computer's host name.", "`ipconfig /release` and `ipconfig /renew` release and request DHCP configuration; run only when authorized because they can interrupt connectivity."]
      },
      {
        title: "Build and configure Packet Tracer simulations",
        text: "Cisco Packet Tracer simulates network devices and traffic for learning. Use the institution-approved installer and classroom version. Place devices in a workspace, select appropriate links, configure interface addresses, and use simulation or real-time mode to observe traffic. Exact controls and supported device commands vary by version.",
        points: ["Start with two PCs connected through a switch; assign addresses in one subnet and test connectivity.", "Expand to two groups of ten PCs on hubs or simulated access devices, then connect segments through switches as required by the exercise.", "Configure switch names and management addresses only in the isolated simulation and follow the instructor's chosen commands.", "Attach a router to connect two different IP networks; configure each interface in the correct subnet and set host gateways.", "Use the simulation event list to observe ARP, ICMP, and forwarding behavior."]
      },
      {
        title: "Troubleshoot systematically",
        text: "Start with the simplest checks: power and physical link, correct interface and cable, IP address and mask, duplicate addressing, gateway for remote networks, and then route or application behavior. Make one change at a time, repeat the test, and record the observation. In a simulator, verify device ports and subnet configuration before changing router or switch commands."
      }
    ],
    practice: "Build a Packet Tracer LAN of two PCs connected through a switch, assign addresses in one /24 subnet, and verify ping. Expand it into two groups of ten PCs, connect the switches, add a second IP network and router, configure gateways, and document successful and failed tests."
  }
];

const networkPracticalLabs = [
  {
    title: "Identify network hardware and media",
    steps: ["Examine an instructor-provided NIC, RJ-45/8P8C and RJ-11 connectors, Cat 5e or higher UTP, crimping tool, cable tester, switch, router, modem, and access point.", "Match each component to its function and identify ports and link indicators.", "Record safety and handling rules; do not open powered equipment or handle exposed fiber ends."]
  },
  {
    title: "Configure a modem/DSL lab connection",
    steps: ["Use a disconnected training setup or Packet Tracer model, not the live institute router.", "Follow the device/provider lab sheet to connect the DSL line, modem, router, and client ports.", "Check power, line/synchronization, and Ethernet link indicators against the manual.", "Record the device roles and assigned settings; do not publish service credentials."]
  },
  {
    title: "Terminate and test a straight-through cable",
    steps: ["Select one wiring scheme (T568A or T568B) and prepare both cable ends to use that same scheme.", "Cut the cable square, strip only the necessary jacket, untwist and arrange the conductors in standard order, trim evenly, and insert them fully into the plug.", "Crimp with the correct tool and inspect that the jacket is retained and conductors reach the plug contacts.", "Test all conductors and pair order with a cable tester before connection.", "Connect a lab PC to a hub/switch and confirm a link; do not force connectors into ports."]
  },
  {
    title: "Terminate and test a crossover cable",
    steps: ["Prepare the first end using T568A and the second end using T568B, as assigned by the instructor.", "Crimp both ends, then verify the crossover pair mapping with a cable tester.", "Connect two lab PCs directly only when their interfaces and lab exercise call for it; modern Auto MDI-X equipment may also work with a straight-through cable.", "Assign unique addresses in one subnet and test link and local reachability."]
  },
  {
    title: "Connect PCs through hubs and switches",
    steps: ["Connect lab computers to separate hub or switch ports using tested patch leads.", "Observe link/activity indicators and record which devices share a physical segment or switch.", "Configure assigned addresses in the same subnet and test host-to-host connectivity.", "Disconnect one test link with permission and note the impact; restore it when done."]
  },
  {
    title: "Practice safe network diagnostic commands",
    steps: ["Run `hostname` and record the lab computer name.", "Run `ipconfig /all` and identify the adapter, IPv4 address, subnet mask, gateway, and DNS values.", "Use `ping` to test the assigned local gateway or simulator host, then use `tracert` for an instructor-approved destination.", "Run `arp -a` and identify entries learned on the local link.", "Run `ipconfig /release` and `ipconfig /renew` only on an isolated DHCP lab device with instructor permission; restore service and document the result."]
  },
  {
    title: "Build a two-computer Packet Tracer network",
    steps: ["Open the approved Packet Tracer version and place two PCs and a switch in the workspace.", "Connect each PC to a switch port with an appropriate simulated Ethernet link.", "Assign two unique addresses such as 192.168.10.10/24 and 192.168.10.11/24; no gateway is needed for this same-subnet test.", "Check interface state and addressing, then ping from one PC to the other.", "Use Simulation mode to observe ARP and ICMP events and explain the result."]
  },
  {
    title: "Create a ten-PC topology and manage switches",
    steps: ["Place ten simulated PCs and a hub or switch, connect each PC, and assign unique addresses in the planned subnet.", "Repeat to create a second group of ten PCs on a separate switch/hub segment.", "Connect the two access devices as directed, using the appropriate simulated link or an intermediate switch.", "Give each simulated switch the instructor-assigned name and management IP in the correct management subnet.", "Ping between hosts and record how the topology and device configuration affect traffic."]
  },
  {
    title: "Connect two networks with a router",
    steps: ["Create two distinct IPv4 subnets with one router interface assigned to each network.", "Assign each host a unique address and the correct subnet mask; set its default gateway to the router interface on its local subnet.", "Configure the simulator router interfaces according to the instructor's commands and enable them where required.", "Test local host-to-gateway reachability first, then test communication between subnets.", "Use the event list or route display to explain why a router is needed."]
  },
  {
    title: "Simulate a wireless LAN",
    steps: ["Place an access point or wireless router and two wireless clients in the simulator.", "Set the instructor-provided network name and security settings; never reuse a personal password.", "Connect clients, verify their IP configuration, and ping another permitted client or gateway.", "Change a simulated signal or configuration condition and observe the effect, then restore the assigned settings."]
  },
  {
    title: "Troubleshoot and document a network scenario",
    steps: ["Record the expected topology, addresses, subnet masks, and gateways before testing.", "Check physical/link status, then host configuration, then local gateway, then remote network, and finally application/name resolution as assigned.", "Use one relevant command or simulator event at a time and capture the observed output.", "Make one approved correction, repeat the test, and report the cause, fix, and verification."]
  }
];

function renderNetworkNotes(courseUrl) {
  const moduleNavigation = networkModules.map((module, index) =>
    `<a href="#network-module-${index + 1}"><span>${String(index + 1).padStart(2, "0")}</span>${module.title}</a>`
  ).join("");
  const modules = networkModules.map((module, index) => `
    <details class="ict-module" id="network-module-${index + 1}" ${index === 0 ? "open" : ""}>
      <summary><span class="ict-module-number">MODULE ${String(index + 1).padStart(2, "0")}</span><span class="ict-module-title">${module.title}</span><span class="ict-module-meta">${module.weeks} ${module.weeks === 1 ? "week" : "weeks"} · ${module.hours} hours</span></summary>
      <div class="ict-module-content">
        <p class="ict-module-intro">${module.introduction}</p>
        ${module.lessons.map((lesson) => `<section class="ict-lesson"><h3>${lesson.title}</h3><p>${lesson.text}</p>${lesson.points ? `<ul>${lesson.points.map((point) => `<li>${point}</li>`).join("")}</ul>` : ""}</section>`).join("")}
        <div class="ict-practice"><strong>Practice task</strong><p>${module.practice}</p></div>
      </div>
    </details>
  `).join("");
  const labs = networkPracticalLabs.map((lab, index) => `
    <details class="ict-lab">
      <summary><span>${String(index + 1).padStart(2, "0")}</span>${lab.title}</summary>
      <ol>${lab.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
    </details>
  `).join("");

  return `<section class="ict-notes-layout dit-page-width" aria-label="Computer Networks course notes">
    <aside class="ict-notes-nav">
      <div class="ict-notes-nav-label">COURSE CONTENTS</div>
      <nav aria-label="Computer Networks modules">${moduleNavigation}<a href="#network-practical-labs"><span>LAB</span>Practical lab guide</a><a href="#network-learning-links"><span>LINK</span>Learning links</a></nav>
      <a class="ict-notes-back" href="${courseUrl}">← All DIT subjects</a>
    </aside>
    <div class="ict-notes-main">
      <section class="ict-learning-outcomes">
        <div class="dit-eyebrow">HOW TO USE THESE NOTES</div>
        <h2>Connect, configure, and troubleshoot.</h2>
        <p>Progress through the network concepts, then practice with cables and isolated simulations. Do not modify institute or public network equipment; perform physical termination and device configuration under instructor supervision.</p>
        <div class="ict-outcome-grid"><div><strong>01</strong><span>Explain communication, network scopes, and topologies.</span></div><div><strong>02</strong><span>Identify networking devices, connectors, and transmission media.</span></div><div><strong>03</strong><span>Describe OSI, TCP/IP, addressing, and common protocols.</span></div><div><strong>04</strong><span>Build and troubleshoot LANs in a supervised lab and simulator.</span></div></div>
        <p class="ict-curriculum-note">Aligned to the KP BT&CE DIT Curriculum Revised 2022: Part I · 20 weeks · 120 contact hours (40 theory, 80 practical).</p>
      </section>
      <section class="ict-module-list" aria-label="Computer Networks learning modules">${modules}</section>
      ${renderSupplementaryNotes("computer-networks")}
      <section class="ict-labs-section" id="network-practical-labs">
        <div class="dit-eyebrow">HANDS-ON LEARNING</div><h2>Practical lab guide</h2>
        <p class="ict-section-intro">Use tested equipment and the institute's isolated network simulator. Avoid reconfiguring shared networks and run commands that may interrupt connectivity only with instructor approval.</p>
        <div class="ict-lab-list">${labs}</div>
      </section>
      <section class="ict-links-section" id="network-learning-links">
        <div class="dit-eyebrow">CONTINUE LEARNING</div><h2>Trusted learning links</h2>
        <p class="ict-section-intro">External resources open in a new tab. Use official installation channels and only practice configurations in a permitted lab environment.</p>
        <div class="ict-resource-grid">
          <a href="https://www.netacad.com/courses/packet-tracer" target="_blank" rel="noopener noreferrer"><strong>Cisco Networking Academy · Packet Tracer</strong><span>Official learning and access information for Cisco Packet Tracer simulation.</span><b>Open resource ↗</b></a>
          <a href="https://www.cisco.com/c/en/us/solutions/enterprise-networks/what-is-computer-networking.html" target="_blank" rel="noopener noreferrer"><strong>Cisco · Networking basics</strong><span>Introductory explanations of network concepts, types, devices, and architecture.</span><b>Open resource ↗</b></a>
          <a href="https://www.cloudflare.com/learning/network-layer/what-is-a-computer-network/" target="_blank" rel="noopener noreferrer"><strong>Cloudflare Learning Center · Networks</strong><span>Plain-language network explanations and related Internet concepts.</span><b>Open resource ↗</b></a>
          <a href="https://learn.microsoft.com/windows-server/administration/windows-commands/ipconfig" target="_blank" rel="noopener noreferrer"><strong>Microsoft Learn · ipconfig</strong><span>Official Windows documentation for viewing and renewing IP configuration.</span><b>Open resource ↗</b></a>
        </div>
        <p class="ict-reference-note"><strong>Curriculum reference:</strong> <em>Networking Essentials</em> by Andrew Tanenbaum and Cisco Packet Tracer tutorial resources, as listed in the supplied KP BT&amp;CE curriculum. Use your instructor's current lab procedures and approved software version.</p>
      </section>
    </div>
  </section>`;
}

const remainingDitGuides = {
  "operating-systems": {
    outcomes: "Understand operating-system types, functions, processes, Windows setup, device configuration, local sharing, and basic server roles.",
    modules: [
      { title: "Operating-System Overview", weeks: 2, hours: 12, introduction: "Learn what an operating system does and compare desktop, mobile, and specialized OS types.", lessons: [
        { title: "Purpose of an operating system", text: "An operating system coordinates hardware, applications, and users. It provides an interface, starts programs, manages memory and files, controls devices, supports security, and handles common errors. A computer's firmware starts first and then loads the OS." },
        { title: "Batch, multiprogramming, and multitasking systems", text: "A batch system processes submitted jobs with little interaction during execution. Multiprogramming keeps several programs ready so the processor can work on another when one waits for input/output. Multitasking shares processor time among tasks to provide responsive concurrent use." },
        { title: "Multiprocessing, time-sharing, and real-time systems", text: "Multiprocessing uses multiple processors or cores to execute work in parallel. Time-sharing gives multiple users or processes turns of processor time. A real-time operating system is designed to respond within defined timing constraints; correctness can depend on meeting a deadline." },
        { title: "Network and distributed operating systems", text: "A network OS provides services and controls for connected computers, such as shared authentication or files. A distributed system coordinates multiple computers so users can access a combined service; its components remain separate machines connected by a network." },
        { title: "Desktop and mobile operating systems", text: "Desktop operating systems support general-purpose personal computers. Mobile and tablet systems are designed for touch, wireless connectivity, power management, and application permissions. Android is an operating-system platform based on the Linux kernel; iOS is Apple's mobile operating system. Version upgrades add features and security fixes, but availability depends on device and vendor support." }
      ], practice: "Make a comparison chart of batch, multitasking, real-time, network, distributed, desktop, Android, and iOS systems. Identify an appropriate use for each." },
      { title: "Operating-System Functions and Structure", weeks: 2, hours: 12, introduction: "Explore the user interface and the core resource-management responsibilities of an operating system.", lessons: [
        { title: "Operating-system structures and user interface", text: "An OS uses internal components and services to receive user requests and communicate with hardware. A graphical user interface provides windows, icons, menus, and pointers; a command-line interface accepts typed commands. Both are ways to request OS services, and command permissions still apply." },
        { title: "Memory and process management", text: "Memory management tracks which parts of RAM are in use and allocates memory to processes. Process management creates, schedules, pauses, resumes, and ends running programs. Virtual memory can extend the address space using storage, but storage is slower than RAM." },
        { title: "Resource and file management", text: "The OS allocates processor time, memory, storage, and devices among programs. A file system organizes data into files and directories, records metadata, and enforces permissions. Removable drives should be safely ejected to reduce risk of incomplete writes." },
        { title: "Security, coordination, and deadlocks", text: "Security uses accounts, permissions, authentication, updates, and isolation to protect resources. The OS coordinates users and applications that compete for shared devices. A deadlock occurs when processes wait indefinitely for resources held by one another; prevention and recovery depend on system design." }
      ], practice: "Use Task Manager and Resource Monitor (or the available system tools) to identify running processes and resource use. Explain why ending an unfamiliar system process may be unsafe." },
      { title: "Processes and Threads", weeks: 2, hours: 12, introduction: "Describe how an operating system tracks and schedules work.", lessons: [
        { title: "Program, process, and thread", text: "A program is stored instructions; a process is a running instance with allocated resources and execution state. A thread is a smaller execution path within a process. Threads in one process typically share its address space, while separate processes are isolated from one another." },
        { title: "Five-state process model", text: "A common teaching model uses New, Ready, Running, Waiting/Blocked, and Terminated states. A process moves from New to Ready when admitted, to Running when scheduled, to Waiting when it needs an event or I/O, back to Ready when that event completes, and to Terminated when it finishes." },
        { title: "Process Control Block", text: "The Process Control Block (PCB) is a data structure used by an OS to track a process. It can include process identity and state, program counter, CPU registers, scheduling information, memory-management details, open resources, and accounting/security information. A context switch saves and restores relevant state." },
        { title: "Process operations and scheduling", text: "Operating systems create, schedule, suspend, resume, and terminate processes. Scheduling selects which ready process uses the processor. Priorities and time slices affect responsiveness; a process waiting for disk or network input may not be able to make progress until that operation completes." }
      ], practice: "Draw the five process states and label typical transitions. Observe a permitted application changing from running to waiting and back while opening a file." },
      { title: "Windows 10 Installation and Desktop Configuration", weeks: 7, hours: 42, introduction: "Practice installation and configuration only in an instructor-approved virtual machine or designated lab computer.", lessons: [
        { title: "Plan the installation and prepare boot media", text: "Check the computer's compatibility, backup requirements, license, and approved Windows image before installation. Bootable USB/DVD media starts an installer. Rufus is one utility that can prepare USB media from an authorized image; use it only under instructor direction. Confirm the target device carefully because installation can erase data." },
        { title: "BIOS/UEFI setup and installation steps", text: "Firmware settings can show system date/time and boot order. Boot priority determines whether the computer starts from internal storage, USB, or network. In a lab image, start from approved installation media, select language and edition as instructed, choose only the assigned virtual disk or disposable lab drive, create required partitions, and complete setup with the assigned user and computer name." },
        { title: "Partitions and first-start setup", text: "A partition is a logical region of a physical storage device. Installer partition choices determine where the OS and files are stored. Formatting or deleting a partition destroys data; never do this on an unverified target. After setup, verify the OS starts, display and network work, time is correct, and assigned updates are applied." },
        { title: "Desktop, Start menu, taskbar, settings, and virtual desktops", text: "The desktop provides shortcuts and windows; the Start menu lists applications and power options; the taskbar switches between open applications. Settings and Control Panel provide configuration tools. Tablet mode adapts interaction to touch where supported. Virtual desktops separate workspaces but do not create separate user accounts or isolate data." },
        { title: "Drivers, peripherals, and software", text: "A device driver lets the operating system communicate with hardware. Obtain drivers from Windows Update, the device maker, or institution-approved sources and match the exact model and OS. Install software from trusted sources with authorization, then uninstall through the normal Apps or Programs settings rather than deleting program folders." },
        { title: "Accounts, roles, permissions, and network settings", text: "A user account identifies a person or service. Administrators can make system-level changes; standard users have fewer privileges and are safer for everyday work. Set only assigned permissions. Join a workgroup and configure DSL or a hotspot using the authorized lab profile; protect credentials and do not change shared network settings." },
        { title: "Updates, security, language, and peripherals", text: "Keep Windows and supported applications updated, use built-in security protections, and configure mouse, keyboard, and Urdu input methods as required. Install and test printers and scanners with the correct driver and permissions. Verify a scanner by saving a non-sensitive sample image." }
      ], practice: "In a disposable virtual machine, install the instructor-provided Windows image; record partition choices, create a practice user, set display and keyboard options, install a simulated/approved driver, check updates, and document a restore point or backup plan." },
      { title: "Network Connectivity and Sharing", weeks: 3, hours: 18, introduction: "Connect computers in a controlled workgroup and learn how addresses, shares, and permissions work together.", lessons: [
        { title: "Workgroups and local network profiles", text: "A workgroup is a simple way to identify peer computers on a local network; it is not a centralized identity service. Devices still need network connectivity, compatible discovery/sharing settings, and authorized accounts. Public network profiles should use stricter discovery and sharing settings than trusted private lab networks." },
        { title: "Assign an IP address to a network interface", text: "A network interface may receive its IP configuration from DHCP or use a planned static address. A static configuration requires a unique address, correct prefix/subnet mask, and usually a valid gateway and DNS settings. On a live institute network, use DHCP or the administrator's assigned settings; do not invent an address." },
        { title: "Share folders, printers, and permissions", text: "File and printer sharing exposes selected resources to other users. Share only a dedicated practice folder, grant the minimum required permissions, and test access from an authorized peer account. Sharing permissions and file-system permissions may both apply; the effective access is constrained by both." },
        { title: "Verify and remove access", text: "Test access with a second authorized computer, confirm only intended files are visible, then remove the share when the exercise ends. Never share personal documents, credentials, or institute records as practice material." }
      ], practice: "Use two isolated lab computers or a simulator: assign planned addresses, share a folder containing a disposable text file, access it using an authorized account, then remove the share and record the result." },
      { title: "Windows Server and Network Services", weeks: 4, hours: 24, introduction: "Compare client and server systems and understand selected Windows Server roles in an isolated lab.", lessons: [
        { title: "Client versus server", text: "A client requests services; a server provides services to clients. The same computer can play different roles, but server operating systems and hardware are configured for centralized, multi-user workloads, availability, and administration." },
        { title: "Roles and services", text: "A server role is a set of capabilities installed to provide a service. Plan roles, network addressing, accounts, backups, and security before deployment; use only an instructor-provided Windows Server 2016/2019 image in a closed lab." },
        { title: "Active Directory Domain Services", text: "Active Directory Domain Services (AD DS) provides centralized directory identities, computers, groups, and policy in a Windows domain. Domain controllers require careful DNS, time, backup, and administrator configuration. Do not promote or connect an unapproved server to a production network." },
        { title: "DHCP, DNS, WINS, and print services", text: "DHCP leases IP settings to clients from a configured scope. DNS maps names to network records and is essential to many services. WINS is a legacy name-resolution service for NetBIOS networks. Print and Document Services centralizes printer queues and sharing. Learn the purpose first; configure each role only in an isolated test environment." }
      ], practice: "Draw a small domain lab with one server and two clients. Label DHCP, DNS, directory, and print roles; in the approved virtual lab, observe a client receiving an address and resolving a test host name." }
    ],
    labs: [
      { title: "Inspect BIOS/UEFI and boot order", steps: ["Use only an instructor-designated computer and get permission before entering firmware setup.", "Observe date/time and boot-device priority without changing settings.", "Record the configured priority and exit without saving changes unless instructed."] },
      { title: "Create approved installation media", steps: ["Verify the official instructor-provided Windows image and target USB drive.", "Confirm the USB contains no needed files; creating boot media erases it.", "Use the approved tool and settings, wait for completion, then verify the media is listed as bootable."] },
      { title: "Install Windows in a virtual machine", steps: ["Start the provided VM from the approved image and follow the lab worksheet.", "Select only the disposable virtual disk; demonstrate partitioning only in that VM.", "Set the assigned computer/user name, finish setup, install approved drivers, and verify desktop, display, and network.", "Capture the configuration and revert to the clean snapshot when the instructor requests."] },
      { title: "Configure accounts, desktop, and Urdu keyboard", steps: ["Create a lab-only standard account as instructed and compare its permissions with the administrator account.", "Change desktop/taskbar settings and create a virtual desktop; switch between desktops.", "Add the approved Urdu language/keyboard, type a short test, and verify layout."] },
      { title: "Install and share a printer or scanner", steps: ["Install an approved driver for a lab device and confirm its model and connection.", "Print a single test page only with permission; scan a blank or non-sensitive sample.", "For sharing, publish the printer only on the isolated network and test access from an authorized peer.", "Remove the share or test device after recording results."] },
      { title: "Configure an isolated workgroup file share", steps: ["Connect two lab VMs to the isolated classroom network and use the assigned addresses.", "Create a folder containing only a disposable test file and grant minimum read/write access to the assigned test user.", "Access the share from the peer VM, verify expected permissions, then disable sharing."] },
      { title: "Explore Windows security and backup", steps: ["Check Windows Update and built-in security status without disabling protection.", "Back up a disposable practice file to an approved lab destination and restore it to a separate folder.", "Describe how to recover an account through approved administrative procedures; do not bypass passwords or access another person's files."] },
      { title: "Observe server services in a closed lab", steps: ["Open only the preconfigured server VM supplied by the instructor.", "Identify the server role dashboard and observe AD DS, DNS, DHCP, and print-service roles if installed.", "Check a lab client address lease and test resolving the assigned lab hostname.", "Do not attach the VM to an institute production network or change domain settings without explicit instruction."] }
    ],
    links: [["Microsoft Learn · Windows", "Official Windows support, settings, installation, accounts, and security guidance.", "https://support.microsoft.com/windows"], ["Microsoft Learn · Windows Server", "Documentation for Windows Server roles, Active Directory, DNS, and DHCP.", "https://learn.microsoft.com/windows-server/"], ["Microsoft Learn · Windows commands", "Reference for supported Windows command-line tools.", "https://learn.microsoft.com/windows-server/administration/windows-commands/windows-commands"]]
  },
  "programming": {
    outcomes: "Write beginner Python scripts using variables, operators, strings, lists, decisions, loops, functions, Turtle graphics, and introductory libraries.",
    modules: [
      { title: "Introduction to Programming", weeks: 2, hours: 12, introduction: "Learn what a program is and how algorithms and programming languages turn problems into computer instructions.", lessons: [
        { title: "Programs and programming languages", text: "A program is a set of instructions a computer can execute. Machine language consists of processor-specific binary instructions; assembly language uses symbolic instructions; high-level languages express solutions in forms more convenient for people and are translated or interpreted for execution." },
        { title: "Algorithms and problem solving", text: "An algorithm is a finite, ordered set of steps that solves a problem. Define inputs, expected outputs, constraints, and edge cases before coding. Use pseudocode or a flowchart to plan the logic, then test the plan with sample values." },
        { title: "Compiler versus interpreter", text: "A compiler translates source code into another form, often machine code, before execution. An interpreter executes instructions through a runtime. Many languages use a combination; Python typically compiles source to bytecode and executes it on a virtual machine. The distinction is useful, but actual implementations can be more nuanced." },
        { title: "Python and its history", text: "Python is a high-level general-purpose language designed for readable code. It is used in automation, data tasks, web applications, education, and scripting. The first public release was in 1991; modern Python versions continue to evolve. Prefer actively supported versions compatible with your course." }
      ], practice: "Write an algorithm in plain language to calculate an average from three monthly electricity bills, then identify the required input and output." },
      { title: "Getting Started with Python", weeks: 2, hours: 12, introduction: "Set up an editor/interpreter, write and run a first script, and understand common errors.", lessons: [
        { title: "Install Python and an editor", text: "Install Python from the official Python website or the institute's approved distribution. PyCharm Community is an editor/IDE option; VS Code and other editors are also used. Confirm Python launches from the terminal and that the editor is configured to use the intended interpreter." },
        { title: "Anatomy of a Python program", text: "A Python script contains statements and expressions. Indentation defines code blocks; consistent four-space indentation is the common style. Comments beginning with # explain intent for human readers and are ignored by the interpreter." },
        { title: "Hello World and running scripts", text: "Create a file ending in .py and add a print call such as print('Hello, world!'). Save the file, run it using the editor or Python command, and check the output. Use clear file names and save source files in a course folder." },
        { title: "Syntax, runtime, and logic errors", text: "A syntax error means code violates language grammar and cannot be parsed. A runtime error occurs during execution, such as converting invalid text to an integer. A logical error runs but produces an incorrect answer. Read the traceback from the bottom for the error and inspect the referenced line." }
      ], practice: "Create and run a Hello World script, then intentionally correct one syntax error, one invalid input/runtime error, and one wrong calculation." },
      { title: "Variables, Types, and Operators", weeks: 2, hours: 12, introduction: "Store values in variables, inspect data types, convert input safely, and calculate with operators.", lessons: [
        { title: "Variables and assignment", text: "A variable name refers to a value. Assign with =, for example count = 3. Names are case-sensitive, should describe their purpose, cannot start with a digit, and must not be Python keywords. Use lowercase words with underscores by convention." },
        { title: "Multiple assignments and type()", text: "Python can assign several names in one statement, such as width, height = 5, 8, or assign the same value to several names. The built-in type() function helps inspect a value's type while learning. Common basic types include int, float, str, and bool." },
        { title: "Arithmetic operators", text: "Use + for addition, - for subtraction, * for multiplication, / for division, and ** for exponentiation. Parentheses clarify order; division produces a floating-point result. Avoid using a variable name that hides a built-in such as sum or list." },
        { title: "Type conversion and casting", text: "Input from input() is text. Convert numeric input with int() or float() before arithmetic and convert values to str() for text output. Conversion can raise ValueError if text is not numeric, so validate inputs or handle expected errors." },
        { title: "Boolean, comparison, and logical operators", text: "Comparisons such as ==, !=, <, <=, >, and >= produce Boolean True or False. Logical and, or, and not combine or reverse conditions. Use == to compare values; a single = assigns a value." }
      ], practice: "Ask for a circle radius, convert it to a number, calculate area using 3.14159 * radius ** 2, and print a labeled result. Test zero, decimal, and invalid text." },
      { title: "Strings", weeks: 2, hours: 12, introduction: "Work with text values, combine or repeat strings, and use built-in string methods.", lessons: [
        { title: "Create and access strings", text: "A string stores text between matching single or double quotes. Strings are sequences and immutable: a method returns a new string rather than changing the original. Use quotes consistently and escape special characters when needed." },
        { title: "Concatenation and repetition", text: "The + operator joins strings; the * operator repeats a string a specified number of times. Convert numbers to strings or use formatted strings when including numeric values in a message." },
        { title: "Length, case, and whitespace", text: "len(text) returns the number of characters. capitalize(), lower(), and upper() return case-adjusted strings. strip() removes leading and trailing whitespace; lstrip() and rstrip() affect one side." },
        { title: "Replace, startswith, and endswith", text: "replace(old, new) returns text with matching content replaced. startswith(prefix) and endswith(suffix) return Boolean results. Methods are case-sensitive unless you normalize text first." },
        { title: "Searching and splitting", text: "Use in or find() to check whether text contains a substring. split(separator) divides text into a list, such as splitting a hyphen-separated phrase. Count letters, digits, or symbols by inspecting each character with methods such as isalpha(), isdigit(), and isalnum()." }
      ], practice: "Clean a sentence with strip(), normalize it with lower(), find all case-insensitive occurrences of a name, and split a hyphen-separated phrase into parts." },
      { title: "Lists", weeks: 2, hours: 12, introduction: "Use lists to store ordered collections, access positions, update contents, and test membership.", lessons: [
        { title: "Create and index lists", text: "A list uses square brackets and can contain values. Indexing starts at zero; negative indexes count from the end. A list can hold different types, but consistent types often make processing clearer." },
        { title: "Change, add, and remove elements", text: "Lists are mutable. Assign to an index to replace a value; append() adds one item; extend() adds items from another sequence; insert() adds at a position. remove() deletes the first matching value; pop() removes and returns an item. Check indexes and membership before changing data." },
        { title: "Slice a list", text: "A slice such as items[start:stop] returns elements from the start index up to, but not including, stop. Omitted bounds use the beginning or end; a negative step can reverse a sequence. Slicing creates a new list for a list input." },
        { title: "Membership and iteration", text: "Use in to test whether an item appears and not in for the opposite. A for loop can visit each item in order. Avoid naming a variable list because it shadows Python's list type." },
        { title: "List copying and transformations", text: "Assignment creates another reference to the same list, not a separate copy. Use list(items) or items.copy() for a shallow copy. A loop or comprehension can transform values, such as squaring numeric elements; validate data before performing numeric operations." }
      ], practice: "Collect five fruit names, display them, print the list in reverse order, create a separate copy, square a numeric list, and replace a target value only if it is present." },
      { title: "Conditional Statements", weeks: 2, hours: 12, introduction: "Select actions based on Boolean conditions using if, elif, and else.", lessons: [
        { title: "if and else", text: "An if statement executes an indented block when its condition is true. An else block runs when the condition is false. Use a colon after the condition and indent the block consistently." },
        { title: "elif and decision order", text: "elif means 'else if' and checks another condition when earlier tests were false. Python takes the first true branch, so order ranges from narrow or highest-priority conditions to broader conditions." },
        { title: "Validate numeric ranges", text: "Convert input to a number, then validate it before applying business rules. Separate invalid input from valid categories so a score outside the expected range is not accidentally assigned a grade." },
        { title: "Combine conditions", text: "Use and when every condition must be true, or when at least one must be true, and not to reverse a condition. Parentheses can make complicated conditions easier to read." }
      ], practice: "Ask for a score from 1 to 100, reject out-of-range values, and assign Average (1-50), Good (51-70), or Excellent (71-100)." },
      { title: "Loops", weeks: 2, hours: 12, introduction: "Repeat actions with for and while loops, control iteration, and avoid infinite loops.", lessons: [
        { title: "for loops and range()", text: "A for loop visits each item in an iterable. range(stop) generates integer values up to but not including stop. Use range(1, 11) for the first ten positive integers. A loop variable receives the current value on each iteration." },
        { title: "while loops", text: "A while loop repeats while its condition remains true. Update the state used in the condition so the loop can finish. Test termination carefully to avoid an infinite loop." },
        { title: "break and continue", text: "break exits the nearest loop; continue skips the rest of the current iteration and proceeds to the next. Use them sparingly so the loop's control flow remains understandable." },
        { title: "Loop patterns", text: "Common patterns include accumulating a total, counting matches, validating repeated input, and creating a multiplication table. Factorial of a non-negative integer n is the product of integers 1 through n; define 0! as 1." }
      ], practice: "Print the first ten natural numbers with both loop types, calculate a sum from 1 through n and factorial n, and display a multiplication table." },
      { title: "Functions", weeks: 2, hours: 12, introduction: "Create reusable functions, distinguish printing from returning, and understand local scope and default parameters.", lessons: [
        { title: "Define and call functions", text: "A function groups reusable statements under a name. Define it with def, parameters in parentheses, a colon, and an indented body. Call it with arguments that match its expected inputs." },
        { title: "print versus return", text: "print() displays information for a person; return sends a result back to the caller. A function that calculates a sum should generally return the value so other code can use it." },
        { title: "Scope", text: "A variable created inside a function is local to that call unless returned or otherwise deliberately shared. Pass required values as parameters rather than relying on hidden global state." },
        { title: "Default arguments and multiple results", text: "A parameter can have a default value, allowing callers to omit it. Python can return multiple values as a tuple, which may be unpacked by the caller. Keep functions focused and name outputs clearly." },
        { title: "Test functions", text: "Test normal values, boundary cases, and invalid inputs. Small pure functions are easier to test because the same inputs produce the same outputs and they do not unexpectedly alter external state." }
      ], practice: "Write and test functions that return the sum of two numbers, return a list from provided values, return multiple related results, and calculate factorial." },
      { title: "Turtle Graphics and Useful Libraries", weeks: 4, hours: 24, introduction: "Use Turtle to draw basic shapes and explore libraries named in the syllabus.", lessons: [
        { title: "Turtle basics and coordinate movement", text: "The turtle module provides a visual cursor on a drawing canvas. forward(distance) and backward(distance) move it; left(angle) and right(angle) rotate it. Pen controls can lift or lower the pen and change color or width." },
        { title: "Draw lines and shapes", text: "A square uses four equal sides and four 90-degree turns. A rectangle alternates two side lengths with 90-degree turns. A circle can be drawn with circle(radius). A regular star can be drawn by repeating a side and a consistent turning angle." },
        { title: "Read and write Excel data with pandas", text: "pandas is a third-party Python library for tabular data. Install it only in an approved environment and import it explicitly. read_excel() loads a spreadsheet into a DataFrame when a compatible Excel reader is installed; to_excel() writes a DataFrame to a workbook file. Verify file paths, sheet names, column types, and privacy before processing real data." },
        { title: "Explore related libraries and tools", text: "NumPy supports numerical arrays and scientific calculations; Matplotlib creates charts; Tkinter provides a standard GUI toolkit; Django is a Python web framework; MicroPython targets microcontrollers; and Pygame supports games and multimedia. Kotlin is a separate programming language, not a Python library. Choose a tool based on project requirements and its supported ecosystem." },
        { title: "Project workflow and safe dependencies", text: "Create a separate project folder, use a supported Python version, document dependencies, and avoid installing unknown packages. Test on sample files, keep backups, and do not include credentials or private records in source code." }
      ], practice: "Use Turtle to draw a square, rectangle, circle, star, and line pattern. If pandas is installed in the approved environment, read a provided sample workbook and write a new output file without overwriting the original." }
    ],
    labs: [
      { title: "Set up Python and run Hello World", steps: ["Install the approved Python and PyCharm Community or editor version from its trusted source.", "Create a course folder and a new .py file.", "Write a print statement that displays Hello World, save, and run it.", "Record the interpreter version and where output appears."] },
      { title: "Calculate averages and circle area", steps: ["Store three sample monthly bills in variables and compute their mean as total divided by count.", "Ask for a circle radius, convert it to a number, and calculate area using pi times radius squared.", "Print labels and results; test zero, decimal, and invalid text and describe expected validation."] },
      { title: "Classify characters and search text", steps: ["Use a loop to count letters, digits, and other symbols in a sample string.", "Normalize a sentence and search case-insensitively for every occurrence of a requested name.", "Split a hyphen-separated phrase and print each part on its own line."] },
      { title: "Build conditional programs", steps: ["Ask for a number and report whether it is even or odd using the remainder operator.", "Check whether a number is divisible by seven.", "Validate a score from 1 to 100 and assign the syllabus grade categories using if/elif/else."] },
      { title: "Practice loops and numeric patterns", steps: ["Print the first ten natural numbers with for and while loops.", "Calculate the sum from 1 through a user-provided positive integer.", "Calculate factorial for a non-negative integer and handle invalid negative input.", "Print a multiplication table and show where break or continue would be appropriate."] },
      { title: "Manage and search lists", steps: ["Ask for five fruit names and store them in a list; display each with a for loop.", "Create a new list containing the squares of a sample numeric list.", "Copy all elements into a separate updated list and verify the original remains unchanged.", "Replace 20 with 200 only when found; search for a user-provided value in a list; display names starting with B."] },
      { title: "Write and test functions", steps: ["Define a function that accepts two numbers and returns their sum.", "Define a function that accepts values and returns them as a list; define another that returns two related results.", "Write a factorial function with a clear rule for zero and negative inputs.", "Call each function with normal and boundary values and print its returned result."] },
      { title: "Draw with Turtle and inspect a workbook", steps: ["Import turtle in an approved environment and draw a line, square, rectangle, circle, and star using functions.", "Add colors or pen width only after the basic drawing works.", "If pandas and a compatible Excel engine are installed, read an instructor-provided workbook, inspect columns, and write results to a new file.", "Do not upload student or institute data to external tools."] }
    ],
    links: [["Python Tutorial · Official Documentation", "The official Python tutorial for syntax, data structures, functions, and modules.", "https://docs.python.org/3/tutorial/"], ["Python Downloads", "Download supported Python releases from the Python Software Foundation.", "https://www.python.org/downloads/"], ["PyCharm · JetBrains", "Official PyCharm product and installation information.", "https://www.jetbrains.com/pycharm/"], ["pandas · Getting started", "Official pandas guides for tabular data and Excel workflows.", "https://pandas.pydata.org/docs/getting_started/"]]
  },
  "database-systems": {
    outcomes: "Design relational schemas from ER models, normalize tables, build and query MySQL databases with SQL, and connect an Access front end to MySQL.",
    modules: [
      { title: "Introduction to Database Concepts", weeks: 1, hours: 6, introduction: "Understand databases, DBMS responsibilities, and the major families of data models.", lessons: [
        { title: "Database and its importance", text: "A database is an organized collection of related data. A database management system (DBMS) creates, stores, retrieves, protects, and maintains that data. Databases support reliable information access, reduce unnecessary duplication, and help multiple users work with shared records." },
        { title: "Database models", text: "A hierarchical model organizes records in a tree; a network model supports more general linked records; a relational model organizes data into tables connected by keys. NoSQL systems include document, wide-column, key-value, and graph approaches; their structures and consistency models vary by product." },
        { title: "Relational and non-relational DBMS", text: "Relational DBMS products include MySQL, Microsoft SQL Server, Oracle Database, and Access. NoSQL examples include MongoDB, HBase, and Cassandra. Choose a model based on data relationships, query needs, scale, consistency, operations, and team skills." },
        { title: "DBMS functions", text: "A DBMS manages metadata/data dictionaries, storage, integrity rules, backup and recovery, security, and concurrent user access. A DBMS does not replace good schema design, access control, tested backups, or application validation." }
      ], practice: "Compare a spreadsheet holding repeated student-course details with a database design that separates students, courses, and enrolments. Identify what duplication or update errors the database avoids." },
      { title: "Relational Database Concepts", weeks: 1, hours: 6, introduction: "Learn the relational vocabulary and connect tables with primary and foreign keys.", lessons: [
        { title: "Entities, tables, records, and fields", text: "An entity is a kind of thing about which data is stored, such as Student. A table stores rows for one entity or relationship; a record is a row; a field/column stores one attribute. Each field should contain one value appropriate to its type." },
        { title: "Primary, composite, and foreign keys", text: "A primary key uniquely identifies a row. A composite key uses more than one column when a combination identifies a row. A foreign key references a key in another table and expresses a relationship. Keys should be stable and unambiguous." },
        { title: "Relationships and referential integrity", text: "One-to-one associates one row with at most one row in another table; one-to-many connects one parent to multiple child rows; many-to-many connects many rows on each side and is implemented with a junction table. Referential integrity prevents invalid references and defines what happens when related data changes." }
      ], practice: "Draw Students, Courses, and Enrolments entities. Mark primary keys and foreign keys, then explain why Enrolments resolves the many-to-many relationship." },
      { title: "Data Modelling and Normalization", weeks: 3, hours: 18, introduction: "Plan entity-relationship diagrams and transform them into relational tables with reduced duplication.", lessons: [
        { title: "Purpose of data modelling", text: "Data modelling clarifies what information a system stores and how facts relate before tables and applications are built. It helps identify entities, attributes, identifiers, business rules, and required relationships." },
        { title: "Entity-relationship diagrams", text: "An ERD displays entities, their attributes, key fields, and relationship cardinalities. Confirm each entity has a clear identity and relationships match real rules. Document optional versus required relationships and business assumptions." },
        { title: "Transform an ERD into a relational schema", text: "Create one table for each entity and choose a primary key. For one-to-many, place the parent key as a foreign key on the many side. For many-to-many, create a junction table with foreign keys to both entities and usually a composite or separate primary key. Represent one-to-one using a unique foreign key where appropriate." },
        { title: "First Normal Form (1NF)", text: "A table is in 1NF when each field stores an atomic value for the chosen model and rows can be uniquely identified. Avoid repeating groups such as Course1, Course2, Course3 or comma-separated lists in one field; use related rows instead." },
        { title: "Second Normal Form (2NF)", text: "A table is in 2NF when it is in 1NF and each non-key attribute depends on the whole candidate key, not just part of a composite key. Separate attributes that depend on only one component into the appropriate entity table." },
        { title: "Third Normal Form (3NF)", text: "A table is in 3NF when it is in 2NF and non-key attributes depend on the key rather than on another non-key attribute. Move facts about another entity to its own table and reference it with a foreign key. Normalization reduces anomalies but practical design still requires justified constraints and queries." }
      ], practice: "Normalize a sample unstructured student-enrolment sheet into Students, Courses, and Enrolments. Document primary keys, foreign keys, and how the design satisfies 1NF, 2NF, and 3NF." },
      { title: "MySQL Development, SQL, and Access Front Ends", weeks: 15, hours: 90, introduction: "Install and use the MySQL tools in an approved local environment, develop schemas, query and manipulate data, and connect an Access front end.", lessons: [
        { title: "MySQL Community Server, Workbench, Shell, and client", text: "MySQL Community Server stores and manages relational databases. Workbench provides a graphical environment for schemas, queries, and administration; MySQL Shell and the command-line client provide interactive access. Install only from the official MySQL site or the instructor's approved package and protect the root password." },
        { title: "SQL language groups", text: "SQL is the language used to define and manipulate relational data. DDL defines structures, including CREATE and ALTER. DML inserts, updates, deletes, and retrieves rows. DCL controls privileges through commands such as GRANT and REVOKE. Transaction control (TCL) is also commonly distinguished for COMMIT and ROLLBACK." },
        { title: "Create, select, inspect, and remove databases", text: "CREATE DATABASE creates a schema; USE selects the active schema. SHOW DATABASES and SHOW TABLES inspect objects; DESCRIBE (DESC) reports a table's columns. DROP DATABASE permanently removes a schema and all its objects—use only on a disposable practice database after a backup." },
        { title: "Tables, data types, and constraints", text: "CREATE TABLE defines columns and constraints. Common types include VARCHAR for bounded text, TEXT/LONGTEXT for larger text, INT and BIGINT for whole numbers, FLOAT/DOUBLE for approximate numeric values, BOOL/BOOLEAN for Boolean-like values, and DATE, TIME, YEAR for temporal values. Prefer exact DECIMAL values for currency in real systems. NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, DEFAULT, and CHECK rules help protect data." },
        { title: "Alter and index tables safely", text: "ALTER TABLE can add or drop columns or modify definitions; review existing data and dependencies first. TRUNCATE TABLE removes all rows while keeping a table structure; DROP TABLE removes the table itself. Indexes can improve selected lookups but use storage and add write cost. EXPLAIN helps inspect a query plan." },
        { title: "Insert, update, delete, and limit rows", text: "INSERT adds records; UPDATE changes matching records; DELETE removes matching records. Always write and test the WHERE condition before running UPDATE or DELETE, and use a transaction or backup for important data. INSERT INTO ... SELECT copies selected query results into another table with compatible columns. LIMIT restricts result count." },
        { title: "Retrieve, filter, sort, and group data", text: "SELECT names columns or expressions; DISTINCT removes duplicate result rows. WHERE filters rows before grouping using comparisons, arithmetic, logical operators, and LIKE wildcards % (any sequence) and _ (one character). ORDER BY sorts results; GROUP BY forms groups; HAVING filters aggregate groups after grouping." },
        { title: "Aggregate and string functions", text: "AVG, COUNT, MIN, MAX, and SUM summarize values. CONCAT joins strings; LOWER and UPPER change case; LENGTH measures byte length in MySQL (CHAR_LENGTH counts characters); LTRIM and RTRIM remove leading or trailing spaces; REPLACE substitutes text; REPEAT repeats a string; STRCMP compares strings; SUBSTR extracts part of a string. Check NULL behavior and data encoding." },
        { title: "Views and joins", text: "A view is a stored SELECT definition that presents a query as a virtual table; CREATE VIEW defines one and DROP VIEW removes it. INNER JOIN returns matching rows; LEFT JOIN keeps all left rows and fills unmatched right fields with NULL; RIGHT JOIN does the converse; CROSS JOIN creates combinations of rows. Use explicit join conditions to avoid accidental Cartesian results." },
        { title: "Privileges, backup, and database security", text: "Use separate database accounts with only the permissions needed; do not use the root account for a routine application. Store credentials securely, use parameterized queries in applications, limit network exposure, and keep backups. Test restore procedures; an untested backup is not a reliable recovery plan." },
        { title: "Connect Access to MySQL", text: "A Microsoft Access front end can connect to MySQL through a compatible MySQL ODBC driver and configured data source. Install a driver matching the application architecture and approved version, set up a connection using a least-privilege database account, and link only the required tables. Access forms and reports can then provide an interface while MySQL stores the data." },
        { title: "Forms, reports, and end-to-end application workflow", text: "Create Access forms for controlled entry and editing, and reports for grouped/printable information. Test inserts, updates, validation, relationships, and permissions against a practice schema. Confirm the application handles connection failures and does not expose credentials in shared files." }
      ], practice: "Build a Student/Course/Enrolment schema in a local practice server. Add keys and constraints, insert fictional records, write filtered and grouped SELECT queries with functions and joins, create a view, then connect a sample Access front end using a non-root practice account." }
    ],
    labs: [
      { title: "Install MySQL tools in an approved lab", steps: ["Download MySQL Community Server, Workbench, and Shell only from the official MySQL site or the instructor's approved package.", "Run the installer with the assigned components and default lab networking unless directed otherwise.", "Set a unique lab-only root password; do not reuse a personal password or share it.", "Confirm the service starts and verify the client version. Keep the server local to the lab unless networking is explicitly required."] },
      { title: "Connect with Workbench and MySQL Shell", steps: ["Start the local service from the approved service control if necessary.", "Open Workbench and connect to the local instance with the assigned credentials.", "Open a query tab and inspect the Schemas navigator.", "In MySQL Shell, switch to SQL mode and connect to localhost using the training account; never paste passwords into screenshots or reports."] },
      { title: "Create a schema and relational tables", steps: ["Create a disposable training database and select it as the active schema.", "Create Students and Courses tables with appropriate columns and primary keys.", "Create an Enrolments table with foreign keys and a composite or separate key.", "Add NOT NULL, UNIQUE, DEFAULT, and other appropriate constraints; inspect with SHOW TABLES and DESCRIBE."] },
      { title: "Insert and retrieve data", steps: ["Insert fictional records with INSERT and specify the target column list.", "Use SELECT and DISTINCT to view fields and values.", "Filter with WHERE comparisons and LIKE wildcards; combine conditions with AND, OR, and NOT.", "Sort with ORDER BY and limit the number of results; check each result against the input records."] },
      { title: "Update, delete, and alter safely", steps: ["Before changing data, run a SELECT with the intended WHERE condition to confirm the target rows.", "Use UPDATE or DELETE only in the disposable database and only after the target rows are verified.", "Practice adding a column with ALTER TABLE and inspect the result.", "Use TRUNCATE or DROP only after the instructor confirms the database is disposable; record the destructive effect."] },
      { title: "Use grouping, functions, constraints, and joins", steps: ["Calculate totals and averages with aggregate functions and group results by a field.", "Filter groups with HAVING and compare with row filtering in WHERE.", "Use MySQL string functions on fictional labels and inspect NULL and text-length behavior.", "Join Students, Courses, and Enrolments with INNER and LEFT JOIN; compare which rows are retained.", "Create and query a view over the related tables."] },
      { title: "Create a backup and review access privileges", steps: ["Export or dump the practice schema using an approved MySQL tool.", "Create or use a least-privilege training account and verify only assigned objects are accessible.", "Restore the schema to a separate disposable database and verify tables and sample rows.", "Do not expose the database port publicly or share root credentials."] },
      { title: "Connect Access to MySQL", steps: ["Install a compatible, instructor-approved MySQL ODBC driver matching the Access architecture.", "Create a local or lab-only data source and test it with a least-privilege training account.", "Link the practice tables in Access and build a basic form for entering fictional records.", "Create a report, verify changes reach the MySQL database, then remove stored credentials or connections when directed."] }
    ],
    links: [["MySQL Downloads", "Official Community Server and related tool downloads.", "https://dev.mysql.com/downloads/"], ["MySQL Reference Manual", "Official documentation for SQL statements, data types, functions, and administration.", "https://dev.mysql.com/doc/refman/8.0/en/"], ["W3Schools · MySQL Tutorial", "Beginner reference for SQL and MySQL query patterns.", "https://www.w3schools.com/mysql/"], ["MySQL Tutorial", "Guided tutorials and examples for MySQL database work.", "https://www.mysqltutorial.org/"]]
  },
  "video-editing": {
    outcomes: "Plan an edit, organize and cut footage, refine motion, sound, color, titles, and captions, then export work for appropriate platforms and clients.",
    modules: [
      { title: "Introduction to Video Editing", weeks: 1, hours: 6, introduction: "Explore why editing matters and how a project moves from raw footage to a finished story.", lessons: [
        { title: "Background and evolution", text: "Editing began with physical film cuts and splices, moved to videotape systems, and developed into nonlinear digital editing. Current editors arrange media on timelines, apply effects, mix audio, add graphics, and export files without changing the original camera media." },
        { title: "Goals and principles of editing", text: "Editing selects and orders shots to communicate a clear idea, emotion, or action. A good edit supports story, comprehension, continuity, rhythm, and audience expectations rather than adding effects for their own sake." },
        { title: "Stages of an edit", text: "A practical workflow is brief and planning, media ingest and backup, organization, selects, rough cut, fine cut, titles and sound, color correction, review, revisions, export, and archive. Label versions and keep source media separate from project files." },
        { title: "Editing software and project planning", text: "Software has evolved from tape-oriented systems to non-linear editors such as Premiere Pro. Choose a tool that is available, licensed, compatible with the computer, and appropriate to the deliverable. Before editing, define audience, duration, aspect ratio, resolution, frame rate, audio, and delivery format." }
      ], practice: "Plan a 30-second institute announcement: write its purpose, audience, shot list, target format, and three checks needed before publishing." },
      { title: "Premiere Pro, Footage, Aspect Ratio, and Formats", weeks: 2, hours: 12, introduction: "Understand the editing environment, project setup, media characteristics, and delivery formats.", lessons: [
        { title: "Premiere Pro workspace and project", text: "Premiere Pro organizes editing around panels such as Project, Source, Program, Timeline, Tools, and Effects Controls. Panel arrangement can vary by workspace/version. Create a project in a clear folder and keep camera footage, audio, graphics, and exports organized." },
        { title: "Install and activate software legally", text: "Use the official Adobe Creative Cloud installer and an authorized license or institutional account. Confirm system requirements and available storage. Do not use cracked installers, shared credentials, or unofficial activation tools." },
        { title: "Footage properties and aspect ratio", text: "Footage properties include dimensions, frame rate, scan type, codec, and audio characteristics. Aspect ratio compares width to height; common examples include 16:9 landscape and 9:16 vertical. Sequence settings should match the intended footage and delivery platform unless the creative brief requires a different treatment." },
        { title: "Video containers, codecs, and export formats", text: "A container such as MP4 or MOV packages video, audio, and metadata; a codec compresses and decodes the streams. Resolution, frame rate, bitrate, and codec affect quality and file size. Select an export preset that meets the platform or client specification and test playback after export." }
      ], practice: "Create a practice project and sequence using supplied sample clips. Record their dimensions, frame rate, aspect ratio, container, and codec; export a short test and check that audio and picture play." },
      { title: "Importing, Organizing, and Cutting Footage", weeks: 3, hours: 18, introduction: "Manage project media, preview clips, assemble a timeline, and make purposeful cuts.", lessons: [
        { title: "Import footage and organize assets", text: "Import media through the application, media browser, or an approved drag-and-drop workflow. Create bins for footage, audio, stills, graphics, and sequences. Rename clips descriptively without renaming original camera files unless the workflow is controlled." },
        { title: "Preview and select useful takes", text: "Use the Source monitor to inspect a clip before placing it on the timeline. Mark in and out points to select a usable range. Add notes or labels for takes, audio quality, and continuity." },
        { title: "Sequence and timeline basics", text: "A sequence contains video and audio tracks arranged over time. Tracks can be layered; higher video tracks may cover lower ones where opaque. The playhead shows the current time. Zoom, track targeting, snapping, and track locks help manage edits." },
        { title: "Tools and trimming", text: "Selection, razor, ripple, and rolling tools support different edits. A ripple trim changes sequence duration by closing or opening a gap; a rolling edit adjusts the shared cut while preserving total duration. Learn shortcuts from the installed version and verify the active tool before editing." },
        { title: "When and why to cut", text: "Cut when the story changes viewpoint, action, speaker, time, or idea, or to remove an error. Choose a cut point that preserves meaning and natural movement. Avoid cutting in the middle of an important word, gesture, or action unless a deliberate effect is intended." },
        { title: "Build a rough cut", text: "Place selected clips in story order, remove unusable material, and keep a clear beginning, middle, and end. Review the full sequence without stopping, then refine pacing and continuity in a separate pass. Save versions before major restructuring." }
      ], practice: "Import supplied practice footage, create labeled bins, mark selects in the Source monitor, and assemble a 30-second rough cut with a clear beginning, middle, and end." },
      { title: "Effects, Transitions, Continuity, and Time", weeks: 4, hours: 24, introduction: "Use effects and cuts to support meaning while maintaining continuity, pacing, and natural motion.", lessons: [
        { title: "Effects Controls and basic transforms", text: "Effects Controls expose clip properties such as position, scale, rotation, opacity, and effect parameters. Keyframes animate values over time. Make small controlled changes and compare with the original; avoid cropping important subjects accidentally." },
        { title: "Transitions and video effects", text: "A transition changes between shots, while a video effect modifies appearance or behavior. A straight cut is usually sufficient; dissolves can indicate a passage of time, and wipes may have a stylized role. Apply effects deliberately and inspect boundaries for flashes or unintended gaps." },
        { title: "Opacity and blend modes", text: "Opacity controls transparency. Blend modes determine how pixels on one layer combine with layers below; results depend on luminance and color. Use these tools for overlays and composites, and check readability and contrast." },
        { title: "Stabilize shaky footage", text: "Stabilization analyzes motion and crops or transforms the image to reduce unwanted camera shake. It can distort footage or require additional crop. Use only on a duplicate or test sequence, compare the result, and do not expect it to repair severe motion blur." },
        { title: "Masks and compositing", text: "A mask limits where an effect or opacity applies. Masks can be drawn and adjusted with feather, expansion, and tracking where supported. Inspect edges and movement; masks require careful tracking when subjects or cameras move." },
        { title: "Cut types and continuity", text: "A match-on-action cut continues a movement across shots. A cutaway shows related detail; a reaction shot shows a listener; a jump cut skips time within a similar framing. Maintain screen direction, eye line, position, and action so viewers can follow the scene." },
        { title: "Pacing, rhythm, speed, and time remapping", text: "Pacing is how quickly information unfolds; rhythm is the pattern of visual and audio beats. Vary shot lengths to support the story. Speed changes and time remapping can create slow motion or acceleration, but source frame rate and interpolation affect smoothness." }
      ], practice: "Refine the rough cut with a match-on-action, one justified cutaway, and one restrained transition. Apply stabilization to a test copy, compare before/after, and adjust pacing without losing the story." },
      { title: "Action Editing, Audio, Montage, and Multicamera", weeks: 4, hours: 24, introduction: "Edit movement and music with continuity, organize sound, use repeatable shortcuts, and combine multiple camera angles.", lessons: [
        { title: "Action editing and continuity", text: "Action edits preserve the audience's understanding of movement between camera angles. Use matching screen direction, timing, and points of action. A continuity edit should make space and time understandable unless a deliberate stylistic break is intended." },
        { title: "Copy and paste attributes; shortcuts", text: "Copy/paste attributes can repeat selected effect settings across clips. Confirm only the intended attributes are copied. Keyboard shortcuts speed frequent work, but shortcuts vary by application and workspace; learn and verify them from the current version." },
        { title: "Montage and music-video editing", text: "A montage compresses time or groups images to create a thematic or rhythmic sequence. Music-video edits can align visual events with beats or phrases; use rhythm without sacrificing understandable action or lawful use of music." },
        { title: "Audio editing and sound design", text: "Balance dialogue, music, and effects; remove or reduce unwanted noise where possible; add fades to avoid abrupt starts and stops. Monitor peaks to prevent clipping and use headphones and speakers at safe listening levels. Obtain permission for music and sound assets." },
        { title: "Multicamera editing", text: "Multicamera editing synchronizes clips from several cameras, often using shared audio or timecode, then switches between angles. Verify synchronization, color/exposure consistency, and which angle is active before exporting." },
        { title: "Nesting and blending sequences", text: "Nesting places one sequence inside another to organize complex edits or apply effects to a group. It can simplify a timeline but may hide detail; name nested sequences and keep a backup of the original edit." }
      ], practice: "Edit a short action sequence or music montage using supplied, licensed media. Synchronize audio, cut on meaningful actions or beats, use a nested sequence only where helpful, and balance dialogue/music/effects." },
      { title: "Titles, Captions, Graphics, and Color", weeks: 4, hours: 24, introduction: "Create readable titles and captions, organize an image sequence, and improve consistency with color tools.", lessons: [
        { title: "Titles and lower thirds", text: "Titles identify a video or section; lower thirds identify a speaker or provide brief context. Use readable type, sufficient contrast, safe margins, and consistent alignment. Confirm text spelling, names, and timing." },
        { title: "Captions and subtitles", text: "Captions include spoken words and may include relevant sound cues; subtitles commonly represent spoken dialogue for translation or comprehension. Synchronize text with speech, check line breaks and reading speed, and export a subtitle file or burn-in only as required." },
        { title: "Image sequences, markers, and labels", text: "An image sequence is a series of numbered stills that can be interpreted as video. Check file naming, numbering, frame rate, and missing frames during import. Markers flag edit points, notes, or review comments; labels help visually organize assets." },
        { title: "Graphics workspace and adjustment layers", text: "Graphics panels and title tools differ across Premiere Pro versions. An adjustment layer applies effects to clips beneath it, supporting consistent color or stylistic treatment across a group. Name layers and limit their duration to the intended section." },
        { title: "Color correction and grading", text: "Correction aims to make footage technically consistent: exposure, white balance, contrast, and skin tones. Grading creates a deliberate visual mood after correction. Compare shots in context, use scopes where available, and avoid clipping highlights or crushing shadows." },
        { title: "Duplicate-person effect", text: "A duplicate-person composite usually combines locked-off footage of the same scene with a mask or matte. The camera, lighting, and background must remain consistent; subjects should not overlap across the mask seam. This is a compositing exercise, not a substitute for permissions or safe production." }
      ], practice: "Create a short interview with an opening title, speaker lower third, accurate captions, markers for revisions, an adjustment layer for shot consistency, and a color-corrected export." },
      { title: "Green Screen, Export, and After Effects", weeks: 2, hours: 12, introduction: "Key a green background responsibly, prepare delivery files, and understand how After Effects can complement an editing workflow.", lessons: [
        { title: "Green-screen production and keying", text: "A clean key depends on even background lighting, distance between subject and screen, correct exposure, and avoiding green spill. Apply a keying effect, sample the background, refine matte transparency and edges, and check hair and motion against several backgrounds." },
        { title: "Export Media", text: "Choose the sequence, in/out range, delivery container, codec, resolution, frame rate, audio settings, and destination based on the brief. Use a suitable preset, export a short test when possible, then play the full file and check image, sound, captions, and file name." },
        { title: "After Effects workflow", text: "After Effects is used for motion graphics, compositing, and effects; Premiere Pro is centered on timeline editing. A dynamic link or rendered intermediate can move work between them depending on software versions and licenses. Keep source projects and rendered assets organized and avoid replacing the only copy." },
        { title: "Freelance and workplace delivery", text: "Clarify the brief, audience, deadline, revision limits, aspect ratios, captions, music licensing, and file handoff before production. Deliver agreed formats, keep a project archive, and obtain consent for people and locations shown." }
      ], practice: "Key an instructor-provided green-screen clip, add a properly licensed background, export a platform-appropriate test, verify playback, and package the project files and asset credits." }
    ],
    labs: [
      { title: "Create a logo-intro video", steps: ["Create a project and sequence matching the assignment's aspect ratio and frame rate.", "Import the approved logo and licensed background/audio assets into labeled bins.", "Animate a simple reveal with readable timing and restrained effects.", "Export a short test, review it, then deliver the agreed final format."] },
      { title: "Remove a green-screen background", steps: ["Use an instructor-supplied clip and create a duplicate sequence for experimentation.", "Apply the available keying effect, sample the screen color, and refine transparency and edge settings.", "Inspect hair, motion, shadows, and spill against more than one background.", "Save the project and export a short test; do not use footage without permission."] },
      { title: "Produce sound effects and an audio mix", steps: ["Import licensed dialogue, music, and effects into separate labeled tracks.", "Trim clips, add fades, balance levels, and prevent clipping.", "Listen on headphones at a safe level and check the mix on speakers if available.", "Record source credits and export a short review mix."] },
      { title: "Cut a short sequence", steps: ["Mark useful in/out ranges in the Source monitor.", "Place clips in story order, trim errors, and use match-on-action or a cutaway where appropriate.", "Watch the full sequence and correct continuity, gaps, and audio transitions.", "Export and play back the file to verify the result."] },
      { title: "Design social lower thirds and titles", steps: ["Define the title text, safe area, brand colors, and viewing size for the target format.", "Create a title and lower third with high contrast, readable type, and a clear entrance/exit.", "Check names, spelling, alignment, and timing over bright and dark footage.", "Export one still frame and a short video for review."] },
      { title: "Build a documentary or vlog", steps: ["Write a short outline and shot list; capture only footage for which consent is available.", "Organize interviews, B-roll, ambient sound, and music into bins.", "Build a rough cut, add supporting visuals, clean dialogue, and insert captions or labels.", "Review factual accuracy and permissions, then export a screening copy."] },
      { title: "Create tutorials and promotional videos", steps: ["Write a concise script with a hook, clear steps or benefits, and a closing action.", "Record screen/voice or product footage with permission and remove private account information.", "Edit for clarity, add captions and visual cues, then check branding and claims.", "Export versions only for the formats agreed in the brief."] },
      { title: "Prepare business, corporate, and real-estate edits", steps: ["Confirm client permissions, location rules, deliverables, and music/image licenses.", "Select establishing shots, relevant details, and approved interviews or property footage.", "Maintain consistent color and audio; avoid editing that misrepresents the property or organization.", "Deliver the final file and a clearly organized project archive."] },
      { title: "Practice multicamera and montage workflows", steps: ["Use supplied camera angles with a shared audio or synchronization point.", "Synchronize and create a multicamera sequence, then switch angles at natural edit points.", "Create a separate montage from licensed media and align cuts to selected musical beats.", "Check synchronization and audio balance after rendering."] }
    ],
    links: [["Adobe Premiere Pro User Guide", "Official documentation for importing, editing, effects, captions, and export.", "https://helpx.adobe.com/premiere-pro/user-guide.html"], ["Adobe After Effects User Guide", "Official guidance for motion graphics, compositing, and effects.", "https://helpx.adobe.com/after-effects/user-guide.html"], ["GFXMentor · YouTube", "Video and design lessons; check the software version used in each tutorial.", "https://www.youtube.com/@GFXMentor"], ["Adobe Creative Cloud", "Official software plans and licensed installation information.", "https://www.adobe.com/creativecloud.html"]]
  },
  "web-development": {
    outcomes: "Create accessible static web pages with HTML, style responsive layouts with CSS, and add beginner JavaScript interaction and validation.",
    modules: [
      { title: "Internet, Web, and Web Development", weeks: 4, hours: 24, introduction: "Understand the Internet and Web, browser/server roles, web services, hosting, cookies, and the development workflow.", lessons: [
        { title: "How the Internet and Web work", text: "The Internet is a network of interconnected networks. The World Wide Web is a service on the Internet: a browser requests resources identified by URLs, DNS resolves host names, and web servers return responses over HTTP or HTTPS. A web page may combine HTML, CSS, JavaScript, images, and data." },
        { title: "Internet services, ethics, and browsers", text: "Internet services include the Web, email, social networks, mailing lists, and discussion/news groups. A browser requests and displays web resources, manages tabs, history, downloads, and permissions. Examples include Chrome, Firefox, Edge, and Safari; choose supported, updated browsers. Practice respectful communication, privacy, copyright, accessibility, and safe sharing." },
        { title: "Web servers, directories, websites, and search", text: "A web server responds to requests for resources; a website is a collection of related pages or services. Static sites serve prepared files; dynamic sites generate or personalize responses using application logic or data. Web directories organize listings, while search engines index and retrieve pages according to their systems." },
        { title: "Development roles and scope", text: "A web team may include a designer, front-end developer, back-end developer, content writer, tester, accessibility specialist, and administrator. Small projects combine roles. Development includes requirements, design, implementation, testing, publication, analytics, security, and maintenance." },
        { title: "JavaScript, PHP, and hosting", text: "JavaScript runs in browsers and can also run on servers. PHP is commonly used for server-side web development. Hosting stores and serves site files or applications; types include shared, virtual private server, dedicated, and cloud/platform hosting. Choose based on traffic, control, security, support, and cost; a static site can often use static hosting." },
        { title: "Cookies and privacy", text: "Cookies are small pieces of site data stored by a browser. Session cookies generally expire with a session; persistent cookies remain until expiration or deletion. First-party and third-party labels describe the context that set them. Cookies support sessions and preferences but can also enable tracking; minimize data, disclose use, and follow applicable privacy requirements." },
        { title: "Web 2.0 and Web 3.0", text: "Web 2.0 commonly describes interactive, user-generated, social web services. Web 3.0 has multiple proposed meanings, including semantic data and decentralized systems; it is not one settled technical standard. Evaluate tools by their actual capabilities, governance, privacy, and security rather than labels." }
      ], practice: "Trace how entering an HTTPS URL reaches a web page: identify browser, DNS, request, server, response, and rendered resources. Compare one static site and one interactive service." },
      { title: "HTML5 Structure and Elements", weeks: 4, hours: 24, introduction: "Create semantic HTML pages with headings, text, links, images, lists, tables, embedded media, and forms.", lessons: [
        { title: "Editors and HTML document structure", text: "Use a plain-text code editor such as Visual Studio Code or Notepad++ and save files with the correct extension. An HTML document starts with a doctype, an html element, metadata in head, and visible content in body. Use a UTF-8 charset and a descriptive title." },
        { title: "Elements, attributes, headings, and paragraphs", text: "Elements use start and end tags around content; some elements such as img and input are void elements. Attributes provide additional information. Use headings h1 through h6 to express a meaningful outline, and paragraphs for text. Do not choose heading levels merely for their default font size." },
        { title: "Styles, formatting, quotations, and comments", text: "Use semantic elements such as strong, em, code, and blockquote to express meaning. CSS controls appearance. HTML comments help maintainers but are delivered to visitors, so never put passwords or private notes in them." },
        { title: "Colors, links, images, and favicon", text: "Use links with descriptive text and valid destinations. Images need appropriate alt text; decorative images can use empty alt text. A favicon is a small site icon linked from the document head. Choose sufficient text/background contrast and avoid relying on color alone." },
        { title: "Tables and lists", text: "Use tables for genuinely tabular information, with header cells and captions where useful; do not use tables for page layout. Use ordered lists for sequence and unordered lists for collections. Keep list nesting logical." },
        { title: "Block and inline content; classes and IDs", text: "HTML elements have display behavior, but CSS can change it. A class can be reused across elements; an id should be unique in a document and can identify a section or form control. Use semantic containers such as header, nav, main, section, article, and footer where appropriate." },
        { title: "Head, layout, and embedded content", text: "The head contains metadata, title, icons, and linked stylesheets/scripts. HTML layout describes document regions. An iframe embeds another resource and should have a descriptive title and appropriate permissions; use it only for trusted sources. Audio and video elements can provide controls and captions." },
        { title: "Forms and accessible controls", text: "Forms collect information using labels, inputs, select menus, buttons, and validation attributes. Associate each label with its control, choose correct input types, explain required fields, and do not collect unnecessary personal data. Client-side validation improves usability but does not replace server-side validation for a real service." }
      ], practice: "Create a semantic HTML5 page for a fictional course: title, favicon, heading hierarchy, paragraphs, internal/external links, accessible image, list, data table, audio/video demo, iframe with title, and labeled contact form." },
      { title: "Cascading Style Sheets", weeks: 6, hours: 36, introduction: "Style HTML with selectors, the box model, typography, layout, responsive sizing, positioning, navigation, and dropdowns.", lessons: [
        { title: "CSS syntax and ways to apply styles", text: "A CSS rule has a selector and declaration block containing property/value pairs. External stylesheets support reuse; an internal style block applies to one document; inline styles are best avoided for ordinary site-wide design. Comments document intent but do not affect rendering." },
        { title: "Selectors, attributes, and cascade", text: "Type, class, ID, descendant, child, and attribute selectors target elements. Specificity and source order help determine which rule applies; use clear selectors rather than escalating specificity unnecessarily. Attribute selectors can target elements based on attributes or values." },
        { title: "Color, backgrounds, borders, margins, and padding", text: "Color sets text or surfaces; backgrounds can use colors or images. Borders surround an element. Margin is outside the border; padding is between content and border. Use responsive background sizing and preserve contrast over images." },
        { title: "Sizing and the box model", text: "The box model includes content, padding, border, and margin. With content-box, width measures only content; border-box includes padding and border in the declared size. Height, width, max-width, and min/max constraints affect layout; use flexible sizing to prevent overflow." },
        { title: "Text, fonts, icons, links, lists, and tables", text: "Set readable font families, sizes, line heights, and contrast. Style links with clear hover and focus states; list and table styles should remain usable with keyboard and assistive technology. Use icons with text labels or accessible names when they communicate meaning." },
        { title: "Display, position, z-index, and overflow", text: "Display controls layout behavior such as block, inline, inline-block, flex, and grid. Position values define normal-flow or positioned placement; z-index applies within stacking contexts. Overflow determines how content outside a box is handled. Avoid hiding content users need." },
        { title: "Float, alignment, opacity, and navigation", text: "Float was designed mainly for text wrapping and is less suitable for modern page layouts than flex or grid. Alignment can use layout properties and text alignment. Opacity affects the entire element and its children; use color alpha when only a background should be transparent. Navigation bars and dropdowns need visible focus and touch-friendly controls." },
        { title: "Responsive and accessible CSS", text: "Use media queries, flexible grids, relative units, and content-driven breakpoints to support phones and desktops. Preserve keyboard focus, sufficient contrast, readable type, and usable target sizes. Test at narrow widths and with zoom to catch overflow." }
      ], practice: "Style the HTML course page with an external stylesheet: typography, color palette, box model, responsive two-column layout, navigation dropdown, focus styles, and a mobile breakpoint." },
      { title: "JavaScript Fundamentals", weeks: 6, hours: 36, introduction: "Add client-side behavior using statements, variables, data types, operators, functions, arrays, conditions, loops, and simple validation.", lessons: [
        { title: "JavaScript structure, output, and comments", text: "JavaScript can be placed in a script element or loaded from an external .js file. Statements perform operations; braces group blocks. Use console.log for developer diagnostics and DOM methods for page interaction. Comments explain intent but should not contain secrets." },
        { title: "Variables, let, const, and data types", text: "Use const when a binding will not be reassigned and let when reassignment is needed; avoid var in new beginner code. Values include strings, numbers, booleans, null, undefined, arrays, and objects. A const array can still have its contents changed; const prevents rebinding, not mutation." },
        { title: "Operators and expressions", text: "Arithmetic, comparison, logical, assignment, and string operators form expressions. Prefer strict equality === and !== to avoid implicit type conversion surprises. Validate user input and convert strings intentionally before calculations." },
        { title: "Functions and built-in methods", text: "A user-defined function packages reusable logic with parameters and a return value. JavaScript has built-ins such as Math.abs(), Math.random(), Math.max(), Math.min(), parseInt(), and parseFloat(). eval() executes a string as code and should not be used with user input; teach it as a hazard, not a normal calculation tool." },
        { title: "Arrays", text: "An array stores an ordered collection indexed from zero. Use length, bracket access, and methods such as push() and includes(). Iterate with for or for...of and check that an index exists before reading it." },
        { title: "if, else, and switch", text: "Use if/else for conditional branches and switch when comparing one expression against several cases. Include a default branch where appropriate and use break to avoid unintended fall-through when the logic requires it." },
        { title: "for and while loops", text: "A for loop is useful when initialization, condition, and update are clear. A while loop repeats while a condition is true. Update the condition so the loop terminates, and avoid blocking the browser with very long synchronous loops." },
        { title: "DOM interaction, dialogs, and validation", text: "Use document.querySelector and event listeners to respond to form interaction. Prompt/alert dialogs are useful for tiny demonstrations but are disruptive and inaccessible for real interfaces; prefer labeled page controls and inline feedback. Client-side validation helps users but never replaces server validation in a production application." }
      ], practice: "Add a form that accepts a name and numeric score, checks required fields and range, assigns a result with if/else, and displays feedback on the page. Add a loop-based list of practice items." }
    ],
    labs: [
      { title: "Set up the editor and project folder", steps: ["Install the approved Visual Studio Code or Notepad++ version from its official source.", "Create a web-course folder with index.html, styles.css, and script.js.", "Open the folder in the editor, save UTF-8 files with correct extensions, and preview index.html in a browser."] },
      { title: "Build an HTML5 document", steps: ["Add doctype, html lang, charset, viewport, title, favicon, and body.", "Create headings, paragraphs, text formatting, quotation, and an HTML comment that contains no private information.", "Add a table with headers, a list, a div/section, and semantic page regions.", "Open the page in a browser and fix invalid nesting or missing content."] },
      { title: "Add links, images, and embedded media", steps: ["Add an internal link to a page section and an external link with descriptive text.", "Insert an image with useful alt text or empty alt for decoration.", "Add a local audio/video sample with controls and captions where available.", "Embed a trusted iframe with a descriptive title and minimum necessary permissions."] },
      { title: "Create and test an accessible HTML form", steps: ["Add labeled name, email, and message controls with appropriate input types.", "Use required and basic validation attributes and describe what users should enter.", "Add a submit button and ensure controls can be reached using Tab.", "Do not publish or collect real personal information in the practice form."] },
      { title: "Style the page with CSS", steps: ["Link an external stylesheet and create rules for body typography, headings, colors, and links.", "Apply margins, padding, borders, width, max-width, and box-sizing; inspect the box model.", "Style lists, a table, image, and navigation using appropriate selectors.", "Add focus-visible states and verify contrast and keyboard navigation."] },
      { title: "Build responsive navigation and layout", steps: ["Use flexbox or grid for a desktop content layout and set flexible widths.", "Create a dropdown that is reachable by keyboard and works on touch.", "Add a media query for mobile and confirm navigation and content reflow.", "Test at several viewport widths and browser zoom; remove any horizontal overflow."] },
      { title: "Write JavaScript for data entry and decisions", steps: ["Load an external script and select the form and output element.", "Use const/let, strings, numbers, and explicit conversion for user input.", "Add if/else or switch validation and show a useful inline error or result.", "Use event listeners; avoid eval and avoid putting untrusted input into innerHTML."] },
      { title: "Practice JavaScript arrays, loops, and functions", steps: ["Create an array of fictional course topics and display them using a for or for...of loop.", "Write a function that validates or calculates a result and returns it.", "Add a second condition and a loop with a clear stopping condition.", "Test empty, valid, boundary, and invalid input in the browser console and page."] },
      { title: "Publish and review a static site", steps: ["Check relative paths, page title, headings, links, favicon, and image alt text.", "Remove debug data and personal or secret information from files.", "Test the site locally at desktop and mobile widths.", "Deploy only to an approved static host and verify the published URL and assets."] }
    ],
    links: [["MDN · HTML", "Reference and tutorials for HTML elements and document structure.", "https://developer.mozilla.org/en-US/docs/Learn/HTML"], ["MDN · CSS", "Learn CSS syntax, selectors, layout, and responsive design.", "https://developer.mozilla.org/en-US/docs/Learn/CSS"], ["MDN · JavaScript", "Guides and references for JavaScript language and browser APIs.", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript"], ["W3Schools · HTML, CSS, JavaScript", "Beginner tutorials and interactive examples for web basics.", "https://www.w3schools.com/"], ["Visual Studio Code", "Official editor downloads and documentation.", "https://code.visualstudio.com/"]]
  },
  "graphics-design": {
    outcomes: "Use raster and vector design workflows to create print and digital assets, manage layers and color, prepare outputs, and compose Urdu text.",
    modules: [
      { title: "Explore the Photoshop Environment", weeks: 1, hours: 6, introduction: "Navigate the image editor, customize its workspace, and use safe document navigation.", lessons: [
        { title: "Photoshop interface and workspace", text: "The workspace includes document tabs, toolbars, panels, menus, and contextual options. Arrange panels for the current task, save a workspace if supported, and keep the Layers and Properties panels easy to access." },
        { title: "Navigation tools", text: "Zoom changes magnification and Hand/Pan moves the visible canvas; neither alters image pixels. Fit on Screen is useful for overall composition while 100% view helps inspect pixels. Keep a source copy before editing." },
        { title: "Raster images and document setup", text: "Raster images consist of pixels and can lose quality when enlarged. Set dimensions, resolution, color mode, and intended output before design. Use RGB for most screens and a printer's requested color space for print; color conversion can change appearance." }
      ], practice: "Open a practice image, arrange the workspace, zoom in/out and pan without altering the image, then save a working copy." },
      { title: "Selecting and Enhancing Image Areas", weeks: 2, hours: 12, introduction: "Make and refine selections, understand color spaces, and apply non-destructive image corrections.", lessons: [
        { title: "Select, save, and modify image areas", text: "Selection tools isolate pixels or objects for editing. Refine edges to reduce halos, and save a selection as an alpha channel when it will be reused. Invert, expand, contract, feather, or modify a selection carefully; inspect it against contrasting backgrounds." },
        { title: "Color spaces and monitor profiles", text: "A color space defines a range and interpretation of colors. Monitor calibration and profiling help display color consistently. Keep embedded profiles when appropriate and follow the printer or delivery provider's color workflow." },
        { title: "Convert color spaces and prepare print color", text: "Converting a profile preserves appearance as far as possible within a different gamut; assigning a profile changes interpretation and can shift appearance. Soft proofing can preview some print limitations. Confirm color mode, profile, bleed, dimensions, and resolution with the print provider." },
        { title: "Enhance images with layers, filters, and blends", text: "Adjustment layers provide reversible tonal or color changes. Filters alter image appearance; apply as smart/non-destructive filters when supported. Blend modes combine pixels between layers. Merge combines selected layers; flatten collapses the full image and discards independent layers, so keep an editable master." },
        { title: "Black and white and grayscale", text: "A black-and-white adjustment controls how color channels translate to luminance. Grayscale removes color information from the image mode. Compare the tonal result and retain an RGB master if future color editing may be required." },
        { title: "Print strokes and visual treatment", text: "Brush strokes, filters, and other effects can support a design but should not obscure the subject. Use a duplicate layer or mask, inspect at intended output size, and undo or adjust if details are lost." }
      ], practice: "Select an object, refine and save its selection, create a reversible color/black-and-white variation with adjustment layers, and prepare a print proof without flattening the master." },
      { title: "Working with Layers and Type", weeks: 1, hours: 6, introduction: "Organize content in layers and keep text and effects editable.", lessons: [
        { title: "Create and organize layers", text: "Layers separate image elements so they can be edited independently. Name, group, reorder, show/hide, and lock layers to keep complex work understandable. Place related assets in labeled groups." },
        { title: "Type layers and text properties", text: "Type layers preserve editable text. Choose font, size, alignment, line spacing, and color for legibility. Confirm fonts are licensed and available on the target system; rasterize text only on a copy when a specific effect requires it." },
        { title: "Transformations and layer styles", text: "Transform can scale, rotate, skew, or reposition a layer; constrain proportions when resizing logos. Layer styles add effects such as shadows or strokes. Keep effects restrained and editable; avoid stretching or distorting brand marks." },
        { title: "Undo and revision safety", text: "History and undo support recent revisions, but save versions before major changes. Keep a layered source file and export a separate final copy." }
      ], practice: "Design a simple visiting-card layout with separate background, logo, type, and accent layers; group and name layers, then save an editable master." },
      { title: "Web, Print, Bridge, and Page Layout Assets", weeks: 2, hours: 12, introduction: "Prepare images for different media, organize assets, and build a simple web-layout mockup.", lessons: [
        { title: "Save for print, web, and PDF", text: "Print output needs appropriate dimensions, resolution, color profile, and bleed according to the printer's specification. Web images should use suitable pixel dimensions, efficient formats, and reasonable file sizes. PDF can preserve layout for review or print; inspect fonts, links, color, and page size after export." },
        { title: "Manage assets in Adobe Bridge", text: "Bridge can browse, rate, filter, and organize creative files. Stacks group related images; filters and keywords help retrieval. Add only appropriate metadata and remove private metadata from public exports when needed." },
        { title: "Prepare web images and units", text: "Choose pixels for screen dimensions and physical units for print layouts. Reduce file size by resizing to actual display dimensions, selecting an appropriate format and quality, and removing unnecessary metadata. Inspect the exported image at the intended scale." },
        { title: "Create web-page layout mockups", text: "A mockup can show header, navigation, content, and footer regions without being a functioning web page. Use editable vector shapes and effects, maintain alignment and contrast, then export a web-ready visual or handoff specification." }
      ], practice: "Create print and web exports from one editable design. Compare dimensions, resolution, color, file size, and readability; organize the source assets with descriptive names and keywords." },
      { title: "Photo Retouching, Effects, Actions, and Color Correction", weeks: 3, hours: 18, introduction: "Retouch responsibly, build reusable graphic assets, automate repeated edits, and correct color and sharpness.", lessons: [
        { title: "Retouch photographs responsibly", text: "Retouching tools can remove dust or distractions, but edits should not misrepresent a person or document. Work on a duplicate layer, preserve natural texture, and obtain consent for identifiable people and their images." },
        { title: "Patterns, swatches, gradients, and brushes", text: "Patterns repeat visual motifs; swatches store reusable colors; gradients transition between colors; custom brushes create repeated marks. Keep assets named and organized, and check contrast and print appearance." },
        { title: "Layer comps, warp, and special effects", text: "Layer comps capture visibility and layout variations. Warp transforms a layer for a designed effect, but may distort faces, type, or logos. Use special effects intentionally and retain an unwarped source." },
        { title: "Create and manage Actions", text: "Actions record repeatable editing steps. Record operations on a duplicate file, avoid destructive or path-specific steps where possible, and test the action on several copies. Review each output before batch use." },
        { title: "RGB color correction and curves", text: "A correction should address a clear objective such as exposure, white balance, contrast, or neutral color. Identify highlights, shadows, and neutral areas; use automatic corrections as a starting point, then inspect. Curves provide tonal control; avoid clipping detail." },
        { title: "Sharpening and unsharp mask", text: "Sharpening increases local edge contrast and can make detail appear clearer, but cannot restore missing focus. Apply modestly at final output size, inspect halos and noise, and keep an editable or masked version." }
      ], practice: "Retouch a permitted sample portrait non-destructively, create a matching gradient or pattern asset, record an action to resize a copy, and compare color and sharpening before and after." },
      { title: "CorelDRAW Basics and Workspace", weeks: 2, hours: 12, introduction: "Set up a vector drawing document and prepare it for editable and print outputs.", lessons: [
        { title: "Vector graphics and the CorelDRAW interface", text: "Vector artwork uses mathematically described paths and shapes, so it can scale cleanly. The interface includes a drawing page, toolbox, property bar, palettes, and panels; exact labels depend on version and workspace." },
        { title: "Set the page, workspace, and command bar", text: "Choose page size, orientation, units, and workspace before designing. Customize only useful commands and keep the workspace predictable for future edits." },
        { title: "Save and print a drawing", text: "Save an editable source file, then export or print a separate deliverable. Verify page dimensions, bleed, color, fonts, and printer settings. Keep original vectors in the source document." }
      ], practice: "Create a vector document for a visiting card, choose the correct units and page size, save the editable project, and inspect a PDF proof." },
      { title: "Shapes, Paths, Colors, and Effects", weeks: 1, hours: 6, introduction: "Draw and edit vector geometry, apply fills and outlines, and transform objects precisely.", lessons: [
        { title: "Basic shapes, lines, and paths", text: "Use basic shape tools for rectangles, ellipses, and polygons; curves and paths define more complex outlines. Nodes and handles change path geometry. Keep shapes closed when they need a fill." },
        { title: "Modify paths and transform objects", text: "Add, delete, or move nodes to refine a path, then align, size, rotate, or duplicate objects. Use numeric dimensions and alignment tools for precision; avoid unnecessary node complexity." },
        { title: "Fills, outlines, custom strokes, and shadows", text: "Fills color an object's interior; outlines style its edge. Custom strokes and drop shadows can add hierarchy but can also harm reproduction at small sizes. Confirm colors and outline widths at actual output scale." },
        { title: "Color and reusable palettes", text: "Use a consistent palette and distinguish RGB screen colors from print workflows. Record brand colors and test contrast. Reusable palettes improve consistency across a set of assets." }
      ], practice: "Draw a simple two-color logo from geometric shapes, refine paths, align and group elements, add a restrained outline, and export a scalable vector copy." },
      { title: "Text, Objects, Styles, Templates, and Symbols", weeks: 2, hours: 12, introduction: "Create artistic and paragraph text, arrange objects, reuse styles, and place imported artwork.", lessons: [
        { title: "Artistic text and text on a path", text: "Artistic text suits short headlines and labels; text on a path follows a curve. Use readable fonts and check the direction and spacing of curved text. Keep a plain editable text copy before converting text to curves." },
        { title: "Paragraph text, wrapping, and special characters", text: "Paragraph text fits longer copy within a frame. Text wrapping controls how it flows around objects. Use licensed fonts and inserted Unicode special characters when available; verify fonts and glyphs on the output device." },
        { title: "Modify and import text", text: "Imported text may have missing fonts or altered line breaks. Check spelling, spacing, and style after import. Convert to curves only for a delivery copy if the recipient needs appearance preserved and the license allows it." },
        { title: "Modify objects and add graphics", text: "Arrange, align, duplicate, group, and layer objects to control composition. Imported graphics and clipart must have appropriate usage rights. Object-sprayer tools repeat shapes; verify spacing and file size." },
        { title: "Styles, templates, and symbols", text: "Text/object styles apply consistent formatting. Templates provide a starting layout; verify dimensions and sample content. Symbols are reusable linked or managed objects depending on software version; update consistently and check output." }
      ], practice: "Design a brochure front with a title, paragraph frame, imported permitted image, reusable text styles, and a simple symbol; keep an editable source and export proof." },
      { title: "Layers, Bitmaps, and Advanced Printing", weeks: 2, hours: 12, introduction: "Manage drawing layers, trace raster references carefully, and prepare print-ready vector work.", lessons: [
        { title: "Create and manipulate layers", text: "Layers group content and control stacking order, visibility, and editability. Name layers by purpose, lock finished backgrounds, and keep text and artwork separate where practical." },
        { title: "Import, adjust, and trace bitmaps", text: "A bitmap is pixel-based artwork. Adjust resolution and crop for output; vector tracing estimates paths from pixels and may create many nodes. Use tracing as a starting point and refine paths manually; do not trace copyrighted logos without permission." },
        { title: "Print styles and document preparation", text: "Print styles and advanced settings affect how a document is reproduced. Confirm color, page size, bleed, margins, line weights, and font handling with the print provider. Keep an editable original before any text-to-curves or flattening steps." },
        { title: "Merge text with drawing and preflight", text: "Text can be converted or combined with vector artwork for a final delivery, but preserve live editable text in the source. Preflight linked images, fonts, dimensions, spelling, and output settings before handoff." }
      ], practice: "Import a permitted raster sketch, trace and simplify it, place it on a named layer, add editable text, and produce an approved print PDF plus an editable source." },
      { title: "Urdu InPage and Right-to-Left Layout", weeks: 4, hours: 24, introduction: "Navigate the InPage workspace and compose Urdu layouts with text, picture, graphic, and guide elements.", lessons: [
        { title: "Workspace, language toggle, and status", text: "The InPage interface includes menu/ribbon tools, status bar, rulers, document area, scrollbars, and context-sensitive cursors. Toggle English and Urdu input using the configured language control and verify that the selected font and direction are correct." },
        { title: "Text boxes and title text", text: "Text boxes contain body copy; title text boxes support display headings. Create frames with appropriate size, set right-to-left direction, choose an installed compatible Urdu font, and check joining, punctuation, and line breaks." },
        { title: "Picture boxes, graphic boxes, and lines", text: "Picture boxes place raster images; graphic boxes contain visual elements; lines and shapes define structure. Keep aspect ratios when resizing images, use high-quality assets, and keep text legible over backgrounds." },
        { title: "Rulers, guides, and text chains", text: "Rulers and guides align content and establish margins. Text chains link frames so text can flow from one box to another. Inspect for overset text and keep heading, body, and footer alignment consistent." },
        { title: "Export and verify Urdu documents", text: "Save the editable project and export a proof in the requested format. Open the exported PDF on another viewer or computer to verify Urdu shaping, fonts, right-to-left order, and page breaks." }
      ], practice: "Create a one-page Urdu institute announcement with title and body frames, a picture box, graphic accent, guides, and linked text. Export a PDF and verify text rendering." }
    ],
    labs: [
      { title: "Customize an image non-destructively", steps: ["Open a permitted practice image and save an editable copy.", "Use a selection to isolate one area and apply a reversible adjustment layer.", "Compare before and after, inspect edges, and preserve the original layer."] },
      { title: "Design a visiting card", steps: ["Confirm required name/contact text, print dimensions, bleed, color profile, and safe margins.", "Create a front/back layout with readable hierarchy, permitted logo, and consistent colors.", "Keep text and images editable; export a proof PDF and verify phone/email spelling."] },
      { title: "Design a brochure and book cover", steps: ["Plan panel/page dimensions, fold or trim safe areas, audience, and content hierarchy.", "Use aligned headings, body text, images with rights, and contrast.", "Check spelling, resolution, margins, bleed, and print proof before export."] },
      { title: "Design banners and social posts", steps: ["Choose the target platform dimensions and intended viewing distance.", "Use a concise message, legible type, and a clear focal point.", "Export at the specified pixel dimensions and verify crop and text at phone size."] },
      { title: "Create logos, ID cards, and stamps", steps: ["Draw logo components as simple vector shapes and test at small sizes.", "For an ID card, use only fictional sample details unless authorized; never publish real student IDs.", "Prepare stamp artwork in the printer's specified single-color dimensions and test line thickness."] },
      { title: "Prepare print and web deliverables", steps: ["Keep a layered/vector editable master and create a separate output copy.", "For print, confirm dimensions, profile, bleed, fonts, and PDF settings with the provider.", "For web, resize to actual display dimensions, select an efficient format, and inspect quality.", "Name and package files clearly with usage rights and linked assets."] },
      { title: "Compose an Urdu InPage layout", steps: ["Set page size and margins, choose the configured Urdu input, and create a title frame and body frame.", "Enter sample Urdu text and check right-to-left alignment and shaping.", "Place a permitted image and graphic element, use guides, and link additional text frames if needed.", "Export a PDF and verify that fonts and text remain readable on a second viewer."] }
    ],
    links: [["Adobe Photoshop User Guide", "Official guides to selections, layers, color, actions, and export.", "https://helpx.adobe.com/photoshop/user-guide.html"], ["CorelDRAW Help", "Official CorelDRAW documentation and learning resources.", "https://www.coreldraw.com/en/learn/"], ["Adobe Color", "Explore accessible color combinations and palettes.", "https://color.adobe.com/"], ["GFXMentor · YouTube", "Graphic design lessons; confirm the application version and usage rights.", "https://www.youtube.com/@GFXMentor"]]
  },
  "capstone-project": {
    outcomes: "Select a real computational problem, investigate requirements, design and build a solution, test it, improve it, document it, and present professional work.",
    modules: [
      { title: "Explore Fields and Select a Problem", weeks: 2, hours: 12, introduction: "Choose an achievable project from application development, database development, web application development, or graphic design.", lessons: [
        { title: "Explore project fields", text: "Review possible software and design problems in Python applications, database development, web applications, and graphic design. Identify users, context, access needs, and the outcome that would make the project useful." },
        { title: "Find a suitable problem", text: "Choose a problem that is specific, meaningful, and small enough for the available time and tools. Avoid projects that require unsafe access, sensitive personal data, expensive services, or unlicensed content." },
        { title: "Compare ideas and set scope", text: "Score candidate problems by user value, feasibility, skills, time, data availability, and risk. Define what the first version will and will not do. Identify a supervisor and agree on milestones and evaluation criteria." },
        { title: "Proposal and success criteria", text: "Write a brief proposal describing the problem, intended users, objectives, proposed solution, tools, risks, and expected deliverables. Define measurable acceptance criteria so the project can be tested." }
      ], practice: "Prepare a one-page proposal for an institute or community problem. Include the user, current issue, proposed project type, scope, three success criteria, and data/privacy safeguards." },
      { title: "Understand and Analyze the Selected Problem", weeks: 2, hours: 12, introduction: "Investigate users, workflows, requirements, constraints, and risks before implementation.", lessons: [
        { title: "Study the current workflow", text: "Observe or discuss the current process with permission. Separate facts from assumptions and avoid collecting personal data that is not required. Map inputs, steps, decisions, outputs, and pain points." },
        { title: "Functional requirements", text: "Functional requirements describe actions the system should perform, such as creating a record or generating a report. Write them as testable statements and prioritize essentials over optional features." },
        { title: "Non-functional requirements and constraints", text: "Non-functional requirements describe qualities such as usability, reliability, accessibility, performance, security, and compatibility. Note constraints such as available devices, offline use, budget, software licensing, and time." },
        { title: "Use cases, data, and risk analysis", text: "List user roles and use cases. Identify data fields, sources, access rules, retention needs, and backup requirements. Assess risks such as data loss, unauthorized access, incorrect output, scope growth, and dependency failure; define mitigations." },
        { title: "Requirements review and approval", text: "Review the scope, data handling, and acceptance criteria with the supervisor. Resolve ambiguous terms before building and record approved changes to avoid misunderstandings." }
      ], practice: "Create a requirements table with ID, requirement, priority, acceptance test, and risk. Review it with a supervisor and record agreed changes." },
      { title: "Design and Develop the Solution", weeks: 10, hours: 60, introduction: "Plan the architecture and build the selected application, database, website, or graphic deliverable in manageable increments.", lessons: [
        { title: "Choose a solution architecture", text: "Select tools appropriate to the project and your skills: a Python script or GUI, a normalized database, a static or dynamic web application, or a design package. Draw the main components and how information moves between them." },
        { title: "Plan interface, data, and visual design", text: "Sketch screens or assets before detailed implementation. For data projects, design entities, keys, relationships, and validation. For websites, plan semantic pages and responsive layouts. For graphics, define dimensions, color, typography, and export requirements." },
        { title: "Set up a safe project workspace", text: "Create a clear directory structure for source, assets, tests, documentation, and output. Use versioned backups or source control where available. Keep passwords, tokens, personal records, and private data out of source files and screenshots." },
        { title: "Build a minimum viable version", text: "Implement the smallest feature set that proves the main workflow. Build incrementally, run the application frequently, and retain working versions. Use sample data and placeholder credentials rather than real user records." },
        { title: "Implement features and error handling", text: "Develop prioritized features in small units. Validate inputs, handle expected failures clearly, and provide useful feedback without exposing internal secrets or technical traces to users." },
        { title: "Design for accessibility and usability", text: "Use clear labels, understandable navigation, sufficient contrast, keyboard access, consistent controls, and readable content. Ask representative users to try the main task and observe where they hesitate." },
        { title: "Manage project time and changes", text: "Break the ten-week development period into weekly goals. Record decisions, issues, and scope changes. Discuss requested changes with the supervisor and assess their effect on testing and deadlines before accepting them." },
        { title: "Use assets, libraries, and licenses", text: "Use original, public-domain, or properly licensed images, fonts, code, and audio. Check library documentation and versions. Credit sources and retain licenses; do not copy other people's project or code as your own." }
      ], practice: "Build the core workflow end-to-end and show a weekly progress demo to the supervisor. Keep a changelog, sample data, and a backup of the last working version." },
      { title: "Test the Developed Solution", weeks: 2, hours: 12, introduction: "Check the solution against requirements, find defects, test user workflows, and record evidence.", lessons: [
        { title: "Create a test plan", text: "Map each requirement to one or more test cases with preconditions, input, expected result, actual result, and status. Include normal, boundary, invalid, and permission-related cases." },
        { title: "Functional and integration testing", text: "Test each major feature independently and then test end-to-end workflows. For a web application, check pages, links, forms, data flow, and responsive layouts. For a database, check constraints and query results; for graphics, check dimensions, legibility, and exports." },
        { title: "Usability, compatibility, and performance", text: "Ask a small number of permitted users to complete representative tasks. Test on target devices and browsers where available. Confirm response time and file sizes are appropriate for the intended environment." },
        { title: "Security, privacy, and backup checks", text: "Review input validation, account access, permissions, dependencies, and sensitive data. Test backup and restoration with non-sensitive project data. Never test against systems or accounts without authorization." },
        { title: "Defect logging and evidence", text: "Record reproducible defects with severity, steps, expected/actual behavior, and screenshots that contain no private data. Retest fixes and preserve the results as evidence." }
      ], practice: "Run a documented test suite against the acceptance criteria. Include at least one valid, invalid, boundary, usability, and recovery test and retain a defect/fix record." },
      { title: "Modify and Improve the Solution", weeks: 2, hours: 12, introduction: "Prioritize test findings, implement agreed changes, and retest without destabilizing working features.", lessons: [
        { title: "Prioritize feedback and defects", text: "Sort issues by severity, user impact, likelihood, and effort. Fix critical correctness, data-loss, privacy, and access problems before cosmetic refinements. Confirm the proposed change with the supervisor." },
        { title: "Make controlled revisions", text: "Create a backup or version before significant changes. Modify one concern at a time, explain the change, and keep a record of files or assets affected." },
        { title: "Regression testing", text: "After a change, rerun tests for the modified feature and related workflows. Confirm previously working requirements still pass and update test evidence." },
        { title: "Final review and release readiness", text: "Check content, spelling, links, access, packaging, compatibility, backup, and user guidance. Remove test accounts and sample private data before delivery." }
      ], practice: "Select two prioritized issues from testing, implement fixes, rerun affected and regression tests, and summarize the change and verification evidence." },
      { title: "Prepare the Project Report and Presentation", weeks: 2, hours: 12, introduction: "Document the problem, design, implementation, testing, results, limitations, and future work clearly and honestly.", lessons: [
        { title: "Project report structure", text: "A report can include title page, abstract/summary, problem statement, objectives, scope, requirements, design diagrams, tools, implementation, test plan and results, limitations, conclusion, references, and appendices. Follow the supervisor's required format." },
        { title: "Use diagrams and evidence", text: "Include relevant ERDs, flowcharts, interface sketches, architecture diagrams, screenshots, or design proofs. Add captions and explain what each item demonstrates. Remove personal information and credentials from evidence." },
        { title: "Cite sources and state limitations", text: "Credit books, websites, libraries, code, fonts, and assets using the required citation style. Distinguish your work from third-party materials. Report known limitations and failed tests accurately rather than claiming unsupported results." },
        { title: "Demonstrate and present", text: "Prepare a short walkthrough aligned with objectives and acceptance criteria. Use a clean demo dataset, test the equipment, rehearse transitions, and prepare a backup recording or screenshots in case the live demo fails." },
        { title: "Portfolio and professional practice", text: "Package a portfolio-ready project only if permissions allow. Describe your contribution, tools, and outcomes honestly. For freelance opportunities, define deliverables, scope, payment arrangements, revision limits, licensing, and handoff in writing." }
      ], practice: "Prepare a complete draft report and a short project demonstration. Ask the supervisor to review it, correct citations and evidence, and submit the final source, outputs, and report using the approved method." }
    ],
    labs: [
      { title: "Select and approve a project", steps: ["List at least three possible problems in Python, databases, web applications, or graphic design.", "Compare feasibility, user value, available time, tools, privacy, and risk.", "Choose one bounded project and submit a proposal with measurable success criteria.", "Get supervisor approval before collecting data or beginning deployment."] },
      { title: "Analyze requirements and plan", steps: ["Map the current user workflow and identify the main pain point.", "Write functional and non-functional requirements with priorities and acceptance tests.", "Create a use-case list and a design sketch, ERD, flowchart, or visual mockup as appropriate.", "Identify data/privacy, licensing, backup, and delivery risks."] },
      { title: "Build a working solution", steps: ["Create a clean project structure and save a baseline version.", "Implement a minimum viable end-to-end workflow using fictional or approved data.", "Add prioritized features incrementally and demonstrate progress each week.", "Document decisions, dependencies, and changes; back up the working project."] },
      { title: "Test and collect evidence", steps: ["Write test cases for each acceptance criterion.", "Test valid, invalid, boundary, permission, and recovery behavior as relevant.", "Ask permitted users to try the main task and record actionable feedback.", "Log defects and capture evidence with all private information removed."] },
      { title: "Revise and regression test", steps: ["Prioritize test findings by risk and user impact.", "Agree changes with the supervisor and back up before implementing.", "Fix selected issues and rerun tests for changed and related behavior.", "Update the change log and report the remaining known limitations."] },
      { title: "Write report and prepare final handoff", steps: ["Prepare the report with problem, objectives, scope, design, development, tests/results, limitations, conclusion, and citations.", "Check diagrams and screenshots are labeled and contain no secrets or personal data.", "Prepare a short demonstration using a clean sample dataset and test backup equipment.", "Deliver source files, final outputs, dependencies/instructions, and report as required; retain an authorized archive."] }
    ],
    links: [["Python Tutorial", "Official Python learning material for application projects.", "https://docs.python.org/3/tutorial/"], ["MDN Web Development", "Guides for building accessible, standards-based websites.", "https://developer.mozilla.org/en-US/docs/Learn"], ["MySQL Documentation", "Official documentation for relational database project work.", "https://dev.mysql.com/doc/"], ["W3C Web Accessibility Initiative", "Guidance for making web content accessible.", "https://www.w3.org/WAI/fundamentals/"], ["Creative Commons Licenses", "Understand permissions and attribution for creative assets.", "https://creativecommons.org/share-your-work/cclicenses/"]]
  }
};

function escapeCodeSample(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const webHtmlTagRows = [
  ["html", "<html lang=\"en\">…</html>", "Root element; language identifies the page language.", "Every HTML page."],
  ["head", "<head>…</head>", "Contains metadata, title, and linked resources.", "Page title, CSS links, scripts, and metadata."],
  ["base", "<base href=\"https://example.edu/\">", "Sets the base URL for relative URLs in the document; use at most one.", "A page whose relative links share a deliberate base URL."],
  ["title", "<title>Course Portal</title>", "Names the document in browser tabs and bookmarks.", "A descriptive page/tab title."],
  ["meta", "<meta name=\"description\" content=\"…\">", "Provides metadata such as charset, viewport, and description.", "Mobile viewport and search snippets."],
  ["link", "<link rel=\"stylesheet\" href=\"styles.css\">", "Links an external resource, commonly CSS or a favicon.", "Stylesheets and site icons."],
  ["style", "<style>…</style>", "Embeds CSS in the document head.", "Small demonstrations; external CSS is better for shared sites."],
  ["script", "<script src=\"app.js\" defer></script>", "Loads or embeds JavaScript.", "Interactive menus, forms, and page behavior."],
  ["noscript", "<noscript>JavaScript is unavailable.</noscript>", "Provides fallback text when scripting is disabled.", "Explain unavailable script-dependent features."],
  ["body", "<body>…</body>", "Contains the document's visible content.", "All page content."],
  ["header", "<header>…</header>", "Introductory content for a page or section.", "Site logo, page heading, or article header."],
  ["nav", "<nav aria-label=\"Main\">…</nav>", "A group of major navigation links.", "Main menu or course contents."],
  ["main", "<main>…</main>", "The page's primary, unique content.", "Main course lesson or product detail."],
  ["address", "<address>Contact: <a href=\"mailto:info@example.edu\">Email us</a></address>", "Contact information for the nearest article or page.", "Author or institute contact details."],
  ["section", "<section aria-labelledby=\"topics\">…</section>", "Thematically grouped content, usually with a heading.", "Course modules or FAQ sections."],
  ["article", "<article>…</article>", "Self-contained content that can stand alone.", "News story, blog post, or product review."],
  ["hgroup", "<hgroup><h1>Web Development</h1><p>Course guide</p></hgroup>", "Groups a heading with related secondary content such as a subtitle.", "A course title with a subtitle."],
  ["aside", "<aside>…</aside>", "Related but secondary content.", "Related links or course sidebar."],
  ["footer", "<footer>…</footer>", "Footer for a page or section.", "Copyright, contact details, and credits."],
  ["search", "<search><form role=\"search\">…</form></search>", "Container for search or filtering controls.", "A course or site search area."],
  ["h1-h6", "<h2>Lesson title</h2>", "Six levels of section headings; preserve logical hierarchy.", "Page title and nested lesson headings."],
  ["p", "<p>Lesson description.</p>", "A paragraph of text.", "Explanations and article copy."],
  ["br", "Line one<br>Line two", "A line break within content where a line break matters.", "Poetry or postal address; not spacing."],
  ["hr", "<hr>", "A thematic break between topics.", "Separate sections in an article."],
  ["pre", "<pre><code>const n = 1;</code></pre>", "Preformatted text that preserves whitespace.", "Code samples and terminal output."],
  ["blockquote", "<blockquote><p>Quoted text.</p></blockquote>", "A longer quotation from another source.", "A cited quotation in a lesson."],
  ["q", "<q>Short quotation</q>", "A short inline quotation.", "Inline quoted wording."],
  ["ol", "<ol><li>Step one</li></ol>", "An ordered list where sequence matters.", "Setup steps and recipes."],
  ["ul", "<ul><li>Feature</li></ul>", "An unordered list.", "Feature lists and navigation."],
  ["li", "<li>List item</li>", "An item inside ol, ul, or menu.", "Each bullet or numbered step."],
  ["dl", "<dl><dt>RAM</dt><dd>Temporary memory</dd></dl>", "A description list of terms and definitions.", "Glossaries and specification lists."],
  ["dt", "<dt>CPU</dt>", "A term in a description list.", "A glossary term."],
  ["dd", "<dd>Executes instructions</dd>", "A description/value for a dt term.", "A glossary definition."],
  ["figure", "<figure><img src=\"lab.jpg\" alt=\"…\"><figcaption>Lab setup</figcaption></figure>", "Self-contained media or illustration.", "A diagram with a caption."],
  ["figcaption", "<figcaption>Network diagram</figcaption>", "Caption for its parent figure.", "Image or chart caption."],
  ["div", "<div class=\"card\">…</div>", "Generic block container when no semantic element fits.", "Styling a reusable card."],
  ["span", "<span class=\"status\">Ready</span>", "Generic inline container when no semantic element fits.", "Styling a word or status inline."],
  ["a", "<a href=\"/courses\">Browse courses</a>", "A hyperlink to a URL or page fragment.", "Navigation, citations, and contact links."],
  ["em", "<em>Important emphasis</em>", "Stress emphasis that can affect meaning.", "Emphasize a warning in prose."],
  ["strong", "<strong>Required</strong>", "Strong importance or urgency.", "Required field or safety warning."],
  ["small", "<small>Terms apply.</small>", "Side comments or fine print.", "Image credits or legal notes."],
  ["bdi", "<bdi>student name</bdi>", "Isolates text whose writing direction may differ from surrounding text.", "Safely displaying user names in mixed-direction content."],
  ["bdo", "<bdo dir=\"rtl\">text</bdo>", "Overrides the text direction of its contents.", "A short right-to-left text example."],
  ["wbr", "long-product-name<wbr>-edition", "Suggests a possible line-break opportunity.", "Breaking a long identifier on narrow screens."],
  ["mark", "<mark>matching text</mark>", "Text highlighted for relevance.", "Search-result match highlighting."],
  ["abbr", "<abbr title=\"HyperText Markup Language\">HTML</abbr>", "An abbreviation with an optional expansion.", "Technical glossary text."],
  ["cite", "<cite>Web Development Essentials</cite>", "Title of a cited creative work.", "Book, report, or course title."],
  ["code", "<code>document.title</code>", "A fragment of computer code.", "API names and inline code."],
  ["kbd", "<kbd>Ctrl</kbd>+<kbd>S</kbd>", "User input from a keyboard or other input device.", "Documenting a keyboard shortcut."],
  ["samp", "<samp>File saved successfully</samp>", "Sample output from a computer program.", "Showing a terminal or application message."],
  ["var", "<var>total</var> = <var>price</var> × <var>quantity</var>", "A variable name in a mathematical or programming expression.", "Explaining a formula or code variable."],
  ["sub/sup", "H<sub>2</sub>O; x<sup>2</sup>", "Subscript or superscript.", "Chemical formulas and mathematical notation."],
  ["del/ins", "<del>old</del><ins>new</ins>", "Marks deleted and inserted revisions.", "An edited comparison."],
  ["b/i/u/s", "<b>keyword</b>, <i>term</i>, <u>annotation</u>, <s>unavailable</s>", "Attention/voice styling, annotation, or no-longer-relevant text; use semantic alternatives where appropriate.", "Labels, foreign terms, annotations, and outdated prices."],
  ["time", "<time datetime=\"2026-10-13\">13 October</time>", "Machine-readable date or time.", "Events, schedules, and publication dates."],
  ["data", "<data value=\"SKU-42\">Blue mug</data>", "Associates visible text with a machine-readable value.", "A product name linked to its SKU."],
  ["ruby/rt/rp", "<ruby>漢<rt>kan</rt><rp>(</rp><rp>)</rp></ruby>", "Ruby annotations for pronunciation; rp provides fallback parentheses.", "Pronunciation guides in East Asian text."],
  ["table", "<table><caption>Scores</caption>…</table>", "Tabular data; not page layout.", "Marks, schedules, or price comparisons."],
  ["caption", "<caption>Student results</caption>", "Accessible title for a table.", "Explain what a data table contains."],
  ["thead/tbody/tfoot", "<thead>…</thead><tbody>…</tbody><tfoot>…</tfoot>", "Groups table header, body, and footer rows.", "Long tables with repeated headers or totals."],
  ["tr", "<tr><td>DIT</td></tr>", "A table row.", "Each record in a data table."],
  ["th", "<th scope=\"col\">Course</th>", "A table header cell.", "Column or row headings."],
  ["td", "<td>Networking</td>", "A table data cell.", "A value in a table row."],
  ["colgroup/col", "<colgroup><col span=\"2\"></colgroup>", "Groups/identifies table columns for shared attributes.", "Column styling or width in a data table."],
  ["form", "<form action=\"/enrol\" method=\"post\">…</form>", "Groups controls for submitting user input.", "Enrollment or contact form."],
  ["label", "<label for=\"email\">Email</label>", "Names a form control and enlarges its clickable target.", "Every input control."],
  ["input", "<input id=\"email\" name=\"email\" type=\"email\">", "Single-line or specialized form control.", "Email, password, checkbox, or date input."],
  ["textarea", "<textarea name=\"message\"></textarea>", "Multi-line text input.", "Feedback or message field."],
  ["button", "<button type=\"submit\">Send</button>", "A clickable action control.", "Submit, reset, or JavaScript action."],
  ["select/option/optgroup", "<select><optgroup label=\"Part I\"><option>ICT</option></optgroup></select>", "A menu of selectable options and groups.", "Course or country selection."],
  ["datalist", "<input list=\"cities\"><datalist id=\"cities\"><option value=\"Serai Naurang\"></datalist>", "Suggested values for an input.", "Autocomplete suggestions."],
  ["fieldset/legend", "<fieldset><legend>Contact details</legend>…</fieldset>", "Groups related form controls and names the group.", "Address or account sections."],
  ["output", "<output name=\"total\">0</output>", "Represents a calculated result.", "Shopping-cart total or form calculation."],
  ["progress", "<progress value=\"3\" max=\"10\">30%</progress>", "Shows completion progress.", "Upload or course completion progress."],
  ["meter", "<meter min=\"0\" max=\"100\" value=\"78\">78%</meter>", "Shows a measurement within a known range.", "Storage usage or assessment score."],
  ["img", "<img src=\"logo.png\" alt=\"KPI Learning Platform\">", "Embeds an image; provide appropriate alt text.", "Logo, diagram, product photo."],
  ["picture/source", "<picture><source srcset=\"hero.webp\" type=\"image/webp\"><img src=\"hero.jpg\" alt=\"Campus\"></picture>", "Offers alternative responsive image sources.", "Serve modern formats or mobile crops."],
  ["audio", "<audio controls src=\"lesson.mp3\">…</audio>", "Embeds audio playback.", "Recorded lesson or pronunciation sample."],
  ["video", "<video controls playsinline src=\"lesson.mp4\">…</video>", "Embeds video playback.", "Tutorial or product demonstration."],
  ["track", "<track kind=\"captions\" src=\"captions.vtt\" srclang=\"en\" label=\"English\">", "Adds timed text such as captions or subtitles.", "Accessible video captions."],
  ["map/area", "<map name=\"campus\"><area shape=\"rect\" coords=\"…\" href=\"lab.html\" alt=\"Computer lab\"></map>", "Defines clickable regions in an image map.", "A diagram with linked regions."],
  ["iframe", "<iframe src=\"https://example.edu\" title=\"Course portal\"></iframe>", "Embeds another browsing context; use trusted origins and permissions.", "Embedded map or permitted external tool."],
  ["details/summary", "<details><summary>Show answer</summary><p>Explanation</p></details>", "Native disclosure widget with a visible heading.", "FAQ and expandable lesson notes."],
  ["dialog", "<dialog id=\"notice\">Notice</dialog>", "Represents a dialog or modal window.", "Confirmation or application dialog."],
  ["menu", "<menu><li>…</li></menu>", "A list of commands or menu items.", "Contextual command list where appropriate."],
  ["canvas", "<canvas id=\"chart\" width=\"400\" height=\"200\"></canvas>", "A script-drawn bitmap surface.", "Games and custom visualizations with accessible fallback."],
  ["svg", "<svg role=\"img\" aria-label=\"Trend chart\">…</svg>", "Inline Scalable Vector Graphics vocabulary, embedded in HTML.", "Icons, diagrams, and charts."],
  ["template", "<template id=\"row-template\"><li>…</li></template>", "Stores markup not rendered until cloned by JavaScript.", "Reusable client-side list item markup."],
  ["slot", "<slot name=\"heading\"></slot>", "Placeholder for content in a Web Component shadow tree.", "Custom elements."],
  ["custom elements", "<course-card></course-card>", "Author-defined element names containing a hyphen.", "Reusable Web Component such as a course card."]
];

const webAttributeRows = [
  ["id", "Global", "Unique identifier in one document; labels, CSS, and fragments.", "<section id=\"fees\">…</section>"],
  ["class", "Global", "Reusable CSS/JavaScript grouping.", "<article class=\"course-card\">…</article>"],
  ["title", "Global / iframe / document", "Advisory text or document title, depending on element.", "<iframe title=\"Map of campus\">…</iframe>"],
  ["lang", "html / any element", "Language of content for pronunciation and translation.", "<html lang=\"en\">"],
  ["dir", "Global", "Text direction: ltr, rtl, or auto.", "<p dir=\"rtl\" lang=\"ur\">…</p>"],
  ["hidden", "Global", "Indicates content should not be presented.", "<p hidden>Draft note</p>"],
  ["tabindex", "Global / focusable elements", "Keyboard focus behavior; use 0 or -1 carefully.", "<div tabindex=\"0\">Focusable panel</div>"],
  ["role", "Global (ARIA)", "Accessibility role when native semantics are insufficient.", "<div role=\"status\">Saved</div>"],
  ["aria-label", "Global (ARIA)", "Accessible name when no visible label provides one.", "<button aria-label=\"Close\">×</button>"],
  ["aria-labelledby", "Global (ARIA)", "References visible element(s) that name a control/region.", "<section aria-labelledby=\"topic-title\">…</section>"],
  ["href", "a / link / area", "Destination URL or page fragment.", "<a href=\"/courses/dit\">DIT</a>"],
  ["target", "a / form", "Where navigation or form response opens.", "<a target=\"_blank\" rel=\"noopener\">…</a>"],
  ["rel", "a / link", "Relationship to the destination; security and resource hints.", "<a rel=\"noopener noreferrer\" href=\"…\">…</a>"],
  ["src", "img / script / iframe / audio / video / source", "URL of an external resource.", "<script src=\"app.js\" defer></script>"],
  ["alt", "img / area / input image", "Text alternative for meaningful images; empty for decorative images.", "<img src=\"lab.png\" alt=\"Students wiring a LAN\">"],
  ["width / height", "img / video / canvas / source", "Intrinsic dimensions or media dimensions.", "<img src=\"logo.png\" width=\"160\" height=\"60\" alt=\"…\">"],
  ["loading", "img / iframe", "Loading hint such as lazy or eager.", "<img src=\"diagram.jpg\" loading=\"lazy\" alt=\"…\">"],
  ["type", "input / button / script / link / source", "Control, script, or resource type.", "<input type=\"email\">"],
  ["name", "form controls / form", "Submitted field name or target name.", "<input name=\"email\" type=\"email\">"],
  ["value", "input / option / button / data", "Control's value or machine-readable value.", "<option value=\"part-1\">Part I</option>"],
  ["for", "label / output", "Associates label/output with a control.", "<label for=\"phone\">Phone</label>"],
  ["placeholder", "input / textarea", "Example hint inside an empty control; not a label.", "<input placeholder=\"name@example.com\">"],
  ["required", "input / select / textarea", "Requires a value before native form submission.", "<input name=\"email\" required>"],
  ["min / max / step / minlength / maxlength", "Form controls", "Constrains numeric, date, or text values.", "<input type=\"number\" min=\"1\" max=\"100\" step=\"1\">"],
  ["pattern", "input", "Regular expression constraint for supported text inputs.", "<input pattern=\"[A-Z]{2}[0-9]{4}\">"],
  ["autocomplete", "Form controls / form", "Hints whether/how a browser may autofill a value.", "<input autocomplete=\"email\">"],
  ["disabled / readonly", "Form controls", "Disables interaction/submission, or prevents editing while remaining focusable/submitted.", "<input value=\"KPI\" readonly>"],
  ["checked / selected / multiple", "input / option / select", "Initial selection state or allow multiple choices.", "<input type=\"checkbox\" checked>"],
  ["action / method / enctype", "form", "Submission endpoint, HTTP method, and body encoding.", "<form action=\"/enrol\" method=\"post\">"],
  ["accept", "input type=file", "Hints allowed file types; server must still validate.", "<input type=\"file\" accept=\"image/*\">"],
  ["controls / autoplay / muted / loop / poster", "audio / video", "Media playback UI and playback behavior.", "<video controls muted poster=\"cover.jpg\">…</video>"],
  ["kind / srclang / label / default", "track", "Caption type, language, display label, and default track.", "<track kind=\"captions\" srclang=\"en\" label=\"English\">"],
  ["colspan / rowspan / scope", "table cells", "Cell span and whether a header applies to row or column.", "<th scope=\"col\" colspan=\"2\">Part I</th>"],
  ["data-*", "Global custom data", "Stores app-specific text data for scripts; not a security boundary.", "<button data-course-id=\"dit\">Open</button>"],
  ["defer / async", "script", "Controls external classic script fetching/execution timing.", "<script src=\"app.js\" defer></script>"],
  ["srcset / sizes", "img / source", "Responsive image candidates and layout size hints.", "<img srcset=\"small.jpg 480w, large.jpg 1200w\" sizes=\"100vw\" src=\"small.jpg\" alt=\"…\">"],
  ["sandbox / allow / referrerpolicy", "iframe", "Restricts embedded content and controls delegated features/referrer.", "<iframe sandbox src=\"…\" title=\"Demo\"></iframe>"],
  ["open", "details / dialog", "Initial open state of a disclosure or dialog.", "<details open><summary>Notes</summary>…</details>"],
  ["contenteditable / draggable", "Global", "Editing or drag behavior hints; add accessible interaction.", "<p contenteditable=\"true\">Editable note</p>"]
];

const webCodeSamples = {
  form: `<form action="/enrol" method="post">
  <label for="student-email">Email address</label>
  <input id="student-email" name="email" type="email"
         autocomplete="email" required>
  <button type="submit">Continue</button>
</form>`,
  cssSelectors: `/* Type, class, ID, descendant, attribute */
p { color: #333; }
.notice { background: #fff8e8; }
#main-title { color: #a9232b; }
nav a { text-decoration: none; }
input[type="email"] { border-color: #777; }`,
  cssBox: `* { box-sizing: border-box; }
.card {
  width: min(100%, 36rem);
  margin: 1rem auto;
  padding: 1.25rem;
  border: 1px solid #ddd;
  outline-offset: 3px;
}`,
  cssText: `body { font: 1rem/1.6 system-ui, sans-serif; }
h1 { letter-spacing: -.03em; }
a:hover, a:focus-visible { color: #a9232b; }
table { width: 100%; border-collapse: collapse; }
th, td { padding: .6rem; text-align: left; }`,
  cssLayout: `.row { display: flex; gap: 1rem; }
.badge { display: inline-block; }
.sticky { position: sticky; top: 0; z-index: 2; }
.scroll-panel { overflow: auto; max-height: 20rem; }
.overlay { background: rgb(0 0 0 / 40%); }`,
  cssResponsive: `.menu { display: flex; gap: 1rem; }
.dropdown-panel { display: none; }
.dropdown:hover .dropdown-panel,
.dropdown:focus-within .dropdown-panel {
  display: block;
}
@media (max-width: 40rem) {
  .menu { flex-direction: column; }
}`,
  jsIntro: `// script.js
console.log("Page script loaded");
const heading = document.querySelector("h1");
if (heading) {
  heading.textContent = "JavaScript is connected";
}`,
  jsVars: `const studentName = "Amina";
let marks = Number("82");
const passed = Number.isFinite(marks) && marks >= 50;
console.log(studentName, typeof marks, passed);`,
  jsOperators: `const price = 1200;
const quantity = 2;
const total = price * quantity;
const eligible = total >= 2000 && quantity > 0;
console.log({ total, eligible });`,
  jsConditions: `function gradeFor(score) {
  if (!Number.isFinite(score) || score < 1 || score > 100) {
    return "Enter a score from 1 to 100";
  }
  if (score <= 50) return "Average";
  if (score <= 70) return "Good";
  return "Excellent";
}

const day = "Monday";
switch (day) {
  case "Monday":
    console.log("Class day");
    break;
  default:
    console.log("Check the schedule");
}`,
  jsLoops: `const scores = [65, 81, 48];
let total = 0;
for (const score of scores) {
  if (score < 0) continue;
  total += score;
}
const average = scores.length ? total / scores.length : 0;
console.log(average);

let countdown = 3;
while (countdown > 0) {
  console.log(countdown);
  countdown -= 1;
}`,
  jsFunctions: `function calculateArea(width, height = width) {
  if (width <= 0 || height <= 0) {
    return null;
  }
  const area = width * height;
  return area;
}

const squareArea = calculateArea(5);
console.log(squareArea);`,
  jsArrays: `const topics = ["HTML", "CSS"];
topics.push("JavaScript");
const longTopics = topics.filter(topic => topic.length > 3);
const randomDice = Math.floor(Math.random() * 6) + 1;
const wholeNumber = Number.parseInt("42", 10);
console.log(longTopics, randomDice, wholeNumber);`,
  jsDom: `const button = document.querySelector("#greet");
const output = document.querySelector("#output");

button.addEventListener("click", () => {
  output.textContent = "Welcome to the course!";
});`,
  jsScore: `<label for="score">Score (1-100)</label>
<input id="score" type="number" min="1" max="100" step="1">
<button id="check-score" type="button">Check score</button>
<p id="score-result" role="status" aria-live="polite"></p>

<script>
const scoreInput = document.querySelector("#score");
const checkButton = document.querySelector("#check-score");
const result = document.querySelector("#score-result");

checkButton.addEventListener("click", () => {
  const score = Number(scoreInput.value);
  if (!scoreInput.value || !Number.isInteger(score) || score < 1 || score > 100) {
    result.textContent = "Enter a whole number from 1 to 100.";
    return;
  }
  const grade = score <= 50 ? "Average" : score <= 70 ? "Good" : "Excellent";
  result.textContent = "Result: " + grade;
});
</script>`,
  jsList: `<form id="topic-form">
  <label for="topic">New topic</label>
  <input id="topic" name="topic" required maxlength="60">
  <button type="submit">Add topic</button>
</form>
<ul id="topic-list"></ul>

<script>
const form = document.querySelector("#topic-form");
const input = document.querySelector("#topic");
const list = document.querySelector("#topic-list");

form.addEventListener("submit", event => {
  event.preventDefault();
  const value = input.value.trim();
  if (!value) return;
  const item = document.createElement("li");
  item.textContent = value;
  list.append(item);
  form.reset();
  input.focus();
});
</script>`,
  starterHtml: `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>My First Web Page</title>
  <link rel="stylesheet" href="styles.css">
  <script src="script.js" defer></script>
</head>
<body>
  <main>
    <h1>Welcome to my page</h1>
    <p id="message">HTML gives this content structure.</p>
    <button id="change-message" type="button">Change message</button>
  </main>
</body>
</html>`,
  starterCss: `* { box-sizing: border-box; }
body {
  margin: 0;
  padding: 2rem;
  font: 1rem/1.6 system-ui, sans-serif;
  color: #292a2e;
  background: #f7f7f7;
}
main { max-width: 42rem; margin: auto; }
button { padding: .7rem 1rem; cursor: pointer; }
button:focus-visible { outline: 3px solid #b32630; }`,
  starterJs: `const button = document.querySelector("#change-message");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
  message.textContent = "JavaScript responds to the button click.";
});`
};

const webReferenceHtml = `
  <section class="ict-links-section web-reference-section" id="web-vscode-setup">
    <div class="dit-eyebrow">START CODING</div><h2>Set up VS Code step by step</h2>
    <p class="ict-section-intro">VS Code is a free code editor. HTML, CSS, and JavaScript work in a browser without a compiler or paid extension. Download from the official site and use trusted extensions only.</p>
    <ol class="web-setup-steps">
      <li><strong>Download VS Code:</strong> <a href="https://code.visualstudio.com/download" target="_blank" rel="noopener noreferrer">Get Visual Studio Code from the official download page ↗</a>. Choose the Windows installer that matches your computer.</li>
      <li><strong>Install and launch:</strong> run the installer, review its options, open VS Code, and choose a workspace folder you own.</li>
      <li><strong>Create a project:</strong> make a folder such as <code>web-practice</code>. In VS Code choose <kbd>File</kbd> → <kbd>Open Folder</kbd> and select it.</li>
      <li><strong>Create files:</strong> add <code>index.html</code>, <code>styles.css</code>, and <code>script.js</code> in the Explorer. Keep paths and spelling consistent.</li>
      <li><strong>Write the HTML skeleton:</strong> type <code>!</code> and press <kbd>Tab</kbd> or <kbd>Enter</kbd> when Emmet abbreviation completion is offered; then set the page title and language.</li>
      <li><strong>Link CSS and JavaScript:</strong> put <code>&lt;link rel="stylesheet" href="styles.css"&gt;</code> in <code>&lt;head&gt;</code> and <code>&lt;script src="script.js" defer&gt;&lt;/script&gt;</code> near the end of <code>&lt;body&gt;</code> or in the head with <code>defer</code>.</li>
      <li><strong>Preview and debug:</strong> save with <kbd>Ctrl+S</kbd>, open <code>index.html</code> in an updated browser, use browser Developer Tools, and read the Console for JavaScript errors. A local development server is useful for fetch/API projects but is not required for a simple static page.</li>
      <li><strong>Verify before sharing:</strong> test links, form labels, keyboard access, mobile widths, and browser console. Do not publish passwords, private data, or API secrets in front-end files.</li>
    </ol>
    <h3>Starter project: three separate files</h3>
    <div class="web-code-grid">
      <div><strong>index.html</strong><pre><code>${escapeCodeSample(webCodeSamples.starterHtml)}</code></pre></div>
      <div><strong>styles.css</strong><pre><code>${escapeCodeSample(webCodeSamples.starterCss)}</code></pre></div>
      <div><strong>script.js</strong><pre><code>${escapeCodeSample(webCodeSamples.starterJs)}</code></pre></div>
    </div>
  </section>
  <section class="ict-links-section web-reference-section" id="web-html-tags">
    <div class="dit-eyebrow">HTML REFERENCE</div><h2>HTML element (tag) reference</h2>
    <p class="ict-section-intro">This table covers the standard and commonly used HTML elements students encounter when building real websites. It is a practical reference, not a list of obsolete browser tags. A tag is the markup such as <code>&lt;p&gt;</code>; an element is the complete structure and content. Most elements use opening and closing tags; void elements such as <code>img</code>, <code>br</code>, <code>meta</code>, and <code>input</code> do not have closing tags.</p>
    <div class="web-table-wrap"><table class="web-reference-table"><thead><tr><th scope="col">Tag / element</th><th scope="col">Syntax example</th><th scope="col">Purpose</th><th scope="col">Real-world use</th></tr></thead><tbody>${webHtmlTagRows.map(([tag, syntax, purpose, use]) => `<tr><th scope="row"><code>&lt;${tag}&gt;</code></th><td><code>${escapeCodeSample(syntax)}</code></td><td>${purpose}</td><td>${use}</td></tr>`).join("")}</tbody></table></div>
    <p class="ict-reference-note"><strong>Important:</strong> <code>&lt;!doctype html&gt;</code> is a declaration, not an element. Avoid obsolete tags such as <code>font</code>, <code>center</code>, and <code>marquee</code>; use CSS and semantic HTML instead. SVG has its own element vocabulary and is embedded inside HTML.</p>
  </section>
  <section class="ict-links-section web-reference-section" id="web-html-attributes">
    <div class="dit-eyebrow">ATTRIBUTE REFERENCE</div><h2>Important HTML attributes</h2>
    <p class="ict-section-intro">Attributes go inside an element's opening tag as name/value pairs. Global attributes can be used on many elements; other attributes apply only to specific elements. Boolean attributes are true when present. Always quote attribute values and use valid element-specific attributes.</p>
    <div class="web-table-wrap"><table class="web-reference-table"><thead><tr><th scope="col">Attribute</th><th scope="col">Where used</th><th scope="col">Purpose</th><th scope="col">Syntax</th></tr></thead><tbody>${webAttributeRows.map(([name, applies, purpose, syntax]) => `<tr><th scope="row"><code>${name}</code></th><td>${applies}</td><td>${purpose}</td><td><code>${escapeCodeSample(syntax)}</code></td></tr>`).join("")}</tbody></table></div>
    <h3>Accessible form example using attributes</h3><pre><code>${escapeCodeSample(webCodeSamples.form)}</code></pre>
    <p class="ict-reference-note">The browser's <code>required</code> and <code>type</code> checks help users, but a real server must validate input again. Never trust client-side validation or use a form to collect data you do not need.</p>
  </section>
  <section class="ict-links-section web-reference-section" id="web-css-examples">
    <div class="dit-eyebrow">CSS WITH CODE</div><h2>Core CSS topics and syntax</h2>
    <p class="ict-section-intro">CSS rules select HTML elements and assign styles. Put reusable rules in an external stylesheet and test at multiple screen sizes.</p>
    <div class="web-code-grid">
      <div><strong>Selectors, comments, and colors</strong><pre><code>${escapeCodeSample(webCodeSamples.cssSelectors)}</code></pre></div>
      <div><strong>Box model, size, margin, padding</strong><pre><code>${escapeCodeSample(webCodeSamples.cssBox)}</code></pre></div>
      <div><strong>Fonts, text, links, lists, tables</strong><pre><code>${escapeCodeSample(webCodeSamples.cssText)}</code></pre></div>
      <div><strong>Display, position, overflow, opacity</strong><pre><code>${escapeCodeSample(webCodeSamples.cssLayout)}</code></pre></div>
      <div><strong>Responsive navigation and dropdown</strong><pre><code>${escapeCodeSample(webCodeSamples.cssResponsive)}</code></pre></div>
    </div>
  </section>
  <section class="ict-links-section web-reference-section" id="web-javascript-notes">
    <div class="dit-eyebrow">JAVASCRIPT IN DEPTH</div><h2>JavaScript notes, syntax, and programs</h2>
    <p class="ict-section-intro">JavaScript adds behavior to web pages. Start with values and functions, then connect events to the DOM. Keep code in an external file loaded with <code>defer</code>; use the browser console to inspect errors.</p>
    <div class="web-js-lessons">
      <article><h3>1. Statements, comments, output, and linking</h3><p>Statements perform work; expressions produce values. Use comments for intent. <code>console.log</code> is for developer diagnostics, not the visible user interface.</p><pre><code>${escapeCodeSample(webCodeSamples.jsIntro)}</code></pre><p>Load it with <code>&lt;script src="script.js" defer&gt;&lt;/script&gt;</code> so the browser parses the HTML before the script runs.</p></article>
      <article><h3>2. Variables, data types, and conversion</h3><p>Prefer <code>const</code> for bindings that are not reassigned and <code>let</code> for reassigned values. Common values include string, number, boolean, null, undefined, array, and object. Use <code>Number()</code> and verify the result.</p><pre><code>${escapeCodeSample(webCodeSamples.jsVars)}</code></pre></article>
      <article><h3>3. Operators and safe comparisons</h3><p>Use arithmetic operators for calculations, comparison operators for tests, and logical operators to combine conditions. Prefer strict equality (<code>===</code>) so JavaScript does not silently coerce unlike types.</p><pre><code>${escapeCodeSample(webCodeSamples.jsOperators)}</code></pre></article>
      <article><h3>4. Conditions: if, else, and switch</h3><p>Use <code>if/else</code> for ranges and <code>switch</code> for several exact alternatives. Validate ranges before assigning a category.</p><pre><code>${escapeCodeSample(webCodeSamples.jsConditions)}</code></pre></article>
      <article><h3>5. Loops and iteration</h3><p>A <code>for</code> loop is useful for counted repetition; <code>while</code> repeats until a condition changes. Always ensure the loop can finish. <code>break</code> exits; <code>continue</code> skips to the next iteration.</p><pre><code>${escapeCodeSample(webCodeSamples.jsLoops)}</code></pre></article>
      <article><h3>6. Functions, parameters, return, and scope</h3><p>Functions package reusable work. Parameters receive inputs; <code>return</code> gives a result back. Variables declared inside a function have local scope.</p><pre><code>${escapeCodeSample(webCodeSamples.jsFunctions)}</code></pre></article>
      <article><h3>7. Arrays and useful built-in functions</h3><p>Arrays hold ordered values starting at index zero. Common methods include <code>push</code>, <code>includes</code>, <code>map</code>, <code>filter</code>, and <code>find</code>. Useful built-ins include <code>Math.abs</code>, <code>Math.random</code>, <code>Math.max</code>, <code>Math.min</code>, <code>parseInt</code>, and <code>parseFloat</code>. Avoid <code>eval</code>; it executes text as code.</p><pre><code>${escapeCodeSample(webCodeSamples.jsArrays)}</code></pre></article>
      <article><h3>8. DOM selection, events, and safe updates</h3><p>Select elements, listen for events, and update text or properties. Use <code>textContent</code> for untrusted text rather than inserting it as HTML with <code>innerHTML</code>.</p><pre><code>${escapeCodeSample(webCodeSamples.jsDom)}</code></pre></article>
      <article><h3>9. Complete program: accessible score checker</h3><p>Place the HTML and script in a page. It validates input, classifies a score, and reports the result without reloading.</p><pre><code>${escapeCodeSample(webCodeSamples.jsScore)}</code></pre></article>
      <article><h3>10. Complete program: list items from a form</h3><p>This example demonstrates form submit events, trimming input, creating elements, and keeping user text out of HTML parsing.</p><pre><code>${escapeCodeSample(webCodeSamples.jsList)}</code></pre></article>
    </div>
  </section>
  <section class="ict-links-section web-reference-section" id="web-vscode-shortcuts">
    <div class="dit-eyebrow">WORK FASTER</div><h2>VS Code shortcuts for Windows</h2>
    <p class="ict-section-intro">Shortcuts can vary by keyboard layout, operating system, and customized keymap. These are common Windows defaults; check the Command Palette or Keyboard Shortcuts editor in your installed VS Code.</p>
    <div class="web-table-wrap"><table class="web-reference-table"><thead><tr><th scope="col">Shortcut</th><th scope="col">Action</th><th scope="col">When it helps</th></tr></thead><tbody>
      <tr><th scope="row"><kbd>Ctrl+Shift+P</kbd> / <kbd>F1</kbd></th><td>Open Command Palette</td><td>Find any editor command without memorizing menus.</td></tr>
      <tr><th scope="row"><kbd>Ctrl+P</kbd></th><td>Quick Open file</td><td>Jump to a file in a larger project.</td></tr>
      <tr><th scope="row"><kbd>Ctrl+Shift+N</kbd></th><td>New VS Code window</td><td>Separate projects into windows.</td></tr>
      <tr><th scope="row"><kbd>Ctrl+N</kbd>, <kbd>Ctrl+O</kbd></th><td>New file, open file</td><td>Create or open source files.</td></tr>
      <tr><th scope="row"><kbd>Ctrl+S</kbd>, <kbd>Ctrl+Shift+S</kbd></th><td>Save, Save As</td><td>Save changes and make a named copy.</td></tr>
      <tr><th scope="row"><kbd>Ctrl+\`</kbd></th><td>Toggle integrated terminal</td><td>Run approved local tools in the project folder.</td></tr>
      <tr><th scope="row"><kbd>Ctrl+/</kbd></th><td>Toggle line comment</td><td>Comment or uncomment selected code.</td></tr>
      <tr><th scope="row"><kbd>Alt+Up</kbd> / <kbd>Alt+Down</kbd></th><td>Move line</td><td>Reorder a line without cut and paste.</td></tr>
      <tr><th scope="row"><kbd>Shift+Alt+Up</kbd> / <kbd>Shift+Alt+Down</kbd></th><td>Copy line up/down</td><td>Duplicate a similar line, then edit it.</td></tr>
      <tr><th scope="row"><kbd>Ctrl+D</kbd></th><td>Add next matching selection</td><td>Edit repeated variable names carefully.</td></tr>
      <tr><th scope="row"><kbd>Ctrl+H</kbd></th><td>Find and replace</td><td>Rename repeated text after reviewing matches.</td></tr>
      <tr><th scope="row"><kbd>Ctrl+Shift+F</kbd></th><td>Search across project</td><td>Find a selector or function across files.</td></tr>
      <tr><th scope="row"><kbd>Shift+Alt+F</kbd></th><td>Format document</td><td>Format code when a formatter is available/configured.</td></tr>
      <tr><th scope="row"><kbd>Ctrl+Space</kbd></th><td>Trigger suggestions</td><td>Request completion suggestions while coding.</td></tr>
      <tr><th scope="row"><kbd>Ctrl+Shift+X</kbd></th><td>Open Extensions</td><td>Review and install a needed trusted extension.</td></tr>
      <tr><th scope="row"><kbd>Ctrl+B</kbd></th><td>Toggle sidebar</td><td>Gain editor space while keeping the project open.</td></tr>
      <tr><th scope="row"><kbd>F5</kbd> / <kbd>Shift+F5</kbd></th><td>Start / stop debugging</td><td>Debug when a browser or runtime configuration is set up.</td></tr>
      <tr><th scope="row"><kbd>Ctrl+Shift+M</kbd></th><td>Open Problems panel</td><td>Review reported diagnostics.</td></tr>
    </tbody></table></div>
    <p class="ict-reference-note"><strong>Emmet examples:</strong> type <code>!</code> then accept the HTML boilerplate suggestion; <code>ul&gt;li*3</code> expands to a list with three items; <code>.card&gt;h2+p</code> expands a classed div structure. Emmet works only where the editor recognizes the abbreviation—review generated markup instead of blindly accepting it.</p>
  </section>`;

function renderRemainingDitGuide(subject, guide, courseUrl) {
  const moduleNavigation = guide.modules.map((module, index) =>
    `<a href="#dit-module-${subject.slug}-${index + 1}"><span>${String(index + 1).padStart(2, "0")}</span>${module.title}</a>`
  ).join("");
  const webReferenceNavigation = subject.slug === "web-development"
    ? `<a href="#web-vscode-setup"><span>SETUP</span>VS Code setup</a><a href="#web-html-tags"><span>HTML</span>Tag reference</a><a href="#web-html-attributes"><span>ATTR</span>Attributes</a><a href="#web-css-examples"><span>CSS</span>CSS examples</a><a href="#web-javascript-notes"><span>JS</span>JavaScript notes</a><a href="#web-vscode-shortcuts"><span>KEYS</span>VS Code shortcuts</a>`
    : "";
  const supplementaryNavigation = ditSupplementaryNotes[subject.slug]
    ? `<a href="#dit-extended-notes-${subject.slug}"><span>MORE</span>Extended study notes</a>`
    : "";
  const modules = guide.modules.map((module, index) => `
    <details class="ict-module" id="dit-module-${subject.slug}-${index + 1}" ${index === 0 ? "open" : ""}>
      <summary><span class="ict-module-number">MODULE ${String(index + 1).padStart(2, "0")}</span><span class="ict-module-title">${module.title}</span><span class="ict-module-meta">${module.weeks} ${module.weeks === 1 ? "week" : "weeks"} · ${module.hours} hours</span></summary>
      <div class="ict-module-content">
        <p class="ict-module-intro">${module.introduction}</p>
        ${module.lessons.map((lesson) => `<section class="ict-lesson"><h3>${lesson.title}</h3><p>${lesson.text}</p>${lesson.points ? `<ul>${lesson.points.map((point) => `<li>${point}</li>`).join("")}</ul>` : ""}</section>`).join("")}
        <div class="ict-practice"><strong>Practice task</strong><p>${module.practice}</p></div>
      </div>
    </details>
  `).join("");
  const labs = guide.labs.map((lab, index) => `
    <details class="ict-lab">
      <summary><span>${String(index + 1).padStart(2, "0")}</span>${lab.title}</summary>
      <ol>${lab.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
    </details>
  `).join("");
  const resources = guide.links.map(([title, description, url]) =>
    `<a href="${url}" target="_blank" rel="noopener noreferrer"><strong>${title}</strong><span>${description}</span><b>Open resource ↗</b></a>`
  ).join("");
  const moduleCount = guide.modules.length;
  const practicalHours = guide.modules.reduce((total, module) => total + module.hours, 0);

  return `<section class="dit-subject-hero dit-page-width"><a class="dit-breadcrumb" href="${courseUrl}">← All DIT subjects</a><div class="dit-eyebrow">${subject.part.toUpperCase()} · DIPLOMA IN INFORMATION TECHNOLOGY</div><span class="dit-card-icon dit-subject-icon" aria-hidden="true">${subject.icon}</span><h1>${subject.title}</h1><p>${subject.summary}</p><div class="dit-course-stats"><span>${moduleCount} curriculum modules</span><span>${practicalHours} contact hours</span><span>${subject.part} · KPI Learning Platform</span></div></section>
  <section class="ict-notes-layout dit-page-width" aria-label="${subject.nav} course notes">
    <aside class="ict-notes-nav">
      <div class="ict-notes-nav-label">COURSE CONTENTS</div>
      <nav aria-label="${subject.nav} modules">${moduleNavigation}${subject.slug === "ms-office" ? `<a href="#ms-office-shortcuts"><span>KEYS</span>Office keyboard shortcuts</a>` : ""}${webReferenceNavigation}${supplementaryNavigation}<a href="#dit-practical-labs-${subject.slug}"><span>LAB</span>Practical lab guide</a><a href="#dit-learning-links-${subject.slug}"><span>LINK</span>Learning links</a></nav>
      <a class="ict-notes-back" href="${courseUrl}">← All DIT subjects</a>
    </aside>
    <div class="ict-notes-main">
      <section class="ict-learning-outcomes">
        <div class="dit-eyebrow">COURSE LEARNING GUIDE</div>
        <h2>Learn the concepts, then put them into practice.</h2>
        <p>${guide.outcomes} Work through the modules in order, complete each practice task, and follow the safety, licensing, and privacy guidance for the lab.</p>
        <div class="ict-outcome-grid"><div><strong>01</strong><span>Build the subject foundations step by step.</span></div><div><strong>02</strong><span>Practice core concepts with guided activities.</span></div><div><strong>03</strong><span>Review results and explain your decisions.</span></div><div><strong>04</strong><span>Use trusted references to continue learning.</span></div></div>
      </section>
      <section class="ict-module-list" aria-label="${subject.nav} learning modules">${modules}</section>
      ${subject.slug === "web-development" ? webReferenceHtml : ""}
      ${renderSupplementaryNotes(subject.slug)}
      <section class="ict-labs-section" id="dit-practical-labs-${subject.slug}">
        <div class="dit-eyebrow">HANDS-ON LEARNING</div><h2>Practical lab guide</h2>
        <p class="ict-section-intro">Use instructor-approved equipment, software, files, and sample data. Confirm permissions before installing, publishing, or changing shared resources.</p>
        <div class="ict-lab-list">${labs}</div>
      </section>
      <section class="ict-links-section" id="dit-learning-links-${subject.slug}">
        <div class="dit-eyebrow">CONTINUE LEARNING</div><h2>Trusted learning links</h2>
        <p class="ict-section-intro">External resources open in a new tab. Check the current software version, license, and course instructions before following a download or tutorial.</p>
        <div class="ict-resource-grid">${resources}</div>
      </section>
    </div>
  </section>`;
}

function addDitFooterPortrait() {
  const footerMain = document.querySelector(".footer-main");
  const footerBrand = footerMain?.querySelector(".footer-brand");
  if (!footerMain || !footerBrand || footerMain.querySelector(".footer-educator")) return;
  const courseScript = [...document.scripts].find((script) => script.src.includes("dit-course.js"));
  if (!courseScript) return;
  const portrait = document.createElement("figure");
  portrait.className = "footer-educator";
  const image = document.createElement("img");
  image.src = new URL("../../assets/images/about-abid.png", courseScript.src).href;
  image.alt = "Abid Mehmood";
  image.loading = "lazy";
  const caption = document.createElement("figcaption");
  caption.innerHTML = "<strong>Abid Mehmood</strong><span>Programmer · Web Designer · DIT Instructor</span>";
  portrait.append(image, caption);
  footerBrand.insertAdjacentElement("afterend", portrait);
}

function renderDitCourse() {
  const mount = document.querySelector("#dit-course-content");
  if (!mount) return;
  addDitFooterPortrait();
  const subjectSlug = document.body.dataset.subject;
  if (!subjectSlug) {
    const parts = ["Part I", "Part II"];
    mount.innerHTML = `<section class="dit-course-hero dit-page-width"><div class="dit-eyebrow">KPI LEARNING PLATFORM · DIT PROGRAM</div><h1>Diploma in <span>Information Technology.</span></h1><p>Explore the DIT subjects offered across Part I and Part II. Dedicated subject pages are ready; detailed lesson outlines and practical guides will be added as they are provided.</p><div class="dit-course-stats"><span>10 subjects</span><span>Part I · 5 subjects</span><span>Part II · 5 subjects</span></div></section><section class="dit-subject-sections dit-page-width">${parts.map((part) => `<section class="dit-part-section"><div class="dit-part-heading"><div><div class="dit-eyebrow">${part.toUpperCase()}</div><h2>${part} subjects</h2></div><span>${ditCourseSubjects.filter((subject) => subject.part === part).length} subjects</span></div><div class="dit-course-grid">${ditCourseSubjects.filter((subject) => subject.part === part).map((subject) => `<a class="dit-course-card" href="subjects/${subject.slug}/index.html"><span class="dit-card-icon" aria-hidden="true">${subject.icon}</span><span class="dit-card-part">${part}</span><h3>${subject.title}</h3><p>${subject.summary}</p><strong>Open subject page <span>↗</span></strong></a>`).join("")}</div></section>`).join("")}</section><section class="dit-course-note dit-page-width"><strong>Course pages are being prepared.</strong><p>These pages provide a clear place for each subject. Detailed outlines, practical steps, and learning resources will be added when the subject content is supplied.</p></section>`;
    mount.querySelector(".dit-course-hero > p").textContent = "Explore all ten DIT subjects across Part I and Part II. Each course page now includes curriculum-based notes, guided practice, and useful learning resources.";
    mount.querySelector(".dit-course-note strong").textContent = "All ten subject pages are ready to explore.";
    mount.querySelector(".dit-course-note p").textContent = "Start with the theory modules, complete the supervised practical activities, and use the linked references to continue learning. Follow your instructor's guidance for lab equipment, software, and project work.";
    document.title = "Diploma in Information Technology — KPI Learning Platform";
    return;
  }
  const subject = ditCourseSubjects.find((item) => item.slug === subjectSlug);
  if (!subject) return;
  const courseUrl = document.querySelector(".dit-subject-nav .dit-subject-overview")?.href || new URL("../../index.html", location.href).href;
  if (subjectSlug === "ict") {
    mount.innerHTML = `<section class="dit-subject-hero dit-page-width"><a class="dit-breadcrumb" href="${courseUrl}">← All DIT subjects</a><div class="dit-eyebrow">${subject.part.toUpperCase()} · DIPLOMA IN INFORMATION TECHNOLOGY</div><span class="dit-card-icon dit-subject-icon" aria-hidden="true">${subject.icon}</span><h1>${subject.title}</h1><p>A practical foundation in computer hardware, software, operating systems, storage, the Internet, and responsible digital skills.</p><div class="dit-course-stats"><span>7 curriculum modules</span><span>120 contact hours</span><span>40 theory · 80 practical</span></div></section>${renderIctNotes(courseUrl)}`;
    document.title = `${subject.nav} Notes and Practical Labs — KPI Learning Platform`;
    return;
  }
  if (subjectSlug === "ms-office") {
    mount.innerHTML = `<section class="dit-subject-hero dit-page-width"><a class="dit-breadcrumb" href="${courseUrl}">← All DIT subjects</a><div class="dit-eyebrow">${subject.part.toUpperCase()} · DIPLOMA IN INFORMATION TECHNOLOGY</div><span class="dit-card-icon dit-subject-icon" aria-hidden="true">${subject.icon}</span><h1>${subject.title}</h1><p>Practical lessons in Word, Excel, PowerPoint, and Access—from creating professional documents and spreadsheets to presentations and small databases.</p><div class="dit-course-stats"><span>5 curriculum modules</span><span>120 contact hours</span><span>40 theory · 80 practical</span></div></section>${renderMsOfficeNotes(courseUrl)}`;
    document.title = `${subject.nav} Notes and Practical Labs — KPI Learning Platform`;
    return;
  }
  if (subjectSlug === "computer-networks") {
    mount.innerHTML = `<section class="dit-subject-hero dit-page-width"><a class="dit-breadcrumb" href="${courseUrl}">← All DIT subjects</a><div class="dit-eyebrow">${subject.part.toUpperCase()} · DIPLOMA IN INFORMATION TECHNOLOGY</div><span class="dit-card-icon dit-subject-icon" aria-hidden="true">${subject.icon}</span><h1>${subject.title}</h1><p>Understand network concepts, devices, cabling, models, IP addressing, protocols, and hands-on LAN configuration with a simulator.</p><div class="dit-course-stats"><span>8 curriculum modules</span><span>120 contact hours</span><span>40 theory · 80 practical</span></div></section>${renderNetworkNotes(courseUrl)}`;
    document.title = `${subject.nav} Notes and Practical Labs — KPI Learning Platform`;
    return;
  }
  const remainingGuide = remainingDitGuides[subjectSlug];
  if (remainingGuide) {
    mount.innerHTML = renderRemainingDitGuide(subject, remainingGuide, courseUrl);
    document.title = `${subject.nav} Notes and Practical Labs — KPI Learning Platform`;
    return;
  }
  mount.innerHTML = `<section class="dit-subject-hero dit-page-width"><a class="dit-breadcrumb" href="${courseUrl}">← All DIT subjects</a><div class="dit-eyebrow">${subject.part.toUpperCase()} · DIPLOMA IN INFORMATION TECHNOLOGY</div><span class="dit-card-icon dit-subject-icon" aria-hidden="true">${subject.icon}</span><h1>${subject.title}</h1><p>${subject.summary}</p><div class="dit-course-stats"><span>${subject.part}</span><span>Course outline to be added</span><span>KPI Learning Platform</span></div></section><section class="dit-subject-body dit-page-width"><article class="dit-outline-placeholder"><div class="dit-eyebrow">SUBJECT LEARNING PAGE</div><h2>Detailed lessons are coming soon.</h2><p>This dedicated page is ready for the complete subject outline, explanations, practical exercises, project files, and recommended resources.</p><p>The subject name and placement are based on the DIT scheme of studies provided. Detailed content has not been added yet, so no syllabus topics are assumed here.</p><a class="dit-back-link" href="${courseUrl}">Browse all ten DIT subjects <span>↗</span></a></article><aside class="dit-course-aside"><span>YOUR COURSE</span><strong>Diploma in Information Technology</strong><p>Part I and Part II subject pages in one place.</p><a href="${courseUrl}">View the DIT course index →</a></aside></section>`;
  document.title = `${subject.nav} — KPI Learning Platform`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderDitCourse();
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (menuButton && nav && menuButton.dataset.menuBound !== "true") {
    menuButton.dataset.menuBound = "true";
    menuButton.addEventListener("click", () => {
      const expanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!expanded));
      menuButton.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
      nav.classList.toggle("is-open", !expanded);
    });
  }
});
