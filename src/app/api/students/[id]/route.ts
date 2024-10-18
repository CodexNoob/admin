import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const student = await prisma.student.delete({
    where: {
      id: params.id,
    },
  });

  if (!student)
    return NextResponse.json("Failed to delete student", { status: 500 });

  return NextResponse.json(student, { status: 200 });
};
