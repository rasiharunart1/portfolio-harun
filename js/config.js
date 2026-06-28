/**
 * JavaScript Environment Config Loader - Harun Ar Rasyid Edition
 * Fetches and parses the `.env` file dynamically.
 * Fallbacks to default values if .env cannot be loaded.
 */

const DEFAULTS = {
    SITE_NAME: "Harun Ar Rasyid",
    SITE_TITLE: "Harun Ar Rasyid — IoT & Computer Vision Engineer",
    SITE_ROLE: "IoT Engineer & Computer Vision Developer",
    SITE_BIO: "Building intelligent systems at the intersection of embedded hardware, machine learning, and the web — from ESP32 firmware to YOLO inference pipelines and the dashboards that make the data actionable.",
    SITE_DESCRIPTION: "Personal portfolio of Harun Ar Rasyid — IoT programmer, computer vision engineer, and full-stack developer from Purwokerto, Indonesia.",
    CONTACT_EMAIL: "2211102080@ittelkom-pwt.ac.id",
    CONTACT_PHONE: "+6281234567890",
    CONTACT_WHATSAPP: "https://wa.me/6281234567890",
    CONTACT_LOCATION: "Banyumas, Indonesia",
    CONTACT_GITHUB: "https://github.com/rasiharunart1",
    CONTACT_LINKEDIN: "https://www.linkedin.com/in/harunart",
    CONTACT_INSTAGRAM: "https://instagram.com/harunart",
    LINK_DOWNLOAD_CV: "#",
    IMAGE_LOGO: "",
    IMAGE_HERO_BG: "",
    IMAGE_PROFILE: "assets/images/profile/profil.png",
    
    // Proyek 1
    PROJECT_1_ACTIVE: "true",
    PROJECT_1_CAT: "Computer Vision • IoT",
    PROJECT_1_STATUS: "active",
    PROJECT_1_TITLE: "IoT Fish Counting System",
    PROJECT_1_DESC: "Real-time fish detection and counting running on Raspberry Pi 5 with a YOLO model. Python desktop interface with live stream visualization and data logging.",
    PROJECT_1_TAGS: "Raspberry Pi 5, YOLO, Python, OpenCV",
    PROJECT_1_URL: "https://github.com/rasiharunart1",
    PROJECT_1_IMAGE: "assets/images/projects/project1.jpg",

    // Proyek 2
    PROJECT_2_ACTIVE: "true",
    PROJECT_2_CAT: "Computer Vision • Smart City",
    PROJECT_2_STATUS: "completed",
    PROJECT_2_TITLE: "CCTV Vehicle Counter — Banyumas",
    PROJECT_2_DESC: "Intelligent traffic monitoring pipeline using OpenCV and YOLO on live CCTV footage. Enables data-driven congestion analysis and urban planning for Banyumas city government.",
    PROJECT_2_TAGS: "OpenCV, YOLO, Python",
    PROJECT_2_URL: "https://github.com/rasiharunart1",
    PROJECT_2_IMAGE: "assets/images/projects/project2.jpg",

    // Proyek 3
    PROJECT_3_ACTIVE: "true",
    PROJECT_3_CAT: "IoT • Audio Analysis",
    PROJECT_3_STATUS: "completed",
    PROJECT_3_TITLE: "Audio FFT Monitor & Alert System",
    PROJECT_3_DESC: "ESP32-based device that collects real-time audio FFT data and WAV recordings, transmitted via MQTT and HTTPClient to a Laravel web dashboard with alert notifications.",
    PROJECT_3_TAGS: "ESP32, MQTT, Laravel, FFT",
    PROJECT_3_URL: "https://github.com/rasiharunart1",
    PROJECT_3_IMAGE: "assets/images/projects/project3.jpg",

    // Proyek 4
    PROJECT_4_ACTIVE: "true",
    PROJECT_4_CAT: "IoT • Smart Home",
    PROJECT_4_STATUS: "active",
    PROJECT_4_TITLE: "Serverless Smart Home System",
    PROJECT_4_DESC: "Local-first IoT smart home automation with MQTT broker running on-device. No third-party cloud dependency. Includes RF 433MHz two-way control and solar powerplant monitoring.",
    PROJECT_4_TAGS: "ESP32, MQTT, RF 433MHz, Solar PV",
    PROJECT_4_URL: "https://github.com/rasiharunart1",
    PROJECT_4_IMAGE: "assets/images/projects/project4.jpg",

    // Proyek 5
    PROJECT_5_ACTIVE: "true",
    PROJECT_5_CAT: "PKM-KC • Innovation • IP Registered",
    PROJECT_5_STATUS: "completed",
    PROJECT_5_TITLE: "COBOX — Solar-Powered COD Package Box",
    PROJECT_5_DESC: "PKM-KC 2024: automated package receiving box for COD deliveries, powered by a 50Wp solar panel and secured via RFID and barcode scanner. Registered intellectual property.",
    PROJECT_5_TAGS: "ESP32, Arduino Nano, RFID, Solar 50Wp",
    PROJECT_5_URL: "https://github.com/rasiharunart1",
    PROJECT_5_IMAGE: "assets/images/projects/project5.jpg",

    // Proyek 6
    PROJECT_6_ACTIVE: "true",
    PROJECT_6_CAT: "IoT • Agriculture",
    PROJECT_6_STATUS: "active",
    PROJECT_6_TITLE: "Coffee Dehumidification System",
    PROJECT_6_DESC: "ESP32 system for real-time temperature and humidity monitoring in coffee drying environments, with a web dashboard for remote control, alerts, and historical data logging.",
    PROJECT_6_TAGS: "ESP32, DHT Sensor, Web Dashboard",
    PROJECT_6_URL: "https://github.com/rasiharunart1",
    PROJECT_6_IMAGE: "assets/images/projects/project6.jpg"
};

