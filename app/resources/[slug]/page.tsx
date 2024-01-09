"use client";
import { paramsType } from "@/types/project.type";

export default function ResourcePage({ params }: { params: paramsType }) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>
            Resource Slug <b>{params.slug}</b> params value By Veeramani ❤
            </h1>
        </div>
    );
}
