"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { Calendar as CalendarIcon, CirclePlus, Trash } from "lucide-react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import VideoPlayer from "./VideoPlayer";

import { cn } from "@/lib/utils";
import { TECHNICALS } from "@/constants/technical";
import { ProjectType, TechnicalType } from "@/types";
import { formatDate } from "@/lib";
import { createNewProject } from "@/lib/action.api";

interface PropType {
  categoriesData: string[];
}

const FormSchema = z.object({
  name: z.string().min(5, {
    message: "Project name must be at least 5 characters.",
  }),
  description: z
    .string()
    .min(5, {
      message: "Description must be at least 5 characters.",
    })
    .max(100, {
      message: "Description must not be longer than 100 characters.",
    }),
  released: z.date({
    required_error: "A date of release is required.",
  }),
  github: z
    .string()
    .min(5, {
      message: "Github must be at least 5 characters.",
    })
    .max(100, {
      message: "Github must not be longer than 100 characters.",
    }),
  images: z.array(z.string()).min(1, "At least one image is required"),
  demo: z.string().min(3, {
    message: "Project demo must be at least 3 characters.",
  }),
  technicals: z
    .array(
      z.object({
        name: z.string(),
        logo: z.string(),
        url: z.string(),
      })
    )
    .min(1, "Please select at least one technical"),
  categories: z
    .array(z.string())
    .min(1, "Please select at least one category."),
  features: z.array(z.string()).min(1, "At least one feature is required"),
});

const CreateProjectForm = (props: PropType) => {
  const { categoriesData } = props;

  const categoriesOptions = categoriesData?.map((c: string) => {
    return { label: c, value: c };
  });

  const [selectedTechnicals, setSelectedTechnicals] = useState<TechnicalType[]>(
    []
  );
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [demoLink, setDemoLink] = useState<string>("");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      description: "",
      github: "",
      images: [""],
      demo: "",
      technicals: [],
      categories: [],
    },
  });

  const handleSelectTechnicals = (value: TechnicalType) => {
    setSelectedTechnicals(
      (prev) =>
        prev.some((item) => item.name === value.name)
          ? prev.filter((item) => item.name !== value.name) // Remove if already selected
          : [...prev, value] // Add if not selected
    );
  };

  const handleSelectCategories = (value: string) => {
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const {
    fields: imageFields,
    append: addImage,
    remove: removeImage,
  } = useFieldArray<any>({
    control: form.control,
    name: "images",
  });

  const {
    fields: featureFields,
    append: addfeature,
    remove: removefeature,
  } = useFieldArray<any>({
    control: form.control,
    name: "features",
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    // Format date of release
    const formattedDate: string = formatDate(data.released);
    const newProject: ProjectType = { ...data, released: formattedDate };

    const res = await createNewProject(newProject);
    const { message } = res;
    console.log("New Project Data:", res);

    if (message === "Create project successfully") {
      toast.success(message);
    } else toast.error("Create project failed");

    // Reset the form fields after a successful submission
    form.reset();
    setSelectedTechnicals([]);
    setSelectedCategories([]);
    setDemoLink("");
    form.reset({ images: [], features: [] });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Project name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell something about project"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="released"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Released</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date of release</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="github"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Github</FormLabel>
              <FormControl>
                <Input placeholder="Project github link" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-y-5">
          <FormLabel>Image URL</FormLabel>
          {imageFields.map((field, index) => (
            <div key={field.id} className="flex items-end space-x-4">
              <FormField
                control={form.control}
                name={`images.${index}`}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="Enter image URL" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                variant="destructive"
                type="button"
                onClick={() => removeImage(index)}
              >
                <Trash size={20} />
              </Button>
            </div>
          ))}
          <Button type="button" onClick={() => addImage("")}>
            <CirclePlus className="mr-2 h-4 w-4" />
            Add Image URL
          </Button>
        </div>
        <FormField
          control={form.control}
          name="demo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Demo</FormLabel>
              <FormControl>
                <Input
                  value={demoLink}
                  onChange={(e) => {
                    setDemoLink(e.target.value);
                    field.onChange(e.target.value);
                  }}
                  placeholder="Project demo (recommend youtube link)"
                  // {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {demoLink !== "" && <VideoPlayer src={demoLink} />}
        <FormField
          control={form.control}
          name="technicals"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Technicals</FormLabel>
              <Select
                onValueChange={(value) => {
                  const selectedOption = TECHNICALS.find(
                    (option) => option.name === value
                  );

                  if (selectedOption) {
                    handleSelectTechnicals(selectedOption); // Update selected technicals
                    field.onChange([...selectedTechnicals, selectedOption]); // Update form value
                  }
                }}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select technicals">
                      {selectedTechnicals.length > 0
                        ? selectedTechnicals?.map((t) => t.name).join(", ")
                        : "Select technicals"}
                    </SelectValue>
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {TECHNICALS?.map(
                    (option: { name: string; logo: string; url: string }) => (
                      <SelectItem key={uuidv4()} value={option.name}>
                        {option.name}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="categories"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categories</FormLabel>
              <Select
                onValueChange={(value) => {
                  handleSelectCategories(value);
                  field.onChange([...selectedCategories, value]);
                }}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select categories">
                      {selectedCategories.length > 0
                        ? selectedCategories.join(", ")
                        : "Select categories"}
                    </SelectValue>
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categoriesOptions?.map(
                    (option: { label: string; value: string }) => (
                      <SelectItem key={uuidv4()} value={option.value}>
                        {option.label}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-y-5">
          <FormLabel>Features</FormLabel>
          {featureFields.map((field, index) => (
            <div key={field.id} className="flex items-end space-x-4">
              <FormField
                control={form.control}
                name={`features.${index}`}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="Enter feature" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                variant="destructive"
                type="button"
                onClick={() => removefeature(index)}
              >
                <Trash size={20} />
              </Button>
            </div>
          ))}
          <Button type="button" onClick={() => addfeature("")}>
            <CirclePlus className="mr-2 h-4 w-4" />
            Add Feature
          </Button>
        </div>
        <Button type="submit">Create</Button>
      </form>
    </Form>
  );
};

export default CreateProjectForm;