window.PortfolioConfig = {
    env: { ...DEFAULTS },
    isLocalEnvLoaded: false,

    async init() {
        try {
            const response = await fetch('.env');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const text = await response.text();
            
            // Clear default fallback project keys since a custom .env is successfully loaded
            for (let key in this.env) {
                if (key.startsWith('PROJECT_')) {
                    delete this.env[key];
                }
            }

            this.parseEnv(text);
            this.isLocalEnvLoaded = true;
            console.log("Environment variables (.env) loaded successfully!");
        } catch (error) {
            console.warn(
                "Warning: Could not fetch `.env` dynamically (probably running via file:// protocol or file missing).\n" +
                "Falling back to default settings. Run a local web server to read `.env` changes.\n",
                error
            );
        }
        return this.env;
    },

    parseEnv(text) {
        const lines = text.split('\n');
        for (let line of lines) {
            line = line.trim();
            // Skip empty lines or comments
            if (!line || line.startsWith('#')) {
                continue;
            }

            const separatorIndex = line.indexOf('=');
            if (separatorIndex === -1) {
                continue;
            }

            const key = line.substring(0, separatorIndex).trim();
            let val = line.substring(separatorIndex + 1).trim();

            // Strip trailing inline comments (e.g. value # comment)
            // But preserve hashes in URLs/anchors (which won't have preceding spaces)
            const commentMatch = val.match(/\s+#.*$/);
            if (commentMatch) {
                val = val.substring(0, commentMatch.index).trim();
            }

            // Strip surrounding quotes
            if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
                val = val.slice(1, -1);
            }

            this.env[key] = val;
        }
    },

    get(key, defaultValue = "") {
        return this.env[key] !== undefined ? this.env[key] : defaultValue;
    },

    // Utility to get all projects parsed as structured objects
    getProjects() {
        const projects = [];
        // Scan up to 50 projects to allow skipping/commenting out indices
        for (let index = 1; index <= 50; index++) {
            const activeKey = `PROJECT_${index}_ACTIVE`;
            const titleKey = `PROJECT_${index}_TITLE`;
            const catKey = `PROJECT_${index}_CAT`;
            const statusKey = `PROJECT_${index}_STATUS`;
            const descKey = `PROJECT_${index}_DESC`;
            const tagsKey = `PROJECT_${index}_TAGS`;
            const urlKey = `PROJECT_${index}_URL`;
            const imageKey = `PROJECT_${index}_IMAGE`;
            const videoKey = `PROJECT_${index}_VIDEO`;
            const githubKey = `PROJECT_${index}_GITHUB`;
            const demoKey = `PROJECT_${index}_DEMO`;

            // Skip if there's no title for this project index (e.g. commented out)
            if (this.env[titleKey] === undefined) {
                continue;
            }

            const isActive = this.env[activeKey] !== "false";

            if (isActive) {
                projects.push({
                    id: index,
                    title: this.env[titleKey],
                    category: this.env[catKey] || "Project",
                    status: this.env[statusKey] || "completed",
                    description: this.env[descKey] || "",
                    tags: this.env[tagsKey] ? this.env[tagsKey].split(',').map(t => t.trim()) : [],
                    url: this.env[urlKey] || "#",
                    image: this.env[imageKey] || "",
                    video: this.env[videoKey] || "",
                    github: this.env[githubKey] || this.env[urlKey] || "", // fallback to URL
                    demo: this.env[demoKey] || ""
                });
            }
        }
        return projects;
    }
};
