"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputField from "../InputField";
import { IoMdCloudUpload } from "react-icons/io";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  email: z.string().email({ message: "Invalid email address!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" }),
  firstName: z.string().min(1, { message: "First Name is Required!" }),
  lastName: z.string().min(1, { message: "Last Name is Required!" }),
  phone: z.number().min(1, { message: "Phone is Required!" }),
  address: z.string().min(1, { message: "Address is Required!" }),
  bloodType: z.string().min(1, { message: "Blood Type is Required!" }),
  birthday: z.date({ message: "Birthday is Required!" }),
  sex: z.enum(["male", "female"], { message: "Sex is Required!" }),
  img: z.instanceof(File, { message: "Image is required" }),
});

type Inputs = z.infer<typeof schema>;

const TeacherForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl text-[#FFFB15] font-bold">Create a new Teacher</h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Username"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors.username}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          defaultValue={data?.email}
          register={register}
          error={errors.username}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          defaultValue={data?.password}
          register={register}
          error={errors.username}
        />
      </div>

      <span className="text-xs text-gray-400 font-medium">
        Personal Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="First Name"
          name="firstname"
          defaultValue={data?.firstName}
          register={register}
          error={errors.firstName}
        />
        <InputField
          label="Last Name"
          name="lastname"
          defaultValue={data?.lastName}
          register={register}
          error={errors.lastName}
        />
        <InputField
          label="Phone"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors.phone}
        />
        <InputField
          label="Address"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors.address}
        />
        <InputField
          label="Blood Type"
          name="bloodType"
          defaultValue={data?.bloodType}
          register={register}
          error={errors.bloodType}
        />
        <InputField
          label="Birthday"
          name="birthday"
          defaultValue={data?.birthday}
          register={register}
          error={errors.birthday}
          type="date"
        />

        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-[#FFFB15]">Sex</label>
          <select
            className="ring-[1.5px] ring-gray-300 text-[#FFFB15] p-2 rounded-md text-sm w-full"
            {...register("sex")}
            defaultValue={data?.sex}
          >
            <option className="text-[#083765] font-bold" value="male">
              Male
            </option>
            <option className="text-[#083765] font-bold" value="female">
              Female
            </option>
          </select>
          {errors.sex?.message && (
            <p className="text-xs text-red-400">
              {errors.sex.message.toString()}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
          <label
            className="text-xs text-[#FFFB15] flex items-center gap-2 cursor-pointer"
            htmlFor="img"
          >
            <IoMdCloudUpload className="text-[28px] text-[#FFFB15] font-bold" />
            <span>Upload a photo</span>
          </label>
          <input type="file" id="img" {...register("img")} className="hidden" />
          {errors.img?.message && (
            <p className="text-xs text-red-400">
              {errors.img.message.toString()}
            </p>
          )}
        </div>
      </div>
      <button className="bg-[#FFFB15] text-[#083765] font-bold p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default TeacherForm;
