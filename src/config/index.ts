import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        // write a default title a ai powered website builder suggest something unique and catchy don't use the same words of ai powered website builder give a unique name
        default: "Nova-Builder - AI Powered Website Builder",
        template: `%s | Nova-Builder`
    },
    description: "Nova-Builder is an AI powered website builder that helps you create a website in minutes. No coding skills required. Get started for free!",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "Nova-Builder - AI Powered Website Builder",
        description: "Nova-Builder is an AI powered website builder that helps you create a website in minutes. No coding skills required. Get started for free!",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "@shreyassihasane",
        title: "Nova-Builder - AI Powered Website Builder",
        description: "Nova-Builder is an AI powered website builder that helps you create a website in minutes. No coding skills required. Get started for free!",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    metadataBase: new URL("https://astra-app.vercel.app"),
};
