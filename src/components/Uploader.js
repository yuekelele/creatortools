import React from "react";
import ImageUploader from "react-images-upload";

export default function Uploader(props) {
    const onDrop = (files) => {
        props.handleChange(files);
    };

    return (
      <ImageUploader
        withIcon={false}
        withLabel={false}
        withPreview={true}
        buttonText={"Add Photo (max 5MB)"}
        fileSizeError={"File size is too big!"}
        fileTypeError={"This extension is not supported!"}
        onChange={onDrop}
        imgExtension={props.imgExtension}
        maxFileSize={props.maxFileSize}
        fileContainerStyle={props.fileContainerStyle}
        buttonStyles={props.buttonStyles}
      />
    );
};