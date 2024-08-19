import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useRef } from "react";
import { app } from "../firebase";

export const Profile = () => {
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUplodError] = useState(false);
  const [formData, setFormData] = useState({});
  const { currentUser } = useSelector((state) => state.user);

  console.log(filePerc);
  //fire base storage
  // allow read;
  // allow write: if
  // request.resource.size <2*1024*1024 &&
  // request.resource.contentType.matches('image/.*')

  useEffect(() => {
    if (file) {
      handleFile(file);
    }
  }, [file]);

  const handleFile = (file) => {
    const storage = getStorage(app);
    const filename = new Date().getTime() + file.name;
    const storageRef = ref(storage, filename);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },

      (error) => {
        setFileUplodError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, profilepic: downloadURL })
        );
      }
    );
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
        />
        <img
          onClick={() => fileRef.current.click()}
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
          src={formData.profilepic || currentUser.profilepic}
          alt="profile"
        />

        <p className="text-sm self-center">
          {fileUploadError ? (
            <span className="text-red-700">Error upload </span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className="text-slate-700">{`Uploading ${filePerc}%`}</span>
          ) : filePerc === 100 ? (
            <span className="text-green-700">Image uploaded successfully</span>
          ) : (
            ""
          )}
        </p>

        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg "
          id="username"
          // onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg "
          id="email"
          // onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg "
          id="password"
          // onChange={handleChange}
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account </span>
        <span className="text-red-700 cursor-pointer">Sign out </span>
      </div>
    </div>
  );
};
