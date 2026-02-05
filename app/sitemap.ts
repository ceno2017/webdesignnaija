import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://webdesignnaija.com/",
      lastModified: new Date(),
    },
  ];
}
