import { NextRequest, NextResponse } from "next/server";
import { studentSchema } from "../../../../schema/student";
import prisma from "@/db";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validation = studentSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const { data } = validation;

  let student = await prisma.student.findFirst({
    where: {
      OR: [{ email: data.email }, { username: data.username }],
    },
  });

  if (student)
    return NextResponse.json("Student already exist.", { status: 409 });

  console.log(Date.now());

  student = await prisma.student.create({
    data: {
      studentId: data.studentId,
      address: data.address,
      birthday: new Date(data.birthday),
      name: data.name,
      phone: data.phone,
      sex: data.sex,
      surname: data.surname,
      username: data.username,
      email: data.email,
    },
  });

  return NextResponse.json(student, { status: 201 });
};
