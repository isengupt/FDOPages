import React, { useEffect, useState } from 'react';
import { connectField } from 'uniforms';
import { useDropzone } from 'react-dropzone';
import { Cloudinary } from 'meteor/socialize:cloudinary';

const ImageField = ({ onChange, value, ...props }) => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    multiple: false,
    noDrag: true,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file),
        })),
      );
      const reader = new FileReader();
      reader.readAsDataURL(acceptedFiles[0]);
      reader.onload = () => {
        if (reader.result) {
          const logo = Cloudinary.uploadFile(reader.result);
          logo.then((val) => {
            const { url, public_id } = val;
            onChange({
              url,
              public_id,
            });
          });
        }
      };
    },
  });

  const thumbs = files.map(file => (
    <div key={file.name}>
      <div>
        <img src={file.preview} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files],
  );

  const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className="field form-group">
      <label className="control-label">{capitalizeFirstLetter(props.name)}</label>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>{thumbs}</aside>
    </div>
  );
};

export default connectField(ImageField);