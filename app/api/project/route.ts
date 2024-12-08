import uploadFile from "@/lib/uploadFile";
import { NextResponse } from "next/server";
import { database } from "../../../lib/firebaseConfig";
import { ref, push, set, child, get, remove } from "firebase/database";

// -----GET Method---------
export const GET = async () => {
  try {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, "projects"));

    const data = snapshot.val();
    return NextResponse.json({
      success: true,
      method: "Get",
      data,
    });
  } catch (error: any) {
    console.error("Error fetching data: ", error);
    return NextResponse.json({
      success: false,
      method: "Get",
      error: error.message,
    });
  }
};

// -----POST Method---------
export const POST = async (req: Request, res: Response) => {
  try {
    const formData = await req.formData();

    const files: File[] = formData.getAll("file") as File[];
    const file: File | undefined = files[0];

    const filePath = `./public/images/${Date.now()}-${file.name}`;

    const uploadStatus = await uploadFile(file, filePath);

    if (!uploadStatus) {
      return NextResponse.json({ status: "false", data: file.size });
    }

    const data = {
      name: formData.get("name"),
      desc: formData.get("desc"),
      tech: formData.get("tech"),
      projectLink: formData.get("link"),
      image_path: filePath,
    };

    // file Stored Locally
    const newRef = push(ref(database, `projects/${formData.get("type")}`));
    await set(newRef, data);

    return NextResponse.json({
      status: "success",
      message: "File uploaded successfully",
      data,
    });
  } catch (error: any) {
    return NextResponse.json({
      status: "false",
      error: error.message,
    });
  }
};

// -----DELETE Method---------
export const DELETE = async (req: Request) => {
  try {
    // Extract the project ID from the request URL or body
    const url = new URL(req.url);
    const projectId = url.searchParams.get("id");

    if (!projectId) {
      return NextResponse.json({
        status: "false",
        error: "Project ID is required",
      });
    }

    // Construct the reference to the project in Firebase
    const projectRef = ref(database, `projects/${projectId}`);

    // Delete the project
    await remove(projectRef);

    return NextResponse.json({
      status: "success",
      message: "Project deleted successfully",
    });
  } catch (error: any) {
    return NextResponse.json({
      status: "false",
      error: error.message,
    });
  }
};