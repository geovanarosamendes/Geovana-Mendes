"use client";

import { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Dialog from "@mui/material/Dialog";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!images.length) {
    return null;
  }

  return (
    <>
      <ImageList cols={3} gap={16} className="mui-project-gallery">
        {images.map((image) => (
          <ImageListItem
            key={image}
            className="mui-project-gallery-item"
            onClick={() => setSelectedImage(image)}
          >
            <img src={image} alt={`Imagem do projeto ${title}`} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>

      <Dialog
        open={Boolean(selectedImage)}
        onClose={() => setSelectedImage(null)}
        maxWidth="lg"
      >
        {selectedImage && (
          <img
            src={selectedImage}
            alt={`Imagem ampliada do projeto ${title}`}
            className="mui-project-gallery-preview"
          />
        )}
      </Dialog>
    </>
  );
}