import { NextRequest, NextResponse } from "next/server";
import admin from "@/lib/firebaseAdmin";

export const getProjects = async (req: NextRequest) => {
  if (req.method === "GET") {
    const uid = req.nextUrl.searchParams.get("uid");
    if (!uid) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    try {
      const userRecord = await admin.auth().getUser(uid);
      const userProfile = {
        uid: userRecord.uid,
        email: userRecord.email,
        displayName: userRecord.displayName,
        // Add other profile fields as needed
      };
      return NextResponse.json(userProfile, { status: 200 });
    } catch (error) {
      console.error("Error fetching user profile:", error);
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  } else {
    return new NextResponse(`Method ${req.method} Not Allowed`, {
      status: 405,
      headers: { Allow: "GET" },
    });
  }
};
