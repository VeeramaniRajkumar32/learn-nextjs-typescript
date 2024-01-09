'use client'
import { paramsType } from '@/types/project.type'

export default function Page({ params }:{ params: paramsType }) {
    
    return <div>
        <h1>{params.slug}</h1>
    </div>
}