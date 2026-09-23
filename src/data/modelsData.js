/**
 * ============================================================================
 * 3D MODELLING & ART DATA
 * ============================================================================
 * To add a new 3D render/model:
 * 1. Add your render image to the `/public` folder.
 * 2. Copy one of the objects below and paste it at the top of the array.
 * 3. Update the title, date, software tools, YouTube link, and render image path.
 * ============================================================================
 */

export const MODELS_DATA = [
    {
        id: "silence-of-solitude",
        name: "Silence of Solitude",
        creation_date: "2026",
        image_src: "/Untitled.png",
        category: "Environment Art",
        slogan: "A calm, desolate interior capturing atmospheric lighting.",
        description: "Created in Blender using Cycles rendering. Features cinematic volumetric fog, moody lighting, and detailed textures.",
        software: ["Blender", "Cycles", "Photoshop", "Lighting"],
        video_url: "https://youtube.com/shorts/bLof_CE92hw?si=8EluIHKXcBj4dTrL"
    },
    {
        id: "echoes-in-the-void",
        name: "Echoes in the Void",
        creation_date: "2026",
        image_src: "/headphones2.png",
        category: "3D Artwork",
        slogan: "Some sounds are meant to remain in the dark.",
        description:
            "A cinematic 3D composition exploring silence, isolation, and hidden thoughts. Built with atmospheric lighting, metallic materials, and subtle reflections to create a scene that feels suspended between reality and memory.",
        software: ["Blender", "Eevee", "Hard Surface Modelling", "Materials", "Lighting"],
        video_url: "https://youtube.com/shorts/bLof_CE92hw?si=8EluIHKXcBj4dTrL"
    },
    {
        id: "design-space-leak",
        name: "Design Space Leak",
        creation_date: "2026",
        image_src: "/HALLWAY_IMAGE4.png",
        category: "Architectural Sci-Fi",
        slogan: "Atmospheric neon corridor exploring depth and contrast.",
        description: "Sci-fi environment study exploring color temperature, contrast, and interior architecture pacing.",
        software: ["Blender", "Cycles", "Compositing"],
        video_url: "https://youtube.com/shorts/bLof_CE92hw?si=8EluIHKXcBj4dTrL"
    },
    {
        id: "practice-makes-perfect",
        name: "Practice Makes Perfect",
        creation_date: "2026",
        image_src: "/female3.png",
        category: "Character Sculpt",
        slogan: "High-poly character portrait study with natural hair styling.",
        description: "Sculpting and topology study focusing on facial anatomy, expressive features, and realistic skin shading.",
        software: ["Blender", "Sculpt Mode", "Hair Particles"],
        video_url: "https://youtube.com/shorts/H6c_pa8Y_k8?si=EWGHjKKobxeWuPRC"
    },
    {
        id: "press",
        name: "Press",
        creation_date: "2026",
        image_src: "/female4.png",
        category: "Character Art",
        slogan: "Stylized aesthetic portrait with precision lighting.",
        description: "Exploration of silhouette, edge rim lighting, and character personality through digital 3D sculpting.",
        software: ["Blender", "3D Modeling", "Lighting"],
        video_url: "https://youtube.com/shorts/bLof_CE92hw?si=8EluIHKXcBj4dTrL"
    },
    {
        id: "my-city",
        name: "Neon Metropolis",
        creation_date: "2026",
        image_src: "/mycity.png",
        category: "Cityscape",
        slogan: "Sprawling cyberpunk metropolis bathed in neon hues.",
        description: "Large-scale urban environment featuring towering skyscrapers, flying conduits, and glowing billboard advertisements.",
        software: ["Blender", "Environment Art", "Geometry Nodes"],
        video_url: "https://youtube.com/shorts/bLof_CE92hw?si=8EluIHKXcBj4dTrL"
    }
];
