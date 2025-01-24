// import { useState } from "react";

// const BlogForm = ({ onSubmit, initialData }) => {
//   const [title, setTitle] = useState(initialData?.title || "");
//   const [description, setDescription] = useState(initialData?.description || "");
//   const [media, setMedia] = useState(initialData?.media || "");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ title, description, media });
//     setTitle("");
//     setDescription("");
//     setMedia("");
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         required
//       />
//       <textarea
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         required
//       />
//       <input
//         type="url"
//         placeholder="Media URL"
//         value={media}
//         onChange={(e) => setMedia(e.target.value)}
//         required
//       />
//       <button type="submit">{initialData ? "Update Blog" : "Add Blog"}</button>
//     </form>
//   );
// };

// export default BlogForm;
