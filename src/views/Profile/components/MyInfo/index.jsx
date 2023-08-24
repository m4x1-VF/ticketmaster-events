import { useEffect } from "react";
import { useForm } from "react-hook-form";

const MyInfo = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    try {
      const userData = JSON.parse(localStorage.getItem("userData")) || {};
      setValue("name", userData?.name);
      setValue("email", userData?.email);
      setValue("age", userData?.age);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleFormSubmint = (data) => {
    try {
      localStorage.setItem("userData", JSON.stringify(data));
      alert("Data saved successfully");
    } catch (error) {
      alert("Error saving data");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit(handleFormSubmint)}
        className="flex flex-col gap-3"
      >
        <label className="flex flex-col">
          Name
          <input
            {...register("name", {
              required: true,
              minLength: 2,
              maxLength: 120,
            })}
            className="w-56 p-2 border-2 border-black mt-1"
          />
        </label>
        <label className="flex flex-col">
          email
          <input
            {...register("email", { required: true, min: 1, max: 120 })}
            className="w-56 p-2 border-2 border-black mt-1"
          />
        </label>
        <label className="flex flex-col">
          Age
          <input
            type="number"
            {...register("age", {
              required: true,
              min: 18,
              max: 99,
              valueAsNumber: true,
            })}
            className="w-56 p-2 border-2 border-black mt-1"
          />
        </label>
        <button
          type="submit"
          className="border-2 border-black p-2 mt-4 hover:bg-slate-400 hover:text-white"
        >
          Save
        </button>
      </form>
    </div>
  );
};
export default MyInfo;
