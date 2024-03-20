import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import SelectTags from "../components/Article/SelectTags";
import Field from "../components/shared/Field";

export default function AddArticle() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm();
  const [avatarURL, setAvatarURL] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const handleSelectTags = (e, name) => {
    if (e.target.checked) {
      setSelectedTags([...selectedTags, name]);
    }
  };

  const imageUploadRef = useRef(null);
  const handleUploadImage = (e) => {
    const uploadedFile = e.target.files[0];
    const cachedURL = URL.createObjectURL(uploadedFile);
    setAvatarURL(cachedURL);
    setValue("photo", imageUploadRef.current.files);
  };
  const handleOpenFile = () => {
    imageUploadRef.current.addEventListener("change", handleUploadImage);
    imageUploadRef.current.click();
  };
  const handleAddArticle = (formData) => {
    if (selectedTags?.length < 2) {
      return setError("tags", { message: "3 tags is required" });
    }
    console.log(formData);
  };

  return (
    <main>
      <section>
        <div className="container">
          <form
            onSubmit={handleSubmit(handleAddArticle)}
            className="createArticle"
          >
            <Field error={errors.title}>
              <input
                {...register("title", { required: "Title field is required" })}
                type="text"
                id="title"
                name="title"
                placeholder="Enter your article title"
              />
            </Field>
            <Field error={errors.photo}>
              <div
                onClick={handleOpenFile}
                className="grid place-items-center bg-slate-600/20 h-[150px] rounded-md my-4"
              >
                {avatarURL && (
                  <img
                    className="h-[150px] w-full rounded-md"
                    src={avatarURL}
                    alt=""
                  />
                )}
                <div className="absolute flex items-center gap-4 transition-all cursor-pointer hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>

                  <input
                    {...register("photo", {
                      required: "Article image is required",
                    })}
                    ref={imageUploadRef}
                    className="hidden"
                    type="file"
                    name="photo"
                    id=""
                  />
                  <p>{avatarURL ? "Edit Your Image" : "Upload Your Image"}</p>
                </div>
              </div>
            </Field>

            <Field error={errors.tags}>
              <>
                <label
                  htmlFor="tags"
                  className="block mb-3 text-[#9CA3AF] text-lg"
                >
                  Select at least 3 tags
                </label>
                <SelectTags onSelect={handleSelectTags} />
              </>
            </Field>

            <Field error={errors.description}>
              <textarea
                {...register("description", {
                  required: "Description field is required",
                })}
                id="description"
                name="description"
                placeholder="Write your article description"
                rows="8"
              ></textarea>
            </Field>

            <button className="px-6 py-2 text-white transition-all duration-200 bg-indigo-600 rounded-md md:py-3 hover:bg-indigo-700">
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
